import Link from "next/link";
import { TOPICS } from "@/constants/topics";

/**
 * Topics Ticker component for Section A.
 * Desktop (>=1280px): Static justify-between layout matching design.
 * Below 1280px: Seamless infinite marquee (40s linear, pauses on hover/focus, edge fade mask).
 * Reduced motion: Static horizontally scrollable row.
 */
export default function TopicsTicker() {
  return (
    <div className="w-full mt-[32px] lg:mt-[calc(var(--su)*40)] pt-[20px] lg:pt-[calc(var(--su)*28)] border-t border-[rgba(15,23,42,0.1)]">
      {/* ================= DESKTOP STATIC ROW (>= 1280px) ================= */}
      <div className="hidden xl:flex items-center justify-between w-full">
        {TOPICS.map((topic, index) => (
          <div key={topic.id} className="relative flex items-center justify-center px-1 flex-1">
            <Link
              href={`/courses?topic=${topic.slug}`}
              className="font-bold uppercase text-[#6B7280] hover:text-[#0F172A] transition-colors whitespace-nowrap text-center text-[12px] lg:text-[calc(var(--su)*14)] tracking-[0.08em]"
            >
              {topic.name}
            </Link>
            {index < TOPICS.length - 1 && (
              <span
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[18px] lg:h-[calc(var(--su)*22)] bg-[#C9CED6]"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>

      {/* ================= MARQUEE (< 1280px) ================= */}
      <div className="xl:hidden relative w-full overflow-hidden select-none py-1 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-topics-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {/* First loop */}
          <div className="flex items-center">
            {TOPICS.map((topic) => (
              <div key={`m1-${topic.id}`} className="flex items-center gap-4 px-4 shrink-0">
                <Link
                  href={`/courses?topic=${topic.slug}`}
                  className="font-bold uppercase text-[12px] text-[#6B7280] hover:text-[#0F172A] transition-colors whitespace-nowrap tracking-[0.08em]"
                >
                  {topic.name}
                </Link>
                <span className="w-[1px] h-[16px] bg-[#C9CED6] shrink-0" aria-hidden="true" />
              </div>
            ))}
          </div>

          {/* Duplicate loop for seamless infinite marquee */}
          <div className="flex items-center" aria-hidden="true">
            {TOPICS.map((topic) => (
              <div key={`m2-${topic.id}`} className="flex items-center gap-4 px-4 shrink-0">
                <Link
                  href={`/courses?topic=${topic.slug}`}
                  tabIndex={-1}
                  className="font-bold uppercase text-[12px] text-[#6B7280] hover:text-[#0F172A] transition-colors whitespace-nowrap tracking-[0.08em]"
                >
                  {topic.name}
                </Link>
                <span className="w-[1px] h-[16px] bg-[#C9CED6] shrink-0" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
