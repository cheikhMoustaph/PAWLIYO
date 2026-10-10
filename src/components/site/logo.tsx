import * as React from "react";
import { cn } from "@/lib/utils";

type LogoProps = {
  /**
   * Render the wordmark next to the paw symbol.
   * @default true
   */
  showWordmark?: boolean;
  /**
   * Render the tagline beneath the wordmark.
   * @default false
   */
  showTagline?: boolean;
  className?: string;
  /** Override the icon size in pixels. The wordmark scales to match. */
  iconSize?: number;
  /** Use light (ivory) marks for placement on dark backgrounds. */
  variant?: "default" | "inverted";
};

/**
 * PawliyoLogo
 *
 * A simple paw-print symbol paired with the PAWLIYO wordmark.
 *
 * The paw is drawn as a small geometric SVG — a main pad with four toe
 * beans — designed to remain recognizable at small sizes. The wordmark uses
 * tight tracking and weight to read as a clean geometric logotype.
 *
 * The component is fully inline (no remote assets) and inherits color from
 * `currentColor`, so it adapts automatically to light and dark backgrounds.
 */
export function PawliyoLogo({
  showWordmark = true,
  showTagline = false,
  className,
  iconSize = 32,
  variant = "default",
}: LogoProps) {
  const ink = variant === "inverted" ? "#F4EFE6" : "#171717";
  const sub = variant === "inverted" ? "rgba(244,239,230,0.65)" : "#A18B72";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 select-none",
        className
      )}
      aria-label="Pawliyo — Pet Essentials · Everyday Care"
    >
      <PawMark size={iconSize} color={ink} />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className="font-display font-extrabold tracking-[0.18em] uppercase"
            style={{ fontSize: iconSize * 0.56, color: ink }}
          >
            Pawliyo
          </span>
          {showTagline ? (
            <span
              className="mt-1 font-medium uppercase tracking-[0.32em]"
              style={{ fontSize: Math.max(8, iconSize * 0.26), color: sub }}
            >
              Pet Essentials · Everyday Care
            </span>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}

/**
 * Standalone paw-print mark. Used by the logo, the favicon, the 404 page,
 * and any branded decorative surfaces.
 */
export function PawMark({
  size = 32,
  color = "#171717",
  className,
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Pawliyo paw mark"
      className={className}
    >
      {/* Main pad */}
      <path
        d="M24 27.2c5.4 0 9.6 4.3 9.6 9.2 0 2.6-2.3 4.2-5.1 4.2-1.5 0-2.4-.4-3.5-.8-.9-.3-1.7-.6-2.9-.6-1.2 0-2 .3-2.9.6-1.1.4-2 .8-3.5.8-2.8 0-5.1-1.6-5.1-4.2 0-4.9 4.2-9.2 9.6-9.2H24Z"
        fill={color}
      />
      {/* Toe beans — arranged as a balanced diamond */}
      <ellipse cx="15.2" cy="22.6" rx="3.4" ry="4.3" fill={color} />
      <ellipse cx="23.9" cy="18.5" rx="3.4" ry="4.3" fill={color} />
      <ellipse cx="32.6" cy="22.6" rx="3.4" ry="4.3" fill={color} />
      <ellipse cx="32.5" cy="14.4" rx="3" ry="3.7" fill={color} />
    </svg>
  );
}

export default PawliyoLogo;
