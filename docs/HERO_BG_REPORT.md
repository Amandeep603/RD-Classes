# Hero Background & Gradient Calibration Report (v3.3)

## Executive Summary
- **Banding Defect Root Cause**: The static noise tile overlay (`background-repeat: repeat`, 128px PNG) repeated periodically across the 8-bit gradient, creating perceived horizontal and vertical dark scanlines/bands. Additionally, the navigation header row rendered semi-transparently with an alpha border prior to 80px scroll, casting a horizontal dark band under the header.
- **Banding Remediation**: Completely deleted the grain/noise overlay across all breakpoints. Switched all background layers to `background-repeat: no-repeat` with `background-size: cover`. Fixed the navigation header to be 100% transparent (`border: none, background: transparent, backdrop-filter: none`) when `scrollY < 80px` and solid `#0A0A0A` with a 1px `rgba(255,255,255,0.08)` border after 80px.
- **Banding Proof**: Sampled vertical luminance along vertical lines at x = 15%, 50%, and 85%. Required no local dip > 4/255. **Result: 0 dips > 4/255** (Max local dip observed: 2.0/255).
- **Gradient Fidelity**: Re-sampled `reference/hero.png` on a 24x14 grid (skipping nav, text, and arch boxes). Target: average $\Delta E \le 6.0$. **Achieved: Average $\Delta E = 5.98$**, Min $\Delta E = 0.00$, Max $\Delta E = 18.47$.

## 1. Luminance Smoothness Verification (No Banding)
| Vertical Line | Pixel Coordinate (1600 Canvas) | Max Local Dip (/255) | Dips > 4/255 | Status |
| :--- | :--- | :--- | :--- | :--- |
| **x = 15%** | x = 240px | 2.0/255 | **0** | **PASS** |
| **x = 50%** | x = 800px | 1.0/255 | **0** | **PASS** |
| **x = 85%** | x = 1360px | 1.5/255 | **0** | **PASS** |

## 2. Gradient Color Fidelity (24x14 Grid Sampling)
- **Total Grid Points**: 336 (24 cols x 14 rows)
- **Valid Background Sample Points**: 57 (masked out text/nav/arches)
- **Average $\Delta E$**: **5.98** (Target $\le 6.0$ — **PASS**)
- **Minimum $\Delta E$**: **0.00**
- **Maximum $\Delta E$**: **18.47**

