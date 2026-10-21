"use client";

import { useEffect, useRef, useState } from "react";
import LaptopMockup from "./LaptopMockup";
import PhoneMockup from "./PhoneMockup";
import FloatingChip from "./FloatingChip";
import { PORTAL_DATA } from "@/constants/portal";

/**
 * DeviceShowcase component for Section F: "Student Learning Portal".
 * Responsive container (container-type: inline-size, aspect-ratio 810/555).
 * Contains:
 * - Organic pale-yellow background blob SVG
 * - Laptop mockup with HD video player and blackboard notes
 * - Phone mockup overlapping the right edge
 * - 3 Floating badge chips with subtle desktop float animation
 * - Pointer-parallax on desktop (pointer:fine, max 4deg tilt / 8u shift, rAF throttled)
 */
export default function DeviceShowcase() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { chips } = PORTAL_DATA;

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const forceMotion = document.documentElement.dataset.motion !== "reduce";
    if (!isFinePointer || !forceMotion) return;

    let rafId = null;

    const handleMouseMove = (e) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;

        // Calculate relative coordinates from -1 to 1
        const relX = (clientX / rect.width - 0.5) * 2;
        const relY = (clientY / rect.height - 0.5) * 2;

        setTilt({
          x: Math.max(-1, Math.min(1, relX)) * 3.5, // max 3.5deg
          y: Math.max(-1, Math.min(1, relY)) * -3.5,
        });

        rafId = null;
      });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
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
      className="relative w-full select-none"
      style={{
        containerType: "inline-size",
        aspectRatio: "810 / 555",
      }}
    >
      <span className="sr-only">
        Interactive preview of RD Classes online student portal running HD lecture video player on laptop and mobile phone
      </span>

      {/* Decorative Organic Pale-Yellow Blob SVG behind devices */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full z-0 opacity-95"
        viewBox="0 0 810 555"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="portalBlobGrad" x1="200" y1="60" x2="680" y2="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF3D2" />
            <stop offset="100%" stopColor="#FFE7B0" />
          </linearGradient>
        </defs>
        <path
          d="M 280 80 C 440 30, 620 60, 710 160 C 800 260, 780 400, 680 480 C 580 560, 360 540, 240 480 C 120 420, 120 280, 180 180 C 220 110, 240 90, 280 80 Z"
          fill="url(#portalBlobGrad)"
        />
      </svg>

      {/* Parallax Group (Laptop + Phone) */}
      <div
        className="relative w-full h-full z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Laptop Mockup Box */}
        <div
          className="absolute"
          style={{
            top: "14%",
            left: "6%",
            width: "77%",
            height: "79%",
          }}
        >
          <LaptopMockup />
        </div>

        {/* Phone Mockup Box (overlapping bottom-right) */}
        <div
          className="absolute z-20"
          style={{
            top: "43%",
            right: "1.5%",
            width: "23%",
            height: "53%",
          }}
        >
          <PhoneMockup />
        </div>
      </div>

      {/* Floating Chips */}
      {/* Chip 1: PDF Notes (Top-Left area) */}
      {chips[0] && (
        <FloatingChip
          chip={chips[0]}
          className="animate-chip-float-1"
          style={{
            top: "4%",
            left: "17%",
          }}
        />
      )}

      {/* Chip 2: Watch at 1x – 2x (Top-Right area) */}
      {chips[1] && (
        <FloatingChip
          chip={chips[1]}
          className="animate-chip-float-2"
          style={{
            top: "4%",
            right: "4%",
          }}
        />
      )}

      {/* Chip 3: Access on All Devices (Bottom-Left area) */}
      {chips[2] && (
        <FloatingChip
          chip={chips[2]}
          className="animate-chip-float-3"
          style={{
            bottom: "2%",
            left: "12%",
          }}
        />
      )}
    </div>
  );
}
