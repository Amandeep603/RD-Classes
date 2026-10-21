"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROGRAMS, PROGRAMS_HEADER } from "@/constants/programs";
import ProgramCard from "./ProgramCard";

/**
 * Interactive Programs Carousel component.
 * - Horizontal track with CSS scroll snap.
 * - Desktop (>=1280px): All 5 cards visible simultaneously without scroll.
 * - Tablet & Mobile: Peeking cards with smooth swipe & arrow controls.
 * - Dynamic progress line thumb reflecting scroll position.
 * - Full accessibility: role="region", aria-roledescription="carousel", keyboard navigation.
 */
export default function ProgramsCarousel() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isAllVisible, setIsAllVisible] = useState(true);
  const [progressWidth, setProgressWidth] = useState(100);
  const [progressOffset, setProgressOffset] = useState(0);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 2) {
      setIsAllVisible(true);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      setProgressWidth(100);
      setProgressOffset(0);
      return;
    }

    setIsAllVisible(false);
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < maxScroll - 4);

    const ratio = clientWidth / scrollWidth;
    const thumbWidthPercent = Math.max(15, Math.min(100, ratio * 100));
    setProgressWidth(thumbWidthPercent);

    const maxThumbOffset = 100 - thumbWidthPercent;
    const scrollRatio = scrollLeft / maxScroll;
    setProgressOffset(scrollRatio * maxThumbOffset);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let rafId = null;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateScrollState]);

  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;

    const firstCard = el.querySelector("[data-card-item]");
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 300;
    const gap = window.innerWidth >= 1024 ? 16 : 14;
    const scrollAmount = (cardWidth + gap) * direction;

    el.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByCard(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByCard(1);
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Popular programs"
      className="w-full flex flex-col"
    >
      {/* ================= CAROUSEL TRACK ================= */}
      {/* Track bleeds edge-to-edge on mobile with scroll-padding so cards can be swiped smoothly */}
      <div
        ref={trackRef}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Program cards list. Use left and right arrow keys to scroll."
        className="flex items-stretch overflow-x-auto scroll-smooth snap-x snap-mandatory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A78AD] py-3 -mx-5 px-5 lg:mx-0 lg:px-0 scrollbar-none gap-[14px] lg:gap-[calc(var(--su)*16)]"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollPaddingLeft: "20px",
        }}
      >
        {PROGRAMS.map((program, index) => (
          <div
            key={program.id}
            data-card-item
            className="shrink-0 snap-start h-auto flex flex-col justify-stretch transition-transform duration-300 w-[min(82vw,320px)] sm:w-[320px] md:w-[calc((100%-28px)/2.4)] lg:w-[calc((100%-48px)/3.4)] xl:w-[calc((100%-calc(var(--su)*64))/5)] xl:min-w-0"
          >
            <ProgramCard program={program} />
          </div>
        ))}
      </div>

      {/* ================= CONTROLS ROW ================= */}
      {/* Desktop: Prev + Next + Progress Line + View All Button */}
      {/* Mobile: Row 1 = Prev + Next + Progress Line; Row 2 = Full-width View All Button */}
      <div className="mt-6 lg:mt-[calc(var(--su)*40)] w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-[calc(var(--su)*16)]">
        {/* Left Control Group: Prev/Next Buttons + Progress Line */}
        <div className="flex items-center gap-3 lg:gap-[calc(var(--su)*16)] flex-1">
          {/* Prev Button */}
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            aria-disabled={!canScrollLeft}
            aria-label="Previous programs"
            className={`flex items-center justify-center rounded-full bg-white border border-[#D5E1EC] text-[#0B1F3A] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A78AD] w-[44px] h-[44px] lg:w-[calc(var(--su)*48)] lg:h-[calc(var(--su)*48)] shrink-0 shadow-sm ${
              isAllVisible
                ? "cursor-default opacity-80"
                : !canScrollLeft
                ? "opacity-40 cursor-not-allowed pointer-events-none"
                : "cursor-pointer hover:bg-slate-50 hover:border-[#0A6E9E]"
            }`}
          >
            <ArrowLeft className="w-5 h-5 lg:w-[calc(var(--su)*20)] lg:h-[calc(var(--su)*20)]" aria-hidden="true" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight && !isAllVisible}
            aria-disabled={!canScrollRight}
            aria-label="Next programs"
            className={`flex items-center justify-center rounded-full bg-[#0A6E9E] text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A78AD] w-[44px] h-[44px] lg:w-[calc(var(--su)*48)] lg:h-[calc(var(--su)*48)] shrink-0 shadow-sm ${
              isAllVisible
                ? "cursor-default opacity-100"
                : !canScrollRight
                ? "opacity-40 cursor-not-allowed pointer-events-none"
                : "cursor-pointer hover:bg-[#085a82] shadow-md"
            }`}
          >
            <ArrowRight className="w-5 h-5 lg:w-[calc(var(--su)*20)] lg:h-[calc(var(--su)*20)]" aria-hidden="true" />
          </button>

          {/* Flexible Thin Progress Track */}
          <div className="relative flex-1 h-[2px] bg-[#CBD8E6] rounded-full overflow-hidden mx-2 lg:mx-4">
            <div
              className="absolute top-0 bottom-0 bg-[#0A6E9E] rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${progressWidth}%`,
                left: `${progressOffset}%`,
              }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Right CTA Button: "View All Courses ->" */}
        <Link
          href={PROGRAMS_HEADER.cta.href}
          className="group inline-flex items-center justify-center bg-[#0B1F3A] hover:bg-[#152e52] active:bg-[#071527] text-white font-semibold text-[15px] lg:text-[max(14px,calc(var(--su)*16))] rounded-full h-[52px] lg:h-[calc(var(--su)*52)] px-7 lg:px-[calc(var(--su)*28)] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A78AD] whitespace-nowrap shrink-0 w-full sm:w-auto"
        >
          <span>{PROGRAMS_HEADER.cta.label}</span>
          <ArrowRight
            className="ml-2 w-4 h-4 lg:w-[calc(var(--su)*18)] lg:h-[calc(var(--su)*18)] transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}
