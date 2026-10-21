import { Menu, Check, Plus } from "lucide-react";

/**
 * PhoneMockup component for Section F: "Student Learning Portal".
 * Mobile companion device showing RD Classes on-the-go experience.
 * Features:
 * - Rounded smartphone silhouette with bezel and speaker notch
 * - Header: "RD Classes" + menu icon + "Live >" tag
 * - Current Lecture Card with progress bar: "Cash Flow Statement" / "Lecture 84 • 18 min left"
 * - Action list items: "Notes Downloaded", "Add to Watch Later", "Playback Speed 1.5x >"
 */
export default function PhoneMockup() {
  return (
    <div
      className="relative w-full h-full bg-[#0B0F17] rounded-[18%] p-[3.2%] border-[2.5px] border-[#2C3444] shadow-[0_28px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Top Speaker Notch */}
      <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[28%] h-[3.5px] bg-[#1F2633] rounded-full z-20" />

      {/* Screen Frame */}
      <div className="w-full h-full bg-[#111622] rounded-[15%] pt-[8%] px-[6%] pb-[6%] flex flex-col justify-between overflow-hidden text-white">
        {/* Phone App Header */}
        <div className="flex items-center justify-between border-b border-[#212B3D] pb-[5%]">
          <span
            className="font-extrabold tracking-tight text-[#F8FAFC]"
            style={{ fontSize: "clamp(6.5px, 1.4cqw, 11px)" }}
          >
            RD Classes
          </span>

          <div className="flex items-center gap-1.5">
            <span
              className="font-bold text-[#FFC21A] bg-[#FFC21A]/15 px-1 py-0.5 rounded-[4px]"
              style={{ fontSize: "clamp(5px, 1cqw, 8.5px)" }}
            >
              Live &gt;
            </span>
            <Menu
              className="text-[#94A3B8]"
              style={{ width: "clamp(8px, 1.5cqw, 12px)", height: "clamp(8px, 1.5cqw, 12px)" }}
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Current Lecture Card */}
        <div className="bg-[#182133] rounded-[8%] p-[6%] border border-[#2B3850]/50 my-[4%]">
          <div
            className="font-bold text-[#F1F5F9] truncate"
            style={{ fontSize: "clamp(6.5px, 1.35cqw, 10.5px)" }}
          >
            Cash Flow Statement
          </div>
          <div
            className="text-[#94A3B8] font-medium mt-[1%]"
            style={{ fontSize: "clamp(5px, 1.05cqw, 8.5px)" }}
          >
            Lecture 84 &bull; 18 min left
          </div>

          {/* Yellow Progress bar */}
          <div className="w-full h-[2.5px] bg-[#27354E] rounded-full mt-[6%] overflow-hidden">
            <div className="h-full bg-[#FFC21A] rounded-full w-[65%]" />
          </div>
        </div>

        {/* Action List Items */}
        <div className="flex flex-col gap-[6%]">
          {/* Notes Downloaded */}
          <div
            className="flex items-center gap-1.5 text-[#34D399]"
            style={{ fontSize: "clamp(5.5px, 1.15cqw, 9px)" }}
          >
            <Check
              style={{ width: "clamp(7px, 1.3cqw, 10px)", height: "clamp(7px, 1.3cqw, 10px)" }}
              strokeWidth={3}
            />
            <span className="font-medium text-[#CBD5E1]">Notes Downloaded</span>
          </div>

          {/* Add to Watch Later */}
          <div
            className="flex items-center gap-1.5 text-[#94A3B8]"
            style={{ fontSize: "clamp(5.5px, 1.15cqw, 9px)" }}
          >
            <Plus
              style={{ width: "clamp(7px, 1.3cqw, 10px)", height: "clamp(7px, 1.3cqw, 10px)" }}
              strokeWidth={2}
            />
            <span className="font-medium text-[#94A3B8]">Add to Watch Later</span>
          </div>

          {/* Playback Speed */}
          <div
            className="flex items-center justify-between text-[#94A3B8] border-t border-[#1E2738] pt-[5%]"
            style={{ fontSize: "clamp(5.5px, 1.15cqw, 9px)" }}
          >
            <span className="font-medium">Playback Speed</span>
            <span className="text-[#FFC21A] font-bold flex items-center">
              1.5x &gt;
            </span>
          </div>
        </div>

        {/* Bottom home indicator line */}
        <div className="w-[38%] h-[2.5px] bg-[#334155] rounded-full mx-auto mt-[4%]" />
      </div>
    </div>
  );
}
