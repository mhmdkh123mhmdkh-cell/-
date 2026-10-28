import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight, ChevronLeft, Maximize2, Minimize2, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioPages, type PortfolioPage } from "@/data/portfolioGallery";

export function SelectedWorkSection() {
  const { lang, t, isRtl } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const thumbnailStripRef = useRef<HTMLDivElement>(null);

  // Main carousel setup with Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: isRtl ? "rtl" : "ltr",
    loop: false,
    duration: 22,
    watchDrag: true,
  });

  // Fullscreen carousel setup
  const [fsEmblaRef, fsEmblaApi] = useEmblaCarousel({
    direction: isRtl ? "rtl" : "ltr",
    loop: false,
    duration: 22,
    watchDrag: true,
  });

  const hasMountedRef = useRef(false);

  useEffect(() => {
    hasMountedRef.current = true;
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());

    // Scroll active thumbnail within the horizontal strip only (never scrollIntoView which scrolls the window)
    if (hasMountedRef.current && thumbnailStripRef.current) {
      const container = thumbnailStripRef.current;
      const activeThumb = container.children[index] as HTMLElement | undefined;
      if (activeThumb) {
        const thumbOffset = activeThumb.offsetLeft;
        const thumbWidth = activeThumb.offsetWidth;
        const containerWidth = container.clientWidth;
        container.scrollTo({
          left: thumbOffset - containerWidth / 2 + thumbWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Keep fullscreen carousel in sync with main carousel
  useEffect(() => {
    if (isFullscreen && fsEmblaApi) {
      fsEmblaApi.scrollTo(selectedIndex, true);
      const onFsSelect = () => {
        const idx = fsEmblaApi.selectedScrollSnap();
        setSelectedIndex(idx);
        emblaApi?.scrollTo(idx, true);
      };
      fsEmblaApi.on("select", onFsSelect);
      return () => {
        fsEmblaApi.off("select", onFsSelect);
      };
    }
  }, [isFullscreen, fsEmblaApi, selectedIndex, emblaApi]);

  // Handle re-init when direction changes (AR / EN)
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit({ direction: isRtl ? "rtl" : "ltr" });
    }
    if (fsEmblaApi) {
      fsEmblaApi.reInit({ direction: isRtl ? "rtl" : "ltr" });
    }
  }, [isRtl, emblaApi, fsEmblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
      if (fsEmblaApi && isFullscreen) fsEmblaApi.scrollTo(index);
    },
    [emblaApi, fsEmblaApi, isFullscreen],
  );

  const scrollPrev = useCallback(() => {
    if (isFullscreen && fsEmblaApi) {
      fsEmblaApi.scrollPrev();
    } else if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi, fsEmblaApi, isFullscreen]);

  const scrollNext = useCallback(() => {
    if (isFullscreen && fsEmblaApi) {
      fsEmblaApi.scrollNext();
    } else if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi, fsEmblaApi, isFullscreen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
        return;
      }

      // Check if user is currently interacting with an input
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) {
        return;
      }

      // In RTL, ArrowRight moves backward in pages (Prev) and ArrowLeft moves forward (Next)
      if (e.key === "ArrowLeft") {
        if (isRtl) {
          scrollNext();
        } else {
          scrollPrev();
        }
      } else if (e.key === "ArrowRight") {
        if (isRtl) {
          scrollPrev();
        } else {
          scrollNext();
        }
      } else if (e.key === "Home") {
        scrollTo(0);
      } else if (e.key === "End") {
        scrollTo(portfolioPages.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, isRtl, scrollNext, scrollPrev, scrollTo]);

  const currentPage = portfolioPages[selectedIndex] ?? portfolioPages[0]!;
  const totalPages = portfolioPages.length;

  return (
    <section id="work" className="py-20 md:py-28 bg-[#C7DDE8] transition-colors duration-200">
      <div className="editorial-shell space-y-8">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#2A526A]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#1677B7]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#09263B]">
              {t.selectedWork.title}
            </h2>
          </div>

          {/* Quick Actions (Fullscreen) */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[3px] text-xs sm:text-sm font-semibold bg-[#102F49] text-[#EAF2F4] hover:bg-[#1677B7] hover:text-[#FFFFFF] border border-[#2A526A] transition-colors shadow-xs cursor-pointer"
              title={lang === "ar" ? "عرض بملء الشاشة" : "View Fullscreen"}
              aria-label={lang === "ar" ? "عرض المعرض بملء الشاشة" : "View gallery fullscreen"}
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline">
                {lang === "ar" ? "ملء الشاشة" : "Fullscreen"}
              </span>
            </button>
          </div>
        </div>

        {/* Interactive Gallery Frame */}
        <div
          ref={galleryRef}
          className="editorial-card bg-[#102F49] border border-[#2A526A] rounded-[4px] p-4 sm:p-6 md:p-8 space-y-5 shadow-md"
        >
          {/* Top Bar: Page Indicator only (no prev/next buttons) + Thumbnail Strip moved to top */}
          <div className="space-y-3 pb-1 border-b border-[#2A526A]/70">
            {/* Page Indicator */}
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-[2px] bg-[#1677B7]/25 border border-[#1677B7]/60 text-xs sm:text-sm font-bold text-[#EAF2F4] shadow-xs">
                <span>
                  {lang === "ar"
                    ? `الصفحة ${selectedIndex + 1} من ${totalPages}`
                    : `Page ${selectedIndex + 1} of ${totalPages}`}
                </span>
              </span>

              <h3 className="hidden sm:inline-block text-xs sm:text-sm font-medium text-[#D6E6EC]/90 truncate max-w-md">
                {currentPage.title[lang]}
              </h3>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#0B2135] h-1.5 rounded-full overflow-hidden border border-[#2A526A]/50">
              <div
                className="bg-[#1677B7] h-full transition-all duration-300 ease-out"
                style={{
                  width: `${((selectedIndex + 1) / totalPages) * 100}%`,
                }}
              />
            </div>

            {/* Thumbnail Scroller Strip (moved before gallery viewport) */}
            <div
              ref={thumbnailStripRef}
              className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-thin scrollbar-thumb-[#2A526A] scrollbar-track-transparent"
              style={{ scrollBehavior: "smooth" }}
            >
              {portfolioPages.map((page, index) => {
                const isActive = index === selectedIndex;
                return (
                  <button
                    key={page.pageNumber}
                    type="button"
                    onClick={() => scrollTo(index)}
                    aria-label={
                      lang === "ar"
                        ? `الانتقال إلى الصفحة ${page.pageNumber}: ${page.title.ar}`
                        : `Jump to page ${page.pageNumber}`
                    }
                    className={`relative shrink-0 rounded-[2px] overflow-hidden border transition-all duration-200 cursor-pointer w-20 sm:w-24 md:w-28 aspect-[16/9] ${
                      isActive
                        ? "border-[#1677B7] ring-2 ring-[#1677B7] scale-[1.03] shadow-md z-10"
                        : "border-[#2A526A]/80 opacity-60 hover:opacity-100 hover:border-[#1677B7]/70"
                    }`}
                  >
                    <img
                      src={page.webpSrc}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute bottom-1 end-1 bg-[#09263B]/90 text-[10px] font-bold text-[#EAF2F4] px-1 rounded-[1px] leading-tight">
                      {page.pageNumber}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Slide Carousel Viewport */}
          <div
            className="overflow-hidden rounded-[3px] border border-[#2A526A] bg-[#092032] shadow-inner cursor-grab active:cursor-grabbing select-none"
            ref={emblaRef}
            role="region"
            aria-label={lang === "ar" ? "معرض صفحات ملف الأعمال" : "Portfolio Pages Gallery"}
          >
            <div className="flex">
              {portfolioPages.map((page, index) => (
                <div
                  key={page.pageNumber}
                  className="flex-[0_0_100%] min-w-0 relative"
                  aria-hidden={index !== selectedIndex}
                >
                  <PageSlideRenderer page={page} lang={lang} isCurrent={index === selectedIndex} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal View */}
      {isFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lang === "ar" ? "عرض ملف الأعمال بملء الشاشة" : "Fullscreen Portfolio"}
          className="fixed inset-0 z-50 bg-[#09263B]/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6"
        >
          {/* Fullscreen Header */}
          <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#2A526A] text-[#EAF2F4]">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-[2px] bg-[#1677B7] text-white text-xs sm:text-sm font-bold">
                {lang === "ar"
                  ? `الصفحة ${selectedIndex + 1} من ${totalPages}`
                  : `Page ${selectedIndex + 1} of ${totalPages}`}
              </span>
              <span className="text-sm sm:text-base font-semibold truncate max-w-sm sm:max-w-xl">
                {currentPage.title[lang]}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] text-xs font-bold bg-[#1677B7] hover:bg-[#1677B7]/90 text-white transition-colors cursor-pointer"
                aria-label={lang === "ar" ? "إغلاق ملء الشاشة" : "Close fullscreen"}
              >
                <Minimize2 className="w-4 h-4" />
                <span>{lang === "ar" ? "إغلاق (Esc)" : "Close (Esc)"}</span>
              </button>
            </div>
          </div>

          {/* Fullscreen Main Viewport */}
          <div className="flex-1 flex items-center justify-center my-3 relative overflow-hidden">
            <div
              className="w-full max-w-6xl aspect-[16/9] overflow-hidden rounded-[4px] border border-[#2A526A] bg-[#092032] shadow-2xl cursor-grab active:cursor-grabbing"
              ref={fsEmblaRef}
            >
              <div className="flex h-full">
                {portfolioPages.map((page, index) => (
                  <div
                    key={page.pageNumber}
                    className="flex-[0_0_100%] min-w-0 relative h-full"
                    aria-hidden={index !== selectedIndex}
                  >
                    <PageSlideRenderer
                      page={page}
                      lang={lang}
                      isCurrent={index === selectedIndex}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Left/Right Arrows for Fullscreen */}
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label={lang === "ar" ? "الصفحة السابقة" : "Previous Page"}
              className={`absolute start-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#102F49]/80 border border-[#2A526A] text-white shadow-xl backdrop-blur-sm transition-all z-30 cursor-pointer ${
                canScrollPrev ? "hover:bg-[#1677B7]" : "opacity-30 cursor-not-allowed"
              }`}
            >
              {isRtl ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
            </button>

            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label={lang === "ar" ? "الصفحة التالية" : "Next Page"}
              className={`absolute end-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#102F49]/80 border border-[#2A526A] text-white shadow-xl backdrop-blur-sm transition-all z-30 cursor-pointer ${
                canScrollNext ? "hover:bg-[#1677B7]" : "opacity-30 cursor-not-allowed"
              }`}
            >
              {isRtl ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
            </button>
          </div>

          {/* Fullscreen Footer Controls */}
          <div className="flex items-center justify-center gap-3 pt-2 border-t border-[#2A526A] text-xs text-[#D6E6EC]/80">
            <span>
              {lang === "ar"
                ? "يمكنك استخدام مفاتيح الأسهم (← / →) للتنقل، وزر Esc للإغلاق."
                : "Use arrow keys (← / →) to navigate, Esc to close."}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}

/**
 * Renders a single page slide with its picture element and interactive clickable hotspots
 */
function PageSlideRenderer({
  page,
  lang,
  isCurrent,
}: {
  page: PortfolioPage;
  lang: "ar" | "en";
  isCurrent: boolean;
}) {
  return (
    <div className="relative aspect-[16/9] w-full bg-[#092032] overflow-hidden select-none">
      {/* High-Resolution Picture with WebP & JPG fallback */}
      <picture className="block w-full h-full">
        <source srcSet={page.webpSrc} type="image/webp" />
        <img
          src={page.jpgSrc}
          alt={page.alt[lang]}
          className="w-full h-full object-contain pointer-events-none"
          loading={page.pageNumber <= 3 ? "eager" : "lazy"}
          decoding="async"
        />
      </picture>

      {/* Interactive Hotspot Links */}
      {page.links.map((link, idx) => (
        <a
          key={idx}
          href={link.uri}
          target={link.isExternal ? "_blank" : undefined}
          rel={link.isExternal ? "noopener noreferrer" : undefined}
          tabIndex={isCurrent ? 0 : -1}
          style={{
            left: `${link.style.left}%`,
            top: `${link.style.top}%`,
            width: `${link.style.width}%`,
            height: `${link.style.height}%`,
          }}
          title={link.label[lang]}
          aria-label={link.label[lang]}
          className="absolute z-20 rounded-[3px] transition-all duration-150 cursor-pointer border border-transparent hover:border-[#1677B7] hover:bg-[#1677B7]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1677B7] focus-visible:bg-[#1677B7]/25 group/hotspot"
        >
          <span className="sr-only">{link.label[lang]}</span>

          {/* Subtle external link icon or hint indicator badge on hover */}
          <span className="opacity-0 group-hover/hotspot:opacity-100 group-focus-visible/hotspot:opacity-100 transition-opacity absolute -top-8 left-1/2 -translate-x-1/2 bg-[#09263B] text-[#EAF2F4] text-[11px] font-semibold py-1 px-2 rounded-[3px] shadow-lg border border-[#2A526A] whitespace-nowrap pointer-events-none z-30 flex items-center gap-1">
            <span>{link.label[lang]}</span>
            {link.isExternal && <ExternalLink className="w-3 h-3 text-[#1677B7]" />}
          </span>
        </a>
      ))}
    </div>
  );
}
