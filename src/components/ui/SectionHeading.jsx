/**
 * Shared Section Heading (H2) component.
 * Features an isolation context and an animated highlight marker behind the highlighted word.
 * Requires explicit text/prefix and highlight props (no hardcoded Programs defaults).
 */
export default function SectionHeading({
  id,
  text,
  plainText,
  prefix,
  highlight,
  highlightText,
  fontSize = 56,
  className = "",
}) {
  const mainText = text || plainText || prefix || "";
  const highlightedWord = highlight || highlightText || "";

  return (
    <h2
      id={id}
      className={`isolate font-extrabold tracking-[-0.02em] leading-[1.1] text-[#0F0F0F] text-center ${className}`}
      style={{
        fontSize: `clamp(28px, 4vw, calc(var(--su, 1px) * ${fontSize}))`,
      }}
    >
      <span>{mainText} </span>
      <span className="relative inline-block after:content-[''] after:absolute after:-left-[6px] after:-right-[6px] lg:after:-left-[calc(var(--su,1px)*6)] lg:after:-right-[calc(var(--su,1px)*6)] after:bottom-[0.06em] after:h-[38%] after:bg-gradient-to-r after:from-[#FFD43B] after:via-[#FFB21E] after:to-[#FF9A1A] after:-z-10 after:rounded-none after:[box-decoration-break:clone] highlighter-marker">
        {highlightedWord}
      </span>
    </h2>
  );
}
