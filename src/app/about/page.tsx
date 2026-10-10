import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Layers, Leaf, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { PawMark } from "@/components/site/logo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Pawliyo",
  description:
    "Pawliyo is a small studio exploring thoughtful, practical pet essentials — designed around how pets and people actually live.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Pawliyo · PAWLIYO",
    description:
      "A small studio exploring thoughtful, practical pet essentials — designed around how pets and people actually live.",
    url: "/about",
  },
};

const principles = [
  {
    icon: <Compass className="size-5" aria-hidden />,
    title: "Start from a real problem",
    description:
      "We don't follow trends. Every product begins with a pain point that recurs in everyday pet care.",
  },
  {
    icon: <Layers className="size-5" aria-hidden />,
    title: "Design for the long haul",
    description:
      "Durable, repairable, easy to clean. Nothing precious, nothing designed to be replaced next season.",
  },
  {
    icon: <Leaf className="size-5" aria-hidden />,
    title: "Reduce what gets thrown away",
    description:
      "Refills and disposables replaced by reusable alternatives where they actually work better.",
  },
  {
    icon: <Users className="size-5" aria-hidden />,
    title: "Validate before we ship",
    description:
      "We list prototypes, gauge real interest, and only commit to production when something earns it.",
  },
];

const timeline = [
  {
    phase: "Phase 01 — Now",
    title: "Validate",
    description:
      "Prototype listings like the ones in our shop. We're gauging demand before any inventory commitment.",
  },
  {
    phase: "Phase 02 — Next",
    title: "Source",
    description:
      "Confirm responsible suppliers, materials and landed cost. Replace illustrative prices with verified ones.",
  },
  {
    phase: "Phase 03 — Later",
    title: "Launch",
    description:
      "Move validated products into a real catalog with secure checkout, shipping, and clear policies.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-ivory">
        <div className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-taupe">
              <PawMark size={14} />
              {siteConfig.tagline}
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              A small studio with a practical point of view.
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground text-pretty sm:text-lg">
              Pawliyo started as a frustration: too many pet products that look
              great in photos but fall apart after a week. We&apos;re building
              the opposite — quiet, durable essentials that earn a place in
              your routine.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/shop">
                  See the collection
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Talk to us</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted/50">
              <Image
                src="/images/lifestyle.jpg"
                alt="A person sitting on a wooden floor with their dog leaning against them, gentle petting, warm window light."
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-border bg-background">
        <div className="container-page py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="The story"
                title="Why we started."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground text-pretty">
                <p>
                  Pawliyo was born out of an everyday frustration: a dog that
                  shed everywhere, a cat that tracked litter across the
                  apartment, a car seat that never quite survived a muddy
                  walk. The products we tried were either cheap and disposable,
                  or expensive and decorative — neither built for real life.
                </p>
                <p>
                  We&apos;re a small studio, not a sprawling brand. We&apos;re
                  using this storefront to validate ideas slowly and
                  honestly. Each listing is a research prototype: we describe
                  what we&apos;re aiming for, gauge real interest, and only
                  commit to production when something earns it.
                </p>
                <p>
                  We will not advertise products we wouldn&apos;t use ourselves.
                  We won&apos;t claim certifications we don&apos;t have. And we
                  will not collect a single dollar until there&apos;s a real
                  product ready to ship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-border bg-background">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="What we believe"
            title="Four working principles."
            description="These shape every product decision we make, from concept to shipping."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 sm:p-6"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-secondary/60 text-foreground">
                  {principle.icon}
                </span>
                <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-b border-border bg-foreground text-background">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="Where we are"
            title="An honest roadmap."
            description="Pawliyo moves slowly on purpose. Here's how we're thinking about what comes next."
          />
          <ol className="mt-10 grid gap-5 sm:grid-cols-3">
            {timeline.map((step, idx) => (
              <li
                key={step.phase}
                className="relative rounded-xl border border-background/15 bg-background/[0.04] p-5 sm:p-6"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-background/60">
                  {step.phase}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-background">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-background/75">
                  {step.description}
                </p>
                {idx === 0 ? (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground">
                    You are here
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="container-page py-16 text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            See what we&apos;re working on.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Every product in the shop is a prototype we&apos;re validating
            right now.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/shop">
              Explore the collection
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
