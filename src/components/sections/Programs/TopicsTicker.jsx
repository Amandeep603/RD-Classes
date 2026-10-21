import Link from "next/link";
import { TOPICS } from "@/constants/topics";

/**
 * Topics Ticker for Section A.
 * Desktop (>=1280px): Exactly 12u / 500 uppercase 0.06em, #6B7280.
 * Separators are 1px x 20u #CBD0D8 as separate flex items.
 * Equal spacing via justify-between across the full container.
 * Below 1280px: Seamless marquee with pause on hover/focus.
 */
export default function TopicsTicker() {
  return (
    <div
      className="w-full border-t border-[rgba(15,23,42,0.10)]"
      style={{
        marginTop: "clamp(28px, 4.5vw, calc(var(--su, 1px) * 41))",
        paddingTop: "clamp(18px, 3vw, calc(var(--su, 1px) * 27))",
      }}
    >
      {/* ================= DESKTOP STATIC ROW (>= 1280px) ================= */}
      <div className="hidden xl:flex items-center justify-between w-full select-none">
        {TOPICS.map((topic, index) => (
          <div key={topic.id} className="contents">
            <Link
              href={`/courses?topic=${topic.slug}`}
              className="relative font-medium uppercase text-[#6B7280] hover:text-[#0F172A] transition-colors whitespace-nowrap tracking-[0.06em] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-[#0F172A] after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
              style={{
                fontSize: "calc(var(--su, 1px) * 12)",
              }}
            >
              {topic.name}
            </Link>

            {index < TOPICS.length - 1 && (
              <span
                className="bg-[#CBD0D8] shrink-0"
                style={{
                  width: "1px",
                  height: "calc(var(--su, 1px) * 20)",
                }}
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>

      {/* ================= MARQUEE (< 1280px) ================= */}
      <div className="xl:hidden relative w-full overflow-hidden select-none py-1 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div className="flex w-max animate-terms-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {/* Loop 1 */}
          <div className="flex items-center gap-6 pr-6">
            {TOPICS.map((topic) => (
              <div key={`m1-${topic.id}`} className="flex items-center gap-6 shrink-0">
                <Link
                  href={`/courses?topic=${topic.slug}`}
                  className="font-medium uppercase text-[12px] text-[#6B7280] hover:text-[#0F172A] transition-colors whitespace-nowrap tracking-[0.06em]"
                >
                  {topic.name}
                </Link>
                <span className="w-[1px] h-[16px] bg-[#CBD0D8] shrink-0" aria-hidden="true" />
              </div>
            ))}
          </div>

          {/* Loop 2 (Duplicate for seamless infinite marquee) */}
          <div className="flex items-center gap-6 pr-6" aria-hidden="true">
            {TOPICS.map((topic) => (
              <div key={`m2-${topic.id}`} className="flex items-center gap-6 shrink-0">
                <Link
                  href={`/courses?topic=${topic.slug}`}
                  tabIndex={-1}
                  className="font-medium uppercase text-[12px] text-[#6B7280] hover:text-[#0F172A] transition-colors whitespace-nowrap tracking-[0.06em]"
                >
                  {topic.name}
                </Link>
                <span className="w-[1px] h-[16px] bg-[#CBD0D8] shrink-0" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
