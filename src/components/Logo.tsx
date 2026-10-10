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
  const fill = variant === 'dark' ? '#171717' : '#F4EFE6';
  const taglineColor = variant === 'dark' ? '#A18B72' : '#D9CBB8';

  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center gap-1 no-underline ${className}`}
      aria-label="PAWLIYO — Home"
    >
      <div className="flex items-center gap-2.5">
        {/* Paw Symbol */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Main pad */}
          <ellipse cx="20" cy="26" rx="9" ry="7.5" fill={fill} />
          {/* Top-left toe */}
          <ellipse cx="10" cy="13" rx="4" ry="5" transform="rotate(-10 10 13)" fill={fill} />
          {/* Top-right toe */}
          <ellipse cx="30" cy="13" rx="4" ry="5" transform="rotate(10 30 13)" fill={fill} />
          {/* Inner-left toe */}
          <ellipse cx="15.5" cy="8" rx="3.5" ry="4.5" transform="rotate(-5 15.5 8)" fill={fill} />
          {/* Inner-right toe */}
          <ellipse cx="24.5" cy="8" rx="3.5" ry="4.5" transform="rotate(5 24.5 8)" fill={fill} />
        </svg>

        {/* Wordmark */}
        <span
          className="text-xl font-semibold tracking-[0.2em]"
          style={{ color: fill, fontFamily: 'var(--font-heading)' }}
        >
          PAWLIYO
        </span>
      </div>

      {showTagline && (
        <span
          className="text-[10px] tracking-[0.25em] font-normal uppercase"
          style={{ color: taglineColor }}
        >
          PET ESSENTIALS · EVERYDAY CARE
        </span>
      )}
    </Link>
  );
}
