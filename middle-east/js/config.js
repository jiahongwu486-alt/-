/* ============================================================
   Historical Persona — configuration
   Pricing, Waffo Pancake payment endpoints, and demo settings.
   ============================================================ */

window.APP_CONFIG = {
  // Pricing (display only; the server enforces the real amount)
  priceAmount: 1.99,
  priceCurrency: "USD",
  priceDisplay: "$1.99",

  // Payment provider: "waffo" (server-verified) | "demo" (no server)
  payProvider: "waffo",

  // Waffo payment endpoints. Relative paths work when the site is served by
  // server/waffo-payment.mjs (local: http://localhost:8787, production: your domain).
  createCheckoutEndpoint: "/api/create-checkout",
  verifyEndpoint: "/api/verify",
  myResultsEndpoint: "/api/my/results",

  // Demo / preview (turn previewEnabled off in production)
  demoUnlockCode: "ME-DEMO-2026",
  previewEnabled: true,

  // Default language: "ar" (Arabic, RTL) or "en" (English)
  defaultLang: "ar"
};
