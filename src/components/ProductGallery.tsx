'use client';

import { useState } from 'react';
import { ProductImage } from '@/types';

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="aspect-square bg-ivory overflow-hidden">
        <div
          className="w-full h-full bg-sand/30 flex items-center justify-center"
          role="img"
          aria-label={images[activeIndex]?.alt || productName}
        >
          <div className="text-center p-8">
            <svg
              className="w-24 h-24 mx-auto text-taupe/30"
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
            <p className="mt-4 text-sm text-taupe/50">
              {images[activeIndex]?.alt || productName}
            </p>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-20 h-20 flex-shrink-0 bg-sand/30 border-2 transition-colors duration-200 ${
                index === activeIndex
                  ? 'border-charcoal'
                  : 'border-transparent hover:border-taupe/40'
              }`}
              aria-label={`View image ${index + 1} of ${images.length}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            >
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-taupe/30"
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
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
