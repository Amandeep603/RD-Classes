import { DynamicIcon } from "@/lib/icons";
import CountUp from "./CountUp";

/**
 * Individual Stat item column.
 * Exact replica of stats.png:
 * - Tile: 86u x 82u, radius 20u, bg rgba(255,255,255,0.07), border 1px rgba(255,190,90,0.22), icon 36u #FFC83D stroke 2
 * - Number: 60u / 800 / line-height 1 / white / -0.01em / tabular-nums, margin-top 10u (Anchor 155u)
 * - Label: 22u / 700 / white, margin-top 8u (Anchor 215u)
 * - Description: 15.5u / line-height 1.8 / rgba(255,255,255,0.72), max-width 280u, margin-top 7u (Anchor 261u)
 */
export default function StatItem({ stat, index = 0 }) {
  return (
    <div
      className="flex flex-col items-center text-center w-full select-none"
      style={{
        "--i": index,
        paddingLeft: "clamp(8px, 1.5vw, calc(var(--su, 1px) * 16))",
        paddingRight: "clamp(8px, 1.5vw, calc(var(--su, 1px) * 16))",
      }}
    >
      {/* Icon Tile: 86u x 82u, radius 20u */}
      <div
        className="stat-icon-tile flex items-center justify-center rounded-[18px] lg:rounded-[calc(var(--su,1px)*20)] bg-white/[0.07] border border-[rgba(255,190,90,0.22)] shadow-sm shrink-0 transition-transform duration-300 hover:scale-105"
        style={{
          width: "clamp(60px, 8vw, calc(var(--su, 1px) * 86))",
          height: "clamp(56px, 7.5vw, calc(var(--su, 1px) * 82))",
        }}
      >
        <DynamicIcon
          name={stat.icon}
          strokeWidth={2}
          className="text-[#FFC83D]"
          style={{
            width: "clamp(26px, 3.5vw, calc(var(--su, 1px) * 36))",
            height: "clamp(26px, 3.5vw, calc(var(--su, 1px) * 36))",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Number: 63.5u / 800 / line-height 1 / white / -0.01em / tabular-nums, margin-top 10u (Anchor 155u) */}
      <div
        className="font-extrabold text-white tracking-[-0.01em] leading-none flex items-baseline justify-center"
        style={{
          marginTop: "clamp(8px, 1.5vw, calc(var(--su, 1px) * 10))",
          fontSize: "clamp(34px, 9.5vw, calc(var(--su, 1px) * 63.5))",
        }}
      >
        <CountUp value={stat.value} suffix={stat.suffix} />
      </div>

      {/* Label: 22u / 700 / white, margin-top 8u */}
      <div
        className="font-bold text-white leading-tight"
        style={{
          marginTop: "clamp(6px, 1.2vw, calc(var(--su, 1px) * 8))",
          fontSize: "clamp(16px, 4.6vw, calc(var(--su, 1px) * 22))",
        }}
      >
        {stat.label}
      </div>

      {/* Description: 17.8u / line-height 1.8 / rgba(255,255,255,0.72), max-width 280u, margin-top 7u (Anchor 261u) */}
      <p
        className="font-normal text-white/72 text-center"
        style={{
          marginTop: "clamp(5px, 1vw, calc(var(--su, 1px) * 7))",
          fontSize: "clamp(13px, 3.6vw, calc(var(--su, 1px) * 17.8))",
          lineHeight: 1.8,
          maxWidth: "calc(var(--su, 1px) * 280)",
        }}
      >
        {stat.description}
      </p>
    </div>
  );
}
