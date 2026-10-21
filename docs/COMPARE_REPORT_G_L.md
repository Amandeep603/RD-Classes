# Comparison & Anchor Report: Sections G - L

This report documents the automated visual verification and bounding-box anchor measurements performed against the 1600px reference canvas designs.

---

## 1. Automated Anchor Measurements (1600px Desktop)

Tolerance standard: **±4.0%** for text & containers, **±8.0%** for illustrations/silhouettes.

| Section | Element Identifier | Target (u) | Actual (px) | Diff (px) | Diff (%) | Result |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **G (Toppers)** | Paragraph Line 1 | `502` | `503` | `+1` | `0.2%` | **PASS** |
| **G (Toppers)** | Featured Card Width | `318` | `318` | `0` | `0.0%` | **PASS** |
| **G (Toppers)** | Featured Card Height | `428` | `428` | `0` | `0.0%` | **PASS** |
| **G (Toppers)** | Score Circle Diameter | `96` | `95` | `-1` | `1.0%` | **PASS** |
| **G (Toppers)** | CTA Button Text Width | `203` | `196` | `-7` | `3.4%` | **PASS** |
| **H (Testimonials)** | Paragraph Line 1 | `827` | `840` | `+13` | `1.6%` | **PASS** |
| **H (Testimonials)** | Card Width | `392` | `392` | `0` | `0.0%` | **PASS** |
| **H (Testimonials)** | Card Height | `404` | `404` | `0` | `0.0%` | **PASS** |
| **I (Gallery)** | Paragraph Line 1 | `761` | `769` | `+8` | `1.1%` | **PASS** |
| **I (Gallery)** | CTA Button Text Width | `206` | `200` | `-6` | `2.9%` | **PASS** |
| **J (FAQ)** | H2 Line 1 ("Frequently Asked") | `463` | `464` | `+1` | `0.2%` | **PASS** |
| **J (FAQ)** | Paragraph Line 2 | `732` | `728` | `-4` | `0.5%` | **PASS** |
| **K (CTA Banner)** | H2 Line 1 ("Take a demo for free;") | `761` | `762` | `+1` | `0.1%` | **PASS** |
| **K (CTA Banner)** | Paragraph Line 2 | `794` | `763` | `-31` | `3.9%` | **PASS** |

**Summary**: 14 of 14 anchors **PASS** within required tolerance (100% pass rate).

---

## 2. Functional & Interactive Verification

- **G - Board Toppers Carousel (`#results`)**:
  - Previous/Next button navigation: **PASS** (swaps featured card with 600ms cubic-bezier transition).
  - Side card click activation: **PASS**.
  - Autoplay (5s on desktop pointer:fine): **PASS** (pauses on hover, focus, off-screen, and reduced-motion).
  - Score count-up (0 -> score in 700ms): **PASS**.
  - Laurel wreath SVG pop-in on featured card: **PASS**.
  - Mobile layout (<768px): **PASS** (peeking side cards at 62%, navigation below cards).
- **H - Testimonials (`#reviews`)**:
  - CSS scroll-snap track (mandatory x snap): **PASS**.
  - Progress indicator pills tracking active card: **PASS**.
  - Rating count-up (0.0 -> 4.8): **PASS**.
  - Deepened palette tints (Blue, Navy, Yellow): **PASS**.
- **I - Gallery Strip (`#gallery`)**:
  - 3D concave cylinder rotation (`--ry` up to ±14° desktop, ±7° mobile): **PASS** (outer edges taller).
  - Scroll buttons with disable state: **PASS**.
  - Rectified 3:5 WebP photos without distortion: **PASS**.
- **J - FAQ (`#faq`)**:
  - Single-open accordion with CSS grid 0fr -> 1fr transition: **PASS**.
  - Keyboard navigation (Enter/Space, Up/Down arrow focus): **PASS**.
  - FAQPage JSON-LD schema correctly rendered: **PASS**.
- **K - CTA Banner (`#demo`)**:
  - Gradient badge & 1475u x 620u card: **PASS**.
  - Blended desk books photo with gradient mask: **PASS**.
  - WhatsApp prefill link (`Hello RD Classes, I would like to book a free demo class.`): **PASS**.
  - Tel link (`tel:+918368545620`): **PASS**.
- **L - Footer (`#contact`)**:
  - Traced SVG wave with yellow accent border and vector illustrations: **PASS**.
  - Transparent anti-aliased light logo (`logo-rd-light.png`) on `#121212`: **PASS**.
  - Social media and directions links: **PASS**.
  - Back to top smooth scroll (`#top`): **PASS**.

---

## 3. Hydration & Console Verification

- Browser console errors: **0**
- Hydration warnings: **0**
- 404 missing resources: **0**
- Server HTML `data-inview` / `data-revealed` leak check: **PASS** (zero SSR leaks, purely managed inside client hooks).
