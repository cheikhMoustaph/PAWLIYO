'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(): boolean {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'A valid email address is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="p-8 bg-white border border-sand/60 text-center">
        <h2 className="text-lg font-semibold text-charcoal">
          Thank you for reaching out!
        </h2>
        <p className="mt-3 text-sm text-taupe">
          This is a prototype contact form. Your message has{' '}
          <strong>not</strong> been sent or stored. In a future release, this
          form will connect to an email service or CRM.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }}
          className="mt-6 text-sm text-charcoal underline hover:text-taupe transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <p className="text-xs text-taupe/60 text-center">
        Prototype form — no data is stored or transmitted to any server.
      </p>

      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal mb-1.5">
          Name <span className="text-taupe">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: '' });
          }}
          className="w-full px-4 py-3 border border-sand bg-white text-charcoal text-sm placeholder:text-taupe/60 focus:outline-none focus:border-charcoal transition-colors"
          required
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600" role="alert">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal mb-1.5">
          Email <span className="text-taupe">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: '' });
          }}
          className="w-full px-4 py-3 border border-sand bg-white text-charcoal text-sm placeholder:text-taupe/60 focus:outline-none focus:border-charcoal transition-colors"
          required
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600" role="alert">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-charcoal mb-1.5">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-3 border border-sand bg-white text-charcoal text-sm placeholder:text-taupe/60 focus:outline-none focus:border-charcoal transition-colors"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal mb-1.5">
          Message <span className="text-taupe">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: '' });
          }}
          className="w-full px-4 py-3 border border-sand bg-white text-charcoal text-sm placeholder:text-taupe/60 focus:outline-none focus:border-charcoal transition-colors resize-y"
          required
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600" role="alert">{errors.message}</p>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
