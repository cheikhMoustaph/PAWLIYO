import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with PAWLIYO. Ask questions, share product ideas, or reach out about partnerships.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-taupe">
            Contact
          </span>
          <h1
            className="mt-4 text-3xl md:text-4xl font-semibold text-charcoal tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Get in touch
          </h1>
          <p className="mt-4 text-base text-charcoal/70 leading-relaxed">
            Have a question, product suggestion, or want to learn more about
            PAWLIYO? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Details */}
        {siteConfig.contactEmail && (
          <div className="mt-12 p-6 bg-white border border-sand/60 text-center">
            <p className="text-sm text-taupe uppercase tracking-wider font-medium">
              Email
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-2 inline-block text-charcoal font-medium hover:text-taupe transition-colors"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        )}

        {/* Contact Form */}
        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
