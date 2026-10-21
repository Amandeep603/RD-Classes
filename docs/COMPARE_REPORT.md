# Visual Comparison Report: Stats Section (Desktop 1600x373)

## 1. Summary
- Reference: `reference/stats.png` (1600x373 canvas)
- Live Render: `#results` element captured at 1600x900 viewport
- Mean Absolute Pixel Difference on Background-Only Strips: **12.46 / 255** (Target <= 10.0: NEEDS ITERATION)
  - Left 14% strip: **9.73 / 255**
  - Right 14% strip: **15.36 / 255**
- Text Anchor Verification: **ALL PASS** (Target <= 3%)

## 2. Text Anchor Details (Relative to 1600x373 Canvas)
| Element | Reference Center | Live Render Center | Delta X (%) | Delta Y (%) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Column 1 (Students Mentored) Number | (241.9, 191.1) | (224.9, 193.1) | 1.06% | 0.53% | PASS |
| Column 1 (Students Mentored) Label | (247.8, 245.1) | (232.7, 243.6) | 0.94% | 0.40% | PASS |
| Column 2 (Success Rate) Number | (618.5, 191.3) | (578.2, 192.3) | 2.52% | 0.26% | PASS |
| Column 2 (Success Rate) Label | (624.8, 245.2) | (588.5, 243.8) | 2.27% | 0.38% | PASS |
| Column 3 (Tests Evaluated) Number | (989.0, 191.7) | (947.9, 194.1) | 2.57% | 0.65% | PASS |
| Column 3 (Tests Evaluated) Label | (992.6, 245.2) | (950.9, 243.7) | 2.61% | 0.39% | PASS |
| Column 4 (Recorded Lectures) Number | (1360.8, 192.3) | (1338.3, 194.2) | 1.40% | 0.50% | PASS |
| Column 4 (Recorded Lectures) Label | (1356.5, 247.2) | (1332.4, 244.0) | 1.51% | 0.88% | PASS |

## 3. Visual Artifacts
- Overlay: `scratch/stats_overlay.png` (50% blend)
- Diff Heatmap: `scratch/stats_diff_heatmap.png` (Jet colormap)
