import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopBrowser } from "@/components/products/shop-browser";

export const metadata: Metadata = {
  title: "Shop — Pet Essentials",
  description:
    "Browse the Pawliyo collection of everyday pet essentials. Each product is a research prototype, validated before it ships.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop — Pet Essentials · PAWLIYO",
    description:
      "Browse the Pawliyo collection of everyday pet essentials.",
    url: "/shop",
  },
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="container-page py-20 text-center text-sm text-muted-foreground">
          Loading the collection…
        </div>
      }
    >
      <ShopBrowser />
    </Suspense>
  );
}
