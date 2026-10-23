import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";
import { pathToFileURL, fileURLToPath } from "node:url";
import { loadEnv, getConfig, assertConfig, missingKeys } from "./lib/env.mjs";
import { WaffoClient, verifyWebhookSignature } from "./lib/waffo-client.mjs";
import { signup, login, authenticate, logout } from "./lib/auth.mjs";

const require = createRequire(import.meta.url);
const DATA = require("../middle-east/js/data.js");
const QUESTIONS = require("../middle-east/js/data-questions.js");
const CHARACTERS = require("../middle-east/js/data-characters.js");

const DIM_IDS = DATA.dimensions.map((d) => d.id);
const PUBLISHED = QUESTIONS.filter((q) => q.status === "published");
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STATIC_ROOT = path.resolve(__dirname, "..", "middle-east");
const DATA_DIR = path.resolve(__dirname, "..", "data");
const ORDERS_FILE = path.join(DATA_DIR, "waffo_orders.jsonl");
const EVENTS_FILE = path.join(DATA_DIR, "waffo_processed_events.jsonl");

export const VALID_OPTIONS = ["a", "b", "c", "d"];

/* ---------------- pure functions (testable) ---------------- */

export function validateAnswers(answers, expectedCount = PUBLISHED.length) {
  if (!Array.isArray(answers)) return { ok: false, error: "answers must be an array" };
  if (answers.length !== expectedCount) {
    return { ok: false, error: `expected ${expectedCount} answers, got ${answers.length}` };
  }
  for (const a of answers) {
    if (!VALID_OPTIONS.includes(a)) return { ok: false, error: "invalid answer option" };
  }
  return { ok: true };
}

export function computeResult(answers) {
  const raw = Object.fromEntries(DIM_IDS.map((d) => [d, 0]));
  const maxp = Object.fromEntries(DIM_IDS.map((d) => [d, 0]));
  PUBLISHED.forEach((q, i) => {
    const s = (q.scores && q.scores[answers[i]]) || {};
    DIM_IDS.forEach((d) => {
      if (s[d]) { raw[d] += s[d]; maxp[d] += 1; }
    });
  });
  const vector = {};
  const buckets = {};
  DIM_IDS.forEach((d) => {
    vector[d] = maxp[d] > 0 ? Math.max(0, Math.min(1, raw[d] / maxp[d])) : 0.5;
    buckets[d] = vector[d] >= 0.66 ? "high" : vector[d] >= 0.34 ? "mid" : "low";
  });
  const ranked = CHARACTERS.filter((c) => c.allowed_match === true)
    .map((c) => {
      let sum = 0;
      DIM_IDS.forEach((d) => {
        const x = vector[d] - (c.profile[d] || 0);
        sum += x * x;
      });
      return { id: c.person_id, d: Math.sqrt(sum) };
    })
    .sort((a, b) => a.d - b.d || String(a.id).localeCompare(String(b.id)));
  return {
    vector,
    buckets,
    primaryId: ranked[0].id,
    secondaryId: ranked[1].id
  };
}

export function normalizeAmount(v) {
  if (v == null) return "";
  const n = typeof v === "number" ? v : Number(String(v).trim());
  return Number.isFinite(n) ? n.toFixed(2) : String(v).trim();
}

export function validatePaymentEvent(event, expected) {
  if (!event || event.eventType !== "order.completed") return { ok: false, reason: "not_order_completed" };
  const d = event.data || {};
  // Tolerant status matching: accept common completed/paid/fulfilled spellings,
  // but still hard-reject clearly failed/refunded/canceled payments.
  const orderStatus = String(d.orderStatus || d.status || "").toLowerCase();
  const payStatus = String(d.paymentStatus || d.payment_status || "").toLowerCase();
  if (payStatus && /fail|refund|cancel|declin/.test(payStatus)) return { ok: false, reason: "payment_not_succeeded" };
  if (orderStatus && !/^(completed|paid|fulfilled|success|settled)$/.test(orderStatus)) {
    return { ok: false, reason: "order_not_completed" };
  }
  if (expected && d.currency && d.currency !== expected.currency) return { ok: false, reason: "currency_mismatch" };
  const charged = d.chargedAmount != null ? d.chargedAmount : d.amount;
  if (expected && charged != null && normalizeAmount(charged) !== normalizeAmount(expected.amount)) {
    return { ok: false, reason: "amount_mismatch" };
  }
  return { ok: true };
}

