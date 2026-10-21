import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import InViewSection from "@/components/ui/InViewSection";
import SyllabusScroller from "./SyllabusScroller";
import { SYLLABUS_DATA } from "@/constants/syllabus";

/**
 * Section E: "What You Will Master" (id="syllabus")
 * Matches reference syllabus.png.
 * 4 book cards in a 4-column desktop grid / 2x2 tablet / horizontal snap scroller on mobile.
 */
export default function SyllabusSection() {
  const { badge, heading, books } = SYLLABUS_DATA;

  return (
    <InViewSection
      id="syllabus"
      aria-labelledby="syllabus-heading"
      className="relative w-full"
      style={{
        paddingTop: "clamp(40px, 4.5vw, calc(var(--su, 1px) * 64))",
        paddingBottom: "clamp(40px, 4.5vw, calc(var(--su, 1px) * 64))",
      }}
    >
      <div
        className="mx-auto w-full px-5 sm:px-6 min-[1340px]:px-[calc(var(--su,1px)*36)]"
        style={{
          maxWidth: "calc(var(--su, 1px) * 1600)",
        }}
      >
        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center">
          <Reveal index={0}>
            <SectionBadge variant="soft" text={badge} />
          </Reveal>

          <Reveal
            index={1}
            className="w-full mt-[clamp(14px,2vw,calc(var(--su,1px)*22))]"
          >
            <SectionHeading
              id="syllabus-heading"
              prefix={heading.prefix}
              highlight={heading.highlight}
              highlightTone="soft"
              fontSize={52}
            />
          </Reveal>
        </div>

        {/* Book Cards Scroller & Grid */}
        <div className="w-full mt-[clamp(28px,3.5vw,calc(var(--su,1px)*38))]">
          <SyllabusScroller books={books} />
        </div>
      </div>
    </InViewSection>
  );
}
