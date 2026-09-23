import { useLanguage } from "@/context/LanguageContext";

export function WritingStatementSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-[#C7DDE8] border-y border-[#2A526A]">
      <div className="editorial-shell">
        <div className="bg-[#102F49] border border-[#2A526A] rounded-[3px] p-8 sm:p-14 lg:p-16 text-center space-y-10">
          {/* Tags in dark badges with subtle cobalt borders */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {t.writing.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-[2px] bg-[#102F49] border border-[#2A526A] text-xs sm:text-sm font-medium text-[#D6E6EC]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Statement */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#D6E6EC] tracking-tight max-w-3xl mx-auto leading-snug">
            "{t.writing.statement}"
          </p>

          <div className="pt-2 flex justify-center">
            <span className="w-12 h-[2px] bg-[#1677B7]" />
          </div>
        </div>
      </div>
    </section>
  );
}
