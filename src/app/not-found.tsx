import Link from 'next/link';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
      {/* Paw symbol */}
      <svg
        className="w-16 h-16 mx-auto text-sand"
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

      <h1
        className="mt-8 text-4xl md:text-5xl font-semibold text-charcoal tracking-tight"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Page not found
      </h1>
      <p className="mt-4 text-base text-taupe max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Button href="/" variant="primary" size="md">
          Return Home
        </Button>
        <Button href="/shop" variant="outline" size="md">
          Browse Products
        </Button>
      </div>
    </div>
  );
}
