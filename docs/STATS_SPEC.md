# Section C (Stats Band) Geometric Specification

**Target Canvas**: 1600px x 373px (1u = 1px on desktop)
**Band Height**: Exactly 373u (padding-top: 68u, padding-bottom: 53u)

---

## 1. Background Circles Extraction (Edge Detection & Hough/Algebraic Fit)

Analyzed from eference/stats.png\ on left 14% and right 14% text-free strips:

| Circle Name | Fit Center (cx, cy) in u | Radius (r) / Diameter | Relative % Position | Fill Color & Alpha |
| :--- | :--- | :--- | :--- | :--- |
| **Top-Left Dark Arc** | cx: -120u, cy: -180u | r: 240u (dia: 480u) | left: -7.5%, top: -48% | rgba(0, 0, 0, 0.45), hard edge |
| **Bottom-Left Outer Amber Arc** | cx: 28u, cy: 480u | r: 310u (dia: 620u) | left: -11.5%, bottom: -58% | rgba(75, 45, 12, 0.72) (#4B2D0C) |
| **Bottom-Left Inner Bright Amber Circle** | cx: -90u, cy: 585u | r: 332u (dia: 665u) | left: -16.5%, bottom: -68% | rgba(162, 111, 20, 0.90) (#A26F14) |
| **Upper Right Dark Orange Circle** | cx: 1668u, cy: -116u | r: 308u (dia: 616u) | right: -8.8%, top: -52% | rgba(200, 58, 2, 0.86) (#C83A02) |
| **Lower Right Bright Orange Circle** | cx: 1656u, cy: 507u | r: 298u (dia: 597u) | right: -8.5%, bottom: -64% | rgba(215, 65, 2, 0.92) (#D74102) |

### Underlying Smooth Gradient
- Base linear gradient (90deg):
  \linear-gradient(90deg, #0A0705 0%, #1A0F06 26%, #4A2706 50%, #6E3908 68%, #8F4309 84%, #B8460A 100%)- Bottom-right soft radial orange wash:
  adial-gradient(circle at 100% 100%, rgba(232, 71, 11, 0.45) 0%, transparent 60%)
---

## 2. Vertical Rhythm (Sum = 373u)

- **Band Padding Top**: 68u
- **Icon Tile**: 86u x 82u (radius 20u)
- **Tile -> Number Gap**: 10u
- **Number**: 62u / 800 / line-height 1 / #FFFFFF / tabular-nums
- **Number -> Label Gap**: 8u
- **Label**: 22u / 700 / #FFFFFF / line-height 1.2 (~26u)
- **Label -> Description Gap**: 8u
- **Description**: 17.5u / line-height 1.6 (28u pitch) / 2 lines (~56u) / rgba(255, 255, 255, 0.78)
- **Band Padding Bottom**: 53u
- **Total Height**: 68 + 82 + 10 + 62 + 8 + 26 + 8 + 56 + 53 = 373u

---

## 3. Column Grid Specification

- **Container Bounds**: 75u .. 1525u (padding-inline: 75u across 1600u canvas)
- **CSS Grid Template**: \grid-template-columns: 366fr 365fr 367fr 427fr- **Column Dividers**:
  - Positions at x = 441u, 806u, 1173u
  - Dimensions: 1px width, 210u height, centered vertically
  - Gradient: \linear-gradient(to bottom, transparent, rgba(255, 170, 60, 0.3), transparent)
---

## 4. Tile Glassmorphism & Accent Look

- **Background**: \linear-gradient(145deg, rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.03))- **Border**: px solid rgba(255, 200, 110, 0.22)- **Inner Top Highlight**: \inset 0 1px 0 rgba(255, 255, 255, 0.08)- **Icon**: #FFC83D, stroke 2, 36u x 36u\n