# Prime Way Capital — Website

Official marketing website for **Prime Way Capital (Private) Limited** — an SECP‑registered
investment & commodity futures firm based in Lahore, Pakistan.

Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Framer Motion** and **lucide-react**.
Fully static, fast, SEO‑ready and optimised for deployment on **Vercel**.

## ✨ Features

- Premium, animated design system based on the Prime Way Capital brand (navy / royal blue / gold)
- Pages: **Home, About, Services, Markets, Contact** + custom 404
- Live market ticker, animated stats counters, scroll reveals, scroll progress bar
- Accessible mobile navigation, FAQ accordion, contact form (opens email pre‑filled)
- Floating WhatsApp button
- SEO: metadata, Open Graph, JSON‑LD structured data, `sitemap.xml`, `robots.txt`

## 🧠 Editing content

**All text, services, markets, contact details and links live in one file:**

```
lib/site.ts
```

Change a phone number, add a service, update the address — edit it there and it updates everywhere.
Logo files live in `public/logo.png` and `public/logo-full.png`.

> Tip: set the real values for `email` and the `socials` URLs in `lib/site.ts` before launch.

## 💻 Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

Requires Node.js 20.9+.

## 🚀 Deploy to Vercel

1. Push this `website` folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repo.
3. Vercel auto‑detects Next.js — just click **Deploy** (no settings needed).
4. After the first deploy, add your custom domain (`primewaycapital.co`) under
   **Project → Settings → Domains**, and point your DNS as Vercel instructs.

Alternatively, deploy from this folder with the CLI:

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

## 📁 Structure

```
app/            Pages (home, about, services, markets, contact), layout, SEO
components/     Navbar, Footer, Hero, Ticker, ServicesGrid, MarketsGrid, FAQ, ...
lib/site.ts    ← single source of truth for all content
public/         Logo + assets
```

---

© Prime Way Capital (Private) Limited. Trading in futures and leveraged products carries a high
level of risk and may not be suitable for all investors.
