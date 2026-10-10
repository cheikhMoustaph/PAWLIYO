import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Pawliyo",
  description:
    "Get in touch with the Pawliyo studio. Product questions, partnerships, press — we'd love to hear from you.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Pawliyo · PAWLIYO",
    description:
      "Get in touch with the Pawliyo studio about products, partnerships, or press.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="container-page py-12 sm:py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Left: copy */}
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title="Talk to the studio."
            description="Questions, ideas, supplier conversations — we read every message. We'll reply as quickly as a small team can."
          />

          <div className="mt-8 grid gap-4">
            <ContactItem
              icon={<MessageCircle className="size-4" aria-hidden />}
              label="General inquiries"
              value="Use the form on this page — it's the fastest route."
            />
            <ContactItem
              icon={<Mail className="size-4" aria-hidden />}
              label="Email"
              value={
                siteConfig.contact.email ? (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                ) : (
                  "Pending — a dedicated mailbox will be published here once configured."
                )
              }
            />
            <ContactItem
              icon={<Clock className="size-4" aria-hidden />}
              label="Response time"
              value="Usually within two business days, once a real backend is live."
            />
            <ContactItem
              icon={<MapPin className="size-4" aria-hidden />}
              label="Studio"
              value={
                siteConfig.contact.addressLines.length > 0
                  ? siteConfig.contact.addressLines.join(" · ")
                  : "United States · remote-first"
              }
            />
          </div>

          <div className="mt-10 rounded-xl border border-border bg-muted/40 p-5">
            <p className="text-sm text-muted-foreground">
              Looking for product support? Many of our prototype listings
              include details on the product page itself. Browse the{" "}
              <Link
                href="/shop"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                collection
              </Link>{" "}
              or read our{" "}
              <Link
                href="/shipping-returns"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                shipping & returns
              </Link>{" "}
              notes.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-secondary/60 text-foreground">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
}
