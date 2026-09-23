import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-[#C7DDE8]">
      <div className="editorial-shell">
        <div className="bg-[#102F49] border border-[#2A526A] rounded-[3px] p-8 sm:p-14 lg:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Distinctive Monogram Mark in dark ink #102F49 with cobalt border accent */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[3px] bg-[#102F49] text-[#D6E6EC] border-2 border-[#1677B7] flex items-center justify-center text-4xl sm:text-5xl font-extrabold shrink-0 shadow-xs">
            {t.about.mark}
          </div>

          {/* Simple Human Statement */}
          <div className="space-y-3 text-center md:text-start flex-1">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-4 h-[2px] bg-[#1677B7]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6E6EC]">
                Introduction
              </span>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#D6E6EC] tracking-tight leading-snug">
              {t.about.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
