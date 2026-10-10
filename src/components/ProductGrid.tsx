import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <svg
          className="w-12 h-12 mx-auto text-sand"
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
        <p className="mt-4 text-taupe text-sm">
          No products found matching your criteria.
        </p>
        <p className="mt-1 text-taupe/60 text-xs">
          Try adjusting your search or filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
