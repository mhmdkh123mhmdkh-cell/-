import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioProjects, type PortfolioProject } from "@/data/portfolio";

export function SelectedWorkSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="work" className="py-20 md:py-28 bg-[#C7DDE8] border-b border-[#2A526A]">
      <div className="editorial-shell space-y-12">
        {/* Section Header */}
        <div className="space-y-3 pb-6 border-b border-[#2A526A]">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#09263B]">
            {t.selectedWork.title}
          </h2>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioProjects.map((project: PortfolioProject) => (
            <article
              key={project.id}
              className="editorial-card bg-[#102F49] border border-[#2A526A] p-6 sm:p-8 rounded-[3px] flex flex-col justify-between h-full transition-colors cursor-default select-text"
            >
              <div className="space-y-5">
                {/* Visual / Cover Container (Non-clickable, plain display) */}
                <div className="relative h-44 sm:h-48 w-full bg-[#0B2135] border border-[#2A526A] rounded-[2px] overflow-hidden select-none cursor-default">
                  {project.coverImage ? (
                    <>
                      <img
                        src={project.coverImage.src}
                        alt={project.coverImage.alt[lang]}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      {project.currentSiteBadge && (
                        <div className="absolute top-3 end-3 z-10 pointer-events-none">
                          <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-[2px] bg-[#102F49]/90 text-[#D6E6EC] border border-[#2A526A] shadow-xs backdrop-blur-xs">
                            {project.currentSiteBadge[lang]}
                          </span>
                        </div>
                      )}
                    </>
                  ) : (
                    /* Blueprint Grid Lines SVG for structural placeholders */
                    <div className="relative w-full h-full p-4 flex flex-col justify-between">
                      <svg
                        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                      >
                        <defs>
                          <pattern
                            id={`grid-${project.id}`}
                            width="24"
                            height="24"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M 24 0 L 0 0 0 24"
                              fill="none"
                              stroke="#1677B7"
                              strokeWidth="0.75"
                            />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
                        <line
                          x1="0"
                          y1="0"
                          x2="100%"
                          y2="100%"
                          stroke="#1677B7"
                          strokeWidth="0.5"
                          strokeDasharray="4 4"
                        />
                      </svg>

                      {/* Top Bar inside cover: Category & Structural badge */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-[2px] bg-[#1677B7]/25 text-[#1677B7] border border-[#1677B7]/40">
                          {project.categoryLabel[lang]}
                        </span>
                        <span className="text-[10px] font-mono tracking-widest text-[#D6E6EC]/60 uppercase">
                          {project.isPlaceholder
                            ? t.selectedWork.placeholderNotice
                            : lang === "ar"
                              ? "مقال"
                              : "Article"}
                        </span>
                      </div>

                      {/* Center/Bottom identifier */}
                      <div className="relative z-10 flex items-center justify-between pt-8">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#1677B7] bg-[#102F49]/90 px-2 py-1 rounded-[2px] border border-[#2A526A]">
                          [ {project.coverPlaceholder.badge[lang]} ]
                        </span>
                        <span className="w-2 h-2 rounded-[1px] bg-[#2A526A]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Clickable Content Link (Category, Title, Short Description) */}
                <Link
                  to="/work/$slug"
                  params={{ slug: project.slug }}
                  aria-label={
                    lang === "ar" ? `عرض ${project.title.ar}` : `View ${project.title.en}`
                  }
                  className="block space-y-2.5 pt-1 text-start cursor-pointer group/link rounded-[2px] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1677B7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#102F49] transition-colors"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1677B7] block group-hover/link:text-[#FFFFFF] transition-colors">
                    {project.categoryLabel[lang]}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#D6E6EC] leading-snug group-hover/link:text-[#FFFFFF] transition-colors">
                    {project.title[lang]}
                  </h3>
                  <p className="text-sm sm:text-base text-[#D6E6EC]/80 leading-relaxed font-normal group-hover/link:text-[#D6E6EC]/95 transition-colors">
                    {project.shortDescription[lang]}
                  </p>
                </Link>
              </div>

              {/* Action Link (View work →) */}
              <div className="pt-5 mt-6 border-t border-[#2A526A]">
                <Link
                  to="/work/$slug"
                  params={{ slug: project.slug }}
                  className="flex items-center justify-between text-sm font-semibold text-[#D6E6EC] hover:text-[#FFFFFF] group/btn transition-colors cursor-pointer rounded-[2px] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1677B7]"
                >
                  <span>{t.selectedWork.viewWorkAction}</span>
                  <span className="text-[#1677B7] group-hover/btn:text-[#FFFFFF] transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1">
                    {lang === "ar" ? "←" : "→"}
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
