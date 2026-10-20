import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import HeroImageGrid from "./HeroImageGrid";

/**
 * Hero Section component for RD Classes home page.
 * Strictly constrained to calc(100svh - var(--navbar-h)) to eliminate vertical scrolling.
 * Features 3 prominent ambient blurred radial glows, responsive desktop 2-column layout,
 * and a unified, vertically-centered mobile experience.
 */
export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full h-[calc(100svh-var(--navbar-h))] max-h-[calc(100svh-var(--navbar-h))] min-h-[480px] overflow-hidden flex items-center"
    >
      {/* Ambient Radial Glow 1: Top-Left Amber/Gold (rgba(255,184,0,0.28), blur ~120px) */}
      <div
        className="absolute -top-20 -left-20 sm:-top-28 sm:-left-28 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,184,0,0.28)_0%,transparent_70%)] blur-[75px] sm:blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Ambient Radial Glow 2: Left Middle Faint Teal/Blue (rgba(30,167,197,0.18), blur ~120px) */}
      <div
        className="absolute top-[48%] -left-24 sm:-left-36 -translate-y-1/2 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] rounded-full bg-[radial-gradient(circle,rgba(30,167,197,0.18)_0%,transparent_70%)] blur-[70px] sm:blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Ambient Radial Glow 3: Bottom-Right Amber/Gold (rgba(255,140,0,0.30), blur ~140px) */}
      <div
        className="absolute -bottom-24 -right-24 sm:-bottom-32 sm:-right-32 w-[360px] sm:w-[600px] h-[360px] sm:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,140,0,0.30)_0%,transparent_70%)] blur-[85px] sm:blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Container */}
      <Container className="h-full flex flex-col justify-center py-2 sm:py-3 lg:py-0">
        {/* Desktop Layout (>=1024px): 2 Columns */}
        <div className="hidden lg:grid grid-cols-12 gap-6 xl:gap-8 items-center h-full">
          <div className="col-span-7 xl:col-span-6 z-10 flex flex-col justify-center">
            <HeroContent />
          </div>
          <div className="col-span-5 xl:col-span-6 z-10 flex justify-end h-full items-center overflow-hidden">
            <HeroImageGrid />
          </div>
        </div>

        {/* Mobile & Tablet Layout (<1024px): Centered single column fitting 1 screen */}
        <div className="flex lg:hidden flex-col items-center justify-between h-full w-full py-1 sm:py-2">
          {/* Centered Content */}
          <div className="flex-none my-auto pt-1">
            <HeroContent />
          </div>

          {/* Staggered Arch Grid below fold */}
          <div className="flex-1 min-h-[160px] max-h-[34svh] w-full flex items-start justify-center overflow-hidden">
            <HeroImageGrid />
          </div>
        </div>
      </Container>
    </section>
  );
}
