import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

/**
 * DemoCta component for Section D: "How It Works".
 * Fix Pass v3.4 specifications:
 * - Width: min(100%, 420px)
 * - Padding: 12px 12px 12px 20px
 * - Content row flex: calendar icon 22px, label flex: 1 / min-width: 0 / text-align: left / clamp(14px, 4vw, 16px) / line-height: 1.2
 * - Arrow circle: 44px, flex: none, fully visible (overflow visible)
 * - Thick pill halo removed completely. Pulse ring is on arrow circle ::after only (scale 1 -> 1.6, opacity .45 -> 0, 2.4s, every 5s)
 */
export default function DemoCta({ cta }) {
  return (
    <div className="flex justify-center w-full mt-[clamp(24px,4vw,calc(var(--su,1px)*28))]">
      <Link
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book Your Free Demo on WhatsApp"
        className="group relative inline-flex items-center gap-3.5 rounded-full transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_48px_-16px_rgba(15,26,44,0.7)] active:scale-[0.98] select-none text-white overflow-visible"
        style={{
          width: "min(100%, 420px)",
          borderRadius: "9999px",
          background: "linear-gradient(180deg, #121E33 0%, #0B1424 100%)",
          boxShadow: "0 20px 40px -18px rgba(15, 26, 44, 0.55)",
          padding: "12px 12px 12px 20px",
        }}
      >
        {/* Left side: Calendar icon */}
        <CalendarDays
          className="shrink-0 text-[#FFC21A] w-[22px] h-[22px]"
          aria-hidden="true"
        />

        {/* Center: Label text */}
        <span
          className="font-bold tracking-tight text-white flex-1 min-w-0 text-left leading-[1.2]"
          style={{
            fontSize: "clamp(14px, 4vw, 16px)",
          }}
        >
          {cta.label}
        </span>

        {/* Right side: Yellow arrow circle with isolated pulse ring */}
        <div
          className="relative flex items-center justify-center rounded-full bg-[#FFC21A] text-[#0B1424] shrink-0 flex-none transition-transform duration-300 ease-out group-hover:scale-105 w-[44px] h-[44px] arrow-circle-pulse"
          aria-hidden="true"
        >
          <ArrowRight
            className="transition-transform duration-300 group-hover:translate-x-[3px] w-[20px] h-[20px]"
            strokeWidth={2.4}
          />
        </div>
      </Link>
    </div>
  );
}
