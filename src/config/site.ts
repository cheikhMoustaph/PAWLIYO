/**
 * Central brand + site configuration for PAWLIYO.
 *
 * Keep this file as the single source of truth for copy, contact details,
 * and feature flags so that marketing and legal copy can be updated without
 * touching component code.
 */

export const siteConfig = {
  name: "PAWLIYO",
  tagline: "PET ESSENTIALS · EVERYDAY CARE",
  shortTagline: "Everyday care, made better.",
  description:
    "Discover thoughtful pet essentials designed to make everyday care easier for dogs, cats, and their people.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  currency: "USD",
  currencySymbol: "$",

  // Contact channels. Empty values mean the channel is not configured yet,
  // and the UI will gracefully hide the corresponding links.
  contact: {
    email: "",
    phone: "",
    addressLines: [] as string[],
  },

  // Real social profile URLs only. Empty strings hide the link entirely.
  social: {
    instagram: "",
    twitter: "",
    tiktok: "",
    facebook: "",
    youtube: "",
  },

  // Navigation surfaced in the header and footer.
  nav: [
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as const,

  // Legal + support pages.
  footerLinks: [
    { label: "Shipping & Returns", href: "/shipping-returns" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ] as const,

  // Feature flags for prototype-stage functionality.
  features: {
    demoCart: true,
    interestFormPrototype: true,
    search: true,
  },
} as const;

export type SiteConfig = typeof siteConfig;
