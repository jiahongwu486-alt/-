/* ============================================================
   Historical Persona — Site configuration
   Edit this file for pricing, payment, and demo settings.
   ============================================================ */

window.APP_CONFIG = {
  // Pricing
  priceAmount: 1.99,
  priceCurrency: "USD",
  priceDisplay: "$1.99",

  // Payment. Paste your Stripe Payment Link here to enable real checkout.
  // In the Stripe dashboard, set the link's "success URL" to:
  //   https://YOUR-DOMAIN/path/to/index.html?paid=1
  // so returning customers unlock automatically.
  paymentLink: "",

  // Query param that marks a completed purchase on return.
  paymentSuccessParam: "paid",

  // Demo / preview settings (turn previewEnabled off in production).
  demoUnlockCode: "ME-DEMO-2026",
  previewEnabled: true,

  // Default language: "ar" (Arabic, RTL) or "en" (English).
  defaultLang: "ar"
};
