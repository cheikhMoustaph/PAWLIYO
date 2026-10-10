import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shipping & Returns',
  description:
    'PAWLIYO shipping and returns information. Learn about our policies and delivery expectations.',
};

export default function ShippingReturnsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-12">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-taupe">
          Policies
        </span>
        <h1
          className="mt-4 text-3xl md:text-4xl font-semibold text-charcoal tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Shipping & Returns
        </h1>
      </div>

      <div className="prose-custom space-y-10">
        <section>
          <h2 className="text-lg font-semibold text-charcoal">Shipping</h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            PAWLIYO is currently in pre-launch. Shipping policies, delivery
            times, and carrier options will be published once our store is
            fully operational and product availability is confirmed.
          </p>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            We plan to offer shipping within the United States. International
            shipping availability will be determined at a later date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-charcoal">Returns & Exchanges</h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            Our return and exchange policy will be finalized before any products
            are available for purchase. We intend to offer a fair, transparent
            return window.
          </p>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            Detailed terms, including eligibility, timeframes, and return
            shipping costs, will be published on this page when we begin
            accepting orders.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-charcoal">Questions?</h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            If you have questions about our shipping or return plans, please
            visit our{' '}
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
