import React from "react";
import { HelpCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import InViewSection from "@/components/ui/InViewSection";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqList from "./FaqList";
import { FAQS } from "@/constants/faqs";

export default function FaqSection() {
  // FAQPage JSON-LD schema
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <InViewSection
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative w-full overflow-hidden text-[#0F172A] scroll-mt-20 [isolation:isolate]"
      style={{
        paddingTop: "clamp(48px, 5.5vw, calc(var(--su, 1px) * 64))",
        paddingBottom: "clamp(48px, 5.5vw, calc(var(--su, 1px) * 64))",
        "--su": "min(100vw / 1600, 1px)",
      }}
    >
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="relative z-10 w-full max-w-[1600px] lg:max-w-[calc(var(--su,1px)*1600)] mx-auto px-4 lg:px-0">
        <Reveal>
          {/* Header Area (Centered) */}
          <div className="flex flex-col items-center text-center mb-8 lg:mb-[calc(var(--su,1px)*36)]">
            {/* Badge */}
            <SectionBadge
              text="COMMON DOUBTS ANSWERED"
              icon={HelpCircle}
              className="mb-4"
              style={{
                width: "clamp(220px, 25vw, calc(var(--su, 1px) * 253))",
                height: "clamp(28px, 3.2vw, calc(var(--su, 1px) * 29))",
                fontSize: "calc(var(--su, 1px) * 12.5)",
              }}
            />

            {/* H2 Heading: Two lines with block highlight on 'Questions' */}
            <div className="max-w-[520px] lg:max-w-[calc(var(--su,1px)*520)] mx-auto">
              <SectionHeading
                line1="Frequently Asked"
                highlight="Questions"
                highlightVariant="block"
                fontSize={56}
                align="center"
              />
            </div>

            {/* Subtext (gap 28u, 2 lines desktop, ANCHOR line 2 732u) */}
            <p
              className="mt-4 lg:mt-[calc(var(--su,1px)*28)] text-[#6B7280] font-normal leading-[1.45] text-balance max-w-full lg:max-w-[calc(var(--su,1px)*780)]"
              style={{ fontSize: "clamp(15px, 1.8vw, calc(var(--su, 1px) * 18))" }}
            >
              <span className="lg:block">
                Have questions about batch timings, fees, Sunday mock tests,
              </span>
              <span className="lg:block">
                study materials, or online recordings? We have answered the most common ones here.
              </span>
            </p>
          </div>
        </Reveal>

        {/* Accordion FAQ List */}
        <FaqList items={FAQS} />
      </div>
    </InViewSection>
  );
}
