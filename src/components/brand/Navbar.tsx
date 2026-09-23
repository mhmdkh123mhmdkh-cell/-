import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#capabilities", label: t.nav.capabilities },
    { href: "/#work", label: t.nav.selectedWork },
    { href: "/#experiences", label: t.nav.experiences },
    { href: "/#about", label: t.nav.about },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#102F49]/95 backdrop-blur-md border-b border-[#2A526A] py-3 shadow-[0_1px_0_0_#2A526A]"
          : "bg-[#102F49] border-b border-[#2A526A] py-4"
      }`}
    >
      <div className="editorial-shell flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="/"
          className="group flex items-center gap-2.5 text-decoration-none focus:outline-hidden"
        >
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#1677B7] group-hover:bg-[#FFFFFF] transition-colors" />
          <span className="font-bold text-lg tracking-tight text-[#FFFFFF] group-hover:text-[#1677B7] transition-colors">
            {t.nav.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#EAF2F4] hover:text-[#FFFFFF] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right action group: Language Switcher + CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Subtle, editorial language switcher inside dark bar */}
          <div
            className="flex items-center bg-[#102F49] border border-[#2A526A] rounded-[3px] p-0.5 text-xs font-semibold"
            role="group"
            aria-label="Language selection"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-[2px] transition-all duration-200 cursor-pointer ${
                lang === "en"
                  ? "bg-[#1677B7] text-[#FFFFFF]"
                  : "text-[#EAF2F4] hover:text-[#FFFFFF]"
              }`}
            >
              EN
            </button>
            <span className="text-[#2A526A] select-none px-0.5">|</span>
            <button
              type="button"
              onClick={() => setLang("ar")}
              className={`px-2.5 py-1 rounded-[2px] transition-all duration-200 cursor-pointer ${
                lang === "ar"
                  ? "bg-[#1677B7] text-[#FFFFFF] font-arabic"
                  : "text-[#EAF2F4] hover:text-[#FFFFFF] font-arabic"
              }`}
            >
              عربي
            </button>
          </div>

          {/* Desktop primary talk CTA */}
          <a
            href="/#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#FFFFFF] bg-[#1677B7] hover:bg-[#1677B7]/90 rounded-[3px] transition-colors border border-[#1677B7]"
          >
            {t.nav.talkCta}
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-[3px] text-[#FFFFFF] hover:bg-[#2A526A] transition-colors focus:outline-hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#102F49] border-b border-[#2A526A] px-6 py-5 shadow-md">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#EAF2F4] hover:text-[#FFFFFF] py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#2A526A]">
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center px-4 py-2.5 text-sm font-semibold text-[#FFFFFF] bg-[#1677B7] hover:bg-[#1677B7]/90 rounded-[3px] transition-colors"
              >
                {t.nav.talkCta}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
