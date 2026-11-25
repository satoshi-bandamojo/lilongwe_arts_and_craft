import { useState } from 'react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';
import type { GalleryCategory } from '../types/lcac';
import { filterGalleryItems } from '../utils/filters';
import { GalleryGrid } from '../components/GalleryGrid';
import { HeroSection } from '../components/HeroSection';
import { LightboxModal } from '../components/LightboxModal';

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    GalleryCategory | 'All'
  >('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filterGalleryItems(GALLERY_ITEMS, selectedCategory);

  const handleCategoryChange = (cat: GalleryCategory | 'All') => {
    setSelectedCategory(cat);
    setLightboxIndex(null);
  };

  return (
    <div>
      <HeroSection
        kicker="Illustrative Creative Portfolio"
        title="Celebrating African Creativity."
        description="Explore visual representations of the artistic traditions, contemporary crafts, digital media, and performing arts that LCAC intends to nurture in Mtandire Township."
        note="Illustrative Imagery Notice: All photographs on this page are illustrative representations of Malawian and African creative disciplines—they are not works produced by existing LCAC students or facilities."
      />

      <section className="py-12 sm:py-16 bg-[#F2EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div
            role="group"
            aria-label="Filter gallery by creative discipline"
            className="flex flex-wrap items-center gap-1.5 sm:gap-2 pb-4 border-b border-[#272522]/10"
          >
            <button
              type="button"
              onClick={() => handleCategoryChange('All')}
              aria-pressed={selectedCategory === 'All'}
              className={`px-3.5 py-2 rounded-md text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer min-h-[40px] ${
                selectedCategory === 'All'
                  ? 'bg-[#963F2D] text-[#F2EBDD]'
                  : 'bg-[#F7F2E8] text-[#272522] border border-[#272522]/15 hover:border-[#963F2D]'
              }`}
            >
              All ({GALLERY_ITEMS.length})
            </button>
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                aria-pressed={selectedCategory === category}
                className={`px-3.5 py-2 rounded-md text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer min-h-[40px] ${
                  selectedCategory === category
                    ? 'bg-[#963F2D] text-[#F2EBDD]'
                    : 'bg-[#F7F2E8] text-[#272522] border border-[#272522]/15 hover:border-[#963F2D]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="text-xs text-[#272522]/70 tabular-nums">
            Showing {filteredItems.length} illustrative{' '}
            {filteredItems.length === 1 ? 'work' : 'works'}
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
          </p>

          <GalleryGrid
            items={filteredItems}
            onSelect={(idx) => setLightboxIndex(idx)}
            variedLayout={selectedCategory === 'All'}
          />
        </div>
      </section>

      <LightboxModal
        items={filteredItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={setLightboxIndex}
      />
    </div>
  );
}
