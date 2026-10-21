# PROGRAMS_SPEC.md (Canvas 1600x900 basis)

Measured bounding boxes, typography, geometry, and color tokens extracted directly from `reference/programs-reference.png` (scaled 1024 -> 1600 canvas by factor 1.5625).

## 1. Section Container & Background
- **Section Top Rounded Corners**: `border-top-left-radius` & `border-top-right-radius`: clamp(24px, 2.5vw, 40px)
- **Section Background**: Vertical linear gradient from `#F7FBFF` (top) to `#EAF4FC` (bottom)
- **Decorative Ambient Circles**: 2 faint pale-blue radial circles at top-right, `rgba(120, 190, 235, 0.12)`, pointer-events-none
- **Padding Top**: 96u (floor 64px on mobile)
- **Padding Bottom**: 88u (floor 56px on mobile)
- **Padding Inline**: 65u (edge-to-edge layout matching reference)
- **Scroll Margin Top**: 64px on mobile, clamp(64px, 88u, 96px) on desktop

## 2. Header Block Geometry
- **Header Left Inset**: 27u relative to container (total left offset 92u from screen edge)
- **Eyebrow**:
  - Cyan / Blue Line: width 36u, height 2u, color `#2A7DB5`
  - Text: "COURSE CATEGORIES", font-size 13u (floor 11px), tracking 0.2em, color `#5B6B7F`, uppercase font-semibold
  - Gap line to text: 10u
- **H2 Heading**:
  - Line 1: "Explore Popular" in Navy `#0B1F3A`
  - Line 2: "Programs" in Blue `#0A78AD`
  - Font Size: 64u (floor 32px), weight 800 (extrabold), line-height 1.0, letter-spacing -0.02em
  - Gap eyebrow -> H2: 14u (mobile 12px)
- **Right Column Paragraph & Divider**:
  - Vertical Divider Line: width 2u, height ~56u, color `#C5D3E3`, rounded-full
  - Paragraph: "Choose the right learning format for your CBSE Accountancy goals in Class 11 & 12."
  - Text: font-size 18u (floor 14px), font-light/normal, line-height 1.45, color `#5B6B7F`, max-width 340u
  - Layout: flex row, items-center or align-self end with margin-bottom ~12u
  - Gap divider to paragraph: 18u
- **Gap Header -> Cards**: 56u (mobile 28px)

## 3. Cards Geometry & Anatomy (5 Cards)
- **Card Box**:
  - Width: 285u (at >=1280px: calc((100% - 4 * 16u) / 5))
  - Height: 338u
  - Border Radius: 18u
  - Padding: 28u
  - Row Gap: 16u
- **Card Anatomy**:
  - a) **Top Row**:
    - **Number & Line**: Number "01".."05", font-size 13u, font-bold, color `#5B6B7F` (on navy `#9FB6CC`). Below number: accent line width 24u, height 1.5u.
    - **Icon Tile**: 52u x 52u square, border-radius 14u, icon 22u. Placed ~22u below the number line.
    - **Photo**: Width ~166u, height ~134u, border-radius 12u, `object-fit: cover`, pinned top-right.
  - b) **Category Label**:
    - Uppercase, font-size 12.5u (floor 11px), letter-spacing 0.14em, weight 600, color `#4A5B70` (on navy `#B9CCE0`), margin-top 26u.
  - c) **Title**:
    - Font-size 25u (floor 18px), weight 700 (bold), color `#0B1F3A` (on navy `#FFFFFF`), margin-top 6u.
  - d) **Description**:
    - Font-size 15.5u (floor 13px), line-height 1.45, color `#5B6B7F` (on navy `#C9D8E8`), max 2 lines, margin-top 8u.
  - e) **Footer Row**:
    - "Explore Course", font-size 15u, weight 700, color `#0B1F3A` (on navy `#FFFFFF`).
    - Circular Arrow Button: 44u circle, centered ArrowRight (18u), theme colors.
- **Card Themes**:
  1. **Sky** (Class 12 Board): card `#D7ECFB`, icon tile `#0B1F3A` (white icon), arrow `#0A6E9E` (white arrow).
  2. **Navy** (Class 11 Foundation): card `#0B3558`, text white, icon tile `#CFE8F7` (navy icon), arrow `#CFE8F7` (navy arrow).
  3. **White** (Crash Course): card `#FFFFFF` (1px border `#E5EEF5`, soft shadow), icon tile `#FFF1B8` (dark icon), arrow `#FFF1B8` (dark arrow).
  4. **Sun** (Online Video Portal): card `#FFE9A8`, icon tile `#F57C1F` (white icon), arrow `#F57C1F` (white arrow).
  5. **Peach** (Mock Test Series): card `#FFE2C8`, icon tile `#0A6E9E` (white icon), arrow `#0A6E9E` (white arrow).

## 4. Bottom Controls Row
- **Margin Top**: 40u
- **Prev / Next Buttons**:
  - Prev Button: 48u circle, bg `#FFFFFF`, border 1px `#D5E1EC`, icon `#0B1F3A`
  - Next Button: 48u circle, bg `#0A6E9E`, icon `#FFFFFF`
  - Gap: 12u
- **Progress Track**:
  - Height 1px, background `#CBD8E6`
  - Thumb: height 2px, background `#0A6E9E`, dynamic width & translate
- **View All Courses Button**:
  - Height 52u, border-radius 26u (pill)
  - Background `#0B1F3A`, text `#FFFFFF`, font-size 16u, font-weight 600
  - Padding Inline 28u
  - Arrow icon with hover translate-x-1
