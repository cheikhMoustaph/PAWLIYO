# PAWLIYO · Pet Essentials · Everyday Care

A premium, prototype-stage storefront for **PAWLIYO** — a small studio
exploring thoughtful, practical pet essentials. This project is built to
**validate demand** for a small set of products *before* committing to
inventory, suppliers, or paid services.

> Every product in the shop is a research prototype. No orders are accepted
> and no payments are collected. The "Notify me when available" CTAs are
> local prototype interactions — they do not transmit data to a server.

---

## ✨ Highlights

- **Next.js 16 (App Router) + TypeScript (strict mode)**.
- **Tailwind CSS 4 + shadcn/ui** with a custom PAWLIYO brand palette.
- **Server Components** by default; small client islands only where needed
  (cart, search, mobile nav, filters, interest forms).
- **Custom paw-print SVG logo** + favicon (no remote assets).
- **Real navigation** between 8 routes including product detail pages.
- **Search + category filters** on the shop page, with shareable URL state.
- **Local-only demo cart** that respects visitors' privacy (no personal data
  stored).
- **Prototype forms** (newsletter interest, contact, product interest) that
  validate input and clearly disclose that nothing is transmitted.
- **Accessibility-first**: semantic HTML, keyboard navigation, focus rings,
  ARIA labels, reduced-motion support.
- **SEO-ready**: per-page metadata, OpenGraph, canonical URLs, sitemap,
  web manifest, and a robots policy.
- **Sticky footer** layout that pins to the bottom on short pages and is
  pushed down naturally on long ones.

---

## 🎨 Brand identity

| Token        | Hex       | Usage                                      |
| ------------ | --------- | ------------------------------------------ |
| Charcoal     | `#171717` | Primary typography, primary buttons       |
| Warm ivory   | `#F4EFE6` | Page background, large surface fills      |
| Muted taupe  | `#A18B72` | Restrained accent, eyebrows, focus details |
| Sand         | `#D9CBB8` | Secondary surfaces, badges                 |
| White        | `#FFFFFF` | Cards, contrast surfaces                   |

Logo: a small geometric paw-print symbol paired with the **PAWLIYO**
wordmark. Implemented as a reusable inline SVG component
(`src/components/site/logo.tsx`) — adapts to light/dark backgrounds via
`currentColor` and the `variant` prop.

Tagline (official): **PET ESSENTIALS · EVERYDAY CARE**

---

## 🗺 Routes

| Route                  | Purpose                                       |
| --------------------- | --------------------------------------------- |
| `/`                    | Homepage — hero, brand values, featured products, lifestyle, interest form |
| `/shop`               | Catalog with search + category filters         |
| `/products/[slug]`    | Product detail page with "Notify me when available" |
| `/about`              | Studio story + roadmap                         |
| `/contact`            | Prototype contact form                          |
| `/shipping-returns`   | Draft shipping & returns policy                |
| `/privacy`            | Draft privacy policy                           |
| `/terms`              | Draft terms of service                        |
| _404_                 | Custom not-found page with suggested products |

---

## 🚀 Local development

```bash
# 1. Install dependencies (already done in this workspace, but listed here
#    for reference).
bun install

# 2. Copy environment variables (all optional — site runs without them).
cp .env.example .env.local

# 3. Start the dev server.
bun run dev
# Visit http://localhost:3000
```

### Lint

```bash
bun run lint
```

### Production build

```bash
bun run build
bun run start
```

> Note: `bun run build` requires a configured standalone output (already set
> in `next.config.ts`). The build is not required for local preview.

---

## 🧱 Project structure

