import * as React from "react";

/**
 * AnnouncementBar
 *
 * A small, understated announcement bar at the top of the page. We do NOT
 * advertise free shipping, discounts, or delivery times unless those are
 * explicitly configured and verified in `siteConfig`.
 *
 * The default copy is informational only.
 */
export function AnnouncementBar() {
  return (
    <div
      role="region"
      aria-label="Site announcement"
      className="bg-primary text-primary-foreground"
    >
      <div className="container-page flex h-9 items-center justify-center">
        <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground/90">
          Pawliyo · A small studio exploring everyday essentials for pets
        </p>
      </div>
    </div>
  );
}

export default AnnouncementBar;
