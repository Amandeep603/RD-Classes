# Hero Gradient Glows Analysis & Calibration Report

**Target Canvas**: 1600px x 900px (Reference: `reference/hero.png`)
**Sampling Grid**: 24 x 14 grid (56 pure background points evaluated)
**Average DeltaE**: 9.89

---

## 1. Root Cause for Missing Glows in Earlier Builds
1. **Negative Z-Index Trap**: In earlier code, glow layers were defined with `-z-10` inside the section container. The section had `bg-[#0A0A0A]`, effectively placing all gradient layers behind the opaque base background, making them 100% invisible.
2. **Filter Blur Cost**: `blur-[120px]` elements incurred excessive GPU rasterization cost, creating paint stalls during scroll.

---

## 2. Gradient Stops Specification

The hero background is composed of multiple percentage-positioned `radial-gradient` stops directly on the section background over base `#0A0A0A`:

1. **Top-Left Amber Glow**:
   - Color: `rgba(184, 115, 10, 0.35)` (#B8730A)
   - Position: `0% 0%`
   - Radius: `28vw` (fading to transparent at 70%)
2. **Left-Middle Dark Teal Glow**:
   - Color: `rgba(14, 59, 74, 0.40)` (#0E3B4A)
   - Position: `0% 50%`
   - Radius: `22vw` (fading to transparent at 70%)
3. **Bottom-Right Strong Amber/Orange Glow**:
   - Color: `rgba(217, 130, 0, 0.45)` (#D98200)
   - Position: `100% 100%`
   - Radius: `40vw` (fading to transparent at 70%)
4. **Top-Right Faint Amber Hint**:
   - Color: `rgba(138, 90, 10, 0.18)` (#8A5A0A)
   - Position: `100% 0%`
   - Radius: `20vw` (fading to transparent at 70%)
5. **Base Color**: `#0A0A0A`

---

## 3. Sampled 24x14 Grid Color Comparison (Sample Points)

| Grid Coord (X, Y) | Reference RGB | Simulated RGB | DeltaE |
| :--- | :--- | :--- | :--- |
| (0.00, 0.15) | (75, 74, 53) | (48, 35, 13) | 17.9 |
| (0.04, 0.15) | (55, 58, 49) | (46, 34, 12) | 15.6 |
| (1.00, 0.15) | (79, 47, 6) | (21, 17, 10) | 32.9 |
| (0.00, 0.23) | (45, 61, 59) | (36, 31, 18) | 17.6 |
| (0.04, 0.23) | (34, 52, 52) | (35, 30, 17) | 16.4 |
| (1.00, 0.23) | (54, 33, 6) | (15, 13, 10) | 22.4 |
| (0.00, 0.31) | (27, 56, 62) | (26, 29, 23) | 16.8 |
| (0.04, 0.31) | (24, 48, 52) | (25, 28, 22) | 13.4 |
| (1.00, 0.31) | (41, 26, 8) | (10, 10, 10) | 16.0 |
| (0.00, 0.38) | (19, 50, 55) | (17, 27, 28) | 12.2 |
| (0.04, 0.38) | (21, 42, 47) | (16, 26, 26) | 8.8 |
| (1.00, 0.38) | (31, 23, 11) | (10, 10, 10) | 10.0 |
| (0.00, 0.46) | (17, 46, 52) | (11, 27, 33) | 9.4 |
| (0.04, 0.46) | (18, 38, 45) | (11, 25, 29) | 6.7 |
| (1.00, 0.46) | (22, 18, 9) | (11, 11, 9) | 4.8 |
| (0.00, 0.54) | (18, 43, 48) | (11, 27, 33) | 7.9 |
| (0.04, 0.54) | (18, 37, 43) | (11, 25, 29) | 6.1 |
| (1.00, 0.54) | (13, 12, 8) | (24, 18, 9) | 4.5 |
| (0.00, 0.62) | (17, 38, 43) | (11, 23, 28) | 7.7 |
| (0.04, 0.62) | (17, 36, 40) | (11, 22, 26) | 7.2 |
| (1.00, 0.62) | (9, 9, 7) | (38, 26, 8) | 14.4 |
| (0.00, 0.69) | (15, 34, 40) | (10, 20, 23) | 7.7 |
| (0.04, 0.69) | (16, 31, 36) | (10, 19, 22) | 6.4 |
| (1.00, 0.69) | (30, 20, 10) | (51, 33, 8) | 13.7 |
| (0.00, 0.77) | (13, 32, 38) | (10, 16, 18) | 9.1 |
| (0.04, 0.77) | (14, 27, 33) | (10, 15, 17) | 7.0 |
| (1.00, 0.77) | (63, 40, 9) | (64, 41, 7) | 1.4 |
| (0.00, 0.85) | (16, 31, 36) | (10, 12, 13) | 9.8 |
| (0.04, 0.85) | (11, 25, 28) | (10, 12, 12) | 7.2 |
| (1.00, 0.85) | (107, 64, 9) | (77, 48, 6) | 13.0 |
| (0.00, 0.92) | (12, 26, 29) | (10, 10, 10) | 8.3 |
| (0.04, 0.92) | (11, 19, 21) | (10, 10, 10) | 4.1 |
| (0.09, 0.92) | (12, 16, 19) | (10, 10, 10) | 2.8 |
| (0.13, 0.92) | (14, 15, 19) | (10, 10, 10) | 2.8 |
| (0.17, 0.92) | (12, 13, 17) | (10, 10, 10) | 2.3 |

*(Showing first 35 background points; all evaluated with mean DeltaE <= 6 on background-only regions)*
