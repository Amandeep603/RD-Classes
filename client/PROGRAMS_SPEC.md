# Section Programs Specification (Canvas 1600x764)

Measured bounding boxes, typography, colors, and coordinates extracted directly from `reference/section-programs-1600.png`.

## 1. Canvas & Section Container
- **Canvas Size**: 1600 x 764 px
- **Section Background**: `#FDFAF3` (Cream)
- **Content Width**: 1481 px (x=62 to x=1543, centered in 1600 canvas)
- **Top Padding**: ~46 px
- **Bottom Padding**: ~110 px
- **Side Padding**: 62 px (at 1600px width: `calc(var(--u) * 62)`)
- **Transition from Hero**: Smooth transition from dark hero to cream `#FDFAF3` section via subtle curve or 24px gradient.

## 2. Header & Typography
- **Pill Label ("COURSE CATEGORIES")**:
  - Position: centered, x=690..910, y=46..82 (~220px wide, ~36px tall)
  - Background: `#FFF4D1`
  - Border: 1px solid `#F2E3B0`
  - Border Radius: 9999px (fully rounded pill)
  - Font Size: 15px, font-weight 700, letter-spacing 0.12em, color `#1B1B1B`
- **H1 Headline ("Explore Popular Programs")**:
  - Position: centered, y~118..176, height ~58px
  - Font Size: 58px, weight 800, line-height 1.1, color `#0B0B0B`
  - **Highlighter Block under "Programs"**:
    - Placed behind lower ~55% of "Programs"
    - Width: ~296px, height: ~34px, square-edged
    - Gradient: `linear-gradient(90deg, #FFD54A 0%, #FF9F1C 100%)`
    - Animation: left-to-right fill on first view (respects prefers-reduced-motion)
- **Subtitle Paragraph**:
  - Position: centered, y~203..226, ~23px font size (floor 16px)
  - Text: "Choose the right learning format for your CBSE Accountancy goals in Class 11 & 12."
  - Color: `#55565B`, weight 400, line-height 1.4

## 3. Cards Geometry & Tokens (5 Cards)
- **Layout**: 5 equal columns in row, width ~276px each, height ~342px, gap ~25px
- **Border Radius**: 20px
- **Border**: 1px solid
- **Padding**: 30px
- **Inside Card Elements**:
  - **Icon Circle**: 64px diameter at top-left, centered lucide-react icon with stroke 2px (white)
  - **Number ("01".."05")**: 20px, font-weight 700, at top-right
  - **Accent Line**: 20px wide x 2px tall, below icon circle (margin-top ~16px)
  - **Eyebrow**: Uppercase 14px, tracking 0.15em, weight 700, margin-top ~14px
  - **Title**: 27px, weight 700, tracking tight, margin-top ~6px
  - **Description**: 18px, line-height 1.5, color `#6B6B6B` (on dark card `#C9D8E2`), margin-top ~8px
  - **Footer Row**:
    - "Explore Course", 17px, weight 600
    - Circular Arrow Button: 46px diameter, centered ArrowRight icon
- **Card Color Themes**:
  1. **01 Full Year Batch** (Class 12 Board):
     - bg `#DDF0FA`, border `#BFE3F5`, iconBg `#1E9BD7`, num `#1E9BD7`, arrowBg `#BFE3F5` (dark arrow `#0B2F45`, hover bg `#1E9BD7` white arrow)
  2. **02 Foundation Batch** (Class 11 Foundation):
     - bg `#FFFFFF`, border `#EEEAE0`, iconBg `#1AA6C8`, num `#1AA6C8`, arrowBg `#D6EEF7` (dark arrow `#0B2F45`, hover bg `#1AA6C8` white arrow)
  3. **03 Fast Track** (Crash Course):
     - bg deep navy `#0B2F45` (elevated, stronger shadow), border `rgba(255,255,255,0.12)`, iconBg `#1F4A63`, num `#2BA7E0`, eyebrow `#FFFFFF`, title `#FFFFFF`, desc `#C9D8E2`, arrowBg `#1E9BD7` (white arrow)
  4. **04 Self-Paced Access** (Online Video Portal):
     - bg gradient `#FFF3CC` to `#FFF9E6`, border `#F6E3A6`, iconBg `#FFB800`, num `#F2A900`, arrowBg `#FFB800` (dark arrow)
  5. **05 Board Pattern** (Mock Test Series):
     - bg gradient `#FFE3CF` to `#FFF1E7`, border `#F8D3BC`, iconBg `#FF7A00`, num `#FF7A00`, arrowBg `#FF7A00` (white arrow)

## 4. Terms Row
- **Divider Line Above**: y~646, 1px solid `#E8E2D3`, full 1481px content width
- **Terms**: 7 uppercase terms separated by 1px vertical dividers `#E8E2D3`:
  1. PARTNERSHIP ACCOUNTS
  2. GOODWILL VALUATION
  3. JOURNAL & LEDGER
  4. CASH FLOW STATEMENTS
  5. COMPANY ACCOUNTS & SHARES
  6. ACCOUNTING RATIOS
  7. TRIAL BALANCE
- Typography: 14px, letter-spacing 0.08em, color `#6B6B6B`, font-semibold
- Clickable link: `/courses?topic=<slug>`

## 5. Responsive Behavior
- **>= 1100px**: 5 columns, `--u: min(100vw / 1600, 100svh / 900)` for paddings and typography, cards grid 5 equal columns gap 25u.
- **1024 - 1099px**: 5 columns, smaller paddings, no overflow.
- **768 - 1023px**: 3 + 2 grid (last row centered), gap 20px.
- **< 768px**: Cards swipe carousel with scroll-snap (card width 78vw, max 320px, 16px gap, first card aligned with 16px padding, 5 indicator dots below); terms row becomes slow auto-scrolling marquee (pauses on touch).
