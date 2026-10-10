import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'PAWLIYO terms of service — rules governing your use of this website.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-12">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-taupe">
          Legal
        </span>
        <h1
          className="mt-4 text-3xl md:text-4xl font-semibold text-charcoal tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Terms of Service
        </h1>
        <p className="mt-4 text-xs text-taupe">
          Draft — Last updated: October 2026
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-lg font-semibold text-charcoal">Overview</h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            These terms of service (&quot;Terms&quot;) are a draft and will be
            finalized before PAWLIYO begins accepting orders. By using this
            website, you agree to these preliminary terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-charcoal">Website Use</h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            This website is provided for informational and demonstration
            purposes. PAWLIYO is a pre-launch brand and does not currently sell
            products, accept orders, or process payments.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-charcoal">
            Product Listings
          </h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            All product listings on this website are research prototypes for
            demand validation purposes. Prices, product specifications,
            availability, and images are illustrative and subject to change.
            Listings do not constitute an offer to sell.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-charcoal">
            Prototype Features
          </h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            Some features on this website (such as forms, notification buttons,
            and interest signups) are prototypes. They are provided for
            demonstration only and do not transmit, store, or process
            information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-charcoal">
            Intellectual Property
          </h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            All content, branding, design elements, and code on this website
            are the property of PAWLIYO unless otherwise stated. You may not
            reproduce, distribute, or create derivative works without
            permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-charcoal">
            Limitation of Liability
          </h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            This website is provided &quot;as is&quot; without warranties of any kind.
            PAWLIYO is not liable for any damages arising from your use of this
            website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-charcoal">Changes</h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            We reserve the right to update these Terms at any time. A complete
            version will be published before the store becomes operational.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-charcoal">Contact</h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            Questions about these terms? Visit our{' '}
            <a
              href="/contact"
              className="text-charcoal underline hover:text-taupe transition-colors"
            >
              contact page
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
