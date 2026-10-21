import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";
import BookIllustration from "./BookIllustration";
import TopicList from "./TopicList";

/**
 * BookCard component for Section E: "What You Will Master".
 * Features:
 * - Top-left book badge ("BOOK 1")
 * - Lectures count ("48 Lectures")
 * - 2-line title ("Accounting for \n Partnership Firms") with high z-index
 * - Marks row with gold Award ribbon icon
 * - "CORE TOPICS COVERED:" header + TopicList
 * - Decorative tone-colored blob + 3D Book Illustration at top-right
 * - Pinned "Complete Board Mastery" button at bottom
 */
export default function BookCard({ book, index }) {
  return (
    <article
      data-tone={book.tone}
      className="group relative flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_36px_60px_-24px_rgba(15,23,42,0.35)]"
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
      {/* Decorative Blob in top-right */}
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

        {/* 2-Line Title */}
        <h3
          className="font-extrabold text-[#0B1B2E] tracking-tight leading-[1.28]"
          style={{
            fontSize: "clamp(20px, 8.2cqw, calc(var(--su, 1px) * 30.5))",
            marginTop: "max(8px, calc(var(--su, 1px) * 12))",
          }}
        >
          <span className="block">{book.title[0]}</span>
          <span className="block">{book.title[1]}</span>
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

        {/* Core Topics Eyebrow */}
        <p
          className="font-extrabold uppercase tracking-[0.12em] text-[#4A5568]"
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
            paddingLeft: "clamp(18px, 9cqw, calc(var(--su, 1px) * 33))",
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
              fontSize: "clamp(14.5px, 5cqw, calc(var(--su, 1px) * 18.5))",
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
