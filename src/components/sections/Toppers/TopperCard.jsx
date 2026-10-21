"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import LaurelWreath from "./LaurelWreath";
import {
  SIDE_CARD_PATH_100,
  SIDE_CARD_PATH_UNIT,
  FEATURED_CARD_PATH_100,
  FEATURED_CARD_PATH_UNIT,
} from "@/constants/topperShapes";

/**
 * Animated count-up component for scores
 */
function ScoreCounter({ score, isFeatured }) {
  const [val, setVal] = useState(score);

  useEffect(() => {
    if (!isFeatured) return;
    let startTime;
    const duration = 700;
    const target = Number(score) || 0;

    let animId = requestAnimationFrame((timestamp) => {
      startTime = timestamp;
      setVal(0);
      const step = (t) => {
        const progress = Math.min((t - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setVal(Math.round(ease * target));
        if (progress < 1) {
          animId = requestAnimationFrame(step);
        }
      };
      animId = requestAnimationFrame(step);
    });

    return () => cancelAnimationFrame(animId);
  }, [score, isFeatured]);

  return <span>{isFeatured ? val : score}</span>;
}

/**
 * TopperCard component.
 * Base size: 318u x 428u. Internal elements scale with container queries (cqw).
 */
export default function TopperCard({ topper, isFeatured, onClick }) {
  const isBlue = topper.tone === "blue";
  const clipId = `topper-clip-${topper.id}`;

  const path100 = isFeatured ? FEATURED_CARD_PATH_100 : SIDE_CARD_PATH_100;
  const pathUnit = isFeatured ? FEATURED_CARD_PATH_UNIT : SIDE_CARD_PATH_UNIT;

  const borderColor = isFeatured ? "#FF8A1F" : isBlue ? "#1E4478" : "#7A4219";
  const borderWidth = isFeatured ? 2 : 1.5;

  return (
    <div
      onClick={onClick}
      role="group"
      aria-label={`${topper.name}, score ${topper.score} out of 100`}
      className="relative select-none cursor-pointer [container-type:inline-size] w-full h-full"
    >
      {/* Featured static radial glow behind card (NO blur) */}
      {isFeatured && (
        <div
          className="absolute -inset-[15%] rounded-full pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(249, 115, 22, 0.45) 0%, rgba(249, 115, 22, 0.15) 50%, transparent 75%)",
          }}
          aria-hidden="true"
        />
      )}

      {/* SVG Definitions for clipping and fills */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={pathUnit} />
          </clipPath>
          <linearGradient id={`grad-card-${topper.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            {isBlue ? (
              <>
                <stop offset="0%" stopColor="#0F2A55" />
                <stop offset="60%" stopColor="#0C1D38" />
                <stop offset="100%" stopColor="#0A1426" />
              </>
            ) : isFeatured ? (
              <>
                <stop offset="0%" stopColor="#C65A10" />
                <stop offset="45%" stopColor="#4A230D" />
                <stop offset="100%" stopColor="#0A1426" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#A04E12" />
                <stop offset="50%" stopColor="#3A1F10" />
                <stop offset="100%" stopColor="#0A1426" />
              </>
            )}
          </linearGradient>
        </defs>
      </svg>

      {/* Clipped Body Container */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          clipPath: `url(#${clipId})`,
          WebkitClipPath: `url(#${clipId})`,
        }}
      >
        {/* Card Background SVG with crisp stroke */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          <path
            d={path100}
            fill={`url(#grad-card-${topper.id})`}
            stroke={borderColor}
            strokeWidth={borderWidth}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Golden Laurel Wreath for featured card */}
        {isFeatured && (
          <div
            className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[85%] h-[54%] z-10 pointer-events-none"
            aria-hidden="true"
          >
            <LaurelWreath />
          </div>
        )}

        {/* Student Portrait */}
        <div
          className="absolute top-[13%] left-1/2 -translate-x-1/2 w-[70%] h-[52%] overflow-hidden z-15"
          style={{
            maskImage: "linear-gradient(to bottom, black 72%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 72%, transparent 100%)",
          }}
        >
          <Image
            src={topper.photo}
            alt={topper.alt}
            fill
            sizes="(max-width: 768px) 240px, 320px"
            className="object-cover object-top"
          />
        </div>

        {/* Lower Dark Panel dividing boundary along the V */}
        <div
          className="absolute bottom-0 inset-x-0 h-[40%] bg-[#0A1426] z-18"
          style={{
            clipPath: "polygon(0% 20%, 50% 32%, 100% 20%, 100% 100%, 0% 100%)",
          }}
          aria-hidden="true"
        />

        {/* Score Circle (30% W, centered at 65% H) */}
        <div
          data-score-circle="true"
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center z-25 text-white font-extrabold shadow-md"
          style={{
            top: "65%",
            width: "30cqw",
            height: "30cqw",
            background: isFeatured
              ? "linear-gradient(135deg, #FF9A2E 0%, #F26A0A 100%)"
              : isBlue
              ? "#0E2A52"
              : "#3A1D0B",
            border: isFeatured
              ? "none"
              : `3px solid ${isBlue ? "#2F6FD0" : "#E8841A"}`,
            boxShadow: isFeatured ? "0 4px 16px rgba(249,115,22,0.5)" : "none",
          }}
        >
          <span style={{ fontSize: "9.3cqw", lineHeight: 1 }}>
            <ScoreCounter score={topper.score} isFeatured={isFeatured} />
          </span>
          <span
            style={{
              fontSize: "3.9cqw",
              lineHeight: 1,
              marginTop: "0.8cqw",
              color: "rgba(255,255,255,0.75)",
              fontWeight: 500,
            }}
          >
            /100
          </span>
        </div>

        {/* Name (center at 80% of H) */}
        <div
          className="absolute inset-x-2 text-center text-white font-bold truncate z-25"
          style={{
            top: "78%",
            fontSize: "7.4cqw",
            lineHeight: 1.2,
          }}
        >
          {topper.name}
        </div>

        {/* School (center at 87.5% of H) */}
        <div
          className="absolute inset-x-2 text-center text-[#9AA7BA] font-medium truncate z-25"
          style={{
            top: "86.5%",
            fontSize: "5.3cqw",
            lineHeight: 1.2,
          }}
        >
          {topper.school}
        </div>
      </div>

      {/* Year Pill (top 5.5% of H, 40% W x 7.5% H) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-[3.75%] rounded-full flex items-center justify-center font-bold whitespace-nowrap z-30 shadow-xs"
        style={{
          width: isFeatured ? "38cqw" : "40cqw",
          height: isFeatured ? "8.4cqw" : "7.5cqw",
          background: isFeatured
            ? "linear-gradient(90deg, #FF9A2E, #F26A0A)"
            : isBlue
            ? "rgba(45, 93, 168, 0.25)"
            : "rgba(232, 115, 26, 0.25)",
          border: isFeatured ? "none" : `1px solid ${isBlue ? "#2D5DA8" : "#E8731A"}`,
          color: isFeatured ? "#1A0E05" : "#FFFFFF",
          fontSize: "5.2cqw",
        }}
      >
        {topper.year}
      </div>
    </div>
  );
}
