"use client";

import { useRef, useState } from "react";
import { programs } from "@/data/programs";
import ProgramCard from "./ProgramCard";

export default function ProgramsCardsGrid() {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft } = el;
    const cardWidth = Math.min(window.innerWidth * 0.78, 320) + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlide(Math.min(Math.max(index, 0), programs.length - 1));
  };

  const scrollToSlide = (index) => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = Math.min(window.innerWidth * 0.78, 320) + 16;
    el.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveSlide(index);
  };

  return (
    <div
      className="w-full"
      style={{
        marginTop: "calc(var(--u) * 22)",
      }}
    >
      {/* ================= DESKTOP 5-COLUMN GRID (>= 1024px) ================= */}
      <div
        className="programs-desktop-grid items-stretch w-full"
        style={{
          gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
          gap: "calc(var(--u) * 25)",
        }}
      >
        {programs.map((program, index) => (
          <ProgramCard key={program.id} program={program} index={index} />
        ))}
      </div>

      {/* ================= TABLET 3+2 CENTERED GRID (768px - 1023px) ================= */}
      <div
        className="programs-tablet-grid items-stretch w-full max-w-[880px] mx-auto"
        style={{
          gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
          gap: "20px",
        }}
      >
        {programs.map((program, index) => {
          let colClass = "col-span-2";
          if (index === 3) colClass = "col-span-2 col-start-2";
          return (
            <div key={program.id} className={colClass}>
              <ProgramCard program={program} index={index} />
            </div>
          );
        })}
      </div>

      {/* ================= MOBILE SWIPE CAROUSEL (< 768px) ================= */}
      <div className="programs-mobile-carousel w-full flex-col">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex items-stretch overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 -mx-4 px-4 scrollbar-none gap-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollPaddingLeft: "16px",
          }}
        >
          {programs.map((program, index) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={index}
              isMobile={true}
            />
          ))}
        </div>

        {/* 5 Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {programs.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === i ? "w-6 bg-[#FFB800]" : "w-2 bg-[#D5CDC0]"
              }`}
              aria-label={`Go to program slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
