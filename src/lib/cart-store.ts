"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * DemoCart
 *
 * A lightweight client-side demo cart. It uses localStorage only to remember
 * counts across reloads so the cart badge feels consistent during a visit.
 *
 * IMPORTANT: This is a *prototype*. Pawliyo does not process payments or
 * place real orders. The cart never transmits data to a server. It only
 * stores a small integer count + the most recently added product slug — no
 * personal information, addresses, or payment details are ever stored.
 */

export type DemoCartItem = {
  slug: string;
  name: string;
  quantity: number;
};

type DemoCartState = {
  items: DemoCartItem[];
  /** Total quantity, surfaced as the header badge. */
  count: number;
  addItem: (item: { slug: string; name: string; quantity?: number }) => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
};

export const useDemoCart = create<DemoCartState>()(
  persist(
    (set) => ({
      items: [],
      count: 0,
      addItem: ({ slug, name, quantity = 1 }) =>
        set((state) => {
          const existing = state.items.find((i) => i.slug === slug);
          const items = existing
            ? state.items.map((i) =>
                i.slug === slug
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              )
            : [...state.items, { slug, name, quantity }];
          return {
            items,
            count: items.reduce((acc, i) => acc + i.quantity, 0),
          };
        }),
      removeItem: (slug) =>
        set((state) => {
          const items = state.items.filter((i) => i.slug !== slug);
          return {
            items,
            count: items.reduce((acc, i) => acc + i.quantity, 0),
          };
        }),
      setQuantity: (slug, quantity) =>
        set((state) => {
          const items = state.items
            .map((i) => (i.slug === slug ? { ...i, quantity } : i))
            .filter((i) => i.quantity > 0);
          return {
            items,
            count: items.reduce((acc, i) => acc + i.quantity, 0),
          };
        }),
      clear: () => set({ items: [], count: 0 }),
    }),
    {
      name: "pawliyo:demo-cart",
      storage: createJSONStorage(() => localStorage),
      // Only persist counts; nothing sensitive is stored.
      partialize: ({ items, count }) => ({ items, count }),
    }
  )
);
