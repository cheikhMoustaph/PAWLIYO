'use client';

import { useState, FormEvent } from 'react';
import Button from './Button';

interface NewsletterInterestFormProps {
  variant?: 'inline' | 'section';
  className?: string;
}

export default function NewsletterInterestForm({
  variant = 'section',
  className = '',
}: NewsletterInterestFormProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    // Prototype: no backend, no data transmission
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-charcoal font-medium">Thank you for your interest!</p>
        <p className="mt-2 text-taupe text-sm">
          This is a prototype feature. Your email has{' '}
          <strong>not</strong> been stored or transmitted. In the future, this
          form will connect to a mailing list.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className={
          variant === 'inline'
            ? 'flex flex-col sm:flex-row gap-3 max-w-md mx-auto'
            : 'flex flex-col sm:flex-row gap-3 max-w-lg mx-auto'
        }
        noValidate
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          className="flex-1 px-4 py-3 border border-sand bg-white text-charcoal text-sm placeholder:text-taupe/60 focus:outline-none focus:border-charcoal transition-colors duration-200"
          required
          aria-describedby={error ? 'newsletter-error' : 'newsletter-disclaimer'}
        />
        <Button type="submit" variant="primary" size="md">
          Notify Me
        </Button>
      </form>
      {error && (
        <p id="newsletter-error" className="mt-2 text-sm text-red-600 text-center" role="alert">
          {error}
        </p>
      )}
      <p
        id="newsletter-disclaimer"
        className="mt-3 text-xs text-taupe/60 text-center"
      >
        Prototype feature — no data is stored or sent. This will be connected to
        a mailing service in a future release.
      </p>
    </div>
  );
}
