# Visual & Geometric Comparison Report (v3.1 Fix Pass)

**Target Canvas**: 1600px wide (1u = 1px on desktop).
**Execution Time**: 2026-10-21T11:07:45.500Z
**Active Motion Mode**: `full` (Forced: `NEXT_PUBLIC_FORCE_MOTION=1`, Active Animations: `65`)

## 1. Measured Anchors (Target vs Actual px)

| Element Anchor | Target (u) | Actual (px) | Difference | Status | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| A: Badge "COURSE CATEGORIES" | 171u | 168.5px | -1.5% | **PASS** | Text anchor width |
| A: H2 "Explore Popular Programs" | 754u | 753.9px | 0% | **PASS** | Full H2 text width |
| A: Paragraph text | 862u | 862px | 0% | **PASS** | Paragraph max width |
| A: Label "FULL YEAR BATCH" | 141u | 138.8px | -1.6% | **PASS** | Card 1 label |
| A: Title "Class 11 Foundation" | 219u | 217px | -0.9% | **PASS** | Card 2 title |
| A: Desc "Journal, Ledger, BRS &" | 177u | 174px | -1.7% | **PASS** | Card 2 desc line 1 |
| A: Footer "Explore Course" | 113u | 113.3px | +0.3% | **PASS** | Footer link text |
| A: Ticker "PARTNERSHIP ACCOUNTS" | 161u | 165px | +2.5% | **PASS** | First ticker item |
| B: Badge "FEATURED BATCHES" | 150u | 154.2px | +2.8% | **PASS** | Badge text anchor |
| B: H2 "Explore Popular Accountancy Courses" | 1018u | 1017.6px | 0% | **PASS** | Full H2 text width |
| B: Tab "All Batches" | 94u | 92.7px | -1.4% | **PASS** | Tab text anchor |
| B: Tab "Class 12 CBSE" | 110u | 111.6px | +1.5% | **PASS** | Tab text anchor |
| B: Tab "Class 11 Foundation" | 156u | 155px | -0.6% | **PASS** | Tab text anchor |
| B: Line 1 Description | 396u | 397.1px | +0.3% | **PASS** | Card 1 desc line 1 |
| B: Meta "Full Year + 136 Videos" | 150u | 150.9px | +0.6% | **PASS** | Card 1 duration text |
| B: Faculty "Ronak Dugar" | 97u | 93.2px | -3.9% | **PASS** | Faculty name |
| B: Faculty "Lead Accountancy Faculty" | 169u | 168.8px | -0.1% | **PASS** | Faculty role |
| B: Footer "View Course" | 102u | 104.2px | +2.2% | **PASS** | View course text |
| C: Number "500+" | 155u | 154.8px | -0.1% | **PASS** | Number text width |
| C: Label "Students Mentored" | 215u | 207.9px | -3.3% | **PASS** | Label text width |
| C: Description "Years of dedicated Class 11 & 12" | 261u | 260.1px | -0.3% | **PASS** | Desc text width |

## 2. Section Heights & Gaps

| Section | Target | Actual | Difference | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section A (Programs)** | ~764u | 789px | 3% | **PASS** |
| **Section B (Featured)** | ~800u (1 row) / ~1490u (6 cards) | 1515px | 2% | **PASS** |
| **Section C (Stats)** | ~373-380u | 386px | 3% | **PASS** |

## 3. Mandatory Checklist Verification

- [x] **PASS**: All 5 program cards have visible gradient/fill, border, coloured icon circle and readable high-contrast text.
- [x] **PASS**: No text overflows any card at 1600/1366/1280/1024/768/412/390/360.
- [x] **PASS**: Section B heading ("Explore Popular Accountancy Courses") and badge ("FEATURED BATCHES") are correct.
- [x] **PASS**: Course banners are tinted with decorative circles and slow 12s drift.
- [x] **PASS**: Chat WhatsApp button is coloured with visible white MessageCircle icon.
- [x] **PASS**: Highlight marker is a 3-stop linear gradient (#FFD43B -> #FFB21E -> #FF9A1A).
- [x] **PASS**: Continuous cream wrapper eliminates seam and dead gap between A and B.
- [x] **PASS**: Stats background radial+linear gradient and 4 ambient glowing circles present.
- [x] **PASS**: Animations running (`65` active animations while sections in view).
- [x] **PASS**: Reduced-motion mode degrades cleanly to 200ms opacity fades.

## 4. Multi-Viewport Responsive Matrix

| Viewport | Horizontal Scroll | Title Overflow | Status |
| :--- | :--- | :--- | :--- |
| 1920x1080 | NONE | NONE | **PASS** |
| 1600x900 | NONE | NONE | **PASS** |
| 1366x768 | NONE | NONE | **PASS** |
| 1280x800 | NONE | NONE | **PASS** |
| 1024x768 | NONE | NONE | **PASS** |
| 768x1024 | NONE | NONE | **PASS** |
| 412x915 | NONE | NONE | **PASS** |
| 390x844 | NONE | NONE | **PASS** |
| 360x640 | NONE | NONE | **PASS** |

## 5. Visual Artifacts Generated

- `docs/compare/programs_overlay.png`
- `docs/compare/programs_side_by_side.png`
- `docs/compare/courses_overlay.png`
- `docs/compare/courses_side_by_side.png`
- `docs/compare/stats_overlay.png`
- `docs/compare/stats_side_by_side.png`
