/**
 * Product catalog data and types.
 *
 * IMPORTANT — read me before editing
 * ----------------------------------
 * The listings below are *research prototypes*. They are illustrative
 * concepts used to validate demand. They are NOT verified supplier products,
 * and prices (when present) are illustrative estimates, not confirmed offers.
 *
 * When supplier agreements and landed costs are confirmed, replace the data
 * here. Each product supports:
 *
 *   - `priceConfirmed: true`  -> the price is treated as a live offer.
 *   - `priceConfirmed: false` -> the UI shows a "Coming soon" label and
 *                                surfaces a "Notify me when available" CTA.
 *
 * Adding a new product only requires appending to the `products` array below.
 * The shop, search, filters and detail pages pick it up automatically.
 */

export type ProductCategory =
  | "Cleaning & Cleanup"
  | "Grooming"
  | "Travel"
  | "Feeding"
  | "Comfort";

export type ProductAvailability = "in-stock" | "coming-soon" | "discontinued";

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  /**
   * Illustrative price in USD. When `priceConfirmed` is false the storefront
   * displays a "Coming soon" label instead of presenting this as an offer.
   */
  price?: number;
  currency: string;
  priceConfirmed: boolean;
  images: ProductImage[];
  features: ProductFeature[];
  availability: ProductAvailability;
  isFeatured: boolean;
  suitableFor: ("dogs" | "cats")[];
  createdAt: string;
}

/**
 * Helper: returns a display label for a product's availability.
 */
export function availabilityLabel(product: Product): string {
  switch (product.availability) {
    case "in-stock":
      return product.priceConfirmed ? "Available" : "Coming soon";
    case "coming-soon":
      return "Coming soon";
    case "discontinued":
      return "Retired";
  }
}

export function formatPrice(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `$${amount.toFixed(2)}`;
  }
}

