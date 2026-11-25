import { useState } from 'react';
import { Palette } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'eager' | 'lazy';
  caption?: string;
}

export function EditorialImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  loading = 'lazy',
  caption,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`m-0 ${containerClassName}`.trim()}>
      <div className="relative w-full h-full overflow-hidden bg-[#E7DEC9]">
        {hasError ? (
          <div
            role="img"
            aria-label={alt}
            className="w-full h-full min-h-[200px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#30483C]/15 via-[#E7DEC9] to-[#963F2D]/15 text-[#272522]"
          >
            <Palette className="w-7 h-7 text-[#963F2D] mb-2" aria-hidden="true" />
            <p className="font-serif text-sm font-medium max-w-xs">{alt}</p>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading={loading}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className={className}
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-xs text-[#272522]/70 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
