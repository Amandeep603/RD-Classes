"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Camera } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import InViewSection from "@/components/ui/InViewSection";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryStrip from "./GalleryStrip";
import { GALLERY_ITEMS } from "@/constants/gallery";

export default function GallerySection() {
  const stripRef = useRef(null);
  const [scrollState, setScrollState] = useState({ atStart: true, atEnd: false });

  const handlePrev = () => {
    const strip = stripRef.current;
    if (!strip) return;
    const cardW = strip.firstElementChild?.clientWidth || 200;
    strip.scrollBy({ left: -(cardW * 2), behavior: "smooth" });
  };

  const handleNext = () => {
    const strip = stripRef.current;
    if (!strip) return;
    const cardW = strip.firstElementChild?.clientWidth || 200;
    strip.scrollBy({ left: cardW * 2, behavior: "smooth" });
  };

  return (
    <InViewSection
      id="gallery"
      aria-label="Classroom and celebrations gallery"
      className="relative w-full overflow-hidden text-[#0F172A] scroll-mt-20 [isolation:isolate]"
      style={{
        paddingTop: "clamp(48px, 5.5vw, calc(var(--su, 1px) * 64))",
        paddingBottom: "clamp(52px, 6vw, calc(var(--su, 1px) * 72))",
        "--su": "min(100vw / 1600, 1px)",
      }}
    >
      <div className="relative z-10 w-full max-w-[1600px] lg:max-w-[calc(var(--su,1px)*1600)] mx-auto px-4 lg:px-0">
        <Reveal>
          {/* Header Row: Centered title with desktop right-aligned arrow buttons */}
          <div className="relative w-full flex items-center justify-between mb-8 lg:mb-[calc(var(--su,1px)*40)]">
            {/* Spacer for symmetrical centering on desktop */}
            <div className="hidden lg:block w-[calc(var(--su,1px)*120)] shrink-0" aria-hidden="true" />

            {/* Centered Heading Content */}
            <div className="flex flex-col items-center text-center flex-1 min-w-0">
              <SectionBadge
                text="LIFE AT RD CLASSES"
                icon={Camera}
                className="mb-4"
                style={{
                  width: "clamp(160px, 18vw, calc(var(--su, 1px) * 184))",
                  height: "clamp(30px, 3.5vw, calc(var(--su, 1px) * 35))",
                }}
              />

              <SectionHeading
                text="Inside Our"
                highlight="Classroom & Celebrations"
                highlightTone="warm"
                markerHeight="55%"
                fontSize={52}
                align="center"
              />

              {/* Subtext (gap 18u, 2 lines desktop, ANCHOR line 1 761u) */}
              <p
                className="mt-3 lg:mt-[calc(var(--su,1px)*18)] text-[#6B7686] font-normal leading-[1.4] text-balance max-w-full lg:max-w-[calc(var(--su,1px)*820)]"
                style={{ fontSize: "clamp(15px, 2vw, calc(var(--su, 1px) * 19))" }}
              >
                <span className="lg:inline-block">
                  Real snapshots from daily lecture discussions, whiteboard problem solving, and annual
                </span>
                <span className="lg:block">prize distributions.</span>
              </p>
            </div>

            {/* Desktop Navigation Arrows (at x1438 and x1502 at y190) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0 self-end mb-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous gallery snapshots"
                disabled={scrollState.atStart}
                className={`rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  scrollState.atStart ? "opacity-40 cursor-not-allowed" : "hover:scale-105 active:scale-95"
                }`}
                style={{
                  width: "calc(var(--su, 1px) * 48)",
                  height: "calc(var(--su, 1px) * 48)",
                  backgroundColor: "#D6ECFA",
                }}
              >
                <ChevronLeft className="w-5 h-5 text-[#0F172A] stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next gallery snapshots"
                disabled={scrollState.atEnd}
                className={`rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md ${
                  scrollState.atEnd ? "opacity-40 cursor-not-allowed" : "hover:scale-105 active:scale-95"
                }`}
                style={{
                  width: "calc(var(--su, 1px) * 54)",
                  height: "calc(var(--su, 1px) * 54)",
                  backgroundColor: "#0F6A8F",
                }}
              >
                <ChevronRight className="w-6 h-6 text-white stroke-[2.5]" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Full-bleed 3D Concave Cylinder Strip */}
      <div className="w-full">
        <GalleryStrip
          items={GALLERY_ITEMS}
          stripRef={stripRef}
          onScrollStateChange={setScrollState}
        />
      </div>

      {/* Bottom Area: Mobile Navigation + CTA Button */}
      <div className="relative z-10 w-full max-w-[1600px] lg:max-w-[calc(var(--su,1px)*1600)] mx-auto px-4 mt-6 lg:mt-[calc(var(--su,1px)*30)] flex flex-col items-center justify-center gap-4">
        {/* Mobile Navigation Arrows */}
        <div className="flex lg:hidden items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous gallery snapshots"
            disabled={scrollState.atStart}
            className={`w-11 h-11 rounded-full flex items-center justify-center bg-[#D6ECFA] active:scale-95 ${
              scrollState.atStart ? "opacity-40" : ""
            }`}
          >
            <ChevronLeft className="w-5 h-5 text-[#0F172A] stroke-[2.5]" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next gallery snapshots"
            disabled={scrollState.atEnd}
            className={`w-12 h-12 rounded-full flex items-center justify-center bg-[#0F6A8F] text-white shadow-md active:scale-95 ${
              scrollState.atEnd ? "opacity-40" : ""
            }`}
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* CTA: View Full Classroom Gallery */}
        <Link
          href="/gallery"
          className="group inline-flex items-center justify-center gap-2 rounded-full font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            width: "clamp(250px, 75vw, calc(var(--su, 1px) * 294))",
            height: "clamp(44px, 5vw, calc(var(--su, 1px) * 49))",
            backgroundColor: "#0F6A8F",
            fontSize: "clamp(14px, 1.8vw, calc(var(--su, 1px) * 15))",
            boxShadow: "0 12px 24px -12px rgba(15, 106, 143, 0.5)",
          }}
        >
          <span>View Full Classroom Gallery</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </InViewSection>
  );
}
