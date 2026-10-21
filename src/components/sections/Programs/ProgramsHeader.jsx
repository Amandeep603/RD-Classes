import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Header block for Section A: Explore Popular Programs.
 * Centered on all viewports.
 * Spacing: badge -> H2: 24u. H2 -> paragraph: 20u. Paragraph -> cards: 40u.
 * Mobile: paragraph max-width min(100%, 34rem), font clamp(15px, 4vw, 17px), 2-3 lines.
 */
export default function ProgramsHeader() {
  return (
    <header className="w-full flex flex-col items-center text-center">
      {/* Badge Pill: COURSE CATEGORIES (Anchor width 171u) */}
      <SectionBadge text="COURSE CATEGORIES" />

      {/* H2 Heading: Explore Popular Programs (62u / 1.1 / 800, Anchor width 754u) */}
      <div className="mt-[16px] lg:mt-[calc(var(--su,1px)*24)]">
        <SectionHeading
          id="programs-heading"
          text="Explore Popular"
          highlight="Programs"
          fontSize={62}
        />
      </div>

      {/* Section Paragraph: Desktop 20.5u / 1.5 / 400 (Anchor width 862u) */}
      <p
        className="mt-[14px] lg:mt-[calc(var(--su,1px)*20)] text-[#5A6472] font-normal leading-[1.5] w-full text-center text-balance"
        style={{
          fontSize: "clamp(15px, 4vw, calc(var(--su, 1px) * 20.5))",
          maxWidth: "min(100%, max(34rem, calc(var(--su, 1px) * 862)))",
        }}
      >
        Choose the right learning format for your CBSE Accountancy goals in Class 11 &amp; 12.
      </p>
    </header>
  );
}
