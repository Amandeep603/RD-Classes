import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { DynamicIcon } from "@/lib/icons";

/**
 * StepCard component for Section D: "How It Works".
 * Fix Pass v3.4 specifications:
 * - Cards (<640px): padding 22px, min-height auto, footer margin-top 22px (no pinned empty gap)
 * - Mobile dimensions (<640px):
 *   - icon tile: 60px
 *   - number: 40px
 *   - title: 24px
 *   - description: 15.5px
 *   - check circle: 30px
 *   - arrow circle: 46px
 */
export default function StepCard({ step, index }) {
  // Custom wave path: card 1 flatter wave, cards 2-4 steeper wedge
  const isCard1 = index === 0;
  const wavePath = isCard1
    ? "M 100 45 C 80 65, 55 85, 20 100 L 100 100 Z"
    : "M 100 58 C 82 72, 60 88, 32 100 L 100 100 Z";

  return (
    <article
      data-tone={step.tone}
      className="step-card group relative flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_32px_50px_-20px_rgba(60,40,10,0.32)] h-full p-[22px] sm:py-[max(20px,calc(var(--su,1px)*25))] sm:px-[max(20px,calc(var(--su,1px)*33))]"
      style={{
        containerType: "inline-size",
        background: "var(--tone-card-bg)",
        border: "1px solid var(--tone-card-border)",
        boxShadow: "0 24px 40px -26px rgba(60, 40, 10, 0.25)",
        borderRadius: "max(16px, calc(var(--su, 1px) * 20))",
      }}
    >
      {/* Decorative corner swoosh SVG behind content */}
      <svg
        className="pointer-events-none absolute right-0 bottom-0 w-[48%] h-[48%] origin-bottom-right transition-transform duration-300 ease-out group-hover:scale-110 z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d={wavePath} fill="var(--tone-wave)" />
      </svg>

      {/* Top Content Area */}
      <div className="relative z-10 flex flex-col">
        {/* Top Header Row: Icon Tile + Number */}
        <div className="flex items-start justify-between">
          <div
            className="flex items-center justify-center transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-105 shrink-0 w-[60px] h-[60px] sm:w-[clamp(56px,21.3cqw,calc(var(--su,1px)*75))] sm:h-[clamp(56px,21.3cqw,calc(var(--su,1px)*75))]"
            style={{
              borderRadius: "max(14px, calc(var(--su, 1px) * 20))",
              backgroundColor: "var(--tone-tile-bg)",
              color: "var(--tone-tile-color)",
            }}
          >
            <DynamicIcon
              name={step.icon}
              style={{
                width: "clamp(28px, 10.8cqw, calc(var(--su, 1px) * 38))",
                height: "clamp(28px, 10.8cqw, calc(var(--su, 1px) * 38))",
              }}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>

          <span
            className="font-extrabold select-none leading-none tracking-tight font-heading text-[40px] sm:text-[clamp(36px,16cqw,calc(var(--su,1px)*65))]"
            style={{
              color: "var(--tone-number)",
              marginTop: "max(4px, calc(var(--su, 1px) * 8))",
            }}
            aria-hidden="true"
          >
            {step.number}
          </span>
        </div>

        {/* Accent Line */}
        <div
          className="rounded-full transition-all duration-300"
          style={{
            width: "clamp(26px, 9.1cqw, calc(var(--su, 1px) * 32))",
            height: "max(3px, calc(var(--su, 1px) * 4))",
            marginTop: "max(8px, calc(var(--su, 1px) * 13))",
            background: "var(--tone-accent)",
          }}
          aria-hidden="true"
        />

        {/* Step Label */}
        <p
          className="font-bold uppercase tracking-[0.08em] text-[#2B2B2B]"
          style={{
            fontSize: "clamp(13px, 5cqw, calc(var(--su, 1px) * 22))",
            marginTop: "max(10px, calc(var(--su, 1px) * 16))",
          }}
        >
          {step.stepLabel}
        </p>

        {/* Title */}
        <h3
          className="font-extrabold text-[#0F0F0F] tracking-[-0.01em] whitespace-nowrap overflow-visible text-[24px] sm:text-[clamp(20px,9cqw,calc(var(--su,1px)*33))]"
          style={{
            marginTop: "max(4px, calc(var(--su, 1px) * 6))",
          }}
        >
          {step.title}
        </h3>

        {/* Description */}
        <p
          className="text-[#5B6676] font-normal leading-[1.44] text-[15.5px] sm:text-[clamp(14px,5.1cqw,calc(var(--su,1px)*18))]"
          style={{
            marginTop: "max(8px, calc(var(--su, 1px) * 12))",
          }}
        >
          {step.description}
        </p>
      </div>

      {/* Footer Row (margin-top 22px on mobile) */}
      <div
        className="relative z-10 flex items-center justify-between border-t border-transparent mt-[22px] sm:mt-[max(20px,calc(var(--su,1px)*24))]"
      >
        {/* Left: Check circle + footer label */}
        <div className="flex items-center gap-[max(6px,calc(var(--su,1px)*10))]">
          <div
            className="flex items-center justify-center rounded-full text-white shrink-0 w-[30px] h-[30px] sm:w-[clamp(28px,9.6cqw,calc(var(--su,1px)*34))] sm:h-[clamp(28px,9.6cqw,calc(var(--su,1px)*34))]"
            style={{
              backgroundColor: "var(--tone-check-bg)",
            }}
            aria-hidden="true"
          >
            <Check
              className="w-4 h-4 sm:w-[clamp(15px,5.1cqw,calc(var(--su,1px)*18))] sm:h-[clamp(15px,5.1cqw,calc(var(--su,1px)*18))]"
              strokeWidth={3}
            />
          </div>
          <span
            className="font-medium text-[#1F2937] whitespace-nowrap"
            style={{
              fontSize: "clamp(12.5px, 4.8cqw, calc(var(--su, 1px) * 17.5))",
            }}
          >
            {step.footerLabel}
          </span>
        </div>

        {/* Right: Arrow button link */}
        <Link
          href={step.href || "#"}
          aria-label={`${step.title} - continue`}
          target={step.href?.startsWith("http") ? "_blank" : undefined}
          rel={step.href?.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex items-center justify-center rounded-full transition-all duration-200 active:scale-95 group-hover:scale-105 shrink-0 w-[46px] h-[46px] sm:w-[clamp(42px,14.7cqw,calc(var(--su,1px)*52))] sm:h-[clamp(42px,14.7cqw,calc(var(--su,1px)*52))]"
          style={{
            backgroundColor: "var(--tone-arrow-bg)",
            color: "var(--tone-arrow-color)",
          }}
        >
          <ArrowRight
            className="transition-transform duration-200 group-hover:translate-x-[3px] w-[20px] h-[20px] sm:w-[clamp(18px,6.2cqw,calc(var(--su,1px)*22))] sm:h-[clamp(18px,6.2cqw,calc(var(--su,1px)*22))]"
            strokeWidth={2.2}
          />
        </Link>
      </div>
    </article>
  );
}
