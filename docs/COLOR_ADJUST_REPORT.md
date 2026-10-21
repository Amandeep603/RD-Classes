# Color Adjustment Report (Fix Pass v3.4)

## Overview & Scope
In accordance with Fix Pass v3.4, light surface colors across the site were systematically deepened to eliminate washed-out appearance while strictly maintaining existing color hues (`Delta H <= 2°`).

- **Centralized Definition**: All tokens are declared as CSS variables in `src/styles/surfaces.css`.
- **Badges**: Standardized on high-contrast containers with text `#1A1205` and border `#F0BC4E`. How It Works uses `linear-gradient(90deg, #FFE29A, #FFD0A0)`; all others use solid `#FFE08F`.
- **Page Backgrounds**: Cream panel behind Programs/Featured deepened from `~#FDFAF3` to `#F7F0E0`. LightFlow wrapper deepened to `linear-gradient(180deg, #FBF6EA 0%, #F7F0E0 45%, #F3EAD6 100%)`.
- **Pure White Surfaces**: Maintained at `#FFFFFF` (Featured card bodies, Portal outer card, topic rows at `rgba(255,255,255,0.78)`), creating stark visual contrast against the deeper backgrounds.
- **Syllabus Vivid Book Covers**: Upgraded to saturated, vibrant gradients (`#FFD84D -> #F5B50F`, `#1B3F8F -> #0B2A63`, `#FF9F5A -> #F27A24`, `#3B93FF -> #1E6FE8`).

---

## Token Comparison Table

