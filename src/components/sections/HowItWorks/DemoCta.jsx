import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

/**
 * DemoCta component for Section D: "How It Works".
 * Dark pill button linking to WhatsApp for booking a free demo.
 * Desktop: 482u x 65u, radius 33u, padding 0 14u 0 36u.
 * Mobile: min(100%, 420px) width, 58px height, 16px text.
 * Micro-animations:
 * - Hover lift + shine sweep
 * - Arrow slide
 * - Soft pulse ring every 5s (single mobile infinite animation, paused off-screen)
 */
export default function DemoCta({ cta }) {
  return (
    <div className="flex justify-center w-full mt-[clamp(24px,4vw,calc(var(--su,1px)*28))]">
      <Link
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book Your Free Demo on WhatsApp"
        className="group relative inline-flex items-center justify-between overflow-hidden rounded-full transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_48px_-16px_rgba(15,26,44,0.7)] active:scale-[0.98] select-none text-white animate-cta-pulse"
        style={{
          width: "min(100%, max(320px, calc(var(--su, 1px) * 482)))",
          height: "max(58px, calc(var(--su, 1px) * 65))",
          borderRadius: "max(29px, calc(var(--su, 1px) * 33))",
          background: "linear-gradient(180deg, #121E33 0%, #0B1424 100%)",
          boxShadow: "0 20px 40px -18px rgba(15, 26, 44, 0.55)",
          paddingLeft: "max(24px, calc(var(--su, 1px) * 36))",
          paddingRight: "max(10px, calc(var(--su, 1px) * 14))",
        }}
      >
        {/* Shine sweep effect on hover */}
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
          aria-hidden="true"
        />

        {/* Left side: Calendar icon + text */}
        <div className="flex items-center gap-[clamp(12px,2vw,calc(var(--su,1px)*18))]">
          <CalendarDays
            className="shrink-0 text-[#FFC21A]"
            style={{
              width: "max(22px, calc(var(--su, 1px) * 28))",
              height: "max(22px, calc(var(--su, 1px) * 28))",
            }}
            aria-hidden="true"
          />
          <span
            className="font-bold tracking-tight text-white whitespace-nowrap"
            style={{
              fontSize: "clamp(15px, 2.2vw, calc(var(--su, 1px) * 19))",
            }}
          >
            {cta.label}
          </span>
        </div>

        {/* Right side: Yellow circle with dark arrow */}
        <div
          className="flex items-center justify-center rounded-full bg-[#FFC21A] text-[#0B1424] shrink-0 transition-transform duration-300 ease-out group-hover:scale-105"
          style={{
            width: "max(44px, calc(var(--su, 1px) * 50))",
            height: "max(44px, calc(var(--su, 1px) * 50))",
          }}
          aria-hidden="true"
        >
          <ArrowRight
            className="transition-transform duration-300 group-hover:translate-x-[3px]"
            style={{
              width: "max(18px, calc(var(--su, 1px) * 22))",
              height: "max(18px, calc(var(--su, 1px) * 22))",
            }}
            strokeWidth={2.4}
          />
        </div>
      </Link>
    </div>
  );
}

