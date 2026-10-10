"use client";

import * as React from "react";
import { Bell, ShoppingBag, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useDemoCart } from "@/lib/cart-store";
import type { Product } from "@/data/products";

type ProductInterestButtonProps = {
  product: Product;
};

/**
 * ProductInterestButton
 *
 * The primary CTA on the product detail page. Because Pawliyo does not accept
 * orders or payments, this button registers interest locally:
 *
 *   - Adds the product to the demo cart (persisted to localStorage as a
 *     small integer count + slug — no personal information).
 *   - Shows a brief confirmation state.
 *
 * No data is transmitted to a server.
 */
export function ProductInterestButton({ product }: ProductInterestButtonProps) {
  const addItem = useDemoCart((s) => s.addItem);
  const [notified, setNotified] = React.useState(false);

  function handleClick() {
    addItem({
      slug: product.slug,
      name: product.name,
      quantity: 1,
    });
    setNotified(true);
    window.setTimeout(() => setNotified(false), 2200);
  }

  return (
    <Button
      type="button"
      size="lg"
      variant={notified ? "taupe" : "solid"}
      onClick={handleClick}
      className="w-full sm:w-auto"
      aria-live="polite"
    >
      {notified ? (
        <>
          <Check className="size-4" aria-hidden />
          Added to your interest list
        </>
      ) : (
        <>
          <Bell className="size-4" aria-hidden />
          Notify me when available
        </>
      )}
    </Button>
  );
}

/**
 * Secondary add-to-interest action presented in the same sidebar.
 * Marked as a prototype so visitors understand it does not place an order.
 */
export function AddToInterestListButton({
  product,
}: ProductInterestButtonProps) {
  const addItem = useDemoCart((s) => s.addItem);
  return (
    <Button
      type="button"
      variant="outline"
      onClick={() =>
        addItem({ slug: product.slug, name: product.name, quantity: 1 })
      }
    >
      <ShoppingBag className="size-4" aria-hidden />
      Add to interest list
    </Button>
  );
}

export default ProductInterestButton;
