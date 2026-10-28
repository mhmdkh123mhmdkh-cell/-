import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/brand/Navbar";
import { getBlogPostBySlug, type BlogPost, type BlogContentBlock } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);
    const title = post
      ? post.seo.title.ar || `${post.title.ar} — محمد الخيوتي`
      : "المقال — محمد الخيوتي";
    const description = post
      ? post.seo.description.ar || post.excerpt.ar
      : "مدونة محمد الخيوتي — مقالات وتجارب رقمية";

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
  component: BlogPostPage,
});

function BlogPostPage() {
  return (
    <LanguageProvider>
      <BlogPostContent />
    </LanguageProvider>
  );
}

function BlogPostContent() {
  const { slug } = Route.useParams();
  const { lang, t, isRtl } = useLanguage();
  const [copied, setCopied] = useState(false);

  const post = getBlogPostBySlug(slug);

  useEffect(() => {
    if (typeof document !== "undefined" && post) {
      const pageTitle =
        post.seo.title[lang] || post.seo.title.ar || `${post.title[lang]} — Mohammad Alkhayouti`;
      const pageDesc = post.seo.description[lang] || post.seo.description.ar || post.excerpt[lang];

      document.title = pageTitle;

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", pageDesc);
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", pageTitle);
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute("content", pageDesc);
      }
    }
  }, [lang, post]);

  if (!post) {
    return (
      <div className="min-h-screen w-full min-w-0 bg-[#ffffff] text-[#09263B] article-page content-page">
        <Navbar />
        <main className="article-layout article-container pt-36 pb-20 text-center space-y-6">
          <h1 className="text-3xl font-extrabold text-[#102F49]">
            {lang === "ar" ? "المقال غير موجود" : "Article Not Found"}
          </h1>
          <p className="text-[#374151] text-base">
            {lang === "ar"
              ? "لم يتم العثور على المقال المطلوب في المدونة."
              : "The requested blog article was not found."}
          </p>
          <div className="pt-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1677B7] text-[#FFFFFF] font-semibold text-sm rounded-[3px] hover:bg-[#1677B7]/90 transition-colors"
            >
              <span className="rtl:rotate-180 ltr:rotate-0 inline-block">←</span>
              <span>{t.blog.backToBlog}</span>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const title = post.title[lang] || post.title.ar;
  const date = post.date[lang] || post.date.ar;
  const readTime = post.readTime[lang] || post.readTime.ar;
  const author = post.author[lang] || post.author.ar;
  const tags = post.tags[lang] && post.tags[lang].length > 0 ? post.tags[lang] : post.tags.ar;
  const blocks =
    post.content[lang] && post.content[lang].length > 0 ? post.content[lang] : post.content.ar;

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        } catch {
          // fallback
        }
      }
    }
  };

  return (
    <div
      className="min-h-screen w-full min-w-0 bg-[#ffffff] text-[#09263B] selection:bg-[#1677B7] selection:text-[#FFFFFF] transition-colors duration-200 overflow-x-hidden article-page content-page"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <Navbar />

      <main className="article-layout article-container w-full max-w-none m-0 pt-24 pb-20 sm:pt-32 sm:pb-24 md:pt-36 md:pb-28 space-y-8 bg-[#ffffff] box-border">
        {/* Navigation Breadcrumb / Top Bar */}
        <div className="w-full pb-4 border-b border-gray-200 flex items-center justify-between gap-4">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold text-[#09263B]"
          >
            <Link to="/" className="hover:text-[#1677B7] transition-colors">
              {t.blog.backToHome}
            </Link>
            <span className="select-none text-gray-300">/</span>
            <Link to="/blog" className="hover:text-[#1677B7] transition-colors">
              {t.blog.title}
            </Link>
            <span className="select-none text-gray-300">/</span>
            <span className="text-[#102F49] truncate max-w-[200px] sm:max-w-md">{title}</span>
          </nav>

          <div className="flex items-center gap-2">
            {tags[0] && (
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-[2px] bg-[#102F49] text-[#D6E6EC] border border-[#2A526A]">
                {tags[0]}
              </span>
            )}
          </div>
        </div>

        {/* Modern Wide-Canvas Pure White Article Reading Container */}
        <article
          className="article-content w-full max-w-none min-w-0 bg-[#ffffff] text-[#374151] space-y-10 sm:space-y-14 transition-all duration-200 break-words"
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          {/* Article Header */}
          <header className="space-y-6 sm:space-y-8 pb-8 sm:pb-10 border-b border-gray-200 w-full">
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-[1px] bg-[#1677B7]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#1677B7]">
                {tags[0] || (lang === "ar" ? "مقال" : "Article")}
              </span>
              {post.isDemo && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] bg-[#1677B7] text-[#FFFFFF] font-semibold text-xs border border-[#1677B7]">
                  {t.blog.demoBadge}
                </span>
              )}
            </div>

            <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-extrabold tracking-tight text-[#102F49] leading-[1.3] sm:leading-[1.35] w-full break-words">
              {title}
            </h1>

            {/* Meta Information Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="font-medium text-[#102F49]">{readTime}</span>
              </div>

              {/* Share button */}
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-gray-100 hover:bg-[#1677B7] text-[#102F49] hover:text-[#FFFFFF] border border-gray-300 text-xs font-semibold transition-colors cursor-pointer"
                title={t.blog.shareAction}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3.5 h-3.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                <span>
                  {copied ? (lang === "ar" ? "تم النسخ!" : "Copied!") : t.blog.shareAction}
                </span>
              </button>
            </div>
          </header>

          {/* Demo Post Prominent Notice Banner */}
          {post.isDemo && (
            <aside
              role="note"
              aria-label={t.blog.demoBadge}
              className="w-full my-4 p-5 sm:p-6 bg-[#F0F7FA] border-s-4 border-[#1677B7] rounded-[4px] shadow-xs space-y-1.5"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-[#1677B7]">
                {t.blog.demoBadge}
              </div>
              <p className="text-sm sm:text-base text-[#374151] leading-relaxed font-normal">
                {t.blog.demoNotice}
              </p>
            </aside>
          )}

          {/* Optional Cover Image */}
          {post.coverImage && (
            <div className="pt-2 sm:pt-4 w-full">
              <div className="w-full rounded-[4px] overflow-hidden border border-gray-200 bg-gray-50 shadow-xs">
                <img
                  src={post.coverImage}
                  alt={post.coverImageAlt?.[lang] || title}
                  className="w-full h-auto max-h-[580px] object-cover sm:object-contain object-center mx-auto block"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}

          {/* Main Article Content Body */}
          <div className="space-y-6 sm:space-y-8 text-[#374151] w-full">
            {blocks.map((block, idx) => (
              <ContentBlockRenderer key={idx} block={block} isRtl={isRtl} />
            ))}
          </div>

          {/* Post Footer & Navigation Actions */}
          <footer className="pt-10 mt-12 border-t border-gray-200 space-y-8 w-full">
            {/* Call to action card */}
            <div className="bg-[#F0F7FA] border border-[#2A526A]/20 p-6 sm:p-8 rounded-[4px] flex flex-col md:flex-row md:items-center md:justify-between gap-5 shadow-xs">
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#102F49]">
                  {lang === "ar"
                    ? "هل لديك فكرة أو مشروع محتوى وموقع؟"
                    : "Have an idea for content, design, or a website?"}
                </h3>
                <p className="text-sm text-[#374151]">
                  {lang === "ar"
                    ? "يسعدني مساعدتك في تحويل الفكرة إلى محتوى مكتمل وموقع متجاوب."
                    : "I help turn ideas into polished content and responsive websites."}
                </p>
              </div>
              <a
                href={`https://wa.me/963981434844?text=${encodeURIComponent(
                  lang === "ar"
                    ? `مرحبًا محمد، قرأت مقالك «${post.title.ar}» وأود التواصل معك.`
                    : `Hello Mohammad, I read your article "${post.title.en || post.title.ar}" and would like to connect.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-[#FFFFFF] bg-[#1677B7] hover:bg-[#1677B7]/90 rounded-[3px] transition-colors border border-[#1677B7] shadow-sm shrink-0"
              >
                <span>{t.nav.talkCta}</span>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-4 h-4 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </a>
            </div>

            {/* Back Links */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
              <Link
                to="/blog"
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-[#102F49] bg-gray-100 hover:bg-gray-200 rounded-[3px] transition-colors border border-gray-300 w-full sm:w-auto min-h-[44px]"
              >
                <span className="rtl:rotate-180 ltr:rotate-0 inline-block me-2">←</span>
                <span>{t.blog.backToBlog}</span>
              </Link>

              <Link
                to="/"
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-[#102F49] hover:text-[#1677B7] transition-colors"
              >
                <span>{t.blog.backToHome}</span>
              </Link>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}

function ContentBlockRenderer({ block, isRtl }: { block: BlogContentBlock; isRtl: boolean }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-[17px] sm:text-[19px] md:text-[20px] leading-[1.95] sm:leading-[2.05] text-[#374151] font-normal w-full break-words">
          {block.text}
        </p>
      );

    case "heading":
      if (block.level === 3) {
        return (
          <h3 className="text-[19px] sm:text-[22px] md:text-[24px] font-bold text-[#102F49] tracking-tight leading-[1.4] pt-4 w-full break-words">
            {block.text}
          </h3>
        );
      }
      return (
        <div className="pt-8 sm:pt-10 pb-3 border-b border-gray-200 w-full">
          <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-[#102F49] tracking-tight leading-[1.4] w-full break-words">
            {block.text}
          </h2>
        </div>
      );

    case "quote":
      return (
        <div className="my-6 p-6 sm:p-7 bg-[#F0F7FA] border-s-4 border-[#1677B7] rounded-[4px] shadow-xs">
          <blockquote className="text-[18px] sm:text-[20px] md:text-[21px] font-semibold text-[#102F49] leading-[1.85] sm:leading-[1.95] m-0">
            «{block.text}»
          </blockquote>
          {block.citation && (
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1677B7] mt-3">
              — {block.citation}
            </div>
          )}
        </div>
      );

    case "list":
      return (
        <ul className="space-y-3 my-4 ps-2 w-full">
          {block.items?.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[17px] sm:text-[19px] md:text-[20px] leading-[1.9] sm:leading-[2.0] text-[#374151]"
            >
              <span className="w-2 h-2 rounded-full bg-[#1677B7] mt-3 shrink-0" />
              <span className="flex-1 break-words">{item}</span>
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <aside className="w-full my-6 bg-[#F0F7FA] border-s-4 border-[#1677B7] p-6 sm:p-8 rounded-[4px] space-y-3 shadow-xs">
          {block.title && (
            <h3 className="text-[19px] sm:text-[22px] font-bold text-[#102F49] leading-[1.4] w-full break-words">
              {block.title}
            </h3>
          )}
          <p className="text-[17px] sm:text-[19px] leading-[1.9] sm:leading-[2.0] text-[#374151] w-full break-words font-normal">
            {block.text}
          </p>
        </aside>
      );

    default:
      return null;
  }
}
