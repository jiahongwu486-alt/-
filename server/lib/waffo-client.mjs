import crypto from "node:crypto";

// Direct API client (zero-dependency) matching the @waffo/pancake-ts surface.
// When npm is available, this module can be replaced by the official SDK.

export function buildSignature(method, path, timestamp, bodyStr, privateKey) {
  const bodyHash = crypto.createHash("sha256").update(bodyStr).digest("base64");
  const canonical = `${method}\n${path}\n${timestamp}\n${bodyHash}`;
  return crypto.sign("sha256", Buffer.from(canonical, "utf8"), resolvePrivateKey(privateKey)).toString("base64");
}

export function resolvePrivateKey(privateKey) {
  const k = String(privateKey || "").trim();
  if (k.includes("BEGIN")) return k;
  // Raw base64 (PKCS#8 DER) — build a KeyObject so crypto.sign can use it.
  try {
    return crypto.createPrivateKey({ key: Buffer.from(k, "base64"), format: "der", type: "pkcs8" });
  } catch (e) {
    return crypto.createPrivateKey(k);
  }
}

export function parseWaffoSignature(header) {
  const parts = {};
  for (const pair of (header || "").split(",")) {
    const eq = pair.indexOf("=");
    if (eq < 0) continue;
    parts[pair.slice(0, eq).trim()] = pair.slice(eq + 1).trim();
  }
  return parts;
}

export function verifyWebhookSignature(
  rawBody,
  signatureHeader,
  publicKey,
  { toleranceMs = 45 * 60 * 1000, now = Date.now() } = {}
) {
  const { t, v1 } = parseWaffoSignature(signatureHeader);
  if (!t || !v1) return false;
  if (Math.abs(now - Number(t)) > toleranceMs) return false;
  const input = `${t}.${rawBody}`;
  const verifier = crypto.createVerify("RSA-SHA256");
  verifier.update(input, "utf8");
  return verifier.verify(publicKey, v1, "base64");
}

export class WaffoClient {
  constructor({ merchantId, privateKey, baseUrl = "https://api.waffo.ai", storeSlug = "", envName = "test" }) {
    this.merchantId = merchantId;
    this.privateKey = privateKey;
    this.baseUrl = baseUrl;
    this.storeSlug = storeSlug;
    this.envName = envName;
  }

  async request(method, path, body, auth = "apikey") {
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const bodyStr = JSON.stringify(body || {});
    const headers = { "Content-Type": "application/json" };
    if (auth === "storeslug" && this.storeSlug) {
      // Public checkout flow: Store Slug auth (no API-key signature required)
      headers["X-Store-Slug"] = this.storeSlug;
      headers["X-Environment"] = this.envName === "prod" ? "prod" : "test";
    } else {
      // API-Key requests intentionally carry no X-Environment header. The target
      // environment is bound to the key when it is created, so the header is
      // ignored for this auth mode (it only applies to Store Slug requests, which
      // have no credentials to derive the environment from).
      const signature = buildSignature(method, path, timestamp, bodyStr, this.privateKey);
      headers["X-Merchant-Id"] = this.merchantId;
      headers["X-Timestamp"] = timestamp;
      headers["X-Signature"] = signature;
    }
    const res = await fetch(this.baseUrl + path, {
      method,
      headers,
      body: bodyStr
    });
    let json = null;
    try { json = await res.json(); } catch (e) { json = null; }
    if (!res.ok) {
      const err = new Error(
        `Waffo ${res.status}: ${json && json.errors ? json.errors.map((e) => e.message).join("; ") : res.statusText}`
      );
      err.status = res.status;
      err.body = json;
      throw err;
    }
    return json;
  }

  async createCheckoutSession({
    storeId,
    productId,
    productType = "onetime",
    currency,
    successUrl,
    buyerEmail,
    orderMerchantExternalId,
    metadata,
    expiresInSeconds,
    language,
    auth = "apikey"
  }) {
    // storeId and productType are required by the official create-session
    // payload; omitting them is the most likely reason metadata /
    // orderMerchantExternalId were not preserved on the resulting order.
    // NOTE: Store Slug auth silently drops orderMerchantExternalId/metadata
    // (documented anti-tampering behaviour), so API-key auth is required for
    // order attribution. Callers may pass auth="storeslug" as a fallback.
    const res = await this.request("POST", "/v1/actions/checkout/create-session", {
      storeId,
      productId,
      productType,
      currency,
      successUrl,
      buyerEmail,
      orderMerchantExternalId,
      metadata,
      expiresInSeconds,
      language
    }, auth);
    return res.data;
  }

  async createOnetimeProduct({ storeId, name, description, prices, successUrl, metadata }) {
    const res = await this.request("POST", "/v1/actions/onetime-product/create-product", {
      storeId,
      name,
      description: description || null,
      prices,
      successUrl: successUrl || null,
      metadata: metadata || null
    });
    return res.data;
  }

  async graphql(query, variables) {
    const res = await this.request("POST", "/v1/graphql", { query, variables });
    return res.data || null;
  }

  async getOnetimeOrderByRef(storeId, ref) {
    const data = await this.graphql(
      `query ($storeId: String!, $ref: String!) {
        onetimeOrders(storeId: $storeId, filter: { orderMerchantExternalId: { eq: $ref } }) {
          id status orderMerchantExternalId currency createdAt
        }
      }`,
      { storeId, ref }
    );
    const list = data && data.onetimeOrders ? data.onetimeOrders : [];
    return list[0] || null;
  }
}
