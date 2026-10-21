"use client";

import React from "react";
import {
  MapPin,
  CalendarDays,
  Users,
  BookOpen,
  Trophy,
  Languages,
  Plus,
} from "lucide-react";

const ICON_MAP = {
  MapPin,
  CalendarDays,
  Users,
  BookOpen,
  Trophy,
  Languages,
};

export default function FaqItem({
  item,
  isOpen,
  onToggle,
  onKeyDown,
  headerRef,
}) {
  const IconComponent = ICON_MAP[item.icon] || MapPin;
  const isBlue = item.tone === "blue";
  const isYellow = item.tone === "yellow";
  const isOrange = item.tone === "orange";

  // Tone color definitions
  let rowBg = isBlue
    ? "var(--surface-j-blue-bg, #D8ECFB)"
    : isYellow
    ? "var(--surface-j-yellow-bg, linear-gradient(90deg, #FFFFFF 0%, #FFEEBD 100%))"
    : "var(--surface-j-orange-bg, #FFE2CB)";

  let rowBorder = isBlue
    ? "var(--surface-j-blue-border, #B8DBF3)"
    : isYellow
    ? "var(--surface-j-yellow-border, #F0D590)"
    : "var(--surface-j-orange-border, #F4C29D)";

  let numberColor = isBlue ? "#156586" : isYellow ? "#B37400" : "#9A3412";
  let iconCircleBg = isBlue
    ? item.number === "01"
      ? "#2CA3D9"
      : "#BFE3F5"
    : isYellow
    ? "#FFE08A"
    : "#FFCB9A";

  let iconColor = item.number === "01" && isBlue ? "#FFFFFF" : "#0B1B3B";
  let toggleBg = isBlue ? "#CFE8F7" : isYellow ? "#FFEFB8" : "#FFD9B8";
  let accentColor = numberColor;

  const buttonId = `faq-header-${item.id}`;
  const regionId = `faq-content-${item.id}`;

  return (
    <div
      className={`relative w-full rounded-[18px] transition-all duration-300 ${
        isOpen ? "shadow-md ring-1 ring-black/5" : "hover:border-black/20"
      }`}
      style={{
        background: rowBg,
        border: `1px solid ${rowBorder}`,
      }}
    >
      {/* Header Button */}
      <button
        ref={headerRef}
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={regionId}
        onClick={onToggle}
        onKeyDown={onKeyDown}
        className="w-full flex items-center justify-between text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#2CA3D9] rounded-[18px]"
        style={{
          minHeight: "clamp(54px, 6vw, calc(var(--su, 1px) * 60))",
          paddingLeft: "clamp(12px, 2vw, calc(var(--su, 1px) * 30))",
          paddingRight: "clamp(12px, 2vw, calc(var(--su, 1px) * 28))",
          paddingTop: isOpen ? "clamp(14px, 2vw, calc(var(--su, 1px) * 22))" : "0",
          paddingBottom: isOpen ? "clamp(10px, 1.5vw, calc(var(--su, 1px) * 12))" : "0",
        }}
      >
        <div className="flex items-center flex-1 min-w-0 gap-3 sm:gap-4 lg:gap-0">
          {/* Number Column (75u on desktop) */}
          <div
            className="shrink-0 font-extrabold flex items-center justify-start lg:w-[calc(var(--su,1px)*75)]"
            style={{
              color: numberColor,
              fontSize: "clamp(16px, 1.8vw, calc(var(--su, 1px) * 20))",
            }}
          >
            {item.number}
          </div>

          {/* Desktop Divider 1 */}
          <div
            className="hidden lg:block w-[1px] h-[calc(var(--su,1px)*28)] bg-black/10 mx-[calc(var(--su,1px)*16)]"
            aria-hidden="true"
          />

          {/* Icon Circle (46u on desktop) */}
          <div
            className="shrink-0 rounded-full flex items-center justify-center shadow-2xs transition-transform duration-300"
            style={{
              width: "clamp(34px, 4.2vw, calc(var(--su, 1px) * 46))",
              height: "clamp(34px, 4.2vw, calc(var(--su, 1px) * 46))",
              backgroundColor: iconCircleBg,
              color: iconColor,
            }}
          >
            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          {/* Desktop Divider 2 */}
          <div
            className="hidden lg:block w-[1px] h-[calc(var(--su,1px)*28)] bg-black/10 mx-[calc(var(--su,1px)*16)]"
            aria-hidden="true"
          />

          {/* Question Text */}
          <div
            className="font-bold text-[#0B1B3B] leading-snug flex-1 min-w-0 pr-2"
            style={{
              fontSize: "clamp(15px, 1.8vw, calc(var(--su, 1px) * 18.5))",
            }}
          >
            {item.question}
          </div>
        </div>

        {/* Toggle Button (42u on desktop, rotates 45deg on open) */}
        <div
          className="shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 ml-2"
          style={{
            width: "clamp(34px, 4vw, calc(var(--su, 1px) * 42))",
            height: "clamp(34px, 4vw, calc(var(--su, 1px) * 42))",
            backgroundColor: toggleBg,
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-[#0B1B3B] stroke-[2.5]" />
        </div>
      </button>

      {/* Answer Region via pure CSS grid transition (0fr -> 1fr) */}
      <div
        id={regionId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className="pb-5 lg:pb-[calc(var(--su,1px)*22)]"
            style={{
              paddingLeft:
                "clamp(14px, 2vw, calc(var(--su, 1px) * (30 + 75 + 16 + 46 + 16)))",
              paddingRight: "clamp(14px, 2vw, calc(var(--su, 1px) * 60))",
            }}
          >
            {/* Accent Line (22u x 2.5u) */}
            <div
              className="rounded-full mb-2.5"
              style={{
                width: "calc(var(--su, 1px) * 22)",
                height: "calc(var(--su, 1px) * 2.5)",
                backgroundColor: accentColor,
              }}
              aria-hidden="true"
            />

            {/* Answer Text (15.5u / 1.5 / #4B5563) */}
            <p
              className="text-[#4B5563] font-normal leading-[1.5]"
              style={{
                fontSize: "clamp(14px, 1.5vw, calc(var(--su, 1px) * 15.5))",
              }}
            >
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