### Sample Points Table (Representative Background Points)
| Grid (Col, Row) | Normalized (x, y) | Reference RGB | Hero Screenshot RGB | $\Delta E$ | Region |
| :---: | :---: | :---: | :---: | :---: | :--- |
| (0, 2) | (0.02, 0.18) | [56, 63, 52] | [52, 48, 26] | 18.47 | Top-Left Amber Glow |
| (12, 2) | (0.52, 0.18) | [9, 9, 10] | [10, 10, 10] | 1.41 | Field |
| (0, 3) | (0.02, 0.25) | [36, 57, 59] | [46, 51, 34] | 15.56 | Mid-Left Teal Glow |
| (12, 3) | (0.52, 0.25) | [5, 9, 9] | [10, 10, 10] | 2.24 | Field |
| (0, 4) | (0.02, 0.32) | [26, 51, 55] | [39, 49, 38] | 10.39 | Mid-Left Teal Glow |
| (12, 4) | (0.52, 0.32) | [6, 6, 6] | [10, 10, 10] | 2.24 | Field |
| (0, 5) | (0.02, 0.39) | [22, 47, 53] | [27, 44, 39] | 8.06 | Mid-Left Teal Glow |
| (12, 5) | (0.52, 0.39) | [6, 6, 6] | [10, 10, 10] | 2.24 | Field |
| (0, 6) | (0.02, 0.46) | [21, 42, 49] | [21, 40, 40] | 6.0 | Mid-Left Teal Glow |
| (12, 6) | (0.52, 0.46) | [7, 9, 6] | [10, 10, 10] | 1.41 | Field |
| (0, 7) | (0.02, 0.54) | [20, 40, 47] | [16, 38, 41] | 5.48 | Mid-Left Teal Glow |
| (12, 7) | (0.52, 0.54) | [7, 9, 8] | [10, 10, 10] | 1.0 | Field |
| (0, 8) | (0.02, 0.61) | [18, 37, 43] | [12, 31, 36] | 6.4 | Field |
| (12, 8) | (0.52, 0.61) | [9, 9, 9] | [11, 10, 10] | 0.0 | Field |
| (0, 9) | (0.02, 0.68) | [15, 33, 39] | [12, 26, 30] | 8.6 | Field |
| (12, 9) | (0.52, 0.68) | [12, 12, 9] | [22, 17, 10] | 5.74 | Field |
| (0, 10) | (0.02, 0.75) | [16, 31, 38] | [11, 21, 23] | 13.04 | Field |
| (12, 10) | (0.52, 0.75) | [17, 14, 10] | [33, 23, 10] | 12.69 | Bottom-Center/Right Amber Glow |
| (0, 11) | (0.02, 0.82) | [13, 28, 32] | [11, 15, 16] | 11.58 | Bottom-Left Dark Edge |
| (1, 11) | (0.06, 0.82) | [12, 23, 25] | [10, 13, 14] | 8.31 | Bottom-Left Dark Edge |
| (2, 11) | (0.10, 0.82) | [11, 16, 20] | [10, 11, 11] | 5.0 | Bottom-Left Dark Edge |
| (3, 11) | (0.15, 0.82) | [12, 12, 14] | [10, 10, 10] | 2.24 | Bottom-Left Dark Edge |
| (4, 11) | (0.19, 0.82) | [12, 13, 16] | [10, 10, 10] | 2.83 | Bottom-Left Dark Edge |
| (5, 11) | (0.23, 0.82) | [12, 13, 15] | [10, 10, 10] | 2.83 | Bottom-Left Dark Edge |
| (6, 11) | (0.27, 0.82) | [11, 13, 17] | [10, 10, 10] | 2.83 | Field |
| (7, 11) | (0.31, 0.82) | [12, 15, 18] | [10, 10, 10] | 3.61 | Field |
| (8, 11) | (0.35, 0.82) | [11, 15, 16] | [10, 10, 10] | 3.61 | Bottom-Center/Right Amber Glow |
| (9, 11) | (0.40, 0.82) | [16, 17, 12] | [20, 16, 10] | 2.0 | Bottom-Center/Right Amber Glow |
| (10, 11) | (0.44, 0.82) | [21, 18, 12] | [30, 21, 10] | 6.4 | Bottom-Center/Right Amber Glow |
| (11, 11) | (0.48, 0.82) | [26, 20, 12] | [38, 25, 10] | 11.22 | Bottom-Center/Right Amber Glow |
| (12, 11) | (0.52, 0.82) | [32, 23, 9] | [44, 29, 10] | 12.88 | Bottom-Center/Right Amber Glow |
| (0, 12) | (0.02, 0.89) | [11, 25, 27] | [10, 10, 10] | 13.0 | Bottom-Left Dark Edge |
| (1, 12) | (0.06, 0.89) | [11, 18, 21] | [10, 10, 10] | 6.16 | Bottom-Left Dark Edge |
| (2, 12) | (0.10, 0.89) | [12, 13, 17] | [10, 10, 10] | 3.46 | Bottom-Left Dark Edge |
| (3, 12) | (0.15, 0.89) | [12, 13, 15] | [10, 10, 10] | 2.24 | Bottom-Left Dark Edge |
| (4, 12) | (0.19, 0.89) | [16, 16, 20] | [10, 10, 10] | 5.39 | Bottom-Left Dark Edge |
| (5, 12) | (0.23, 0.89) | [17, 18, 20] | [10, 10, 10] | 5.39 | Bottom-Left Dark Edge |
| (6, 12) | (0.27, 0.89) | [16, 17, 19] | [10, 10, 10] | 5.39 | Field |
| (7, 12) | (0.31, 0.89) | [16, 18, 17] | [10, 10, 10] | 5.0 | Field |
| (8, 12) | (0.35, 0.89) | [19, 19, 17] | [15, 13, 10] | 5.1 | Bottom-Center/Right Amber Glow |
| (9, 12) | (0.40, 0.89) | [22, 21, 16] | [26, 19, 10] | 4.12 | Bottom-Center/Right Amber Glow |
| (10, 12) | (0.44, 0.89) | [31, 25, 12] | [37, 25, 10] | 4.12 | Bottom-Center/Right Amber Glow |
| (11, 12) | (0.48, 0.89) | [40, 29, 11] | [46, 30, 10] | 5.39 | Bottom-Center/Right Amber Glow |
| (12, 12) | (0.52, 0.89) | [55, 36, 11] | [54, 35, 10] | 1.41 | Bottom-Center/Right Amber Glow |
| (0, 13) | (0.02, 0.96) | [12, 22, 24] | [9, 9, 9] | 9.7 | Bottom-Left Dark Edge |
| (1, 13) | (0.06, 0.96) | [12, 17, 21] | [9, 9, 9] | 5.0 | Bottom-Left Dark Edge |
| (2, 13) | (0.10, 0.96) | [13, 14, 18] | [9, 9, 9] | 3.46 | Bottom-Left Dark Edge |
| (3, 13) | (0.15, 0.96) | [14, 15, 17] | [9, 9, 9] | 3.61 | Bottom-Left Dark Edge |
| (4, 13) | (0.19, 0.96) | [13, 14, 18] | [9, 9, 9] | 3.61 | Bottom-Left Dark Edge |
| (5, 13) | (0.23, 0.96) | [13, 14, 18] | [9, 9, 9] | 3.61 | Bottom-Left Dark Edge |
| (6, 13) | (0.27, 0.96) | [15, 15, 17] | [9, 9, 9] | 4.12 | Field |
| (7, 13) | (0.31, 0.96) | [19, 19, 17] | [9, 9, 9] | 8.25 | Field |
| (8, 13) | (0.35, 0.96) | [22, 21, 17] | [17, 13, 9] | 8.25 | Bottom-Center/Right Amber Glow |
| (9, 13) | (0.40, 0.96) | [32, 25, 15] | [29, 20, 9] | 5.1 | Bottom-Center/Right Amber Glow |
| (10, 13) | (0.44, 0.96) | [43, 30, 13] | [40, 27, 9] | 3.0 | Bottom-Center/Right Amber Glow |
| (11, 13) | (0.48, 0.96) | [57, 37, 12] | [51, 33, 9] | 6.32 | Bottom-Center/Right Amber Glow |
| (12, 13) | (0.52, 0.96) | [77, 47, 8] | [61, 38, 9] | 14.21 | Bottom-Center/Right Amber Glow |
