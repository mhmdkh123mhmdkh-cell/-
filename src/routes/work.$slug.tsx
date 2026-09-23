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

  // Fallback for structural placeholder projects (Website, Design, Digital Project)
  return <PlaceholderProjectView project={project} />;
}

/**
 * Dedicated, full-length presentation view for writing portfolio pieces
 */
function ArticleProjectView({ project }: { project: PortfolioProject }) {
  const { lang, t } = useLanguage();
  const article = project.article!;

  return (
    <div className="min-h-screen bg-[#C7DDE8] text-[#09263B] selection:bg-[#1677B7] selection:text-[#FFFFFF] transition-colors duration-200">
      <Navbar />

      <main className="editorial-shell pt-32 pb-24 md:pt-40 md:pb-32 space-y-10">
        {/* Navigation Breadcrumb / Back link */}
        <div className="pb-4 border-b border-[#2A526A]/40 flex items-center justify-between">
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#09263B] hover:text-[#1677B7] transition-colors"
          >
            <span className="rtl:rotate-180">←</span>
            <span>{t.selectedWork.backAction}</span>
          </Link>

          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-[2px] bg-[#102F49] text-[#D6E6EC] border border-[#2A526A]">
            {project.categoryLabel[lang]}
          </span>
        </div>

        {/* Article Container (Navy Card matching the website's design language) */}
        <article className="editorial-card bg-[#102F49] border border-[#2A526A] rounded-[3px] p-6 sm:p-10 md:p-14 lg:p-16 space-y-12 max-w-4xl mx-auto shadow-sm">
          {/* Article Header */}
          <header className="space-y-6 pb-8 border-b border-[#2A526A]">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="w-3 h-3 rounded-[1px] bg-[#1677B7]" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#1677B7]">
                {project.categoryLabel[lang]}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FFFFFF] leading-tight sm:leading-snug">
              {project.title[lang]}
            </h1>

            {/* Introductory lead paragraphs */}
            <div className="space-y-4 pt-2 text-[#D6E6EC] text-base sm:text-lg leading-relaxed sm:leading-loose">
              {article.intro[lang].map((para, idx) => (
                <p key={idx} className="font-normal">
                  {para}
                </p>
              ))}
            </div>
          </header>

          {/* Article Sections (The Core Points) */}
          <div className="space-y-12 text-[#D6E6EC]">
            {article.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <div className="flex items-baseline gap-3 pb-2 border-b border-[#2A526A]/60">
                  {section.number && (
                    <span className="text-sm sm:text-base font-mono font-bold text-[#1677B7] shrink-0">
                      {section.number}
                    </span>
                  )}
                  {section.heading && (
                    <h2 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] tracking-tight">
                      {section.heading[lang]}
                    </h2>
                  )}
                </div>

                <div className="space-y-4 pt-1">
                  {section.paragraphs[lang].map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-base sm:text-lg leading-relaxed sm:leading-loose text-[#D6E6EC]"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            {/* Callout Question Section */}
            {article.callout && (
              <aside className="bg-[#0B2135] border-l-4 rtl:border-l-0 rtl:border-r-4 border-[#1677B7] p-6 sm:p-8 rounded-[2px] space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF]">
                  {article.callout.heading[lang]}
                </h3>
                <div className="space-y-3 text-base sm:text-lg leading-relaxed sm:leading-loose text-[#D6E6EC]">
                  {article.callout.paragraphs[lang].map((para, cIdx) => (
                    <p key={cIdx}>{para}</p>
                  ))}
                </div>
              </aside>
            )}

            {/* Conclusion Section */}
            {article.conclusion && (
              <section className="space-y-4 pt-4 border-t border-[#2A526A]">
                <h2 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] tracking-tight">
                  {article.conclusion.heading[lang]}
                </h2>
                <div className="space-y-4">
                  {article.conclusion.paragraphs[lang].map((para, kIdx) => (
                    <p
                      key={kIdx}
                      className="text-base sm:text-lg leading-relaxed sm:leading-loose text-[#D6E6EC]"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Footer Actions */}
          <footer className="pt-8 border-t border-[#2A526A] flex flex-col sm:flex-row items-center justify-between gap-4">
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
    <div className="min-h-screen bg-[#C7DDE8] text-[#09263B] selection:bg-[#1677B7] selection:text-[#FFFFFF] transition-colors duration-200">
      <Navbar />

      <main className="editorial-shell pt-32 pb-24 md:pt-40 md:pb-32 space-y-10">
        {/* Navigation Breadcrumb / Back link */}
        <div className="pb-4 border-b border-[#2A526A]">
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#09263B] hover:text-[#1677B7] transition-colors"
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
