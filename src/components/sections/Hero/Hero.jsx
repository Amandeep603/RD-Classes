import HeroContent from "./HeroContent";
import HeroImageGrid from "./HeroImageGrid";
import { NOISE_DATA_URI } from "@/constants/noise";

/**
 * Hero Section for RD Classes home page (Hero v3.2).
 * - Exact calibrated background radial gradients painted directly on section background over #0A0A0A.
 * - [isolation: isolate], content relative z-10, no negative z-index, no filter:blur.
 * - Desktop: 1600x900 basis, strictly fits one screen, capped at 1.1px.
 * - Mobile (< 1024px): Scrollable, height auto, pb-6 (<=24px), all 5 cards fully visible with no dead gap.
 * - Static 128px noise tile (hidden on mobile <=767px).
 * - Glow drift: desktop only (hidden lg:block), no glow animation on mobile.
 * - overflow-x-clip prevents scroll container traps.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      style={{
        "--u": "min(min(100vw / 1600, max(100svh, 560px) / 900), 1.1px)",
        background: `
          radial-gradient(circle 28vw at 0% 0%, rgba(184, 115, 10, 0.35) 0%, transparent 70%),
          radial-gradient(circle 22vw at 0% 50%, rgba(14, 59, 74, 0.40) 0%, transparent 70%),
          radial-gradient(circle 40vw at 100% 100%, rgba(217, 130, 0, 0.45) 0%, transparent 70%),
          radial-gradient(circle 20vw at 100% 0%, rgba(138, 90, 10, 0.18) 0%, transparent 70%),
          #0A0A0A
        `,
      }}
      className="relative w-full min-h-[100svh] h-auto lg:h-[100svh] lg:min-h-[560px] overflow-x-clip select-none [isolation:isolate]"
    >
      {/* ================= DESKTOP LIGHTWEIGHT GLOW DRIFT OVERLAY (Transform-only, Desktop only) ================= */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="animate-glow-drift absolute -top-[5%] -left-[5%] w-[42vw] h-[42vw] rounded-full bg-[radial-gradient(circle,rgba(184,115,10,0.18)_0%,transparent_70%)] pointer-events-none"
        />
        <div
          className="animate-glow-drift-rev absolute -bottom-[10%] -right-[5%] w-[48vw] h-[48vw] rounded-full bg-[radial-gradient(circle,rgba(217,130,0,0.20)_0%,transparent_70%)] pointer-events-none"
        />
      </div>

      {/* ================= STATIC NOISE TILE (Tiny 128px PNG, opacity 0.03, hidden <=767px) ================= */}
      <div
        className="hidden md:block absolute inset-0 opacity-[0.03] pointer-events-none z-10 bg-repeat"
        style={{
          backgroundImage: `url("${NOISE_DATA_URI}")`,
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      {/* ================= DESKTOP & LAPTOP LAYOUT (>= 1024px) ================= */}
      <div className="hidden lg:block w-full h-full relative z-20">
        {/* Left Content: anchored left at 6.25vw, top at 180u to center vertically */}
        <div
          className="absolute z-20"
          style={{
            left: "6.25vw",
            top: "calc(var(--u) * 180)",
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
      {/* Scrollable, height auto, pb-6 (max 24px), content starts below 64px header (pt 88px) */}
      <div className="flex lg:hidden flex-col items-center justify-start min-h-[100svh] h-auto w-full pt-[88px] pb-[24px] px-5 z-20 relative">
        {/* Centered Content */}
        <HeroContent />

        {/* Scaled Arch Cluster showing all 5 arches completely: gap 28px below buttons */}
        <div className="w-[min(100%-32px,440px)] mx-auto mt-[28px] shrink-0">
          <HeroImageGrid isDesktop={false} className="w-full" />
        </div>
      </div>
    </section>
  );
}
