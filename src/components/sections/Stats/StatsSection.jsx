import Reveal from "@/components/ui/Reveal";
import StatItem from "./StatItem";
import { STATS } from "@/constants/stats";

/**
 * Section C: Stats Band
 * id="results"
 * Exact visual replica of stats.png:
 * - Height: ~373-380u at 1600px canvas (padding top 68u, bottom 56u).
 * - Container padding-inline 60u.
 * - 4 equal columns with 1px vertical dividers 210u tall, vertically centered.
 * - Explicit radial + linear background gradient and 4 decorative ambient circles.
 */
export default function StatsSection() {
  return (
    <section
      id="results"
      aria-label="Achievements and statistics"
      className="relative w-full overflow-hidden text-white scroll-mt-20"
      style={{
        paddingTop: "clamp(52px, 5.5vw, calc(var(--su, 1px) * 68))",
        paddingBottom: "clamp(44px, 4.5vw, calc(var(--su, 1px) * 56))",
        background: `
          radial-gradient(900px 500px at 100% 100%, rgba(232,71,11,.95), rgba(232,71,11,0) 60%),
          radial-gradient(700px 420px at 62% 45%, rgba(140,74,8,.9), rgba(140,74,8,0) 70%),
          radial-gradient(500px 360px at 0% 100%, rgba(150,95,12,.75), rgba(150,95,12,0) 65%),
          linear-gradient(90deg, #0A0705 0%, #1A0F06 28%, #4A2706 52%, #6E3908 70%, #8F4309 85%, #B8460A 100%)
        `,
      }}
    >
      {/* Decorative Circle A: top-left 520u dia at left -240u / top -300u rgba(0,0,0,.45) */}
      <div
        className="absolute rounded-full pointer-events-none animate-glow-drift"
        style={{
          width: "calc(var(--su, 1px) * 520)",
          height: "calc(var(--su, 1px) * 520)",
          left: "calc(var(--su, 1px) * -240)",
          top: "calc(var(--su, 1px) * -300)",
          background: "rgba(0, 0, 0, 0.45)",
          filter: "blur(20px)",
        }}
        aria-hidden="true"
      />

      {/* Decorative Circle B: bottom-left 420u at left -200u / bottom -230u rgba(150,95,12,.85) */}
      <div
        className="absolute rounded-full pointer-events-none animate-glow-drift"
        style={{
          width: "calc(var(--su, 1px) * 420)",
          height: "calc(var(--su, 1px) * 420)",
          left: "calc(var(--su, 1px) * -200)",
          bottom: "calc(var(--su, 1px) * -230)",
          background: "rgba(150, 95, 12, 0.85)",
          filter: "blur(40px)",
          animationDelay: "-5s",
        }}
        aria-hidden="true"
      />

      {/* Decorative Circle C: right 700u at right -260u / top 40u rgba(255,120,30,.22) */}
      <div
        className="absolute rounded-full pointer-events-none animate-glow-drift"
        style={{
          width: "calc(var(--su, 1px) * 700)",
          height: "calc(var(--su, 1px) * 700)",
          right: "calc(var(--su, 1px) * -260)",
          top: "calc(var(--su, 1px) * 40)",
          background: "rgba(255, 120, 30, 0.22)",
          filter: "blur(50px)",
          animationDelay: "-10s",
        }}
        aria-hidden="true"
      />

      {/* Decorative Circle D: bottom-right 520u at right -120u / bottom -330u rgba(255,90,20,.35) */}
      <div
        className="absolute rounded-full pointer-events-none animate-glow-drift"
        style={{
          width: "calc(var(--su, 1px) * 520)",
          height: "calc(var(--su, 1px) * 520)",
          right: "calc(var(--su, 1px) * -120)",
          bottom: "calc(var(--su, 1px) * -330)",
          background: "rgba(255, 90, 20, 0.35)",
          filter: "blur(35px)",
          animationDelay: "-15s",
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 w-full max-w-[1600px] lg:max-w-[calc(var(--su,1px)*1600)] mx-auto"
        style={{
          paddingLeft: "clamp(20px, 4vw, calc(var(--su, 1px) * 60))",
          paddingRight: "clamp(20px, 4vw, calc(var(--su, 1px) * 60))",
        }}
      >
        <Reveal className="w-full">
          {/* Desktop Layout (>=1024px): 4 Equal Columns with 1px Vertical Dividers (210u tall, centered) */}
          <div className="hidden lg:flex items-center justify-between w-full relative">
            {STATS.map((stat, idx) => (
              <div
                key={stat.id}
                className="flex-1 flex items-center justify-center relative min-w-0"
              >
                <StatItem stat={stat} index={idx} />
                {idx < STATS.length - 1 && (
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] bg-[rgba(255,170,60,0.25)] animate-divider-draw"
                    style={{ height: "calc(var(--su, 1px) * 210)" }}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Layout (<1024px): 2x2 Grid with Center Hairline Dividers */}
          <div className="grid grid-cols-2 lg:hidden w-full relative py-2">
            {/* Horizontal Center Divider */}
            <div
              className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-[1px] bg-[rgba(255,170,60,0.2)]"
              aria-hidden="true"
            />
            {/* Vertical Center Divider */}
            <div
              className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1px] bg-[rgba(255,170,60,0.2)]"
              aria-hidden="true"
            />

            {STATS.map((stat, idx) => (
              <div
                key={stat.id}
                className="flex items-center justify-center py-4 px-2 min-w-0"
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
