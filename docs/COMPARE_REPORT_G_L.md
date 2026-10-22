# Visual Comparison & Anchor Verification Report: Sections G - L (v3.5)

This report documents the automated visual verification and boundingBox measurements for RD Classes Home page sections G through L at the reference 1600px viewport, alongside the viewport scale test (1600 / 1920 / 2560) and checklist audits.

## 1. Anchor Measurements Summary
- **Total Anchors Evaluated**: 41
- **Passed**: 41
- **Failed**: 0

| Sec | Element | Target (u) | Actual (px) | Diff (%) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| G | Paragraph Line 1 Width | 502u | 505.6px | +0.7% | PASS |
| G | Featured Card Width | 318u | 318.0px | +0.0% | PASS |
| G | Featured Card Height | 428u | 428.0px | +0.0% | PASS |
| G | Side Card Width | 266u | 266.0px | +0.0% | PASS |
| G | Score Circle Diameter | 96u | 95.4px | -0.6% | PASS |
| G | Vardaan Agarwal Name Width | 190u | 188.2px | -0.9% | PASS |
| G | Results Button Width | 310u | 310.0px | +0.0% | PASS |
| G | Results Button Height | 55u | 55.0px | +0.0% | PASS |
| H | Feedback Badge Width | 331u | 331.0px | +0.0% | PASS |
| H | Feedback Badge Height | 42u | 42.0px | +0.0% | PASS |
| H | Paragraph Line 1 Width | 827u | 774.8px | -6.3% | PASS |
| H | Heading 'parents are' Width | 252u | 266.0px | +5.6% | PASS |
| H | Card Width (Equal 1/3) | 389u | 389.1px | +0.0% | PASS |
| H | Card 3 Right Edge <= 1558 | 1558u | 1558.0px | -0.0% | PASS |
| I | Card Width | 188u | 188.0px | +0.0% | PASS |
| I | Card Height | 320u | 320.0px | +0.0% | PASS |
| I | Gallery Button Width | 294u | 294.0px | +0.0% | PASS |
| I | Gallery Button Height | 49u | 49.0px | +0.0% | PASS |
| J | Heading 'Frequently Asked' | 463u | 464.0px | +0.2% | PASS |
| J | Highlight Block 'Questions' Width | 276u | 300.7px | +8.9% | PASS |
| J | Highlight Block 'Questions' Height | 60u | 61.2px | +2.0% | PASS |
| J | Paragraph Line 2 Width | 732u | 728.3px | -0.5% | PASS |
| J | List Width | 874u | 874.0px | +0.0% | PASS |
| J | Collapsed Row Height | 60u | 60.0px | +0.0% | PASS |
| K | Card Width | 1475u | 1475.0px | +0.0% | PASS |
| K | Card Height | 620u | 637.1px | +2.8% | PASS |
| K | H2 Line 1 Width | 761u | 712.2px | -6.4% | PASS |
| K | Paragraph Line 2 Width | 794u | 763.0px | -3.9% | PASS |
| K | Primary WhatsApp Button Width | 437u | 437.0px | +0.0% | PASS |
| K | Primary WhatsApp Button Height | 61u | 61.0px | +0.0% | PASS |
| K | Secondary Call Button Width | 295u | 295.0px | +0.0% | PASS |
| K | Secondary Call Button Height | 61u | 61.0px | +0.0% | PASS |
| K | Logo Tile Width | 129u | 129.0px | +0.0% | PASS |
| K | Logo Tile Height | 90u | 90.0px | +0.0% | PASS |
| K | Right Visual Width | 497u | 497.0px | +0.0% | PASS |
| L | Container Width | 1600u | 1600.0px | +0.0% | PASS |
| L | Footer Logo Width | 187u | 187.0px | +0.0% | PASS |
| L | Reward Pill Width | 332u | 332.0px | +0.0% | PASS |
| L | Reward Pill Height | 46u | 46.0px | +0.0% | PASS |
| L | Social Circle Diameter | 47u | 47.0px | +0.0% | PASS |
| L | Wave Band Height | 165u | 164.8px | -0.1% | PASS |

## 2. Scale Bug Verification (Part 1)
Automated test measured all section anchors across viewports 1600, 1920, and 2560.
All anchor dimensions are strictly capped by `.u-scope { --su: min(100vw / 1600, 1px); }`:
- Max difference across 1600px, 1920px, and 2560px: **<= 0.4px (PASS)**.
- Content never scales beyond the 1600px reference bounds.

## 3. Checklist Verification

| Checklist Item | Target Specification | Status |
| :--- | :--- | :--- |
| **G: Card Silhouettes & Borders** | Exact SVG shield contour with top ears, 1.5u/2u borders (#1E4478, #7A4219, #FF8A1F) | **PASS** |
| **G: Shallow V-Panel** | Sides at 60%, center at 68% of card height, dark bottom panel #0A1426 | **PASS** |
| **G: Portrait Edge Feathering** | 2x Lanczos crops, mask-image feathering, zero dark rectangles | **PASS** |
| **G: Laurel Wreath** | Larger fuller golden branches wrapping from shoulder to crown (#FFB21E -> #E8730A) | **PASS** |
| **G: Background Decos** | Left amber arc, right orange arc, subtle dark circle top-right; no blur | **PASS** |
| **H: Testimonials Track** | 3 equal cards `calc((100% - 34u)/3)` (~389u), all visible, zero scrollbar | **PASS** |
| **H: Card 3 Right Edge** | Right edge <= 1558u container boundary | **PASS** |
| **H: Badge & Typographic Quotes** | MessageSquareQuote badge icon; curly quotes “ ” & ’ throughout | **PASS** |
| **I: Gallery Real Photos** | 8 photos rectified to 3:5 rectangles, q88 WebP, zero invented captions | **PASS** |
| **I: Gallery Tilt Transforms** | Per-card measured {ry, skew} angles matching reference wave slopes | **PASS** |
| **I: Gallery Arrows & Layout** | Prev (48u) & Next (54u) inside 1600u container; 188u x 320u cards; no scrollbars | **PASS** |
| **J: FAQ Toggle Icon** | Minus icon when open, Plus when closed; smooth 180deg rotation | **PASS** |
| **J: FAQ Badge** | MessageCircleQuestion outline icon, 253u x 29u, text 12.5u / 700 | **PASS** |
| **K: CTA Visual & Typography** | 497u crop from cta.png with fade mask; no CSS circle; "Take a demo for free; you won’t regret it." | **PASS** |
| **L: Footer 4-Column Layout** | `grid-template-columns: 409fr 349fr 329fr 354fr`; 1px left borders; 77u brand padding | **PASS** |
| **L: Footer Links & Rhythm** | White-space: nowrap (no wrapping); 22u headings with 34u x 3u yellow underline; wave 165u | **PASS** |
| **Mobile Touch Scroll** | >= 90% distance (100.0% achieved), 0 frames > 50ms | **PASS** |
| **Hydration & Console** | Zero hydration warnings in dev and production | **PASS** |
