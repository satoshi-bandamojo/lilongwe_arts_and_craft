interface HeroSectionProps {
  kicker: string;
  title: string;
  description: string;
  note?: string;
}

export function HeroSection({
  kicker,
  title,
  description,
  note,
}: HeroSectionProps) {
  return (
    <section className="border-b border-[#272522]/12 bg-[#F7F2E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-22">
        <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#963F2D] mb-4">
          {kicker}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] tracking-tight text-[#272522] max-w-4xl">
          {title}
        </h1>
        <p className="mt-5 text-base sm:text-lg text-[#272522]/80 leading-[1.7] max-w-2xl">
          {description}
        </p>
        {note && (
          <p className="mt-6 pt-5 border-t border-[#272522]/10 text-xs sm:text-sm text-[#30483C] max-w-2xl leading-relaxed">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
