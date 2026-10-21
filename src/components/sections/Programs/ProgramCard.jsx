import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Zap,
  Play,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

const ICON_MAP = {
  GraduationCap,
  BookOpen,
  Zap,
  Play,
  FileCheck2,
};

export default function ProgramCard({ program, index = 0, isMobile = false }) {
  const { theme } = program;
  const IconComponent = ICON_MAP[program.icon] || GraduationCap;

  return (
    <Link
      href={program.link}
      aria-label={`${program.title} - ${program.eyebrow} - Explore Course`}
      style={{
        background: theme.cardBg,
        borderColor: theme.cardBorder,
        boxShadow: theme.elevated
          ? "0 14px 34px -4px rgba(11, 47, 69, 0.35), 0 4px 12px rgba(11, 47, 69, 0.15)"
          : "0 6px 20px -2px rgba(0, 0, 0, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)",
        animationDelay: `${index * 80}ms`,
        borderRadius: isMobile ? "20px" : "calc(var(--u) * 20)",
        padding: isMobile ? "24px" : "calc(var(--u) * 28)",
        minHeight: isMobile ? "340px" : "calc(var(--u) * 342)",
      }}
      className={`group relative flex flex-col justify-between border select-none transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_20px_40px_-6px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] focus-visible:ring-offset-2 ${
        isMobile
          ? "w-[78vw] max-w-[320px] shrink-0 snap-center"
          : "w-full h-full"
      } animate-card-fade-up`}
    >
      {/* Top Part */}
      <div>
        {/* Top Row: Icon Circle (Left) & Number (Right) */}
        <div className="flex items-start justify-between w-full">
          {/* Icon Circle 64px */}
          <div
            className="flex items-center justify-center rounded-full shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundColor: theme.iconBg,
              width: isMobile ? "54px" : "calc(var(--u) * 64)",
              height: isMobile ? "54px" : "calc(var(--u) * 64)",
            }}
          >
            <IconComponent
              style={{
                color: theme.iconColor,
                width: isMobile ? "26px" : "calc(var(--u) * 28)",
                height: isMobile ? "26px" : "calc(var(--u) * 28)",
              }}
              strokeWidth={2}
              fill={program.icon === "Play" ? theme.iconColor : "none"}
              aria-hidden="true"
            />
          </div>

          {/* Number (20px, font-bold) */}
          <span
            className="font-bold tracking-tight"
            style={{
              color: theme.numberColor,
              fontSize: isMobile ? "18px" : "clamp(16px, calc(var(--u) * 20), 20px)",
            }}
          >
            {program.number}
          </span>
        </div>

        {/* Accent Line: 20x2px below the icon */}
        <div
          className="rounded-full shrink-0"
          style={{
            backgroundColor: theme.accentColor,
            width: isMobile ? "20px" : "calc(var(--u) * 20)",
            height: "2px",
            marginTop: isMobile ? "14px" : "calc(var(--u) * 16)",
          }}
          aria-hidden="true"
        />

        {/* Eyebrow: uppercase, 14px, tracking 0.15em, font-weight 700 */}
        <div
          className="font-bold uppercase tracking-[0.15em]"
          style={{
            color: theme.eyebrowColor,
            fontSize: isMobile ? "12px" : "clamp(12px, calc(var(--u) * 14), 14px)",
            marginTop: isMobile ? "12px" : "calc(var(--u) * 14)",
          }}
        >
          {program.eyebrow}
        </div>

        {/* Title: 23.5px, weight 700, tight tracking, single line */}
        <h3
          className="font-extrabold tracking-tight leading-tight whitespace-nowrap"
          style={{
            color: theme.titleColor,
            fontSize: isMobile ? "20px" : "clamp(18px, calc(var(--u) * 23.5), 24px)",
            marginTop: isMobile ? "6px" : "calc(var(--u) * 6)",
          }}
        >
          {program.title}
        </h3>

        {/* Description: 18px, line-height 1.5 */}
        <p
          className="leading-[1.5] whitespace-pre-line"
          style={{
            color: theme.descColor,
            fontSize: isMobile ? "14px" : "clamp(14px, calc(var(--u) * 18), 18px)",
            marginTop: isMobile ? "8px" : "calc(var(--u) * 8)",
          }}
        >
          {program.description}
        </p>
      </div>

      {/* Footer Row: "Explore Course" on left + 46px Arrow Button on right */}
      <div
        className="flex items-center justify-between w-full"
        style={{
          marginTop: isMobile ? "20px" : "calc(var(--u) * 24)",
        }}
      >
        <span
          className="font-semibold tracking-tight transition-colors duration-200"
          style={{
            color: theme.footerTextColor,
            fontSize: isMobile ? "15px" : "clamp(14px, calc(var(--u) * 17), 17px)",
          }}
        >
          Explore Course
        </span>

        {/* Circular Arrow Button (46px circle) */}
        <div
          className="flex items-center justify-center rounded-full shrink-0 transition-all duration-300 group-hover:translate-x-1"
          style={{
            backgroundColor: theme.arrowBg,
            color: theme.arrowColor,
            width: isMobile ? "40px" : "calc(var(--u) * 46)",
            height: isMobile ? "40px" : "calc(var(--u) * 46)",
          }}
        >
          <ArrowRight
            style={{
              width: isMobile ? "18px" : "calc(var(--u) * 20)",
              height: isMobile ? "18px" : "calc(var(--u) * 20)",
            }}
            strokeWidth={2.2}
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}
