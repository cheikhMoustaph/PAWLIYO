import Link from 'next/link';

interface LogoProps {
  showTagline?: boolean;
  variant?: 'dark' | 'light';
  className?: string;
}

export default function Logo({
  showTagline = false,
  variant = 'dark',
  className = '',
}: LogoProps) {
  const textColor = variant === 'dark' ? '#171717' : '#F4EFE6';
  const pawColor = '#A18B72'; // Always use the taupe brand color for the paw as in the image
  const taglineColor = variant === 'dark' ? '#A18B72' : '#D9CBB8';

  // Use a vertical layout if the tagline is shown (like in the footer or home),
  // otherwise horizontal (like in the header).
  const isVertical = showTagline;

  return (
    <Link
      href="/"
      className={`inline-flex ${isVertical ? 'flex-col items-center text-center' : 'flex-row items-center'} gap-2 no-underline ${className}`}
      aria-label="PAWLIYO — Home"
    >
      {/* Paw Symbol */}
      <svg
        width={isVertical ? "64" : "32"}
        height={isVertical ? "64" : "32"}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={isVertical ? "mb-2" : ""}
      >
        {/* Toes */}
        <ellipse cx="26" cy="38" rx="8" ry="12" transform="rotate(-30 26 38)" fill={pawColor} />
        <ellipse cx="41" cy="22" rx="8" ry="12" transform="rotate(-10 41 22)" fill={pawColor} />
        <ellipse cx="59" cy="22" rx="8" ry="12" transform="rotate(10 59 22)" fill={pawColor} />
        <ellipse cx="74" cy="38" rx="8" ry="12" transform="rotate(30 74 38)" fill={pawColor} />
        
        {/* Main pad - bottom part */}
        <path d="M 23 75 C 20 85, 35 90, 50 90 C 65 90, 75 80, 80 70 C 60 70, 50 65, 35 55 C 25 60, 25 65, 23 75 Z" fill={pawColor} />
        
        {/* Main pad - top part */}
        <path d="M 18 55 C 18 40, 35 38, 50 38 C 65 38, 82 40, 82 55 C 82 65, 75 68, 65 68 C 50 68, 45 60, 30 50 C 20 52, 18 50, 18 55 Z" fill={pawColor} />
      </svg>

      <div className={`flex flex-col ${isVertical ? 'items-center' : 'items-start'} justify-center`}>
        {/* Wordmark */}
        <span
          className={`${isVertical ? 'text-4xl' : 'text-xl'} font-bold tracking-[0.08em]`}
          style={{ color: textColor, fontFamily: 'var(--font-heading)' }}
        >
          PΛWLIYO
        </span>

        {/* Tagline */}
        {showTagline && (
          <span
            className="text-[10px] sm:text-xs tracking-[0.3em] font-medium uppercase mt-2"
            style={{ color: taglineColor }}
          >
            PET ESSENTIALS · EVERYDAY CARE
          </span>
        )}
      </div>
    </Link>
  );
}
