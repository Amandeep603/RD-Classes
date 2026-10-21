import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import InViewSection from "@/components/ui/InViewSection";
import PortalFeatures from "./PortalFeatures";
import DeviceShowcase from "./DeviceShowcase";
import { PORTAL_DATA } from "@/constants/portal";

/**
 * Section F: "Student Learning Portal" (id="portal")
 * Matches reference portal.png.
 * Outer white card with 2 columns on desktop (>=1100px):
 * - Left (650u): Badge, 2-line H2, paragraph, 4 feature items, 2 buttons
 * - Right: DeviceShowcase with Laptop & Phone mockups, blackboard notes, floating chips, parallax
 */
export default function PortalSection() {
  const { badge, badgeIcon, heading, paragraph, features, buttons } = PORTAL_DATA;

  return (
    <InViewSection
      id="portal"
      aria-labelledby="portal-heading"
      className="relative w-full"
      style={{
        paddingTop: "clamp(40px, 4.5vw, calc(var(--su, 1px) * 64))",
        paddingBottom: "clamp(56px, 6vw, calc(var(--su, 1px) * 96))",
      }}
    >
      <div
        className="mx-auto w-full px-4 sm:px-6 min-[1100px]:px-[calc(var(--su,1px)*48)]"
        style={{
          maxWidth: "calc(var(--su, 1px) * 1600)",
        }}
      >
        <Reveal index={0}>
          {/* Main White Card Container */}
          <div
            className="relative w-full bg-white overflow-hidden border border-[rgba(15,23,42,0.04)] rounded-[24px] min-[1100px]:rounded-[calc(var(--su,1px)*36)] py-[24px] px-[18px] min-[1100px]:pt-[calc(var(--su,1px)*48)] min-[1100px]:pb-[calc(var(--su,1px)*50)] min-[1100px]:pl-[calc(var(--su,1px)*70)] min-[1100px]:pr-[calc(var(--su,1px)*48)]"
            style={{
              boxShadow: "0 30px 60px -30px rgba(120, 90, 20, 0.18)",
            }}
          >
            {/* 2-Column Desktop Grid (>=1100px) / Stacked (<1100px) */}
            <div className="portal-grid items-center gap-[clamp(32px,4vw,calc(var(--su,1px)*60))]">
              {/* Left Column */}
              <div className="flex flex-col items-center min-[1100px]:items-start text-center min-[1100px]:text-left w-full">
                {/* Badge F */}
                <SectionBadge
                  variant="icon"
                  icon={badgeIcon}
                  text={badge}
                  className="mb-[clamp(16px,2vw,calc(var(--su,1px)*28))]"
                />

                {/* Heading */}
                <SectionHeading
                  id="portal-heading"
                  line1={heading.line1}
                  line2Prefix={heading.line2Prefix}
                  highlight={heading.highlight}
                  highlightTone="warm"
                  fontSize={52}
                  align="left"
                  className="w-full"
                />

                {/* Subtitle / Paragraph */}
                <p
                  className="font-normal text-[#596273] leading-[1.47] mt-[clamp(14px,1.8vw,calc(var(--su,1px)*24))] w-full max-w-full min-[1100px]:max-w-[calc(var(--su,1px)*600)] text-center min-[1100px]:text-left text-[clamp(15px,4vw,17px)] min-[1100px]:text-[calc(var(--su,1px)*19)]"
                  style={{
                    textWrap: "pretty",
                  }}
                >
                  {paragraph}
                </p>

                {/* Features & Action Buttons */}
                <PortalFeatures features={features} buttons={buttons} />
              </div>

              {/* Right Column: Device Showcase */}
              <div className="w-full max-w-[640px] min-[1100px]:max-w-none mx-auto min-[1100px]:self-center">
                <DeviceShowcase />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </InViewSection>
  );
}
