import { INSTITUTIONAL_IDENTITY } from '../data/site';
import { Button } from '../components/Button';
import { EditorialImage } from '../components/EditorialImage';
import { HeroSection } from '../components/HeroSection';
import { SectionHeading } from '../components/SectionHeading';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      <HeroSection
        kicker="Institutional Profile · Proposed Centre"
        title="Transforming Lives Through Creative Skills Development and Opportunity."
        description="The Lilongwe Centre for Arts and Craft (LCAC) is a proposed community-based creative skills development centre in Mtandire Township, Lilongwe, Malawi—envisioned to empower vulnerable youth aged 15–35 through practical creative training, enterprise, and cultural preservation."
        note={INSTITUTIONAL_IDENTITY.statusNotice}
      />

      {/* 1. Background & Story */}
      <section className="py-16 sm:py-20 bg-[#F2EBDD] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <SectionHeading
              kicker="01 · Background"
              title="Rooted in Mtandire Township, Built for Youth Agency."
            />
            <div className="space-y-4 text-base text-[#272522]/85 leading-[1.75]">
              <p>
                Across Lilongwe’s high-density communities such as Mtandire Township, thousands of
                creative, capable young people face steep barriers to formal training, employment,
                and capital. Without constructive economic pathways, talent too often remains
                untapped.
              </p>
              <p>
                LCAC is conceived as an accessible neighbourhood creative institution—not an
                ordinary classroom, nor a short-term charity project, but a permanent skills and
                enterprise studio where young people can master traditional Malawian crafts,
                contemporary design, and digital media while building real livelihoods.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#272522]/12">
              <EditorialImage
                src="/src/assets/images/prog_wood_carving_1795640095936.jpg"
                alt="Illustrative scene of a Malawian woodcarver shaping hardwood furniture with hand tools"
                containerClassName="w-full h-full"
              />
            </div>
            <p className="mt-2.5 text-xs text-[#272522]/65">
              Illustrative Malawian craftsmanship · Connecting heritage skill mastery with contemporary livelihoods.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Challenges Addressed */}
      <section className="py-16 sm:py-20 bg-[#F7F2E8] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            kicker="02 · Community Context"
            title="Challenges LCAC Intends to Address"
            description="LCAC’s proposed model responds directly to interrelated social and economic vulnerabilities affecting youth in Mtandire Township and wider Lilongwe."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INSTITUTIONAL_IDENTITY.challengesAddressed.map((challenge, idx) => (
              <div
                key={challenge}
                className="p-5 rounded-lg bg-[#F2EBDD] border border-[#272522]/12 flex items-baseline gap-3.5"
              >
                <span className="font-serif text-lg font-semibold text-[#963F2D] tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-base font-medium text-[#272522]">
                  {challenge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3, 4 & 6. Vision, Mission & Overall Goal */}
      <section className="py-16 sm:py-20 bg-[#30483C] text-[#F2EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-7 rounded-lg bg-[#23362C]/80 border border-[#F2EBDD]/15 space-y-3">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#D6A15C]">
              03 · Vision
            </p>
            <h2 className="font-serif text-2xl font-semibold text-[#F2EBDD]">
              Our Long-Term Aspiration
            </h2>
            <p className="text-sm sm:text-base text-[#F2EBDD]/85 leading-relaxed">
              {INSTITUTIONAL_IDENTITY.vision}
            </p>
          </div>

          <div className="p-7 rounded-lg bg-[#23362C]/80 border border-[#F2EBDD]/15 space-y-3">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#D6A15C]">
              04 · Mission
            </p>
            <h2 className="font-serif text-2xl font-semibold text-[#F2EBDD]">
              How We Intend to Serve
            </h2>
            <p className="text-sm sm:text-base text-[#F2EBDD]/85 leading-relaxed">
              {INSTITUTIONAL_IDENTITY.mission}
            </p>
          </div>

          <div className="p-7 rounded-lg bg-[#23362C]/80 border border-[#F2EBDD]/15 space-y-3">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#D6A15C]">
              06 · Overall Goal
            </p>
            <h2 className="font-serif text-2xl font-semibold text-[#F2EBDD]">
              Institutional Purpose
            </h2>
            <p className="text-sm sm:text-base text-[#F2EBDD]/85 leading-relaxed">
              {INSTITUTIONAL_IDENTITY.overallGoal}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-16 sm:py-20 bg-[#F2EBDD] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            kicker="05 · Guiding Principles"
            title="Nine Core Institutional Values"
            description="Every studio, mentorship relationship, and community initiative proposed by LCAC is anchored in these nine values."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTITUTIONAL_IDENTITY.coreValues.map((value, idx) => (
              <div
                key={value.title}
                className="p-6 rounded-lg bg-[#F7F2E8] border border-[#272522]/12"
              >
                <p className="text-xs font-medium text-[#963F2D] tabular-nums mb-1.5">
                  {String(idx + 1).padStart(2, '0')}
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#272522]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-[#272522]/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Specific Objectives & 8. Target Beneficiaries */}
      <section className="py-16 sm:py-20 bg-[#F7F2E8] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              kicker="07 · Specific Objectives"
              title="Proposed Institutional Objectives"
            />
            <ol className="space-y-4">
              {INSTITUTIONAL_IDENTITY.specificObjectives.map((obj, idx) => (
                <li
                  key={obj}
                  className="p-5 rounded-lg bg-[#F2EBDD] border border-[#272522]/12 flex items-start gap-4"
                >
                  <span className="font-serif text-lg font-semibold text-[#963F2D] tabular-nums shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm sm:text-base text-[#272522]/85 leading-relaxed">
                    {obj}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              kicker="08 · Target Beneficiaries"
              title="Who LCAC Intends to Empower"
            />
            <div className="space-y-4">
              {INSTITUTIONAL_IDENTITY.targetBeneficiaries.map((item) => (
                <div
                  key={item.group}
                  className="p-5 rounded-lg bg-[#F2EBDD] border border-[#272522]/12"
                >
                  <h3 className="font-serif text-lg font-semibold text-[#272522]">
                    {item.group}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#272522]/80 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Proposed Organisational Governance Structure */}
      <section className="py-16 sm:py-20 bg-[#F2EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <SectionHeading
              kicker="09 · Proposed Governance Structure"
              title="Accountable Leadership Framework"
              description="As a proposed institution, LCAC has defined a clear governance architecture prior to recruitment. No individual trustees or staff members have been appointed at this stage."
            />
            <Button
              href="/partnerships"
              onNavigate={onNavigate}
              variant="outline"
              size="md"
            >
              Partner With Establishment
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTITUTIONAL_IDENTITY.proposedGovernance.map((role, idx) => (
              <div
                key={role.role}
                className="p-6 rounded-lg bg-[#F7F2E8] border border-[#272522]/12 flex flex-col"
              >
                <p className="text-xs font-medium text-[#30483C] mb-2">
                  Proposed Role {String(idx + 1).padStart(2, '0')}
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#272522]">
                  {role.role}
                </h3>
                <p className="mt-2.5 text-sm text-[#272522]/80 leading-relaxed">
                  {role.responsibility}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
