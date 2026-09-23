import { createFileRoute, Link } from "@tanstack/react-router";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/brand/Navbar";
import { portfolioProjects, type PortfolioProject } from "@/data/portfolio";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const project = portfolioProjects.find((p) => p.slug === params.slug);
    const title = project
      ? `${project.title.ar} | ${project.title.en} — Mohammad Alkhayouti`
      : "Project — Mohammad Alkhayouti";
    const description = project
      ? project.seo.description.ar
      : "Portfolio project — Mohammad Alkhayouti";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  return (
    <LanguageProvider>
      <ProjectDetailContent />
    </LanguageProvider>
  );
}

function ProjectDetailContent() {
  const { slug } = Route.useParams();
  const { lang, t } = useLanguage();

  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#C7DDE8] text-[#09263B]">
        <Navbar />
        <main className="editorial-shell pt-36 pb-20 text-center space-y-6">
          <h1 className="text-3xl font-extrabold text-[#09263B]">
            {lang === "ar" ? "العمل غير موجود" : "Project Not Found"}
          </h1>
          <p className="text-[#09263B]/80 text-base">
            {lang === "ar"
              ? "لم يتم العثور على صفحة العمل المطلوبة."
              : "The requested project page does not exist."}
          </p>
          <div className="pt-4">
            <Link
              to="/"
              hash="work"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#FFFFFF] bg-[#1677B7] hover:bg-[#1677B7]/90 rounded-[3px] transition-colors border border-[#1677B7]"
            >
              {t.selectedWork.backAction}
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // If the project has full structured article content (Writing projects)
  if (project.article) {
    return <ArticleProjectView project={project} />;
  }

  // If the project has structured case study content (Personal Website)
  if (project.caseStudy) {
    return <CaseStudyProjectView project={project} />;
  }

  // Fallback for structural placeholder projects (Website, Design, Digital Project)
  return <PlaceholderProjectView project={project} />;
}

/**
 * Dedicated Case Study View for production design & development projects
 */
