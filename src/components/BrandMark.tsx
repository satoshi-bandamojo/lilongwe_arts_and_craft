interface BrandMarkProps {
  variant?: 'dark' | 'light';
}

export function BrandMark({ variant = 'dark' }: BrandMarkProps) {
  const strokeColor = variant === 'light' ? '#F2EBDD' : '#272522';
  const accentColor = variant === 'light' ? '#D6A15C' : '#963F2D';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1.5"
          y="1.5"
          width="25"
          height="25"
          rx="3"
          stroke={strokeColor}
          strokeWidth="1.5"
        />
        <path
          d="M7 21V13C7 9.13401 10.134 6 14 6C17.866 6 21 9.13401 21 13V21"
          stroke={accentColor}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M11 21V14C11 12.3431 12.3431 11 14 11C15.6569 11 17 12.3431 17 14V21"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="5"
          y1="21"
          x2="23"
          y2="21"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-serif text-xl font-semibold tracking-tight ${
          variant === 'light' ? 'text-[#F2EBDD]' : 'text-[#272522]'
        }`}
      >
        LCAC
      </span>
    </span>
  );
}
