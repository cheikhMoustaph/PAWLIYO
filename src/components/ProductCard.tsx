import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block no-underline"
    >
      <div className="aspect-square bg-ivory overflow-hidden">
        <div
          className="w-full h-full bg-sand/30 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
          role="img"
          aria-label={product.images[0]?.alt || product.name}
        >
          {/* Product image placeholder — replace with Next Image when real assets are available */}
          <div className="text-center p-6">
            <svg
              className="w-16 h-16 mx-auto text-taupe/40"
              fill="none"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <ellipse cx="20" cy="26" rx="9" ry="7.5" fill="currentColor" />
              <ellipse cx="10" cy="13" rx="4" ry="5" transform="rotate(-10 10 13)" fill="currentColor" />
              <ellipse cx="30" cy="13" rx="4" ry="5" transform="rotate(10 30 13)" fill="currentColor" />
              <ellipse cx="15.5" cy="8" rx="3.5" ry="4.5" transform="rotate(-5 15.5 8)" fill="currentColor" />
              <ellipse cx="24.5" cy="8" rx="3.5" ry="4.5" transform="rotate(5 24.5 8)" fill="currentColor" />
            </svg>
            <p className="mt-3 text-xs text-taupe/60 uppercase tracking-widest">
              {product.category}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-1.5">
        <h3 className="text-sm font-medium text-charcoal tracking-wide group-hover:text-taupe transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-xs text-taupe leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="pt-1">
          {product.price !== null && product.availability === 'available' ? (
            <span className="text-sm font-medium text-charcoal">
              ${product.price.toFixed(2)} {product.currency}
            </span>
          ) : (
            <span className="text-xs font-medium text-taupe uppercase tracking-wider">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
