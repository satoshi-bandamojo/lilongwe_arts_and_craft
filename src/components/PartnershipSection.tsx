import { COLLABORATION_AREAS } from '../data/partnerships';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';

interface PartnershipSectionProps {
  onNavigate: (path: string) => void;
  compact?: boolean;
}

export function PartnershipSection({
  onNavigate,
  compact = false,
}: PartnershipSectionProps) {
  return (
    <div className="space-y-10">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <SectionHeading
          kicker="Strategic Collaboration"
          title="Together, We Can Create More Opportunities."
          description="Establishing LCAC in Mtandire Township requires shared commitment across skills training, cultural preservation, mentorship, establishment funding, and market linkages. All named stakeholders are prospective partners invited to collaborate."
        />
        {compact && (
          <div className="shrink-0">
            <Button
              href="/partnerships"
              onNavigate={onNavigate}
              variant="outline"
              size="md"
            >
              Explore Partnerships
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COLLABORATION_AREAS.map((area, index) => (
          <div
            key={area.id}
            className="p-6 sm:p-7 rounded-lg bg-[#F7F2E8] border border-[#272522]/12 flex flex-col"
          >
            <p className="text-xs font-medium text-[#963F2D] tabular-nums mb-2">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="font-serif text-xl font-semibold text-[#272522]">
              {area.title}
            </h3>
            <p className="mt-2.5 text-sm text-[#272522]/80 leading-relaxed flex-1">
              {area.description}
            </p>
            {!compact && (
              <ul className="mt-4 pt-4 border-t border-[#272522]/10 space-y-1.5 text-xs text-[#272522]/75">
                {area.examples.map((example) => (
                  <li key={example} className="leading-relaxed">
                    • {example}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
