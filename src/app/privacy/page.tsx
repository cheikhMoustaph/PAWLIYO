import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'PAWLIYO privacy policy — how we handle your information.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-12">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-taupe">
          Legal
        </span>
        <h1
          className="mt-4 text-3xl md:text-4xl font-semibold text-charcoal tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Privacy Policy
        </h1>
        <p className="mt-4 text-xs text-taupe">
          Draft — Last updated: October 2026
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-lg font-semibold text-charcoal">Overview</h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            PAWLIYO (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy.
            This page describes how we intend to handle personal information
            when our store becomes operational. This is a draft policy and will
            be updated before any personal data is collected.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-charcoal">
            Current Data Practices
          </h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            PAWLIYO is currently a pre-launch website. We do not currently:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-charcoal/70">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-taupe rounded-full flex-shrink-0" />
              Collect, store, or process personal information.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-taupe rounded-full flex-shrink-0" />
              Use analytics tools that track individual visitors.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-taupe rounded-full flex-shrink-0" />
              Set tracking cookies or use third-party advertising pixels.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-taupe rounded-full flex-shrink-0" />
              Accept payments or store financial information.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-charcoal">
            Prototype Forms
          </h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            This website contains prototype forms (such as the newsletter signup
            and contact form). These forms are for demonstration purposes only.
            Any information entered is not transmitted or stored remotely.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-charcoal">Local Storage</h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            This website may use your browser&apos;s localStorage for
            non-sensitive interface preferences (e.g., theme selection). This
            data is stored only on your device and is not transmitted to any
            server.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-charcoal">Future Updates</h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            Before launching the store and collecting any personal data, we
            will publish a complete privacy policy that complies with applicable
            laws and clearly describes what data we collect, how it is used,
            and how you can manage your preferences.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-charcoal">Contact</h2>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
            If you have questions about our privacy practices, visit our{' '}
            <a
              href="/contact"
              className="text-charcoal underline hover:text-taupe transition-colors"
            >
              contact page
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
