import { Heart, Leaf, Shield } from 'lucide-react';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import ProductGrid from '@/components/ProductGrid';
import NewsletterInterestForm from '@/components/NewsletterInterestForm';
import { getFeaturedProducts } from '@/data/products';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory tracking-tight leading-[1.1]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Everyday care,
              <br />
              made better.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-sand/90 leading-relaxed max-w-lg">
              Thoughtful essentials for happier pets and easier everyday care.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/shop" variant="secondary" size="lg">
                Explore the Collection
              </Button>
              <Button href="/about" variant="outline" size="lg" className="border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal">
                Our Story
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative paw watermark */}
        <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none">
          <svg width="500" height="500" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <ellipse cx="20" cy="26" rx="9" ry="7.5" fill="#F4EFE6" />
            <ellipse cx="10" cy="13" rx="4" ry="5" transform="rotate(-10 10 13)" fill="#F4EFE6" />
            <ellipse cx="30" cy="13" rx="4" ry="5" transform="rotate(10 30 13)" fill="#F4EFE6" />
            <ellipse cx="15.5" cy="8" rx="3.5" ry="4.5" transform="rotate(-5 15.5 8)" fill="#F4EFE6" />
            <ellipse cx="24.5" cy="8" rx="3.5" ry="4.5" transform="rotate(5 24.5 8)" fill="#F4EFE6" />
          </svg>
        </div>
      </section>

      {/* ===== Featured Products ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <SectionHeading
          title="Curated Essentials"
          subtitle="Practical products designed with your pet's comfort and your convenience in mind."
        />
        <div className="mt-12">
          <ProductGrid products={featuredProducts} />
        </div>
        <div className="mt-12 text-center">
          <Button href="/shop" variant="outline" size="md">
            View All Products
          </Button>
        </div>
      </section>

      {/* ===== Brand Values ===== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-ivory flex items-center justify-center">
                <Leaf size={22} className="text-taupe" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-charcoal tracking-wide">
                Thoughtful Essentials
              </h3>
              <p className="mt-3 text-sm text-taupe leading-relaxed max-w-xs mx-auto">
                Every product is selected for practicality, quality, and
                real-world usefulness — not trends.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-ivory flex items-center justify-center">
                <Heart size={22} className="text-taupe" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-charcoal tracking-wide">
                Everyday Practicality
              </h3>
              <p className="mt-3 text-sm text-taupe leading-relaxed max-w-xs mx-auto">
                Solutions that simplify daily routines for pet owners, making
                care less of a chore and more of a joy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-ivory flex items-center justify-center">
                <Shield size={22} className="text-taupe" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-charcoal tracking-wide">
                Pet-First Care
              </h3>
              <p className="mt-3 text-sm text-taupe leading-relaxed max-w-xs mx-auto">
                Designed with your pet&apos;s comfort and well-being as the
                starting point, not an afterthought.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Lifestyle Section ===== */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-semibold text-ivory tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Built around the bond.
              </h2>
              <p className="mt-6 text-base text-sand/80 leading-relaxed max-w-md">
                We believe the small moments of care — a morning brush, a clean
                ride to the park, a tidy litter area — are what make pet
                ownership truly rewarding. PAWLIYO is here to make those moments
                effortless.
              </p>
              <div className="mt-8">
                <Button href="/about" variant="outline" className="border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="aspect-[4/3] bg-charcoal/50 rounded-sm flex items-center justify-center">
              <div className="text-center p-8">
                <svg
                  className="w-20 h-20 mx-auto text-ivory/10"
                  fill="none"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <ellipse cx="20" cy="26" rx="9" ry="7.5" fill="currentColor" />
                  <ellipse cx="10" cy="13" rx="4" ry="5" transform="rotate(-10 10 13)" fill="currentColor" />
                  <ellipse cx="30" cy="13" rx="4" ry="5" transform="rotate(10 30 13)" fill="currentColor" />
                  <ellipse cx="15.5" cy="8" rx="3.5" ry="4.5" transform="rotate(-5 15.5 8)" fill="currentColor" />
                  <ellipse cx="24.5" cy="8" rx="3.5" ry="4.5" transform="rotate(5 24.5 8)" fill="currentColor" />
                </svg>
                <p className="mt-4 text-xs text-ivory/20 uppercase tracking-widest">
                  Lifestyle photo placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Newsletter Interest ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading
            title="Stay in the loop"
            subtitle="Be the first to know when new products are available."
          />
          <div className="mt-8">
            <NewsletterInterestForm variant="section" />
          </div>
        </div>
      </section>
    </>
  );
}
