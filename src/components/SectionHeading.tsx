interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className = '',
}: SectionHeadingProps) {
  const isLight = tone === 'light';
  const alignClasses = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`.trim()}>
      {kicker && (
        <p
          className={`text-xs font-medium tracking-[0.14em] uppercase mb-3 ${
            isLight ? 'text-[#D6A15C]' : 'text-[#963F2D]'
          }`}
        >
          {kicker}
        </p>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold leading-[1.15] tracking-tight ${
          isLight ? 'text-[#F2EBDD]' : 'text-[#272522]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-[1.0625rem] leading-[1.7] max-w-2xl ${
            isLight ? 'text-[#F2EBDD]/85' : 'text-[#272522]/80'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
