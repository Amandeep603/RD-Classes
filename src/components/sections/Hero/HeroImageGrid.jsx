"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_STUDENTS } from "@/constants/heroStudents";
import ArchPhoto from "./ArchPhoto";

/**
 * HeroImageGrid component for RD Classes Hero section.
 * - Desktop: Aspect-ratio 653/815, arches positioned with exact gaps.
 *   Parallax on mouse move (+-10px in opposite directions, rAF-throttled, pointer:fine).
 * - Mobile: Aspect-ratio 440/460, 3 columns with 10px gap, all 5 arches fully visible with semicircular tops.
 * - Staggered entrance animation (0.1s stagger). Float loop only on >=768px.
 */
export default function HeroImageGrid({ isDesktop = false, className = "", style = {} }) {
  const studentA = HERO_STUDENTS.find((s) => s.cardKey === "A");
  const studentB = HERO_STUDENTS.find((s) => s.cardKey === "B");
  const studentC = HERO_STUDENTS.find((s) => s.cardKey === "C");
  const studentD = HERO_STUDENTS.find((s) => s.cardKey === "D");
  const studentE = HERO_STUDENTS.find((s) => s.cardKey === "E");

  const [mouseOffsets, setMouseOffsets] = useState({ col1: 0, col2: 0, col3: 0 });
  const containerRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    if (!isDesktop) return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e) => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const ny = (e.clientY / window.innerHeight) - 0.5; // -0.5 to 0.5
        setMouseOffsets({
          col1: ny * 10,
          col2: -ny * 10,
          col3: ny * 8,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isDesktop]);

  if (isDesktop) {
    return (
      <div
        ref={containerRef}
        className={`relative select-none ${className}`}
        style={{
          aspectRatio: "653 / 815",
          ...style,
        }}
        aria-label="Student showcase gallery"
      >
        {/* Column 1: Arch A (Top) & Arch B (Bottom) */}
        <div
          className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${mouseOffsets.col1}px)` }}
        >
          {/* 1. Arch A (Col 1 Top, Sky Blue) */}
          <div
            className="absolute pointer-events-auto animate-arch-card [animation-delay:0s]"
            style={{
              left: "0.15%",
              top: "6.75%",
              width: "30.32%",
              height: "63.19%",
            }}
          >
            <div
              className="w-full h-full animate-arch-float-desktop"
              style={{ animationDelay: "0s", animationDuration: "7s" }}
            >
              <ArchPhoto student={studentA} />
            </div>
          </div>

          {/* 2. Arch B (Col 1 Bottom, Orange, gap >= 18u below A) */}
          {studentB && (
            <div
              className="absolute pointer-events-auto animate-arch-card [animation-delay:0.1s]"
              style={{
                left: "0.15%",
                top: "73%",
                width: "30.32%",
                height: "42%",
              }}
            >
              <div
                className="w-full h-full animate-arch-float-desktop"
                style={{ animationDelay: "1.5s", animationDuration: "8.5s" }}
              >
                <ArchPhoto student={studentB} />
              </div>
            </div>
          )}
        </div>

        {/* Column 2: Arch C (Top) & Arch D (Bottom) */}
        <div
          className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${mouseOffsets.col2}px)` }}
        >
          {/* 3. Arch C (Col 2 Top, Yellow, starts highest) */}
          <div
            className="absolute pointer-events-auto animate-arch-card [animation-delay:0.2s]"
            style={{
              left: "33.69%",
              top: "0%",
              width: "31.09%",
              height: "48.83%",
            }}
          >
            <div
              className="w-full h-full animate-arch-float-desktop"
              style={{ animationDelay: "3s", animationDuration: "6.5s" }}
            >
              <ArchPhoto student={studentC} />
            </div>
          </div>

          {/* 4. Arch D (Col 2 Bottom, Teal, gap >= 18u below C) */}
          {studentD && (
            <div
              className="absolute pointer-events-auto animate-arch-card [animation-delay:0.3s]"
              style={{
                left: "33.69%",
                top: "52%",
                width: "31.09%",
                height: "46%",
              }}
            >
              <div
                className="w-full h-full animate-arch-float-desktop"
                style={{ animationDelay: "4.5s", animationDuration: "9s" }}
              >
                <ArchPhoto student={studentD} />
              </div>
            </div>
          )}
        </div>

        {/* Column 3: Arch E (Col 3, Orange Slanted) */}
        <div
          className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${mouseOffsets.col3}px)` }}
        >
          <div
            className="absolute pointer-events-auto animate-arch-card [animation-delay:0.4s]"
            style={{
              left: "68.30%",
              top: "6.38%",
              width: "31.70%",
              height: "66.38%",
            }}
          >
            <div
              className="w-full h-full animate-arch-float-desktop"
              style={{ animationDelay: "2s", animationDuration: "7.5s" }}
            >
              <ArchPhoto student={studentE} isSlanted={true} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile / Tablet Cluster Layout (<1024px): All 5 arches fully visible with semicircular tops
  return (
    <div
      className={`relative select-none w-full max-w-[440px] ${className}`}
      style={{
        aspectRatio: "440 / 460",
        ...style,
      }}
      aria-label="Student showcase gallery"
    >
      {/* Column 1: Arch A (Top 62%) */}
      <div
        className="absolute animate-arch-card [animation-delay:0s]"
        style={{
          left: "0%",
          top: "0%",
          width: "calc((100% - 20px) / 3)",
          height: "62%",
        }}
      >
        <div
          className="w-full h-full md:animate-arch-float-mobile"
          style={{ animationDelay: "0s", animationDuration: "7s" }}
        >
          <ArchPhoto student={studentA} />
        </div>
      </div>

      {/* Column 1: Arch B (Bottom 33%, starts 66%) */}
      {studentB && (
        <div
          className="absolute animate-arch-card [animation-delay:0.1s]"
          style={{
            left: "0%",
            top: "66%",
            width: "calc((100% - 20px) / 3)",
            height: "33%",
          }}
        >
          <div
            className="w-full h-full md:animate-arch-float-mobile"
            style={{ animationDelay: "1.5s", animationDuration: "8.5s" }}
          >
            <ArchPhoto student={studentB} />
          </div>
        </div>
      )}

      {/* Column 2: Arch C (Top 52%) */}
      <div
        className="absolute animate-arch-card [animation-delay:0.2s]"
        style={{
          left: "calc((100% - 20px) / 3 + 10px)",
          top: "0%",
          width: "calc((100% - 20px) / 3)",
          height: "52%",
        }}
      >
        <div
          className="w-full h-full md:animate-arch-float-mobile"
          style={{ animationDelay: "3s", animationDuration: "6.5s" }}
        >
          <ArchPhoto student={studentC} />
        </div>
      </div>

      {/* Column 2: Arch D (Bottom 40%, starts 58%) */}
      {studentD && (
        <div
          className="absolute animate-arch-card [animation-delay:0.3s]"
          style={{
            left: "calc((100% - 20px) / 3 + 10px)",
            top: "58%",
            width: "calc((100% - 20px) / 3)",
            height: "40%",
          }}
        >
          <div
            className="w-full h-full md:animate-arch-float-mobile"
            style={{ animationDelay: "4.5s", animationDuration: "9s" }}
          >
            <ArchPhoto student={studentD} />
          </div>
        </div>
      )}

      {/* Column 3: Arch E (Top 60%, slanted bottom kept, semicircular top guaranteed) */}
      <div
        className="absolute animate-arch-card [animation-delay:0.4s]"
        style={{
          left: "calc(((100% - 20px) / 3 + 10px) * 2)",
          top: "0%",
          width: "calc((100% - 20px) / 3)",
          height: "60%",
        }}
      >
        <div
          className="w-full h-full md:animate-arch-float-mobile"
          style={{ animationDelay: "2s", animationDuration: "7.5s" }}
        >
          <ArchPhoto student={studentE} isSlanted={true} />
        </div>
      </div>
    </div>
  );
}
