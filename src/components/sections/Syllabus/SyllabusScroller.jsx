"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import BookCard from "./BookCard";
import Reveal from "@/components/ui/Reveal";

/**
 * SyllabusScroller component for Section E: "What You Will Master".
 * - Desktop (>=1340px): 4-column grid
 * - Tablet (768px-1339px): 2x2 grid
 * - Mobile (<768px): Horizontal scroll-snap scroller with 4 pagination dots
 * Follows Rule 7: padding-block 20px top / 44px bottom with equal negative margins to avoid clipping shadows/borders.
 */
export default function SyllabusScroller({ books }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);

  // Setup observer for mobile horizontal scroll dots
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const handleScroll = () => {
      const scrollLeft = scroller.scrollLeft;
      const cardWidth = cardRefs.current[0]?.offsetWidth || 300;
      const gap = 14;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(Math.max(0, index), books.length - 1));
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", handleScroll);
  }, [books.length]);

  const scrollToCard = useCallback((index) => {
    const card = cardRefs.current[index];
    if (card && scrollerRef.current) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveIndex(index);
    }
  }, []);

  return (
    <div className="w-full">
      {/* Mobile Scroller (< 768px) */}
      <div className="block md:hidden w-full">
        <div
          ref={scrollerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{
            paddingTop: "20px",
            paddingBottom: "44px",
            marginTop: "-20px",
            marginBottom: "-44px",
            paddingLeft: "20px",
            paddingRight: "20px",
            scrollPaddingLeft: "20px",
            scrollPaddingRight: "20px",
            gap: "14px",
          }}
        >
          {books.map((book, idx) => (
            <div
              key={book.id}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="snap-center shrink-0 w-[min(86vw,340px)]"
            >
              <BookCard book={book} index={idx} />
            </div>
          ))}
        </div>

        {/* 4 Pagination Dots */}
        <div
          className="flex items-center justify-center gap-2 mt-8"
          role="tablist"
          aria-label="Syllabus books navigation"
        >
          {books.map((book, idx) => (
            <button
              key={book.id}
              role="tab"
              aria-selected={activeIndex === idx}
              aria-label={`Go to ${book.bookLabel}`}
              onClick={() => scrollToCard(idx)}
              className="h-2 rounded-full transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC21A]"
              style={{
                width: activeIndex === idx ? "24px" : "8px",
                backgroundColor: activeIndex === idx ? "#FFC21A" : "rgba(15, 23, 42, 0.2)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Tablet & Desktop Grid (>= 768px) */}
      <div
        className="hidden md:grid syllabus-grid justify-center"
        style={{
          gap: "clamp(16px, 1.8vw, calc(var(--su, 1px) * 19))",
        }}
      >
        {books.map((book, idx) => (
          <Reveal
            key={book.id}
            index={idx + 2}
            className="w-full max-w-[520px] min-[1340px]:max-w-none mx-auto"
          >
            <BookCard book={book} index={idx} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
