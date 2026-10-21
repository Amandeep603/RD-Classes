import ProgramsHeader from "./ProgramsHeader";
import ProgramsCardsGrid from "./ProgramsCardsGrid";
import TermsRow from "./TermsRow";

export default function ProgramsSection() {
  return (
    <section
      id="programs-section"
      aria-label="Course Categories and Popular Programs"
      style={{
        backgroundColor: "#FDFAF3",
        "--u": "min(min(100vw / 1600, 100svh / 900), 1.1px)",
      }}
      className="relative z-20 w-full overflow-hidden text-[#0B0B0B] scroll-mt-20 pt-[46px] lg:pt-[calc(var(--u)*46)] pb-[60px] lg:pb-[calc(var(--u)*84)] border-t border-black/5"
    >
      {/* Smooth 24px transition gradient from dark hero at the very top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-[24px] bg-gradient-to-b from-[#0A0A0A]/20 to-transparent pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* Main Container - max-width 1600px centered with 62u side padding on desktop */}
      <div
        className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col items-center"
        style={{
          paddingLeft: "max(16px, calc(var(--u) * 62))",
          paddingRight: "max(16px, calc(var(--u) * 62))",
        }}
      >
        {/* Header Block: Pill + H1 with Animated Highlighter + Subtitle */}
        <ProgramsHeader />

        {/* 5 Cards Row (5 columns desktop, 3+2 tablet, swipe carousel mobile) */}
        <ProgramsCardsGrid />

        {/* Accounting Terms Row with Divider */}
        <TermsRow />
      </div>
    </section>
  );
}
