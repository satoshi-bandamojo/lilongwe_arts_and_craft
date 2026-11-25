import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PROGRAMMES } from '../data/programmes';
import { ENTREPRENEURSHIP_TOPICS, LIFE_SKILLS_TOPICS } from '../data/site';
import { buildProgrammePath } from '../utils/router';
import { Button } from '../components/Button';
import { EditorialImage } from '../components/EditorialImage';

interface ProgrammeDetailPageProps {
  slug?: string;
  onNavigate: (path: string) => void;
}

export function ProgrammeDetailPage({
  slug,
  onNavigate,
}: ProgrammeDetailPageProps) {
  const index = PROGRAMMES.findIndex((p) => p.slug === slug);
  const programme = index >= 0 ? PROGRAMMES[index] : PROGRAMMES[0];
  const currentIndex = index >= 0 ? index : 0;
  const prevProgramme =
    PROGRAMMES[(currentIndex - 1 + PROGRAMMES.length) % PROGRAMMES.length];
  const nextProgramme = PROGRAMMES[(currentIndex + 1) % PROGRAMMES.length];

  return (
    <div>
      <section className="bg-[#F7F2E8] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <a
            href="/programmes"
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate('/programmes');
              }
            }}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#963F2D] hover:text-[#7A3223] mb-6"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to All 14 Programmes</span>
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-medium text-[#272522]/75">
                <span className="text-[#963F2D] tabular-nums">
                  Discipline {programme.numberLabel}
                </span>
                <span aria-hidden="true">{' · '}</span>
                <span>{programme.categoryGroup}</span>
                <span aria-hidden="true">{' · '}</span>
                <span>Proposed Programme</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#272522] leading-[1.1]">
                {programme.title}
              </h1>

              <p className="text-base sm:text-lg text-[#272522]/85 leading-[1.7]">
                {programme.overview}
              </p>

              <div className="pt-2">
                <Button
                  href="/contact"
                  onNavigate={onNavigate}
                  variant="primary"
                  size="md"
                >
                  Express Interest or Support
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#272522]/12 bg-[#E7DEC9]">
                <EditorialImage
                  src={programme.image}
                  alt={programme.imageAlt}
                  loading="eager"
                  containerClassName="w-full h-full"
                />
              </div>
              <p className="mt-2.5 text-xs text-[#272522]/65">
                Illustrative creative practice image for LCAC’s proposed {programme.title} discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F2EBDD] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="p-6 sm:p-7 rounded-lg bg-[#F7F2E8] border border-[#272522]/12 space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-[#272522]">
                Core Technical Skills Taught
              </h2>
              <p className="text-sm text-[#272522]/75">
                Foundational competencies outlined in LCAC’s concept framework for this discipline:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {programme.skillsTaught.map((skill) => (
                  <li
                    key={skill}
                    className="p-3.5 rounded-md bg-[#F2EBDD] border border-[#272522]/10 text-sm font-medium text-[#272522]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-7 rounded-lg bg-[#F7F2E8] border border-[#272522]/12 space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-[#272522]">
                Proposed Enterprise &amp; Market Pathways
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-[#272522]/85 leading-relaxed">
                {programme.enterprisePathways.map((pathway) => (
                  <li key={pathway} className="flex items-start gap-2.5">
                    <span className="text-[#963F2D] font-bold" aria-hidden="true">•</span>
                    <span>{pathway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-lg bg-[#30483C] text-[#F2EBDD] space-y-3">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#D6A15C]">
                Proposed Programme Status
              </p>
              <h3 className="font-serif text-xl font-semibold">
                Establishment Phase Notice
              </h3>
              <p className="text-sm text-[#F2EBDD]/85 leading-relaxed">
                LCAC is currently a proposed institution in Mtandire Township, Lilongwe. Specific
                course durations, fee or scholarship policies, admission requirements, and intake
                dates have not yet been finalised and are intentionally omitted here.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#F7F2E8] border border-[#272522]/12 space-y-4">
              <h3 className="font-serif text-xl font-semibold text-[#272522]">
                Integrated Beyond-Craft Support
              </h3>
              <p className="text-sm text-[#272522]/80 leading-relaxed">
                Every learner in {programme.title} will also participate in LCAC’s cross-cutting
                entrepreneurship and life skills curriculum:
              </p>
              <div className="text-xs text-[#272522]/80 space-y-2 pt-2 border-t border-[#272522]/10">
                <p>
                  <strong className="text-[#272522]">Entrepreneurship:</strong>{' '}
                  {ENTREPRENEURSHIP_TOPICS.slice(0, 6).join(', ')} &amp; export readiness.
                </p>
                <p>
                  <strong className="text-[#272522]">Life Skills:</strong>{' '}
                  {LIFE_SKILLS_TOPICS.slice(0, 6).join(', ')} &amp; civic responsibility.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Sequential Discipline Navigation */}
      <section className="py-10 bg-[#F7F2E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <a
            href={buildProgrammePath(prevProgramme.slug)}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate(buildProgrammePath(prevProgramme.slug));
              }
            }}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#272522] hover:text-[#963F2D]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>
              Previous: {prevProgramme.numberLabel} · {prevProgramme.title}
            </span>
          </a>

          <a
            href={buildProgrammePath(nextProgramme.slug)}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate(buildProgrammePath(nextProgramme.slug));
              }
            }}
            className="inline-flex items-center justify-end gap-2 text-sm font-medium text-[#272522] hover:text-[#963F2D]"
          >
            <span>
              Next: {nextProgramme.numberLabel} · {nextProgramme.title}
            </span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
