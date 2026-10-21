import { PORTAL_BLOB_PATH } from "@/constants/portalBlob";

/**
 * DevicesIllustration component for Section F: "Student Learning Portal".
 * Rebuilt as ONE inline SVG according to Fix Pass v3.4 specification:
 * - Desktop viewBox="0 0 810 555" (proportional scaling at any width)
 * - Mobile/tablet viewBox="40 -60 740 615" (so devices fill width with top band for chips)
 * - Proportions: Laptop screen 576x364 (~1.58 aspect), Phone 190x286
 * - All UI text as SVG <text> (no wrapping possible)
 * - Organic blob, realistic metallic bezels, blackboard handwriting notes in Caveat
 */
export default function DevicesIllustration({
  viewBox = "0 0 810 555",
  className = "",
  style = {},
}) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-hidden="true"
      className={`w-full h-full select-none ${className}`}
      style={{
        fontFamily: "var(--font-plus-jakarta-sans), system-ui, sans-serif",
        ...style,
      }}
    >
      <defs>
        {/* Organic Blob Gradient */}
        <linearGradient id="portalBlobGrad" x1="140" y1="70" x2="795" y2="495" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--surface-f-blob-start, #FFEBB3)" />
          <stop offset="100%" stopColor="var(--surface-f-blob-end, #FFDF97)" />
        </linearGradient>

        {/* Laptop Ground Soft Shadow */}
        <radialGradient id="laptopGroundShadow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#0B132B" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#0B132B" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0B132B" stopOpacity="0" />
        </radialGradient>

        {/* Metallic Frame Gradients */}
        <linearGradient id="metallicLidGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C9CDD4" />
          <stop offset="100%" stopColor="#8E949E" />
        </linearGradient>

        <linearGradient id="metallicBaseGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DDE0E5" />
          <stop offset="100%" stopColor="#A9AEB6" />
        </linearGradient>

        <linearGradient id="metallicPhoneGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C9CDD4" />
          <stop offset="100%" stopColor="#8E949E" />
        </linearGradient>

        <linearGradient id="highlightRowGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFC21A" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFC21A" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* 1. Background Organic Pale-Yellow Blob */}
      <path
        d={PORTAL_BLOB_PATH}
        fill="url(#portalBlobGrad)"
        opacity="0.95"
      />

      {/* 2. Soft Ground Shadow underneath Laptop Base */}
      <ellipse
        cx="400"
        cy="514"
        rx="380"
        ry="18"
        fill="url(#laptopGroundShadow)"
      />

      {/* 3. LAPTOP */}
      {/* Outer Lid Frame */}
      <rect
        x="100"
        y="90"
        width="600"
        height="390"
        rx="18"
        fill="#0B0C0F"
        stroke="url(#metallicLidGrad)"
        strokeWidth="3"
      />

      {/* Screen Bezel & Display Area */}
      <rect
        x="112"
        y="103"
        width="576"
        height="364"
        rx="8"
        fill="#11141A"
      />

      {/* --- Screen Header Bar --- */}
      {/* Three Window Controls (Traffic Lights) */}
      <circle cx="132" cy="126" r="4.5" fill="#FF5F57" />
      <circle cx="147" cy="126" r="4.5" fill="#FEBC2E" />
      <circle cx="162" cy="126" r="4.5" fill="#28C840" />

      {/* Breadcrumb Navigation */}
      <text
        x="184"
        y="129"
        fill="#CBD5E1"
        fontSize="9.5"
        fontWeight="500"
      >
        Class 12 &gt; Accounting for Partnership Firms
      </text>

      {/* 1080p HD Quality Pill */}
      <rect
        x="598"
        y="117"
        width="48"
        height="18"
        rx="4"
        fill="#222834"
      />
      <text
        x="622"
        y="129.5"
        textAnchor="middle"
        fill="#F5B400"
        fontSize="8"
        fontWeight="700"
      >
        1080p HD
      </text>

      {/* Fullscreen Expand Icon */}
      <g stroke="#94A3B8" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 660 120 L 665 120 L 665 125" />
        <path d="M 672 120 L 667 120 L 667 125" />
        <path d="M 660 132 L 665 132 L 665 127" />
        <path d="M 672 132 L 667 132 L 667 127" />
      </g>

      {/* Divider below header */}
      <line x1="112" y1="144" x2="688" y2="144" stroke="#1F2530" strokeWidth="1" />

      {/* --- Sidebar Lecture Panel (x116..292, y148..448) --- */}
      <rect
        x="116"
        y="148"
        width="176"
        height="300"
        rx="6"
        fill="#171A21"
      />

      {/* Lectures Header */}
      <text
        x="128"
        y="170"
        fill="#FFFFFF"
        fontSize="10.5"
        fontWeight="700"
      >
        Lectures (48)
      </text>
      {/* Down Chevron */}
      <path
        d="M 276 166 L 280 170 L 284 166"
        fill="none"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Row 1: Active Highlighted Lecture */}
      <rect
        x="122"
        y="182"
        width="164"
        height="30"
        rx="5"
        fill="url(#highlightRowGrad)"
        stroke="#D9A81E"
        strokeWidth="1"
      />
      <circle cx="135" cy="197" r="7" fill="#FFC21A" />
      <polygon points="133,194 139,197 133,200" fill="#0B132B" />
      <text x="148" y="200.5" fill="#FFFFFF" fontSize="9.5" fontWeight="600">
        01 Introduction
      </text>
      <text x="278" y="200.5" textAnchor="end" fill="#F5B400" fontSize="8.5" fontWeight="600">
        32:18
      </text>

      {/* Row 2 */}
      <circle cx="135" cy="232" r="7" fill="#252A34" />
      <polygon points="133,229 139,232 133,235" fill="#94A3B8" />
      <text x="148" y="235.5" fill="#E5E7EB" fontSize="9.5" fontWeight="500">
        02 Nature of Partnership
      </text>
      <text x="278" y="235.5" textAnchor="end" fill="#8B93A1" fontSize="8.5">
        28:51
      </text>

      {/* Row 3 */}
      <circle cx="135" cy="267" r="7" fill="#252A34" />
      <polygon points="133,264 139,267 133,270" fill="#94A3B8" />
      <text x="148" y="270.5" fill="#E5E7EB" fontSize="9.5" fontWeight="500">
        03 Partnership Deed
      </text>
      <text x="278" y="270.5" textAnchor="end" fill="#8B93A1" fontSize="8.5">
        41:20
      </text>

      {/* Row 4 */}
      <circle cx="135" cy="302" r="7" fill="#252A34" />
      <polygon points="133,299 139,302 133,305" fill="#94A3B8" />
      <text x="148" y="305.5" fill="#E5E7EB" fontSize="9.5" fontWeight="500">
        04 Fixed vs Fluctuating...
      </text>
      <text x="278" y="305.5" textAnchor="end" fill="#8B93A1" fontSize="8.5">
        36:10
      </text>

      {/* Row 5 */}
      <circle cx="135" cy="337" r="7" fill="#252A34" />
      <polygon points="133,334 139,337 133,340" fill="#94A3B8" />
      <text x="148" y="340.5" fill="#E5E7EB" fontSize="9.5" fontWeight="500">
        05 Profit &amp; Loss...
      </text>
      <text x="278" y="340.5" textAnchor="end" fill="#8B93A1" fontSize="8.5">
        47:35
      </text>

      {/* Row 6 */}
      <circle cx="135" cy="372" r="7" fill="#252A34" />
      <polygon points="133,369 139,372 133,375" fill="#94A3B8" />
      <text x="148" y="375.5" fill="#E5E7EB" fontSize="9.5" fontWeight="500">
        06 Appropriation Account
      </text>
      <text x="278" y="375.5" textAnchor="end" fill="#8B93A1" fontSize="8.5">
        39:12
      </text>

      {/* --- Blackboard Video Player Area (x300..678, y148..416) --- */}
      <rect
        x="300"
        y="148"
        width="378"
        height="268"
        rx="6"
        fill="#0D0F13"
      />

      {/* Blackboard Title in Handwritten Caveat */}
      <text
        x="489"
        y="180"
        textAnchor="middle"
        fill="#F5B400"
        fontSize="19"
        fontWeight="700"
        style={{ fontFamily: "var(--font-caveat), 'Caveat', cursive" }}
      >
        Partnership Accounts
      </text>
      <path
        d="M 405 186 Q 489 189 573 186"
        stroke="#F5B400"
        strokeWidth="1.5"
        fill="none"
      />

      {/* 4 Summary Lecture Notes in Caveat */}
      <g style={{ fontFamily: "var(--font-caveat), 'Caveat', cursive" }} fontSize="12.5" fill="#F1F5F9">
        {/* Line 1 */}
        <text x="320" y="210">1. Appropriation of Profit</text>
        <path d="M 436 206 L 452 206 M 448 202 L 453 206 L 448 210" stroke="#FFC21A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <text x="460" y="210">Partners / As per deed</text>

        {/* Line 2 */}
        <text x="320" y="230">2. Interest on Capital</text>
        <path d="M 424 226 L 440 226 M 436 222 L 441 226 L 436 230" stroke="#FFC21A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <text x="448" y="230">As per deed</text>

        {/* Line 3 */}
        <text x="320" y="250">3. Interest on Drawings</text>
        <path d="M 436 246 L 452 246 M 448 242 L 453 246 L 448 250" stroke="#FFC21A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <text x="460" y="250">As per deed</text>

        {/* Line 4 */}
        <text x="320" y="270">4. Salary / Commission</text>
        <path d="M 438 266 L 454 266 M 450 262 L 455 266 L 450 270" stroke="#FFC21A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <text x="462" y="270">As per deed</text>
      </g>

      {/* Centred Large Play Circle */}
      {/* Soft Glow Pulse Ring (CSS animation) */}
      <circle
        cx="489"
        cy="318"
        r="32"
        fill="none"
        stroke="#FFC21A"
        strokeWidth="2.5"
        className="animate-play-pulse"
        style={{
          transformBox: "fill-box",
          transformOrigin: "center",
        }}
      />
      {/* Main Solid Play Circle */}
      <circle
        cx="489"
        cy="318"
        r="24"
        fill="#FFC21A"
        filter="drop-shadow(0 6px 14px rgba(0,0,0,0.5))"
      />
      {/* Dark Triangle */}
      <polygon
        points="483,307 499,318 483,329"
        fill="#0D0F13"
      />

      {/* Small Underlined Line at Bottom */}
      <text
        x="489"
        y="374"
        textAnchor="middle"
        fill="#F5B400"
        fontSize="11.5"
        fontWeight="600"
        style={{ fontFamily: "var(--font-caveat), 'Caveat', cursive" }}
      >
        Profit &amp; Loss Appropriation Account
      </text>
      <path
        d="M 395 379 Q 489 381 583 379"
        stroke="#F5B400"
        strokeWidth="1.2"
        fill="none"
      />

      {/* --- Video Controls Row (y424..448) --- */}
      {/* Play/Pause Button */}
      <circle cx="316" cy="436" r="8" fill="#222834" />
      <polygon points="314,432 319,436 314,440" fill="#FFFFFF" />

      {/* Progress Track */}
      <rect
        x="332"
        y="434"
        width="236"
        height="4"
        rx="2"
        fill="#334155"
      />
      {/* Filled Progress Bar (58%) */}
      <rect
        x="332"
        y="434"
        width="137"
        height="4"
        rx="2"
        fill="#FFC21A"
        className="animate-video-progress"
      />

      {/* Timecode Text */}
      <text
        x="576"
        y="439.5"
        fill="#FFFFFF"
        fontSize="8.5"
        fontWeight="500"
      >
        24:31 / 35:40
      </text>

      {/* Settings Gear Icon at Right */}
      <g stroke="#94A3B8" strokeWidth="1.2" fill="none">
        <circle cx="664" cy="436" r="4" />
        <path d="M 664 430 L 664 432 M 664 440 L 664 442 M 658 436 L 660 436 M 668 436 L 670 436" />
      </g>

      {/* --- Laptop Base Deck (Keyboard deck) --- */}
      <path
        d="M 100 480 L 700 480 L 798 504 Q 798 508 792 508 L 8 508 Q 2 508 2 504 L 100 480 Z"
        fill="url(#metallicBaseGrad)"
      />
      {/* Center opening notch */}
      <rect
        x="355"
        y="480"
        width="90"
        height="7"
        rx="3.5"
        fill="#7A808A"
      />

      {/* ========================================================= */}
      {/* 4. SMARTPHONE MOCKUP (x615..805, y267..553, 190x286)      */}
      {/* ========================================================= */}

      {/* Stacked Low-Opacity Rounded Rect Drop Shadow (no blur filter) */}
      <rect x="625" y="281" width="190" height="286" rx="28" fill="#000000" opacity="0.32" />
      <rect x="621" y="275" width="190" height="286" rx="28" fill="#000000" opacity="0.22" />
      <rect x="618" y="270" width="190" height="286" rx="28" fill="#000000" opacity="0.14" />

      {/* Phone Outer Body */}
      <rect
        x="615"
        y="267"
        width="190"
        height="286"
        rx="28"
        fill="#0A0B0E"
        stroke="url(#metallicPhoneGrad)"
        strokeWidth="3.5"
      />

      {/* Top Center Camera Notch / Dynamic Island */}
      <rect
        x="685"
        y="275"
        width="50"
        height="7.5"
        rx="3.75"
        fill="#1E222B"
      />

      {/* Phone Header: RD Classes + Live Pill + Menu */}
      <text
        x="634"
        y="303"
        fill="#FFFFFF"
        fontSize="11.5"
        fontWeight="800"
      >
        RD Classes
      </text>

      {/* Live > Pill */}
      <rect
        x="718"
        y="292"
        width="44"
        height="15"
        rx="7.5"
        fill="#2A2D34"
      />
      <text
        x="740"
        y="303"
        textAnchor="middle"
        fill="#FFC21A"
        fontSize="8"
        fontWeight="700"
      >
        Live &gt;
      </text>

      {/* Header Menu Icon (3 dots) */}
      <circle cx="778" cy="299" r="1.5" fill="#CBD5E1" />
      <circle cx="783" cy="299" r="1.5" fill="#CBD5E1" />
      <circle cx="788" cy="299" r="1.5" fill="#CBD5E1" />

      {/* Phone Video Card (x628..792, y314..378) */}
      <rect
        x="628"
        y="314"
        width="164"
        height="64"
        rx="10"
        fill="#1A1E25"
        stroke="#282E3A"
        strokeWidth="1"
      />

      <text
        x="640"
        y="335"
        fill="#FFFFFF"
        fontSize="11"
        fontWeight="700"
      >
        Cash Flow Statement
      </text>

      <text
        x="640"
        y="352"
        fill="#F5B400"
        fontSize="8"
        fontWeight="600"
      >
        Lecture 84 • 18 min left
      </text>

      {/* Yellow Progress Bar (40%) */}
      <rect
        x="640"
        y="361"
        width="140"
        height="3.5"
        rx="1.75"
        fill="#374151"
      />
      <rect
        x="640"
        y="361"
        width="56"
        height="3.5"
        rx="1.75"
        fill="#FFC21A"
      />

      {/* Phone Action List Rows */}
      {/* Row 1: Notes Downloaded */}
      <g>
        <circle cx="642" cy="402" r="7" fill="#14532D" />
        <path d="M 639 402 L 641 404 L 645 400" fill="none" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="655" y="405.5" fill="#FFFFFF" fontSize="9.5" fontWeight="600">
          Notes Downloaded
        </text>
        <text x="782" y="405.5" textAnchor="end" fill="#22C55E" fontSize="8.5" fontWeight="600">
          PDF
        </text>
      </g>

      {/* Divider 1 */}
      <line x1="630" y1="418" x2="790" y2="418" stroke="#242933" strokeWidth="0.8" />

      {/* Row 2: Add to Watch Later */}
      <g>
        <circle cx="642" cy="436" r="7" fill="#1E293B" />
        <path d="M 642 432 L 642 440 M 638 436 L 646 436" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
        <text x="655" y="439.5" fill="#FFFFFF" fontSize="9.5" fontWeight="600">
          Add to Watch Later
        </text>
        <text x="782" y="439.5" textAnchor="end" fill="#94A3B8" fontSize="10">
          +
        </text>
      </g>

      {/* Divider 2 */}
      <line x1="630" y1="452" x2="790" y2="452" stroke="#242933" strokeWidth="0.8" />

      {/* Row 3: Playback Speed */}
      <g>
        <circle cx="642" cy="470" r="7" fill="#1E293B" />
        {/* Speedometer needle */}
        <path d="M 638 472 A 5 5 0 0 1 646 472" fill="none" stroke="#94A3B8" strokeWidth="1.2" />
        <path d="M 642 472 L 644 468" stroke="#FFC21A" strokeWidth="1.2" strokeLinecap="round" />
        <text x="655" y="473.5" fill="#FFFFFF" fontSize="9.5" fontWeight="600">
          Playback Speed
        </text>
        <text x="782" y="473.5" textAnchor="end" fill="#FFC21A" fontSize="9.5" fontWeight="700">
          1.5x &gt;
        </text>
      </g>

      {/* Bottom Home Indicator Bar */}
      <rect
        x="675"
        y="534"
        width="70"
        height="4"
        rx="2"
        fill="#94A3B8"
      />
    </svg>
  );
}
