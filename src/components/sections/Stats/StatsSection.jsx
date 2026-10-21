import Reveal from "@/components/ui/Reveal";
import InViewSection from "@/components/ui/InViewSection";
import StatItem from "./StatItem";
import { STATS } from "@/constants/stats";

/**
 * Section C: Stats Band
 * id="results"
 * Exact visual replica of stats.png:
 * - Height: Exactly 373u at 1600px canvas (padding top 68u, bottom 53u).
 * - Container bounds: 75u..1525u (padding-inline 75u across 1600u canvas).
 * - CSS Grid: 366fr 365fr 367fr 427fr with 1px vertical dividers 210u tall.
 * - Crisp overlapping corner circles from edge detection/Hough fit (NO blur filter).
 * - Mobile (<1024px): 2x2 grid, 48px 16px padding, cells 24px 12px, hairline dividers.
 */
export default function StatsSection() {
  return (
    <InViewSection
      id="results"
      aria-label="Achievements and statistics"
      className="relative w-full overflow-hidden text-white scroll-mt-20 [isolation:isolate] lg:box-border"
      style={{
        paddingTop: "clamp(48px, 5vw, calc(var(--su, 1px) * 68))",
        paddingBottom: "clamp(44px, 4.2vw, calc(var(--su, 1px) * 53))",
        background: "linear-gradient(90deg, #171310 0%, #1F160C 14%, #381E09 26%, #5C2E06 40%, #7E3505 55%, #9B3804 70%, #8E2B02 84%, #7D1804 100%)",
      }}
    >
      {/* ================= CRISP CORNER CIRCLES (From docs/STATS_SPEC.md, NO blur) ================= */}

      {/* 1. Top-Left Dark Arc */}
      <div
        className="absolute rounded-full pointer-events-none lg:animate-stat-circle-drift"
        style={{
          width: "calc(var(--su, 1px) * 460)",
          height: "calc(var(--su, 1px) * 460)",
          left: "calc(var(--su, 1px) * -330)",
          top: "calc(var(--su, 1px) * -380)",
          background: "rgba(0, 0, 0, 0.05)",
        }}
        aria-hidden="true"
      />

      {/* 2. Bottom-Left Outer Amber Arc: cx: 15u, cy: 460u, r: 290u (dia: 580u) */}
      <div
        className="absolute rounded-full pointer-events-none lg:animate-stat-circle-drift"
        style={{
          width: "calc(var(--su, 1px) * 580)",
          height: "calc(var(--su, 1px) * 580)",
          left: "calc(var(--su, 1px) * -275)",
          bottom: "calc(var(--su, 1px) * -390)",
          background: "rgba(60, 36, 12, 0.70)",
          animationDelay: "-6s",
        }}
        aria-hidden="true"
      />

      {/* 3. Bottom-Left Inner Deep Brown-Amber Circle: cx: -110u, cy: 500u, r: 240u */}
      <div
        className="absolute rounded-full pointer-events-none lg:animate-stat-circle-drift"
        style={{
          width: "calc(var(--su, 1px) * 490)",
          height: "calc(var(--su, 1px) * 490)",
          left: "calc(var(--su, 1px) * -300)",
          bottom: "calc(var(--su, 1px) * -385)",
          background: "radial-gradient(circle at 45% 45%, #AB7014 0%, #9B6210 40%, #764508 70%, #462805 88%, transparent 100%)",
          animationDelay: "-12s",
        }}
        aria-hidden="true"
      />

      {/* 4. Upper Right Dark Orange Circle: tuned */}
      <div
        className="absolute rounded-full pointer-events-none lg:animate-stat-circle-drift"
        style={{
          width: "calc(var(--su, 1px) * 520)",
          height: "calc(var(--su, 1px) * 520)",
          right: "calc(var(--su, 1px) * -260)",
          top: "calc(var(--su, 1px) * -340)",
          background: "radial-gradient(circle at 50% 50%, #F84C00 0%, #EA3E00 28%, #C23000 56%, #942200 82%, transparent 98%)",
          animationDelay: "-18s",
        }}
        aria-hidden="true"
      />

      {/* 5. Lower Right Bright Orange Circle */}
      <div
        className="absolute rounded-full pointer-events-none lg:animate-stat-circle-drift"
        style={{
          width: "calc(var(--su, 1px) * 480)",
          height: "calc(var(--su, 1px) * 480)",
          right: "calc(var(--su, 1px) * -240)",
          bottom: "calc(var(--su, 1px) * -328)",
          background: "radial-gradient(circle at 50% 50%, #E64C00 0%, #D84200 48%, #BE3600 75%, #881E00 96%, transparent 100%)",
          animationDelay: "-8s",
        }}
        aria-hidden="true"
      />
      {/* ================= CONTENT CONTAINER ================= */}
      <div
        className="relative z-10 w-full max-w-[1600px] lg:max-w-[calc(var(--su,1px)*1600)] mx-auto px-3 lg:px-0"
        style={{
          paddingLeft: "clamp(12px, 3.5vw, calc(var(--su, 1px) * 75))",
          paddingRight: "clamp(12px, 3.5vw, calc(var(--su, 1px) * 75))",
        }}
      >
        <Reveal className="w-full">
          {/* Desktop Layout (>=1024px): Exact Grid Template (366fr 365fr 367fr 352fr) with 1px Dividers at x=441u, 806u, 1173u */}
          <div
            className="hidden lg:grid items-center w-full relative"
            style={{
              gridTemplateColumns: "366fr 365fr 367fr 352fr",
            }}
          >
            {STATS.map((stat, idx) => (
              <div
                key={stat.id}
                className="flex items-center justify-center relative min-w-0"
              >
                <StatItem stat={stat} index={idx} />
                {idx < STATS.length - 1 && (
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] animate-divider-draw"
                    style={{
                      height: "calc(var(--su, 1px) * 210)",
                      background: "linear-gradient(to bottom, transparent, rgba(255, 170, 60, 0.3), transparent)",
                    }}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Layout (<1024px): 2x2 Grid with Equal Row Heights & Hairline Dividers */}
          <div className="grid grid-cols-2 lg:hidden w-full relative py-1 [grid-auto-rows:1fr]">
            {/* Horizontal Center Divider */}
            <div
              className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-[1px] bg-[rgba(255,170,60,0.22)]"
              aria-hidden="true"
            />
            {/* Vertical Center Divider */}
            <div
              className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1px] bg-[rgba(255,170,60,0.22)]"
              aria-hidden="true"
            />

            {STATS.map((stat, idx) => (
              <div
                key={stat.id}
                className="flex flex-col items-center justify-start py-6 px-2 min-w-0 h-full"
              >
                <StatItem stat={stat} index={idx} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </InViewSection>
  );
}
