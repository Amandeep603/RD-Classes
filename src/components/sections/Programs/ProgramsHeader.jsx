import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Header block for Section A: Explore Popular Programs.
 * Spacing: badge -> H2: 24u. H2 -> paragraph: 26u.
 */
export default function ProgramsHeader() {
  return (
    <header className="w-full flex flex-col items-center text-center">
      {/* Badge Pill: COURSE CATEGORIES */}
      <SectionBadge>COURSE CATEGORIES</SectionBadge>

      {/* H2 Heading: Explore Popular Programs (highlighted Programs) */}
      <div className="mt-[16px] lg:mt-[calc(var(--su)*24)]">
        <SectionHeading
          id="programs-heading"
          prefix="Explore Popular"
          highlight="Programs"
        />
      </div>

      {/* Section Paragraph: centered, ~22u (floor 16px), color #5A6472, line-height 1.5, max-width ~900u */}
      <p className="mt-[14px] lg:mt-[calc(var(--su)*26)] text-[16px] sm:text-[18px] lg:text-[calc(var(--su)*22)] font-normal leading-[1.5] text-[#5A6472] max-w-[900px] lg:max-w-[calc(var(--su)*900)] [text-wrap:balance]">
        Choose the right learning format for your CBSE Accountancy goals in Class 11 &amp; 12.
      </p>
    </header>
  );
}
