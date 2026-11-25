import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { PROGRAMME_CATEGORIES, PROGRAMMES } from '../data/programmes';
import { BEYOND_SKILLS_PILLARS, INSTITUTIONAL_IDENTITY } from '../data/site';
import { Button } from '../components/Button';
import { EditorialImage } from '../components/EditorialImage';
import { ImpactStats } from '../components/ImpactStats';
import { LightboxModal } from '../components/LightboxModal';
import { PartnershipSection } from '../components/PartnershipSection';
import { SectionHeading } from '../components/SectionHeading';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const CATEGORY_SHOWCASE_IMAGES: Record<string, string> = {
  'Traditional Arts & Crafts': '/src/assets/images/prog_pottery_ceramics_1795640095183.jpg',
  'Fashion & Design': '/src/assets/images/prog_fashion_textiles_1795640095971.jpg',
  'Digital & Media Arts': '/src/assets/images/prog_digital_arts_1795640109143.jpg',
  'Music & Performing Arts': '/src/assets/images/prog_performing_arts_1795640097839.jpg',
};

const CATEGORY_SUMMARIES: Record<string, string> = {
  'Traditional Arts & Crafts':
    'Fine arts, wood craft, pottery and ceramics, metal art, and traditional Malawian basketry grounded in tactile mastery.',
  'Fashion & Design':
    'Fashion and textile design, leather craft, beadwork, and eco-conscious recycling art transforming materials into wearable and interior pieces.',
  'Digital & Media Arts':
    'Graphic design, commercial photography, documentary videography, illustration, and animation for Malawi’s digital creative economy.',
  'Music & Performing Arts':
    'Traditional dance, drama, spoken-word poetry, and contemporary music production nurturing confident cultural storytellers.',
};

