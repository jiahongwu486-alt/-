import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  validateAnswers,
  computeResult,
  normalizeAmount,
  validatePaymentEvent,
  VALID_OPTIONS,
  LEGAL_PAGES
} from "../waffo-payment.mjs";
import { WaffoClient, buildSignature, verifyWebhookSignature, parseWaffoSignature } from "../lib/waffo-client.mjs";
import { getConfig, assertConfig, missingKeys } from "../lib/env.mjs";

let passed = 0;
let failed = 0;
function ok(cond, name) {
  if (cond) { passed++; console.log("PASS", name); }
  else { failed++; console.log("FAIL", name); }
}

/* 1. answer validation */
const allA = Array(36).fill("a");
ok(validateAnswers(allA).ok === true, "valid 36 answers accepted");
ok(validateAnswers(Array(35).fill("a")).ok === false, "wrong length rejected");
ok(validateAnswers([...Array(35).fill("a"), "z"]).ok === false, "invalid option rejected");
ok(validateAnswers("not-array").ok === false, "non-array rejected");

/* 2. deterministic matching */
const r1 = computeResult(allA);
const r2 = computeResult(allA);
ok(r1.primaryId === r2.primaryId && r1.secondaryId === r2.secondaryId, "matching deterministic");
ok(typeof r1.primaryId === "string" && r1.primaryId.length > 0, "primary match resolved");
ok(VALID_OPTIONS.length === 4, "option set is a/b/c/d");

/* 3. amount normalization + payment event validation */
ok(normalizeAmount("1.99") === "1.99", "amount string normalized");
ok(normalizeAmount(1.99) === "1.99", "amount number normalized");
const baseEvent = {
  eventType: "order.completed",
  data: { orderStatus: "completed", paymentStatus: "succeeded", currency: "USD", chargedAmount: "1.99" }
};
ok(validatePaymentEvent(baseEvent, { currency: "USD", amount: "1.99" }).ok === true, "valid payment accepted");
ok(validatePaymentEvent(
  { ...baseEvent, data: { ...baseEvent.data, chargedAmount: "2.00" } },
  { currency: "USD", amount: "1.99" }
).ok === false, "wrong amount rejected");
ok(validatePaymentEvent(
  { ...baseEvent, data: { ...baseEvent.data, currency: "EUR" } },
  { currency: "USD", amount: "1.99" }
).ok === false, "wrong currency rejected");
ok(validatePaymentEvent(
  { ...baseEvent, data: { ...baseEvent.data, paymentStatus: "failed" } },
  { currency: "USD", amount: "1.99" }
).ok === false, "failed payment rejected");
ok(validatePaymentEvent(
  { eventType: "refund.succeeded", data: baseEvent.data },
  { currency: "USD", amount: "1.99" }
).ok === false, "non-completed event rejected");

/* 4. request signing (RSA-SHA256) round-trip */
const { publicKey: pub, privateKey: priv } = crypto.generateKeyPairSync("rsa", { modulusLength: 2048 });
const pubPem = pub.export({ type: "spki", format: "pem" });
const privPem = priv.export({ type: "pkcs8", format: "pem" });
const ts = "1711800000";
const bodyStr = JSON.stringify({ productId: "PROD_x", currency: "USD" });
const sig = buildSignature("POST", "/v1/actions/checkout/create-session", ts, bodyStr, privPem);
const verifier = crypto.createVerify("RSA-SHA256");
verifier.update(`POST\n/v1/actions/checkout/create-session\n${ts}\n${crypto.createHash("sha256").update(bodyStr).digest("base64")}`, "utf8");
ok(verifier.verify(pubPem, sig, "base64"), "request signature verifies with public key");

/* 5. webhook signature verification */
const raw = JSON.stringify({ id: "evt_1", eventType: "order.completed" });
const wts = String(Date.now());
const wv = crypto.createSign("RSA-SHA256");
wv.update(`${wts}.${raw}`, "utf8");
const wv1 = wv.sign(privPem, "base64");
ok(verifyWebhookSignature(raw, `t=${wts},v1=${wv1}`, pubPem) === true, "valid webhook signature accepted");
ok(verifyWebhookSignature(raw + "x", `t=${wts},v1=${wv1}`, pubPem) === false, "tampered body rejected");
ok(verifyWebhookSignature(raw, "t=bad,v1=bad", pubPem) === false, "garbage signature rejected");
const other = crypto.generateKeyPairSync("rsa", { modulusLength: 2048 });
ok(verifyWebhookSignature(raw, `t=${wts},v1=${wv1}`, other.publicKey.export({ type: "spki", format: "pem" })) === false, "wrong public key rejected");
ok(parseWaffoSignature(`t=${wts},v1=${wv1}`).t === wts, "signature header parsed");

// Tolerance is tightened to 5 minutes; a 10-minute-old signature must be rejected.
const oldTs = String(Date.now() - 10 * 60 * 1000);
const oldSign = crypto.createSign("RSA-SHA256");
oldSign.update(`${oldTs}.${raw}`, "utf8");
const oldV1 = oldSign.sign(privPem, "base64");
ok(verifyWebhookSignature(raw, `t=${oldTs},v1=${oldV1}`, pubPem) === false, "stale signature (10 min old) rejected by 5-min tolerance");

