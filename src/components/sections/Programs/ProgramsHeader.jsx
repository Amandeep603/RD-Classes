export default function ProgramsHeader() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      {/* Pill Label: COURSE CATEGORIES (y~46..82) */}
      <div
        className="inline-flex items-center justify-center rounded-full bg-[#FFF4D1] border border-[#F2E3B0] text-[#1B1B1B] font-bold uppercase tracking-[0.12em] px-5 sm:px-6 shadow-xs select-none"
        style={{
          height: "calc(var(--u) * 36)",
          fontSize: "clamp(12px, calc(var(--u) * 15), 15px)",
        }}
      >
        COURSE CATEGORIES
      </div>

      {/* H1 Headline: Explore Popular Programs (y~118..176) */}
      <h1
        className="font-extrabold tracking-[-0.02em] leading-[1.0] text-[#0B0B0B]"
        style={{
          fontSize: "clamp(32px, calc(var(--u) * 58), 58px)",
          marginTop: "calc(var(--u) * 36)",
        }}
      >
        Explore Popular{" "}
        <span className="relative inline-block">
          <span
            aria-hidden="true"
            className="absolute -left-1 -right-1 bottom-[4%] h-[55%] bg-gradient-to-r from-[#FFD54A] to-[#FF9F1C] -z-0 highlighter-bar"
          />
          <span className="relative z-10 text-[#0B0B0B]">Programs</span>
        </span>
      </h1>

      {/* Subtitle (y~208..231) */}
      <p
        className="font-normal leading-[1.4] text-[#55565B] max-w-[850px] whitespace-normal lg:whitespace-nowrap"
        style={{
          fontSize: "clamp(16px, calc(var(--u) * 23), 23px)",
          marginTop: "calc(var(--u) * 32)",
        }}
      >
        Choose the right learning format for your CBSE Accountancy goals in Class 11 &amp; 12.
      </p>
    </div>
  );
}
