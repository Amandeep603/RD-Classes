/**
 * Shared Section Badge pill component.
 * Supports children or text prop.
 * Matches 13u / 800 uppercase 0.12em letter-spacing, height 36u, padding-x 26u, bg #FFF4D4, border #F5E2A5.
 */
export default function SectionBadge({ children, text, className = "" }) {
  const content = children || text;

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full select-none shadow-xs font-extrabold uppercase tracking-[0.12em] text-[#1A1A1A] whitespace-nowrap ${className}`}
      style={{
        height: "max(32px, calc(var(--su, 1px) * 36))",
        paddingLeft: "max(20px, calc(var(--su, 1px) * 26))",
        paddingRight: "max(20px, calc(var(--su, 1px) * 26))",
        fontSize: "max(12px, calc(var(--su, 1px) * 13))",
        backgroundColor: "#FFF4D4",
        border: "1px solid #F5E2A5",
      }}
    >
      {content}
    </div>
  );
}