/* 6. config validation: missing keys -> clear error, no secret values */
const cfg = getConfig({
  WAFFO_MERCHANT_ID: "MER_x",
  WAFFO_PRIVATE_KEY: "",
  WAFFO_WEBHOOK_PUBLIC_KEY: "",
  WAFFO_STORE_ID: "STO_x",
  WAFFO_PRODUCT_ID: ""
});
ok(missingKeys(cfg).includes("WAFFO_PRIVATE_KEY") && missingKeys(cfg).includes("WAFFO_PRODUCT_ID"), "missing keys detected by name");
let threw = false;
try { assertConfig(cfg); } catch (e) {
  threw = true;
  ok(e.message.includes("WAFFO_PRIVATE_KEY") && e.message.includes("WAFFO_PRODUCT_ID"), "error lists variable names");
  ok(!e.message.includes("MER_x") && !e.message.includes("STO_x"), "error does not leak values");
}
ok(threw === true, "assertConfig throws on missing keys");

/* 7. auth: signup / login / me / logout against a temp store */
{
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "hp-auth-"));
  process.env.AUTH_STORE_FILE = path.join(dir, "users.json");
  const auth = await import("../lib/auth.mjs");

  const s = auth.signup("User@Example.com", "password123");
  ok(s.ok === true && s.token && s.user.email === "user@example.com", "signup succeeds and normalizes email");
  ok(auth.signup("User@Example.com", "password123").ok === false, "duplicate email rejected");
  ok(auth.signup("bad-email", "password123").ok === false, "invalid email rejected");
  ok(auth.signup("ok@example.com", "short").ok === false, "short password rejected");
  ok(auth.login("user@example.com", "wrongpass").ok === false, "wrong password rejected");
  const l = auth.login("USER@example.com", "password123");
  ok(l.ok === true, "login succeeds");
  const me = auth.authenticate(l.token);
  ok(me && me.email === "user@example.com", "token authenticates");
  ok(auth.authenticate("badtoken") === null, "bad token rejected");
  auth.logout(l.token);
  ok(auth.authenticate(l.token) === null, "logout invalidates token");

  fs.rmSync(dir, { recursive: true, force: true });
}

/* 8. create-session request shape matches the official payload */
{
  const calls = [];
  const realFetch = globalThis.fetch;
  globalThis.fetch = async (url, init) => {
    calls.push({ url, init });
    return {
      ok: true,
      status: 200,
      json: async () => ({ data: { sessionId: "cs_test", checkoutUrl: "https://waffo.test/c" } })
    };
  };
  const client = new WaffoClient({
    merchantId: "MER_x",
    privateKey: privPem,
    storeSlug: "my-store-ab12cd34",
    envName: "test"
  });

  await client.createCheckoutSession({
    storeId: "STO_x",
    productId: "PROD_x",
    currency: "USD",
    orderMerchantExternalId: "ref-1",
    metadata: { orderRef: "ref-1" },
    auth: "apikey"
  });
  await client.createCheckoutSession({
    storeId: "STO_x",
    productId: "PROD_x",
    currency: "USD",
    auth: "storeslug"
  });
  globalThis.fetch = realFetch;

  const body = JSON.parse(calls[0].init.body);
  const h = calls[0].init.headers;
  ok(body.storeId === "STO_x", "create-session sends storeId");
  ok(body.productType === "onetime", "create-session sends productType");
  ok(body.productId === "PROD_x" && body.currency === "USD", "create-session sends productId and currency");
  ok(body.orderMerchantExternalId === "ref-1" && body.metadata.orderRef === "ref-1", "create-session carries attribution fields");
  ok(h["X-Merchant-Id"] === "MER_x" && h["X-Signature"] && h["X-Timestamp"], "apikey auth sends signature headers");
  ok(h["X-Environment"] === undefined, "apikey auth omits X-Environment");

  const h2 = calls[1].init.headers;
  ok(h2["X-Store-Slug"] === "my-store-ab12cd34", "store slug auth sends X-Store-Slug");
  ok(h2["X-Environment"] === "test", "store slug auth sends X-Environment");
}

/* 9. legal pages referenced by the Waffo store settings */
{
  const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "middle-east");
  for (const [route, file] of Object.entries(LEGAL_PAGES)) {
    const p = path.join(siteRoot, file);
    const exists = fs.existsSync(p);
    ok(exists, `legal page ${route} exists`);
    if (!exists) continue;
    const html = fs.readFileSync(p, "utf8");
    ok(html.includes('dir="rtl"'), `legal page ${route} is RTL`);
    ok(html.includes('class="en-sec"'), `legal page ${route} has an English section`);
    ok(html.includes("2710376382@qq.com"), `legal page ${route} has a contact address`);
    ok(!/<\/?script/i.test(html), `legal page ${route} contains no scripts`);
  }
}

/* 10. site-wide footer carries legal links and a support contact */
{
  const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "middle-east");
  const pages = {
    "index.html": ["/terms", "/privacy"],
    "terms.html": ["/privacy"],
    "privacy.html": ["/terms"]
  };
  for (const [file, expectedLinks] of Object.entries(pages)) {
    const html = fs.readFileSync(path.join(siteRoot, file), "utf8");
    ok(html.includes('class="footer-links"'), `${file} has the site footer`);
    ok(html.includes('href="mailto:2710376382@qq.com"'), `${file} footer shows the support address`);
    for (const href of expectedLinks) {
      ok(html.includes(`href="${href}"`), `${file} footer links to ${href}`);
    }
  }
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exitCode = 1;
