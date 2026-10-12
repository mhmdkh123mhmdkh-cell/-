import { createFileRoute, Link } from "@tanstack/react-router";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/brand/Navbar";
import { blogPosts, type BlogPost } from "@/data/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "المدونة | Blog — Mohammad Alkhayouti" },
      {
        name: "description",
        content:
          "مدونة محمد الخيوتي — مقالات وتجارب وأفكار في صناعة المحتوى، بناء المواقع المتجاوبة، والعمليات والنشر الرقمي.",
      },
      { property: "og:title", content: "المدونة | Blog — Mohammad Alkhayouti" },
      {
        property: "og:description",
        content:
          "مقالات وتجارب وأفكار في صناعة المحتوى، بناء المواقع المتجاوبة، والعمليات والنشر الرقمي.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <LanguageProvider>
      <BlogIndexContent />
    </LanguageProvider>
  );
}

function BlogIndexContent() {
  const { lang, t, isRtl } = useLanguage();

  return (
    <div className="min-h-screen bg-[#C7DDE8] text-[#09263B] selection:bg-[#1677B7] selection:text-[#FFFFFF] transition-colors duration-200">
      <Navbar />

      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="editorial-shell space-y-10">
          {/* Breadcrumb & Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm text-[#09263B]/70"
          >
            <Link to="/" className="hover:text-[#1677B7] transition-colors font-medium">
              {t.blog.backToHome}
            </Link>
            <span className="select-none opacity-40">/</span>
            <span className="text-[#09263B] font-semibold">{t.blog.title}</span>
          </nav>

          {/* Page Header */}
          <header className="space-y-4 pb-8 border-b border-[#2A526A]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#1677B7]" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#09263B]">
                {t.blog.title}
              </h1>
            </div>
            <p className="max-w-2xl text-base sm:text-lg text-[#09263B]/85 leading-relaxed font-normal">
              {t.blog.subtitle}
            </p>
          </header>

          {/* Articles Grid */}
          {blogPosts.length === 0 ? (
            <div className="editorial-card bg-[#102F49] border border-[#2A526A] p-12 text-center text-[#D6E6EC]">
              <p className="text-base sm:text-lg font-medium">{t.blog.emptyNotice}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} lang={lang} isRtl={isRtl} t={t} />
              ))}
            </div>
          )}

          {/* Bottom Prompt / Return Home */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2A526A]">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#09263B] hover:text-[#1677B7] transition-colors"
            >
              <span>{isRtl ? "→" : "←"}</span>
              <span>{t.blog.backToHome}</span>
            </Link>

            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-[#FFFFFF] bg-[#1677B7] hover:bg-[#1677B7]/90 rounded-[3px] transition-colors border border-[#1677B7]"
            >
              {t.nav.talkCta}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

function BlogCard({
  post,
  lang,
  isRtl,
  t,
}: {
  post: BlogPost;
  lang: "ar" | "en";
  isRtl: boolean;
  t: ReturnType<typeof useLanguage>["t"];
}) {
  const title = post.title[lang] || post.title.ar;
  const excerpt = post.excerpt[lang] || post.excerpt.ar;
  const date = post.date[lang] || post.date.ar;
  const readTime = post.readTime[lang] || post.readTime.ar;
  const author = post.author[lang] || post.author.ar;
  const tags = post.tags[lang] || post.tags.ar;

  return (
    <article className="editorial-card bg-[#102F49] border border-[#2A526A] rounded-[3px] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#1677B7] transition-all h-full">
      <div className="space-y-4">
        {/* Meta badges: Demo flag + Tags + Date */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            {post.isDemo && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] bg-[#1677B7]/25 text-[#EAF2F4] border border-[#1677B7]/60 font-semibold text-[11px]">
                {t.blog.demoBadge}
              </span>
            )}
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-0.5 rounded-[2px] bg-[#2A526A]/40 text-[#D6E6EC] border border-[#2A526A] text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[#D6E6EC]/70 text-[11px]">
            <time dateTime={post.isoDate}>{date}</time>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#FFFFFF] group-hover:text-[#1677B7] transition-colors leading-snug">
          <Link to="/blog/$slug" params={{ slug: post.slug }} className="focus:outline-hidden">
            {title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-sm sm:text-base text-[#D6E6EC]/90 leading-relaxed font-normal line-clamp-3">
          {excerpt}
        </p>
      </div>

      {/* Card Footer: Author + Read Link */}
      <div className="pt-6 mt-6 border-t border-[#2A526A]/70 flex items-center justify-between text-xs sm:text-sm">
        <span className="text-[#D6E6EC]/75 font-normal">
          {t.blog.by} <strong className="font-semibold text-[#FFFFFF]">{author}</strong>
        </span>

        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="inline-flex items-center gap-1.5 font-semibold text-[#FFFFFF] group-hover:text-[#1677B7] transition-colors"
        >
          <span>{lang === "ar" ? "اقرأ المقال" : "Read article"}</span>
          <span className="transition-transform group-hover:translate-x-0.5">
            {isRtl ? "←" : "→"}
          </span>
        </Link>
      </div>
    </article>
  );
}
