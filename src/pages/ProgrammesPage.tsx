import { useState } from 'react';
import { Search } from 'lucide-react';
import { PROGRAMME_CATEGORIES, PROGRAMMES } from '../data/programmes';
import { ENTREPRENEURSHIP_TOPICS, LIFE_SKILLS_TOPICS } from '../data/site';
import type { ProgrammeCategoryGroup } from '../types/lcac';
import { filterProgrammes } from '../utils/filters';
import { HeroSection } from '../components/HeroSection';
import { ProgrammeCard } from '../components/ProgrammeCard';
import { SectionHeading } from '../components/SectionHeading';

interface ProgrammesPageProps {
  onNavigate: (path: string) => void;
}

export function ProgrammesPage({ onNavigate }: ProgrammesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    ProgrammeCategoryGroup | 'All'
  >('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = filterProgrammes(PROGRAMMES, selectedCategory, searchQuery);

  return (
    <div>
      <HeroSection
        kicker="Proposed Creative Curriculum"
        title="14 Proposed Creative & Craft Disciplines."
        description="Explore LCAC’s proposed training disciplines spanning traditional Malawian arts and crafts, fashion and textile design, digital media, and performing arts."
        note="Proposed Curriculum Notice: Course durations, tuition or bursary structures, admission criteria, and intake dates are not yet confirmed and will be determined as LCAC progresses toward establishment."
      />

      {/* Filter Toolbar & Grid */}
      <section className="py-12 sm:py-16 bg-[#F2EBDD] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div
              role="group"
              aria-label="Filter programmes by category"
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
                All Disciplines ({PROGRAMMES.length})
              </button>
              {PROGRAMME_CATEGORIES.map((category) => (
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

            <div className="relative w-full lg:w-72">
              <label htmlFor="programme-search" className="sr-only">
                Search creative disciplines or skills
              </label>
              <Search
                className="w-4 h-4 text-[#272522]/55 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="programme-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search discipline or skill..."
                className="w-full pl-10 pr-4 py-2.5 rounded-md bg-[#F7F2E8] border border-[#272522]/20 text-sm text-[#272522] placeholder:text-[#272522]/50 focus:border-[#963F2D] focus:outline-none min-h-[42px]"
              />
            </div>
          </div>

          <p className="text-xs text-[#272522]/70 tabular-nums">
            Showing {filtered.length} of {PROGRAMMES.length} proposed disciplines
          </p>

          {filtered.length === 0 ? (
            <div className="p-10 rounded-lg bg-[#F7F2E8] border border-[#272522]/12 text-center">
              <h2 className="font-serif text-2xl font-semibold text-[#272522]">
                No matching disciplines found
              </h2>
              <p className="mt-2 text-sm text-[#272522]/75">
                Try clearing your search term or selecting “All Disciplines”.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-5 py-2.5 rounded-md bg-[#963F2D] text-[#F2EBDD] text-sm font-medium cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {filtered.map((programme) => (
                <ProgrammeCard
                  key={programme.id}
                  programme={programme}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Complementary Core Training: Entrepreneurship & Life Skills */}
      <section className="py-16 sm:py-20 bg-[#F7F2E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            kicker="Integrated Core Modules"
            title="Entrepreneurship & Life Skills Alongside Every Studio"
            description="To prepare young creatives for sustainable livelihoods and personal resilience, LCAC intends to pair every technical discipline with practical business and life skills training."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-7 rounded-lg bg-[#F2EBDD] border border-[#272522]/12 space-y-4">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#963F2D]">
                Module A · Enterprise Readiness
              </p>
              <h3 className="font-serif text-2xl font-semibold text-[#272522]">
                Entrepreneurship Training
              </h3>
              <p className="text-sm text-[#272522]/80 leading-relaxed">
                Equipping emerging makers and artists to price sustainably, build recognisable
                brands, reach digital customers, and prepare products for regional and export trade.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-[#272522]">
                {ENTREPRENEURSHIP_TOPICS.map((topic) => (
                  <li key={topic} className="flex items-center gap-2">
                    <span className="text-[#963F2D]" aria-hidden="true">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-7 rounded-lg bg-[#F2EBDD] border border-[#272522]/12 space-y-4">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#30483C]">
                Module B · Holistic Development
              </p>
              <h3 className="font-serif text-2xl font-semibold text-[#272522]">
                Life Skills Programme
              </h3>
              <p className="text-sm text-[#272522]/80 leading-relaxed">
                Supporting young people’s health, confidence, communication, and community
                leadership across Mtandire Township.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-[#272522]">
                {LIFE_SKILLS_TOPICS.map((topic) => (
                  <li key={topic} className="flex items-center gap-2">
                    <span className="text-[#30483C]" aria-hidden="true">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
