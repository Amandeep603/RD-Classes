"use client";

import { useEffect, useRef, useState } from "react";
import DevicesIllustration from "./DevicesIllustration";
import FloatingChip from "./FloatingChip";
import { PORTAL_DATA } from "@/constants/portal";

/**
 * DeviceShowcase component for Section F: "Student Learning Portal".
 * Rebuilt according to Fix Pass v3.4 specification:
 * - Desktop: aspect-ratio 810/555, max-width calc(var(--su) * 810), viewBox "0 0 810 555"
 * - Mobile/tablet (<1100px): aspect-ratio 740/615, max-width 640px, viewBox "40 -60 740 615"
 * - Pointer-parallax on desktop (pointer:fine only, rAF-throttled, translates up to 8u, tilts up to 3deg)
 * - 3 Floating badge chips positioned via % of container
 */
export default function DeviceShowcase() {
  const containerRef = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, tiltX: 0, tiltY: 0 });
  const { chips } = PORTAL_DATA;

  useEffect(() => {
    // Only run pointer parallax on desktop with fine pointer and full motion
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isDesktop = window.matchMedia("(min-width: 1100px)").matches;
    const forceMotion = document.documentElement.dataset.motion !== "reduce";
    if (!isFinePointer || !isDesktop || !forceMotion) return;

    let rafId = null;

    const handleMouseMove = (e) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;

        // Relative coordinates from -1 to 1
        const relX = (clientX / rect.width - 0.5) * 2;
        const relY = (clientY / rect.height - 0.5) * 2;

        const clampedX = Math.max(-1, Math.min(1, relX));
        const clampedY = Math.max(-1, Math.min(1, relY));

        setTransform({
          x: clampedX * 8, // up to 8u translation
          y: clampedY * 8,
          tiltX: clampedY * -3, // up to 3deg tilt
          tiltY: clampedX * 3,
        });

        rafId = null;
      });
    };

    const handleMouseLeave = () => {
      setTransform({ x: 0, y: 0, tiltX: 0, tiltY: 0 });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove, { passive: true });
      container.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full mx-auto select-none max-w-[640px] aspect-[740/615] min-[1100px]:max-w-[calc(var(--su,1px)*810)] min-[1100px]:aspect-[810/555]"
      style={{
        containerType: "inline-size",
      }}
    >
      <span className="sr-only">
        Interactive preview of RD Classes online student portal running HD lecture video player on laptop and mobile phone
      </span>

      {/* SVG Devices Illustration with Parallax Group */}
      <div
        className="w-full h-full transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) translate3d(${transform.x}px, ${transform.y}px, 0) rotateX(${transform.tiltX}deg) rotateY(${transform.tiltY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Desktop ViewBox (>=1100px) */}
        <div className="hidden min-[1100px]:block w-full h-full">
          <DevicesIllustration viewBox="0 0 810 555" />
        </div>

        {/* Mobile/Tablet ViewBox (<1100px) */}
        <div className="block min-[1100px]:hidden w-full h-full">
          <DevicesIllustration viewBox="40 -60 740 615" />
        </div>
      </div>

      {/* 3 Floating Badge Chips */}
      {/* Chip 1: PDF Notes */}
      {chips[0] && (
        <FloatingChip
          chip={chips[0]}
          className="animate-chip-float-1"
          style={{
            top: "var(--chip-1-top, 5.4%)",
            left: "var(--chip-1-left, 21.4%)",
          }}
        />
      )}

      {/* Chip 2: Watch at 1x – 2x */}
      {chips[1] && (
        <FloatingChip
          chip={chips[1]}
          className="animate-chip-float-2"
          style={{
            top: "var(--chip-2-top, 5.6%)",
            left: "var(--chip-2-left, 72%)",
          }}
        />
      )}

      {/* Chip 3: Access on All Devices */}
      {chips[2] && (
        <FloatingChip
          chip={chips[2]}
          className="animate-chip-float-3"
          style={{
            top: "var(--chip-3-top, 85.9%)",
            left: "var(--chip-3-left, 16.3%)",
          }}
        />
      )}
    </div>
  );
}
