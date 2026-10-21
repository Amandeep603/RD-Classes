import HeroContent from "./HeroContent";
import HeroImageGrid from "./HeroImageGrid";

/**
 * Rebuilt Hero Section for RD Classes home page.
 * - Exact visual replica of reference/hero-reference.jpeg on 1600x900 canvas
 * - Scaled with --u: min(100vw / 1600, max(100svh, 560px) / 900), capped at 1.1px
 * - Zero vertical scroll across all desktop viewports
 * - Anchored: left content padding-left = 6.25vw, arch cluster right padding = 3.9vw
 * - 3 ambient blurred radial glows with slow 20s drift loop
 * - Inline SVG feTurbulence film grain at 2.5% opacity
 * - Mobile & tablet: vertically centered, single screen, no overflow
 */
export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      style={{
        "--u": "min(min(100vw / 1600, max(100svh, 560px) / 900), 1.1px)",
      }}
      className="relative w-full h-[100svh] min-h-[560px] overflow-hidden bg-[#0A0A0A] select-none"
    >
      {/* ================= BACKGROUND GLOWS & FILM GRAIN ================= */}

      {/* Ambient Radial Glow 1: Top-Left Amber (#B8730A, ~35% opacity) */}
      <div
        className="animate-glow-drift absolute -top-[10%] -left-[10%] w-[320px] sm:w-[480px] lg:w-[calc(var(--u)*680)] h-[320px] sm:h-[480px] lg:h-[calc(var(--u)*680)] rounded-full bg-[radial-gradient(circle,rgba(184,115,10,0.35)_0%,transparent_70%)] blur-[80px] lg:blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Ambient Radial Glow 2: Left-Middle Dark Teal (#0E3B4A, ~40% opacity) */}
      <div
        className="animate-glow-drift-rev absolute top-[44%] -left-[8%] w-[260px] sm:w-[380px] lg:w-[calc(var(--u)*540)] h-[260px] sm:h-[380px] lg:h-[calc(var(--u)*540)] rounded-full bg-[radial-gradient(circle,rgba(14,59,74,0.40)_0%,transparent_70%)] blur-[75px] lg:blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Ambient Radial Glow 3: Bottom-Right Strong Amber/Orange (#D98200, ~45% opacity) */}
      <div
        className="animate-glow-drift absolute -bottom-[12%] -right-[8%] w-[380px] sm:w-[560px] lg:w-[calc(var(--u)*760)] h-[380px] sm:h-[560px] lg:h-[calc(var(--u)*760)] rounded-full bg-[radial-gradient(circle,rgba(217,130,0,0.45)_0%,transparent_70%)] blur-[90px] lg:blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Subtle Film Grain: inline SVG feTurbulence data-URI at 2.5% opacity */}
      <div
        className="bg-film-grain absolute inset-0 opacity-[0.025] pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* ================= DESKTOP & LAPTOP LAYOUT (>= 1024px) ================= */}
      <div className="hidden lg:block w-full h-full relative">
        {/* Left Content: anchored left at 6.25vw, top at 195u to align eyebrow at 204px */}
        <div
          className="absolute z-20"
          style={{
            left: "6.25vw",
            top: "calc(var(--u) * 195)",
            width: "calc(var(--u) * 650)",
          }}
        >
          <HeroContent />
        </div>

        {/* Right Arch Cluster: anchored right at 3.9vw, top moved down ~2% of hero height */}
        <div
          className="absolute bottom-0 z-10 flex items-start"
          style={{
            right: "3.9vw",
            top: "calc(clamp(64px, calc(var(--u) * 88), 96px) + 2svh)",
            height: "calc(100svh - clamp(64px, calc(var(--u) * 88), 96px) - 2svh)",
          }}
        >
          <HeroImageGrid isDesktop={true} style={{ height: "100%", width: "auto" }} />
        </div>
      </div>

      {/* ================= MOBILE & TABLET LAYOUT (< 1024px) ================= */}
      <div className="flex lg:hidden flex-col items-center justify-start h-full min-h-[100svh] w-full pt-[80px] px-5 z-20 relative overflow-hidden">
        {/* Centered Content: starts below header (pt 64px + 16px = 80px) */}
        <HeroContent />

        {/* Scaled Arch Cluster filling screen width: min(100% - 40px, 440px), sm:max-w-[520px], centered, mt 24px */}
        <div className="w-[min(100%-40px,440px)] sm:max-w-[520px] mx-auto mt-[24px] shrink-0">
          <HeroImageGrid isDesktop={false} className="w-full" />
        </div>
      </div>
    </section>
  );
}
