import type { Metadata } from 'next';
import { Suspense } from 'react';
import ShopPageClient from './ShopPageClient';

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Browse the PAWLIYO collection of thoughtful pet essentials for dogs and cats.',
};

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        <p className="text-taupe text-sm">Loading products...</p>
      </div>
    }>
      <ShopPageClient />
    </Suspense>
  );
}