function CaseStudyProjectView({ project }: { project: PortfolioProject }) {
  const { lang } = useLanguage();
  const caseStudy = project.caseStudy!;

  return (
    <div className="min-h-screen bg-[#C7DDE8] text-[#09263B] selection:bg-[#1677B7] selection:text-[#FFFFFF] transition-colors duration-200 overflow-x-hidden">
      <Navbar />

      <main className="editorial-shell pt-28 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 space-y-8 sm:space-y-10">
        {/* Navigation Breadcrumb / Back link */}
        <div className="pb-4 border-b border-[#2A526A]/40 flex items-center justify-between gap-4">
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#09263B] hover:text-[#1677B7] transition-colors min-h-[44px]"
          >
            <span className="rtl:rotate-180">←</span>
            <span>{lang === "ar" ? "العودة إلى الأعمال" : "Back to work"}</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-[2px] bg-[#102F49] text-[#D6E6EC] border border-[#2A526A]">
              {project.categoryLabel[lang]}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#09263B] leading-[1.25]">
            {project.title[lang]}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#09263B]/85 font-medium leading-relaxed">
            {caseStudy.intro[lang]}
          </p>
        </header>

        {/* Main Presentation Surface */}
        <div className="editorial-card bg-[#102F49] border border-[#2A526A] rounded-[3px] p-6 sm:p-10 md:p-12 space-y-12">
          {/* Visual Showcase (Live Website Screenshot Mockup) */}
          <div className="bg-[#0B2135] border border-[#2A526A] rounded-[2px] overflow-hidden">
            {/* Top Browser Bar */}
            <div className="px-4 py-2.5 bg-[#09263B] border-b border-[#2A526A] flex items-center justify-between gap-4 text-xs font-mono text-[#D6E6EC]/70">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2A526A]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#2A526A]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#2A526A]" />
              </div>
              <div className="truncate px-3 py-1 bg-[#102F49] rounded-[2px] border border-[#2A526A] text-[#1677B7] font-semibold">
                https://mohammad-alkhayouti.netlify.app/
              </div>
              <div className="hidden sm:block text-[11px] text-[#D6E6EC]/50 uppercase tracking-widest">
                {lang === "ar" ? "معاينة حية" : "Live Preview"}
              </div>
            </div>

            {/* Screenshot image */}
            {project.coverImage && (
              <div className="relative w-full h-56 sm:h-80 md:h-96 overflow-hidden bg-[#0B2135]">
                <img
                  src={project.coverImage.src}
                  alt={project.coverImage.alt[lang]}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>

          {/* Section 1: Project Concept */}
          <section className="space-y-4 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#D6E6EC] border-b border-[#2A526A] pb-3">
              {caseStudy.sections.concept.heading[lang]}
            </h2>
            <p className="text-base sm:text-lg text-[#D6E6EC]/90 leading-[1.85] font-normal">
              {caseStudy.sections.concept.text[lang]}
            </p>
          </section>

          {/* Section 2: My Role */}
          <section className="space-y-4 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#D6E6EC] border-b border-[#2A526A] pb-3">
              {caseStudy.sections.role.heading[lang]}
            </h2>
            <p className="text-base sm:text-lg text-[#D6E6EC]/90 leading-[1.85] font-normal">
              {caseStudy.sections.role.text[lang]}
            </p>
          </section>

          {/* Section 3: What Was Implemented */}
          <section className="space-y-4 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#D6E6EC] border-b border-[#2A526A] pb-3">
              {caseStudy.sections.deliverables.heading[lang]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {caseStudy.sections.deliverables.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#0B2135] border border-[#2A526A] p-4 rounded-[2px] flex items-start gap-3 hover:border-[#1677B7]/60 transition-colors"
                >
                  <span className="w-2 h-2 rounded-[1px] bg-[#1677B7] mt-2 shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-[#D6E6EC] leading-relaxed">
                    {item[lang]}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Action CTAs */}
          <footer className="pt-8 border-t border-[#2A526A] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/"
              hash="work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#D6E6EC] bg-transparent border border-[#2A526A] hover:border-[#1677B7] hover:text-[#FFFFFF] rounded-[3px] transition-colors w-full sm:w-auto min-h-[48px]"
            >
              <span>{lang === "ar" ? "العودة إلى الأعمال →" : "Back to work →"}</span>
            </Link>

            <a
              href="https://wa.me/963981434844"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                lang === "ar" ? "اطلب الخدمة عبر WhatsApp" : "Request a service via WhatsApp"
              }
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-[#FFFFFF] bg-[#1677B7] hover:bg-[#1677B7]/90 rounded-[3px] transition-colors border border-[#1677B7] shadow-sm w-full sm:w-auto min-h-[48px]"
            >
              <span>{lang === "ar" ? "اطلب الخدمة →" : "Request a service →"}</span>
            </a>
          </footer>
        </div>
      </main>
    </div>
  );
}

/**
 * Dedicated, pure-white reading canvas for writing portfolio pieces
 * Engineered with:
 * - Pure white #ffffff background
 * - Cairo typography with 400/500/600/700 weights
 * - Dark gray body text #374151
 * - Navy headings #102F49
 * - Comfortable reading line-height (1.85 - 1.9)
 * - Optimal line length (max-w-[740px])
 * - Responsive padding and zero horizontal scroll on mobile (320px - 430px)
 */
function ArticleProjectView({ project }: { project: PortfolioProject }) {
  const { lang, t } = useLanguage();
  const article = project.article!;

  return (
    <div className="min-h-screen bg-[#C7DDE8] text-[#09263B] selection:bg-[#1677B7] selection:text-[#FFFFFF] transition-colors duration-200 overflow-x-hidden">
      <Navbar />

      <main className="editorial-shell pt-28 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 space-y-6 sm:space-y-8">
        {/* Navigation Breadcrumb / Top Bar */}
        <div className="max-w-[760px] mx-auto pb-3 border-b border-[#2A526A]/30 flex items-center justify-between gap-4">
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#09263B] hover:text-[#1677B7] transition-colors min-h-[44px]"
          >
            <span className="rtl:rotate-180">←</span>
            <span>{t.selectedWork.backAction}</span>
          </Link>

          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-[2px] bg-[#102F49] text-[#D6E6EC] border border-[#2A526A]">
            {project.categoryLabel[lang]}
          </span>
        </div>

        {/* Pure White Article Reading Canvas */}
        <article
          className="bg-[#ffffff] text-[#374151] border border-[#2A526A]/20 shadow-[0_4px_24px_rgba(9,38,59,0.06)] rounded-[4px] sm:rounded-[6px] px-5 py-8 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16 max-w-[760px] mx-auto space-y-10 sm:space-y-12 transition-all duration-200 break-words"
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          {/* Article Header */}
          <header className="space-y-5 sm:space-y-6 pb-8 sm:pb-10 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-[1px] bg-[#1677B7]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#1677B7]">
                {project.categoryLabel[lang]}
              </span>
            </div>

            <h1 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-extrabold tracking-tight text-[#102F49] leading-[1.3] sm:leading-[1.32] [text-wrap:balance]">
              {project.title[lang]}
            </h1>

            {/* Introductory lead paragraphs */}
            <div className="space-y-4 pt-2 text-[#374151] text-[16px] sm:text-[18px] md:text-[19px] leading-[1.85] sm:leading-[1.9] font-normal">
              {article.intro[lang].map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Optional Cover Image */}
            {project.coverImage && (
              <div className="pt-2">
                <div className="w-full rounded-[3px] overflow-hidden border border-gray-200 bg-gray-50">
                  <img
                    src={project.coverImage.src}
                    alt={project.coverImage.alt[lang]}
                    className="w-full h-auto max-h-[420px] object-cover object-center"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}
          </header>

          {/* Article Core Content Sections */}
          <div className="space-y-10 sm:space-y-12 text-[#374151]">
            {article.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <div className="pb-2.5 border-b border-gray-200">
                  {section.heading && (
                    <h2 className="text-[20px] sm:text-[23px] md:text-[26px] font-bold text-[#102F49] tracking-tight leading-[1.35]">
                      {section.heading[lang]}
                    </h2>
                  )}
                </div>

                <div className="space-y-5 pt-1">
                  {section.paragraphs[lang].map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-[16px] sm:text-[18px] md:text-[19px] leading-[1.85] sm:leading-[1.9] text-[#374151]"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            {/* Callout Question Section */}
            {article.callout && (
              <aside className="bg-[#F0F7FA] border-s-4 border-[#1677B7] p-5 sm:p-7 rounded-[3px] space-y-3 shadow-xs">
                <h3 className="text-[18px] sm:text-[21px] font-bold text-[#102F49] leading-[1.4]">
                  {article.callout.heading[lang]}
                </h3>
                <div className="space-y-3 text-[16px] sm:text-[18px] leading-[1.85] sm:leading-[1.9] text-[#374151]">
                  {article.callout.paragraphs[lang].map((para, cIdx) => (
                    <p key={cIdx}>{para}</p>
                  ))}
                </div>
              </aside>
            )}

            {/* Conclusion Section */}
            {article.conclusion && (
              <section className="space-y-4 pt-6 border-t border-gray-200">
                <h2 className="text-[20px] sm:text-[23px] md:text-[26px] font-bold text-[#102F49] tracking-tight leading-[1.35]">
                  {article.conclusion.heading[lang]}
                </h2>
                <div className="space-y-5 pt-1">
                  {article.conclusion.paragraphs[lang].map((para, kIdx) => (
                    <p
                      key={kIdx}
                      className="text-[16px] sm:text-[18px] md:text-[19px] leading-[1.85] sm:leading-[1.9] text-[#374151]"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Footer Actions inside the Article Container */}
          <footer className="pt-8 sm:pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/"
              hash="work"
              className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-[#102F49] bg-gray-100 hover:bg-gray-200 rounded-[3px] transition-colors border border-gray-300 w-full sm:w-auto min-h-[44px]"
            >
              <span className="rtl:rotate-180 ltr:rotate-0 inline-block me-2">←</span>
              <span>{t.selectedWork.backAction}</span>
            </Link>

            {project.slug === "content-marketing" ? (
              <a
                href="https://wa.me/963981434844"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  lang === "ar" ? "اطلب الخدمة عبر WhatsApp" : "Request a service via WhatsApp"
                }
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-[#FFFFFF] bg-[#1677B7] hover:bg-[#1677B7]/90 rounded-[3px] transition-colors border border-[#1677B7] w-full sm:w-auto min-h-[44px]"
              >
                {lang === "ar" ? "اطلب الخدمة →" : "Request a service →"}
              </a>
            ) : (
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-[#FFFFFF] bg-[#1677B7] hover:bg-[#1677B7]/90 rounded-[3px] transition-colors border border-[#1677B7] w-full sm:w-auto min-h-[44px]"
              >
                {t.nav.talkCta}
              </a>
            )}
          </footer>
        </article>
      </main>
    </div>
  );
}

/**
 * Structural presentation view for projects that are still placeholders
 */
function PlaceholderProjectView({ project }: { project: PortfolioProject }) {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#C7DDE8] text-[#09263B] selection:bg-[#1677B7] selection:text-[#FFFFFF] transition-colors duration-200 overflow-x-hidden">
      <Navbar />

      <main className="editorial-shell pt-32 pb-24 md:pt-40 md:pb-32 space-y-10">
        {/* Navigation Breadcrumb / Back link */}
        <div className="pb-4 border-b border-[#2A526A]">
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#09263B] hover:text-[#1677B7] transition-colors min-h-[44px]"
          >
            <span className="rtl:rotate-180">←</span>
            <span>{t.selectedWork.backAction}</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-[2px] bg-[#102F49] text-[#D6E6EC] border border-[#2A526A]">
              {project.categoryLabel[lang]}
            </span>
            <span className="text-xs font-mono tracking-wider text-[#09263B]/70 uppercase">
              [ {t.selectedWork.placeholderNotice} ]
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#09263B] leading-tight">
            {project.title[lang]}
          </h1>

          <p className="text-lg sm:text-xl text-[#09263B]/85 font-medium leading-relaxed">
            {project.shortDescription[lang]}
          </p>
        </header>

        {/* Main Presentation Surface (Navy Card matching website language) */}
        <div className="editorial-card bg-[#102F49] border border-[#2A526A] rounded-[3px] p-6 sm:p-10 md:p-12 space-y-10">
          {/* Visual / Blueprint Banner */}
          <div className="relative h-60 sm:h-80 w-full bg-[#0B2135] border border-[#2A526A] rounded-[2px] p-6 overflow-hidden flex flex-col justify-between">
            <svg
              className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern id="detail-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#1677B7" strokeWidth="0.75" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#detail-grid)" />
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="#1677B7"
                strokeWidth="0.5"
                strokeDasharray="6 6"
              />
              <line
                x1="100%"
                y1="0"
                x2="0"
                y2="100%"
                stroke="#1677B7"
                strokeWidth="0.5"
                strokeDasharray="6 6"
              />
            </svg>

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs font-mono font-bold tracking-widest text-[#1677B7] uppercase bg-[#102F49] px-3 py-1 rounded-[2px] border border-[#2A526A]">
                {project.coverPlaceholder.badge[lang]}
              </span>
              <span className="text-xs font-mono text-[#D6E6EC]/60 uppercase">
                Slug: {project.slug}
              </span>
            </div>

            <div className="relative z-10 text-center sm:text-start max-w-xl">
              <p className="text-sm sm:text-base font-mono text-[#D6E6EC]/90">
                {lang === "ar"
                  ? "مساحة بصرية مجهزة لاستقبال صور الغلاف، واجهات العمل، أو نماذج المستندات عند التحديث."
                  : "Visual container reserved for project screenshots, document specimens, or cover assets."}
              </p>
            </div>
          </div>

          {/* Heading Structure & Project Blueprint */}
          <div className="space-y-8 pt-4 border-t border-[#2A526A]">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#D6E6EC]">
                {lang === "ar" ? "نظرة عامة على نموذج العمل" : "Project Overview"}
              </h2>
              <p className="text-base text-[#D6E6EC]/85 leading-relaxed">
                {project.fullContent?.[lang] || project.shortDescription[lang]}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#D6E6EC]">
                {lang === "ar" ? "الهيكلية والمخرجات المجهزة" : "Scope & Architecture"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#0B2135] border border-[#2A526A] p-4 rounded-[2px] space-y-1">
                  <span className="text-xs font-bold text-[#1677B7] uppercase tracking-wider block">
                    {lang === "ar" ? "التصنيف" : "Discipline"}
                  </span>
                  <span className="text-sm font-semibold text-[#D6E6EC]">
                    {project.categoryLabel[lang]}
                  </span>
                </div>
                <div className="bg-[#0B2135] border border-[#2A526A] p-4 rounded-[2px] space-y-1">
                  <span className="text-xs font-bold text-[#1677B7] uppercase tracking-wider block">
                    {lang === "ar" ? "الحالة" : "Status"}
                  </span>
                  <span className="text-sm font-semibold text-[#D6E6EC]">
                    {t.selectedWork.placeholderNotice}
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Action */}
          <div className="pt-8 border-t border-[#2A526A] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/"
              hash="work"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#D6E6EC] bg-transparent border border-[#2A526A] hover:border-[#1677B7] hover:text-[#FFFFFF] rounded-[3px] transition-colors"
            >
              {t.selectedWork.backAction}
            </Link>

            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#FFFFFF] bg-[#1677B7] hover:bg-[#1677B7]/90 rounded-[3px] transition-colors border border-[#1677B7]"
            >
              {t.nav.talkCta}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
