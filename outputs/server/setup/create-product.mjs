import path from "node:path";
import { loadEnv, getConfig, assertConfig } from "../lib/env.mjs";
import { WaffoClient } from "../lib/waffo-client.mjs";

loadEnv(path.resolve("outputs/server/.env"));
const cfg = getConfig();
try {
  assertConfig(cfg, ["WAFFO_MERCHANT_ID", "WAFFO_PRIVATE_KEY", "WAFFO_STORE_ID"]);
} catch (e) {
  console.error(e.message);
  process.exit(1);
}

const client = new WaffoClient({ merchantId: cfg.merchantId, privateKey: cfg.privateKey });

try {
  const product = await client.createOnetimeProduct({
    storeId: cfg.storeId,
    name: "Full Personality Report",
    description: "Full historical-persona report (one-time unlock).",
    prices: {
      USD: { amount: cfg.priceAmount, taxIncluded: false, taxCategory: "digital_goods" }
    },
    successUrl: cfg.successUrl,
    metadata: { kind: "full-report" }
  });
  console.log("Product created. Add to .env: WAFFO_PRODUCT_ID=" + product.id);
} catch (e) {
  console.error("Create product failed:", e.message);
  if (e.body) console.error(JSON.stringify(e.body));
  process.exit(1);
}
