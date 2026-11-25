import { ArrowRight } from 'lucide-react';
import type { Programme } from '../types/lcac';
import { buildProgrammePath } from '../utils/router';
import { EditorialImage } from './EditorialImage';

interface ProgrammeCardProps {
  programme: Programme;
  onNavigate: (path: string) => void;
}

export function ProgrammeCard({ programme, onNavigate }: ProgrammeCardProps) {
  const detailPath = buildProgrammePath(programme.slug);

  return (
    <article className="group flex flex-col bg-[#F7F2E8] border border-[#272522]/12 rounded-lg overflow-hidden transition-colors duration-150 hover:border-[#963F2D]/40">
      <a
        href={detailPath}
        onClick={(e) => {
          if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
            e.preventDefault();
            onNavigate(detailPath);
          }
        }}
        className="block aspect-[4/3] overflow-hidden bg-[#E7DEC9]"
      >
        <EditorialImage
          src={programme.image}
          alt={programme.imageAlt}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </a>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 text-xs text-[#272522]/65 mb-2.5">
          <span className="font-medium text-[#963F2D] tabular-nums">
            {programme.numberLabel}
          </span>
          <span aria-hidden="true">·</span>
          <span>{programme.categoryGroup}</span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#272522] leading-snug">
          <a
            href={detailPath}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate(detailPath);
              }
            }}
            className="hover:text-[#963F2D] transition-colors"
          >
            {programme.title}
          </a>
        </h3>

        <p className="mt-2.5 text-sm text-[#272522]/80 leading-relaxed flex-1">
          {programme.shortDescription}
        </p>

        <p className="mt-4 pt-3.5 border-t border-[#272522]/10 text-xs text-[#272522]/70 leading-relaxed">
          <span className="font-medium text-[#272522]">Skills taught: </span>
          {programme.skillsTaught.join(' · ')}
        </p>

        <div className="mt-4">
          <a
            href={detailPath}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                onNavigate(detailPath);
              }
            }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#963F2D] hover:text-[#7A3223] transition-colors whitespace-nowrap"
          >
            <span>Explore discipline</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
