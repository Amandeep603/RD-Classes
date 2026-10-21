import React from "react";
import { Star } from "lucide-react";

/**
 * TestimonialCard component.
 * Dimensions: ~392u x 404u, radius 22u, container query for text sizes.
 */
export default function TestimonialCard({ item }) {
  const isNavy = item.tone === "navy";
  const isBlue = item.tone === "blue";
  const isYellow = item.tone === "yellow";

  const cardBg = isNavy
    ? "var(--surface-h-navy-bg, linear-gradient(180deg, #0A3150 0%, #082B47 100%))"
    : isBlue
    ? "var(--surface-h-blue-bg, #D8ECFB)"
    : "var(--surface-h-yellow-bg, #FFEEBD)";

  const cardBorder = isNavy
    ? "1px solid rgba(255, 255, 255, 0.12)"
    : isBlue
    ? "1px solid var(--surface-h-blue-border, #B8DBF3)"
    : "1px solid var(--surface-h-yellow-border, #F0D590)";

  const quoteBadgeBg = isNavy ? "#0F6A9E" : isBlue ? "#BFE0F5" : "#FFE3A3";
  const quoteBadgeGlyph = isNavy ? "#A8D8F0" : isBlue ? "#1B6FA8" : "#F59E0B";

  const textColor = isNavy ? "#E8F0F8" : "#1F2937";
  const dividerColor = isNavy
    ? "rgba(255, 255, 255, 0.14)"
    : "rgba(15, 23, 42, 0.12)";

  const avatarBg = isNavy ? "#0E78A8" : isBlue ? "#BFE3F5" : "#FFE08A";
  const avatarText = isNavy ? "#FFFFFF" : "#0B1B3B";

  const nameColor = isNavy ? "#FFFFFF" : "#0B1B3B";
  const metaColor = isNavy ? "#9FB4C8" : "#525D6D";

  return (
    <article
      data-testimonial-card="true"
      className="relative flex flex-col justify-between w-full h-full rounded-[22px] select-none transition-all duration-300 hover:-translate-y-1 group"
      style={{
        background: cardBg,
        border: cardBorder,
        padding: "clamp(20px, 2.5vw, calc(var(--su, 1px) * 28)) clamp(20px, 2.8vw, calc(var(--su, 1px) * 30))",
        boxShadow: "0 10px 30px -15px rgba(15, 23, 42, 0.08)",
      }}
    >
      {/* Top Row: Quote Circle (66u) + 5 Stars (21u) */}
      <div className="flex items-center justify-between w-full mb-4">
        {/* Quote Icon Circle */}
        <div
          className="rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs"
          style={{
            width: "clamp(48px, 5.5vw, calc(var(--su, 1px) * 66))",
            height: "clamp(48px, 5.5vw, calc(var(--su, 1px) * 66))",
            backgroundColor: quoteBadgeBg,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
            style={{ color: quoteBadgeGlyph }}
            aria-hidden="true"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
        </div>

        {/* 5 Stars */}
        <div role="img" className="flex items-center gap-1" aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-[#FFB800] text-[#FFB800] shrink-0"
              style={{
                width: "calc(var(--su, 1px) * 21)",
                height: "calc(var(--su, 1px) * 21)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Quote Text (20u / 1.38 / 400, up to 7-8 lines) */}
      <p
        className="font-normal leading-[1.38] line-clamp-8 flex-1"
        style={{
          fontSize: "clamp(15px, 1.8vw, calc(var(--su, 1px) * 20))",
          color: textColor,
        }}
      >
        &ldquo;{item.quote}&rdquo;
      </p>

      {/* Bottom Area: Divider + Author Row */}
      <div className="mt-auto pt-4">
        {/* Divider */}
        <div
          className="w-full h-[1px] mb-4"
          style={{ backgroundColor: dividerColor }}
          aria-hidden="true"
        />

        {/* Author Row */}
        <div className="flex items-center gap-3.5">
          {/* Avatar Circle with Initial */}
          <div
            className="rounded-full flex items-center justify-center font-extrabold shrink-0 shadow-xs"
            style={{
              width: "clamp(48px, 5.5vw, calc(var(--su, 1px) * 66))",
              height: "clamp(48px, 5.5vw, calc(var(--su, 1px) * 66))",
              backgroundColor: avatarBg,
              color: avatarText,
              fontSize: "clamp(22px, 2.5vw, calc(var(--su, 1px) * 30))",
            }}
          >
            {item.initial}
          </div>

          <div className="flex flex-col min-w-0">
            <span
              className="font-bold truncate"
              style={{
                fontSize: "clamp(16px, 1.8vw, calc(var(--su, 1px) * 20))",
                color: nameColor,
              }}
            >
              {item.name}
            </span>
            <span
              className="font-medium truncate mt-0.5"
              style={{
                fontSize: "clamp(13px, 1.6vw, calc(var(--su, 1px) * 17.5))",
                color: metaColor,
              }}
            >
              {item.meta}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
