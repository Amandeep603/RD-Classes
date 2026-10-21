import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import StatItem from "./StatItem";
import { STATS } from "@/constants/stats";

/**
 * Section C: Stats Band
 * Full-bleed dark amber gradient band with ambient glowing drift shapes,
 * 4 equal columns on desktop with dividers, 2x2 on mobile/tablet,
 * and animated count-up numbers.
 */
export default function StatsSection() {
  return (
    <section
      id="results"
      aria-label="Achievements and statistics"
      className="relative w-full overflow-hidden text-white pt-[56px] sm:pt-[72px] lg:pt-[calc(var(--su)*84)] pb-[56px] sm:pb-[72px] lg:pb-[calc(var(--su)*84)] px-[20px] sm:px-[32px] lg:px-[calc(var(--su)*80)] scroll-mt-20"
      style={{
        "--su": "min(100vw / 1600, 1.1px)",
      }}
    >
      {/* Base Background Gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 100%, #E8470B 0%, rgba(232, 71, 11, 0.45) 30%, transparent 60%), radial-gradient(circle at 55% 50%, #8A4A08 0%, #6B3A06 40%, transparent 75%), linear-gradient(90deg, #0B0806 0%, #170E06 30%, #452104 65%, #662E04 100%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative Drifting Glow Shapes */}
      <div
        className="absolute -top-32 -left-32 w-[340px] h-[340px] lg:w-[calc(var(--su)*420)] lg:h-[calc(var(--su)*420)] rounded-full bg-black/60 blur-2xl pointer-events-none animate-glow-drift"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-[8%] w-[300px] h-[300px] lg:w-[calc(var(--su)*380)] lg:h-[calc(var(--su)*380)] rounded-full bg-[#6B3A06]/40 blur-3xl pointer-events-none animate-glow-drift"
        style={{ animationDelay: "-7s" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 -right-20 w-[380px] h-[380px] lg:w-[calc(var(--su)*500)] lg:h-[calc(var(--su)*500)] rounded-full bg-[#E8470B]/25 blur-3xl pointer-events-none animate-glow-drift"
        style={{ animationDelay: "-14s" }}
        aria-hidden="true"
      />

      <Container className="relative z-10 w-full">
        <Reveal className="w-full">
          {/* Desktop Layout (>=1024px): 4 Equal Columns with 1px Vertical Dividers */}
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
                    style={{ height: "calc(var(--su) * 210)" }}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Layout (<1024px): 2x2 Grid with Center Dividers */}
          <div className="grid grid-cols-2 lg:hidden w-full relative py-4">
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
                className="flex items-center justify-center py-6 px-2 min-w-0"
              >
                <StatItem stat={stat} index={idx} />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
