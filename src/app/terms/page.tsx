import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms under which Pawliyo operates today, including the prototype-period disclaimer and the principles we'll apply going forward.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service · PAWLIYO",
    description:
      "The terms under which the Pawliyo prototype storefront operates today.",
    url: "/terms",
  },
};

export default function TermsPage() {
  const lastUpdated = "January 2025";

  return (
    <div className="container-narrow py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Policy draft"
        title="Terms of service."
        description="These terms describe how the Pawliyo prototype storefront works today. They'll be expanded as the studio grows and new features are introduced."
      />

      <p className="mt-6 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

      <div className="mt-10 space-y-10">
        <Section title="1. About Pawliyo" id="about">
          <p>
            PAWLIYO (&ldquo;Pawliyo,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us&rdquo;) operates a research-stage storefront at{" "}
            <Link
              href="/"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              this website
            </Link>
            . The storefront exists to validate demand for future pet
            essentials. It is not currently a retailer and does not accept
            orders or payments.
          </p>
        </Section>

        <Section title="2. Prototype-period disclaimer" id="prototype">
          <p>
            All product listings are illustrative prototypes. Prices, where
            shown, are illustrative estimates — not offers to sell. Product
            images are conceptual and may differ from any final product.
            Pawliyo does not guarantee that any prototype will be produced,
            sold, or shipped.
          </p>
          <p>
            Forms on this site (including the email interest form, contact
            form, and demo cart) are local prototypes. They do not transmit
            data to a server, do not save personal information, and do not
            constitute an order, contract, or commitment of any kind.
          </p>
        </Section>

        <Section title="3. Use of the site" id="use">
          <p>
            You agree to use this site lawfully and not to misuse, disrupt,
            or attempt to gain unauthorized access to any part of it. You
            agree not to scrape content for commercial purposes without
            written permission, and not to use the Pawliyo name or marks in
            a way that implies endorsement where none exists.
          </p>
        </Section>

        <Section title="4. Intellectual property" id="ip">
          <p>
            The Pawliyo name, logo, wordmark, and the visual design of this
            site are owned by Pawliyo. Product descriptions, photography and
            other content are either owned by Pawliyo or used with
            permission. You may share links to pages on this site freely.
          </p>
        </Section>

        <Section title="5. No orders or payments" id="no-orders">
          <p>
            Pawliyo does not currently process transactions. Any button that
            appears to add an item to a cart merely records a local prototype
            state. No payment information is collected, and no obligation to
            purchase is created on either side.
          </p>
          <p>
            When transactions are introduced, this section will be replaced
            with a clear description of the ordering and payment process,
            including taxes, shipping, and refund terms.
          </p>
        </Section>

        <Section title="6. Third-party links" id="third-party">
          <p>
            This site may contain links to third-party websites. Pawliyo is
            not responsible for the content, policies, or practices of any
            third-party site.
          </p>
        </Section>

        <Section title="7. Disclaimer of warranties" id="warranties">
          <p>
            The site and its content are provided &ldquo;as is.&rdquo;
            Pawliyo makes no representations or warranties about the
            accuracy, completeness, or reliability of any information on the
            site, including prototype product descriptions and pricing
            estimates.
          </p>
        </Section>

        <Section title="8. Limitation of liability" id="liability">
          <p>
            To the fullest extent permitted by law, Pawliyo will not be
            liable for any indirect, incidental, or consequential damages
            arising from your use of (or inability to use) this site, including
            any reliance on prototype listings.
          </p>
        </Section>

        <Section title="9. Changes" id="changes">
          <p>
            Pawliyo may update these terms as the storefront evolves. The
            &ldquo;Last updated&rdquo; date above will reflect the most
            recent revision. Material changes will be summarized at the top of
            this page.
          </p>
        </Section>

        <Section title="10. Contact" id="contact">
          <p>
            Questions about these terms?{" "}
            <Link
              href="/contact"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Contact the studio
            </Link>
            .
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
      <div className="mt-3 space-y-3 text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
