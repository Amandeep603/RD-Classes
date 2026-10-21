import Reveal from "@/components/ui/Reveal";
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
    <section
      id="results"
      aria-label="Achievements and statistics"
      className="relative w-full overflow-hidden text-white scroll-mt-20 [isolation:isolate] lg:box-border"
      style={{
        paddingTop: "clamp(48px, 5vw, calc(var(--su, 1px) * 68))",
        paddingBottom: "clamp(44px, 4.2vw, calc(var(--su, 1px) * 53))",
        background: "linear-gradient(90deg, #0E0907 0%, #1A0F06 20%, #381E07 35%, #5C2E06 50%, #7E3505 65%, #923203 80%, #7C1800 100%)",
      }}
    >
      {/* ================= CRISP CORNER CIRCLES (From docs/STATS_SPEC.md, NO blur) ================= */}

      {/* 1. Top-Left Dark Arc: cx: -100u, cy: -150u, r: 230u (dia: 460u) */}
      <div
        className="absolute rounded-full pointer-events-none lg:animate-stat-circle-drift"
        style={{
          width: "calc(var(--su, 1px) * 460)",
          height: "calc(var(--su, 1px) * 460)",
          left: "calc(var(--su, 1px) * -330)",
          top: "calc(var(--su, 1px) * -380)",
          background: "rgba(0, 0, 0, 0.40)",
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
          background: "rgba(65, 40, 12, 0.65)",
          animationDelay: "-6s",
        }}
        aria-hidden="true"
      />

      {/* 3. Bottom-Left Inner Bright Amber Circle: cx: -84u, cy: 572u, r: 317u (dia: 634u) */}
      <div
        className="absolute rounded-full pointer-events-none lg:animate-stat-circle-drift"
        style={{
          width: "calc(var(--su, 1px) * 634)",
          height: "calc(var(--su, 1px) * 634)",
          left: "calc(var(--su, 1px) * -401)",
          bottom: "calc(var(--su, 1px) * -516)",
          background: "radial-gradient(circle at 15% 85%, #B87815 0%, #A86E12 55%, #8A580A 100%)",
          animationDelay: "-12s",
        }}
        aria-hidden="true"
      />

      {/* 4. Upper Right Orange Circle: cx: 1660u, cy: -95u, r: 285u (dia: 570u) */}
      <div
        className="absolute rounded-full pointer-events-none lg:animate-stat-circle-drift"
        style={{
          width: "calc(var(--su, 1px) * 570)",
          height: "calc(var(--su, 1px) * 570)",
          right: "calc(var(--su, 1px) * -345)",
          top: "calc(var(--su, 1px) * -380)",
          background: "radial-gradient(circle at 85% 15%, #F7570D 0%, #D83B01 45%, #A82800 80%, #7C1800 100%)",
          animationDelay: "-18s",
        }}
        aria-hidden="true"
      />

      {/* 5. Lower Right Bright Orange Circle: cx: 1650u, cy: 500u, r: 270u (dia: 540u) */}
      <div
        className="absolute rounded-full pointer-events-none lg:animate-stat-circle-drift"
        style={{
          width: "calc(var(--su, 1px) * 540)",
          height: "calc(var(--su, 1px) * 540)",
          right: "calc(var(--su, 1px) * -320)",
          bottom: "calc(var(--su, 1px) * -397)",
          background: "radial-gradient(circle at 85% 85%, #DF4D00 0%, #D64201 60%, #C43801 100%)",
          animationDelay: "-8s",
        }}
        aria-hidden="true"
      />

      {/* ================= CONTENT CONTAINER ================= */}
      <div
        className="relative z-10 w-full max-w-[1600px] lg:max-w-[calc(var(--su,1px)*1600)] mx-auto"
        style={{
          paddingLeft: "clamp(16px, 3.5vw, calc(var(--su, 1px) * 75))",
          paddingRight: "clamp(16px, 3.5vw, calc(var(--su, 1px) * 75))",
        }}
      >
        <Reveal className="w-full">
          {/* Desktop Layout (>=1024px): Exact Grid Template (366fr 365fr 367fr 427fr) with 1px Dividers */}
          <div
            className="hidden lg:grid items-center w-full relative"
            style={{
              gridTemplateColumns: "366fr 365fr 367fr 427fr",
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
                className="flex flex-col items-center justify-start py-6 px-3 min-w-0 h-full"
              >
                <StatItem stat={stat} index={idx} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
