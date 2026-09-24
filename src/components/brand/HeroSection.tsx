import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#C7DDE8]">
      <div className="editorial-shell">
        <div className="max-w-[820px] mx-auto text-center space-y-7 md:space-y-9">
          {/* Name & Tagline */}
          <div className="space-y-5 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#09263B] leading-[1.18]">
              {t.hero.name}
            </h1>
            <div>
              <div className="inline-block bg-[#102F49] border border-[#2A526A] rounded-[3px] px-6 py-3.5 sm:px-8 sm:py-4 shadow-sm max-w-full">
                <p className="text-base sm:text-lg md:text-[20px] font-medium text-[#D6E6EC] leading-relaxed">
                  {t.hero.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full">
            {/* Primary action: #1677B7 bg with #FFFFFF text */}
            <a
              href="#capabilities"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-[#FFFFFF] bg-[#1677B7] hover:bg-[#1677B7]/90 active:scale-[0.99] rounded-[3px] transition-all duration-200 border border-[#1677B7] shadow-sm"
            >
              {t.hero.primaryCta}
            </a>

            {/* Secondary action: border #1677B7, text #09263B, transparent bg */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-[#09263B] bg-transparent border border-[#1677B7] hover:bg-[#1677B7]/10 active:scale-[0.99] rounded-[3px] transition-all duration-200"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
