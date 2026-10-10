'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/Button';

export default function NotifyMeButton() {
  const [showForm, setShowForm] = useState(false);
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

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="p-4 bg-ivory border border-sand">
        <p className="text-sm font-medium text-charcoal">
          Thank you for your interest!
        </p>
        <p className="mt-2 text-xs text-taupe">
          This is a prototype feature. Your email has <strong>not</strong> been
          stored or transmitted to any server. In a future release, this will
          connect to a notification service.
        </p>
      </div>
    );
  }

  if (showForm) {
    return (
      <div className="space-y-3">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <label htmlFor="notify-email" className="sr-only">
            Email address
          </label>
          <input
            id="notify-email"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
            className="flex-1 px-4 py-3 border border-sand bg-white text-charcoal text-sm placeholder:text-taupe/60 focus:outline-none focus:border-charcoal transition-colors"
            required
            autoFocus
          />
          <Button type="submit" variant="primary" size="md">
            Submit
          </Button>
        </form>
        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        <p className="text-xs text-taupe/60">
          Prototype feature — no data is stored or sent to any server.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <Button
        variant="primary"
        size="lg"
        className="w-full"
        onClick={() => setShowForm(true)}
      >
        Notify Me When Available
      </Button>
      <Button
        variant="outline"
        size="md"
        className="w-full"
        onClick={() => setShowForm(true)}
      >
        Register Your Interest
      </Button>
    </div>
  );
}
