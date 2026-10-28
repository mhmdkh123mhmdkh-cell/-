import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/context/LanguageContext";
import { blogPosts, type BlogPost } from "@/data/blog";

export function BlogSection() {
  const { lang, t, isRtl } = useLanguage();

  // Show top 3 recent published posts
  const recentPosts = blogPosts.slice(0, 3);

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-20 md:py-28 bg-[#C7DDE8] transition-colors duration-200">
      <div className="editorial-shell space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#2A526A]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#1677B7]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#09263B]">
              {t.blog.homeSectionTitle}
            </h2>
          </div>

          {/* Quick Header CTA to all articles */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[3px] text-xs sm:text-sm font-bold bg-[#102F49] text-[#EAF2F4] hover:bg-[#1677B7] hover:text-[#FFFFFF] border border-[#2A526A] transition-colors shadow-xs shrink-0 self-start md:self-auto cursor-pointer"
          >
            <span>{t.blog.exploreBlog}</span>
            <span className="rtl:rotate-180 transition-transform">→</span>
          </Link>
        </div>

        {/* Recent Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <HomeBlogCard key={post.id} post={post} lang={lang} isRtl={isRtl} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeBlogCard({
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
  const imageSrc = post.cardImage || post.coverImage;
  const imageAlt =
    post.cardImageAlt?.[lang] ||
    post.cardImageAlt?.ar ||
    post.coverImageAlt?.[lang] ||
    post.coverImageAlt?.ar ||
    title;

  return (
    <article className="editorial-card bg-[#102F49] border border-[#2A526A] rounded-[3px] p-5 sm:p-6 flex flex-col justify-between group hover:border-[#1677B7] transition-all h-full shadow-xs">
      <div className="space-y-4">
        {/* Card Image */}
        {imageSrc && (
          <div className="relative aspect-video w-full bg-[#0B2135] border border-[#2A526A] rounded-[2px] overflow-hidden select-none">
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="block w-full h-full overflow-hidden"
              tabIndex={-1}
              aria-label={title}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#FFFFFF] group-hover:text-[#1677B7] transition-colors leading-snug">
          <Link to="/blog/$slug" params={{ slug: post.slug }} className="focus:outline-hidden">
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-[#D6E6EC]/90 leading-relaxed font-normal line-clamp-3">
          {excerpt}
        </p>
      </div>

      {/* Card Footer: Read Link */}
      <div className="pt-4 mt-5 border-t border-[#2A526A]/70 flex items-center justify-end text-xs sm:text-sm">
        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="inline-flex items-center gap-1.5 font-semibold text-[#FFFFFF] group-hover:text-[#1677B7] transition-colors"
        >
          <span>{t.blog.readMore}</span>
          <span className="transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
            {isRtl ? "←" : "→"}
          </span>
        </Link>
      </div>
    </article>
  );
}