export function HomePage({ onNavigate }: HomePageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const showcaseItems = GALLERY_ITEMS.slice(0, 6);

  return (
    <div>
      {/* 2. Hero Section */}
      <section className="border-b border-[#272522]/12 bg-[#F2EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between py-2">
              <div>
                <p className="text-[11px] sm:text-xs font-medium tracking-[0.09em] sm:tracking-[0.14em] uppercase text-[#963F2D] mb-4">
                  Proposed Centre · Mtandire Township, Lilongwe
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] font-semibold leading-[1.08] tracking-tight text-[#272522]">
                  Where Creativity Becomes Opportunity.
                </h1>
                <p className="mt-6 text-base sm:text-lg text-[#272522]/85 leading-[1.7] max-w-xl">
                  Empowering young people through creative skills, entrepreneurship and cultural
                  expression. Discover the potential of creativity to transform lives and build
                  stronger communities.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button
                    href="/programmes"
                    onNavigate={onNavigate}
                    variant="primary"
                    size="lg"
                  >
                    Explore Our Programmes
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                  <Button
                    href="/about"
                    onNavigate={onNavigate}
                    variant="outline"
                    size="lg"
                  >
                    Discover Our Mission
                  </Button>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-[#272522]/12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-xs text-[#272522]/75">
                <div>
                  <span className="font-semibold text-[#272522]">Youth Focus:</span>{' '}
                  Ages 15–35 in Mtandire &amp; Lilongwe
                </div>
                <div>
                  <span className="font-semibold text-[#272522]">Curriculum Concept:</span>{' '}
                  14 Creative &amp; Craft Disciplines
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col">
              <div className="flex-1 rounded-lg overflow-hidden border border-[#272522]/12 bg-[#E7DEC9] min-h-[280px] sm:min-h-[380px]">
                <EditorialImage
                  src="/src/assets/images/hero_lilongwe_studio_1795640093471.jpg"
                  alt="Illustrative studio scene of young Malawian artists painting on canvas and throwing clay pottery in warm sunlight"
                  loading="eager"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2.5 text-xs text-[#272522]/65">
                Illustrative studio photograph · Envisioned creative workshop atmosphere for LCAC, Lilongwe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Introduction to LCAC */}
      <section className="py-16 sm:py-22 lg:py-24 bg-[#F7F2E8] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#272522]/12">
                <EditorialImage
                  src="/src/assets/images/about_basket_weaving_1795640094024.jpg"
                  alt="Illustrative close-up of skilled African hands weaving a patterned reed basket in natural light"
                  containerClassName="w-full h-full"
                />
              </div>
              <p className="mt-2.5 text-xs text-[#272522]/65">
                Illustrative Malawian craft heritage · Preserving traditional techniques alongside modern enterprise.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                kicker="About the Proposed Institution"
                title="Creativity Has the Power to Change Lives."
              />
              <div className="space-y-4 text-base text-[#272522]/85 leading-[1.75] max-w-2xl">
                <p>
                  The <strong className="font-semibold text-[#272522]">{INSTITUTIONAL_IDENTITY.name} (LCAC)</strong> is a
                  proposed community-based creative skills development centre to be established in{' '}
                  {INSTITUTIONAL_IDENTITY.location}. Conceived in response to youth unemployment,
                  school dropout, poverty, and limited access to vocational pathways, LCAC will serve
                  young people aged 15–35—with dedicated inclusion for young women, young mothers,
                  people with disabilities, and self-taught artists.
                </p>
                <p>
                  By uniting practical artistic instruction with business literacy, mentorship, and
                  market access, the centre aims to help emerging creatives turn raw talent into
                  employable skills, viable enterprises, and resilient community leadership while
                  safeguarding Malawi’s cultural heritage.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="/about"
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      onNavigate('/about');
                    }
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#963F2D] hover:text-[#7A3223] transition-colors"
                >
                  <span>Read our full institutional concept</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Programmes (4 Visual Categories) */}
      <section className="py-16 sm:py-22 lg:py-24 bg-[#F2EBDD] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <SectionHeading
              kicker="Proposed Training Framework"
              title="Discover Your Creative Potential."
              description="LCAC’s proposed curriculum spans 14 creative disciplines organised across four studio pathways—designed to bridge Malawian craft heritage with contemporary design and digital economies."
            />
            <div className="shrink-0">
              <Button
                href="/programmes"
                onNavigate={onNavigate}
                variant="outline"
                size="md"
              >
                Explore All 14 Programmes
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PROGRAMME_CATEGORIES.map((category) => {
              const matchingDisciplines = PROGRAMMES.filter(
                (p) => p.categoryGroup === category
              );

              return (
                <article
                  key={category}
                  className="group bg-[#F7F2E8] border border-[#272522]/12 rounded-lg overflow-hidden flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[#E7DEC9]">
                    <EditorialImage
                      src={CATEGORY_SHOWCASE_IMAGES[category]}
                      alt={`Illustrative visual for ${category} at LCAC`}
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <p className="text-xs font-medium text-[#963F2D] mb-2">
                      {matchingDisciplines.length}{' '}
                      {matchingDisciplines.length === 1 ? 'Discipline' : 'Disciplines'} · Proposed Pathway
                    </p>
                    <h3 className="font-serif text-2xl font-semibold text-[#272522]">
                      {category}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#272522]/80 leading-relaxed flex-1">
                      {CATEGORY_SUMMARIES[category]}
                    </p>
                    <p className="mt-4 pt-4 border-t border-[#272522]/10 text-xs text-[#272522]/75 leading-relaxed">
                      <span className="font-semibold text-[#272522]">Included: </span>
                      {matchingDisciplines.map((d) => d.title).join(' · ')}
                    </p>
                    <div className="mt-4">
                      <a
                        href="/programmes"
                        onClick={(e) => {
                          if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                            e.preventDefault();
                            onNavigate('/programmes');
                          }
                        }}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#963F2D] hover:text-[#7A3223]"
                      >
                        <span>View disciplines</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Beyond Creative Skills */}
      <section className="py-16 sm:py-22 lg:py-24 bg-[#F7F2E8] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <SectionHeading
                kicker="Beyond Creative Skills"
                title="Turning Creative Skills Into Opportunities."
                description="Technical artistry alone is not enough. Every LCAC pathway pairs hands-on studio practice with business development, life skills, and real market channels."
              />
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#272522]/12">
                <EditorialImage
                  src="/src/assets/images/prog_photography_video_1795640106739.jpg"
                  alt="Illustrative studio scene of young Malawian creatives photographing artisan baskets for product catalogues"
                  containerClassName="w-full h-full"
                />
              </div>
              <p className="text-xs text-[#272522]/65">
                Illustrative enterprise workflow · Connecting artisan production with photography, branding, and commercial retail.
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#272522]/12 border-t border-b border-[#272522]/12">
              {BEYOND_SKILLS_PILLARS.map((pillar) => (
                <div key={pillar.id} className="py-8 first:pt-6 last:pb-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-2xl text-[#963F2D] tabular-nums shrink-0">
                      {pillar.number}
                    </span>
                    <div className="space-y-3">
                      <h3 className="font-serif text-2xl font-semibold text-[#272522]">
                        {pillar.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#272522]/80 leading-relaxed">
                        {pillar.summary}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-2 text-xs sm:text-sm text-[#30483C] font-medium">
                        {pillar.points.map((point) => (
                          <li key={point}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Vision and Impact */}
      <section className="py-16 sm:py-22 lg:py-24 bg-[#30483C] text-[#F2EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <SectionHeading
              kicker="Our Vision & Impact"
              title="Building More Than Skills. Building Futures."
              description="Once established in Mtandire Township, LCAC’s proposed five-year plan is designed to measure real livelihood transitions—from studio enrolment to employment, enterprise creation, and community renewal."
              tone="light"
            />
            <div className="shrink-0">
              <Button
                href="/impact"
                onNavigate={onNavigate}
                variant="outline-light"
                size="md"
              >
                Explore Expected Impact
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <ImpactStats tone="forest" />
        </div>
      </section>

      {/* 7. Creative Showcase */}
      <section className="py-16 sm:py-22 lg:py-24 bg-[#F2EBDD] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <SectionHeading
              kicker="Illustrative Creative Showcase"
              title="Celebrating African Creativity."
              description="A curated preview of the visual, craft, and performance traditions LCAC intends to champion. All photographs are illustrative representations rather than works by existing LCAC students."
            />
            <div className="shrink-0">
              <Button
                href="/gallery"
                onNavigate={onNavigate}
                variant="outline"
                size="md"
              >
                Open Full Gallery
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {showcaseItems.map((item, idx) => {
              const colSpan =
                idx === 0 || idx === 3 || idx === 4
                  ? 'md:col-span-7'
                  : 'md:col-span-5';
              return (
                <article
                  key={item.id}
                  className={`${colSpan} group bg-[#F7F2E8] border border-[#272522]/12 rounded-lg overflow-hidden flex flex-col`}
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={`Inspect ${item.title}`}
                    className="aspect-[16/10] w-full overflow-hidden bg-[#E7DEC9] cursor-pointer"
                  >
                    <EditorialImage
                      src={item.image}
                      alt={item.imageAlt}
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </button>
                  <div className="p-5 flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-[#963F2D]">
                        {item.category} · Illustrative Image
                      </p>
                      <h3 className="mt-1 font-serif text-lg font-semibold text-[#272522]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Partnerships */}
      <section className="py-16 sm:py-22 lg:py-24 bg-[#F7F2E8] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PartnershipSection onNavigate={onNavigate} compact />
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="py-16 sm:py-22 lg:py-24 bg-[#F2EBDD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#963F2D]">
            Join the Establishment Journey
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#272522] leading-[1.12]">
            Be Part of the Creative Transformation.
          </h2>
          <p className="text-base sm:text-lg text-[#272522]/80 leading-[1.7] max-w-2xl mx-auto">
            Whether you are an educator, development partner, cultural practitioner, prospective
            sponsor, or young creative in Lilongwe, we invite you to learn more about LCAC and
            explore how we can establish this centre together.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              onNavigate={onNavigate}
              variant="primary"
              size="lg"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
            <Button
              href="/partnerships"
              onNavigate={onNavigate}
              variant="outline"
              size="lg"
            >
              Partnership Opportunities
            </Button>
          </div>
        </div>
      </section>

      <LightboxModal
        items={showcaseItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={setLightboxIndex}
      />
    </div>
  );
}
