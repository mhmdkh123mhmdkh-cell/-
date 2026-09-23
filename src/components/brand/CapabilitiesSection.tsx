import { useLanguage } from "@/context/LanguageContext";

export function CapabilitiesSection() {
  const { t } = useLanguage();

  const renderCard = (item: (typeof t.capabilities.items)[0]) => {
    return (
      <div
        key={item.number}
        className="editorial-card bg-[#102F49] border border-[#2A526A] p-8 sm:p-9 flex flex-col justify-start group hover:border-[#1677B7] h-full"
      >
        {/* Top header: Number in #1677B7 and small label if present */}
        <div className="flex items-center justify-between pb-4 border-b border-[#2A526A]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#1677B7]">{item.number}</span>
            {item.smallLabel && (
              <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-[2px] bg-[#1677B7]/20 text-[#1677B7] border border-[#1677B7]/40">
                {item.smallLabel}
              </span>
            )}
          </div>
          <span className="w-1.5 h-1.5 rounded-[1px] bg-[#2A526A] group-hover:bg-[#1677B7] transition-colors" />
        </div>

        {/* Card Content: Title and Description with balanced spacing */}
        <div className="pt-5 space-y-3">
          {/* Title in #D6E6EC */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#D6E6EC] leading-snug">
            {item.title}
          </h3>

          {/* Description in #D6E6EC */}
          <p className="text-sm sm:text-base text-[#D6E6EC] leading-relaxed font-normal">
            {item.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="capabilities" className="py-20 md:py-28 bg-[#C7DDE8]">
      <div className="editorial-shell space-y-12">
        {/* Section Header */}
        <div className="space-y-3 pb-6 border-b border-[#2A526A]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#09263B]">
              01 Overview
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#09263B]">
            {t.capabilities.title}
          </h2>
        </div>

        {/* Capabilities Grid: 3 columns x 2 rows on desktop (md+ / lg+), single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.capabilities.items.map(renderCard)}
        </div>
      </div>
    </section>
  );
}