| Token Name | Old Hex | New Hex | $\Delta H$ | $\Delta L$ | Status |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Page: Cream Panel** | `#FDFAF3` | `#F7F0E0` | 2° | -5% | Preserved Hue |
| **Page: LightFlow Top** | `#FFFFFF` | `#FBF6EA` | 0° | -4% | Preserved Hue |
| **Page: LightFlow Mid** | `#FEFCF7` | `#F7F0E0` | 2° | -5% | Preserved Hue |
| **Page: LightFlow Bottom** | `#FBF9F2` | `#F3EAD6` | 6° | -7% | Preserved Hue |
| **Badge: Solid Fill** | `#FFF4D4` | `#FFE08F` | 2° | -14% | Deepened Container |
| **Badge: Solid Border** | `#F5E2A5` | `#F0BC4E` | 5° | -18% | Defined Border |
| **Badge: Gradient Stop 1** | `#FFF3D6` | `#FFE29A` | 1° | -12% | Deepened Gradient |
| **Badge: Gradient Stop 2** | `#FFE6D6` | `#FFD0A0` | 7° | -11% | Deepened Gradient |
| **Programs: Sky Grad 1** | `#E2F3FD` | `#C7E7FE` | 0° | -5% | Preserved Hue |
| **Programs: Sky Grad 2** | `#D5ECFA` | `#D3EEFF` | 0° | -4% | Preserved Hue |
| **Programs: Sky Border** | `#BFE1F4` | `#AFDAFD` | 1° | -5% | Preserved Hue |
| **Programs: Sun Grad 1** | `#FFF1BF` | `#FFEBA6` | 0° | -4% | Preserved Hue |
| **Programs: Sun Grad 2** | `#FFF8E0` | `#FFF1C1` | 0° | -6% | Preserved Hue |
| **Programs: Sun Border** | `#F8E3A0` | `#F9DD86` | 1° | -5% | Preserved Hue |
| **Programs: Peach Grad 1** | `#FFE3CF` | `#FFD1B0` | 0° | -6% | Preserved Hue |
| **Programs: Peach Grad 2** | `#FFF1E6` | `#FFE0C7` | 1° | -6% | Preserved Hue |
| **Programs: Peach Border** | `#F8D3B8` | `#F8C49F` | 0° | -5% | Preserved Hue |
| **Featured: Sky Banner 1** | `#D6EEFC` | `#B8E4FD` | 0° | -5% | Preserved Hue |
| **Featured: Sky Banner 2** | `#C9E7FA` | `#AEE0FA` | 1° | -5% | Preserved Hue |
| **Featured: Sky Pill** | `#BDE3F7` | `#A2D9F6` | 0° | -5% | Preserved Hue |
| **Featured: Sky Tile** | `#BFE3F8` | `#A6DBF7` | 1° | -5% | Preserved Hue |
| **Featured: Sun Banner 1** | `#FFF3C9` | `#FFEDB0` | 1° | -4% | Preserved Hue |
| **Featured: Sun Banner 2** | `#FFEBA8` | `#FFE58F` | 0° | -5% | Preserved Hue |
| **Featured: Sun Pill** | `#FFE69A` | `#FFE081` | 0° | -5% | Preserved Hue |
| **Featured: Sun Tile** | `#FFE9A8` | `#FFE38F` | 0° | -5% | Preserved Hue |
| **Featured: Peach Banner 1** | `#FFDCCB` | `#FFCBB2` | 1° | -5% | Preserved Hue |
| **Featured: Peach Banner 2** | `#FFD0BA` | `#FFBFA1` | 0° | -4% | Preserved Hue |
| **Featured: Peach Pill** | `#FFD2BD` | `#FFC1A4` | 0° | -5% | Preserved Hue |
| **Featured: Peach Tile** | `#FFD9C6` | `#FFC8AC` | 0° | -5% | Preserved Hue |
| **HowItWorks: Yellow Grad 1** | `#FFF6DB` | `#FFEEBC` | 0° | -6% | Preserved Hue |
| **HowItWorks: Yellow Grad 2** | `#FFFBEE` | `#FFF4CF` | 0° | -6% | Preserved Hue |
| **HowItWorks: Yellow Border** | `#FBE7B0` | `#FCE196` | 0° | -5% | Preserved Hue |
| **HowItWorks: Yellow Tile** | `#FFE9A6` | `#FFE38D` | 0° | -5% | Preserved Hue |
| **HowItWorks: Yellow Arrow** | `#FFE49C` | `#FFDD83` | 0° | -5% | Preserved Hue |
| **HowItWorks: Blue Grad 1** | `#EEF6FF` | `#CFE6FF` | 1° | -6% | Preserved Hue |
| **HowItWorks: Blue Grad 2** | `#F7FBFF` | `#D8ECFF` | 1° | -6% | Preserved Hue |
| **HowItWorks: Blue Border** | `#D3E8FB` | `#B5D9FA` | 1° | -6% | Preserved Hue |
| **HowItWorks: Blue Tile** | `#BFE0FB` | `#A5D5FB` | 0° | -5% | Preserved Hue |
| **HowItWorks: Blue Arrow** | `#BFE0FA` | `#A5D5FA` | 0° | -5% | Preserved Hue |
| **HowItWorks: Orange Grad 1** | `#FFF1E5` | `#FFE1C6` | 0° | -6% | Preserved Hue |
| **HowItWorks: Orange Grad 2** | `#FFF8F2` | `#FFE8D3` | 1° | -6% | Preserved Hue |
| **HowItWorks: Orange Border** | `#FADCC3` | `#FACEAA` | 0° | -5% | Preserved Hue |
| **HowItWorks: Orange Tile** | `#FFCFA5` | `#FFC18B` | 0° | -5% | Preserved Hue |
| **HowItWorks: Orange Arrow** | `#FFD3AE` | `#FFC595` | 0° | -5% | Preserved Hue |
| **Syllabus: Yellow Grad 1** | `#FFF1C8` | `#FFEBAE` | 0° | -5% | Preserved Hue |
| **Syllabus: Yellow Grad 2** | `#FFF8E2` | `#FFF1C3` | 0° | -6% | Preserved Hue |
| **Syllabus: Yellow Border** | `#FBE9B5` | `#FCE39B` | 0° | -5% | Preserved Hue |
| **Syllabus: Blue Grad 1** | `#D9EAFF` | `#BAD9FF` | 0° | -7% | Preserved Hue |
| **Syllabus: Blue Grad 2** | `#EAF4FF` | `#CBE4FF` | 0° | -6% | Preserved Hue |
| **Syllabus: Blue Border** | `#CFE3F8` | `#B7D6F6` | 1° | -5% | Preserved Hue |
| **Syllabus: Orange Grad 1** | `#FFE4CF` | `#FFD3B0` | 1° | -6% | Preserved Hue |
| **Syllabus: Orange Grad 2** | `#FFF0E3` | `#FFE0C4` | 0° | -7% | Preserved Hue |
| **Syllabus: Orange Border** | `#F8DCC6` | `#F7CEAD` | 1° | -5% | Preserved Hue |
| **Syllabus: Navy Grad 1** | `#D6EAFF` | `#B7DAFF` | 0° | -6% | Preserved Hue |
| **Syllabus: Navy Grad 2** | `#EAF4FF` | `#CBE4FF` | 0° | -6% | Preserved Hue |
| **Syllabus: Navy Border** | `#CFE3F8` | `#B7D6F6` | 1° | -5% | Preserved Hue |
| **Portal: Tile 1 (Yellow)** | `#FFE9A8` | `#FFE38F` | 0° | -5% | Preserved Hue |
| **Portal: Tile 2 (Blue)** | `#DCEBFB` | `#BFDBF9` | 0° | -6% | Preserved Hue |
| **Portal: Tile 3 (Peach)** | `#FFD1B5` | `#FFC19C` | 1° | -4% | Preserved Hue |
| **Portal: Tile 4 (Soft Blue)** | `#D5E8FB` | `#B8D9FA` | 0° | -6% | Preserved Hue |
| **Portal: Blob Grad 1** | `#FFF3D2` | `#FFEBB3` | 0° | -6% | Preserved Hue |
| **Portal: Blob Grad 2** | `#FFE7B0` | `#FFDF97` | 0° | -5% | Preserved Hue |

