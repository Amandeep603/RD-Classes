import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";
import BookIllustration from "./BookIllustration";
import TopicList from "./TopicList";

/**
 * BookCard component for Section E: "What You Will Master".
 * Fix Pass v3.4 specifications:
 * - data-book-card attribute present
 * - 30% padding-right on first two text rows so text never runs under book illustration
 * - Title on two explicit lines (whitespace-nowrap per line, clamp(19px, 6.4cqw, 25px))
 * - "CORE TOPICS COVERED:" on one line
 * - Marks text wraps naturally
 * - Footer button label on one line (clamp(14px, 5cqw, 17px)), arrow circle never clipped
 */
export default function BookCard({ book, index }) {
  return (
    <article
      data-tone={book.tone}
      data-book-card="true"
      className="group relative flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_36px_60px_-24px_rgba(15,23,42,0.35)] h-full"
      style={{
        containerType: "inline-size",
        background: "var(--book-card-bg)",
        border: "1px solid var(--book-card-border)",
        boxShadow: "0 26px 50px -30px rgba(15, 23, 42, 0.28)",
        borderRadius: "max(20px, calc(var(--su, 1px) * 30))",
        paddingTop: "max(20px, calc(var(--su, 1px) * 26))",
        paddingLeft: "clamp(18px, 6.8cqw, calc(var(--su, 1px) * 25))",
        paddingRight: "clamp(18px, 6.8cqw, calc(var(--su, 1px) * 25))",
        paddingBottom: "max(14px, calc(var(--su, 1px) * 18))",
        minHeight: "max(560px, calc(var(--su, 1px) * 610))",
      }}
    >
      {/* Decorative Tone Blob in top-right */}
      <div
        className="pointer-events-none absolute -top-8 -right-8 rounded-full z-0 transition-transform duration-500 ease-out group-hover:scale-105"
        style={{
          width: "clamp(130px, 43.5cqw, calc(var(--su, 1px) * 160))",
          height: "clamp(130px, 43.5cqw, calc(var(--su, 1px) * 160))",
          backgroundColor: "var(--book-blob-bg)",
        }}
        aria-hidden="true"
      />

      {/* 3D Book Illustration */}
      <BookIllustration tone={book.tone} index={index} />

      {/* Top Content Area */}
      <div className="relative z-10 flex flex-col">
        {/* First two text rows have 30% padding-right so text never underlaps the book */}
        <div style={{ paddingRight: "30%" }}>
          {/* Book Badge */}
          <div
            className="inline-flex items-center justify-center font-extrabold uppercase select-none shadow-sm"
            style={{
              width: "clamp(76px, 25.5cqw, calc(var(--su, 1px) * 94))",
              height: "clamp(32px, 10.6cqw, calc(var(--su, 1px) * 39))",
              borderRadius: "max(16px, calc(var(--su, 1px) * 20))",
              backgroundColor: "var(--book-pill-bg)",
              color: "var(--book-pill-text)",
              fontSize: "clamp(13px, 4.3cqw, calc(var(--su, 1px) * 16))",
            }}
          >
            {book.bookLabel}
          </div>

          {/* Lectures Count */}
          <p
            className="font-medium text-[#2A2F3A]"
            style={{
              fontSize: "clamp(14px, 4.8cqw, calc(var(--su, 1px) * 17.5))",
              marginTop: "max(8px, calc(var(--su, 1px) * 12))",
            }}
          >
            {book.lectures}
          </p>
        </div>

        {/* 2-Line Title (explicit lines, whitespace-nowrap per line) */}
        <h3
          className="font-extrabold text-[#0B1B2E] tracking-tight leading-[1.28]"
          style={{
            fontSize: "clamp(19px, 6.4cqw, 25px)",
            marginTop: "max(8px, calc(var(--su, 1px) * 12))",
          }}
        >
          <span className="block whitespace-nowrap">{book.title[0]}</span>
          <span className="block whitespace-nowrap">{book.title[1]}</span>
        </h3>

        {/* Marks Ribbon Row */}
        <div
          className="flex items-center gap-[clamp(6px,2.2cqw,calc(var(--su,1px)*8))]"
          style={{
            marginTop: "max(10px, calc(var(--su, 1px) * 14))",
          }}
        >
          <Award
            className="text-[#F5A623] fill-[#F5A623]/20 shrink-0"
            style={{
              width: "clamp(22px, 8.1cqw, calc(var(--su, 1px) * 30))",
              height: "clamp(22px, 8.1cqw, calc(var(--su, 1px) * 30))",
            }}
            strokeWidth={2}
            aria-hidden="true"
          />
          <span
            className="font-medium text-[#0F172A]"
            style={{
              fontSize: "clamp(14px, 4.8cqw, calc(var(--su, 1px) * 18))",
            }}
          >
            {book.marks}
          </span>
        </div>

        {/* Core Topics Eyebrow (on one line) */}
        <p
          className="font-extrabold uppercase tracking-[0.12em] text-[#4A5568] whitespace-nowrap"
          style={{
            fontSize: "clamp(11.5px, 3.7cqw, calc(var(--su, 1px) * 13.5))",
            marginTop: "max(16px, calc(var(--su, 1px) * 24))",
            marginBottom: "max(8px, calc(var(--su, 1px) * 10))",
          }}
        >
          CORE TOPICS COVERED:
        </p>

        {/* Topic List */}
        <TopicList topics={book.topics} tone={book.tone} />
      </div>

      {/* Pinned Bottom Button */}
      <div
        className="relative z-10 w-full"
        style={{
          marginTop: "max(18px, calc(var(--su, 1px) * 22))",
        }}
      >
        <Link
          href={book.href || "#"}
          aria-label={`${book.bookLabel} - ${book.buttonLabel}`}
          className="group/btn relative flex items-center justify-between w-full overflow-hidden text-white transition-all duration-300 ease-out active:scale-[0.98] hover:shadow-[0_12px_28px_-8px_rgba(11,31,63,0.4)]"
          style={{
            height: "max(52px, calc(var(--su, 1px) * 65))",
            borderRadius: "max(26px, calc(var(--su, 1px) * 33))",
            backgroundColor: "#0B1F3F",
            paddingLeft: "clamp(18px, 8cqw, calc(var(--su, 1px) * 33))",
            paddingRight: "max(8px, calc(var(--su, 1px) * 9))",
          }}
        >
          {/* Shine Sweep Effect on Hover */}
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-in-out group-hover/btn:translate-x-full"
            aria-hidden="true"
          />

          <span
            className="font-bold whitespace-nowrap"
            style={{
              fontSize: "clamp(14px, 5cqw, 17px)",
            }}
          >
            {book.buttonLabel}
          </span>

          <div
            className="flex items-center justify-center rounded-full shrink-0 transition-transform duration-300 group-hover/btn:scale-105"
            style={{
              width: "clamp(38px, 13cqw, calc(var(--su, 1px) * 48))",
              height: "clamp(38px, 13cqw, calc(var(--su, 1px) * 48))",
              backgroundColor: "var(--book-btn-arrow-bg)",
              color: "var(--book-btn-arrow-color)",
            }}
            aria-hidden="true"
          >
            <ArrowRight
              className="transition-transform duration-300 group-hover/btn:translate-x-[3px]"
              style={{
                width: "clamp(16px, 5.5cqw, calc(var(--su, 1px) * 20))",
                height: "clamp(16px, 5.5cqw, calc(var(--su, 1px) * 20))",
              }}
              strokeWidth={2.4}
            />
          </div>
        </Link>
      </div>
    </article>
  );
}
