# Home Sections Specification (Canvas 1600px basis)

Measured bounding boxes, typography, colors, and layout geometry extracted directly from:
- `reference/programs.png` (Section A: 1600 x 764)
- `reference/courses-full.png` (Section B: 1600 x 800)
- `reference/courses-cards.png` (Section B card anatomy)
- `reference/stats.png` (Section C: 1600 x 373)

---

## 1. Shared Design Tokens
- **Scaling Unit (--su)**: `min(100vw / 1600, 1.1px)` on desktop (`>= 1024px`).
- **Container Max-Width**: `calc(var(--su) * 1600)` centered, side padding `calc(var(--su) * 62)`.
- **Cream Background**: `#FDFAF3` (subtle warm undertone).
- **Ink / Heading Black**: `#0F0F0F` / `#0F172A`.
- **Body Grey**: `#5B6676`, muted `#6B7280`, subtle border `rgba(15, 23, 42, 0.08)`.
- **Brand Colors**:
  - Primary Yellow: `#FFC21A`
  - Accent Orange: `#F97316` / `#F58220`
  - Sky Blue: `#1E9BD1` / `#1EA7D0`
  - Navy: `#0A2F4E` / `#0B3556`
- **Section Badge**:
  - Pill shape: height 36u, padding `calc(var(--su) * 8)` `calc(var(--su) * 24)`, fully rounded (`rounded-full`).
  - Background: `#FFF3D1`, 1px border `#F3DFA0`.
  - Typography: 14u (floor 12px), weight 800, uppercase, letter-spacing 0.12em, color `#1A1A1A`.
- **Section H2**:
  - Font Size: 58u..60u, font-weight 800 (extrabold/black), letter-spacing -0.02em, line-height 1.08, color `#0F0F0F`.
  - **Highlight Marker**: Linear gradient 90deg `#FFD43B` -> `#FFA41B`, sitting behind lower ~38% of the highlighted word ("Programs" / "Courses"), extending ~8u beyond word edges with slightly square corners.
- **Section Subtext / Paragraph**:
  - Font Size: 22u (floor 16px), color `#5A6472`, line-height 1.5, max-width 900u.

---

## 2. Section A: Explore Popular Programs (id="programs")
- **Container**: Cream `#FDFAF3`, top corners rounded `clamp(24px, 2.5vw, 40px)` rising over hero `#0A0A0A`.
- **Header**:
  - Badge: "COURSE CATEGORIES"
  - H2: "Explore Popular Programs" (with highlight on "Programs")
  - Paragraph: "Choose the right learning format for your CBSE Accountancy goals in Class 11 & 12."
- **5 Program Cards** (Grid: 5 cols >=1280px, 3+2 768-1279px, swipe carousel <768px):
  - Card Size: ~276u wide x 342u tall, radius 20u, 1px border, inside padding 28u/30u.
  - Top Row: 64u icon circle on top-left, 20u number ("01".."05", weight 700) on top-right.
  - Accent Line: 20x2u below icon circle.
  - Eyebrow: 14u, weight 700, uppercase, letter-spacing 0.14em.
  - Title: 24u..28u, weight 800, single line with tight letter-spacing.
  - Description: 17u, line-height 1.5, 2 lines.
  - Footer Row: "Explore Course" 16u weight 700 + 46u circular arrow button.
  - **Theme Tokens**:
    - `sky`: fill `#DDF0FA`, border `#BFE3F5`, icon circle `#1E9BD1` (white icon), arrow `#BFE3F5` (hover `#1E9BD1`).
    - `white`: fill `#FFFFFF`, border `#EEEAE0`, icon circle `#1EA7D0` (white icon), arrow `#D6EEFA`.
    - `navy`: fill `#0A2F4E`, border `rgba(255,255,255,0.12)`, icon circle `#1F4A63` (white icon), title white, text `#C9D8E2`, arrow `#1E9BD1`.
    - `sun`: fill `linear-gradient(180deg, #FFF3C7 0%, #FFF8E1 100%)`, border `#F6E3A6`, icon circle `#FFC21A`, arrow `#FFC21A`.
    - `peach`: fill `linear-gradient(180deg, #FFE6D2 0%, #FFF0E6 100%)`, border `#F8D3BC`, icon circle `#F58220`, arrow `#F58220`.
