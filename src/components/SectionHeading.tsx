interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  alignment = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClass = alignment === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignClass} ${className}`}>
      <h2
        className="text-2xl md:text-3xl font-semibold tracking-tight text-charcoal"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-taupe max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