export const products: Product[] = [
  {
    id: "paw-001",
    slug: "reusable-pet-hair-remover",
    name: "Reusable Pet Hair Remover",
    category: "Cleaning & Cleanup",
    shortDescription:
      "Lint-free surfaces in seconds, without sticky refills or single-use sheets.",
    description:
      "A reusable everyday tool designed to lift embedded pet hair from upholstery, bedding and car seats in a few quick passes. The textured roller captures fur without adhesives, then releases it into the catchment tray with a simple tap. Built to last, easy to clean, and quiet enough not to spook skittish pets.",
    price: 24,
    currency: "USD",
    priceConfirmed: false,
    images: [
      {
        src: "/images/products/hair-remover.jpg",
        alt: "Reusable pet hair remover roller in charcoal and ivory resting on a warm ivory surface.",
      },
    ],
    features: [
      {
        title: "No refills required",
        description:
          "Reusable design replaces single-use lint sheets and adhesives for less waste.",
      },
      {
        title: "Quiet in use",
        description:
          "Smooth-rolling motion that won't startle sensitive dogs or cats.",
      },
      {
        title: "Tap-to-empty tray",
        description:
          "Captured hair releases into a removable tray for a clean, fuss-free empty.",
      },
    ],
    availability: "coming-soon",
    isFeatured: true,
    suitableFor: ["dogs", "cats"],
    createdAt: "2025-01-12",
  },
  {
    id: "paw-002",
    slug: "cat-litter-trapping-mat",
    name: "Cat Litter Trapping Mat",
    category: "Cleaning & Cleanup",
    shortDescription:
      "Catch stray litter at the box, not on your floors — soft under paws, easy to shake clean.",
    description:
      "A double-layer mat designed to trap granules that stick to paws as your cat exits the litter box. The honeycomb top layer is gentle on paws, while the lower pocket collects stray litter for a quick pour-back. Waterproof backing protects floors; the matte taupe tone blends quietly into any room.",
    price: 19,
    currency: "USD",
    priceConfirmed: false,
    images: [
      {
        src: "/images/products/litter-mat.jpg",
        alt: "Double-layer cat litter trapping mat in sand and taupe tones on a warm ivory floor.",
      },
    ],
    features: [
      {
        title: "Double-layer honeycomb",
        description:
          "Soft top layer lets litter fall through; the lower pocket stores it for easy pour-back.",
      },
      {
        title: "Waterproof backing",
        description:
          "Protects hardwood and tile from moisture and tracked messes.",
      },
      {
        title: "Paw-friendly texture",
        description:
          "Gentle surface that cats are happy to step on as they leave the box.",
      },
    ],
    availability: "coming-soon",
    isFeatured: true,
    suitableFor: ["cats"],
    createdAt: "2025-01-15",
  },
  {
    id: "paw-003",
    slug: "pet-grooming-brush",
    name: "Pet Grooming Brush",
    category: "Grooming",
    shortDescription:
      "A daily brush that loosens tangles and loose coat, finished with a comfort-grip handle.",
    description:
      "An everyday grooming brush sized for both dogs and cats. Rounded stainless-steel pins glide through the topcoat to lift loose hair and distribute natural oils, while the cushioned pad flexes gently against the skin. The wooden handle is contoured for a comfortable grip during longer grooming sessions.",
    price: 28,
    currency: "USD",
    priceConfirmed: false,
    images: [
      {
        src: "/images/products/grooming-brush.jpg",
        alt: "Pet grooming brush with a charcoal wooden handle and soft ivory bristles on a warm ivory background.",
      },
    ],
    features: [
      {
        title: "Rounded pin tips",
        description:
          "Gentle on skin while still lifting tangles and loose undercoat.",
      },
      {
        title: "Cushioned pad",
        description:
          "Flexes with your pet's body so brushing stays comfortable, even on sensitive spots.",
      },
      {
        title: "Contoured wooden handle",
        description:
          "Balanced grip designed for everyday brushing sessions.",
      },
    ],
    availability: "coming-soon",
    isFeatured: true,
    suitableFor: ["dogs", "cats"],
    createdAt: "2025-01-18",
  },
  {
    id: "paw-004",
    slug: "waterproof-dog-car-seat-cover",
    name: "Waterproof Dog Car Seat Cover",
    category: "Travel",
    shortDescription:
      "Protect your back seat from mud, hair and spills — a quilted, waterproof barrier that stays put.",
    description:
      "A quilted back-seat cover built for everyday adventures. The waterproof backing blocks moisture, mud and accidents, while the quilted top layer keeps your dog comfortable on longer rides. Adjustable straps and seat-belt openings keep the cover securely in place on most vehicles.",
    price: 49,
    currency: "USD",
    priceConfirmed: false,
    images: [
      {
        src: "/images/products/car-seat-cover.jpg",
        alt: "Waterproof dog car seat cover in charcoal and taupe quilted fabric draped over a back seat.",
      },
    ],
    features: [
      {
        title: "Waterproof backing",
        description:
          "Seals out moisture, mud and accidents to protect your upholstery.",
      },
      {
        title: "Quilted, non-slip top",
        description:
          "Comfortable for your dog and designed to stay in place on the drive.",
      },
      {
        title: "Seat-belt openings",
        description:
          "Lets you buckle your dog in safely without removing the cover.",
      },
    ],
    availability: "coming-soon",
    isFeatured: true,
    suitableFor: ["dogs"],
    createdAt: "2025-01-22",
  },
];

/* ----------------------------- Catalog helpers ---------------------------- */

export const productCategories: ProductCategory[] = [
  "Cleaning & Cleanup",
  "Grooming",
  "Travel",
  "Feeding",
  "Comfort",
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(limit: number = 4): Product[] {
  return products.filter((product) => product.isFeatured).slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return products;
  return products.filter((product) => {
    const haystack = [
      product.name,
      product.shortDescription,
      product.description,
      product.category,
      ...product.features.map((feature) => feature.title),
      ...product.features.map((feature) => feature.description),
      ...product.suitableFor,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(normalized);
  });
}

export function filterByCategory(category: ProductCategory | "All"): Product[] {
  if (category === "All") return products;
  return products.filter((product) => product.category === category);
}

export function getRelatedProducts(
  product: Product,
  limit: number = 3
): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id))
    .slice(0, limit);
}
