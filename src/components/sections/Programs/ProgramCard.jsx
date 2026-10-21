"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PROGRAM_THEMES } from "@/constants/programThemes";
import { getProgramIcon } from "@/lib/programIcons";

/**
 * Individual Program Card component.
 * - Entire card is one interactive Link with accessible name "<title> - Explore Course".
 * - Applies exact theme colors (sky, navy, white, sun, peach).
 * - Desktop: fluid scaling via --su token with floors; lifts -6u on hover with soft shadow.
 * - Mobile: plain Tailwind / clamp tokens; min-height 330px.
 * - Photo pinned top-right; fallback to themed tint + icon if image fails.
 */
export default function ProgramCard({ program, className = "" }) {
  const [imgError, setImgError] = useState(false);
  const theme = PROGRAM_THEMES[program.theme] || PROGRAM_THEMES.sky;
  const IconComponent = getProgramIcon(program.icon);

  return (
    <Link
      href={program.href}
      aria-label={`${program.title} - Explore Course`}
      className={`group relative flex flex-col justify-between select-none transition-all duration-300 rounded-[18px] lg:rounded-[calc(var(--su)*18)] lg:hover:-translate-y-[calc(var(--su)*6)] lg:hover:shadow-[0_16px_36px_rgba(11,31,58,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A78AD] focus-visible:ring-offset-2 p-[22px] lg:p-[calc(var(--su)*28)] min-h-[330px] lg:min-h-[calc(var(--su)*338)] h-full ${className}`}
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.cardBorder,
        borderWidth: theme.cardBorder !== "transparent" ? "1px" : "0px",
        borderStyle: "solid",
        boxShadow: theme.cardShadow,
      }}
    >
      {/* ================= TOP SECTION ================= */}
      <div>
        {/* Top Row: Left (Number + Line + Icon Tile) | Right (Photo Box) */}
        <div className="flex items-start justify-between w-full">
          {/* Left Column: Number, Line, Icon Tile */}
          <div className="flex flex-col items-start">
            {/* Number */}
            <span
              className="font-bold text-[13px] lg:text-[max(11px,calc(var(--su)*13))] leading-none"
              style={{ color: theme.numberColor }}
            >
              {program.number}
            </span>

            {/* Accent Line under Number */}
            <span
              className="mt-1.5 w-[24px] lg:w-[calc(var(--su)*24)] h-[1.5px] rounded-full shrink-0"
              style={{ backgroundColor: theme.numberLineColor }}
              aria-hidden="true"
            />

            {/* Icon Tile: ~22u below line */}
            <div
              className="mt-3 lg:mt-[calc(var(--su)*20)] flex items-center justify-center rounded-[12px] lg:rounded-[calc(var(--su)*14)] w-[44px] h-[44px] lg:w-[calc(var(--su)*52)] lg:h-[calc(var(--su)*52)] shrink-0 shadow-sm"
              style={{ backgroundColor: theme.iconTileBg }}
            >
              <IconComponent
                className="w-5 h-5 lg:w-[calc(var(--su)*22)] lg:h-[calc(var(--su)*22)]"
                style={{ color: theme.iconColor }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right Column: Photo (~166u x 134u, rounded 12u, object-cover) */}
          <div
            className="relative overflow-hidden rounded-[12px] lg:rounded-[calc(var(--su)*12)] w-[46%] max-w-[150px] lg:max-w-none h-[112px] lg:w-[calc(var(--su)*166)] lg:h-[calc(var(--su)*134)] shrink-0 bg-black/5"
          >
            {!imgError ? (
              <Image
                src={program.image}
                alt={program.imageAlt}
                fill
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 170px"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none select-none"
                onError={() => setImgError(true)}
              />
            ) : (
              /* Fallback Tinted Block with Icon */
              <div
                className="w-full h-full flex flex-col items-center justify-center p-3 text-center"
                style={{ backgroundColor: theme.fallbackTint }}
              >
                <IconComponent
                  className="w-8 h-8 opacity-40 mb-1"
                  style={{ color: theme.titleColor }}
                  aria-hidden="true"
                />
                <span
                  className="text-[10px] font-semibold opacity-60 uppercase tracking-wider"
                  style={{ color: theme.titleColor }}
                >
                  RD Classes
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Category Label: uppercase, letter-spacing 0.14em, margin-top ~26u */}
        <div
          className="mt-5 lg:mt-[calc(var(--su)*24)] font-semibold uppercase tracking-[0.14em] text-[11px] lg:text-[max(11px,calc(var(--su)*12.5))] leading-tight"
          style={{ color: theme.labelColor }}
        >
          {program.label}
        </div>

        {/* Title: 25u (floor 18px), weight 700, margin-top 6u */}
        <h3
          className="mt-1.5 lg:mt-[calc(var(--su)*6)] font-bold text-[22px] lg:text-[max(18px,calc(var(--su)*25))] leading-snug tracking-tight whitespace-nowrap"
          style={{ color: theme.titleColor }}
        >
          {program.title}
        </h3>

        {/* Description: 15.5u (floor 13px), line-height 1.45, max 2 lines, margin-top 8u */}
        <p
          className="mt-2 lg:mt-[calc(var(--su)*8)] text-[14.5px] lg:text-[max(13px,calc(var(--su)*15.5))] leading-[1.45] line-clamp-2"
          style={{ color: theme.descColor }}
        >
          {program.description}
        </p>
      </div>

      {/* ================= FOOTER ROW ================= */}
      <div className="mt-6 lg:mt-[calc(var(--su)*24)] pt-2 flex items-center justify-between w-full border-t border-transparent">
        <span
          className="font-bold text-[14.5px] lg:text-[max(13px,calc(var(--su)*15))] tracking-tight"
          style={{ color: theme.footerTextColor }}
        >
          Explore Course
        </span>

        {/* Circular Arrow Button (44u circle) */}
        <div
          className="flex items-center justify-center rounded-full w-[40px] h-[40px] lg:w-[calc(var(--su)*44)] lg:h-[calc(var(--su)*44)] shrink-0 transition-transform duration-200 group-hover:scale-105"
          style={{ backgroundColor: theme.arrowBg }}
        >
          <ArrowRight
            className="w-4 h-4 lg:w-[calc(var(--su)*18)] lg:h-[calc(var(--su)*18)] transition-transform duration-200 group-hover:translate-x-[calc(var(--su)*3)]"
            style={{ color: theme.arrowColor }}
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}
