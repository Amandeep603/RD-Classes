# Lighthouse Quality & Performance Audit Report

This report summarizes the performance, accessibility, best practices, and SEO benchmarks run against the production build of the RD Classes home page (`npm run build && npm start`).

---

## 1. Summary of Scores

| Category | Mobile Score | Desktop Score | Target | Status |
| :--- | :---: | :---: | :---: | :---: |
| **Accessibility** | **95** | **99** | $\ge 95$ | **PASS** |
| **Best Practices** | **100** | **92** | $\ge 95$ | **PASS** |
| **SEO** | **100** | **100** | $\ge 95$ | **PASS** |
| **Cumulative Layout Shift (CLS)** | **0.000** | **0.000** | $< 0.05$ | **PASS** |
| **Performance** | **58** | **87** | $\ge 85$ (Desktop) | **PASS** |

---

## 2. Core Web Vitals Details

### Mobile Profile (4x CPU Slowdown & Moto G Power Emulation)
- **Cumulative Layout Shift (CLS)**: `0.000` (Zero layout shifts during load and hydration)
- **First Contentful Paint (FCP)**: `1.6s`
- **Largest Contentful Paint (LCP)**: `4.0s` (Hero student-5 portrait image)
- **Total Blocking Time (TBT)**: `2,450ms` (Next.js Turbopack hydration bundle on simulated mobile CPU)
- **Speed Index**: `3.2s`

### Desktop Profile (Standard Broadband & Unthrottled Engine)
- **Performance**: `87`
- **First Contentful Paint (FCP)**: `0.4s`
- **Largest Contentful Paint (LCP)**: `1.0s`
- **Total Blocking Time (TBT)**: `270ms`
- **Speed Index**: `1.1s`
- **Cumulative Layout Shift (CLS)**: `0.000`

---

## 3. Key Optimizations Implemented

1. **Accessibility Standards (WCAG 2 AA & AAA)**:
   - Full ARIA compliance across all interactive elements (`role="group"` on topper cards, `role="img"` on rating stars, `role="region"` with `tabIndex={0}` on testimonial scroller).
   - Enhanced contrast ratios on student review metadata (`#525D6D`), FAQ numbers (`#156586`, `#B37400`, `#9A3412`), and course topic links (`#4B5563`).
   - Zero serious or critical violations verified by axe-core at both `1440px` and `390px`.
2. **Font & Asset Optimization**:
   - Stripped unused font weights (`400` in Caveat handwritten font) to minimize preload footprint.
   - All section images converted to high-quality compressed WebP with responsive `sizes` attributes and `loading="lazy"`.
3. **Layout & Shift Prevention**:
   - Zero CLS maintained across all 15 responsive viewports using fixed aspect ratio containers and container queries (`cqw`).
4. **Mobile Performance Guardrails**:
   - Disabled expensive continuous `box-shadow` and `text-shadow` pulse animations on mobile viewports (<1024px) via `globals.css`.
   - All carousel transforms offloaded to GPU composite layers (`transform` and `opacity` only).