```
src/
├─ app/
│  ├─ layout.tsx            # Root layout: fonts, metadata, PageShell (header/footer)
│  ├─ page.tsx              # Homepage
│  ├─ shop/page.tsx         # Catalog page (Suspense + client browser)
│  ├─ products/[slug]/page.tsx
│  ├─ about/page.tsx
│  ├─ contact/page.tsx
│  ├─ shipping-returns/page.tsx
│  ├─ privacy/page.tsx
│  ├─ terms/page.tsx
│  ├─ not-found.tsx         # Custom 404
│  ├─ icon.svg              # Paw-print favicon (auto-served by Next.js)
│  ├─ manifest.ts           # Web manifest
│  ├─ sitemap.ts            # Dynamic sitemap (all products + static routes)
│  └─ globals.css           # Brand design tokens, base layer, utilities
├─ components/
│  ├─ site/
│  │  ├─ logo.tsx            # PawliyoLogo + PawMark (inline SVG)
│  │  ├─ header.tsx          # Sticky header with search + cart shortcuts
│  │  ├─ footer.tsx          # Sticky footer with navigation + legal
│  │  ├─ announcement-bar.tsx
│  │  ├─ mobile-navigation.tsx
│  │  ├─ search-dialog.tsx   # ⌘K search dialog
│  │  ├─ cart-dialog.tsx     # Demo cart drawer (local-only)
│  │  ├─ page-shell.tsx      # Header + footer wrapper for sticky footer
│  │  └─ section-heading.tsx
│  ├─ products/
│  │  ├─ product-card.tsx
│  │  ├─ product-grid.tsx
│  │  ├─ product-gallery.tsx # Image gallery for product detail page
│  │  ├─ product-interest-button.tsx  # "Notify me when available" CTA
│  │  └─ shop-browser.tsx    # Client-side catalog with search + filters
│  ├─ forms/
│  │  ├─ newsletter-interest-form.tsx  # Prototype form with validation
│  │  └─ contact-form.tsx              # Prototype form with validation
│  └─ ui/                   # shadcn/ui primitives
├─ config/
│  └─ site.ts               # Single source of truth for brand + nav + features
├─ data/
│  └─ products.ts           # Product catalog (types + data + helpers)
└─ lib/
   ├─ cart-store.ts          # Local-only Zustand + persist demo cart
   ├─ db.ts                  # Prisma client (unused by the prototype)
   └─ utils.ts               # `cn()` helper
```

---

## 🛒 Prototype features (and their limitations)

| Feature                            | Status      | Limitation                                                       |
| ---------------------------------- | ----------- | ---------------------------------------------------------------- |
| Browse products                    | ✅ Working  | Catalog is hard-coded in `src/data/products.ts`                  |
| Search                             | ✅ Working  | Searches name, description, features                             |
| Category filter                    | ✅ Working  | URL state is shareable                                           |
| Product detail page                | ✅ Working  | Static-generated for every product via `generateStaticParams`    |
| Demo cart                          | ✅ Working  | Local-only. No checkout, no order, no payment                     |
| "Notify me when available"         | ✅ Working  | Adds to local demo cart + shows confirmation                      |
| Newsletter interest form           | ✅ Working  | Local-only. No email sent, no mailing list updated                |
| Contact form                       | ✅ Working  | Local-only. No message stored or sent                            |
| Search dialog (⌘K)                 | ✅ Working  | Searches the in-memory catalog                                   |
| Mobile navigation                  | ✅ Working  | Accessible sheet drawer                                          |
| Newsletter backend                 | 🔜 Later   | Swap prototype form for an API route + provider                  |
| Real checkout / payments           | 🔜 Later   | Not part of this build — intentionally omitted                   |
| Analytics                          | 🔜 Later   | Will require a privacy disclosure when added                      |

### Replacing product data

When supplier agreements and landed costs are confirmed, edit
`src/data/products.ts`. Each product exposes a `priceConfirmed` flag — set it
to `true` once a price is verified by a real supplier. Until then, the
storefront shows a "Coming soon" label instead of presenting illustrative
prices as offers.

---

## 🔒 Privacy

Pawliyo's prototype forms and demo cart do **not** transmit or store any
data. They use `localStorage` to remember counts across a session — no
personal information is collected. A draft privacy policy is published at
[`/privacy`](/privacy) and will be updated when a real backend is added.

---

## 🚢 Deployment

The project builds with `bun run build` and outputs a standalone server.
Deploy to any Node.js-capable free tier (Vercel, Netlify Functions, Render,
Cloudflare Pages with Node runtime, etc.). No paid services are required
for the prototype.

Set `NEXT_PUBLIC_SITE_URL` to the production URL so canonical links and
OpenGraph tags resolve correctly.

---

## 📄 License

Proprietary — © PAWLIYO. All rights reserved. Product descriptions, the
logo, and brand assets are not licensed for re-use.
