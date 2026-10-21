"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DynamicIcon } from "@/lib/icons";

/**
 * Program Card for Section A.
 * Exact replica of programs.png (275u x 342u canvas, 20u radius).
 * CSS container for proportional cqw typography.
 * Direct CSS theme classes guarantee non-transparent colors and borders.
 * Title: white-space: nowrap, NO ellipsis, clamp(17px, 7.8cqw, 26px) so all titles fit with spare.
 * 3D tilt on pointer move (max 6deg) + glare gradient.
 */
export default function ProgramCard({ program, index = 0 }) {
  const isNavy = program.theme === "navy";
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5; // -0.5 to 0.5
    const py = y / rect.height - 0.5;
    setTilt({
      rx: -py * 12, // max 6 deg
      ry: px * 12,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0, glareX: 50, glareY: 50 });
  };

  return (
    <article
      data-theme={program.theme}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        "--i": index,
        containerType: "inline-size",
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(-8px)`
          : undefined,
      }}
      className="program-card relative flex flex-col justify-between select-none rounded-[20px] lg:rounded-[calc(var(--su,1px)*20)] overflow-hidden w-full transition-all duration-300 ease-out hover:shadow-xl focus-within:ring-2 focus-within:ring-[#FFC21A] focus-within:ring-offset-2 group"
    >
      {/* 3D Tilt Glare Overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.18) 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Navy Card Slow Light Sheen Sweep */}
      {isNavy && (
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden z-0"
          aria-hidden="true"
        >
          <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent navy-sheen-sweep" />
        </div>
      )}

      {/* Inner Content with Exact Padding: top 24u, left 28u, right 20u, bottom 21u */}
      <div
        className="relative z-10 flex flex-col justify-between h-full"
        style={{
          paddingTop: "clamp(18px, 8.7cqw, calc(var(--su, 1px) * 24))",
          paddingLeft: "clamp(18px, 10.1cqw, calc(var(--su, 1px) * 28))",
          paddingRight: "clamp(14px, 7.2cqw, calc(var(--su, 1px) * 20))",
          paddingBottom: "clamp(16px, 7.6cqw, calc(var(--su, 1px) * 21))",
        }}
      >
        <div>
          {/* Top Row: 64u circle icon (left) & 18u number (right, margin-top 10u) */}
          <div className="flex items-start justify-between w-full">
            {/* 64u Icon Circle with 28u icon (stroke 1.8) */}
            <div
              className="program-card-icon flex items-center justify-center rounded-full shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-108 group-hover:-rotate-6"
              style={{
                width: "clamp(48px, 23.2cqw, calc(var(--su, 1px) * 64))",
                height: "clamp(48px, 23.2cqw, calc(var(--su, 1px) * 64))",
              }}
            >
              <DynamicIcon
                name={program.icon}
                strokeWidth={1.8}
                className={program.icon === "Play" ? "ml-0.5" : ""}
                style={{
                  width: "clamp(22px, 10.2cqw, calc(var(--su, 1px) * 28))",
                  height: "clamp(22px, 10.2cqw, calc(var(--su, 1px) * 28))",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Number: 18u / 700 (margin-top 10u) */}
            <span
              className="program-card-number font-bold tracking-tight text-right select-none"
              style={{
                marginTop: "clamp(6px, 3.6cqw, calc(var(--su, 1px) * 10))",
                fontSize: "clamp(14px, 6.5cqw, calc(var(--su, 1px) * 18))",
              }}
            >
              {program.number}
            </span>
          </div>

          {/* Accent Line: 18u x 3u, radius 2u (margin-top 17u) */}
          <div
            className="program-card-accent-line rounded-[2px] shrink-0"
            style={{
              width: "clamp(14px, 6.5cqw, calc(var(--su, 1px) * 18))",
              height: "3px",
              marginTop: "clamp(12px, 6.2cqw, calc(var(--su, 1px) * 17))",
            }}
            aria-hidden="true"
          />

          {/* Category Label: 13u / 700 / uppercase / letter-spacing 0.14em (margin-top 14u, Anchor 141u) */}
          <div
            className="program-card-label font-bold uppercase select-none"
            style={{
              letterSpacing: "0.14em",
              marginTop: "clamp(10px, 5.1cqw, calc(var(--su, 1px) * 14))",
              fontSize: "clamp(10.5px, 4.7cqw, calc(var(--su, 1px) * 13))",
            }}
          >
            {program.label}
          </div>

          {/* Title: 24.2u / 800 / letter-spacing -0.02em / white-space nowrap, NO ellipsis */}
          <h3
            className="program-card-title font-extrabold tracking-[-0.02em] whitespace-nowrap overflow-visible"
            style={{
              marginTop: "clamp(8px, 5.1cqw, calc(var(--su, 1px) * 14))",
              fontSize: "clamp(17px, 7.8cqw, 26px)",
            }}
            title={program.title}
          >
            {program.title}
          </h3>

          {/* Description: 16.9u / line-height 1.7 (27u pitch) / 400 (margin-top 12u, Anchor 177u) */}
          <p
            className="program-card-desc font-normal line-clamp-2"
            style={{
              marginTop: "clamp(8px, 4.3cqw, calc(var(--su, 1px) * 12))",
              fontSize: "clamp(12px, 6.1cqw, calc(var(--su, 1px) * 16.9))",
              lineHeight: 1.68,
            }}
          >
            {program.description}
          </p>
        </div>

        {/* Footer: "Explore Course" 15.3u / 700 (Anchor 113u) + 46u Arrow Button */}
        <div
          className="flex items-center justify-between w-full"
          style={{
            marginTop: "clamp(16px, 7.3cqw, calc(var(--su, 1px) * 20))",
          }}
        >
          <span
            className="program-card-footer-text font-bold tracking-tight select-none"
            style={{
              fontSize: "clamp(12px, 5.9cqw, calc(var(--su, 1px) * 16.2))",
            }}
          >
            Explore Course
          </span>

          {/* 46u Circular Arrow Button (ArrowRight 20u, stroke 2.2) */}
          <div
            className="program-card-arrow-btn flex items-center justify-center rounded-full shrink-0 shadow-xs transition-all duration-300 group-hover:scale-106"
            style={{
              width: "clamp(36px, 16.7cqw, calc(var(--su, 1px) * 46))",
              height: "clamp(36px, 16.7cqw, calc(var(--su, 1px) * 46))",
            }}
          >
            <ArrowRight
              strokeWidth={2.2}
              className="transition-transform duration-300 group-hover:translate-x-[3px]"
              style={{
                width: "clamp(16px, 7.2cqw, calc(var(--su, 1px) * 20))",
                height: "clamp(16px, 7.2cqw, calc(var(--su, 1px) * 20))",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Accessible Stretched Link covering the entire card */}
      <Link
        href={program.href}
        className="absolute inset-0 z-20 rounded-[inherit] focus:outline-none"
        aria-label={`${program.title} - Explore Course`}
      >
        <span className="sr-only">Explore {program.title}</span>
      </Link>
    </article>
  );
}
