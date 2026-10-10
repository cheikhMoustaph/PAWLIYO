import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about PAWLIYO — a modern pet essentials brand focused on practical products for happier pets and easier everyday care.',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-taupe">
          Our Story
        </span>
        <h1
          className="mt-4 text-3xl md:text-5xl font-semibold text-charcoal tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Care starts with the everyday.
        </h1>
        <p className="mt-6 text-base md:text-lg text-charcoal/70 leading-relaxed">
          PAWLIYO was born from a simple idea: the best way to care for our pets
          is to make the small, daily tasks easier and more enjoyable. Not with
          gimmicks or luxury for its own sake — but with practical, well-designed
          essentials that fit naturally into everyday life.
        </p>
      </div>

      {/* Story Sections */}
      <div className="mt-20 max-w-3xl mx-auto space-y-16">
        <section>
          <h2 className="text-xl font-semibold text-charcoal tracking-tight">
            Why we started
          </h2>
          <p className="mt-4 text-sm text-charcoal/70 leading-relaxed">
            As pet owners ourselves, we noticed something: the products we used
            every day — hair removers, grooming brushes, car seat covers, litter
            mats — were either poorly made, overpriced, or hard to find without
            sifting through endless options. We wanted a curated, trustworthy
            source for the essentials that actually matter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-charcoal tracking-tight">
            What we believe
          </h2>
          <div className="mt-4 space-y-4">
            <p className="text-sm text-charcoal/70 leading-relaxed">
              <strong className="text-charcoal">Practical over trendy.</strong>{' '}
              We choose products that solve real problems, not ones that look
              good on a shelf and gather dust.
            </p>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              <strong className="text-charcoal">Quality without excess.</strong>{' '}
              Premium doesn&apos;t have to mean expensive. It means thoughtful
              materials, smart design, and lasting value.
            </p>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              <strong className="text-charcoal">Honesty first.</strong> We
              don&apos;t make claims we can&apos;t back up. No fake reviews, no
              inflated promises — just reliable products with transparent
              information.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-charcoal tracking-tight">
            Where we&apos;re headed
          </h2>
          <p className="mt-4 text-sm text-charcoal/70 leading-relaxed">
            PAWLIYO is in its early stages. We&apos;re carefully building our
            first collection, selecting suppliers, and listening to what pet
            owners really need. Our catalog will grow intentionally — adding
            products only when we&apos;re confident they meet our standards.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <SectionHeading
          title="Explore the collection"
          subtitle="See what we're working on."
        />
        <div className="mt-8">
          <Button href="/shop" variant="primary" size="lg">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}
