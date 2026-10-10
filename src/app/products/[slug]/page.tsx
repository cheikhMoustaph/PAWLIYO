import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { products, getProductBySlug } from '@/data/products';
import ProductGallery from '@/components/ProductGallery';
import NotifyMeButton from '@/components/NotifyMeButton';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | PAWLIYO`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-1.5 text-xs text-taupe">
          <li>
            <Link href="/" className="hover:text-charcoal transition-colors">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight size={12} className="text-taupe/40" />
          </li>
          <li>
            <Link href="/shop" className="hover:text-charcoal transition-colors">
              Shop
            </Link>
          </li>
          <li>
            <ChevronRight size={12} className="text-taupe/40" />
          </li>
          <li className="text-charcoal font-medium" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Product Gallery */}
        <ProductGallery images={product.images} productName={product.name} />

        {/* Product Info */}
        <div className="space-y-8">
          {/* Category */}
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-taupe">
            {product.category}
          </span>

          {/* Title */}
          <h1
            className="text-3xl md:text-4xl font-semibold text-charcoal tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {product.name}
          </h1>

          {/* Price */}
          <div>
            {product.price !== null && product.availability === 'available' ? (
              <span className="text-2xl font-medium text-charcoal">
                ${product.price.toFixed(2)} {product.currency}
              </span>
            ) : (
              <span className="text-sm font-medium text-taupe uppercase tracking-wider">
                Coming Soon
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-charcoal/80 leading-relaxed">
            {product.description}
          </p>

          {/* Features */}
          <div>
            <h2 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">
              Key Features
            </h2>
            <ul className="space-y-2.5">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-charcoal/80">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-taupe rounded-full flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-sand/60">
            <NotifyMeButton />
          </div>

          {/* Prototype notice */}
          <p className="text-xs text-taupe/50">
            This product listing is a research prototype for demand validation.
            Pricing and availability are not confirmed.
          </p>
        </div>
      </div>
    </div>
  );
}
