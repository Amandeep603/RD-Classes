import { Caveat } from "next/font/google";
import { Play, Maximize, Settings } from "lucide-react";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

/**
 * LaptopMockup component for Section F: "Student Learning Portal".
 * Detailed CSS/SVG mockup of the RD Classes HD Video Player.
 * Uses Caveat font strictly for the handwritten blackboard notes.
 * Micro-animations:
 * - Play button soft pulse ring
 * - Video progress bar smooth loop
 */
export default function LaptopMockup() {
  const lectures = [
    { num: "01", title: "Introduction", duration: "32:18", active: true },
    { num: "02", title: "Nature of Partnership", duration: "28:51" },
    { num: "03", title: "Partnership Deed", duration: "41:20" },
    { num: "04", title: "Fixed vs Fluctuating...", duration: "36:10" },
    { num: "05", title: "Profit & Loss...", duration: "47:35" },
    { num: "06", title: "Appropriation Account", duration: "39:12" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-end select-none" aria-hidden="true">
      {/* Laptop Screen Lid */}
      <div
        className="relative mx-auto w-[91%] overflow-hidden bg-[#181C24] p-[1.8%] border border-[#3E4554]/50 shadow-[0_24px_50px_rgba(0,0,0,0.5)]"
        style={{
          borderRadius: "3.2% 3.2% 0 0",
        }}
      >
        {/* Screen Bezel & Display */}
        <div className="relative w-full h-full bg-[#10141D] rounded-[2%] overflow-hidden flex flex-col">
          {/* Top Window Bar */}
          <div className="h-[7.5%] bg-[#1A202C] px-[2.8%] flex items-center justify-between border-b border-[#283244]/60">
            {/* Window Dots */}
            <div className="flex items-center gap-[4px]">
              <span className="w-[6px] h-[6px] rounded-full bg-[#EF4444]" />
              <span className="w-[6px] h-[6px] rounded-full bg-[#EAB308]" />
              <span className="w-[6px] h-[6px] rounded-full bg-[#22C55E]" />
            </div>

            {/* Breadcrumb */}
            <span
              className="text-[#94A3B8] font-medium tracking-tight truncate px-2"
              style={{ fontSize: "clamp(6px, 1.4cqw, 11px)" }}
            >
              Class 12 &gt; Accounting for Partnership Firms
            </span>

            {/* Right badges */}
            <div className="flex items-center gap-1.5 shrink-0">
              <span
                className="bg-[#28354A] text-[#FFC21A] font-bold px-1 py-0.5 rounded"
                style={{ fontSize: "clamp(5px, 1.1cqw, 9px)" }}
              >
                1080p HD
              </span>
              <Maximize
                className="text-[#94A3B8]"
                style={{ width: "clamp(7px, 1.3cqw, 11px)", height: "clamp(7px, 1.3cqw, 11px)" }}
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Main Content Area: Sidebar + Blackboard Player */}
          <div className="flex-1 flex overflow-hidden">
            {/* Left Sidebar: Lectures List */}
            <div className="w-[32%] bg-[#151B27] border-r border-[#263143]/60 flex flex-col p-[2.2%] overflow-hidden">
              <div
                className="font-bold text-[#E2E8F0] mb-[3%]"
                style={{ fontSize: "clamp(6.5px, 1.4cqw, 11px)" }}
              >
                Lectures (48)
              </div>

              <div className="flex flex-col gap-[3%]">
                {lectures.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between px-[3%] py-[2.5%] rounded ${
                      item.active
                        ? "bg-[#FFC21A]/15 border border-[#FFC21A]/30 text-[#FFD86B]"
                        : "text-[#94A3B8] hover:bg-[#1E2738]/50"
                    }`}
                    style={{ fontSize: "clamp(5.5px, 1.25cqw, 9.5px)" }}
                  >
                    <div className="flex items-center gap-1 truncate">
                      {item.active && (
                        <Play
                          className="fill-current shrink-0"
                          style={{ width: "clamp(5px, 1cqw, 8px)", height: "clamp(5px, 1cqw, 8px)" }}
                        />
                      )}
                      <span className="font-semibold">{item.num}</span>
                      <span className="truncate">{item.title}</span>
                    </div>
                    <span className="text-[0.85em] opacity-80 shrink-0 ml-1">{item.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Blackboard Video Player */}
            <div className="flex-1 relative bg-[#0D121B] p-[4%] flex flex-col justify-between overflow-hidden">
              {/* Subtle blackboard texture lines */}
              <div
                className={`flex-1 flex flex-col justify-center leading-snug ${caveat.className}`}
                style={{ fontSize: "clamp(8px, 1.9cqw, 15px)" }}
              >
                {/* Yellow Handwritten Underlined Title */}
                <div className="text-center mb-[2%]">
                  <span className="text-[#FCD34D] text-[1.3em] font-bold border-b border-[#FCD34D]/70 pb-0.5">
                    Partnership Accounts
                  </span>
                </div>

                {/* Four Numbered Lines with Arrows */}
                <div className="flex flex-col gap-[1.5%] text-[#E2E8F0]/90 pl-[4%]">
                  <div>
                    <span className="text-[#93C5FD]">1. </span>Appropriation of Profit &rarr; Partners / As per deed
                  </div>
                  <div>
                    <span className="text-[#93C5FD]">2. </span>Interest on Capital &rarr; As per deed
                  </div>
                  <div>
                    <span className="text-[#93C5FD]">3. </span>Interest on Drawings &rarr; As per deed
                  </div>
                  <div>
                    <span className="text-[#93C5FD]">4. </span>Salary / Commission &rarr; As per deed
                  </div>
                </div>

                {/* Subtitle in chalk yellow */}
                <div className="text-center text-[#FBBF24]/80 text-[0.85em] mt-[2%] italic">
                  Profit &amp; Loss Appropriation Account
                </div>
              </div>

              {/* Centered Yellow Play Button Circle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="flex items-center justify-center rounded-full bg-[#FFC21A] text-[#0F172A] shadow-[0_8px_20px_rgba(255,194,26,0.4)] animate-play-pulse"
                  style={{
                    width: "clamp(26px, 6.2cqw, 46px)",
                    height: "clamp(26px, 6.2cqw, 46px)",
                  }}
                >
                  <Play
                    className="fill-current translate-x-[1px]"
                    style={{
                      width: "clamp(12px, 2.8cqw, 20px)",
                      height: "clamp(12px, 2.8cqw, 20px)",
                    }}
                  />
                </div>
              </div>

              {/* Bottom Video Controls Bar */}
              <div className="w-full pt-[2%] border-t border-[#1F293D] flex flex-col gap-1">
                {/* Yellow Progress Bar */}
                <div className="w-full h-[3px] bg-[#27354E] rounded-full overflow-hidden">
                  <div className="h-full bg-[#FFC21A] rounded-full animate-video-progress" style={{ width: "68%" }} />
                </div>

                {/* Controls Info */}
                <div
                  className="flex items-center justify-between text-[#94A3B8] font-mono"
                  style={{ fontSize: "clamp(5.5px, 1.15cqw, 9px)" }}
                >
                  <div className="flex items-center gap-1.5">
                    <Play
                      className="fill-current text-[#CBD5E1]"
                      style={{ width: "clamp(6px, 1.2cqw, 9px)", height: "clamp(6px, 1.2cqw, 9px)" }}
                    />
                    <span>24:31 / 35:40</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Settings
                      style={{ width: "clamp(7px, 1.3cqw, 10px)", height: "clamp(7px, 1.3cqw, 10px)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Metallic Base Shelf with Center Notch */}
      <div className="relative mx-auto w-full h-[3.8%] bg-gradient-to-b from-[#8C95A6] via-[#B8C0CC] to-[#727B8C] rounded-b-[8px] shadow-[0_12px_24px_rgba(0,0,0,0.35)] flex justify-center">
        {/* Notch */}
        <div className="w-[14%] h-[40%] bg-[#565E6D] rounded-b-[4px]" />
      </div>
    </div>
  );
}
