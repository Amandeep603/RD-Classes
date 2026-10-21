import { DynamicIcon } from "@/lib/icons";

/**
 * FloatingChip component for Section F: "Student Learning Portal".
 * White pill floating badge with icon circle and bold text.
 * Floats gently with softFloat animation on desktop (html[data-motion="full"]).
 */
export default function FloatingChip({ chip, className = "", style = {} }) {
  // Background and icon colors based on tone
  const toneMap = {
    blue: {
      circleBg: "#DCEBFB",
      iconColor: "#2563EB",
    },
    orange: {
      circleBg: "#FFDCC2",
      iconColor: "#EA580C",
    },
    yellow: {
      circleBg: "#FFE8A3",
      iconColor: "#D97706",
    },
  };

  const colors = toneMap[chip.tone] || toneMap.yellow;

  return (
    <div
      className={`absolute z-20 flex items-center bg-white rounded-full select-none ${className}`}
      style={{
        boxShadow: "0 10px 24px -10px rgba(15, 23, 42, 0.22)",
        height: "clamp(38px, 10cqw, calc(var(--su, 1px) * 56))",
        paddingLeft: "clamp(6px, 1.6cqw, calc(var(--su, 1px) * 8))",
        paddingRight: "clamp(12px, 3.2cqw, calc(var(--su, 1px) * 18))",
        border: "1px solid rgba(15, 23, 42, 0.04)",
        ...style,
      }}
      aria-hidden="true"
    >
      {/* Icon Circle */}
      <div
        className="flex items-center justify-center rounded-full shrink-0 mr-[clamp(8px,2cqw,calc(var(--su,1px)*12))]"
        style={{
          width: "clamp(28px, 7.5cqw, calc(var(--su, 1px) * 44))",
          height: "clamp(28px, 7.5cqw, calc(var(--su, 1px) * 44))",
          backgroundColor: colors.circleBg,
          color: colors.iconColor,
        }}
      >
        <DynamicIcon
          name={chip.icon}
          style={{
            width: "clamp(14px, 3.8cqw, calc(var(--su, 1px) * 22))",
            height: "clamp(14px, 3.8cqw, calc(var(--su, 1px) * 22))",
          }}
          strokeWidth={2.2}
        />
      </div>

      {/* Label Text */}
      <div
        className="font-bold text-[#0F172A] leading-tight"
        style={{
          fontSize: "clamp(10px, 2.6cqw, calc(var(--su, 1px) * 14.5))",
        }}
      >
        {chip.labelLines ? (
          <>
            <span className="block">{chip.labelLines[0]}</span>
            <span className="block">{chip.labelLines[1]}</span>
          </>
        ) : (
          <span className="whitespace-nowrap">{chip.label}</span>
        )}
      </div>
    </div>
  );
}
