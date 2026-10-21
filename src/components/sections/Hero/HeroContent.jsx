import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

/**
 * HeroContent component for RD Classes Hero section.
 * - Desktop (>= 1024px): 1600x900 canvas fluid scaling via --u token with strict floors.
 * - Mobile (< 1024px): Plain Tailwind and clamp() styling; ZERO --u tokens used.
 * - Accountancy: Plain #FFB800 letters with transform+opacity reveal, overlay shimmer mask, unclipped full stop.
 */
export default function HeroContent() {
  const { hero, cta } = SITE_CONFIG;
  const wordLetters = "Accountancy.".split("");

  return (
    <>
      {/* ================= DESKTOP LAYOUT (>= 1024px) ================= */}
      <div className="hidden lg:flex flex-col items-start text-left justify-center w-full max-w-[680px]">
        {/* 1. Eyebrow: 13u (floor 11px), tracking 0.2em, line 40x2u, gap to H1 22u */}
        <div
          className="flex items-center"
          style={{
            gap: "calc(var(--u) * 12)",
            marginBottom: "calc(var(--u) * 22)",
          }}
        >
          <span
            className="bg-[#4FC3E8] rounded-full shrink-0"
            style={{ width: "calc(var(--u) * 40)", height: "2px" }}
            aria-hidden="true"
          />
          <span
            className="font-normal uppercase text-[#D6D6D6] select-none whitespace-nowrap"
            style={{
              fontSize: "max(11px, calc(var(--u) * 13))",
              letterSpacing: "0.2em",
            }}
          >
            {hero.eyebrow}
          </span>
        </div>

        {/* 2. Main Headline (H1): 76u (floor 44px), line-height 0.98, weight 800, tracking -0.02em */}
        <h1
          id="hero-heading"
          className="font-extrabold tracking-[-0.02em]"
          style={{
            fontSize: "max(44px, calc(var(--u) * 76))",
            lineHeight: 0.98,
          }}
        >
          <span className="block text-white animate-hero-fade [animation-delay:90ms]">
            {hero.headline.line1}
          </span>
          <span className="block text-white animate-hero-fade [animation-delay:180ms]">
            {hero.headline.line2}
          </span>

          {/* Animated "Accountancy." with letter reveal and continuous gold shimmer */}
          <span
            className="accountancy-word relative inline-block text-[#FFB800] mt-[0.05em]"
            data-text="Accountancy."
          >
            {/* Accessible text for screen readers */}
            <span className="sr-only">Accountancy.</span>

            {/* Letter by letter reveal in base yellow */}
            <span aria-hidden="true" className="inline-flex">
              {wordLetters.map((char, index) => (
                <span
                  key={index}
                  className="animate-letter text-[#FFB800]"
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  {char}
                </span>
              ))}
            </span>

            {/* Underline drawing under the word once after reveal */}
            <span
              className="animate-underline absolute left-0 bottom-0 w-full h-[2px] bg-[#FFB800] pointer-events-none"
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* 3. Subtext: 22u (floor 16px), weight 300, line-height 1.35, gap from H1 26u */}
        <p
          className="font-light text-[#EDEDED]"
          style={{
            fontSize: "max(16px, calc(var(--u) * 22))",
            lineHeight: 1.35,
            marginTop: "calc(var(--u) * 26)",
            maxWidth: "calc(var(--u) * 520)",
          }}
        >
          <span className="block">{hero.subtext.line1}</span>
          <span className="block">{hero.subtext.line2}</span>
        </p>

        {/* 4. Action Buttons: height 56u (floor 44px), label 17u (floor 14px), px 30u, radius 9u, gap 22u, gap from subtext 36u */}
        <div
          className="flex items-center"
          style={{
            gap: "calc(var(--u) * 22)",
            marginTop: "calc(var(--u) * 36)",
          }}
        >
          {/* Primary Explore Courses */}
          <a
            href={cta.exploreCourses.href}
            className="group inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#FFC933] active:bg-[#E5A600] text-[#0A0A0A] font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] whitespace-nowrap"
            style={{
              height: "max(44px, calc(var(--u) * 56))",
              fontSize: "max(14px, calc(var(--u) * 17))",
              paddingLeft: "calc(var(--u) * 30)",
              paddingRight: "calc(var(--u) * 30)",
              borderRadius: "calc(var(--u) * 9)",
            }}
          >
            <span>{cta.exploreCourses.label}</span>
            <ArrowRight
              className="ml-2.5 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>

          {/* Secondary Get in Touch */}
          <a
            href={cta.getInTouch.href}
            className="inline-flex items-center justify-center bg-transparent hover:bg-white/[0.08] border border-white/50 hover:border-[#FFB800] text-white hover:text-[#FFB800] font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] whitespace-nowrap"
            style={{
              height: "max(44px, calc(var(--u) * 56))",
              fontSize: "max(14px, calc(var(--u) * 17))",
              paddingLeft: "calc(var(--u) * 30)",
              paddingRight: "calc(var(--u) * 30)",
              borderRadius: "calc(var(--u) * 9)",
            }}
          >
            <span>{cta.getInTouch.label}</span>
          </a>
        </div>

        {/* 5. Bottom Meta Row: 12u (floor 11px), near bottom (~88% of hero height) */}
        <div
          className="flex items-center"
          style={{
            marginTop: "calc(var(--u) * 108)",
            gap: "calc(var(--u) * 14)",
          }}
        >
          <span
            className="bg-[#4FC3E8] rounded-full shrink-0"
            style={{ width: "calc(var(--u) * 38)", height: "2px" }}
            aria-hidden="true"
          />
          <div
            className="tracking-[0.2em] font-normal uppercase text-[#D6D6D6] select-none flex items-center gap-2"
            style={{ fontSize: "max(11px, calc(var(--u) * 12))" }}
          >
            <span>{hero.metaItems[0]}</span>
            <span className="text-white/50" aria-hidden="true">/</span>
            <span>{hero.metaItems[1]}</span>
            <span className="text-white/50" aria-hidden="true">/</span>
            <span>{hero.metaItems[2]}</span>
          </div>
        </div>
      </div>

      {/* ================= MOBILE & TABLET LAYOUT (< 1024px) ================= */}
      <div className="flex lg:hidden flex-col items-center text-center justify-center w-full">
        {/* 1. Eyebrow: single line with cyan lines on both sides, 11px, letter-spacing 0.16em */}
        <div className="flex items-center justify-center gap-2.5 mb-4">
          <span
            className="w-[24px] h-[2px] bg-[#4FC3E8] rounded-full shrink-0"
            aria-hidden="true"
          />
          <span className="text-[11px] font-normal tracking-[0.16em] uppercase text-[#D6D6D6] select-none whitespace-nowrap">
            {hero.eyebrow}
          </span>
          <span
            className="w-[24px] h-[2px] bg-[#4FC3E8] rounded-full shrink-0"
            aria-hidden="true"
          />
        </div>

        {/* 2. Main Headline (H1): clamp(36px, 11vw, 60px), line-height 1.02, centered, 3 lines */}
        <h1 className="font-extrabold tracking-[-0.02em] leading-[1.02] text-[clamp(36px,11vw,60px)] md:text-[clamp(36px,8vw,64px)] text-center">
          <span className="block text-white animate-hero-fade [animation-delay:90ms]">
            {hero.headline.line1}
          </span>
          <span className="block text-white animate-hero-fade [animation-delay:180ms]">
            {hero.headline.line2}
          </span>

          {/* Animated "Accountancy." with letter reveal and continuous gold shimmer */}
          <span
            className="accountancy-word relative inline-block text-[#FFB800] mt-[0.05em]"
            data-text="Accountancy."
          >
            <span className="sr-only">Accountancy.</span>
            <span aria-hidden="true" className="inline-flex">
              {wordLetters.map((char, index) => (
                <span
                  key={index}
                  className="animate-letter text-[#FFB800]"
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  {char}
                </span>
              ))}
            </span>
            <span
              className="animate-underline absolute left-0 bottom-0 w-full h-[2px] bg-[#FFB800] pointer-events-none"
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* 3. Subtext: EXACTLY two lines using two block spans, clamp(15px, 4.4vw, 19px), no max-width */}
        <p className="mt-[14px] text-[clamp(15px,4.4vw,19px)] font-light leading-[1.35] text-[#EDEDED] w-full text-center">
          <span className="block">{hero.subtext.line1}</span>
          <span className="block">{hero.subtext.line2}</span>
        </p>

        {/* 4. Mobile Buttons: one row, two buttons, each flex-1, height 48px, px-4, radius 10px, font 15px weight 600, gap 12px */}
        <div className="mt-[22px] flex flex-row max-[339px]:flex-col items-center justify-center gap-3 w-full max-w-[400px] mx-auto">
          {/* Primary Explore Courses */}
          <a
            href={cta.exploreCourses.href}
            className="flex-1 max-[339px]:w-full h-[48px] px-4 rounded-[10px] bg-[#FFB800] hover:bg-[#FFC933] active:bg-[#E5A600] text-[#0A0A0A] font-semibold text-[15px] inline-flex items-center justify-center shadow-sm transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>{cta.exploreCourses.label}</span>
            <ArrowRight className="ml-2 w-4 h-4 shrink-0" aria-hidden="true" />
          </a>

          {/* Secondary Get in Touch */}
          <a
            href={cta.getInTouch.href}
            className="flex-1 max-[339px]:w-full h-[48px] px-4 rounded-[10px] bg-transparent hover:bg-white/[0.08] border border-white/50 text-white font-semibold text-[15px] inline-flex items-center justify-center transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>{cta.getInTouch.label}</span>
          </a>
        </div>
      </div>
    </>
  );
}
