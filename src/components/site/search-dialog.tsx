"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  searchProducts,
  formatPrice,
  availabilityLabel,
  type Product,
} from "@/data/products";

type SearchDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const QUICK_LINKS = [
  { label: "Shop all", href: "/shop" },
  { label: "Cleaning & Cleanup", href: "/shop?category=Cleaning+%26+Cleanup" },
  { label: "Grooming", href: "/shop?category=Grooming" },
  { label: "Travel", href: "/shop?category=Travel" },
];

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<Product[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (open) {
      // Focus after the dialog mounts
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      // Reset shortly after close to avoid a flash of stale results
      const t = setTimeout(() => setQuery(""), 150);
      return () => clearTimeout(t);
    }
  }, [open]);

  React.useEffect(() => {
    setResults(searchProducts(query).slice(0, 6));
  }, [query]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    onOpenChange(false);
    router.push(q ? `/shop?q=${encodeURIComponent(q)}` : "/shop");
  }

  const router = useRouter();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="top-[15%] translate-y-0 rounded-xl border-border bg-card p-0 sm:max-w-xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Search products</DialogTitle>
          <DialogDescription>
            Search the Pawliyo catalog by name, description or feature.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-b border-border px-4"
        >
          <Search className="size-5 text-muted-foreground" aria-hidden />
          <Input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, categories or features…"
            aria-label="Search products"
            className="h-12 border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
          />
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-md p-1.5 text-muted-foreground hover:bg-foreground/5 focus-brand"
            aria-label="Close search"
          >
            <X className="size-4" />
          </button>
        </form>

        <div className="max-h-[60vh] overflow-y-auto px-2 pb-3">
          {query.trim().length === 0 ? (
            <div className="px-3 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Popular
              </p>
              <ul className="mt-3 space-y-1">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => onOpenChange(false)}
                      className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-foreground hover:bg-foreground/[0.04] focus-brand"
                    >
                      {link.label}
                      <ArrowRight className="size-4 text-muted-foreground" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-10 text-center">
              <p className="text-sm text-muted-foreground">
                No products match
                <span className="mx-1 font-medium text-foreground">
                  “{query}”
                </span>
                yet.
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Try a different term, or browse the full catalog.
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => onOpenChange(false)}
              >
                <Link href="/shop">Browse all products</Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-0.5">
              {results.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.slug}`}
                    onClick={() => onOpenChange(false)}
                    className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-foreground/[0.04] focus-brand"
                  >
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-muted/40">
                      <Image
                        src={product.images[0]?.src ?? "/images/placeholder.svg"}
                        alt=""
                        fill
                        sizes="48px"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">
                        {product.name}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {product.category} ·{" "}
                        {product.priceConfirmed && product.price
                          ? formatPrice(product.price, product.currency)
                          : availabilityLabel(product)}
                      </p>
                    </div>
                    <ArrowRight
                      className="size-4 text-muted-foreground"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SearchDialog;
