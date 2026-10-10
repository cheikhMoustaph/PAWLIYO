"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PawliyoLogo } from "@/components/site/logo";
import { AnnouncementBar } from "@/components/site/announcement-bar";
import { MobileNavigation } from "@/components/site/mobile-navigation";
import { SearchDialog } from "@/components/site/search-dialog";
import { CartDialog } from "@/components/site/cart-dialog";
import { siteConfig } from "@/config/site";
import { useDemoCart } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => setHasMounted(true), []);

  const cartCount = useDemoCart((s) => s.count);

  // Keyboard shortcut: ⌘K / Ctrl+K to open search.
  React.useEffect(() => {
    function handler(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40">
      <AnnouncementBar />
      <div className="border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-2">
            <MobileNavigation onOpenSearch={() => setSearchOpen(true)} />
            <Link
              href="/"
              className="rounded-md focus-brand"
              aria-label="Pawliyo — home"
            >
              <PawliyoLogo iconSize={30} />
            </Link>
          </div>

          {/* Center: desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-foreground/[0.04] focus-brand aria-[current=page]:text-foreground aria-[current=page]:bg-foreground/[0.06]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
              className="text-foreground/80 hover:text-foreground"
            >
              <Search className="size-5" />
            </Button>
            {siteConfig.features.demoCart ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCartOpen(true)}
                aria-label={`Open interest list, ${cartCount} items`}
                className="relative text-foreground/80 hover:text-foreground"
              >
                <ShoppingBag className="size-5" />
                {hasMounted && cartCount > 0 ? (
                  <span
                    className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground"
                    aria-hidden
                  >
                    {cartCount}
                  </span>
                ) : null}
              </Button>
            ) : null}
            <Button
              asChild
              variant="solid"
              size="sm"
              className="ml-1 hidden sm:inline-flex"
            >
              <Link href="/shop">Shop the collection</Link>
            </Button>
          </div>
        </div>
      </div>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <CartDialog open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  );
}

export default Header;
