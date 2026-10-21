"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";

/**
 * ArchPhoto component representing an individual student card.
 * - Solid arch container matching sampled background color.
 * - Zero borders, zero outlines, zero box-shadows (eliminates edge artifacts).
 * - Clip-path applied on the SAME element that holds the background color and overflow-hidden.
 * - Photo fills card with object-fit: cover, object-position: top center (B & D) or bottom center (A, C, E).
 * - Image scaled 1.06 to guarantee no border lines or dark pixels.
 * - Hover scale 1.03 on desktop.
 */
export default function ArchPhoto({
  student,
  isSlanted = false,
  className = "",
  style = {},
}) {
  const [hasError, setHasError] = useState(false);
  const isTopAnchor = student.anchor === "top";

  return (
    <>
      {/* SVG ClipPath for Card E Slanted Arch */}
      {isSlanted && (
        <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
          <defs>
            <clipPath id="arch-e-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0.18 A 0.5 0.18 0 0 1 1 0.18 L 1 0.82 L 0.35 1.0 L 0.08 1.0 Q 0 1.0 0 0.95 Z" />
            </clipPath>
          </defs>
        </svg>
      )}

      <div
        style={{
          backgroundColor: student.bg,
          ...(isSlanted ? { clipPath: "url(#arch-e-clip)" } : {}),
          ...style,
        }}
        className={`relative w-full h-full ${
          isSlanted ? "" : "rounded-full"
        } overflow-hidden lg:hover:scale-[1.03] transition-transform duration-300 ${className}`}
      >
        {!hasError && student.src ? (
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src={student.src}
              alt={student.alt}
              fill
              priority
              onError={() => setHasError(true)}
              sizes="(max-width: 640px) 30vw, (max-width: 1024px) 160px, 220px"
              className={`w-full h-full object-cover ${
                isTopAnchor ? "object-top" : "object-bottom"
              } select-none pointer-events-none scale-[1.06]`}
            />
          </div>
        ) : (
          /* Graceful Fallback if image fails */
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-black/40">
            <GraduationCap className="w-12 h-12 mb-2 opacity-60" />
            <span className="text-xs font-semibold text-center uppercase tracking-wider text-black/50">
              RD Classes
            </span>
          </div>
        )}
      </div>
    </>
  );
}