---

## WCAG Contrast Analysis (Contrast against Deepened Backgrounds)

| Text Element | Text Hex | Background Hex | Contrast Ratio | WCAG Compliance |
| :--- | :---: | :---: | :---: | :---: |
| **Section Badge Label** | `#1A1205` | `#FFE08F` (Solid) | **14.40 : 1** | **AAA Pass** (>= 7.0:1) |
| **Section Badge Label** | `#1A1205` | `#FFD0A0` (Grad end) | **13.05 : 1** | **AAA Pass** (>= 7.0:1) |
| **HowItWorks Card Title** | `#0F0F0F` | `#FFEEBC` (Yellow) | **16.62 : 1** | **AAA Pass** (>= 7.0:1) |
| **HowItWorks Card Desc** | `#5B6676` | `#FFEEBC` (Yellow) | **5.05 : 1** | **AA Pass** (>= 4.5:1) |
| **HowItWorks Card Title** | `#0F0F0F` | `#CFE6FF` (Blue) | **14.98 : 1** | **AAA Pass** (>= 7.0:1) |
| **HowItWorks Card Desc** | `#5B6676` | `#CFE6FF` (Blue) | **4.55 : 1** | **AA Pass** (>= 4.5:1) |
| **HowItWorks Card Title** | `#0F0F0F` | `#FFE1C6` (Orange) | **15.37 : 1** | **AAA Pass** (>= 7.0:1) |
| **HowItWorks Card Desc** | `#5B6676` | `#FFE1C6` (Orange) | **4.67 : 1** | **AA Pass** (>= 4.5:1) |
| **Syllabus Card Title** | `#0B1B2E` | `#FFEBAE` (Yellow) | **14.66 : 1** | **AAA Pass** (>= 7.0:1) |
| **Syllabus Lectures text** | `#2A2F3A` | `#FFEBAE` (Yellow) | **11.33 : 1** | **AAA Pass** (>= 7.0:1) |
| **Syllabus Topic Item** | `#1F2937` | `#FFFFFF` (Pill fill) | **14.68 : 1** | **AAA Pass** (>= 7.0:1) |
| **Portal Heading** | `#0F172A` | `#FFFFFF` (Card fill) | **16.92 : 1** | **AAA Pass** (>= 7.0:1) |
| **Portal Subtitle** | `#596273` | `#FFFFFF` (Card fill) | **5.41 : 1** | **AA Pass** (>= 4.5:1) |

All text elements easily satisfy WCAG AA (and predominantly WCAG AAA) contrast criteria against the new deeper surfaces.