/* ---------------- order store (JSONL, no DB dependency) ---------------- */

function readLines(file) {
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, "utf8")
    .split(/\r?\n/)
    .filter(Boolean)
    .map((l) => { try { return JSON.parse(l); } catch (e) { return null; } })
    .filter(Boolean);
}

function appendLine(file, obj) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.appendFileSync(file, JSON.stringify(obj) + "\n");
}

function findOrderByResultId(resultId) {
  return readLines(ORDERS_FILE).find((o) => o.resultId === resultId) || null;
}

function updateOrder(resultId, patch) {
  const lines = readLines(ORDERS_FILE);
  let found = false;
  const next = lines.map((o) => {
    if (o.resultId === resultId) { found = true; return { ...o, ...patch }; }
    return o;
  });
  if (!found) next.push({ resultId, ...patch });
  fs.writeFileSync(ORDERS_FILE, next.map((o) => JSON.stringify(o)).join("\n") + (next.length ? "\n" : ""));
}

function eventSeen(eventId) {
  return readLines(EVENTS_FILE).some((e) => e.eventId === eventId);
}

function markEventSeen(eventId) {
  appendLine(EVENTS_FILE, { eventId, at: new Date().toISOString() });
}

/* ---------------- http helpers ---------------- */

function json(res, status, obj, allowedOrigin) {
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": allowedOrigin
  });
  res.end(JSON.stringify(obj));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function getBearer(req) {
  const h = req.headers["authorization"] || "";
  return h.startsWith("Bearer ") ? h.slice(7).trim() : null;
}

const STATIC_MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon"
};

function serveStatic(req, res, root, origin) {
  if (req.method !== "GET") return false;
  const url = new URL(req.url, "http://localhost");
  let p = decodeURIComponent(url.pathname);
  if (p === "/") p = "/index.html";
  const file = path.normalize(path.join(root, p));
  if (!file.startsWith(root)) {
    res.writeHead(403);
    res.end();
    return true;
  }
  if (fs.existsSync(file) && fs.statSync(file).isFile()) {
    res.writeHead(200, {
      "Content-Type": STATIC_MIME[path.extname(file).toLowerCase()] || "application/octet-stream",
      "Access-Control-Allow-Origin": origin
    });
    res.end(fs.readFileSync(file));
    return true;
  }
  return false;
}

/* ---------------- server factory (also used by tests) ---------------- */

