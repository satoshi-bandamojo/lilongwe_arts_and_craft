import { useState } from 'react';
import { CalendarOff } from 'lucide-react';
import {
  NEWS_ARTICLES,
  NEWS_CATEGORIES,
  PLANNED_PROGRAMMING_FORMATS,
} from '../data/news';
import type { NewsArticle, NewsCategory } from '../types/lcac';
import { filterNewsArticles } from '../utils/filters';
import { ArticleDetailView } from '../components/ArticleDetailView';
import { Button } from '../components/Button';
import { HeroSection } from '../components/HeroSection';
import { NewsCard } from '../components/NewsCard';
import { SectionHeading } from '../components/SectionHeading';

interface NewsPageProps {
  onNavigate: (path: string) => void;
}

export function NewsPage({ onNavigate }: NewsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    NewsCategory | 'All'
  >('All');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const filteredArticles = filterNewsArticles(NEWS_ARTICLES, selectedCategory);

  return (
    <div>
      <HeroSection
        kicker="Dispatches & Community Calendar"
        title="News & Events."
        description="Institutional announcements, exhibitions, monthly craft markets, workshops, and community updates will be published here once LCAC commences programming."
        note="Pre-Establishment Status: Because LCAC is currently a proposed institution, no scheduled events, dates, or published announcements are active yet."
      />

      <section className="py-12 sm:py-16 bg-[#F2EBDD] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {activeArticle ? (
            <ArticleDetailView
              article={activeArticle}
              onBack={() => setActiveArticle(null)}
            />
          ) : (
            <>
              <div
                role="group"
                aria-label="Filter announcements and events by category"
                className="flex flex-wrap items-center gap-2"
              >
                <button
                  type="button"
                  onClick={() => setSelectedCategory('All')}
                  aria-pressed={selectedCategory === 'All'}
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer min-h-[40px] ${
                    selectedCategory === 'All'
                      ? 'bg-[#963F2D] text-[#F2EBDD]'
                      : 'bg-[#F7F2E8] text-[#272522] border border-[#272522]/15 hover:border-[#963F2D]'
                  }`}
                >
                  All Updates
                </button>
                {NEWS_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={selectedCategory === category}
                    className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer min-h-[40px] ${
                      selectedCategory === category
                        ? 'bg-[#963F2D] text-[#F2EBDD]'
                        : 'bg-[#F7F2E8] text-[#272522] border border-[#272522]/15 hover:border-[#963F2D]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {filteredArticles.length === 0 ? (
                <div className="p-10 sm:p-12 rounded-lg bg-[#F7F2E8] border border-[#272522]/12 text-center max-w-3xl mx-auto space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E7DEC9] text-[#963F2D]">
                    <CalendarOff className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#272522]">
                    No Published {selectedCategory === 'All' ? 'News or Events' : selectedCategory} Yet
                  </h2>
                  <p className="text-sm sm:text-base text-[#272522]/80 leading-relaxed max-w-xl mx-auto">
                    LCAC is presently in its pre-establishment phase in Mtandire Township,
                    Lilongwe. Rather than listing placeholder dates, this space remains empty until
                    official announcements, exhibitions, or community workshops are confirmed.
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <Button
                      href="/contact"
                      onNavigate={onNavigate}
                      variant="primary"
                      size="md"
                    >
                      Register Establishment Interest
                    </Button>
                    {selectedCategory !== 'All' && (
                      <Button
                        type="button"
                        variant="outline"
                        size="md"
                        onClick={() => setSelectedCategory('All')}
                      >
                        View All Categories
                      </Button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article) => (
                    <NewsCard
                      key={article.id}
                      article={article}
                      onSelect={setActiveArticle}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Planned Event & Announcement Formats */}
      <section className="py-16 sm:py-20 bg-[#F7F2E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            kicker="Future Editorial Calendar"
            title="Planned Categories & Community Formats"
            description="Once operational, LCAC intends to organise public programming and institutional updates across these seven areas."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLANNED_PROGRAMMING_FORMATS.map((item, idx) => (
              <div
                key={item.category}
                className="p-6 rounded-lg bg-[#F2EBDD] border border-[#272522]/12"
              >
                <p className="text-xs font-medium text-[#963F2D] tabular-nums mb-1.5">
                  {String(idx + 1).padStart(2, '0')} · Planned Format
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#272522]">
                  {item.category}
                </h3>
                <p className="mt-2 text-sm text-[#272522]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
