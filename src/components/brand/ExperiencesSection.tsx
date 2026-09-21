import { useLanguage } from "@/context/LanguageContext";

export function ExperiencesSection() {
  const { t } = useLanguage();

  return (
    <section id="experiences" className="py-20 md:py-28 bg-[#C7DDE8]">
      <div className="editorial-shell space-y-12">
        {/* Section Title */}
        <div className="space-y-3 pb-6 border-b border-[#2A526A]">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#1677B7]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#09263B]">
              02 — Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#09263B]">
            {t.experiences.title}
          </h2>
        </div>

        {/* 3 Experience Cards: Equal height, informative editorial cards without bottom text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.experiences.items.map((item, index) => (
            <div
              key={item.title}
              className="editorial-card bg-[#102F49] border border-[#2A526A] p-8 sm:p-9 flex flex-col justify-start group hover:border-[#1677B7] h-full"
            >
              {/* Index header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2A526A]">
                <span className="text-xs font-mono font-bold tracking-widest text-[#1677B7]">
                  0{index + 1}
                </span>
                <span className="text-xs text-[#FFFFFF] font-semibold">Track Record</span>
              </div>

              {/* Title & Description with balanced vertical spacing */}
              <div className="pt-5 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#FFFFFF] leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#EAF2F4] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
