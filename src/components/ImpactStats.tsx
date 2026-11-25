import { PROPOSED_FIVE_YEAR_TARGETS } from '../data/site';

interface ImpactStatsProps {
  tone?: 'forest' | 'cream';
}

export function ImpactStats({ tone = 'forest' }: ImpactStatsProps) {
  const isForest = tone === 'forest';

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-current/15">
        <p
          className={`text-xs font-medium tracking-[0.14em] uppercase ${
            isForest ? 'text-[#D6A15C]' : 'text-[#963F2D]'
          }`}
        >
          Proposed Five-Year Institutional Targets
        </p>
        <p
          className={`text-xs ${
            isForest ? 'text-[#F2EBDD]/75' : 'text-[#272522]/70'
          }`}
        >
          Projected goals upon establishment — not measured historical results
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {PROPOSED_FIVE_YEAR_TARGETS.map((target) => (
          <div
            key={target.label}
            className={`p-6 sm:p-7 rounded-lg border ${
              isForest
                ? 'bg-[#23362C]/70 border-[#F2EBDD]/15 text-[#F2EBDD]'
                : 'bg-[#F7F2E8] border-[#272522]/12 text-[#272522]'
            }`}
          >
            <p
              className={`font-serif text-4xl sm:text-5xl font-semibold tabular-nums tracking-tight ${
                isForest ? 'text-[#D6A15C]' : 'text-[#963F2D]'
              }`}
            >
              {target.value}
            </p>
            <h3 className="mt-3 font-serif text-xl font-medium">
              {target.label}
            </h3>
            <p
              className={`mt-2 text-sm leading-relaxed ${
                isForest ? 'text-[#F2EBDD]/80' : 'text-[#272522]/75'
              }`}
            >
              {target.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
