import { ArrowRight } from 'lucide-react';
import {
  BEYOND_SKILLS_PILLARS,
  EXPECTED_IMPACT_OUTCOMES,
} from '../data/site';
import { Button } from '../components/Button';
import { EditorialImage } from '../components/EditorialImage';
import { HeroSection } from '../components/HeroSection';
import { ImpactStats } from '../components/ImpactStats';
import { SectionHeading } from '../components/SectionHeading';

interface ImpactPageProps {
  onNavigate: (path: string) => void;
}

const INCUBATION_SUPPORTS = [
  'Shared workspaces',
  'Mentorship',
  'Product development',
  'Market access',
  'Business registration support',
  'Cooperative formation',
  'Access to microfinance',
];

const MARKET_LINKAGES = [
  'Annual art festivals',
  'Monthly craft markets',
  'Tourism partnerships',
  'Hotel gift shops',
  'Airport souvenir shops',
  'Online marketplace',
  'Export promotion',
  'Corporate gift production',
];

export function ImpactPage({ onNavigate }: ImpactPageProps) {
  return (
    <div>
      <HeroSection
        kicker="Projected Social & Economic Change"
        title="Building More Than Skills. Building Futures."
        description="LCAC’s proposed model is designed around measurable human, cultural, and economic transformation for young people aged 15–35 in Mtandire Township and across Lilongwe."
        note="Transparency Note: All numerical targets below are proposed five-year goals from the LCAC institutional concept. Because the centre is not yet operational, no historical graduate or impact statistics exist."
      />

      {/* Numerical Five-Year Targets */}
      <section className="py-16 sm:py-20 bg-[#30483C] text-[#F2EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImpactStats tone="forest" />
        </div>
      </section>

      {/* Eight Expected Social & Economic Outcomes */}
      <section className="py-16 sm:py-20 bg-[#F2EBDD] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            kicker="Qualitative Impact Framework"
            title="Eight Intended Community & Youth Outcomes"
            description="Beyond numerical training reach, LCAC aims to foster long-term social stability, cultural continuity, and inclusive opportunity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPECTED_IMPACT_OUTCOMES.map((outcome, idx) => (
              <div
                key={outcome.title}
                className="p-6 rounded-lg bg-[#F7F2E8] border border-[#272522]/12 flex flex-col"
              >
                <span className="font-serif text-xl font-semibold text-[#963F2D] tabular-nums mb-2">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-lg font-semibold text-[#272522]">
                  {outcome.title}
                </h3>
                <p className="mt-2 text-sm text-[#272522]/80 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation, Innovation Hub & Market Linkages */}
      <section className="py-16 sm:py-20 bg-[#F7F2E8] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#272522]/12">
              <EditorialImage
                src="/src/assets/images/prog_recycling_art_1795640096992.jpg"
                alt="Illustrative gallery display of sustainable upcycled furniture and woven lighting"
                containerClassName="w-full h-full"
              />
            </div>
            <p className="mt-2.5 text-xs text-[#272522]/65">
              Illustrative sustainable product design · Connecting eco-innovation with commercial markets.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              kicker="From Studio to Sustainable Enterprise"
              title="How LCAC Intends to Sustain Outcomes"
              description="Training graduates into secure livelihoods requires deliberate incubation and reliable buyer networks."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-[#F2EBDD] border border-[#272522]/12 space-y-3">
                <h3 className="font-serif text-xl font-semibold text-[#272522]">
                  Business Incubation
                </h3>
                <ul className="space-y-1.5 text-sm text-[#272522]/85">
                  {INCUBATION_SUPPORTS.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-[#F2EBDD] border border-[#272522]/12 space-y-3">
                <h3 className="font-serif text-xl font-semibold text-[#272522]">
                  Market Linkages
                </h3>
                <ul className="space-y-1.5 text-sm text-[#272522]/85">
                  {MARKET_LINKAGES.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#F2EBDD] border border-[#272522]/12">
              <h3 className="font-serif text-lg font-semibold text-[#272522] mb-2">
                Innovation Hub Integration
              </h3>
              <p className="text-sm text-[#272522]/80 leading-relaxed">
                {BEYOND_SKILLS_PILLARS[0].summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F2EBDD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#272522]">
            Help Turn These Targets Into Reality
          </h2>
          <p className="text-base text-[#272522]/80 max-w-2xl mx-auto leading-relaxed">
            Strategic partnerships, mentorship, and seed support are essential to launching LCAC’s
            studios in Mtandire Township.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button href="/partnerships" onNavigate={onNavigate} variant="primary" size="lg">
              Explore Partnerships
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
            <Button href="/contact" onNavigate={onNavigate} variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
