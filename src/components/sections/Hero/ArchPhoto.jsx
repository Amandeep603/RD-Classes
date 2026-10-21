"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";

/**
 * Reusable ArchPhoto component representing an individual student card.
 * Features:
 * - Geometric arch container with solid background color (#72C7E8, #FFB800, #FF7A00, #1AA6C8)
 * - Card E slanted bottom-right geometry matching reference via SVG objectBoundingBox clipPath
 * - Image oversized by ~4% inside clip to prevent edge artifact lines
 * - Supports "cutout" and "photo" modes with customizable focusX/focusY
 * - Graceful fallback rendering colored arch + GraduationCap icon if image fails
 *
 * @param {Object} props
 * @param {Object} props.student - Student data object from heroStudents.js
 * @param {boolean} [props.isSlanted=false] - Whether this card has the Card E slanted bottom
 * @param {string} [props.className] - Outer layout class names
 * @param {Object} [props.style] - Inline style overrides
 */
export default function ArchPhoto({
  student,
  isSlanted = false,
  className = "",
  style = {},
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {/* SVG ClipPath for Card E (Rendered only once per DOM if needed) */}
      {isSlanted && (
        <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
          <defs>
            <clipPath id="arch-e-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0.19 A 0.5 0.19 0 0 1 1 0.19 L 1 0.83 L 0.35 1.0 L 0.08 1.0 Q 0 1.0 0 0.95 Z" />
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
          isSlanted
            ? ""
            : "rounded-t-full rounded-b-[24px] lg:rounded-b-[28px]"
        } overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.03] ${className}`}
      >
        {!hasError && student.src ? (
          <div className="relative w-[104%] h-[104%] -left-[2%] -top-[2%]">
            <Image
              src={student.src}
              alt={student.alt}
              fill
              priority
              onError={() => setHasError(true)}
              sizes="(max-width: 640px) 28vw, (max-width: 1024px) 160px, (max-width: 1440px) 180px, 220px"
              style={{
                objectPosition:
                  student.mode === "cutout"
                    ? "center bottom"
                    : `${student.focusX || "50%"} ${student.focusY || "50%"}`,
              }}
              className={`${
                student.mode === "cutout"
                  ? "object-contain object-bottom"
                  : "object-cover"
              } pointer-events-none select-none`}
            />
          </div>
        ) : (
          /* Graceful Fallback if image is missing */
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
