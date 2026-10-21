# Portal Device Showcase Specification (Fix Pass v3.4)

## Canvas Dimensions & Origin
- Reference: `reference/portal.png` (1600x792 canvas)
- Showcase Box Coordinates: `x: 720..1530`, `y: 95..650` (Dimensions: `810 x 555`)
- Aspect Ratio: `810 / 555` (~1.459)
- Desktop ViewBox: `0 0 810 555`
- Mobile/Tablet ViewBox (<1100px): `40 -60 740 615` (Aspect Ratio: `740 / 615` ~1.203)

## Component Coordinates & Hierarchy

### 1. Organic Background Blob
- **Source**: Traced from `portal.png` using HSV thresholding and Bezier approximation.
- **Exported Path**: `src/constants/portalBlob.js`
- **Path**: `M 140 70 C 230 25, 430 15, 590 35 C 690 48, 760 100, 795 180 C 825 250, 795 350, 750 430 C 700 510, 580 545, 460 548 C 340 550, 220 535, 140 495 C 60 455, 25 365, 30 270 C 35 180, 75 105, 140 70 Z`
- **Fill**: `linear-gradient(135deg, var(--surface-f-blob-start, #FFEBB3) 0%, var(--surface-f-blob-end, #FFDF97) 100%)`

### 2. Laptop Mockup
- **Ground Shadow**: Ellipse at `cx=400, cy=514, rx=380, ry=20` with radial gradient `#0F172A` (0.35 -> 0.0, no blur filter).
- **Lid Frame**: Outer rounded rect `x=100, y=90, w=600, h=390, rx=18`, stroke 3u `linear-gradient(180deg, #C9CDD4 0%, #8E949E 100%)`, fill `#0B0C0F`.
- **Bezel**: Black bezel `#0B0C0F`.
- **Screen**: Rect `x=112, y=103, w=576, h=364, rx=8`, fill `#11141A`. Aspect ratio: `576 / 364` (~1.58).
- **Base (Keyboard deck)**:
  - Symmetric silver trapezoid: Top edge `(100, 480)` to `(700, 480)`. Bottom edge `(2, 508)` to `(798, 508)`.
  - Fill: `linear-gradient(180deg, #DDE0E5 0%, #A9AEB6 100%)`.
  - Center opening notch: `x=355, y=480, w=100, h=9, rx=5`, fill `#7E848D`.

### 3. Screen UI Elements
- **Top Bar**:
  - Three window dots at `y=142`: `#FF5F57` (cx=135), `#FEBC2E` (cx=150), `#28C840` (cx=165), radius 4.5.
  - Breadcrumb: "Class 12 > Accounting for Partnership Firms", `x=185, y=146`, font 9.5u, `#CBD5E1`.
  - Quality Pill: "1080p HD" at `x=608, y=134, w=50, h=16, rx=4`, fill `#222834`, text `#F5B400`, font 8u.
  - Fullscreen icon at `x=668, y=138`.
- **Sidebar Panel (`x=116..292, y=168..450`, fill `#171A21`)**:
  - Header: "Lectures (48)", font 10.5u/700 white with chevron.
  - 6 lecture rows (pitch ~35.5u):
    1. `01 Introduction` (32:18) — Highlighted: fill `rgba(255,194,26,0.16)`, stroke `1px #D9A81E`, play icon yellow.
    2. `02 Nature of Partnership` (28:51)
    3. `03 Partnership Deed` (41:20)
    4. `04 Fixed vs Fluctuating...` (36:10)
    5. `05 Profit & Loss...` (47:35)
    6. `06 Appropriation Account` (39:12)
    - Titles: font 9.5u, `#E5E7EB`. Durations: font 8.5u, `#8B93A1` right-aligned.
- **Board Area (`x=302..662, y=168..420`, fill `#0D0F13`)**:
  - Handwritten title: "Partnership Accounts" (`font-family: var(--font-caveat)`, 20u, yellow `#F5B400`, underlined, centered at `x=482, y=200`).
  - Four lecture summary lines (`font-family: var(--font-caveat)`, 13.5u, `#F1F5F9`):
    - `1. Appropriation of Profit -> Partners / As per deed` (`y=230`)
    - `2. Interest on Capital -> As per deed` (`y=255`)
    - `3. Interest on Drawings -> As per deed` (`y=280`)
    - `4. Salary / Commission -> As per deed` (`y=305`)
  - Centered yellow play circle: `cx=482, cy=335, r=27`, dark play triangle. Soft glow ring at 20% opacity pulsing every 3s via CSS animation.
  - Sub-footer line: "Profit & Loss Appropriation Account" (Caveat 11u, yellow, centered at `x=482, y=390`).
- **Video Controls Row (`y=428..452`)**:
  - Play icon at `x=315`.
  - Progress track: `x=335..580, y=438, h=4, rx=2`, bg `#334155`. Filled part (58%): `w=142`, fill `#F5B400`.
  - Timestamp: "24:31 / 35:40", font 8.5u white, `x=590, y=442`.
  - Settings gear icon at `x=650`.

### 4. Phone Mockup (`x=615..805, y=267..553`, 190x286)
- **Body**: Fill `#0A0B0E`, rx=28, metallic edge gradient stroke 4u.
- **Drop Shadows**: Layered low-opacity offset rects (no blur filter).
- **Top Notch**: `x=685, y=277, w=50, h=8, rx=4`, fill `#1E222B`.
- **UI Elements**:
  - Header: "RD Classes" (11.5u/700 white) + menu icon.
  - Live Pill: "Live >" at `x=725, y=298`, yellow text on `#2A2D34`.
  - Inner Card: `x=630..790, y=322..382`, fill `#1A1E25`, rx=10:
    - "Cash Flow Statement" (11.5u/700 white).
    - "Lecture 84 • 18 min left" (8u yellow `#F5B400`).
    - Progress Bar: 40% filled yellow.
  - List Rows:
    - `Notes Downloaded` (green check icon)
    - `Add to Watch Later` (plus icon)
    - `Playback Speed` with `1.5x >` in yellow
  - Divider lines: `#242933`.
  - Home Indicator: `x=680, y=538, w=60, h=3.5, rx=1.75`, fill `#94A3B8`.

### 5. Floating Chips (HTML overlay positioned in % of container)
1. **"PDF Notes"**: `left: 21.4%`, `top: 5.4%`, font-size: `clamp(11px, 1.8cqw, 15px)`.
2. **"Watch at 1x – 2x"**: `left: 72%`, `top: 5.6%`, font-size: `clamp(11px, 1.8cqw, 15px)`.
3. **"Access on All Devices"**: `left: 16.3%`, `top: 85.9%`, font-size: `clamp(11px, 1.8cqw, 15px)`.
- All chips have `white-space: nowrap` and never wrap.
