"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/products/product-card";
import { SectionHeading } from "@/components/site/section-heading";
import {
  getAllProducts,
  productCategories,
  searchProducts,
  type ProductCategory,
} from "@/data/products";
import { cn } from "@/lib/utils";

type Filters = {
  q: string;
  category: ProductCategory | "All";
};

export function ShopBrowser() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") ?? "";
  const initialCategory =
    (searchParams.get("category") as ProductCategory | null) ?? "All";

  const [filters, setFilters] = React.useState<Filters>({
    q: initialQuery,
    category: initialCategory,
  });

  // Sync state when the URL changes (e.g. user clicks a search result link
  // from elsewhere in the app).
  React.useEffect(() => {
    setFilters({
      q: searchParams.get("q") ?? "",
      category:
        (searchParams.get("category") as ProductCategory | null) ?? "All",
    });
  }, [searchParams]);

  // Update the URL when filters change so results are shareable.
  React.useEffect(() => {
    const params = new URLSearchParams();
    if (filters.q) params.set("q", filters.q);
    if (filters.category !== "All") params.set("category", filters.category);
    const queryString = params.toString();
    router.replace(queryString ? `/shop?${queryString}` : "/shop", {
      scroll: false,
    });
  }, [filters, router]);

  const products = React.useMemo(() => {
    const filtered =
      filters.category === "All"
        ? getAllProducts()
        : getAllProducts().filter((p) => p.category === filters.category);
    if (!filters.q.trim()) return filtered;
    return searchProducts(filters.q).filter((p) =>
      filters.category === "All" ? true : p.category === filters.category
    );
  }, [filters]);

  const hasActiveFilters =
    filters.q.trim().length > 0 || filters.category !== "All";

  function clearFilters() {
    setFilters({ q: "", category: "All" });
  }

  return (
    <div className="container-page py-10 sm:py-14">
      <SectionHeading
        eyebrow="Catalog"
        title="The Pawliyo collection"
        description="Every product below is a research prototype. We're validating demand before committing to inventory."
      />

      {/* Filter bar */}
      <div className="mt-8 flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:p-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="shop-search" className="sr-only">
            Search products
          </Label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              id="shop-search"
              type="search"
              value={filters.q}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, q: e.target.value }))
              }
              placeholder="Search by name, description or feature…"
              className="pl-9"
              aria-label="Search products"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="shop-category"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
          >
            <SlidersHorizontal className="size-3.5" aria-hidden />
            Category
          </Label>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Filter by category">
            {(["All", ...productCategories] as const).map((cat) => {
              const active = filters.category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, category: cat }))
                  }
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-brand",
                    active
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background text-foreground/80 hover:border-foreground/40 hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active filter summary + count */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {products.length} {products.length === 1 ? "product" : "products"}
          {filters.category !== "All" ? (
            <>
              {" "}
              in{" "}
              <span className="font-medium text-foreground">
                {filters.category}
              </span>
            </>
          ) : null}
        </p>
        {hasActiveFilters ? (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="size-4" aria-hidden />
            Clear filters
          </Button>
        ) : null}
      </div>

      {/* Grid + empty state */}
      {products.length === 0 ? (
        <EmptyState query={filters.q} onReset={clearFilters} />
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={idx < 4}
            />
          ))}
        </div>
      )}

      {/* Prototype notice */}
      <div className="mt-12 rounded-xl border border-border bg-muted/40 p-5 sm:p-6">
        <Badge variant="outline" className="text-taupe">
          Prototype notice
        </Badge>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Prices shown are illustrative estimates only. Listings marked
          <span className="mx-1 font-medium text-foreground">Coming soon</span>
          have not yet had their pricing confirmed by a verified supplier.
          Pawliyo will not collect payment or accept orders until listings move
          out of prototype. Use the &ldquo;Notify me when available&rdquo; button
          on any product page to register local interest.
        </p>
      </div>
    </div>
  );
}

function EmptyState({ query, onReset }: { query: string; onReset: () => void }) {
  return (
    <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card px-6 py-16 text-center">
      <Search className="size-8 text-muted-foreground/60" aria-hidden />
      <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground">
        No products match your filters.
      </h3>
      <p className="mt-1 max-w-md text-sm text-muted-foreground">
        {query
          ? `We couldn't find anything matching “${query}”. Try a different keyword or category.`
          : "Try a different category or keyword."}
      </p>
      <Button variant="outline" className="mt-5" onClick={onReset}>
        Reset filters
      </Button>
    </div>
  );
}

export default ShopBrowser;