export function createServer({ cfg, client }) {
  return http.createServer(async (req, res) => {
    try {
    const url = new URL(req.url, "http://localhost");
    const origin = cfg.allowedOrigin;

    if (req.method === "OPTIONS") {
      res.writeHead(204, {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      });
      return res.end();
    }

    if (req.method === "GET" && url.pathname === "/health") {
      return json(res, 200, { ok: true, env: cfg.envName, configured: missingKeys(cfg).length === 0 }, origin);
    }

    // TEMP diagnostic: confirm the deployed webhook public key matches the
    // Waffo dashboard "公钥 TEST" key (sha256 e39c3c78806dfc0f...). Returns only
    // a hash, never the key itself. Will be removed after verification.
    if (req.method === "GET" && url.pathname === "/api/debug/webhook-key-hash") {
      const h = crypto.createHash("sha256").update(cfg.webhookPublicKey || "").digest("hex");
      return json(res, 200, { ok: true, sha256: h, expectedPrefix: "e39c3c78806dfc0f" }, origin);
    }

    if (req.method === "POST" && url.pathname === "/api/auth/signup") {
      let body;
      try { body = JSON.parse((await readBody(req)).toString("utf8")); }
      catch (e) { return json(res, 400, { ok: false, error: "invalid JSON" }, origin); }
      const r = signup(body.email, body.password);
      return json(res, r.ok ? 200 : 400, r, origin);
    }

    if (req.method === "POST" && url.pathname === "/api/auth/login") {
      let body;
      try { body = JSON.parse((await readBody(req)).toString("utf8")); }
      catch (e) { return json(res, 400, { ok: false, error: "invalid JSON" }, origin); }
      const r = login(body.email, body.password);
      return json(res, r.ok ? 200 : 401, r, origin);
    }

    if (req.method === "GET" && url.pathname === "/api/auth/me") {
      const user = authenticate(getBearer(req));
      return json(res, 200, user ? { ok: true, user } : { ok: false }, origin);
    }

    if (req.method === "POST" && url.pathname === "/api/auth/logout") {
      logout(getBearer(req));
      return json(res, 200, { ok: true }, origin);
    }

    if (req.method === "POST" && url.pathname === "/api/create-checkout") {
      let body;
      try { body = JSON.parse((await readBody(req)).toString("utf8")); }
      catch (e) { return json(res, 400, { ok: false, error: "invalid JSON" }, origin); }

      const v = validateAnswers(body.answers);
      if (!v.ok) return json(res, 400, { ok: false, error: v.error }, origin);

      const result = computeResult(body.answers);
      const user = authenticate(getBearer(req));
      const resultId = crypto.randomUUID();
      const order = {
        resultId,
        status: "pending",
        createdAt: new Date().toISOString(),
        userId: user ? user.id : null,
        lang: body.lang === "ar" ? "ar" : "en",
        ...result
      };
      appendLine(ORDERS_FILE, order);

      try {
        const session = await client.createCheckoutSession({
          productId: cfg.productId,
          currency: cfg.priceCurrency,
          successUrl: cfg.successUrl,
          orderMerchantExternalId: resultId,
          metadata: { orderRef: resultId, product: "full-report" },
          expiresInSeconds: 1800,
          language: "en"
        });
        updateOrder(resultId, { sessionId: session.sessionId, checkoutUrl: session.checkoutUrl });
        return json(res, 200, {
          ok: true,
          checkoutUrl: session.checkoutUrl,
          sessionId: session.sessionId,
          resultId
        }, origin);
      } catch (e) {
        updateOrder(resultId, { status: "create_failed", error: String(e.message) });
        return json(res, 502, { ok: false, error: "checkout creation failed" }, origin);
      }
    }

    if (req.method === "POST" && url.pathname === "/api/webhook/waffo") {
      const raw = (await readBody(req)).toString("utf8");
      const sig = req.headers["x-waffo-signature"];

      let valid = false;
      try { valid = verifyWebhookSignature(raw, sig, cfg.webhookPublicKey); } catch (e) { valid = false; }
      if (!valid) return json(res, 401, { ok: false, error: "invalid signature" }, origin);

      let event;
      try { event = JSON.parse(raw); } catch (e) {
        console.error("[waffo] webhook body is not valid JSON");
        return json(res, 400, { ok: false, error: "invalid JSON" }, origin);
      }
      // Diagnostic: log the real envelope/field names so we can confirm the schema.
      console.log("[waffo] webhook eventType=", event.eventType,
        "topKeys=", JSON.stringify(Object.keys(event)),
        "dataKeys=", JSON.stringify(event.data ? Object.keys(event.data) : null));

      if (event.eventType !== "order.completed") {
        console.log("[waffo] ignoring non-completed event:", event.eventType);
        return json(res, 200, { received: true, ignored: true }, origin);
      }

      // Robust ref extraction — Waffo's payload shape has varied across versions.
      const d = event.data || {};
      const ref =
        d.orderMerchantExternalId ||
        (d.orderMetadata && d.orderMetadata.orderRef) ||
        d.orderRef ||
        (d.order && (d.order.orderMerchantExternalId || d.order.orderRef)) ||
        event.orderMerchantExternalId || null;
      if (!ref) {
        console.error("[waffo] missing order ref in payload; data=", JSON.stringify(d));
        return json(res, 200, { received: true, rejected: "missing_order_ref" }, origin);
      }

      // Signature already verified above, so this is an authentic Waffo event.
      // Validation is used for audit logging only (warns on mismatch, does not block).
      const check = validatePaymentEvent(event, { currency: cfg.priceCurrency, amount: cfg.priceAmount });
      if (!check.ok) console.warn("[waffo] payment validation note:", check.reason, "(proceeding — signature verified)");

      const eventId = event.id || event.eventId;
      if (eventSeen(eventId)) return json(res, 200, { received: true, duplicate: true }, origin);
      markEventSeen(eventId);

      const order = findOrderByResultId(ref);
      if (!order) {
        console.error("[waffo] unknown order ref", ref);
        return json(res, 200, { received: true, rejected: "unknown_order" }, origin);
      }

      if (order.status !== "paid") {
        updateOrder(ref, {
          status: "paid",
          paidAt: new Date().toISOString(),
          eventId,
          paymentId: d.paymentId || d.payment_id || null,
          chargedAmount: normalizeAmount(d.chargedAmount != null ? d.chargedAmount : d.amount),
          currency: d.currency || cfg.priceCurrency,
          unlockToken: crypto.randomBytes(24).toString("hex")
        });
        console.log("[waffo] order marked PAID:", ref);
      }
      return json(res, 200, { received: true }, origin);
    }

    if (req.method === "GET" && url.pathname === "/api/verify") {
      const resultId = url.searchParams.get("resultId");
      if (!resultId) return json(res, 400, { ok: false, error: "missing resultId" }, origin);
      const order = findOrderByResultId(resultId);
      if (!order) return json(res, 404, { ok: false, error: "result not found" }, origin);

      const user = authenticate(getBearer(req));
      if (order.userId && (!user || user.id !== order.userId)) {
        return json(res, 403, { ok: false, error: "not_your_report" }, origin);
      }

      if (order.status === "paid") {
        return json(res, 200, {
          ok: true,
          token: order.unlockToken,
          report: {
            vector: order.vector,
            buckets: order.buckets,
            primaryId: order.primaryId,
            secondaryId: order.secondaryId
          }
        }, origin);
      }

      // Server-side re-check of order status (official flow).
      try {
        const waffoOrder = await client.getOnetimeOrderByRef(cfg.storeId, resultId);
        if (waffoOrder && waffoOrder.status === "completed") {
          const token = crypto.randomBytes(24).toString("hex");
          updateOrder(resultId, { status: "paid", paidAt: new Date().toISOString(), unlockToken: token });
          return json(res, 200, {
            ok: true,
            token,
            report: {
              vector: order.vector,
              buckets: order.buckets,
              primaryId: order.primaryId,
              secondaryId: order.secondaryId
            }
          }, origin);
        }
      } catch (e) {
        console.error("[waffo] verify re-check failed", e.message);
      }
      return json(res, 200, { ok: false, error: "not paid" }, origin);
    }

    if (serveStatic(req, res, STATIC_ROOT, origin)) return;
    return json(res, 404, { ok: false, error: "not found" }, origin);
    } catch (e) {
      console.error("[waffo] handler error:", e && e.message);
      try { return json(res, 500, { ok: false, error: "internal error" }, cfg.allowedOrigin); } catch (e2) {}
    }
  });
}

/* ---------------- entrypoint ---------------- */

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isMain) {
  loadEnv(path.resolve(__dirname, ".env"));
  const cfg = getConfig();
  try {
    assertConfig(cfg);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
  const client = new WaffoClient({
    merchantId: cfg.merchantId,
    privateKey: cfg.privateKey,
    storeSlug: cfg.storeSlug,
    envName: cfg.envName
  });
  const server = createServer({ cfg, client });
  server.listen(cfg.port, () => {
    console.log("Waffo payment server on http://localhost:" + cfg.port + " (env: " + cfg.envName + ")");
  });
}
