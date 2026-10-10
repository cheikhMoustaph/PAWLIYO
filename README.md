# PAWLIYO — Pet Essentials · Everyday Care

A modern, premium pet essentials e-commerce website built with Next.js, TypeScript, and Tailwind CSS. Designed for demand validation before committing to inventory and paid services.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

The development server will be available at [http://localhost:3000](http://localhost:3000).

## Technology Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: Inter (via Google Fonts)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/              # Brand story
│   ├── contact/            # Contact & inquiries
│   ├── privacy/            # Privacy policy draft
│   ├── products/[slug]/    # Product detail pages
│   ├── shipping-returns/   # Shipping & returns info
│   ├── shop/               # Product catalog
│   ├── terms/              # Terms of service draft
│   ├── globals.css         # Design tokens & base styles
│   ├── layout.tsx          # Root layout (header, footer)
│   ├── not-found.tsx       # Custom 404 page
│   └── page.tsx            # Homepage
├── components/             # Reusable UI components
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Logo.tsx
│   ├── NewsletterInterestForm.tsx
│   ├── NotifyMeButton.tsx
│   ├── ProductCard.tsx
│   ├── ProductGallery.tsx
│   ├── ProductGrid.tsx
│   └── SectionHeading.tsx
├── data/                   # Local data files
│   ├── products.ts         # Product catalog
│   └── site-config.ts      # Site configuration
└── types/                  # TypeScript type definitions
    └── index.ts
```

## Routes

| Route | Description |
|---|---|
| `/` | Homepage |
| `/shop` | Product catalog with search & filters |
| `/products/[slug]` | Individual product detail page |
| `/about` | Brand story |
| `/contact` | Contact form & inquiries |
| `/shipping-returns` | Shipping & returns info |
| `/privacy` | Privacy policy (draft) |
| `/terms` | Terms of service (draft) |

## Environment Variables

Copy `.env.example` to `.env.local` and update as needed:

```bash
cp .env.example .env.local
```

| Variable | Purpose | Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Base URL for canonical URLs | Recommended |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Displayed on contact page | Optional |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Social link in footer | Optional |
| `NEXT_PUBLIC_TIKTOK_URL` | Social link in footer | Optional |
| `NEXT_PUBLIC_FACEBOOK_URL` | Social link in footer | Optional |

## Prototype Features & Limitations

This is a demand validation prototype. The following features are simulated:

| Feature | Status | Notes |
|---|---|---|
| Product browsing | ✅ Working | Local data, no CMS |
| Search & filters | ✅ Working | Client-side filtering |
| Product detail pages | ✅ Working | Static product data |
| Newsletter signup | ⚠️ Prototype | No backend, no data stored |
| Contact form | ⚠️ Prototype | No backend, no data sent |
| Notify Me button | ⚠️ Prototype | No notification service |
| Product images | ⚠️ Placeholder | Uses paw icon placeholders |
| Checkout / Payments | ❌ Not implemented | By design — demand validation only |
| User accounts | ❌ Not implemented | Not planned for MVP |
| Cart | ❌ Not implemented | Not needed for validation |
| Analytics | ❌ Not implemented | No tracking without configuration |

## Brand Colors

| Name | Hex | Usage |
|---|---|---|
| Charcoal | `#171717` | Primary text, buttons |
| Warm Ivory | `#F4EFE6` | Background |
| Muted Taupe | `#A18B72` | Accent, secondary text |
| Sand | `#D9CBB8` | Borders, subtle elements |
| White | `#FFFFFF` | Cards, inputs |

## Deployment

This project is ready for deployment on platforms with a free tier:

- **Vercel**: `npx vercel` (recommended for Next.js)
- **Netlify**: With Next.js adapter
- **Railway**: Docker-based deployment

No paid services, APIs, or databases are required.

## License

All rights reserved. © PAWLIYO
