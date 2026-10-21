/**
 * Shared Section Heading (H2) component.
 * Features an isolation context and an animated highlight marker behind the highlighted word.
 */
export default function SectionHeading({
  id,
  prefix = "Explore Popular",
  highlight = "Programs",
  className = "",
}) {
  return (
    <h2
      id={id}
      className={`isolate font-extrabold tracking-[-0.02em] leading-[1.08] text-[#0F0F0F] text-center [text-wrap:balance] text-[32px] sm:text-[44px] lg:text-[calc(var(--su)*60)] ${className}`}
    >
      <span>{prefix} </span>
      <span className="relative inline-block after:content-[''] after:absolute after:-left-[8px] after:-right-[8px] lg:after:-left-[calc(var(--su)*8)] lg:after:-right-[calc(var(--su)*8)] after:bottom-[4%] after:h-[38%] after:bg-gradient-to-r after:from-[#FFD43B] after:to-[#FFA41B] after:-z-10 after:rounded-xs after:[box-decoration-break:clone] highlighter-marker">
        {highlight}
      </span>
    </h2>
  );
}
