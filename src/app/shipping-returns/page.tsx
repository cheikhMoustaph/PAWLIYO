import type { Metadata } from "next";
import Link from "next/link";
import { Truck, RotateCcw, PackageCheck, Clock } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "How Pawliyo will handle shipping, returns and exchanges once products move out of prototype. A draft policy for transparency.",
  alternates: { canonical: "/shipping-returns" },
  openGraph: {
    title: "Shipping & Returns · PAWLIYO",
    description:
      "A draft of the shipping and returns policy Pawliyo will adopt when products move out of prototype.",
    url: "/shipping-returns",
  },
};

export default function ShippingReturnsPage() {
  return (
    <div className="container-narrow py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Policy draft"
        title="Shipping & returns."
        description="Pawliyo is not shipping physical products yet. This page sets out the policy we'll adopt once listings move out of prototype — published now so you know what to expect."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <Notice
          icon={<PackageCheck className="size-5" aria-hidden />}
          title="Not yet shipping"
          description="Every product in the shop today is a research prototype. No orders are accepted, no payments are collected."
        />
        <Notice
          icon={<Clock className="size-5" aria-hidden />}
          title="This is a draft"
          description="Specifics like carriers, regions and timelines will be confirmed and updated here when products launch."
        />
      </div>

      <div className="mt-12 space-y-10">
        <Section title="Shipping" id="shipping">
          <p>
            When products launch, Pawliyo expects to ship to addresses within
            the United States initially, with select international destinations
            added over time. Carriers, rates and estimated delivery windows
            will be displayed at checkout before any payment is taken.
          </p>
          <p>
            We will not advertise free shipping, expedited delivery, or
            guaranteed delivery dates until those services are actually
            configured and verified.
          </p>
        </Section>

        <Section title="Processing time" id="processing">
          <p>
            Orders are expected to be processed within 1–3 business days once
            checkout is live. Pre-order and prototype-validated products will
            always show a clearly labeled expected ship window on the product
            page.
          </p>
        </Section>

        <Section title="Returns & exchanges" id="returns">
          <p>
            When we begin shipping, returns will be accepted within 30 days of
            delivery for unused items in original packaging. Refunds will be
            issued to the original payment method.
          </p>
          <ul className="ml-4 list-disc space-y-1.5 marker:text-taupe">
            <li>Items must be unused and in original packaging.</li>
            <li>Original shipping costs are non-refundable.</li>
            <li>Return shipping is the customer&apos;s responsibility unless the item arrived damaged.</li>
            <li>Exchanges are subject to inventory availability.</li>
          </ul>
        </Section>

        <Section title="Damaged or incorrect items" id="damaged">
          <p>
            If a product arrives damaged or you receive the wrong item,
            contact us within 7 days of delivery. We&apos;ll arrange a
            replacement or a full refund — including return shipping — once a
            real contact channel is live.
          </p>
        </Section>

        <Section title="Prototype period" id="prototype">
          <p>
            During the prototype period, the only way to register interest is
            via the prototype forms on this site. No order, payment, or
            shipping commitment exists. Once a product moves out of
            prototype, this policy will be updated with concrete carrier,
            rate, and timing details.
          </p>
        </Section>
      </div>

      <div className="mt-12 rounded-xl border border-border bg-muted/40 p-5">
        <p className="text-sm text-muted-foreground">
          Have a question about a specific product?{" "}
          <Link
            href="/contact"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Contact the studio
          </Link>{" "}
          and we&apos;ll get back to you.
        </p>
      </div>
    </div>
  );
}

function Notice({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary/60 text-foreground">
        {icon}
      </span>
      <div>
        <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function Section({
  title,
  id,
  children,
}: {
  title: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="scroll-mt-24">
      <h2
        id={id}
        className="font-display text-xl font-semibold tracking-tight text-foreground"
      >
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
