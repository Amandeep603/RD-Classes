import Link from "next/link";
import { ArrowRight, Clock, Globe, MessageCircle } from "lucide-react";
import { DynamicIcon } from "@/lib/icons";
import Rating from "./Rating";
import FacultyChip from "./FacultyChip";

export default function CourseCard({ course, index = 0 }) {
  // Badge tone styles
  const badgeClasses = {
    navy: "bg-[#0B3556] text-white",
    yellow: "bg-[#FFC21A] text-[#0F172A]",
    orange: "bg-[#F97316] text-white",
  }[course.badgeTone] || "bg-[#0B3556] text-white";

  return (
    <article
      data-theme={course.theme}
      style={{
        "--i": index,
      }}
      className="group relative flex flex-col justify-between bg-white rounded-[18px] lg:rounded-[calc(var(--su)*18)] border border-[rgba(15,23,42,0.07)] overflow-hidden shadow-[0_6px_24px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_22px_44px_-8px_rgba(15,23,42,0.14)] hover:-translate-y-[8px] transition-all duration-300 ease-out h-full"
    >
      {/* ================= CARD BANNER ================= */}
      <div className="relative w-full h-[150px] lg:h-[calc(var(--su)*170)] bg-[var(--banner-bg)] overflow-hidden flex flex-col justify-between pt-[14px] lg:pt-[calc(var(--su)*17)] px-[20px] lg:px-[calc(var(--su)*28)] pb-3 select-none">
        {/* Soft Decorative Circles in Banner Bottom */}
        <div
          className="absolute -bottom-8 -left-6 w-32 h-32 lg:w-[calc(var(--su)*130)] lg:h-[calc(var(--su)*130)] rounded-full bg-white/35 blur-xs pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-10 -right-6 w-36 h-36 lg:w-[calc(var(--su)*140)] lg:h-[calc(var(--su)*140)] rounded-full bg-white/30 blur-xs pointer-events-none"
          aria-hidden="true"
        />

        {/* Top Header Row in Banner: Class Pill + Badge Pill */}
        <div className="relative z-10 flex items-center justify-between w-full">
          {/* Class Pill (Translucent White) */}
          <div className="inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-xs font-bold text-[13px] lg:text-[calc(var(--su)*15)] text-[#0F2A44] px-4 py-1.5 shadow-xs">
            {course.classLabel}
          </div>

          {/* Badge Pill (Tone-based) */}
          <div
            className={`inline-flex items-center justify-center rounded-full font-semibold text-[13px] lg:text-[calc(var(--su)*15)] px-4 py-1.5 shadow-xs ${badgeClasses}`}
          >
            {course.badge}
          </div>
        </div>

        {/* Centered 80u Icon Tile */}
        <div className="relative z-10 flex items-center justify-center w-full mb-1">
          <div className="flex items-center justify-center w-[64px] h-[64px] lg:w-[calc(var(--su)*80)] lg:h-[calc(var(--su)*80)] rounded-[16px] lg:rounded-[calc(var(--su)*18)] bg-[var(--banner-tile-bg)] border border-[var(--banner-tile-border)] shadow-xs transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
            <DynamicIcon
              name={course.icon}
              className="w-7 h-7 lg:w-[calc(var(--su)*36)] lg:h-[calc(var(--su)*36)] text-[#0F2A44]"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* ================= CARD BODY ================= */}
      <div className="flex-1 flex flex-col justify-between pt-[18px] lg:pt-[calc(var(--su)*22)] px-[24px] lg:px-[calc(var(--su)*40)] pb-[20px] lg:pb-[calc(var(--su)*26)]">
        <div>
          {/* Rating Row */}
          <Rating rating={course.rating} students={course.students} />

          {/* Title: 27u weight 800, ONE line with ellipsis */}
          <h3
            title={course.title}
            className="mt-[10px] lg:mt-[calc(var(--su)*12)] font-extrabold tracking-tight leading-tight text-[22px] lg:text-[calc(var(--su)*27)] text-[#0F172A] truncate"
          >
            {course.title}
          </h3>

          {/* Description: 17.5u, line-height 1.5, clamp to 2 lines */}
          <p className="mt-[6px] lg:mt-[calc(var(--su)*8)] text-[14px] lg:text-[calc(var(--su)*17.5)] leading-[1.5] text-[#5B6677] line-clamp-2">
            {course.description}
          </p>

          {/* Divider */}
          <div
            className="w-full h-[1px] bg-[rgba(15,23,42,0.08)] my-[14px] lg:my-[calc(var(--su)*18)]"
            aria-hidden="true"
          />

          {/* Meta Row: Clock + duration, separator, Globe + language */}
          <div className="flex items-center gap-2.5 text-[14px] lg:text-[calc(var(--su)*16)] text-[#5B6677] flex-wrap">
            <div className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 lg:w-[calc(var(--su)*16)] lg:h-[calc(var(--su)*16)] text-[#F97316] shrink-0" />
              <span>{course.duration}</span>
            </div>
            <span className="w-[1px] h-3.5 bg-[rgba(15,23,42,0.15)] shrink-0" aria-hidden="true" />
            <div className="flex items-center gap-1.5 font-medium">
              <Globe className="w-4 h-4 lg:w-[calc(var(--su)*16)] lg:h-[calc(var(--su)*16)] text-[#1E9BD1] shrink-0" />
              <span>{course.language}</span>
            </div>
          </div>

          {/* Divider */}
          <div
            className="w-full h-[1px] bg-[rgba(15,23,42,0.08)] my-[14px] lg:my-[calc(var(--su)*18)]"
            aria-hidden="true"
          />

          {/* Faculty Row */}
          <FacultyChip faculty={course.faculty} />
        </div>

        {/* ================= FOOTER ROW ================= */}
        <div className="mt-[16px] lg:mt-[calc(var(--su)*18)] pt-2 flex items-center gap-3 w-full">
          {/* View Course Outline Button */}
          <Link
            href={course.href}
            className="flex-1 flex items-center justify-center gap-2 rounded-full h-[46px] lg:h-[calc(var(--su)*50)] border-[1.5px] border-[var(--btn-border)] bg-white text-[var(--btn-text)] hover:bg-[var(--btn-hover-bg)] hover:text-[var(--btn-hover-text)] font-bold text-[15px] lg:text-[calc(var(--su)*18)] shadow-xs transition-all duration-200 group/btn"
          >
            <span>View Course</span>
            <ArrowRight className="w-4 h-4 lg:w-[calc(var(--su)*18)] lg:h-[calc(var(--su)*18)] transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>

          {/* 58u Circular WhatsApp Button */}
          <a
            href={course.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat on WhatsApp about ${course.title}`}
            className="flex items-center justify-center rounded-full w-[46px] h-[46px] lg:w-[calc(var(--su)*58)] lg:h-[calc(var(--su)*58)] shrink-0 bg-[var(--whatsapp-bg)] hover:bg-[var(--whatsapp-hover-bg)] text-white shadow-sm transition-transform duration-200 hover:scale-108"
          >
            <MessageCircle className="w-5 h-5 lg:w-[calc(var(--su)*26)] lg:h-[calc(var(--su)*26)] fill-current" />
          </a>
        </div>
      </div>
    </article>
  );
}
