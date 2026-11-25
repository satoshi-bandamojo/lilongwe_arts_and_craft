import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-light';
type ButtonSize = 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type ActionButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

interface LinkButtonProps extends BaseProps {
  href: string;
  onNavigate?: (path: string) => void;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[#963F2D] text-[#F2EBDD] hover:bg-[#7A3223] border border-transparent',
  secondary:
    'bg-[#30483C] text-[#F2EBDD] hover:bg-[#23362C] border border-transparent',
  outline:
    'bg-transparent text-[#272522] border border-[#272522]/30 hover:border-[#963F2D] hover:text-[#963F2D]',
  'outline-light':
    'bg-transparent text-[#F2EBDD] border border-[#F2EBDD]/40 hover:border-[#D6A15C] hover:text-[#D6A15C]',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm min-h-[42px]',
  lg: 'px-7 py-3.5 text-sm min-h-[46px]',
};

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer';

export function Button(props: ActionButtonProps | LinkButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    className = '',
  } = props;

  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`.trim();

  if ('href' in props && props.href !== undefined) {
    const { href, onNavigate } = props;
    return (
      <a
        href={href}
        onClick={(e) => {
          if (
            onNavigate &&
            !e.metaKey &&
            !e.ctrlKey &&
            !e.shiftKey &&
            !e.altKey
          ) {
            e.preventDefault();
            onNavigate(href);
          }
        }}
        className={classes}
      >
        {children}
      </a>
    );
  }

  const {
    variant: _variant,
    size: _size,
    className: _className,
    children: _children,
    ...rest
  } = props as ActionButtonProps;

  return (
    <button type={rest.type ?? 'button'} className={classes} {...rest}>
      {children}
    </button>
  );
}
