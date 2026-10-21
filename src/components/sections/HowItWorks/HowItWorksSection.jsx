import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import InViewSection from "@/components/ui/InViewSection";
import StepCard from "./StepCard";
import DemoCta from "./DemoCta";
import { HOW_IT_WORKS_DATA } from "@/constants/howItWorks";

/**
 * Section D: "How It Works" (id="how-it-works")
 * Matches reference how-it-works.png.
 * 4 step cards in a responsive grid + WhatsApp CTA pill.
 */
export default function HowItWorksSection() {
  const { badge, heading, subtitle, steps, cta } = HOW_IT_WORKS_DATA;

  return (
    <InViewSection
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative w-full"
      style={{
        paddingTop: "clamp(56px, 6vw, calc(var(--su, 1px) * 88))",
        paddingBottom: "clamp(40px, 4.5vw, calc(var(--su, 1px) * 56))",
      }}
    >
      <div
        className="mx-auto w-full px-5 sm:px-6 lg:px-[calc(var(--su,1px)*50)]"
        style={{
          maxWidth: "calc(var(--su, 1px) * 1600)",
        }}
      >
        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center">
          <Reveal index={0}>
            <SectionBadge variant="gradient" text={badge} />
          </Reveal>

          <Reveal
            index={1}
            className="w-full mt-[clamp(14px,2vw,calc(var(--su,1px)*20))]"
          >
            <SectionHeading
              id="how-it-works-heading"
              prefix={heading.prefix}
              highlight={heading.highlight}
              highlightTone="warm"
              fontSize={52}
            />
          </Reveal>

          <Reveal
            index={2}
            className="w-full flex justify-center mt-[clamp(12px,1.5vw,calc(var(--su,1px)*18))]"
          >
            <p
              className="font-normal text-[#5A6472] leading-[1.5] text-center whitespace-normal md:whitespace-nowrap"
              style={{
                fontSize: "clamp(15px, 2.2vw, calc(var(--su, 1px) * 20))",
                maxWidth: "calc(var(--su, 1px) * 844)",
              }}
            >
              {subtitle}
            </p>
          </Reveal>
        </div>

        {/* 4 Cards Grid */}
        <div
          className="how-it-works-grid justify-center mt-[clamp(28px,3.5vw,calc(var(--su,1px)*42))]"
          style={{
            gap: "clamp(16px, 2.2vw, calc(var(--su, 1px) * 30))",
          }}
        >
          {steps.map((step, idx) => (
            <Reveal
              key={step.id}
              index={idx + 3}
              className="w-full max-w-[440px] sm:max-w-none mx-auto"
            >
              <StepCard step={step} index={idx} />
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA Pill */}
        <Reveal index={7}>
          <DemoCta cta={cta} />
        </Reveal>
      </div>
    </InViewSection>
  );
}
