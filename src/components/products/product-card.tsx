import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  availabilityLabel,
  formatPrice,
  type Product,
} from "@/data/products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  /** Use `priority` to eagerly load the image above the fold. */
  priority?: boolean;
  className?: string;
};

/**
 * ProductCard
 *
 * Compact, premium product card. Always links to the real product detail page.
 * Shows a "Coming soon" badge when the price is not confirmed, instead of
 * presenting an illustrative price as a live offer.
 */
export function ProductCard({ product, priority, className }: ProductCardProps) {
  const showPrice =
    product.availability === "in-stock" &&
    product.priceConfirmed &&
    typeof product.price === "number";

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors duration-300 hover:border-foreground/30 focus-brand",
        className
      )}
      aria-label={`${product.name} — view details`}
    >
      <div className="relative aspect-square overflow-hidden bg-muted/40">
        <Image
          src={product.images[0]?.src ?? "/images/placeholder.svg"}
          alt={product.images[0]?.alt ?? product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-[1.03]"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {!showPrice ? (
            <Badge
              variant="outline"
              className="bg-background/85 text-foreground backdrop-blur"
            >
              {availabilityLabel(product)}
            </Badge>
          ) : null}
          {product.isFeatured ? (
            <Badge
              variant="secondary"
              className="bg-secondary text-secondary-foreground"
            >
              Featured
            </Badge>
          ) : null}
        </div>
        <span className="pointer-events-none absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-background/85 text-foreground opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-taupe">
            {product.category}
          </p>
          {showPrice ? (
            <p className="text-sm font-semibold text-foreground">
              {formatPrice(product.price!, product.currency)}
            </p>
          ) : (
            <p className="text-xs font-medium text-muted-foreground">
              {availabilityLabel(product)}
            </p>
          )}
        </div>
        <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {product.shortDescription}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 group-hover:underline">
          View product
          <ArrowUpRight className="size-4" aria-hidden />
        </span>
      </div>
    </Link>
  );
}

export default ProductCard;
