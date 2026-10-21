import { PROGRAMS } from "@/constants/programs";
import Reveal from "@/components/ui/Reveal";
import InViewSection from "@/components/ui/InViewSection";
import ProgramsHeader from "./ProgramsHeader";
import ProgramCard from "./ProgramCard";
import TopicsTicker from "./TopicsTicker";

/**
 * Section A: Explore Popular Programs
 * id="programs"
 * Seamless cream background continuing to Section B.
 * Desktop: Padding top 80u, bottom 56u. Container padding-inline 62u.
 */
export default function ProgramsSection() {
  return (
    <InViewSection
      id="programs"
      aria-labelledby="programs-heading"
      className="relative w-full overflow-hidden scroll-mt-[72px] lg:scroll-mt-[96px] pb-[40px] lg:pb-[clamp(48px,4.5vw,calc(var(--su,1px)*56))]"
      style={{
        paddingTop: "clamp(56px, 6vw, calc(var(--su, 1px) * 80))",
      }}
    >
      <div
        className="w-full max-w-[1600px] lg:max-w-[calc(var(--su,1px)*1600)] mx-auto flex flex-col items-center"
        style={{
          paddingLeft: "clamp(20px, 4vw, calc(var(--su, 1px) * 62))",
          paddingRight: "clamp(20px, 4vw, calc(var(--su, 1px) * 62))",
        }}
      >
        {/* Header Block with Reveal */}
        <Reveal index={0} className="w-full">
          <ProgramsHeader />
        </Reveal>

        {/* ================= CARDS LAYOUT ================= */}
        <div
          className="w-full"
          style={{
            marginTop: "clamp(28px, 3.5vw, calc(var(--su, 1px) * 40))",
          }}
        >
          {/* 1. Desktop Row (>= 1280px): Exactly 5 columns */}
          <div
            className="hidden xl:grid grid-cols-5 items-stretch w-full"
            style={{
              gap: "calc(var(--su, 1px) * 26)",
            }}
          >
            {PROGRAMS.map((program, index) => (
              <Reveal key={program.id} index={index + 1} className="h-full">
                <ProgramCard program={program} index={index} />
              </Reveal>
            ))}
          </div>

          {/* 2. Tablet Wrapping Grid (768px - 1279px): 3+2 on lg, 2+2+1 centered on md */}
          <div className="hidden md:flex xl:hidden flex-wrap justify-center gap-5 lg:gap-[calc(var(--su,1px)*26)] items-stretch w-full">
            {PROGRAMS.map((program, index) => (
              <Reveal
                key={program.id}
                index={index + 1}
                className="w-[calc((100%-20px)/2)] lg:w-[calc((100%-calc(var(--su,1px)*52))/3)] max-w-[340px]"
              >
                <ProgramCard program={program} index={index} />
              </Reveal>
            ))}
          </div>

          {/* 3. Mobile Swipe Scroller (< 768px): CSS Scroll-Snap */}
          <div
            className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-[14px] scrollbar-none"
            style={{
              paddingTop: "20px",
              marginTop: "-20px",
              paddingBottom: "44px",
              marginBottom: "-44px",
              paddingLeft: "20px",
              paddingRight: "20px",
              marginLeft: "-20px",
              marginRight: "-20px",
              scrollPaddingLeft: "20px",
              scrollPaddingRight: "20px",
            }}
          >
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
    </InViewSection>
  );
}
