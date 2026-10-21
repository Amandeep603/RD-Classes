"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsCarousel({ testimonials }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const n = testimonials.length;

  // Track active card via scroll listener
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const scrollLeft = track.scrollLeft;
      const cardWidth = track.firstElementChild?.clientWidth || 300;
      const index = Math.round(scrollLeft / (cardWidth + 16));
      setActiveIndex(Math.min(Math.max(0, index), n - 1));
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, [n]);

  const scrollToIndex = (idx) => {
    const track = trackRef.current;
    if (!track) return;
    const targetIdx = Math.max(0, Math.min(n - 1, idx));
    const card = track.children[targetIdx];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
    setActiveIndex(targetIdx);
  };

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  return (
    <div className="relative w-full flex flex-col min-[1100px]:flex-row items-stretch gap-6 min-[1100px]:gap-[calc(var(--su,1px)*28)]">
      {/* Left Column (Desktop >=1100px): Big Quote Glyph + 4-line H2 + Controls */}
      <div className="hidden min-[1100px]:flex flex-col justify-between shrink-0 w-[calc(var(--su,1px)*266)]">
        <div>
          {/* Big Quote Glyph (62u tall, #9ED3F0) */}
          <div className="mb-4">
            <svg
              viewBox="0 0 24 24"
              className="w-16 h-16 fill-[#9ED3F0]"
              style={{
                width: "calc(var(--su, 1px) * 62)",
                height: "calc(var(--su, 1px) * 62)",
              }}
              aria-hidden="true"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
          </div>

          {/* Heading 4 lines: 48u / 800 / 0.98 / #0B1B3B */}
          <h3
            className="font-extrabold text-[#0B1B3B] leading-[0.98] tracking-tight"
            style={{ fontSize: "calc(var(--su, 1px) * 48)" }}
          >
            <span className="block">What our</span>
            <span className="block">students &amp;</span>
            <span className="block">parents are</span>
            <span
              className="inline-block bg-gradient-to-r from-[#F59E0B] to-[#F97316] bg-clip-text text-transparent pb-1"
            >
              saying
            </span>
          </h3>
        </div>

        {/* Controls Row (margin-top 56u): Prev 58u, Progress Pills, Next 58u */}
        <div
          className="flex items-center gap-3 mt-8"
          style={{ marginTop: "calc(var(--su, 1px) * 56)" }}
        >
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            disabled={activeIndex === 0}
            className={`rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
              activeIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:scale-105 active:scale-95"
            }`}
            style={{
              width: "calc(var(--su, 1px) * 58)",
              height: "calc(var(--su, 1px) * 58)",
              backgroundColor: "#FFFFFF",
              border: "1px solid #DDE8F0",
            }}
          >
            <ChevronLeft className="w-6 h-6 text-[#0B1B3B] stroke-[2.5]" />
          </button>

          {/* Progress Pills */}
          <div className="flex items-center gap-1.5" style={{ gap: "calc(var(--su, 1px) * 6)" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: "calc(var(--su, 1px) * 40)",
                  height: "calc(var(--su, 1px) * 6)",
                  backgroundColor: i === activeIndex ? "#1B97C9" : "#DCDCDC",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            disabled={activeIndex >= n - 1}
            className={`rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md ${
              activeIndex >= n - 1 ? "opacity-40 cursor-not-allowed" : "hover:scale-105 active:scale-95"
            }`}
            style={{
              width: "calc(var(--su, 1px) * 58)",
              height: "calc(var(--su, 1px) * 58)",
              backgroundColor: "#1B97C9",
            }}
          >
            <ChevronRight className="w-6 h-6 text-white stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Right Track with 3 cards */}
      <div className="flex-1 min-w-0">
        <div
          ref={trackRef}
          role="region"
          aria-label="Testimonial reviews track"
          tabIndex={0}
          className="flex items-stretch overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{
            gap: "clamp(12px, 1.8vw, calc(var(--su, 1px) * 17))",
            paddingTop: "20px",
            paddingBottom: "44px",
            marginTop: "-20px",
            marginBottom: "-44px",
            paddingInline: "20px",
            scrollPaddingInline: "20px",
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 flex flex-col"
              style={{
                width: "clamp(280px, 86vw, calc(var(--su, 1px) * 392))",
                height: "clamp(340px, 40vw, calc(var(--su, 1px) * 404))",
              }}
            >
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Controls (<1100px) Centered Below */}
        <div className="flex min-[1100px]:hidden items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            disabled={activeIndex === 0}
            className={`w-12 h-12 rounded-full flex items-center justify-center bg-white border border-[#DDE8F0] shadow-xs active:scale-95 ${
              activeIndex === 0 ? "opacity-40" : ""
            }`}
          >
            <ChevronLeft className="w-5 h-5 text-[#0B1B3B] stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="w-8 h-1.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: i === activeIndex ? "#1B97C9" : "#DCDCDC",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            disabled={activeIndex >= n - 1}
            className={`w-12 h-12 rounded-full flex items-center justify-center bg-[#1B97C9] text-white shadow-md active:scale-95 ${
              activeIndex >= n - 1 ? "opacity-40" : ""
            }`}
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}
