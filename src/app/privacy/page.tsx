import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/site/section-heading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Pawliyo handles information today, and the principles we'll apply when a real backend is introduced.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy · PAWLIYO",
    description:
      "How Pawliyo handles information today, and the principles we'll apply when a real backend is introduced.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "January 2025";

  return (
    <div className="container-narrow py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Policy draft"
        title="Privacy policy."
        description="Pawliyo is currently a research-stage storefront. This policy describes what we collect today and the principles we'll follow as the product grows."
      />

      <p className="mt-6 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

      <div className="mt-10 space-y-10">
        <Section title="1. Where we stand today" id="today">
          <p>
            Pawliyo does not operate a backend that stores personal data. The
            prototype forms on this site — including the email interest form
            and the contact form — do not transmit, save, or email your
            details. All form state is held in your browser only and is
            cleared when you close the tab or clear your storage.
          </p>
          <p>
            A small client-side demo cart stores an integer count and product
            slugs in your browser&apos;s <code>localStorage</code> so the cart
            badge feels consistent during a visit. This data never leaves your
            device. No personal information is collected.
          </p>
        </Section>

        <Section title="2. Analytics" id="analytics">
          <p>
            Pawliyo does not currently run any analytics that collect
            personal data. If analytics are introduced in the future, they
            will be configured to collect only anonymized, aggregate usage
            data — and this section will be updated with a clear disclosure
            describing what is collected and by which provider.
          </p>
        </Section>

        <Section title="3. Cookies and local storage" id="cookies">
          <p>
            This site uses <code>localStorage</code> — not cookies — to
            remember your demo cart and any in-progress form state across
            page reloads. <code>localStorage</code> data stays on your device
            and is never sent to a server while the site is in prototype.
          </p>
          <p>
            You can clear this data at any time by clearing your browser
            storage for <code>{siteConfig.url}</code>, or by clicking the
            &ldquo;Clear interest list&rdquo; button inside the cart drawer.
          </p>
        </Section>

        <Section title="4. When a backend is introduced" id="future">
          <p>
            Once Pawliyo introduces a real backend (for example, to send
            newsletter updates or process orders), this policy will be
            updated to clearly describe:
          </p>
          <ul className="ml-4 list-disc space-y-1.5 marker:text-taupe">
            <li>What data is collected and why.</li>
            <li>Where the data is stored and for how long.</li>
            <li>Who has access to the data (and under what conditions).</li>
            <li>How you can access, correct, or delete your data.</li>
            <li>Which third-party processors (if any) are used and for what purpose.</li>
          </ul>
          <p>
            We will not sell personal data to third parties, and we will not
            use personal data for purposes unrelated to operating the
            storefront without explicit, opt-in consent.
          </p>
        </Section>

        <Section title="5. Children's privacy" id="children">
          <p>
            Pawliyo is intended for adults making purchases on behalf of
            their pets. We do not knowingly collect information from
            children under 13 (or the equivalent minimum age in your
            jurisdiction). If you believe a child has provided information
            through a future form, please contact us and we will delete it.
          </p>
        </Section>

        <Section title="6. Your rights" id="rights">
          <p>
            Depending on your location — for example, if you live in
            California or the EU/EEA — you may have rights to access,
            correct, or delete personal data about you, and to opt out of
            certain data uses. While Pawliyo does not currently hold such
            data, we&apos;ll honor these rights as soon as a backend exists.
            Until then, the simplest way to reset your data is to clear your
            browser storage for this site.
          </p>
        </Section>

        <Section title="7. Updates to this policy" id="updates">
          <p>
            This page is a draft. We&apos;ll update the &ldquo;Last
            updated&rdquo; date above whenever the policy changes. Material
            changes will be summarized at the top of the page.
          </p>
        </Section>

        <Section title="8. Contact" id="contact">
          <p>
            Questions about privacy?{" "}
            <Link
              href="/contact"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Reach out
            </Link>
            . Once a dedicated privacy mailbox is configured, the address will
            be published here.
          </p>
        </Section>
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
      <div className="mt-3 space-y-3 text-base leading-relaxed text-muted-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:text-foreground">
        {children}
      </div>
    </section>
  );
}
