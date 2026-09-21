import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#C7DDE8] border-b border-[#2A526A]">
      <div className="editorial-shell">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          {/* Top Identifier */}
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#1677B7]" />
            <span className="text-sm sm:text-base font-bold tracking-tight text-[#1677B7]">
              {t.nav.name}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#09263B] leading-[1.18] whitespace-pre-line">
            {t.hero.headline}
          </h1>

          {/* Support Text */}
          {t.hero.support && (
            <p className="text-lg sm:text-xl text-[#09263B]/85 leading-relaxed max-w-2xl font-normal">
              {t.hero.support}
            </p>
          )}

          {/* Availability Badge */}
          {t.hero.availability && (
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[3px] bg-[#102F49] border border-[#2A526A] text-xs sm:text-sm font-medium text-[#EAF2F4]">
              <span className="w-2 h-2 rounded-[1px] bg-[#1677B7]" />
              <span>{t.hero.availability}</span>
            </div>
          )}

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
