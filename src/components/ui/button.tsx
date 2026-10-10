import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

/**
 * Brand button system for PAWLIYO.
 *
 * Variants map cleanly to the brand palette:
 *  - `solid`   -> charcoal primary button on ivory text
 *  - `outline` -> outlined ivory/charcoal button for secondary actions
 *  - `ghost`   -> quiet text button used in navigation and inline links
 *  - `taupe`   -> warm accent button for restrained emphasis
 *
 * Sizes follow the shadcn convention (default, sm, lg, icon) plus a
 * wide `xl` size used by hero CTAs.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-[color,background-color,border-color,box-shadow,transform] duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/40 focus-visible:ring-[3px] active:translate-y-px motion-reduce:transition-none",
  {
    variants: {
      variant: {
        solid:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        inverted:
          "bg-background text-foreground shadow-sm hover:bg-background/90",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-foreground/[0.04] hover:border-foreground/40",
        outlineInverted:
          "border border-background/30 bg-transparent text-background hover:bg-background/10 hover:border-background/50",
        ghost:
          "bg-transparent text-foreground hover:bg-foreground/[0.06]",
        taupe:
          "bg-accent text-accent-foreground shadow-sm hover:bg-accent/90",
        link:
          "text-foreground underline-offset-4 hover:underline px-0 py-0 h-auto",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      },
      size: {
        default: "h-10 px-5 text-sm has-[>svg]:px-4",
        sm: "h-9 rounded-md px-3.5 text-xs has-[>svg]:px-3",
        lg: "h-12 rounded-md px-7 text-base has-[>svg]:px-6",
        xl: "h-13 rounded-md px-8 text-base has-[>svg]:px-7",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
