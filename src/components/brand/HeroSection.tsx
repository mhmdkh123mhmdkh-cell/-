import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#C7DDE8] border-b border-[#2A526A]">
      <div className="editorial-shell">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          {/* Name & Tagline */}
          <div className="space-y-4 sm:space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#09263B] leading-tight">
              {t.hero.name}
            </h1>
            <div>
              <div className="inline-block bg-[#102F49] border border-[#2A526A] rounded-[3px] px-4 py-2.5 sm:px-5 sm:py-3">
                <p className="text-base sm:text-lg md:text-xl font-medium text-[#FFFFFF] leading-relaxed">
                  {t.hero.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {/* Primary action: #1677B7 bg with #FFFFFF text */}
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-semibold text-[#FFFFFF] bg-[#1677B7] hover:bg-[#1677B7]/90 rounded-[3px] transition-all duration-200 border border-[#1677B7]"
            >
              {t.hero.primaryCta}
            </a>

            {/* Secondary action: border #1677B7, text #09263B, transparent bg */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-semibold text-[#09263B] bg-transparent border border-[#1677B7] hover:bg-[#1677B7]/10 rounded-[3px] transition-all duration-200"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
