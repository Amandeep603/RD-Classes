import { DynamicIcon } from "@/lib/icons";

/**
 * Shared Section Badge component.
 * Variants:
 *  - "gradient": linear-gradient(90deg, #FFF3D6, #FFE6D6) with no border (Section D)
 *  - "soft": fill #FFF4D4 with 1px #F5E2A5 border (Section E)
 *  - "icon": fill #FFF2D0 with a Zap icon (18u) (Section F)
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

  let bgStyle = {
    backgroundColor: "#FFF4D4",
    border: "1px solid #F5E2A5",
  };

  if (variant === "gradient") {
    bgStyle = {
      background: "linear-gradient(90deg, #FFF3D6 0%, #FFE6D6 100%)",
      border: "none",
    };
  } else if (variant === "icon") {
    bgStyle = {
      backgroundColor: "#FFF2D0",
      border: "none",
    };
  }

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full select-none font-extrabold uppercase text-[#1A1A1A] whitespace-nowrap ${className}`}
      style={{
        height: "max(32px, calc(var(--su, 1px) * 36))",
        paddingLeft: icon ? "max(14px, calc(var(--su, 1px) * 16))" : "max(18px, calc(var(--su, 1px) * 22))",
        paddingRight: "max(18px, calc(var(--su, 1px) * 22))",
        fontSize: variant === "icon" ? "max(12px, calc(var(--su, 1px) * 12.4))" : "max(12px, calc(var(--su, 1px) * 13))",
        letterSpacing: variant === "icon" ? "0.04em" : "0.12em",
        ...bgStyle,
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

