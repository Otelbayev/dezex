/* ===================================================================
   Vercel Serverless Function  →  POST /api/lead
   Telegram bot orqali ariza yuboradi. Token brauzerga chiqmaydi.

   Vercel dashboard → Settings → Environment Variables:
     TELEGRAM_BOT_TOKEN
     TELEGRAM_CHAT_ID
   =================================================================== */
"use strict";

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildMessage(d) {
  return [
    "🐞 <b>Yangi ariza — Dezex</b>",
    "",
    `📌 <b>Forma:</b> ${esc(d.source)}`,
    d.name ? `👤 <b>Ism:</b> ${esc(d.name)}` : "",
    `📞 <b>Telefon:</b> ${esc(d.phone)}`,
    d.service ? `🎯 <b>Xizmat:</b> ${esc(d.service)}` : "",
    d.object ? `🏠 <b>Obyekt:</b> ${esc(d.object)}` : "",
    d.comment ? `💬 <b>Izoh:</b> ${esc(d.comment)}` : "",
    "",
    `🌐 <b>Til:</b> ${esc(d.lang)}`,
    `🕒 ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" })}`
  ].filter(Boolean).join("\n");
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method_not_allowed" });
  }

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";
  if (!BOT_TOKEN || !CHAT_ID) {
    return res.status(500).json({ ok: false, error: "not_configured" });
  }

  let d = req.body;
  if (!d || typeof d === "string") {
    try { d = JSON.parse(d || "{}"); } catch (e) { d = {}; }
  }

  try {
    if (d.website) throw new Error("honeypot");
    const phoneDigits = String(d.phone || "").replace(/\D/g, "");
    if (!/^998\d{9}$/.test(phoneDigits)) throw new Error("invalid_phone");

    const tgRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: buildMessage(d),
        parse_mode: "HTML",
        disable_web_page_preview: true
      })
    });

    if (!tgRes.ok) {
      const body = await tgRes.text().catch(() => "");
      console.error("Telegram error:", tgRes.status, body);
      return res.status(502).json({ ok: false, error: "send_failed" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[lead error]", err.message);
    return res.status(400).json({ ok: false, error: "bad_request" });
  }
};
