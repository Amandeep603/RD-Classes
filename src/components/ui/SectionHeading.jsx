/**
 * Shared Section Heading (H2) component.
 * Features an isolation context and an animated highlight marker behind the highlighted word.
 * Supports:
 *  - fontSize (default 52u for sections D, E, F)
 *  - highlightTone ("warm" | "soft")
 *  - align ("center" | "left")
 *  - multi-line prefix / lines
 */
export default function SectionHeading({
  id,
  text,
  plainText,
  prefix,
  highlight,
  highlightText,
  fontSize = 52,
  highlightTone = "warm",
  align = "center",
  line1,
  line2Prefix,
  className = "",
  style = {},
}) {
  const mainText = text || plainText || prefix || "";
  const highlightedWord = highlight || highlightText || "";

  const markerGradient =
    highlightTone === "soft"
      ? "linear-gradient(90deg, #FFE9A6, #FFDDA0)"
      : "linear-gradient(90deg, #FFD43B, #FFB21E 55%, #FF9A1A)";

  const alignClass =
    align === "left"
      ? "text-center lg:text-left"
      : "text-center";

  return (
    <h2
      id={id}
      className={`isolate font-extrabold tracking-[-0.02em] leading-[1.1] text-[#0F0F0F] text-balance ${alignClass} ${className}`}
      style={{
        fontSize: `clamp(28px, 8vw, calc(var(--su, 1px) * ${fontSize}))`,
        ...style,
      }}
    >
      {line1 ? (
        <>
          <span className="block">{line1}</span>
          <span className="block mt-1">
            {line2Prefix && <span>{line2Prefix}</span>}
            <span
              className="relative inline-block after:content-[''] after:absolute after:-left-[6px] after:-right-[6px] lg:after:-left-[calc(var(--su,1px)*6)] lg:after:-right-[calc(var(--su,1px)*6)] after:bottom-[0.06em] after:h-[38%] after:bg-[image:var(--marker-bg)] after:-z-10 after:rounded-none after:[box-decoration-break:clone] highlighter-marker"
              style={{
                "--marker-bg": markerGradient,
              }}
            >
              {highlightedWord}
            </span>
          </span>
        </>
      ) : (
        <>
          <span>{mainText}</span>
          {highlightedWord && (
            <span
              className="relative inline-block ml-[0.25em] after:content-[''] after:absolute after:-left-[6px] after:-right-[6px] lg:after:-left-[calc(var(--su,1px)*6)] lg:after:-right-[calc(var(--su,1px)*6)] after:bottom-[0.06em] after:h-[38%] after:bg-[image:var(--marker-bg)] after:-z-10 after:rounded-none after:[box-decoration-break:clone] highlighter-marker"
              style={{
                "--marker-bg": markerGradient,
              }}
            >
              {highlightedWord}
            </span>
          )}
        </>
      )}
    </h2>
  );
}
