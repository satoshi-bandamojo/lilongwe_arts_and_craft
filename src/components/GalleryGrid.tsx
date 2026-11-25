import { Maximize2 } from 'lucide-react';
import type { GalleryItem } from '../types/lcac';
import { EditorialImage } from './EditorialImage';

interface GalleryGridProps {
  items: GalleryItem[];
  onSelect: (index: number) => void;
  variedLayout?: boolean;
}

export function GalleryGrid({
  items,
  onSelect,
  variedLayout = true,
}: GalleryGridProps) {
  if (items.length === 0) {
    return (
      <div className="p-10 rounded-lg bg-[#F7F2E8] border border-[#272522]/12 text-center">
        <p className="font-serif text-xl text-[#272522]">
          No illustrative works in this category yet.
        </p>
        <p className="mt-2 text-sm text-[#272522]/70">
          Select another discipline filter to explore LCAC’s planned creative areas.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, idx) => {
        const spanClass =
          variedLayout && item.aspect === 'wide'
            ? 'sm:col-span-2 lg:col-span-2'
            : '';
        const heightClass =
          variedLayout && item.aspect === 'wide'
            ? 'aspect-[16/9] sm:aspect-[16/9]'
            : 'aspect-[4/3]';

        return (
          <article
            key={item.id}
            className={`group flex flex-col bg-[#F7F2E8] border border-[#272522]/12 rounded-lg overflow-hidden ${spanClass}`}
          >
            <button
              type="button"
              onClick={() => onSelect(idx)}
              aria-label={`Enlarge ${item.title} (${item.category})`}
              className={`relative w-full ${heightClass} overflow-hidden bg-[#E7DEC9] text-left cursor-pointer`}
            >
              <EditorialImage
                src={item.image}
                alt={item.imageAlt}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[#272522]/80 text-[#F2EBDD] text-xs font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>View</span>
              </span>
            </button>

            <div className="p-5">
              <p className="text-xs font-medium text-[#963F2D]">
                {item.category} · Illustrative Image
              </p>
              <h3 className="mt-1.5 font-serif text-lg font-semibold text-[#272522] leading-snug">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs text-[#272522]/75 leading-relaxed">
                {item.caption}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
