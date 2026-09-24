import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-[#C7DDE8]">
      <div className="editorial-shell space-y-8">
        {/* Section Title */}
        <div className="space-y-3 pb-6 border-b border-[#2A526A]">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#09263B]">
            {t.about.title}
          </h2>
        </div>

        {/* Bio paragraph: Calm, elegant, no card, no background box */}
        <div className="max-w-3xl">
          <p className="about-bio text-lg sm:text-xl md:text-[21px] text-[#09263B] leading-relaxed md:leading-loose font-normal text-start">
            {t.about.text}
          </p>
        </div>
      </div>
    </section>
  );
}
