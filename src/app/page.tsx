import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  HandHeart,
  ShieldCheck,
  PawPrint,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { ProductCard } from "@/components/products/product-card";
import { NewsletterInterestForm } from "@/components/forms/newsletter-interest-form";
import { PawliyoLogo, PawMark } from "@/components/site/logo";
import { getFeaturedProducts } from "@/data/products";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const featured = getFeaturedProducts(4);

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden border-b border-border bg-ivory"
      >
        <div className="container-page grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-5 xl:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-taupe">
              <PawPrint className="size-3.5" aria-hidden />
              {siteConfig.tagline}
            </span>
            <h1
              id="hero-heading"
              className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl"
            >
              Everyday care,
              <br className="hidden sm:block" /> made better.
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground text-pretty sm:text-lg">
              Thoughtful essentials for happier pets and easier everyday care.
              We&apos;re starting small — designing practical products we&apos;d
              use ourselves.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/shop">
                  Explore the Collection
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              A research-stage storefront. Listings are illustrative
              prototypes, not verified offers.
            </p>
          </div>

          <div className="lg:col-span-7 xl:col-span-7">
            <HeroImage />
          </div>
        </div>
      </section>

      {/* Brand values */}
      <section
        aria-labelledby="values-heading"
        className="border-b border-border bg-background"
      >
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why Pawliyo"
            title="Small studio. Practical ideas."
            description="We design everyday essentials that earn a place in your routine — built around how pets and people actually live."
            align="left"
            id="values-heading"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <BrandValue
              icon={<Sparkles className="size-5" aria-hidden />}
              title="Thoughtful Essentials"
              description="Each product begins with a real, repeated pain point — not a trend. We start there, and only build what earns its keep."
            />
            <BrandValue
              icon={<HandHeart className="size-5" aria-hidden />}
              title="Everyday Practicality"
              description="Simple, durable, easy to clean. Nothing precious, nothing fragile. Made for the messy reality of life with pets."
            />
            <BrandValue
              icon={<ShieldCheck className="size-5" aria-hidden />}
              title="Pet-First Care"
              description="We consider materials and ergonomics from a pet's point of view first — quiet operation, comfortable surfaces, safe finishes."
            />
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section
        aria-labelledby="featured-heading"
        className="border-b border-border bg-background"
      >
        <div className="container-page py-16 sm:py-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Featured"
              title="Starting points"
              description="A small, focused collection. Each item is a research prototype we're validating before scaling."
              id="featured-heading"
            />
            <Button asChild variant="ghost" className="self-start sm:self-end">
              <Link href="/shop">
                View all products
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <LifestyleSection />

      {/* Email interest */}
      <section
        aria-labelledby="interest-heading"
        className="border-b border-border bg-ivory"
      >
        <div className="container-page py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Stay in the loop"
                title="Be the first to know."
                description="Pawliyo launches slowly and intentionally. Share your email to be notified when a product moves from prototype to available."
                id="interest-heading"
              />
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <PawMark size={14} className="text-taupe" />
                  Early access to product validations
                </li>
                <li className="flex items-center gap-2">
                  <PawMark size={14} className="text-taupe" />
                  Honest studio updates, not marketing blasts
                </li>
                <li className="flex items-center gap-2">
                  <PawMark size={14} className="text-taupe" />
                  Zero spam. Unsubscribe anytime (when we launch a real list).
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6">
              <NewsletterInterestForm
                submitLabel="Register your interest"
                className="shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroImage() {
  return (
    <div className="relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-muted/50 sm:aspect-[5/4] lg:aspect-[6/5]">
        <Image
          src="/images/hero.jpg"
          alt="A calm golden retriever and a tabby cat resting together on a soft cream linen sofa in a sunlit minimalist home."
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute -bottom-6 -left-2 hidden rounded-xl border border-border bg-card p-4 shadow-sm sm:flex sm:items-center sm:gap-3">
        <PawliyoLogo iconSize={26} showWordmark={false} />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">
            {siteConfig.name}
          </p>
          <p className="text-xs text-muted-foreground">{siteConfig.tagline}</p>
        </div>
      </div>
    </div>
  );
}

function BrandValue({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 sm:p-6">
      <span className="grid size-10 place-items-center rounded-lg bg-secondary/60 text-foreground">
        {icon}
      </span>
      <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function LifestyleSection() {
  return (
    <section
      aria-labelledby="lifestyle-heading"
      className="border-b border-border bg-foreground text-background"
    >
      <div className="container-page py-0">
        <div className="grid items-center gap-0 lg:grid-cols-2">
          <div className="relative aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[520px]">
            <Image
              src="/images/lifestyle.jpg"
              alt="A person sitting on a wooden floor with their dog leaning against them, gentle petting, warm window light."
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="py-16 sm:py-20 lg:py-28 lg:pl-12 xl:pl-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-background/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-background/70">
              The everyday bond
            </span>
            <h2
              id="lifestyle-heading"
              className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-background text-balance sm:text-4xl lg:text-5xl"
            >
              Designed around the small, quiet moments.
            </h2>
            <p className="mt-5 max-w-lg text-base text-background/75 text-pretty sm:text-lg">
              A tidy floor after the litter box. A clean car after a muddy
              walk. A grooming brush that&apos;s actually a pleasure to hold.
              These are the moments we design for — the unglamorous, everyday
              ones that add up to a calmer household.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild variant="inverted" size="lg">
                <Link href="/about">
                  Read the studio story
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
