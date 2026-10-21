"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Globe, MessageCircle } from "lucide-react";
import { DynamicIcon } from "@/lib/icons";
import Rating from "./Rating";
import FacultyChip from "./FacultyChip";

/**
 * Course Card for Section B: Featured Batches.
 * Exact visual replica of courses-full.png & courses-cards.png.
 * 475u canvas width, CSS container for cqw scaling.
 * 4deg tilt on pointer move.
 * View Course: outline rest state on mobile; hover fill only on desktop fine pointer.
 * WhatsApp: gentle 5s pulse ring.
 */
export default function CourseCard({ course, index = 0 }) {
  // Badge tone pill styles
  const badgeClasses = {
    navy: "bg-[#0B3556] text-white",
    yellow: "bg-[#FFC21A] text-[#0F172A]",
    orange: "bg-[#F97316] text-white",
  }[course.badgeTone] || "bg-[#0B3556] text-white";

  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
    setTilt({ rx: -py * 8, ry: px * 8 }); // max 4 deg
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <article
      data-theme={course.theme}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        "--i": index,
        containerType: "inline-size",
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(-8px)`
          : undefined,
      }}
      className="course-card group relative flex flex-col justify-between bg-white rounded-[18px] lg:rounded-[calc(var(--su,1px)*18)] border border-[rgba(15,23,42,0.07)] overflow-hidden shadow-[0_1px_2px_rgba(15,23,42,0.04),0_18px_40px_-22px_rgba(15,23,42,0.18)] hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.22)] transition-all duration-300 ease-out h-full select-none"
    >
      {/* ================= CARD BANNER (170u high) ================= */}
      <div
        className="course-card-banner relative w-full overflow-hidden flex flex-col justify-between"
        style={{
          height: "clamp(140px, 35.8cqw, calc(var(--su, 1px) * 170))",
          paddingTop: "clamp(14px, 3.6cqw, calc(var(--su, 1px) * 17))",
          paddingLeft: "clamp(20px, 5.5cqw, calc(var(--su, 1px) * 26))",
          paddingRight: "clamp(20px, 5.5cqw, calc(var(--su, 1px) * 26))",
        }}
      >
        {/* Decorative Circle 1: 190u at left -40u / bottom -110u */}
        <div
          className="course-card-banner-circle absolute rounded-full pointer-events-none banner-circle-drift"
          style={{
            width: "clamp(150px, 40cqw, calc(var(--su, 1px) * 190))",
            height: "clamp(150px, 40cqw, calc(var(--su, 1px) * 190))",
            left: "calc(var(--su, 1px) * -40)",
            bottom: "calc(var(--su, 1px) * -110)",
          }}
          aria-hidden="true"
        />

        {/* Decorative Circle 2: 240u at right -60u / bottom -140u */}
        <div
          className="course-card-banner-circle absolute rounded-full pointer-events-none banner-circle-drift"
          style={{
            width: "clamp(180px, 50.5cqw, calc(var(--su, 1px) * 240))",
            height: "clamp(180px, 50.5cqw, calc(var(--su, 1px) * 240))",
            right: "calc(var(--su, 1px) * -60)",
            bottom: "calc(var(--su, 1px) * -140)",
            animationDelay: "-6s",
          }}
          aria-hidden="true"
        />

        {/* Top Header Row in Banner: Class Pill + Badge Pill */}
        <div className="relative z-10 flex items-center justify-between w-full">
          {/* Class Pill: 37u high, padding-x 22u, 14u / 700, #0F2A44 */}
          <div
            className="course-card-class-pill inline-flex items-center justify-center rounded-full font-bold select-none"
            style={{
              height: "clamp(30px, 7.8cqw, calc(var(--su, 1px) * 37))",
              paddingLeft: "clamp(14px, 4.6cqw, calc(var(--su, 1px) * 22))",
              paddingRight: "clamp(14px, 4.6cqw, calc(var(--su, 1px) * 22))",
              fontSize: "clamp(12px, 2.9cqw, calc(var(--su, 1px) * 14))",
            }}
          >
            {course.classLabel}
          </div>

          {/* Badge Pill: 37u high, padding-x 22u, 14u / 600 */}
          <div
            className={`inline-flex items-center justify-center rounded-full font-semibold select-none shadow-xs ${badgeClasses}`}
            style={{
              height: "clamp(30px, 7.8cqw, calc(var(--su, 1px) * 37))",
              paddingLeft: "clamp(14px, 4.6cqw, calc(var(--su, 1px) * 22))",
              paddingRight: "clamp(14px, 4.6cqw, calc(var(--su, 1px) * 22))",
              fontSize: "clamp(12px, 2.9cqw, calc(var(--su, 1px) * 14))",
            }}
          >
            {course.badge}
          </div>
        </div>

        {/* Centered Icon Tile: 79u square, radius 18u, top 63u from card top */}
        <div className="relative z-10 flex items-center justify-center w-full pb-2">
          <div
            className="course-card-icon-tile flex items-center justify-center rounded-[18px] lg:rounded-[calc(var(--su,1px)*18)] shadow-xs transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105"
            style={{
              width: "clamp(62px, 16.6cqw, calc(var(--su, 1px) * 79))",
              height: "clamp(62px, 16.6cqw, calc(var(--su, 1px) * 79))",
            }}
          >
            <DynamicIcon
              name={course.icon}
              strokeWidth={1.8}
              className="text-[#0F2A44]"
              style={{
                width: "clamp(26px, 7.1cqw, calc(var(--su, 1px) * 34))",
                height: "clamp(26px, 7.1cqw, calc(var(--su, 1px) * 34))",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* ================= CARD BODY ================= */}
      <div
        className="flex-1 flex flex-col justify-between"
        style={{
          paddingTop: "clamp(16px, 4.4cqw, calc(var(--su, 1px) * 21))",
          paddingLeft: "clamp(22px, 7.6cqw, calc(var(--su, 1px) * 36))",
          paddingRight: "clamp(22px, 7.6cqw, calc(var(--su, 1px) * 36))",
          paddingBottom: "clamp(16px, 4.2cqw, calc(var(--su, 1px) * 20))",
        }}
      >
        <div>
          {/* Rating Row */}
          <Rating rating={course.rating} students={course.students} />

          {/* Title: 22u / 800 / -0.02em, one line with ellipsis (margin-top 14u) */}
          <h3
            title={course.title}
            className="font-extrabold tracking-[-0.02em] leading-tight text-[#0F172A] truncate"
            style={{
              marginTop: "clamp(10px, 2.9cqw, calc(var(--su, 1px) * 14))",
              fontSize: "clamp(18px, 4.6cqw, calc(var(--su, 1px) * 22))",
            }}
          >
            {course.title}
          </h3>

          {/* Description: 17u / 1.62 / #5B6677, 2-line clamp (margin-top 8u, Anchor line 1: 396u) */}
          <p
            className="font-normal text-[#5B6677] line-clamp-2"
            style={{
              marginTop: "clamp(6px, 1.7cqw, calc(var(--su, 1px) * 8))",
              fontSize: "clamp(13px, 3.6cqw, calc(var(--su, 1px) * 17))",
              lineHeight: 1.62,
            }}
          >
            {course.description}
          </p>

          {/* Divider: 1px #ECEAE3 (margin 14u 0) */}
          <div
            className="w-full bg-[#ECEAE3]"
            style={{
              height: "1px",
              marginTop: "clamp(10px, 2.9cqw, calc(var(--su, 1px) * 14))",
              marginBottom: "clamp(10px, 2.9cqw, calc(var(--su, 1px) * 14))",
            }}
            aria-hidden="true"
          />

          {/* Meta Row: 15.3u / 500 / #3E4A5C, Clock #F59E0B 17u, Globe #3B82A8 17u, sep 1px x 14u, gaps 14u */}
          <div
            className="flex items-center text-[#3E4A5C] flex-wrap"
            style={{
              gap: "clamp(10px, 2.9cqw, calc(var(--su, 1px) * 14))",
              fontSize: "clamp(12px, 3.2cqw, calc(var(--su, 1px) * 15.3))",
            }}
          >
            <div className="flex items-center gap-1.5 font-medium whitespace-nowrap">
              <Clock
                className="text-[#F59E0B] shrink-0"
                style={{
                  width: "clamp(14px, 3.6cqw, calc(var(--su, 1px) * 17))",
                  height: "clamp(14px, 3.6cqw, calc(var(--su, 1px) * 17))",
                }}
              />
              <span>{course.duration}</span>
            </div>

            <span
              className="bg-[#ECEAE3] shrink-0"
              style={{
                width: "1px",
                height: "clamp(10px, 2.9cqw, calc(var(--su, 1px) * 14))",
              }}
              aria-hidden="true"
            />

            <div className="flex items-center gap-1.5 font-medium whitespace-nowrap">
              <Globe
                className="text-[#3B82A8] shrink-0"
                style={{
                  width: "clamp(14px, 3.6cqw, calc(var(--su, 1px) * 17))",
                  height: "clamp(14px, 3.6cqw, calc(var(--su, 1px) * 17))",
                }}
              />
              <span>{course.language}</span>
            </div>
          </div>

          {/* Divider */}
          <div
            className="w-full bg-[#ECEAE3]"
            style={{
              height: "1px",
              marginTop: "clamp(10px, 2.9cqw, calc(var(--su, 1px) * 14))",
              marginBottom: "clamp(10px, 2.9cqw, calc(var(--su, 1px) * 14))",
            }}
            aria-hidden="true"
          />

          {/* Faculty Row */}
          <FacultyChip faculty={course.faculty} />
        </div>

        {/* ================= FOOTER ROW (margin-top 22u) ================= */}
        <div
          className="flex items-center w-full"
          style={{
            marginTop: "clamp(16px, 4.6cqw, calc(var(--su, 1px) * 22))",
            gap: "clamp(7px, 1.9cqw, calc(var(--su, 1px) * 9))",
          }}
        >
          {/* View Course Outline Pill (height 50u, flex 1, 17u / 700) */}
          <Link
            href={course.href}
            className="course-card-view-btn flex-1 flex items-center justify-center gap-2 rounded-full font-bold shadow-xs transition-all duration-200 group/btn"
            style={{
              height: "clamp(44px, 10.5cqw, calc(var(--su, 1px) * 50))",
              fontSize: "clamp(14px, 3.6cqw, calc(var(--su, 1px) * 17))",
            }}
          >
            <span>View Course</span>
            <ArrowRight
              className="transition-transform duration-200 group-hover/btn:translate-x-1"
              style={{
                width: "clamp(15px, 3.6cqw, calc(var(--su, 1px) * 17))",
                height: "clamp(15px, 3.6cqw, calc(var(--su, 1px) * 17))",
              }}
            />
          </Link>

          {/* WhatsApp Circle Button (59u, solid theme accent with white MessageCircle icon 26u) */}
          <a
            href={course.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat on WhatsApp about ${course.title}`}
            className="course-card-whatsapp-btn flex items-center justify-center rounded-full shrink-0 shadow-sm transition-transform duration-200 hover:scale-108"
            style={{
              width: "clamp(48px, 12.4cqw, calc(var(--su, 1px) * 59))",
              height: "clamp(48px, 12.4cqw, calc(var(--su, 1px) * 59))",
            }}
          >
            <MessageCircle
              className="text-white fill-current"
              style={{
                width: "clamp(22px, 5.5cqw, calc(var(--su, 1px) * 26))",
                height: "clamp(22px, 5.5cqw, calc(var(--su, 1px) * 26))",
              }}
            />
          </a>
        </div>
      </div>
    </article>
  );
}
