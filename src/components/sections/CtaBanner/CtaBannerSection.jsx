"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Trophy,
  ArrowRight,
  Phone,
  MapPin,
  IndianRupee,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import InViewSection from "@/components/ui/InViewSection";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/constants/site";

export default function CtaBannerSection() {
  const whatsappUrl = getWhatsAppUrl(
    "Hello RD Classes, I would like to book a free demo class."
  );

  return (
    <InViewSection
      id="demo"
      aria-label="Book a free demo class"
      className="relative w-full overflow-hidden text-[#0F172A] scroll-mt-20 [isolation:isolate]"
      style={{
        paddingTop: "clamp(32px, 4vw, calc(var(--su, 1px) * 40))",
        paddingBottom: "clamp(56px, 7vw, calc(var(--su, 1px) * 88))",
        "--su": "min(100vw / 1600, 1px)",
      }}
    >
      <div
        className="relative z-10 w-full max-w-[1600px] lg:max-w-[calc(var(--su,1px)*1600)] mx-auto px-4 lg:px-0"
        style={{
          paddingLeft: "clamp(16px, 4vw, calc(var(--su, 1px) * 62))",
          paddingRight: "clamp(16px, 4vw, calc(var(--su, 1px) * 62))",
        }}
      >
        <Reveal>
          {/* Main Card (1475u x 620u, radius 36u) */}
          <div
            className="relative w-full rounded-[28px] lg:rounded-[calc(var(--su,1px)*36)] overflow-hidden"
            style={{
              background:
                "var(--surface-k-card-bg, linear-gradient(135deg, #FFFDF8 0%, #F7F0DD 100%))",
              border: "1px solid rgba(15, 23, 42, 0.05)",
              boxShadow: "0 40px 80px -40px rgba(120, 90, 20, 0.25)",
              padding:
                "clamp(28px, 3.5vw, calc(var(--su, 1px) * 47)) clamp(20px, 6vw, calc(var(--su, 1px) * 97))",
            }}
          >
            {/* ================= RIGHT DECORATIVE ELEMENTS ================= */}

            {/* Large Pale-Yellow Circle (520u diameter at top-right, hard-edged) */}
            <div
              className="absolute -top-[15%] -right-[10%] lg:-top-[calc(var(--su,1px)*60)] lg:-right-[calc(var(--su,1px)*60)] rounded-full pointer-events-none -z-10"
              style={{
                width: "clamp(260px, 38vw, calc(var(--su, 1px) * 520))",
                height: "clamp(260px, 38vw, calc(var(--su, 1px) * 520))",
                background:
                  "var(--surface-k-circle, linear-gradient(135deg, #FFD66A 0%, #FFCA45 100%))",
                opacity: 0.85,
              }}
              aria-hidden="true"
            >
              {/* Faint RD logo watermark inside circle */}
              <div className="absolute inset-0 flex items-center justify-center opacity-18 pointer-events-none p-12">
                <Image
                  src="/images/logo-rd.png"
                  alt=""
                  width={280}
                  height={280}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bottom-Right Books & Desk Photo (Blended with linear gradient) */}
            <div
              className="hidden lg:block absolute bottom-0 right-0 w-[34%] h-[68%] pointer-events-none z-10 overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, #000 28%), linear-gradient(to top, #000 75%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, #000 28%), linear-gradient(to top, #000 75%, transparent 100%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
              aria-hidden="true"
            >
              <Image
                src="/images/cta/books-desk.webp"
                alt=""
                fill
                sizes="520px"
                className="object-cover object-bottom"
              />
            </div>

            {/* ================= LEFT CONTENT COLUMN (~800u max width) ================= */}
            <div className="relative z-20 max-w-full lg:max-w-[calc(var(--su,1px)*800)] flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Row 1: Logo Tile + 2 Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-[calc(var(--su,1px)*24)] mb-6 lg:mb-[calc(var(--su,1px)*36)]">
                {/* Logo Tile (White, 129u x 90u, radius 18u) */}
                <div
                  className="rounded-[18px] bg-white flex items-center justify-center shrink-0 shadow-md p-1.5"
                  style={{
                    width: "clamp(90px, 10vw, calc(var(--su, 1px) * 129))",
                    height: "clamp(60px, 6.8vw, calc(var(--su, 1px) * 90))",
                    boxShadow: "0 8px 20px -10px rgba(15, 23, 42, 0.25)",
                  }}
                >
                  <Image
                    src="/images/logo-rd.png"
                    alt="RD Classes Logo"
                    width={110}
                    height={75}
                    className="object-contain"
                  />
                </div>

                {/* Pill 1: Limited Batch Seats */}
                <div
                  className="rounded-full flex items-center justify-center gap-2 font-extrabold uppercase px-4 whitespace-nowrap shadow-2xs lg:animate-cta-pill-float"
                  style={{
                    height: "clamp(38px, 4.2vw, calc(var(--su, 1px) * 50))",
                    backgroundColor: "#FFEFC2",
                    color: "#1F2937",
                    fontSize: "clamp(12px, 1.3vw, calc(var(--su, 1px) * 14.5))",
                  }}
                >
                  <Users className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>LIMITED BATCH SEATS</span>
                </div>

                {/* Pill 2: ₹5,100 Cash for 100/100 */}
                <div
                  className="rounded-full flex items-center justify-center gap-2 font-bold px-4 whitespace-nowrap shadow-2xs lg:animate-cta-pill-float"
                  style={{
                    height: "clamp(38px, 4.2vw, calc(var(--su, 1px) * 50))",
                    backgroundColor: "#F3F3F5",
                    color: "#1F2937",
                    fontSize: "clamp(12px, 1.3vw, calc(var(--su, 1px) * 14.5))",
                    animationDelay: "-3s",
                  }}
                >
                  <Trophy className="w-4 h-4 text-[#F5B400] shrink-0" />
                  <span>₹5,100 Cash for 100/100</span>
                </div>
              </div>

              {/* H2 Heading: 72u / 800 / 0.98 / -0.02em, ANCHOR line 1 761u */}
              <h2
                className="font-extrabold tracking-[-0.02em] leading-[0.98] text-[#0B1630] text-balance mb-4 lg:mb-[calc(var(--su,1px)*22)]"
                style={{
                  fontSize: "clamp(30px, 9.5vw, calc(var(--su, 1px) * 77))",
                }}
              >
                <span className="lg:inline-block">Take a demo for free;</span>
                <span className="lg:block mt-1">
                  <span
                    className="inline-block bg-gradient-to-r from-[#FFC21A] to-[#F97316] bg-clip-text text-transparent pb-[0.12em]"
                  >
                    you won&apos;t regret it
                  </span>
                  <span className="text-[#5B5B5B]">.</span>
                </span>
              </h2>

              {/* Paragraph (gap 22u, ANCHOR line 2 794u) */}
              <p
                className="text-[#4B5563] font-normal leading-[1.55] text-balance max-w-full lg:max-w-[calc(var(--su,1px)*780)] mb-6 lg:mb-[calc(var(--su,1px)*34)]"
                style={{
                  fontSize: "clamp(15px, 1.8vw, calc(var(--su, 1px) * 20))",
                }}
              >
                <span className="lg:block">
                  Sit in an ongoing Accountancy class with Ronak Sir in Sector 9, Faridabad.
                </span>
                <span className="lg:block">
                  See the concepts live, ask your doubts, and decide with complete peace of mind.
                </span>
              </p>

              {/* Buttons Row (gap 26u) */}
              <div
                className="w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-[calc(var(--su,1px)*26)] mb-8 lg:mb-[calc(var(--su,1px)*40)]"
              >
                {/* Primary: WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full font-bold text-[#111111] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  style={{
                    width: "clamp(260px, 100%, calc(var(--su, 1px) * 437))",
                    height: "clamp(52px, 5.5vw, calc(var(--su, 1px) * 61))",
                    background: "linear-gradient(90deg, #FFCB2E 0%, #FFB800 100%)",
                    fontSize: "clamp(16px, 1.8vw, calc(var(--su, 1px) * 19))",
                    boxShadow: "0 14px 28px -12px rgba(255, 184, 0, 0.6)",
                  }}
                >
                  {/* Subtle ring pulse animation */}
                  <span
                    className="absolute -inset-1 rounded-full border-2 border-[#FFCB2E]/60 pointer-events-none animate-cta-ring"
                    aria-hidden="true"
                  />
                  <WhatsAppIcon className="w-5 h-5 text-[#111111]" />
                  <span>Book Free Demo on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Secondary: Phone Call Button */}
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full font-bold text-[#111827] bg-transparent transition-colors duration-200 hover:bg-black/5 active:scale-[0.98] cursor-pointer"
                  style={{
                    width: "clamp(240px, 100%, calc(var(--su, 1px) * 295))",
                    height: "clamp(52px, 5.5vw, calc(var(--su, 1px) * 61))",
                    border: "1.5px solid #111827",
                    fontSize: "clamp(16px, 1.8vw, calc(var(--su, 1px) * 19))",
                  }}
                >
                  <Phone className="w-4 h-4 text-[#111827]" />
                  <span>Call +91 83685 45620</span>
                </a>
              </div>

              {/* Info Row: 3 items with dividers */}
              <div className="w-full flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-[calc(var(--su,1px)*16)] pt-2">
                {/* Item 1: Location */}
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full flex items-center justify-center shrink-0"
                    style={{
                      width: "clamp(42px, 4.5vw, calc(var(--su, 1px) * 56))",
                      height: "clamp(42px, 4.5vw, calc(var(--su, 1px) * 56))",
                      backgroundColor: "#D7ECFB",
                    }}
                  >
                    <MapPin className="w-5 h-5 text-[#2B8FD6]" />
                  </div>
                  <span
                    className="text-[#4B5563] text-left leading-tight font-medium"
                    style={{ fontSize: "clamp(13px, 1.4vw, calc(var(--su, 1px) * 16.5))" }}
                  >
                    SCF 59–60, 2nd Floor,<br />Sector 9 Market, Faridabad
                  </span>
                </div>

                {/* Divider 1 */}
                <div className="hidden md:block w-[1px] h-[calc(var(--su,1px)*40)] bg-[#E5E7EB] mx-2" aria-hidden="true" />

                {/* Item 2: Payment */}
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full flex items-center justify-center shrink-0"
                    style={{
                      width: "clamp(42px, 4.5vw, calc(var(--su, 1px) * 56))",
                      height: "clamp(42px, 4.5vw, calc(var(--su, 1px) * 56))",
                      backgroundColor: "#FFF0CB",
                    }}
                  >
                    <IndianRupee className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <span
                    className="text-[#4B5563] text-left leading-tight font-medium"
                    style={{ fontSize: "clamp(13px, 1.4vw, calc(var(--su, 1px) * 16.5))" }}
                  >
                    No advance<br />payment needed
                  </span>
                </div>

                {/* Divider 2 */}
                <div className="hidden md:block w-[1px] h-[calc(var(--su,1px)*40)] bg-[#E5E7EB] mx-2" aria-hidden="true" />

                {/* Item 3: Live Experience */}
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full flex items-center justify-center shrink-0"
                    style={{
                      width: "clamp(42px, 4.5vw, calc(var(--su, 1px) * 56))",
                      height: "clamp(42px, 4.5vw, calc(var(--su, 1px) * 56))",
                      backgroundColor: "#FFE3D1",
                    }}
                  >
                    <Users className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <span
                    className="text-[#4B5563] text-left leading-tight font-medium"
                    style={{ fontSize: "clamp(13px, 1.4vw, calc(var(--su, 1px) * 16.5))" }}
                  >
                    Ongoing live class<br />experience
                  </span>
                </div>
              </div>

              {/* Mobile Decorative Book Image Strip (<1024px) */}
              <div className="block lg:hidden w-full mt-8 rounded-2xl overflow-hidden relative h-48">
                <Image
                  src="/images/cta/books-desk.webp"
                  alt=""
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </InViewSection>
  );
}
