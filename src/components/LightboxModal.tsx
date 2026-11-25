import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryItem } from '../types/lcac';
import { EditorialImage } from './EditorialImage';

interface LightboxModalProps {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function LightboxModal({
  items,
  activeIndex,
  onClose,
  onSelectIndex,
}: LightboxModalProps) {
  const isOpen = activeIndex !== null && items[activeIndex] !== undefined;
  const activeItem = isOpen ? items[activeIndex] : null;

  useEffect(() => {
    if (!isOpen || activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onSelectIndex((activeIndex + 1) % items.length);
      } else if (e.key === 'ArrowLeft') {
        onSelectIndex((activeIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, items.length, onClose, onSelectIndex]);

  if (!activeItem || activeIndex === null) {
    return null;
  }

  const handlePrev = () => {
    onSelectIndex((activeIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    onSelectIndex((activeIndex + 1) % items.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${activeItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#272522]/90 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#F2EBDD] text-[#272522] rounded-lg overflow-hidden border border-[#F2EBDD]/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-[#272522]/12">
          <div className="text-xs text-[#272522]/75">
            <span className="font-medium text-[#963F2D]">{activeItem.category}</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>Illustrative Creative Discipline Visual</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md text-[#272522] hover:bg-[#E7DEC9] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="bg-[#272522] aspect-[16/10] max-h-[65vh] w-full overflow-hidden">
          <EditorialImage
            src={activeItem.image}
            alt={activeItem.imageAlt}
            loading="eager"
            containerClassName="w-full h-full"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#272522]">
              {activeItem.title}
            </h3>
            <p className="mt-1 text-xs font-medium text-[#30483C]">
              {activeItem.medium}
            </p>
            <p className="mt-2 text-sm text-[#272522]/80 max-w-2xl leading-relaxed">
              {activeItem.caption}
            </p>
          </div>

          {items.length > 1 && (
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="inline-flex items-center justify-center w-11 h-11 rounded-md border border-[#272522]/20 hover:border-[#963F2D] hover:text-[#963F2D] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <span className="text-xs text-[#272522]/70 tabular-nums px-2">
                {activeIndex + 1} / {items.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="inline-flex items-center justify-center w-11 h-11 rounded-md border border-[#272522]/20 hover:border-[#963F2D] hover:text-[#963F2D] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
