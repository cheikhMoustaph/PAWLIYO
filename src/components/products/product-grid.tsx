import * as React from "react";

import { ProductCard } from "@/components/products/product-card";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

type ProductGridProps = {
  products: Product[];
  /** Mark the first N images as priority (for above-the-fold rendering). */
  priorityCount?: number;
  className?: string;
  emptyState?: React.ReactNode;
};

export function ProductGrid({
  products,
  priorityCount = 0,
  className,
  emptyState,
}: ProductGridProps) {
  if (products.length === 0 && emptyState) {
    return <>{emptyState}</>;
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
    >
      {products.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={idx < priorityCount}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
