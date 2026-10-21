import { PROGRAMS } from "@/constants/programs";
import Reveal from "@/components/ui/Reveal";
import ProgramsHeader from "./ProgramsHeader";
import ProgramCard from "./ProgramCard";
import TopicsTicker from "./TopicsTicker";

/**
 * Section A: Explore Popular Programs
 * id="programs"
 * Background: cream #FDFAF3.
 * Top corners rounded clamp(24px, 2.5vw, 40px) rising over dark hero.
 */
export default function ProgramsSection() {
  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      style={{
        "--su": "min(100vw / 1600, 1.1px)",
      }}
      className="relative z-20 w-full overflow-hidden bg-[#FDFAF3] rounded-t-[clamp(24px,2.5vw,40px)] scroll-mt-[72px] lg:scroll-mt-[96px] pt-[64px] lg:pt-[calc(var(--su)*96)] pb-[56px] lg:pb-[calc(var(--su)*88)] shadow-[0_-12px_36px_rgba(0,0,0,0.18)]"
    >
      <div className="relative z-10 w-full max-w-[1600px] lg:max-w-[calc(var(--su)*1600)] mx-auto px-5 lg:px-[calc(var(--su)*62)] flex flex-col items-center">
        {/* Header Block with Reveal */}
        <Reveal index={0} className="w-full">
          <ProgramsHeader />
        </Reveal>

        {/* ================= CARDS LAYOUT ================= */}
        <div className="w-full mt-[32px] lg:mt-[calc(var(--su)*56)]">
          {/* 1. Desktop Row (>= 1280px): Exactly 5 columns */}
          <div className="hidden xl:grid grid-cols-5 gap-[calc(var(--su)*26)] items-stretch w-full">
            {PROGRAMS.map((program, index) => (
              <Reveal key={program.id} index={index + 1} className="h-full">
                <ProgramCard program={program} index={index} />
              </Reveal>
            ))}
          </div>

          {/* 2. Tablet Wrapping Grid (768px - 1279px): 3+2 on lg, 2+2+1 centered on md */}
          <div className="hidden md:flex xl:hidden flex-wrap justify-center gap-5 lg:gap-[calc(var(--su)*26)] items-stretch w-full">
            {PROGRAMS.map((program, index) => (
              <Reveal
                key={program.id}
                index={index + 1}
                className="w-[calc((100%-20px)/2)] lg:w-[calc((100%-calc(var(--su)*52))/3)] max-w-[340px]"
              >
                <ProgramCard program={program} index={index} />
              </Reveal>
            ))}
          </div>

          {/* 3. Mobile Swipe Scroller (< 768px): CSS Scroll-Snap */}
          <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-[14px] px-5 -mx-5 pb-3 scrollbar-none [scroll-padding-left:20px]">
            {PROGRAMS.map((program, index) => (
              <div
                key={program.id}
                className="shrink-0 snap-start w-[min(82vw,320px)]"
              >
                <ProgramCard program={program} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Topics Ticker */}
        <Reveal index={6} className="w-full">
          <TopicsTicker />
        </Reveal>
      </div>
    </section>
  );
}
