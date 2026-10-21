/**
 * Shared Section Badge pill component.
 * e.g., "COURSE CATEGORIES", "FEATURED BATCHES"
 */
export default function SectionBadge({ children, className = "" }) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-[#FFF3D1] border border-[#F3DFA0] text-[#1A1A1A] font-extrabold uppercase tracking-[0.12em] select-none shadow-xs px-5 sm:px-6 h-[36px] lg:h-[calc(var(--su)*36)] text-[12px] sm:text-[13px] lg:text-[calc(var(--su)*14)] ${className}`}
      style={{
        paddingTop: "calc(var(--su) * 9)",
        paddingBottom: "calc(var(--su) * 9)",
        paddingLeft: "calc(var(--su) * 26)",
        paddingRight: "calc(var(--su) * 26)",
      }}
    >
      {children}
    </div>
  );
}
