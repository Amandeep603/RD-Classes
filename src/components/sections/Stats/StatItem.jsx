import { DynamicIcon } from "@/lib/icons";
import CountUp from "./CountUp";

/**
 * Individual Stat item column.
 * Exact replica of stats.png (1600x373 canvas):
 * - Tile: 86u x 82u (radius 20u), glass look, icon 36u #FFC83D stroke 2
 * - Gap tile->number: 10u
 * - Number: 62u / 800 / line-height 1 / white / tabular-nums
 * - Gap number->label: 8u
 * - Label: 22u / 700 / white (min-height 2.5em on mobile for aligned descriptions)
 * - Gap label->description: 8u
 * - Description: 17.5u / line-height 1.6 (28u pitch) / rgba(255,255,255,.78) / 2 lines max
 */
export default function StatItem({ stat, index = 0 }) {
  return (
    <div
      className="flex flex-col items-center justify-start text-center w-full select-none"
      style={{
        "--i": index,
      }}
    >
      {/* Icon Tile: 86u x 82u, radius 20u on desktop; 56px radius 16px on mobile */}
      <div
        className="stat-icon-tile flex items-center justify-center rounded-[16px] lg:rounded-[calc(var(--su,1px)*20)] shrink-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(255,190,90,0.35)]"
        style={{
          width: "clamp(56px, 7vw, calc(var(--su, 1px) * 86))",
          height: "clamp(52px, 6.5vw, calc(var(--su, 1px) * 82))",
          background: "linear-gradient(145deg, rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.03))",
          border: "1px solid rgba(255, 200, 110, 0.22)",
          boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        }}
      >
        <DynamicIcon
          name={stat.icon}
          strokeWidth={2}
          className="text-[#FFC83D]"
          style={{
            width: "clamp(26px, 3.2vw, calc(var(--su, 1px) * 36))",
            height: "clamp(26px, 3.2vw, calc(var(--su, 1px) * 36))",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Number: 62u / 800 / line-height 1 / white / tabular-nums (gap 10u) */}
      <div
        className="font-extrabold text-white tracking-[-0.01em] leading-none flex items-baseline justify-center"
        style={{
          marginTop: "clamp(8px, 1.2vw, calc(var(--su, 1px) * 10))",
          fontSize: "clamp(32px, 9vw, calc(var(--su, 1px) * 62))",
        }}
      >
        <CountUp value={stat.value} suffix={stat.suffix} />
      </div>

      {/* Label: 22u / 700 / white (gap 8u) - min-height 2.5em with centered text on mobile */}
      <div
        className="font-bold text-white leading-tight min-h-[2.5em] lg:min-h-0 flex items-center justify-center text-center"
        style={{
          marginTop: "clamp(6px, 1vw, calc(var(--su, 1px) * 8))",
          fontSize: "clamp(15px, 3.8vw, calc(var(--su, 1px) * 22))",
        }}
      >
        {stat.label}
      </div>

      {/* Description: desktop max-width 275u, text-wrap: wrap; mobile width 100%, 13px/1.5, text-wrap: pretty */}
      <p
        className="font-normal text-white/78 text-center w-full text-[13px] leading-[1.5] [text-wrap:pretty] lg:[text-wrap:wrap] lg:text-[calc(var(--su,1px)*17.5)] lg:leading-[1.6] max-w-none lg:max-w-[calc(var(--su,1px)*275)]"
        style={{
          marginTop: "clamp(6px, 1vw, calc(var(--su, 1px) * 8))",
        }}
      >
        {stat.description}
      </p>
    </div>
  );
}
