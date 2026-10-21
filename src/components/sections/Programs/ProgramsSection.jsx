import ProgramsHeader from "./ProgramsHeader";
import ProgramsCarousel from "./ProgramsCarousel";
import ProgramsRevealWrapper from "./ProgramsRevealWrapper";

/**
 * Explore Popular Programs section component (Server Component).
 * - Sits directly below the hero section.
 * - Light panel rising over dark hero with rounded-t corners (24px to 40px).
 * - Background: soft gradient #F7FBFF -> #EAF4FC with 2 faint pale-blue ambient circles.
 * - Fluid scaling on desktop via --su: min(100vw / 1600, 1.1px).
 * - Plain Tailwind/clamp on mobile/tablet (<1024px); never uses --su below 1024px.
 */
export default function ProgramsSection() {
  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      style={{
        "--su": "min(100vw / 1600, 1.1px)",
      }}
      className="relative w-full overflow-hidden bg-[#0A0A0A] select-none scroll-mt-[64px] lg:scroll-mt-[clamp(64px,calc(var(--su)*88),96px)]"
    >
      {/* Light Rounded Panel Container */}
      <div
        className="relative w-full rounded-t-[clamp(24px,2.5vw,40px)] bg-gradient-to-b from-[#F7FBFF] to-[#EAF4FC] pt-[64px] pb-[56px] px-5 lg:pt-[calc(var(--su)*96)] lg:pb-[calc(var(--su)*88)] lg:px-[calc(var(--su)*65)] shadow-[0_-12px_40px_rgba(0,0,0,0.25)]"
      >
        {/* ================= DECORATIVE AMBIENT CIRCLES ================= */}
        {/* Top-Right Faint Pale Blue Circle 1 */}
        <div
          className="absolute -top-[12%] -right-[6%] w-[380px] lg:w-[calc(var(--su)*520)] h-[380px] lg:h-[calc(var(--su)*520)] rounded-full bg-[radial-gradient(circle,rgba(120,190,235,0.18)_0%,transparent_70%)] pointer-events-none -z-0"
          aria-hidden="true"
        />

        {/* Top-Right Faint Pale Blue Circle 2 (Inner highlight) */}
        <div
          className="absolute top-[4%] -right-[3%] w-[260px] lg:w-[calc(var(--su)*360)] h-[260px] lg:h-[calc(var(--su)*360)] rounded-full bg-[radial-gradient(circle,rgba(120,190,235,0.12)_0%,transparent_75%)] pointer-events-none -z-0"
          aria-hidden="true"
        />

        {/* ================= CONTENT CONTAINER WITH REVEAL WRAPPER ================= */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col">
          <ProgramsRevealWrapper className="w-full flex flex-col gap-7 lg:gap-[calc(var(--su)*56)]">
            {/* Header Block */}
            <ProgramsHeader />

            {/* Carousel with Cards & Bottom Controls */}
            <ProgramsCarousel />
          </ProgramsRevealWrapper>
        </div>
      </div>
    </section>
  );
}
