import { DynamicIcon } from "@/lib/icons";

/**
 * Shared Section Badge component.
 * Fix Pass v3.4 tokens:
 * - How It Works badge (variant="gradient"): linear-gradient(90deg, #FFE29A, #FFD0A0)
 * - All others: solid #FFE08F
 * - All with 1px border #F0BC4E, text #1A1205, shadow 0 6px 14px -8px rgba(180, 120, 10, 0.55)
 */
export default function SectionBadge({
  children,
  text,
  variant = "soft",
  icon,
  className = "",
  style = {},
}) {
  const content = children || text;

  const isGradient = variant === "gradient";
  const bg = isGradient ? "var(--badge-bg-gradient)" : "var(--badge-bg-solid)";

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full select-none font-extrabold uppercase whitespace-nowrap ${className}`}
      style={{
        height: "max(32px, calc(var(--su, 1px) * 36))",
        paddingLeft: icon ? "max(14px, calc(var(--su, 1px) * 16))" : "max(18px, calc(var(--su, 1px) * 22))",
        paddingRight: "max(18px, calc(var(--su, 1px) * 22))",
        fontSize: variant === "icon" ? "max(12px, calc(var(--su, 1px) * 12.4))" : "max(12px, calc(var(--su, 1px) * 13))",
        letterSpacing: variant === "icon" ? "0.04em" : "0.12em",
        background: bg,
        border: "1px solid var(--badge-border, #F0BC4E)",
        color: "var(--badge-text, #1A1205)",
        boxShadow: "var(--badge-shadow, 0 6px 14px -8px rgba(180, 120, 10, 0.55))",
        ...style,
      }}
    >
      {icon && (
        <DynamicIcon
          name={icon}
          className="mr-2 fill-current shrink-0"
          style={{
            width: "max(15px, calc(var(--su, 1px) * 18))",
            height: "max(15px, calc(var(--su, 1px) * 18))",
          }}
          aria-hidden="true"
        />
      )}
      <span>{content}</span>
    </div>
  );
}
