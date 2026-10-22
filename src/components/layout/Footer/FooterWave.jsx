import React from "react";
import { FOOTER_WAVE_STROKE_PATH, FOOTER_WAVE_FILL_PATH } from "@/constants/footerWave";

/**
 * FooterWave component.
 * Sits at the top of the footer with seamless cream upper background (#FDFBF7) and the black footer wave.
 * Flat vector illustrations (black + #F5B400 yellow accents) sitting on the wave contour.
 * ViewBox: 0 0 1600 165, height: 165u
 */
export default function FooterWave() {
  return (
    <div
      className="relative w-full overflow-hidden [container-type:inline-size]"
      style={{
        height: "clamp(64px, 10.3cqw, calc(var(--su, 1px) * 165))",
        backgroundColor: "#FDFBF7",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1600 165"
        preserveAspectRatio="xMidYMax slice"
        className="w-full h-full pointer-events-none select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ================= BACKGROUND FAINT BARS ================= */}

        {/* Faint yellow bar-chart bars behind left plant/books */}
        <rect x="75" y="55" width="12" height="45" rx="3" fill="#FFE8A3" opacity="0.45" />
        <rect x="92" y="38" width="12" height="62" rx="3" fill="#FFE08A" opacity="0.5" />
        <rect x="109" y="24" width="12" height="76" rx="3" fill="#FFD966" opacity="0.55" />

        {/* Faint bar-chart bars behind right graduation cap */}
        <rect x="1450" y="35" width="12" height="65" rx="3" fill="#FFE8A3" opacity="0.45" />
        <rect x="1467" y="20" width="12" height="80" rx="3" fill="#FFE08A" opacity="0.5" />
        <rect x="1484" y="42" width="12" height="58" rx="3" fill="#FFD966" opacity="0.55" />

        {/* ================= LEFT GROUP: Leafy Plant, 2 Stacks of Books, Calculator ================= */}

        {/* Leafy Plant (black + yellow leaf) in pot */}
        <g style={{ transformOrigin: "155px 125px" }}>
          <path d="M 148 105 C 135 75 142 45 156 30 C 160 55 158 80 152 105 Z" fill="#121212" />
          <path d="M 152 75 C 130 65 125 50 134 40 C 145 46 150 60 152 75 Z" fill="#F5B400" />
          <path d="M 154 90 C 172 75 180 60 172 50 C 162 55 156 70 154 90 Z" fill="#121212" />
          <path d="M 150 65 C 158 45 170 35 166 25 C 155 28 150 45 150 65 Z" fill="#F5B400" />
          {/* Pot */}
          <polygon points="144,105 164,105 160,122 148,122" fill="#121212" />
        </g>

        {/* Two Stacks of Black Books with Yellow Page Edges */}
        {/* Stack 1 */}
        <g>
          {/* Book 1 (Bottom, black with yellow page edges) */}
          <rect x="175" y="108" width="58" height="11" rx="2" fill="#121212" />
          <line x1="178" y1="113" x2="230" y2="113" stroke="#F5B400" strokeWidth="2" />
          {/* Book 2 (Middle) */}
          <rect x="178" y="97" width="52" height="11" rx="2" fill="#121212" />
          <line x1="181" y1="102" x2="227" y2="102" stroke="#F5B400" strokeWidth="2" />
          {/* Book 3 (Top) */}
          <rect x="182" y="86" width="46" height="11" rx="2" fill="#121212" />
          <line x1="185" y1="91" x2="225" y2="91" stroke="#F5B400" strokeWidth="2" />
        </g>

        {/* Stack 2 (Right of stack 1) */}
        <g transform="rotate(-5 238 95)">
          <rect x="232" y="102" width="44" height="10" rx="2" fill="#121212" />
          <line x1="235" y1="107" x2="273" y2="107" stroke="#F5B400" strokeWidth="2" />
          <rect x="235" y="92" width="40" height="10" rx="2" fill="#121212" />
          <line x1="238" y1="97" x2="272" y2="97" stroke="#F5B400" strokeWidth="2" />
        </g>

        {/* Calculator with Yellow Keys */}
        <g transform="rotate(7 288 95)">
          {/* Body */}
          <rect x="282" y="68" width="36" height="52" rx="5" fill="#121212" />
          {/* Display */}
          <rect x="287" y="74" width="26" height="10" rx="2" fill="#F5B400" />
          {/* Keys Grid with Yellow Accent Keys */}
          <rect x="287" y="88" width="6" height="5" rx="1" fill="#F5B400" />
          <rect x="297" y="88" width="6" height="5" rx="1" fill="#FFFFFF" opacity="0.8" />
          <rect x="307" y="88" width="6" height="5" rx="1" fill="#FFFFFF" opacity="0.8" />
          <rect x="287" y="96" width="6" height="5" rx="1" fill="#FFFFFF" opacity="0.8" />
          <rect x="297" y="96" width="6" height="5" rx="1" fill="#FFFFFF" opacity="0.8" />
          <rect x="307" y="96" width="6" height="5" rx="1" fill="#FFFFFF" opacity="0.8" />
          <rect x="287" y="104" width="6" height="5" rx="1" fill="#FFFFFF" opacity="0.8" />
          <rect x="297" y="104" width="16" height="5" rx="1" fill="#F5B400" />
        </g>

        {/* ================= CENTRE-RIGHT GROUP: Pen Holder with Yellow-Tipped Pencils, Yellow Leaf, Small Book Stack ================= */}

        {/* Pen/Pencil Holder with Yellow-Tipped Pencils */}
        <g transform="translate(940, 65)">
          {/* Pencils protruding */}
          <line x1="10" y1="35" x2="4" y2="8" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
          <polygon points="4,8 7,8 5.5,2" fill="#F5B400" />

          <line x1="18" y1="35" x2="18" y2="4" stroke="#F5B400" strokeWidth="3" strokeLinecap="round" />
          <polygon points="16.5,4 19.5,4 18,-2" fill="#121212" />

          <line x1="26" y1="35" x2="32" y2="10" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
          <polygon points="31,10 33,12 36,6" fill="#F5B400" />

          {/* Holder Cup */}
          <rect x="5" y="28" width="28" height="34" rx="4" fill="#121212" />
          <line x1="8" y1="34" x2="30" y2="34" stroke="#F5B400" strokeWidth="2" />
        </g>

        {/* Centre-Right Yellow Leaf */}
        <g style={{ transformOrigin: "990px 125px" }}>
          <path d="M 985 105 C 970 80 978 50 994 38 C 998 62 995 86 988 105 Z" fill="#F5B400" />
          <path d="M 990 85 C 1005 72 1012 60 1008 50 C 998 55 992 68 990 85 Z" fill="#121212" />
        </g>

        {/* Small Book Stack with Yellow Page Edges */}
        <rect x="1010" y="102" width="46" height="10" rx="2" fill="#121212" />
        <line x1="1014" y1="107" x2="1052" y2="107" stroke="#F5B400" strokeWidth="1.8" />
        <rect x="1014" y="91" width="38" height="9" rx="2" fill="#F5B400" />

        {/* ================= RIGHT GROUP: Black Graduation Cap on a Book, 2 Large Black/Yellow Leaves ================= */}

        {/* Book under graduation cap */}
        <rect x="1310" y="96" width="75" height="13" rx="2" fill="#121212" />
        <line x1="1314" y1="102" x2="1380" y2="102" stroke="#F5B400" strokeWidth="2" />
        <rect x="1318" y="82" width="62" height="12" rx="2" fill="#121212" />
        <line x1="1322" y1="88" x2="1376" y2="88" stroke="#F5B400" strokeWidth="2" />

        {/* Black Graduation Cap */}
        <g transform="translate(1330, 48)">
          {/* Diamond Cap */}
          <polygon points="30,0 60,11 30,22 0,11" fill="#121212" />
          {/* Skull cap base */}
          <path d="M 15 17 Q 30 26 45 17 L 45 25 Q 30 33 15 25 Z" fill="#121212" />
          {/* Tassel Button + String */}
          <circle cx="30" cy="11" r="2.5" fill="#F5B400" />
          <path d="M 30 11 Q 48 16 52 28" stroke="#F5B400" strokeWidth="1.8" fill="none" />
          {/* Tassel fringe */}
          <polygon points="50,28 54,28 52,38" fill="#F5B400" />
        </g>

        {/* Two Large Black/Yellow Leaves */}
        <g style={{ transformOrigin: "1410px 130px" }}>
          <path d="M 1400 108 C 1385 70 1395 35 1416 18 C 1422 48 1418 80 1406 108 Z" fill="#121212" />
          <path d="M 1408 78 C 1428 60 1438 45 1432 35 C 1420 42 1412 58 1408 78 Z" fill="#F5B400" />
          <path d="M 1402 92 C 1380 80 1370 65 1378 52 C 1390 60 1398 75 1402 92 Z" fill="#F5B400" />
        </g>

        {/* ================= MAIN BLACK FOOTER WAVE ================= */}
        {/* Filled Wave Body in #121212 */}
        <path d={FOOTER_WAVE_FILL_PATH} fill="#121212" />

        {/* 4u Yellow Wave Outline Along the Wave */}
        <path
          d={FOOTER_WAVE_STROKE_PATH}
          stroke="#F5B400"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
