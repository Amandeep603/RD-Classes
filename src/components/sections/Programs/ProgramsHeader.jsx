import { PROGRAMS_HEADER } from "@/constants/programs";

/**
 * Header block for Explore Popular Programs section.
 * - Left: Eyebrow + 2-line H2 heading ("Explore Popular" in Navy, "Programs" in Blue).
 * - Right: Vertical divider line + descriptive paragraph (aligned to lower half of heading on desktop).
 * - Desktop: 27u left inset, fluid scaling via --su.
 * - Mobile: Left-aligned stack with 16px margin to paragraph, plain Tailwind/clamp().
 */
export default function ProgramsHeader() {
  const { eyebrow, headline, description } = PROGRAMS_HEADER;

  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between lg:pl-[calc(var(--su)*27)] gap-6 lg:gap-8">
      {/* Left Column: Eyebrow + H2 */}
      <div className="flex flex-col items-start max-w-[680px]">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-2.5 lg:gap-[calc(var(--su)*10)] mb-3 lg:mb-[calc(var(--su)*14)]"
        >
          {/* Blue line 36x2u #2A7DB5 */}
          <span
            className="w-[28px] lg:w-[calc(var(--su)*36)] h-[2px] bg-[#2A7DB5] rounded-full shrink-0"
            aria-hidden="true"
          />
          <span
            className="text-[12px] lg:text-[max(11px,calc(var(--su)*13))] font-semibold tracking-[0.16em] lg:tracking-[0.2em] text-[#5B6B7F] uppercase select-none whitespace-nowrap"
          >
            {eyebrow}
          </span>
        </div>

        {/* H2 on two lines */}
        <h2
          id="programs-heading"
          className="font-extrabold tracking-[-0.02em] leading-[1.0] text-[clamp(32px,9vw,46px)] lg:text-[max(34px,calc(var(--su)*64))]"
        >
          <span className="block text-[#0B1F3A]">{headline.line1}</span>
          <span className="block text-[#0A78AD] mt-1 lg:mt-[calc(var(--su)*4)]">
            {headline.line2}
          </span>
        </h2>
      </div>

      {/* Right Column: 2u vertical divider line + paragraph */}
      <div className="flex items-center gap-4 lg:gap-[calc(var(--su)*18)] lg:mb-[calc(var(--su)*12)] lg:self-end">
        {/* Vertical divider line 2u wide, ~56u tall (#C5D3E3) */}
        <span
          className="w-[2px] h-[48px] lg:h-[calc(var(--su)*52)] bg-[#C5D3E3] rounded-full shrink-0"
          aria-hidden="true"
        />

        {/* Paragraph */}
        <p
          className="text-[15px] lg:text-[max(14px,calc(var(--su)*18))] font-normal leading-[1.45] text-[#5B6B7F] max-w-[420px] lg:max-w-[calc(var(--su)*420)]"
        >
          {description}
        </p>
      </div>
    </div>
  );
}
