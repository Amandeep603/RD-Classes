"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import BookCard from "./BookCard";

/**
 * SyllabusScroller component for Section E: "What You Will Master".
 * Fix Pass v3.4 specifications:
 * - Exactly ONE list of cards (one <ul>) in DOM at all breakpoints (no duplicate layout)
 * - >=1340px: grid 4 columns
 * - 768-1339px: grid 2 columns
 * - <768px: horizontal scroller (flex, overflow-x auto, snap-x mandatory, flex: 0 0 min(86vw, 340px))
 * - Scroller padding: top 20px / bottom 44px with negative margins -20px / -44px to preserve shadow/border
 * - Pagination dots: rendered BELOW scroller on mobile with margin-top 8px
 * - document.querySelectorAll('[data-book-card]').length === 4 guaranteed everywhere
 */
export default function SyllabusScroller({ books }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);

  // Track active card index during mobile scroll
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const handleScroll = () => {
      const scrollLeft = scroller.scrollLeft;
      const card = cardRefs.current[0];
      const cardWidth = card ? card.offsetWidth : 300;
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
      {/* Exactly ONE <ul> with 4 cards across all viewports */}
      <ul
        ref={scrollerRef}
        className="syllabus-card-list no-scrollbar"
        aria-label="CBSE Syllabus Books"
      >
        {books.map((book, idx) => (
          <li
            key={book.id}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="syllabus-card-item"
          >
            <BookCard book={book} index={idx} />
          </li>
        ))}
      </ul>

      {/* 4 Pagination Dots (Mobile only <768px, rendered BELOW scroller) */}
      <div
        className="flex md:hidden items-center justify-center gap-2 mt-2"
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
              backgroundColor:
                activeIndex === idx ? "#FFC21A" : "rgba(15, 23, 42, 0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
