import { useLanguage } from "@/context/LanguageContext";

export function ExperiencesSection() {
  const { t } = useLanguage();

  return (
    <section id="experiences" className="py-20 md:py-28 bg-[#C7DDE8]">
      <div className="editorial-shell space-y-12">
        {/* Section Title */}
        <div className="space-y-3 pb-6 border-b border-[#2A526A]">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#09263B]">
            {t.experiences.title}
          </h2>
        </div>

        {/* Experience Cards: Equal height, informative editorial cards without bottom text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.experiences.items.map((item) => (
            <div
              key={item.title}
              className="editorial-card bg-[#102F49] border border-[#2A526A] p-8 sm:p-9 flex flex-col justify-start group hover:border-[#1677B7] h-full"
            >
              {/* Title & Description with balanced vertical spacing */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#D6E6EC] leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#D6E6EC] leading-relaxed font-normal">
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
