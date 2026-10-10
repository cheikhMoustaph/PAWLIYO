"use client";

import * as React from "react";
import Link from "next/link";
import { ShoppingBag, X, Plus, Minus, Trash2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDemoCart } from "@/lib/cart-store";

type CartDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/**
 * CartDialog
 *
 * Prototype-only cart drawer. It shows the items a visitor has expressed
 * interest in, but does NOT submit any order. There is no payment step, no
 * shipping form, and nothing is sent to a server. The dialog clearly
 * discloses this.
 */
export function CartDialog({ open, onOpenChange }: CartDialogProps) {
  const items = useDemoCart((s) => s.items);
  const count = useDemoCart((s) => s.count);
  const setQuantity = useDemoCart((s) => s.setQuantity);
  const removeItem = useDemoCart((s) => s.removeItem);
  const clear = useDemoCart((s) => s.clear);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="top-0 right-0 left-auto bottom-0 m-0 h-full w-full max-w-md translate-x-0 translate-y-0 rounded-none border-l sm:max-w-md">
        <DialogHeader className="border-b border-border px-5 pb-4">
          <DialogTitle className="font-display text-lg tracking-tight">
            Your interest list
          </DialogTitle>
          <DialogDescription>
            A local demo cart. No checkout — nothing is sent to a server.
          </DialogDescription>
          <DialogClose
            className="absolute right-4 top-4 rounded-md p-1.5 text-muted-foreground hover:bg-foreground/5 focus-brand"
            aria-label="Close cart"
          >
            <X className="size-4" />
          </DialogClose>
        </DialogHeader>

        <div className="flex min-h-0 flex-1 flex-col">
          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <ShoppingBag
                className="size-10 text-muted-foreground/70"
                aria-hidden
              />
              <p className="mt-4 text-sm text-muted-foreground">
                Your interest list is empty.
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Add products from the catalog to remember them here.
              </p>
              <Button asChild className="mt-5" onClick={() => onOpenChange(false)}>
                <Link href="/shop">Browse the catalog</Link>
              </Button>
            </div>
          ) : (
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
              {items.map((item) => (
                <li
                  key={item.slug}
                  className="flex items-center gap-3 py-4"
                >
                  <div className="flex min-w-0 flex-1 flex-col">
                    <Link
                      href={`/products/${item.slug}`}
                      onClick={() => onOpenChange(false)}
                      className="truncate text-sm font-medium text-foreground hover:underline"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      Prototype listing
                    </p>
                  </div>
                  <div className="flex items-center rounded-md border border-border">
                    <button
                      type="button"
                      onClick={() => setQuantity(item.slug, item.quantity - 1)}
                      className="grid h-8 w-8 place-items-center rounded-l-md text-muted-foreground hover:bg-foreground/5 focus-brand"
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span
                      className="min-w-6 text-center text-xs font-medium"
                      aria-live="polite"
                    >
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(item.slug, item.quantity + 1)}
                      className="grid h-8 w-8 place-items-center rounded-r-md text-muted-foreground hover:bg-foreground/5 focus-brand"
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.slug)}
                    className="rounded-md p-2 text-muted-foreground hover:bg-foreground/5 focus-brand"
                    aria-label={`Remove ${item.name} from interest list`}
                  >
                    <Trash2 className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 ? (
          <div className="border-t border-border px-5 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Items in list</span>
              <span className="font-medium">{count}</span>
            </div>
            <p className="mt-2 rounded-md bg-muted/60 px-3 py-2 text-xs text-muted-foreground">
              Pawliyo does not accept payments or place orders yet. This cart
              is a local prototype — clearing your browser resets it.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <Button
                asChild
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                <Link href="/contact">Ask about these products</Link>
              </Button>
              <Button
                variant="ghost"
                onClick={() => clear()}
                className="text-muted-foreground"
              >
                Clear interest list
              </Button>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

export default CartDialog;
