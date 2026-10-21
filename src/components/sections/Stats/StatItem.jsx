import { DynamicIcon } from "@/lib/icons";
import CountUp from "./CountUp";

/**
 * Individual Stat item column.
 * Centered icon tile with amber pulse glow, 66u count-up number, 24u label, 18u description.
 */
export default function StatItem({ stat, index = 0 }) {
  return (
    <div
      className="flex flex-col items-center text-center px-2 sm:px-4 lg:px-[calc(var(--su)*16)] w-full"
      style={{ "--i": index }}
    >
      {/* Icon Tile: 88u x 82u, radius 20u, bg rgba(255,255,255,0.07), border rgba(255,190,90,0.22) */}
      <div
        className="flex items-center justify-center rounded-[16px] lg:rounded-[calc(var(--su)*20)] bg-white/[0.07] border border-[rgba(255,190,90,0.22)] shadow-sm stat-icon-tile transition-transform duration-300 hover:scale-105"
        style={{
          width: "max(58px, calc(var(--su, 1px) * 88))",
          height: "max(54px, calc(var(--su, 1px) * 82))",
        }}
      >
        <DynamicIcon
          name={stat.icon}
          className="text-[#FFC83D]"
          strokeWidth={2}
          style={{
            width: "max(26px, calc(var(--su, 1px) * 38))",
            height: "max(26px, calc(var(--su, 1px) * 38))",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Number: 66u weight 800 white, margin-top 26u, letter-spacing -0.01em, tabular-nums */}
      <div
        className="font-extrabold text-white tracking-[-0.01em] leading-tight flex items-baseline justify-center"
        style={{
          marginTop: "max(16px, calc(var(--su, 1px) * 26))",
          fontSize: "clamp(34px, 5.5vw, calc(var(--su, 1px) * 66))",
        }}
      >
        <CountUp value={stat.value} suffix={stat.suffix} />
      </div>

      {/* Label: 24u weight 700 white, margin-top 10u */}
      <div
        className="font-bold text-white leading-snug"
        style={{
          marginTop: "max(6px, calc(var(--su, 1px) * 10))",
          fontSize: "max(17px, calc(var(--su, 1px) * 24))",
        }}
      >
        {stat.label}
      </div>

      {/* Description: 18u (floor 14px), rgba(255,255,255,0.72), line-height 1.55, max-width 300u */}
      <p
        className="text-white/75 leading-[1.55] line-clamp-2 text-center"
        style={{
          marginTop: "max(6px, calc(var(--su, 1px) * 8))",
          fontSize: "max(13px, calc(var(--su, 1px) * 18))",
          maxWidth: "calc(var(--su, 1px) * 300)",
        }}
      >
        {stat.description}
      </p>
    </div>
  );
}
