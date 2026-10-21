/**
 * BookIllustration component for Section E: "What You Will Master".
 * Hand-crafted 3D book vector SVG (viewBox 160x190) tilted -10deg to -14deg.
 * Features:
 * - 3D perspective with cover gradient, spine strip, and cream page edges (bottom and right)
 * - Embossed/contrasting cover graphics matching each book:
 *   1. Yellow: two embossed horizontal lines
 *   2. Navy: upward zig-zag trend arrow
 *   3. Orange: 3-bar analytical chart
 *   4. Blue: graduation cap
 * - Micro-animation: softFloat + tilt on hover
 */
export default function BookIllustration({ tone, index }) {
  // Config per book index/tone (Fix Pass v3.4 vivid book covers)
  const bookConfigs = {
    yellow: {
      gradientStart: "#FFD84D",
      gradientEnd: "#F5B50F",
      spineColor: "#D69708",
      spineGradient: "linear-gradient(180deg, #F8BD1E, #D69708)",
      pagesEdge: "#FFF9E6",
      pagesShadow: "#E8D8A8",
      tilt: "-11deg",
      scale: 1,
    },
    navy: {
      gradientStart: "#1B3F8F",
      gradientEnd: "#0B2A63",
      spineColor: "#071E47",
      spineGradient: "linear-gradient(180deg, #163678, #071E47)",
      pagesEdge: "#EDF4FC",
      pagesShadow: "#BCCEE2",
      tilt: "-13deg",
      scale: 1.06, // book 2 is slightly larger in the reference
    },
    orange: {
      gradientStart: "#FF9F5A",
      gradientEnd: "#F27A24",
      spineColor: "#D66212",
      spineGradient: "linear-gradient(180deg, #F97316, #D66212)",
      pagesEdge: "#FFF6ED",
      pagesShadow: "#EED1BC",
      tilt: "-11deg",
      scale: 1,
    },
    blue: {
      gradientStart: "#3B93FF",
      gradientEnd: "#1E6FE8",
      spineColor: "#1457BD",
      spineGradient: "linear-gradient(180deg, #2E85FB, #1457BD)",
      pagesEdge: "#EFF6FF",
      pagesShadow: "#BDD5F0",
      tilt: "-12deg",
      scale: 1,
    },
  };

  const config = bookConfigs[tone] || bookConfigs.yellow;

  return (
    <div
      className="pointer-events-none absolute top-[-6px] right-[-10px] select-none transition-transform duration-500 ease-out group-hover:rotate-[3deg] group-hover:-translate-y-2 z-0"
      style={{
        width: "clamp(100px, 36cqw, calc(var(--su, 1px) * 136))",
        height: "clamp(120px, 43.5cqw, calc(var(--su, 1px) * 164))",
        transform: `rotate(${config.tilt}) scale(${config.scale})`,
        transformOrigin: "center center",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_16px_24px_rgba(15,23,42,0.22)]"
      >
        <defs>
          <linearGradient id={`bookGrad-${tone}`} x1="20" y1="20" x2="140" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={config.gradientStart} />
            <stop offset="100%" stopColor={config.gradientEnd} />
          </linearGradient>

          <linearGradient id={`pagesEdgeGrad-${tone}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={config.pagesEdge} />
            <stop offset="100%" stopColor={config.pagesShadow} />
          </linearGradient>

          <filter id={`insetShadow-${tone}`} x="-10%" y="-10%" width="120%" height="120%">
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="1.5" result="offset-blur" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood floodColor="#000" floodOpacity="0.25" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>

        {/* Book Contact Shadow */}
        <ellipse cx="80" cy="180" rx="65" ry="8" fill="rgba(15,23,42,0.18)" />

        {/* Back Cover & Pages Edge (3D depth on bottom & right) */}
        {/* Right page thickness */}
        <path
          d="M 134 32 L 146 44 L 146 166 L 134 154 Z"
          fill={`url(#pagesEdgeGrad-${tone})`}
          stroke={config.pagesShadow}
          strokeWidth="0.8"
        />
        {/* Lines representing pages on right edge */}
        <line x1="138" y1="39" x2="138" y2="158" stroke="rgba(0,0,0,0.06)" strokeWidth="0.6" />
        <line x1="142" y1="42" x2="142" y2="162" stroke="rgba(0,0,0,0.06)" strokeWidth="0.6" />

        {/* Bottom page thickness */}
        <path
          d="M 28 152 L 134 154 L 146 166 L 38 164 Z"
          fill={`url(#pagesEdgeGrad-${tone})`}
          stroke={config.pagesShadow}
          strokeWidth="0.8"
        />
        {/* Page line markings on bottom */}
        <line x1="34" y1="158" x2="140" y2="160" stroke="rgba(0,0,0,0.06)" strokeWidth="0.6" />

        {/* Main Book Front Cover */}
        <path
          d="M 24 24 C 24 20, 27 18, 32 18 L 128 20 C 133 20, 136 24, 136 28 L 134 154 C 134 158, 130 160, 126 160 L 28 156 C 24 156, 22 153, 22 149 L 24 24 Z"
          fill={`url(#bookGrad-${tone})`}
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />

        {/* Spine band strip on left */}
        <path
          d="M 24 24 C 24 20, 27 18, 32 18 L 44 19 L 40 157 L 28 156 C 24 156, 22 153, 22 149 Z"
          fill={config.spineColor}
          opacity="0.85"
        />

        {/* Spine hinge line */}
        <line x1="44" y1="19" x2="40" y2="157" stroke="rgba(0,0,0,0.22)" strokeWidth="1.2" />

        {/* Cover Surface Graphics */}
        {tone === "yellow" && (
          /* Book 1: Two embossed horizontal bars */
          <g>
            <rect
              x="58"
              y="68"
              width="50"
              height="6"
              rx="3"
              fill="#FFFFFF"
              fillOpacity="0.85"
            />
            <rect
              x="58"
              y="69"
              width="50"
              height="5"
              rx="2.5"
              fill="#B87700"
              fillOpacity="0.95"
            />
            <rect
              x="58"
              y="84"
              width="36"
              height="6"
              rx="3"
              fill="#FFFFFF"
              fillOpacity="0.85"
            />
            <rect
              x="58"
              y="85"
              width="36"
              height="5"
              rx="2.5"
              fill="#B87700"
              fillOpacity="0.95"
            />
          </g>
        )}

        {tone === "navy" && (
          /* Book 2: Upward white zig-zag trend line */
          <g>
            <path
              d="M 58 112 L 76 86 L 90 98 L 108 64"
              stroke="#FFFFFF"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 96 64 L 108 64 L 108 76"
              stroke="#FFFFFF"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}

        {tone === "orange" && (
          /* Book 3: 3-bar analytical chart */
          <g>
            <rect x="62" y="94" width="9" height="26" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
            <rect x="76" y="78" width="9" height="42" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
            <rect x="90" y="62" width="9" height="58" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
          </g>
        )}

        {tone === "blue" && (
          /* Book 4: Graduation cap */
          <g>
            {/* Cap Diamond */}
            <path
              d="M 86 64 L 114 74 L 86 84 L 58 74 Z"
              fill="#FFFFFF"
            />
            {/* Skullcap underneath */}
            <path
              d="M 68 78 L 68 90 C 68 96, 104 96, 104 90 L 104 78 Z"
              fill="#FFFFFF"
              fillOpacity="0.92"
            />
            {/* Tassel line */}
            <path
              d="M 108 72 L 116 82 L 116 94"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="116" cy="95" r="2.5" fill="#FFFFFF" />
          </g>
        )}
      </svg>
    </div>
  );
}
