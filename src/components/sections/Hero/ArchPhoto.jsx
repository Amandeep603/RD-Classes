"use client";

import Image from "next/image";
import { ARCH_SHAPES } from "@/constants/archShapes";

/**
 * ArchPhoto component representing an individual student card.
 * - Solid arch container matching sampled background color (student.bg).
 * - clipPath using clipPathUnits="objectBoundingBox" and normalized SVG path.
 * - LOCKED aspect-ratio per arch so shape never distorts.
 * - Photo box: absolute, left 0, right 0, top photoTop%, bottom 0.
 * - next/image quality 92, object-fill, scale 1.02 inside clip to eliminate edge fringes.
 */
export default function ArchPhoto({
  student,
  isMobile = false,
  className = "",
  style = {},
}) {
  if (!student) return null;

  // Determine bottom variant:
  // For B and D on mobile, use "round", on desktop use "cut"
  const variant =
    isMobile && (student.cardKey === "B" || student.cardKey === "D")
      ? "round"
      : student.bottom || (student.cardKey === "E" ? "slanted" : "round");

  const clipId = `arch-clip-${student.cardKey}-${variant}`;
  const pathD =
    ARCH_SHAPES[student.cardKey]?.[variant] ||
    ARCH_SHAPES[student.cardKey]?.round ||
    ARCH_SHAPES[student.cardKey]?.cut ||
    ARCH_SHAPES[student.cardKey]?.slanted;

  return (
    <div
      className={`relative w-full h-full select-none ${className}`}
      style={{
        aspectRatio: `${student.aspect}`,
        ...style,
      }}
    >
      {/* SVG clip-path definition */}
      <svg
        className="absolute w-0 h-0 pointer-events-none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={pathD} />
          </clipPath>
        </defs>
      </svg>

      {/* Clipped Container */}
      <div
        className="relative w-full h-full lg:hover:scale-[1.03] transition-transform duration-300"
        style={{
          backgroundColor: student.bg,
          clipPath: `url(#${clipId})`,
          WebkitClipPath: `url(#${clipId})`,
        }}
      >
        {/* Photo Box: absolute, left 0, right 0, top photoTop%, bottom 0 */}
        <div
          className="absolute left-0 right-0 bottom-0 overflow-hidden"
          style={{
            top: `${student.photoTop}%`,
          }}
        >
          <div className="relative w-full h-full scale-[1.02] transform-gpu">
            <Image
              src={student.src}
              alt={student.alt}
              fill
              priority
              quality={92}
              sizes="(max-width: 640px) 30vw, (max-width: 1024px) 160px, 220px"
              className="object-fill select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
