import { Product } from '@/types';

/**
 * PAWLIYO Product Catalog
 *
 * IMPORTANT: All listings are research prototypes for demand validation.
 * Prices shown are illustrative estimates, NOT confirmed supplier pricing.
 * Replace with verified pricing once supplier agreements are finalized.
 */
export const products: Product[] = [
  {
    id: 'prod_001',
    slug: 'reusable-pet-hair-remover',
    name: 'Reusable Pet Hair Remover',
    category: 'Grooming',
    shortDescription:
      'Effortlessly remove pet hair from furniture, clothing, and car seats — no refills needed.',
    description:
      'The PAWLIYO Reusable Pet Hair Remover uses an electrostatic design to lift and trap pet hair from virtually any fabric surface. Simply roll it across your couch, bedding, or clothes, empty the lint compartment, and reuse it again and again. No sticky sheets, no waste, no ongoing costs. Compact enough to keep in a drawer or take on the go.',
    price: null,
    currency: 'USD',
    images: [
      {
        src: '/images/products/hair-remover-1.jpg',
        alt: 'Reusable pet hair remover roller on a sofa with pet hair',
        width: 800,
        height: 800,
      },
      {
        src: '/images/products/hair-remover-2.jpg',
        alt: 'Close-up of the pet hair remover lint compartment',
        width: 800,
        height: 800,
      },
    ],
    features: [
      'Self-cleaning lint compartment — empty and reuse',
      'Works on furniture, clothing, bedding, and car seats',
      'No adhesive sheets or refills required',
      'Compact and portable design',
      'Suitable for all hair types — dogs, cats, and more',
    ],
    availability: 'coming_soon',
    isFeatured: true,
  },
  {
    id: 'prod_002',
    slug: 'cat-litter-trapping-mat',
    name: 'Cat Litter Trapping Mat',
    category: 'Cat Care',
    shortDescription:
      'A dual-layer mat that catches litter scatter before it spreads through your home.',
    description:
      'Keep your floors clean with the PAWLIYO Cat Litter Trapping Mat. The dual-layer honeycomb design captures litter particles as your cat steps out of the box, preventing tracking throughout your home. The top layer is soft on sensitive paws, while the bottom layer collects debris for easy disposal. Waterproof backing protects your floors from moisture. Simply lift, shake off the litter, and place it back.',
    price: null,
    currency: 'USD',
    images: [
      {
        src: '/images/products/litter-mat-1.jpg',
        alt: 'Cat litter trapping mat placed next to a litter box',
        width: 800,
        height: 800,
      },
      {
        src: '/images/products/litter-mat-2.jpg',
        alt: 'Close-up of the honeycomb texture of the litter mat',
        width: 800,
        height: 800,
      },
    ],
    features: [
      'Dual-layer honeycomb design traps litter effectively',
      'Soft, paw-friendly top surface',
      'Waterproof bottom layer protects floors',
      'Easy to clean — shake, vacuum, or rinse',
      'Non-slip backing keeps mat in place',
    ],
    availability: 'coming_soon',
    isFeatured: true,
  },
  {
    id: 'prod_003',
    slug: 'pet-grooming-brush',
    name: 'Pet Grooming Brush',
    category: 'Grooming',
    shortDescription:
      'A gentle, ergonomic brush that removes loose fur while massaging your pet\'s skin.',
    description:
      'The PAWLIYO Pet Grooming Brush features fine, flexible bristles that glide through your pet\'s coat to remove loose hair, reduce shedding, and distribute natural oils for a healthier shine. The ergonomic handle and one-click hair release button make grooming sessions quick and comfortable for both you and your pet. Suitable for dogs and cats of all sizes and coat types.',
    price: null,
    currency: 'USD',
    images: [
      {
        src: '/images/products/grooming-brush-1.jpg',
        alt: 'Pet grooming brush with ergonomic handle',
        width: 800,
        height: 800,
      },
      {
        src: '/images/products/grooming-brush-2.jpg',
        alt: 'Grooming brush being used on a golden retriever',
        width: 800,
        height: 800,
      },
    ],
    features: [
      'Fine, flexible bristles are gentle on skin',
      'One-click hair release for easy cleaning',
      'Ergonomic, non-slip handle for comfortable grooming',
      'Reduces shedding and promotes a healthy coat',
      'Suitable for dogs and cats of all sizes',
    ],
    availability: 'coming_soon',
    isFeatured: true,
  },
  {
    id: 'prod_004',
    slug: 'waterproof-dog-car-seat-cover',
    name: 'Waterproof Dog Car Seat Cover',
    category: 'Travel',
    shortDescription:
      'Protect your car seats from dirt, hair, and scratches with a durable, waterproof cover.',
    description:
      'The PAWLIYO Waterproof Dog Car Seat Cover shields your back seat from muddy paws, pet hair, drool, and scratches. Made from heavy-duty, waterproof Oxford fabric with a non-slip backing, it installs in minutes with adjustable headrest straps and seat anchors. Side flaps provide extra door protection, and the hammock-style design prevents your dog from falling into the footwell. Easy to remove and machine washable.',
    price: null,
    currency: 'USD',
    images: [
      {
        src: '/images/products/car-seat-cover-1.jpg',
        alt: 'Waterproof dog car seat cover installed in a vehicle',
        width: 800,
        height: 800,
      },
      {
        src: '/images/products/car-seat-cover-2.jpg',
        alt: 'Dog sitting comfortably on the car seat cover',
        width: 800,
        height: 800,
      },
    ],
    features: [
      'Heavy-duty waterproof Oxford fabric',
      'Non-slip backing with seat anchors',
      'Hammock-style design with side flaps',
      'Adjustable headrest straps fit most vehicles',
      'Machine washable for easy maintenance',
    ],
    availability: 'coming_soon',
    isFeatured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getCategories(): string[] {
  return Array.from(new Set(products.map((p) => p.category)));
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.shortDescription.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
  );
}