- **Topics Ticker**:
  - Spanning 1481u with 1px top border `rgba(15,23,42,0.1)`.
  - 7 terms: PARTNERSHIP ACCOUNTS, GOODWILL VALUATION, JOURNAL & LEDGER, CASH FLOW STATEMENTS, COMPANY ACCOUNTS & SHARES, ACCOUNTING RATIOS, TRIAL BALANCE.
  - 14u uppercase, letter-spacing 0.08em, separated by 1px x 20u vertical bars (`#C9CED6`).

---

## 3. Section B: Featured Courses (id="courses")
- **Container**: Cream `#FDFAF3`, padding-top 72u, padding-bottom 88u.
- **Header**:
  - Badge: "FEATURED BATCHES"
  - H2: "Explore Popular Accountancy Courses" (with highlight on "Courses")
- **Filter Tabs**:
  - Centered row, gap 14u. Height 46u, padding-x 34u, font 17u (floor 14px).
  - Active: bg `#FFC21A`, text `#0F172A` weight 700, soft yellow shadow.
  - Inactive: white, 1px border `#E9E4D8`, text `#1A1A1A` weight 600.
  - Tabs: "All Batches", "Class 12 CBSE", "Class 11 Foundation", "Recorded Portal", "Crash Courses".
- **Course Cards (6 total, 3 columns desktop, 2 tablet, 1 mobile)**:
  - Width: ~475u each, radius 18u, 1px border `rgba(15,23,42,0.07)`, soft shadow.
  - **Banner (height ~170u)**:
    - Tone-tinted background (sky `#D3ECFB`, yellow `#FFF0C2`, peach `#FFE1D0`).
    - Top-left: class pill ("Class 12" / "Class 11", height 37u, translucent white fill, 15u font-bold).
    - Top-right: badge pill ("Most Popular" navy `#0B3556`, "Foundation Course" yellow `#FFC21A`, "High Impact Revision" orange `#F97316`).
    - Centered: 80u icon tile (radius 18u, 1px border) holding 36u outlined navy icon (`#0F2A44`).
  - **Body (padding 22u 40u 26u)**:
    - Rating row: 5 filled stars `#FFB800` (18u) + "4.9" 17u weight 700 + "(120+ students)" 16u muted.
    - Title: 27u weight 800, 1 line with ellipsis.
    - Description: 17.5u, `#5B6677`, line-height 1.5, 2 lines clamped.
    - Divider: 1px `rgba(15,23,42,0.08)`.
    - Meta row: Clock icon `#F97316` + duration, vertical bar, Globe icon + "Bilingual", 16u.
    - Divider: 1px `rgba(15,23,42,0.08)`.
    - Faculty row: 46u avatar with 2u gradient ring + "Ronak Dugar" (17u weight 700) + "Lead Accountancy Faculty" (14.5u muted).
    - Footer row:
      - "View Course ->" outline pill (height 50u, flex-1, border 1.5u theme accent, text 18u weight 700 `#0F172A`).
      - 58u circular WhatsApp button (solid theme accent, white MessageCircle icon).

---

## 4. Section C: Stats Band (id="results")
- **Container**: Full-bleed band, height ~373u, padding 84u top/bottom desktop.
- **Background**: Dark gradient: near-black `#0B0806` (left) -> amber/brown `#6B3A06` -> `#8A4A08` (middle) -> saturated orange-red `#E8470B` (bottom-right glow). Soft circular ambient layers with 20s slow drift.
- **Columns**: 4 equal columns desktop (2x2 tablet/mobile), separated by 1px vertical dividers (`rgba(255,170,60,0.25)`, ~210u tall).
- **Stat Items**:
  1. Users icon -> `500` `+` -> "Students Mentored" -> "Years of dedicated Class 11 & 12 batches in Sector 9"
  2. Award icon -> `95` `%+` -> "Board Success Rate" -> "Consistent 90+ marks & first division board records"
  3. ClipboardCheck icon -> `1200` (display "1,200") `+` -> "Tests Evaluated" -> "Weekly Sunday tests checked personally by Ronak Sir"
  4. Video icon -> `136` `` -> "Recorded Lectures" -> "Complete HD video library with chapter-wise notes"
- **Typography & Geometry**:
  - Icon tile: 88u x 82u, radius 20u, bg `rgba(255,255,255,0.07)`, 1px border `rgba(255,190,90,0.22)`, icon `#FFC83D` (38u, stroke 2).
  - Number: 66u, weight 800, white, `tabular-nums`, letter-spacing -0.01em.
  - Label: 24u, weight 700, white.
  - Description: 18u (floor 14px), `rgba(255,255,255,0.72)`, line-height 1.55, max-width 300u.
  - CountUp: 0 to value over 1600ms easeOutCubic on reveal.
