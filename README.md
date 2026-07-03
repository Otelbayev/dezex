# Dezex

`disinfex` / `dezsolution` arxitekturasi asosidagi bir sahifali (landing) dezinfeksiya sayti.
Toza **HTML + CSS + JS**, RU/UZ ikki til, formalar **Telegram botga** boradi.

## Nima bor
- **3 forma** → `/api/lead` → Telegram (token **serverda**, brauzerga chiqmaydi)
- **i18n RU/UZ** — til tugmasi, `?lang=uz`, `localStorage` da saqlanadi
- Telefon mask: `+998 (XX) XXX XX XX` + validatsiya
- SEO: JSON-LD, Open Graph, sitemap, robots, hreflang
- Scroll-reveal animatsiya, sticky header, mobil FAB (Telegram + qo'ng'iroq)
- Anti-spam: honeypot + IP rate-limit (server.js)

## Struktura
```
server.js              — zero-dependency statik server + /api/lead (lokal ishlash uchun)
api/lead.js            — Vercel serverless funksiya (deploy uchun)
vercel.json            — Vercel sozlamasi
.env.example           — TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID namunasi
public/
  index.html           — sahifa (RU default, data-i18n orqali tarjima)
  robots.txt sitemap.xml site.webmanifest
  assets/
    css/styles.css     — barcha ranglar :root da (DIZAYN shu yerdan boshqariladi)
    js/app.js          — i18n + telefon mask + formalar → Telegram
    img/               — favicon, logo, ikonkalar
    videos/            — ANIMATSION VIDEOLAR shu yerga (hero.mp4 ...)
```

## Ishga tushirish (lokal)
```bash
cp .env.example .env      # keyin token va chat_id ni to'ldiring
node server.js            # http://localhost:3000
```
> `npm install` shart emas — Node.js 18+ yetarli.

## Telegram sozlash
1. `@BotFather` → `/newbot` → token.
2. Botga xabar yozing → `@userinfobot` dan `chat_id`.
3. `.env` (lokal) va Vercel → Settings → Environment Variables ga qo'shing.

## Animatsion video qo'shish
`public/assets/videos/hero.mp4` ga tashlang va `index.html` dagi hero `<video>` blokini oching (izohdan chiqaring).

## Keyingi qadamlar
- [ ] Dizayn (ranglar/shriftlar `styles.css` `:root` da) — o'zingiz aytasiz
- [ ] Animatsion videolar (`assets/videos/`)
- [ ] Logo rasmi (hozircha matnli logo)
- [ ] Telegram token/chat ID
- [ ] Vercel'ga deploy
```
