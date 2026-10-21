import { DynamicIcon } from "@/lib/icons";

/**
 * FloatingChip component for Section F: "Student Learning Portal".
 * White pill floating badge with icon circle and bold text.
 * Floats gently with softFloat animation on desktop (html[data-motion="full"]).
 * Labels never wrap (white-space: nowrap).
 * Font size: clamp(11px, 1.8cqw, 15px) (desktop 14.5u).
 */
export default function FloatingChip({ chip, className = "", style = {} }) {
  const toneMap = {
    blue: {
      circleBg: "var(--surface-f-chip-blue, #BFDBF9)",
      iconColor: "#2563EB",
    },
    orange: {
      circleBg: "var(--surface-f-chip-orange, #FFCDA8)",
      iconColor: "#EA580C",
    },
    yellow: {
      circleBg: "var(--surface-f-chip-yellow, #FFE289)",
      iconColor: "#D97706",
    },
  };

  const colors = toneMap[chip.tone] || toneMap.yellow;

  return (
    <div
      className={`absolute z-20 flex items-center bg-white rounded-full select-none whitespace-nowrap ${className}`}
      style={{
        boxShadow: "0 10px 24px -10px rgba(15, 23, 42, 0.22)",
        height: "clamp(34px, 7.5cqw, calc(var(--su, 1px) * 52))",
        paddingLeft: "clamp(6px, 1.4cqw, calc(var(--su, 1px) * 8))",
        paddingRight: "clamp(12px, 2.8cqw, calc(var(--su, 1px) * 18))",
        border: "1px solid rgba(15, 23, 42, 0.04)",
        ...style,
      }}
      aria-hidden="true"
    >
      {/* Icon Circle */}
      <div
        className="flex items-center justify-center rounded-full shrink-0 mr-[clamp(6px,1.5cqw,calc(var(--su,1px)*10))]"
        style={{
          width: "clamp(24px, 5.5cqw, calc(var(--su, 1px) * 38))",
          height: "clamp(24px, 5.5cqw, calc(var(--su, 1px) * 38))",
          backgroundColor: colors.circleBg,
          color: colors.iconColor,
        }}
      >
        <DynamicIcon
          name={chip.icon}
          style={{
            width: "clamp(13px, 2.8cqw, calc(var(--su, 1px) * 20))",
            height: "clamp(13px, 2.8cqw, calc(var(--su, 1px) * 20))",
          }}
          strokeWidth={2.2}
        />
      </div>

      {/* Label Text */}
      <span
        className="font-bold text-[#0F172A] whitespace-nowrap leading-none"
        style={{
          fontSize: "clamp(11px, 1.8cqw, 15px)",
        }}
      >
        {chip.label}
      </span>
    </div>
  );
}
