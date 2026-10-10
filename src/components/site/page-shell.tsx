import * as React from "react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { cn } from "@/lib/utils";

type PageShellProps = {
  children: React.ReactNode;
  /** Hide the page-side padding so a section can break out edge to edge. */
  bare?: boolean;
  className?: string;
};

/**
 * PageShell
 *
 * Wraps every page with the shared header + footer and guarantees the
 * sticky-footer behavior described in the design standards:
 *
 *   - The root wrapper is `min-h-screen flex flex-col`.
 *   - The header sits at the top.
 *   - The main content area flexes to fill available height.
 *   - The footer uses `mt-auto` so it always pins to the bottom of the
 *     viewport when content is short, and is pushed down naturally when
 *     content overflows.
 */
export function PageShell({ children, bare, className }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main
        className={cn("flex-1", !bare && "pb-0", className)}
        id="main-content"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PageShell;
