import * as React from "react";
import Link from "next/link";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

import { PawliyoLogo } from "@/components/site/logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type FooterProps = {
  className?: string;
};

/**
 * Footer
 *
 * Includes navigation, legal links, social (only if real URLs are configured),
 * and the official PAWLIYO tagline. Empty optional fields are hidden so we
 * never advertise contact channels we don't actually monitor.
 *
 * Sticky-footer behavior is provided by the root layout wrapper
 * (`<div class="min-h-screen flex flex-col">`) plus `mt-auto` on this footer.
 */
export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  const social = [
    { label: "Instagram", href: siteConfig.social.instagram, Icon: Instagram },
    { label: "Twitter / X", href: siteConfig.social.twitter, Icon: Twitter },
    { label: "Facebook", href: siteConfig.social.facebook, Icon: Facebook },
    { label: "YouTube", href: siteConfig.social.youtube, Icon: Youtube },
  ].filter((item) => Boolean(item.href));

  return (
    <footer
      className={cn(
        "mt-auto border-t border-border bg-foreground text-background",
        className
      )}
      role="contentinfo"
    >
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <PawliyoLogo
              iconSize={32}
              variant="inverted"
              showTagline
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/70">
              Pawliyo is a small studio exploring thoughtful, practical
              essentials for everyday pet care. We&apos;re starting small —
              validating each product before it ever ships.
            </p>
            {siteConfig.contact.email ? (
              <p className="mt-4 text-sm text-background/80">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="underline-offset-4 hover:underline focus-brand"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            ) : null}
          </div>

          {/* Nav */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7"
          >
            <FooterColumn
              title="Shop"
              links={[
                { label: "All products", href: "/shop" },
                ...siteConfig.nav
                  .filter((n) => n.href === "/shop")
                  .map((n) => ({ label: n.label, href: n.href })),
                { label: "New arrivals", href: "/shop?filter=new" },
              ]}
            />
            <FooterColumn
              title="Studio"
              links={[
                { label: "About Pawliyo", href: "/about" },
                { label: "Contact", href: "/contact" },
              ]}
            />
            <FooterColumn
              title="Help"
              links={siteConfig.footerLinks.map((l) => ({
                label: l.label,
                href: l.href,
              }))}
            />
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-background/15 pt-6 text-xs text-background/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="max-w-xl sm:text-right">
            Pawliyo is a research-stage storefront. Listings are illustrative
            prototypes and are not offers to sell.
          </p>
          {social.length > 0 ? (
            <ul className="flex items-center gap-3">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="rounded-md p-1.5 text-background/80 hover:bg-background/10 hover:text-background focus-brand"
                  >
                    <item.Icon className="size-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-background/60">
        {title}
      </h3>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-background/80 underline-offset-4 hover:text-background hover:underline focus-brand"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
