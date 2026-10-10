import * as React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Optional small label above the heading (eyebrow text). */
  eyebrow?: string;
  /** Main heading copy. */
  title: string;
  /** Optional supporting paragraph. */
  description?: string;
  /** Heading level for accessibility (defaults to h2). */
  as?: "h1" | "h2" | "h3";
  /** Alignment of the text block. */
  align?: "left" | "center";
  /** Optional id for the heading, useful for aria-labelledby on the section. */
  id?: string;
  className?: string;
};

/**
 * SectionHeading
 *
 * Renders a consistent eyebrow / title / description block across marketing
 * sections. The eyebrow is set in taupe uppercase tracking; the title uses the
 * display font and tight tracking for a refined editorial feel.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2",
  align = "left",
  id,
  className,
}: SectionHeadingProps) {
  const Comp = as;
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-taupe">
          {eyebrow}
        </span>
      ) : null}
      <Comp
        id={id}
        className={cn(
          "font-display font-semibold tracking-tight text-foreground text-balance",
          as === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : as === "h3"
            ? "text-xl sm:text-2xl"
            : "text-2xl sm:text-3xl lg:text-4xl"
        )}
      >
        {title}
      </Comp>
      {description ? (
        <p
          className={cn(
            "text-base sm:text-lg text-muted-foreground text-pretty",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
