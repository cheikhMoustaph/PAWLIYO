import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Heart,
  ShoppingBag,
  Tag,
  Truck,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductCard } from "@/components/products/product-card";
import { NewsletterInterestForm } from "@/components/forms/newsletter-interest-form";
import { ProductInterestButton } from "@/components/products/product-interest-button";
import { SectionHeading } from "@/components/site/section-heading";
import {
  getProductBySlug,
  getRelatedProducts,
  formatPrice,
  availabilityLabel,
  products as allProducts,
} from "@/data/products";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return {
      title: "Product not found",
      description: "We couldn't find that product.",
    };
  }

  const title = `${product.name} — Pet Essentials`;
  const description = product.shortDescription;
  const images = product.images.map((img) => ({
    url: img.src,
    width: 1024,
    height: 1024,
    alt: img.alt,
  }));

  return {
    title,
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} · PAWLIYO`,
      description,
      url: `/products/${product.slug}`,
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} · PAWLIYO`,
      description,
      images: images.map((i) => i.url),
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 3);
  const showPrice =
    product.availability === "in-stock" &&
    product.priceConfirmed &&
    typeof product.price === "number";

  return (
    <div className="container-page py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/shop" className="hover:text-foreground hover:underline">
              Shop
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link
              href={`/shop?category=${encodeURIComponent(product.category)}`}
              className="hover:text-foreground hover:underline"
            >
              {product.category}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-foreground" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Gallery */}
        <div className="lg:col-span-7">
          <ProductGallery images={product.images} name={product.name} />
        </div>

        {/* Summary */}
        <aside className="lg:col-span-5">
          <div className="flex flex-col gap-5 lg:sticky lg:top-24">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-taupe">
                  {product.category}
                </span>
                <Badge variant="outline" className="text-foreground">
                  {availabilityLabel(product)}
                </Badge>
              </div>
              <h1 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
                {product.name}
              </h1>
              <p className="text-base text-muted-foreground text-pretty">
                {product.shortDescription}
              </p>
            </div>

            {/* Price block */}
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Price
                </span>
                {showPrice ? (
                  <span className="font-display text-2xl font-semibold text-foreground">
                    {formatPrice(product.price!, product.currency)}
                  </span>
                ) : (
                  <span className="font-display text-2xl font-semibold text-muted-foreground">
                    Coming soon
                  </span>
                )}
              </div>
              {!showPrice ? (
                <p className="mt-2 text-xs text-muted-foreground">
                  Pricing is illustrative only and has not been confirmed by a
                  verified supplier. Pawliyo is not accepting orders for this
                  product yet.
                </p>
              ) : (
                <p className="mt-2 text-xs text-muted-foreground">
                  Includes taxes where applicable. Shipping calculated at
                  checkout — once checkout is enabled.
                </p>
              )}
            </div>

            {/* Quantity + interest CTA */}
            <QuantityRow />
            <div className="flex flex-col gap-3">
              <ProductInterestButton product={product} />
              <Button
                asChild
                variant="outline"
                size="lg"
                aria-label="Register your interest in this product"
              >
                <Link href="#interest-form">Register your interest</Link>
              </Button>
            </div>

            {/* Quick facts */}
            <ul className="grid gap-3 rounded-xl border border-border bg-card p-5 text-sm">
              <li className="flex items-start gap-3">
                <Tag className="mt-0.5 size-4 text-taupe" aria-hidden />
                <span className="text-muted-foreground">
                  <span className="text-foreground">Suitable for:</span>{" "}
                  {product.suitableFor
                    .map((s) => (s === "dogs" ? "Dogs" : "Cats"))
                    .join(" · ")}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Truck className="mt-0.5 size-4 text-taupe" aria-hidden />
                <span className="text-muted-foreground">
                  <span className="text-foreground">Availability:</span>{" "}
                  {product.availability === "in-stock"
                    ? "In development — not yet shipping."
                    : "Research prototype — not yet shipping."}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck
                  className="mt-0.5 size-4 text-taupe"
                  aria-hidden
                />
                <span className="text-muted-foreground">
                  <span className="text-foreground">Status:</span> Validating
                  demand. No payment will be collected.
                </span>
              </li>
            </ul>

            {/* Disclosure */}
            <p className="text-xs text-muted-foreground">
              This is a prototype listing. Images are illustrative and may differ
              from the final product. Do not treat this page as an offer to
              sell.
            </p>
          </div>
        </aside>
      </div>

      {/* Description + features */}
      <section
        aria-labelledby="details-heading"
        className="mt-16 grid gap-10 lg:grid-cols-12"
      >
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="About this product"
            title="Built for everyday care."
            id="details-heading"
          />
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            {product.description
              .split(/\n\n+/)
              .filter(Boolean)
              .map((paragraph, idx) => (
                <p key={idx} className="text-pretty">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            Key features
          </h2>
          <ul className="mt-4 space-y-3">
            {product.features.map((feature) => (
              <li
                key={feature.title}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-foreground text-background">
                  <Check className="size-3.5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {feature.title}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Interest form */}
      <section
        id="interest-form"
        aria-labelledby="interest-heading"
        className="scroll-mt-24 rounded-2xl border border-border bg-ivory p-6 sm:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Demand validation"
              title="Notify me when available."
              description="Pawliyo is currently gauging interest in this product. Share your email and we'll be in touch if and when it moves closer to launch."
              id="interest-heading"
            />
            <p className="mt-4 text-sm text-muted-foreground">
              Your details are never sold or shared. This is a prototype form —
              see disclosure below.
            </p>
          </div>
          <div className="lg:col-span-6">
            <NewsletterInterestForm
              product={{ slug: product.slug, name: product.name }}
              submitLabel="Notify me when available"
            />
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 ? (
        <section
          aria-labelledby="related-heading"
          className="mt-16"
        >
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="You may also like"
              title="Related products"
              id="related-heading"
            />
            <Button asChild variant="ghost">
              <Link href="/shop">
                View all
                <ArrowLeft className="size-4 rotate-180" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function QuantityRow() {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="quantity"
        className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
      >
        Qty
      </label>
      <input
        id="quantity"
        type="number"
        min={1}
        defaultValue={1}
        className="h-10 w-20 rounded-md border border-border bg-card px-3 text-sm font-medium focus-brand"
      />
      <Button variant="ghost" size="sm" className="ml-auto text-muted-foreground">
        <Heart className="size-4" aria-hidden />
        Save for later
      </Button>
    </div>
  );
}
