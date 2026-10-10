export const siteConfig = {
  name: 'PAWLIYO',
  tagline: 'PET ESSENTIALS · EVERYDAY CARE',
  description:
    'Discover thoughtful pet essentials designed to make everyday care easier for dogs, cats, and their people.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || '',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
  },
} as const;

export const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerLinks = {
  shop: [
    { label: 'All Products', href: '/shop' },
    { label: 'Grooming', href: '/shop?category=Grooming' },
    { label: 'Cat Care', href: '/shop?category=Cat+Care' },
    { label: 'Travel', href: '/shop?category=Travel' },
  ],
  company: [
    { label: 'About PAWLIYO', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  support: [
    { label: 'Shipping & Returns', href: '/shipping-returns' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;
