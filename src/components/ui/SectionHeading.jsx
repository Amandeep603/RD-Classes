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
  highlightVariant = "marker", // "marker" | "block"
  markerHeight = "38%",
  align = "center",
  line1,
  line2Prefix,
  textColor = "#0F0F0F",
  className = "",
  style = {},
}) {
  const mainText = text || plainText || prefix || "";
  const highlightedWord = highlight || highlightText || "";

  let markerGradient =
    highlightTone === "soft"
      ? "linear-gradient(90deg, #FFE9A6, #FFDDA0)"
      : highlightTone === "orange"
      ? "linear-gradient(90deg, #F97316, #FFB21E)"
      : highlightTone === "block"
      ? "linear-gradient(90deg, #FFD21F, #FF9F1A)"
      : "linear-gradient(90deg, #FFD43B, #FFB21E 55%, #FF9A1A)";

  const alignClass =
    align === "left"
      ? "text-center lg:text-left"
      : "text-center";

  const isBlock = highlightVariant === "block";

  const renderHighlight = () => {
    if (!highlightedWord) return null;
    if (isBlock) {
      return (
        <span
          className="inline-block px-3 py-1 lg:px-[calc(var(--su,1px)*14)] lg:py-[calc(var(--su,1px)*4)] rounded-lg lg:rounded-[calc(var(--su,1px)*10)] text-[#0B1630] font-extrabold shadow-xs"
          style={{
            background: "linear-gradient(90deg, #FFD21F, #FF9F1A)",
          }}
        >
          {highlightedWord}
        </span>
      );
    }
    return (
      <span
        className="relative inline-block ml-[0.25em] after:content-[''] after:absolute after:-left-[6px] after:-right-[6px] lg:after:-left-[calc(var(--su,1px)*6)] lg:after:-right-[calc(var(--su,1px)*6)] after:bottom-[0.06em] after:h-[var(--marker-height,38%)] after:bg-[image:var(--marker-bg)] after:-z-10 after:rounded-none after:[box-decoration-break:clone] highlighter-marker"
        style={{
          "--marker-bg": markerGradient,
          "--marker-height": markerHeight,
        }}
      >
        {highlightedWord}
      </span>
    );
  };

  return (
    <h2
      id={id}
      className={`isolate font-extrabold tracking-[-0.02em] leading-[1.1] text-balance ${alignClass} ${className}`}
      style={{
        fontSize: `clamp(28px, 8vw, calc(var(--su, 1px) * ${fontSize}))`,
        color: textColor,
        ...style,
      }}
    >
      {line1 ? (
        <>
          <span className="block">{line1}</span>
          <span className="block mt-1">
            {line2Prefix && <span className="mr-2">{line2Prefix}</span>}
            {renderHighlight()}
          </span>
        </>
      ) : (
        <>
          <span>{mainText}</span>
          {renderHighlight()}
        </>
      )}
    </h2>
  );
}
