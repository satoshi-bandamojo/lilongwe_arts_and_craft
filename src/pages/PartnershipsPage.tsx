import { ArrowRight } from 'lucide-react';
import { PROSPECTIVE_PARTNER_GROUPS } from '../data/partnerships';
import { Button } from '../components/Button';
import { HeroSection } from '../components/HeroSection';
import { PartnershipSection } from '../components/PartnershipSection';
import { SectionHeading } from '../components/SectionHeading';

interface PartnershipsPageProps {
  onNavigate: (path: string) => void;
}

export function PartnershipsPage({ onNavigate }: PartnershipsPageProps) {
  return (
    <div>
      <HeroSection
        kicker="Collaborate With LCAC"
        title="Together, We Can Create More Opportunities."
        description="Building a community arts and creative skills centre in Mtandire Township calls for enduring partnerships across vocational education, cultural heritage, youth inclusion, funding, and commercial markets."
        note="Prospective Partners Notice: Organisations listed below are identified in LCAC’s institutional concept as potential partners for future collaboration. No formal partnership agreements are implied."
      />

      {/* Why Partner With LCAC */}
      <section className="py-14 sm:py-18 bg-[#F2EBDD] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              kicker="Why Partner With LCAC"
              title="Shared Impact in Malawi’s Creative Economy"
            />
          </div>
          <div className="lg:col-span-7 space-y-4 text-base text-[#272522]/85 leading-[1.75]">
            <p>
              Youth in Mtandire Township possess immense creative energy, yet lack accessible
              studios, structured training, business mentorship, and pathways to fair markets.
              By pooling resources—whether technical expertise, equipment, curriculum standards,
              bursaries, or procurement demand—partners can help build a self-sustaining creative
              institution rather than a one-off project.
            </p>
            <p>
              Collaborating with LCAC advances youth employment, gender inclusion, cultural
              preservation, and sustainable local enterprise across Lilongwe.
            </p>
          </div>
        </div>
      </section>

      {/* Six Collaboration Areas */}
      <section className="py-16 sm:py-20 bg-[#F7F2E8] border-b border-[#272522]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PartnershipSection onNavigate={onNavigate} />
        </div>
      </section>

      {/* Prospective Partners Directory */}
      <section className="py-16 sm:py-20 bg-[#30483C] text-[#F2EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            kicker="Stakeholder Landscape"
            title="Prospective Partner Categories"
            description="The LCAC concept document identifies the following institutional ecosystems as potential collaborators—strictly prospective and subject to formal engagement."
            tone="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROSPECTIVE_PARTNER_GROUPS.map((group) => (
              <div
                key={group.groupTitle}
                className="p-6 sm:p-7 rounded-lg bg-[#23362C]/80 border border-[#F2EBDD]/15 flex flex-col"
              >
                <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#D6A15C] mb-2">
                  Prospective Collaborators
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#F2EBDD]">
                  {group.groupTitle}
                </h3>
                <p className="mt-2 text-sm text-[#F2EBDD]/75 leading-relaxed">
                  {group.description}
                </p>
                <ul className="mt-4 pt-4 border-t border-[#F2EBDD]/15 space-y-2 text-sm text-[#F2EBDD]/90">
                  {group.entities.map((entity) => (
                    <li key={entity}>• {entity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Enquiry CTA */}
      <section className="py-16 sm:py-20 bg-[#F2EBDD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#963F2D]">
            Start a Conversation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#272522]">
            Explore Establishing LCAC Together
          </h2>
          <p className="text-base text-[#272522]/80 max-w-2xl mx-auto leading-relaxed">
            If your institution, studio, or development programme wishes to explore collaboration
            with LCAC, please share a partnership enquiry through our contact page.
          </p>
          <div className="pt-2">
            <Button href="/contact" onNavigate={onNavigate} variant="primary" size="lg">
              Submit a Partnership Enquiry
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
