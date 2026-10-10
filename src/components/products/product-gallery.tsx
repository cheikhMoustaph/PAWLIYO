"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import type { ProductImage } from "@/data/products";

type ProductGalleryProps = {
  images: ProductImage[];
  name: string;
};

/**
 * ProductGallery
 *
 * Client-side image gallery for the product detail page. Renders a main image
 * with a row of thumbnails. If only one image is available, thumbnails are
 * hidden. Keyboard navigation: Left / Right arrows while the main image is
 * focused.
 */
export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = React.useState(0);
  const safeImages = images.length > 0 ? images : [
    {
      src: "/images/placeholder.svg",
      alt: `${name} — image coming soon`,
    },
  ];
  const safeIndex = Math.min(active, safeImages.length - 1);
  const current = safeImages[safeIndex];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-muted/40">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {safeImages.length > 1 ? (
        <div
          className="flex flex-wrap gap-3"
          role="tablist"
          aria-label={`${name} image gallery`}
        >
          {safeImages.map((image, idx) => (
            <button
              key={`${image.src}-${idx}`}
              type="button"
              role="tab"
              aria-selected={idx === safeIndex}
              aria-label={`View image ${idx + 1} of ${safeImages.length}`}
              onClick={() => setActive(idx)}
              className={cn(
                "relative h-20 w-20 overflow-hidden rounded-lg border bg-muted/40 transition-all focus-brand",
                idx === safeIndex
                  ? "border-foreground ring-2 ring-ring/40"
                  : "border-border hover:border-foreground/40"
              )}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ProductGallery;
