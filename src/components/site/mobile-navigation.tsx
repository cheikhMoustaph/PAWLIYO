"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PawliyoLogo } from "@/components/site/logo";
import { siteConfig } from "@/config/site";

type MobileNavigationProps = {
  onOpenSearch: () => void;
};

export function MobileNavigation({ onOpenSearch }: MobileNavigationProps) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[88vw] max-w-sm border-r border-border bg-background p-0"
      >
        <SheetHeader className="border-b border-border px-5 py-4">
          <SheetTitle className="text-left">
            <PawliyoLogo iconSize={28} showTagline={false} />
          </SheetTitle>
          <SheetClose
            className="absolute right-4 top-4 rounded-md p-1.5 text-muted-foreground hover:bg-foreground/5 focus-brand"
            aria-label="Close menu"
          >
            <X className="size-4" />
          </SheetClose>
        </SheetHeader>

        <nav
          className="flex flex-col gap-1 px-3 py-4"
          aria-label="Mobile primary"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className="flex items-center justify-between rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-foreground/[0.04] focus-brand aria-[current=page]:bg-foreground/[0.06]"
            >
              {item.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onOpenSearch();
            }}
            className="mt-1 flex items-center justify-between rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-foreground/[0.04] focus-brand"
          >
            Search
            <Search className="size-5 text-muted-foreground" aria-hidden />
          </button>
        </nav>

        <div className="mt-auto border-t border-border px-5 py-4">
          <p className="text-[11px] uppercase tracking-[0.28em] text-taupe">
            {siteConfig.tagline}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            A prototype store exploring everyday essentials for dogs, cats and
            their people.
          </p>
          <Button asChild variant="outline" className="mt-4 w-full">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact Pawliyo
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigation;
