'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ProductGrid from '@/components/ProductGrid';
import { products, getCategories, searchProducts } from '@/data/products';

export default function ShopPageClient() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const categories = getCategories();

  const filteredProducts = useMemo(() => {
    let result = products;

    if (searchQuery.trim()) {
      result = searchProducts(searchQuery.trim());
    }

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <SectionHeading
        title="Shop All Products"
        subtitle="Browse our curated collection of pet essentials."
      />

      {/* Filters */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
          <label htmlFor="shop-search" className="sr-only">
            Search products
          </label>
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-taupe/60 pointer-events-none"
          />
          <input
            id="shop-search"
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-sand bg-white text-charcoal text-sm placeholder:text-taupe/60 focus:outline-none focus:border-charcoal transition-colors"
          />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-4 py-2 text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
              selectedCategory === ''
                ? 'bg-charcoal text-white'
                : 'bg-white text-charcoal border border-sand hover:border-charcoal'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category ? '' : category
                )
              }
              className={`px-4 py-2 text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-charcoal text-white'
                  : 'bg-white text-charcoal border border-sand hover:border-charcoal'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="mt-6 text-xs text-taupe uppercase tracking-wider">
        {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
      </p>

      {/* Product Grid */}
      <div className="mt-8">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
