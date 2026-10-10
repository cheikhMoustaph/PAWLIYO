import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PawMark } from "@/components/site/logo";
import { getFeaturedProducts } from "@/data/products";

export default function NotFound() {
  const suggestions = getFeaturedProducts(3);

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <PawMark size={56} className="text-taupe" />
      <p className="mt-6 font-display text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
        404
      </p>
      <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        We can&apos;t find that page.
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The link may be broken, or the page may have moved. Try the search,
        or head back to the homepage.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <Link href="/">
            <Home className="size-4" aria-hidden />
            Back to homepage
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/shop">
            <Search className="size-4" aria-hidden />
            Browse the collection
          </Link>
        </Button>
      </div>

      {suggestions.length > 0 ? (
        <div className="mt-12 w-full max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-taupe">
            A few products to explore
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {suggestions.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group flex flex-col gap-1 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-foreground/30 focus-brand"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taupe">
                    {product.category}
                  </span>
                  <span className="font-display text-sm font-semibold tracking-tight text-foreground">
                    {product.name}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground">
                    <ArrowLeft className="size-3 rotate-180" aria-hidden />
                    View product
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
