import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DynamicIcon } from "@/lib/icons";

/**
 * Program Card for Section A.
 * Uses [data-theme] CSS custom properties from src/styles/themes.css.
 * Entire card is one accessible link.
 */
export default function ProgramCard({ program, index = 0 }) {
  return (
    <article
      data-theme={program.theme}
      style={{
        "--i": index,
      }}
      className="relative flex flex-col justify-between select-none border rounded-[20px] lg:rounded-[calc(var(--su)*20)] p-[24px] lg:px-[calc(var(--su)*30)] lg:pt-[calc(var(--su)*24)] lg:pb-[calc(var(--su)*28)] min-h-[340px] lg:min-h-[calc(var(--su)*342)] bg-[var(--card-bg)] border-[var(--card-border)] shadow-[var(--card-shadow)] transition-all duration-300 ease-out hover:-translate-y-[8px] hover:shadow-[0_22px_44px_-8px_rgba(15,23,42,0.18)] focus-within:ring-2 focus-within:ring-[#FFC21A] focus-within:ring-offset-2 group"
    >
      <div>
        {/* Top Row: 64u circle icon (left) & 20u number (right) */}
        <div className="flex items-start justify-between w-full">
          {/* Icon Circle 64u */}
          <div className="flex items-center justify-center rounded-full w-[54px] h-[54px] lg:w-[calc(var(--su)*64)] lg:h-[calc(var(--su)*64)] shrink-0 bg-[var(--icon-bg)] text-[var(--icon-color)] shadow-sm transition-transform duration-300 group-hover:scale-108 group-hover:-rotate-6">
            <DynamicIcon
              name={program.icon}
              className="w-6 h-6 lg:w-[calc(var(--su)*28)] lg:h-[calc(var(--su)*28)]"
              strokeWidth={2}
              fill={program.icon === "CirclePlay" ? "currentColor" : "none"}
              aria-hidden="true"
            />
          </div>

          {/* Number 20u */}
          <span className="font-bold text-[18px] lg:text-[calc(var(--su)*20)] tracking-tight text-[var(--number-color)]">
            {program.number}
          </span>
        </div>

        {/* Accent Line: 16x3u below icon (margin-top 18u) */}
        <div
          className="w-[16px] lg:w-[calc(var(--su)*16)] h-[3px] rounded-full mt-[14px] lg:mt-[calc(var(--su)*18)] bg-[var(--accent-color)] shrink-0"
          aria-hidden="true"
        />

        {/* Category Label: 14u, uppercase, letter-spacing 0.14em, weight 700 (margin-top 16u) */}
        <div className="mt-[14px] lg:mt-[calc(var(--su)*16)] font-bold uppercase tracking-[0.14em] text-[12px] lg:text-[calc(var(--su)*14)] text-[var(--eyebrow-color)]">
          {program.label}
        </div>

        {/* Title: 28u, weight 800, single line, tight letter-spacing (margin-top 8u) */}
        <h3 className="mt-[6px] lg:mt-[calc(var(--su)*8)] font-extrabold tracking-tight leading-tight whitespace-nowrap text-[22px] lg:text-[calc(var(--su)*28)] text-[var(--title-color)]">
          {program.title}
        </h3>

        {/* Description: 17u, line-height 1.6, two lines (margin-top 10u) */}
        <p className="mt-[8px] lg:mt-[calc(var(--su)*10)] leading-[1.6] line-clamp-2 text-[14px] lg:text-[calc(var(--su)*17)] text-[var(--desc-color)]">
          {program.description}
        </p>
      </div>

      {/* Footer Row: "Explore Course" on left + 46u Arrow Button on right */}
      <div className="mt-[20px] lg:mt-[calc(var(--su)*24)] pt-[10px] flex items-center justify-between w-full">
        <span className="font-bold text-[15px] lg:text-[calc(var(--su)*16)] tracking-tight text-[var(--footer-text-color)]">
          Explore Course
        </span>

        {/* Circular Arrow Button (46u circle) */}
        <div className="flex items-center justify-center rounded-full w-[40px] h-[40px] lg:w-[calc(var(--su)*46)] lg:h-[calc(var(--su)*46)] shrink-0 bg-[var(--arrow-bg)] text-[var(--arrow-color)] group-hover:bg-[var(--arrow-hover-bg)] group-hover:text-[var(--arrow-hover-color)] transition-all duration-300 group-hover:scale-106">
          <ArrowRight
            className="w-4 h-4 lg:w-[calc(var(--su)*20)] lg:h-[calc(var(--su)*20)] transition-transform duration-300 group-hover:translate-x-[calc(var(--su)*3)]"
            strokeWidth={2.2}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Stretched Link covering the entire card */}
      <Link
        href={program.href}
        className="absolute inset-0 z-10 rounded-[inherit] focus:outline-none"
        aria-label={`${program.title} - Explore Course`}
      >
        <span className="sr-only">Explore {program.title}</span>
      </Link>
    </article>
  );
}
