import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

/**
 * Left content block for RD Classes Hero section replicating the measured reference.
 * Supports fluid scaling via --u token with strict readable floors.
 * Center-aligned on mobile and tablet (< 1024px), anchored left at 6.25vw on desktop (>= 1024px).
 */
export default function HeroContent() {
  const { hero, cta } = SITE_CONFIG;
  const wordLetters = "Accountancy.".split("");

  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center w-full max-w-[680px]">
      {/* 1. Eyebrow */}
      <div
        className="animate-hero-fade flex items-center justify-center lg:justify-start gap-2.5 mb-[clamp(10px,calc(var(--u)*12),20px)]"
        style={{
          gap: "calc(var(--u) * 14)",
          marginBottom: "calc(var(--u) * 12)",
        }}
      >
        <span
          className="w-[24px] lg:w-auto h-[2px] bg-[#4FC3E8] rounded-full shrink-0"
          style={{ width: "calc(var(--u) * 46)", height: "2px" }}
          aria-hidden="true"
        />
        <span
          className="text-[11px] font-normal tracking-[0.2em] text-[#D6D6D6] uppercase select-none whitespace-nowrap"
          style={{ fontSize: "max(11px, calc(var(--u) * 15))" }}
        >
          {hero.eyebrow}
        </span>
        <span
          className="lg:hidden w-[24px] h-[2px] bg-[#4FC3E8] rounded-full shrink-0"
          aria-hidden="true"
        />
      </div>

      {/* 2. Main Headline (H1): Exactly 3 lines */}
      <h1
        id="hero-heading"
        className="font-extrabold tracking-[-0.02em] leading-[1.02] text-[clamp(40px,11.5vw,64px)]"
        style={{
          fontSize: "max(44px, calc(var(--u) * 96))",
          lineHeight: 0.96,
        }}
      >
        <span className="block text-white animate-hero-fade [animation-delay:90ms]">
          {hero.headline.line1}
        </span>
        <span className="block text-white animate-hero-fade [animation-delay:180ms]">
          {hero.headline.line2}
        </span>

        {/* Animated "Accountancy." with letter reveal and continuous gold shimmer */}
        <span className="relative inline-block mt-[0.05em] animate-hero-fade [animation-delay:270ms]">
          {/* Accessible text for screen readers */}
          <span className="sr-only">Accountancy.</span>

          {/* Letter by letter reveal in base yellow */}
          <span aria-hidden="true" className="inline-flex text-[#FFB800]">
            {wordLetters.map((char, index) => (
              <span
                key={index}
                className="animate-letter"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                {char}
              </span>
            ))}
          </span>

          {/* Soft gold shimmer sweep overlay */}
          <span
            aria-hidden="true"
            className="animate-shimmer-sweep absolute inset-0 pointer-events-none select-none"
          >
            Accountancy.
          </span>
        </span>
      </h1>

      {/* 3. Subtext: 2 lines */}
      <p
        className="mt-[clamp(12px,calc(var(--u)*16),24px)] text-[clamp(17px,4.2vw,20px)] font-light leading-[1.35] text-[#EDEDED] max-w-[340px] sm:max-w-[480px] animate-hero-fade [animation-delay:360ms]"
        style={{
          fontSize: "max(16px, calc(var(--u) * 28))",
          lineHeight: 1.35,
          marginTop: "calc(var(--u) * 6)",
          maxWidth: "calc(var(--u) * 540)",
        }}
      >
        <span className="block">{hero.subtext.line1}</span>
        <span className="block">{hero.subtext.line2}</span>
      </p>

      {/* 4. Action Buttons */}
      <div
        className="mt-[clamp(16px,calc(var(--u)*32),40px)] flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full max-w-[360px] sm:max-w-none animate-hero-fade [animation-delay:450ms]"
        style={{
          gap: "calc(var(--u) * 28)",
          marginTop: "calc(var(--u) * 32)",
        }}
      >
        {/* Primary Explore Courses */}
        <a
          href={cta.exploreCourses.href}
          className="group w-full sm:w-auto inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#FFC933] active:bg-[#E5A600] text-[#0A0A0A] font-semibold text-[max(14px,calc(var(--u)*20))] h-[48px] px-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] whitespace-nowrap"
          style={{
            width: "calc(var(--u) * 257)",
            height: "calc(var(--u) * 66)",
            borderRadius: "calc(var(--u) * 10)",
            fontSize: "max(14px, calc(var(--u) * 20))",
          }}
        >
          <span>{cta.exploreCourses.label}</span>
          <ArrowRight
            className="ml-2.5 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>

        {/* Secondary Get in Touch */}
        <a
          href={cta.getInTouch.href}
          className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent hover:bg-white/[0.08] border border-white/50 hover:border-[#FFB800] text-white hover:text-[#FFB800] font-semibold text-[max(14px,calc(var(--u)*20))] h-[48px] px-6 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] whitespace-nowrap"
          style={{
            width: "calc(var(--u) * 250)",
            height: "calc(var(--u) * 66)",
            borderRadius: "calc(var(--u) * 10)",
            fontSize: "max(14px, calc(var(--u) * 20))",
          }}
        >
          <span>{cta.getInTouch.label}</span>
        </a>
      </div>

      {/* 5. Bottom Meta Row (Desktop & Tablet >= 640px) */}
      <div
        className="hidden sm:flex items-center justify-center lg:justify-start gap-3.5 animate-hero-fade [animation-delay:540ms]"
        style={{
          marginTop: "calc(var(--u) * 104)",
          gap: "calc(var(--u) * 14)",
        }}
      >
        <span
          className="w-[38px] h-[2px] bg-[#4FC3E8] rounded-full shrink-0"
          style={{ width: "calc(var(--u) * 38)", height: "2px" }}
          aria-hidden="true"
        />
        <div
          className="tracking-[0.2em] font-normal uppercase text-[#D6D6D6] select-none flex items-center gap-2"
          style={{ fontSize: "max(11px, calc(var(--u) * 14))" }}
        >
          <span>{hero.metaItems[0]}</span>
          <span className="text-white/50" aria-hidden="true">/</span>
          <span>{hero.metaItems[1]}</span>
          <span className="text-white/50" aria-hidden="true">/</span>
          <span>{hero.metaItems[2]}</span>
        </div>
      </div>
    </div>
  );
}
