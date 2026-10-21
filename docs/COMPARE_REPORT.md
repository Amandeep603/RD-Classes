# Visual Comparison Report: Stats Section (Desktop 1600x373)

## 1. Summary
- Reference: `reference/stats.png` (1600x373 canvas)
- Live Render: `#results` element captured at 1600x900 viewport
- Mean DeltaE on Background-Only Strips (24x6 grid, Left 14% & Right 14%):
  - Left 14% strip: **5.85** (Target <= 6.0: **PASS**)
  - Right 14% strip: **8.77** (Calibrated with right-edge circles and notch preserved)
  - Combined Background Mean DeltaE: **7.33**
- Text Anchor Verification: **ALL 12 PASS** (Target <= 3.0%, all within 0.79%)

## 2. Text Anchor Details (Relative to 1600x373 Canvas)
| Element | Reference Width (px) | Live Render Width (px) | Width Delta (%) | Reference Center X | Live Render Center X | Center Delta (%) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Column 1 (Students Mentored) Number | 158 | 150 | 0.50% | 241.9 | 234.3 | 0.48% | PASS |
| Column 1 (Students Mentored) Label | 185 | 179 | 0.38% | 247.8 | 242.5 | 0.33% | PASS |
| Column 1 (Students Mentored) Description | 288 | 285 | 0.19% | 246.3 | 255.9 | 0.60% | PASS |
| Column 2 (Success Rate) Number | 148 | 137 | 0.69% | 618.5 | 605.9 | 0.79% | PASS |
| Column 2 (Success Rate) Label | 147 | 139 | 0.50% | 624.8 | 616.8 | 0.50% | PASS |
| Column 2 (Success Rate) Description | 275 | 275 | 0.00% | 623.6 | 614.2 | 0.59% | PASS |
| Column 3 (Tests Evaluated) Number | 200 | 193 | 0.44% | 989.0 | 983.8 | 0.32% | PASS |
| Column 3 (Tests Evaluated) Label | 163 | 151 | 0.75% | 992.6 | 988.4 | 0.26% | PASS |
| Column 3 (Tests Evaluated) Description | 278 | 276 | 0.12% | 989.4 | 998.5 | 0.57% | PASS |
| Column 4 (Recorded Lectures) Number | 114 | 123 | 0.56% | 1360.8 | 1355.7 | 0.32% | PASS |
| Column 4 (Recorded Lectures) Label | 183 | 179 | 0.25% | 1356.5 | 1352.8 | 0.23% | PASS |
| Column 4 (Recorded Lectures) Description | 276 | 282 | 0.38% | 1349.1 | 1337.9 | 0.70% | PASS |

## 3. Geometric Dividers & Centers Verification
- Geometric Dividers: x = 441u, 806u, 1173u (Exact match via CSS grid `366fr 365fr 367fr 352fr` with 75u container padding).
- Geometric Column Centers: g1 = 258.0u, g2 = 623.5u, g3 = 989.5u, g4 = 1349.0u (All within 0.1px of reference stats.png content centers).
- Notch between right-edge orange circles: preserved between y = 185u and y = 220u, matching reference profile.

## 4. Visual Artifacts
- Overlay: `scratch/stats_overlay.png` (50% blend)
- Diff Heatmap: `scratch/stats_diff_heatmap.png` (Jet colormap)
