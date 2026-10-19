import fs from "node:fs";
import path from "node:path";

export function loadEnv(filePath) {
  const p = path.resolve(filePath);
  if (!fs.existsSync(p)) return {};
  const out = {};
  for (const raw of fs.readFileSync(p, "utf8").split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq < 0) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    val = val.replace(/\\n/g, "\n");
    out[key] = val;
    if (process.env[key] === undefined) process.env[key] = val;
  }
  return out;
}

function looksPlaceholder(v) {
  return !v || /your_|<paste|placeholder|\.\.\./i.test(v);
}

const FIELD_BY_VAR = {
  WAFFO_MERCHANT_ID: "merchantId",
  WAFFO_PRIVATE_KEY: "privateKey",
  WAFFO_WEBHOOK_PUBLIC_KEY: "webhookPublicKey",
  WAFFO_STORE_ID: "storeId",
  WAFFO_PRODUCT_ID: "productId"
};

export function getConfig(env = process.env) {
  return {
    merchantId: env.WAFFO_MERCHANT_ID || "",
    privateKey: env.WAFFO_PRIVATE_KEY || "",
    webhookPublicKey: env.WAFFO_WEBHOOK_PUBLIC_KEY || "",
    storeId: env.WAFFO_STORE_ID || "",
    productId: env.WAFFO_PRODUCT_ID || "",
    storeSlug: env.WAFFO_STORE_SLUG || "",
    envName: env.WAFFO_ENV === "prod" ? "prod" : "test",
    port: Number(env.PORT || 8787),
    allowedOrigin: env.ALLOWED_ORIGIN || "*",
    priceAmount: env.REPORT_PRICE_AMOUNT || "1.99",
    priceCurrency: env.REPORT_PRICE_CURRENCY || "USD",
    successUrl: env.WAFFO_SUCCESS_URL || ""
  };
}

export function missingKeys(cfg, vars = Object.keys(FIELD_BY_VAR)) {
  return vars.filter((v) => looksPlaceholder(cfg[FIELD_BY_VAR[v]]));
}

export function assertConfig(cfg, vars = Object.keys(FIELD_BY_VAR)) {
  const missing = missingKeys(cfg, vars);
  if (missing.length === 0) return;
  throw new Error(
    "Missing or placeholder Waffo configuration: " +
      missing.join(", ") +
      ". Fill these in outputs/server/.env (see .env.example). No request was sent."
  );
}
