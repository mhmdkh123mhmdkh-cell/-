import { useLanguage } from "@/context/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#C7DDE8]">
      <div className="editorial-shell space-y-16">
        {/* Contact Heading */}
        <div className="max-w-2xl space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#09263B]">
            {t.contact.title}
          </h2>

          <p className="text-lg sm:text-xl text-[#09263B]/85 font-normal">{t.contact.subtitle}</p>

          <div className="pt-2">
            <a
              href={t.contact.whatsapp.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1677B7] hover:bg-[#1677B7]/90 text-[#FFFFFF] rounded-[3px] text-base font-bold transition-all duration-200 border border-[#1677B7]"
            >
              <span>{t.contact.mainAction}</span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-5 h-5 rtl:rotate-180"
                fill="none"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Links Grid: Square or semi-square cards with 2-4px radius, #102F49 bg, #2A526A border */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* WhatsApp */}
          <a
            href={t.contact.whatsapp.url}
            target="_blank"
            rel="noreferrer"
            className="editorial-card bg-[#102F49] border border-[#2A526A] p-7 flex flex-col justify-between group hover:border-[#1677B7]"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-[#1677B7]">
                  WhatsApp
                </span>
                <span className="w-2 h-2 rounded-[1px] bg-[#D6E6EC]" />
              </div>
              <p className="text-xl font-bold text-[#D6E6EC] font-mono" dir="ltr">
                {t.contact.whatsapp.number}
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#2A526A] flex items-center justify-between text-sm font-semibold text-[#D6E6EC] group-hover:text-[#D6E6EC]">
              <span>{t.contact.whatsapp.label}</span>
              <span className="rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 text-[#1677B7] group-hover:text-[#D6E6EC]">
                →
              </span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={t.contact.linkedin.url}
            target="_blank"
            rel="noreferrer"
            className="editorial-card bg-[#102F49] border border-[#2A526A] p-7 flex flex-col justify-between group hover:border-[#1677B7]"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-[#1677B7]">
                  LinkedIn
                </span>
                <span className="w-2 h-2 rounded-[1px] bg-[#D6E6EC]" />
              </div>
              <p className="text-lg font-bold text-[#D6E6EC]">Mohammad Alkhayouti</p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#2A526A] flex items-center justify-between text-sm font-semibold text-[#D6E6EC] group-hover:text-[#D6E6EC]">
              <span>{t.contact.linkedin.label}</span>
              <span className="rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 text-[#1677B7] group-hover:text-[#D6E6EC]">
                →
              </span>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${t.contact.email.address}`}
            className="editorial-card bg-[#102F49] border border-[#2A526A] p-7 flex flex-col justify-between group hover:border-[#1677B7]"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-[#1677B7]">
                  Email
                </span>
                <span className="w-2 h-2 rounded-[1px] bg-[#D6E6EC]" />
              </div>
              <p className="text-base font-bold text-[#D6E6EC] break-all">
                {t.contact.email.address}
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#2A526A] flex items-center justify-between text-sm font-semibold text-[#D6E6EC] group-hover:text-[#D6E6EC]">
              <span>{t.contact.email.label}</span>
              <span className="rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 text-[#1677B7] group-hover:text-[#D6E6EC]">
                →
              </span>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-[#2A526A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#09263B]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-start">
            <strong className="text-[#09263B] text-sm font-bold">{t.contact.footer.name}</strong>
            <span className="hidden sm:inline">·</span>
            <span className="text-[#09263B]/80 font-medium">{t.contact.footer.availability}</span>
          </div>
          <div className="flex items-center gap-4 font-semibold text-[#09263B]">
            <a
              href="https://wa.me/963981434844"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1677B7] transition-colors"
            >
              WhatsApp
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/mohammad-alkhayouti-443205324"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1677B7] transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="mailto:mohammadalkhayouti@gmail.com"
              className="hover:text-[#1677B7] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
