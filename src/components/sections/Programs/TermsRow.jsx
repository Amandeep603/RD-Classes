import Link from "next/link";
import { terms } from "@/data/terms";

export default function TermsRow() {
  const repeatedTerms = [...terms, ...terms];

  return (
    <div
      className="w-full border-t border-[#E8E2D3]"
      style={{
        marginTop: "calc(var(--u) * 41)",
        paddingTop: "calc(var(--u) * 33)",
      }}
    >
      {/* ================= DESKTOP & TABLET ROW (>= 768px) ================= */}
      <div className="hidden md:grid grid-cols-7 items-center w-full">
        {terms.map((term, index) => (
          <div
            key={term.id}
            className="relative flex items-center justify-center px-1"
          >
            <Link
              href={`/courses?topic=${term.slug}`}
              className="font-semibold uppercase text-[#6B6B6B] hover:text-[#0B0B0B] transition-colors whitespace-nowrap text-center text-[11px] lg:text-[max(11px,calc(var(--u)*14))]"
              style={{
                letterSpacing: "0.08em",
              }}
            >
              {term.name}
            </Link>
            {index < terms.length - 1 && (
              <span
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] bg-[#E8E2D3]"
                style={{
                  height: "calc(var(--u) * 16)",
                }}
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>

      {/* ================= MOBILE MARQUEE (< 768px) ================= */}
      <div className="md:hidden relative w-full overflow-hidden select-none -mx-4 px-4 py-1">
        <div className="flex w-max animate-terms-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused]">
          {repeatedTerms.map((term, i) => (
            <div key={`${term.id}-${i}`} className="flex items-center gap-4 px-4 shrink-0">
              <Link
                href={`/courses?topic=${term.slug}`}
                className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B] hover:text-[#0B0B0B] transition-colors whitespace-nowrap"
              >
                {term.name}
              </Link>
              <span className="w-[1px] h-[12px] bg-[#E8E2D3] shrink-0" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
