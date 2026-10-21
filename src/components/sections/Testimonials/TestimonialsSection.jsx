"use client";

import React, { useState, useEffect } from "react";
import { MessageSquareQuote, Star } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import InViewSection from "@/components/ui/InViewSection";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialsCarousel from "./TestimonialsCarousel";
import { TESTIMONIALS } from "@/constants/testimonials";

/**
 * Animated Rating Counter (0 -> 4.8)
 */
function RatingCounter({ target = 4.8 }) {
  const [val, setVal] = useState("4.8");

  useEffect(() => {
    let startTime;
    const duration = 800;

    let animId = requestAnimationFrame((timestamp) => {
      startTime = timestamp;
      setVal("0.0");
      const step = (t) => {
        const progress = Math.min((t - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setVal((ease * target).toFixed(1));
        if (progress < 1) {
          animId = requestAnimationFrame(step);
        }
      };
      animId = requestAnimationFrame(step);
    });

    return () => cancelAnimationFrame(animId);
  }, [target]);

  return <span>{val}</span>;
}

export default function TestimonialsSection() {
  return (
    <InViewSection
      id="reviews"
      aria-label="Parent and student testimonials"
      className="relative w-full overflow-hidden text-[#0F172A] scroll-mt-20 [isolation:isolate]"
      style={{
        paddingTop: "clamp(48px, 5.5vw, calc(var(--su, 1px) * 64))",
        paddingBottom: "clamp(48px, 5.5vw, calc(var(--su, 1px) * 64))",
        "--su": "min(100vw / 1600, 1px)",
      }}
    >
      <div
        className="relative z-10 w-full max-w-[1600px] lg:max-w-[calc(var(--su,1px)*1600)] mx-auto px-4 lg:px-0"
        style={{
          paddingLeft: "clamp(16px, 3.8vw, calc(var(--su, 1px) * 62))",
          paddingRight: "clamp(16px, 3.8vw, calc(var(--su, 1px) * 62))",
        }}
      >
        <Reveal>
          {/* Header Area (Centered) */}
          <div className="flex flex-col items-center text-center mb-8 lg:mb-[calc(var(--su,1px)*48)]">
            {/* Badge */}
            <SectionBadge
              text="PARENT & STUDENT FEEDBACK"
              icon={MessageSquareQuote}
              className="mb-4"
              style={{
                width: "clamp(260px, 28vw, calc(var(--su, 1px) * 331))",
                height: "clamp(34px, 3.8vw, calc(var(--su, 1px) * 42))",
                letterSpacing: "0.06em",
                fontSize: "calc(var(--su, 1px) * 14.5)",
              }}
            />

            {/* H2 Heading */}
            <SectionHeading
              text="What Students & Parents"
              highlight="Say"
              highlightTone="warm"
              markerHeight="45%"
              fontSize={52}
              align="center"
            />

            {/* Subtext (gap 18u, 2 lines desktop, ANCHOR line 1 827u) */}
            <p
              className="mt-3 lg:mt-[calc(var(--su,1px)*18)] text-[#5F6A7A] font-normal leading-[1.4] text-balance max-w-full lg:max-w-[calc(var(--su,1px)*840)]"
              style={{ fontSize: "clamp(15px, 2vw, calc(var(--su, 1px) * 20))" }}
            >
              <span className="lg:block">
                Real testimonials and WhatsApp result messages from Class 11 and 12 Accountancy students.
              </span>
            </p>

            {/* Rating Row (gap 24u) */}
            <div
              className="mt-4 lg:mt-[calc(var(--su,1px)*24)] flex items-center justify-center flex-wrap gap-3.5"
              style={{ gap: "clamp(8px, 1.2vw, calc(var(--su, 1px) * 14))" }}
            >
              <span
                className="font-extrabold text-[#0B1F3A]"
                style={{ fontSize: "clamp(18px, 2.2vw, calc(var(--su, 1px) * 24))" }}
              >
                <RatingCounter target={4.8} />/5
              </span>

              {/* 5 Stars */}
              <div className="flex items-center gap-1" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FFB800] text-[#FFB800] shrink-0"
                    style={{
                      width: "calc(var(--su, 1px) * 26)",
                      height: "calc(var(--su, 1px) * 26)",
                    }}
                  />
                ))}
              </div>

              {/* Divider 2u x 24u */}
              <div
                className="hidden sm:block rounded-full bg-[#D1D5DB]"
                style={{
                  width: "calc(var(--su, 1px) * 2)",
                  height: "calc(var(--su, 1px) * 24)",
                  marginInline: "calc(var(--su, 1px) * 4)",
                }}
                aria-hidden="true"
              />

              <span
                className="font-medium text-[#5F6A7A]"
                style={{ fontSize: "clamp(14px, 1.8vw, calc(var(--su, 1px) * 19))" }}
              >
                Based on 500+ reviews
              </span>
            </div>
          </div>
        </Reveal>

        {/* 2-Column Desktop / Stacked Mobile Carousel */}
        <TestimonialsCarousel testimonials={TESTIMONIALS} />
      </div>
    </InViewSection>
  );
}
