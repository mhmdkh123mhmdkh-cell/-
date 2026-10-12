import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/brand/Navbar";
import { getBlogPostBySlug, type BlogPost, type BlogContentBlock } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);
    const title = post
      ? `${post.title.ar} | ${post.title.en} — Mohammad Alkhayouti`
      : "المقال | Article — Mohammad Alkhayouti";
    const description = post ? post.seo.description.ar : "مدونة محمد الخيوتي — مقالات وتجارب رقمية";

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

  if (!post) {
    return (
      <div className="min-h-screen bg-[#C7DDE8] text-[#09263B]">
        <Navbar />
        <main className="editorial-shell pt-36 pb-20 text-center space-y-6">
          <h1 className="text-3xl font-extrabold text-[#09263B]">
            {lang === "ar" ? "المقال غير موجود" : "Article Not Found"}
          </h1>
          <p className="text-[#09263B]/80 text-base">
            {lang === "ar"
              ? "لم يتم العثور على المقال المطلوب في المدونة."
              : "The requested blog article was not found."}
          </p>
          <div className="pt-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1677B7] text-[#FFFFFF] font-semibold text-sm rounded-[3px] hover:bg-[#1677B7]/90 transition-colors"
            >
              <span>{isRtl ? "→" : "←"}</span>
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
  const tags = post.tags[lang] || post.tags.ar;
  const blocks = post.content[lang] || post.content.ar;

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
    <div className="min-h-screen bg-[#C7DDE8] text-[#09263B] selection:bg-[#1677B7] selection:text-[#FFFFFF] transition-colors duration-200">
      <Navbar />

      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <article className="editorial-shell max-w-4xl space-y-10">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm text-[#09263B]/70 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            <Link to="/" className="hover:text-[#1677B7] transition-colors font-medium shrink-0">
              {t.blog.backToHome}
            </Link>
            <span className="select-none opacity-40 shrink-0">/</span>
            <Link
              to="/blog"
              className="hover:text-[#1677B7] transition-colors font-medium shrink-0"
            >
              {t.blog.title}
            </Link>
            <span className="select-none opacity-40 shrink-0">/</span>
            <span className="text-[#09263B] font-semibold truncate">{title}</span>
          </nav>

          {/* Article Header */}
          <header className="space-y-6 pb-8 border-b border-[#2A526A]">
            {/* Tags & Meta Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {post.isDemo && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-[2px] bg-[#1677B7] text-[#FFFFFF] font-semibold text-xs border border-[#1677B7]">
                  {t.blog.demoBadge}
                </span>
              )}
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-2.5 py-1 rounded-[2px] bg-[#102F49] text-[#D6E6EC] border border-[#2A526A] text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#09263B] leading-tight">
              {title}
            </h1>

            {/* Meta Information Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs sm:text-sm text-[#09263B]/80 border-t border-[#2A526A]/40">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="font-normal">{t.blog.by}</span>
                  <strong className="font-bold text-[#09263B]">{author}</strong>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <span>{t.blog.publishedOn}</span>
                  <time dateTime={post.isoDate} className="font-medium text-[#09263B]">
                    {date}
                  </time>
                </span>
                <span>•</span>
                <span className="font-medium text-[#09263B]">{readTime}</span>
              </div>

              {/* Share button */}
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[#102F49] text-[#EAF2F4] hover:bg-[#1677B7] hover:text-[#FFFFFF] border border-[#2A526A] text-xs font-semibold transition-colors cursor-pointer"
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

          {/* Optional Cover Image */}
          {post.coverImage && (
            <div className="overflow-hidden rounded-[3px] border border-[#2A526A] shadow-xs">
              <img
                src={post.coverImage}
                alt={title}
                className="w-full h-auto max-h-[460px] object-cover"
              />
            </div>
          )}

          {/* Main Article Content Body */}
          <div className="space-y-6 sm:space-y-7 text-[#09263B]">
            {blocks.map((block, idx) => (
              <ContentBlockRenderer key={idx} block={block} isRtl={isRtl} />
            ))}
          </div>

          {/* Post Footer & Navigation Actions */}
          <footer className="pt-10 mt-12 border-t border-[#2A526A] space-y-8">
            {/* Call to action card */}
            <div className="editorial-card bg-[#102F49] border border-[#2A526A] p-6 sm:p-8 rounded-[3px] flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF]">
                  {lang === "ar"
                    ? "هل لديك فكرة أو مشروع محتوى وموقع؟"
                    : "Have an idea for content, design, or a website?"}
                </h3>
                <p className="text-xs sm:text-sm text-[#D6E6EC]/85">
                  {lang === "ar"
                    ? "يسعدني مساعدتك في تحويل الفكرة إلى محتوى مكتمل وموقع متجاوب."
                    : "I help turn ideas into polished content and responsive websites."}
                </p>
              </div>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#FFFFFF] bg-[#1677B7] hover:bg-[#1677B7]/90 rounded-[3px] transition-colors border border-[#1677B7] shrink-0"
              >
                {t.nav.talkCta}
              </a>
            </div>

            {/* Back Links */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#09263B] hover:text-[#1677B7] transition-colors"
              >
                <span>{isRtl ? "→" : "←"}</span>
                <span>{t.blog.backToBlog}</span>
              </Link>

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#09263B] hover:text-[#1677B7] transition-colors"
              >
                <span>{t.blog.backToHome}</span>
                <span>{isRtl ? "←" : "→"}</span>
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
        <p className="text-base sm:text-lg text-[#09263B]/90 leading-relaxed font-normal">
          {block.text}
        </p>
      );

    case "heading":
      if (block.level === 3) {
        return (
          <h3 className="text-xl sm:text-2xl font-bold text-[#09263B] tracking-tight pt-4">
            {block.text}
          </h3>
        );
      }
      return (
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09263B] tracking-tight pt-6 pb-1 border-b border-[#2A526A]/30">
          {block.text}
        </h2>
      );

    case "quote":
      return (
        <figure className="my-6 border-s-4 border-[#1677B7] ps-6 py-3 bg-[#102F49]/10 rounded-[2px] space-y-2">
          <blockquote className="text-lg sm:text-xl font-medium text-[#09263B] italic leading-relaxed">
            «{block.text}»
          </blockquote>
          {block.citation && (
            <figcaption className="text-xs sm:text-sm font-semibold text-[#1677B7]">
              — {block.citation}
            </figcaption>
          )}
        </figure>
      );

    case "list":
      return (
        <ul className="space-y-2.5 my-4 ps-5 list-disc text-base sm:text-lg text-[#09263B]/90 leading-relaxed marker:text-[#1677B7]">
          {block.items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <div className="editorial-card bg-[#102F49] text-[#EAF2F4] border border-[#2A526A] p-5 sm:p-6 rounded-[3px] space-y-2 my-6">
          {block.title && (
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#FFFFFF]">
              <span className="w-2 h-2 rounded-[1px] bg-[#1677B7]" />
              <span>{block.title}</span>
            </div>
          )}
          <p className="text-xs sm:text-sm text-[#D6E6EC] leading-relaxed font-normal">
            {block.text}
          </p>
        </div>
      );

    default:
      return null;
  }
}
