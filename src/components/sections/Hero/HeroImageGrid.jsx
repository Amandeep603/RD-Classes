"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_STUDENTS } from "@/constants/heroStudents";
import ArchPhoto from "./ArchPhoto";

/**
 * HeroImageGrid component for RD Classes Hero section.
 * Uniformly scaled composition based on reference cluster box:
 * Canvas 1600x900 basis -> cluster bounds x: 885..1538 (w: 653), y: 85..900 (h: 815).
 * Aspect ratio: 653 / 815.
 *
 * Each arch is positioned with left/top/width/height in % of that 653x815 box on BOTH desktop & mobile:
 * - Arch A (Col 1 Top): left 0%, top 6.63%, width 30.63%, height 61.35%
 * - Arch B (Col 1 Bot): left 0%, top 69.70%, width 30.63%, height 30.30%
 * - Arch C (Col 2 Top): left 33.64%, top 0%, width 31.35%, height 48.70%
 * - Arch D (Col 2 Bot): left 33.64%, top 50.92%, width 31.11%, height 49.08%
 * - Arch E (Col 3):     left 68.10%, top 2.99%, width 32.06%, height 69.79%
 *
 * The only mobile difference: B & D use bottom: "round" so they end cleanly inside the cluster.
 */
export default function HeroImageGrid({ isDesktop = false, className = "", style = {} }) {
  const studentA = HERO_STUDENTS.find((s) => s.cardKey === "A");
  const studentB = HERO_STUDENTS.find((s) => s.cardKey === "B");
  const studentC = HERO_STUDENTS.find((s) => s.cardKey === "C");
  const studentD = HERO_STUDENTS.find((s) => s.cardKey === "D");
  const studentE = HERO_STUDENTS.find((s) => s.cardKey === "E");

  const [mouseOffsets, setMouseOffsets] = useState({ col1: 0, col2: 0, col3: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    if (!isDesktop) return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e) => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const ny = e.clientY / window.innerHeight - 0.5; // -0.5 to 0.5
        setMouseOffsets({
          col1: ny * 8,
          col2: -ny * 8,
          col3: ny * 6,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isDesktop]);

  return (
    <div
      className={`relative select-none ${className}`}
      style={{
        aspectRatio: "653 / 815",
        ...style,
      }}
      aria-label="Student showcase gallery"
    >
      {/* ================= Column 1: Arch A & Arch B ================= */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out"
        style={isDesktop ? { transform: `translateY(${mouseOffsets.col1}px)` } : undefined}
      >
        {/* Arch A (Col 1 Top, Sky Blue) */}
        <div
          className="absolute pointer-events-auto animate-arch-card [animation-delay:0s]"
          style={{
            left: "0%",
            top: "6.63%",
            width: "30.63%",
            height: "61.35%",
          }}
        >
          <div
            className={`w-full h-full ${isDesktop ? "animate-arch-float-desktop" : "md:animate-arch-float-mobile"}`}
            style={{ animationDelay: "0s", animationDuration: "7s" }}
          >
            <ArchPhoto student={studentA} isMobile={!isDesktop} />
          </div>
        </div>

        {/* Arch B (Col 1 Bottom, Orange) */}
        {studentB && (
          <div
            className="absolute pointer-events-auto animate-arch-card [animation-delay:0.1s]"
            style={{
              left: "0%",
              top: "69.70%",
              width: "30.63%",
              height: "30.30%",
            }}
          >
            <div
              className={`w-full h-full ${isDesktop ? "animate-arch-float-desktop" : "md:animate-arch-float-mobile"}`}
              style={{ animationDelay: "1.5s", animationDuration: "8.5s" }}
            >
              <ArchPhoto student={studentB} isMobile={!isDesktop} />
            </div>
          </div>
        )}
      </div>

      {/* ================= Column 2: Arch C & Arch D ================= */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out"
        style={isDesktop ? { transform: `translateY(${mouseOffsets.col2}px)` } : undefined}
      >
        {/* Arch C (Col 2 Top, Yellow, starts highest) */}
        <div
          className="absolute pointer-events-auto animate-arch-card [animation-delay:0.2s]"
          style={{
            left: "33.64%",
            top: "0%",
            width: "31.35%",
            height: "48.70%",
          }}
        >
          <div
            className={`w-full h-full ${isDesktop ? "animate-arch-float-desktop" : "md:animate-arch-float-mobile"}`}
            style={{ animationDelay: "3s", animationDuration: "6.5s" }}
          >
            <ArchPhoto student={studentC} isMobile={!isDesktop} />
          </div>
        </div>

        {/* Arch D (Col 2 Bottom, Teal) */}
        {studentD && (
          <div
            className="absolute pointer-events-auto animate-arch-card [animation-delay:0.3s]"
            style={{
              left: "33.64%",
              top: "50.92%",
              width: "31.11%",
              height: "49.08%",
            }}
          >
            <div
              className={`w-full h-full ${isDesktop ? "animate-arch-float-desktop" : "md:animate-arch-float-mobile"}`}
              style={{ animationDelay: "4.5s", animationDuration: "9s" }}
            >
              <ArchPhoto student={studentD} isMobile={!isDesktop} />
            </div>
          </div>
        )}
      </div>

      {/* ================= Column 3: Arch E ================= */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out"
        style={isDesktop ? { transform: `translateY(${mouseOffsets.col3}px)` } : undefined}
      >
        {/* Arch E (Col 3, Orange Slanted) */}
        <div
          className="absolute pointer-events-auto animate-arch-card [animation-delay:0.4s]"
          style={{
            left: "68.10%",
            top: "2.99%",
            width: "32.06%",
            height: "69.79%",
          }}
        >
          <div
            className={`w-full h-full ${isDesktop ? "animate-arch-float-desktop" : "md:animate-arch-float-mobile"}`}
            style={{ animationDelay: "2s", animationDuration: "7.5s" }}
          >
            <ArchPhoto student={studentE} isMobile={!isDesktop} />
          </div>
        </div>
      </div>
    </div>
  );
}
