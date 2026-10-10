export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  price: number | null;
  currency: string;
  images: ProductImage[];
  features: string[];
  availability: 'coming_soon' | 'available' | 'out_of_stock';
  isFeatured: boolean;
}

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface BrandValue {
  title: string;
  description: string;
  icon: string;
}
