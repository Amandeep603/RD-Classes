import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";
import Button from "@/components/ui/Button";

/**
 * Left column / primary content block for Hero section.
 * Implements strict responsive scaling with both viewport width and height (svh/vh terms),
 * centered alignment on mobile devices, and rich typography animations on 'Accountancy.'.
 */
export default function HeroContent() {
  const { hero, cta } = SITE_CONFIG;
  const wordLetters = "Accountancy.".split("");

  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center w-full max-w-[620px] mx-auto lg:mx-0">
      {/* 1. Eyebrow: Centered on mobile with line above, side-by-side on desktop */}
      <div className="animate-hero-fade flex flex-col items-center lg:flex-row lg:items-center gap-1.5 lg:gap-3.5 mb-[clamp(8px,1.8svh,18px)]">
        <span
          className="w-[36px] lg:w-[46px] h-[3px] bg-[#4FC3F7] rounded-full shrink-0"
          aria-hidden="true"
        />
        <span className="text-[11px] sm:text-[13px] lg:text-[clamp(13px,0.95vw,15px)] font-normal tracking-[0.16em] lg:tracking-[0.22em] text-white/80 uppercase select-none whitespace-nowrap">
          {hero.eyebrow}
        </span>
      </div>

      {/* 2. Main Headline (H1): Fits vertically on short screens via svh clamp */}
      <h1
        id="hero-heading"
        className="font-extrabold tracking-[-0.02em] leading-[1.0] text-[clamp(2rem,min(5.2vw,9.2svh),5.5rem)]"
      >
        <span className="block text-white animate-hero-fade [animation-delay:90ms]">
          {hero.headline.line1}
        </span>
        <span className="block text-white animate-hero-fade [animation-delay:180ms]">
          {hero.headline.line2}
        </span>

        {/* Animated "Accountancy." with letter reveal, continuous gold shimmer sweep, and underline */}
        <span className="relative inline-block mt-0.5 animate-hero-fade [animation-delay:270ms]">
          {/* Accessible text for screen readers */}
          <span className="sr-only">Accountancy.</span>

          {/* Letter-by-letter reveal in base brand yellow */}
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

          {/* Continuous soft gold shimmer highlight sweeping across */}
          <span
            aria-hidden="true"
            className="animate-shimmer-sweep absolute inset-0 pointer-events-none select-none"
          >
            Accountancy.
          </span>

          {/* Underline drawn once from left to right */}
          <span
            className="animate-underline absolute -bottom-1 left-0 right-0 h-[3px] bg-[#FFB800] rounded-full"
            aria-hidden="true"
          />
        </span>
      </h1>

      {/* 3. Subtext: 2 lines max-w 320px on mobile */}
      <p className="mt-[clamp(8px,1.8svh,20px)] text-[clamp(0.95rem,min(1.7vw,2.8svh),1.4rem)] font-light leading-[1.35] text-white/85 max-w-[320px] sm:max-w-[460px] lg:max-w-[500px] animate-hero-fade [animation-delay:360ms]">
        <span className="block">{hero.subtext.line1}</span>
        <span className="block">{hero.subtext.line2}</span>
      </p>

      {/* 4. Action Buttons: side by side row on mobile */}
      <div className="mt-[clamp(12px,2.4svh,28px)] flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 lg:gap-5 w-full max-w-[340px] sm:max-w-none animate-hero-fade [animation-delay:450ms]">
        <Button
          href={cta.exploreCourses.href}
          icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
          className="flex-1 sm:flex-none h-[46px] sm:h-[clamp(48px,6.8svh,62px)] px-3 sm:px-[26px] lg:px-[34px] rounded-[8px] text-[0.88rem] sm:text-[clamp(0.95rem,1.25vw,1.15rem)] font-bold whitespace-nowrap"
        >
          {cta.exploreCourses.label}
        </Button>
        <Button
          variant="outline"
          href={cta.getInTouch.href}
          className="flex-1 sm:flex-none h-[46px] sm:h-[clamp(48px,6.8svh,62px)] px-3 sm:px-[26px] lg:px-[34px] rounded-[8px] text-[0.88rem] sm:text-[clamp(0.95rem,1.25vw,1.15rem)] font-semibold whitespace-nowrap"
        >
          {cta.getInTouch.label}
        </Button>
      </div>

      {/* 5. Bottom Meta Row (Desktop & Tablet only, hidden on mobile) */}
      <div className="hidden lg:flex items-center gap-3.5 mt-[clamp(16px,4svh,48px)] animate-hero-fade [animation-delay:540ms]">
        <span
          className="w-[38px] h-[3px] bg-[#4FC3F7] rounded-full shrink-0"
          aria-hidden="true"
        />
        <div className="text-[clamp(11px,0.85vw,13px)] tracking-[0.2em] font-normal uppercase text-white/75 select-none flex items-center gap-2">
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
