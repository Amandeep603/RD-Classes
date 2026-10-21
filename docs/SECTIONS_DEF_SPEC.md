# Sections D, E, F Measured Specification

Measured from 1600px reference images (`reference/how-it-works.png`, `reference/syllabus.png`, `reference/portal.png`):
Target 1u = 1px on 1600px desktop canvas.

---

## 1. Global Light Background (Continuous Wrapper: LightFlow)
- **Shared Background Gradient**: `linear-gradient(180deg, #FFFFFF 0%, #FEFCF7 40%, #FBF9F2 100%)`
- **Ink Primary**: `#0F172A`
- **Headings Primary**: `#0F0F0F`
- **Body Grey Text**: `#5A6472`
- **Shared H2 Desktop Size**: `52u` (line-height 1.1 / font-weight 800 / letter-spacing -0.02em)
- **Shared H2 Mobile Size**: `clamp(28px, 8vw, 42px)` with `text-wrap: balance`

---

## 2. Section D: How It Works (`id="how-it-works"`)
- **Total Canvas Height**: ~747u (Padding top: 88u, bottom: 56u)
- **Header**:
  - Badge: "SIMPLE 4-STEP PROCESS" (width 251u, height 36u, text 13u uppercase, letter-spacing 0.12em, background: `linear-gradient(90deg, #FFF3D6 0%, #FFE6D6 100%)`)
  - H2: "How It Works: From Demo to <Board Topper>" (with warm marker `linear-gradient(90deg, #FFD43B, #FFB21E 55%, #FF9A1A)`)
  - Subtitle: "No complex admission procedures. Get started directly with expert guidance from day one." (20u / 1.5 / #5A6472, max-width ~844u)
- **Card Grid**:
  - Desktop: 4 columns, gap 30u, padding-inline 50u, cards 352u x 395u, radius 20u, overflow hidden.
  - Tones:
    - **Card 1 (Yellow)**: bg `linear-gradient(160deg, #FFF6DB 0%, #FFFBEE 60%, #FFF7DD 100%)`, border 1px `#FBE7B0`, tile `#FFE9A6`, number `rgba(252,211,77,0.55)`, accent `#FFC21A -> #FFD86B`, check circle `#F9B21E`, arrow button `#FFE49C`, corner swoosh `rgba(255,214,102,0.30)`
    - **Card 2 (Blue)**: bg `linear-gradient(160deg, #EEF6FF 0%, #F7FBFF 100%)`, border 1px `#D3E8FB`, tile `#BFE0FB`, number `rgba(96,165,250,0.55)`, accent `#2B7FFF -> #8CC8FF`, check circle `#1D7BF0`, arrow button `#BFE0FA`, corner swoosh `rgba(125,190,250,0.35)`
    - **Card 3 (Orange)**: bg `linear-gradient(160deg, #FFF1E5 0%, #FFF8F2 100%)`, border 1px `#FADCC3`, tile `#FFCFA5`, number `rgba(251,146,60,0.50)`, accent `#F97316 -> #FDBA74`, check circle `#F97316`, arrow button `#FFD3AE`, corner swoosh `rgba(251,160,90,0.35)`
    - **Card 4 (Blue/Navy)**: bg `linear-gradient(160deg, #EEF6FF 0%, #F7FBFF 100%)`, border 1px `#D3E8FB`, tile `#BFE0FB`, number `rgba(96,165,250,0.55)`, accent `#2B7FFF -> #8CC8FF`, check circle `#1D7BF0`, arrow button `#BFE0FA`, corner swoosh `rgba(125,190,250,0.35)`
- **CTA Button**:
  - Size: 482u x 65u, radius 33u, background: `linear-gradient(180deg, #121E33 0%, #0B1424 100%)`, shadow `0 20px 40px -18px rgba(15,26,44,0.55)`
  - CalendarDays icon: 28u in `#FFC21A`
  - Text: "Book Your Free Demo on WhatsApp" (19u / 700 / #FFFFFF)
  - Right yellow circle: 50u (#FFC21A) with dark ArrowRight icon

---

## 3. Section E: What You Will Master (`id="syllabus"`)
- **Total Canvas Height**: ~794u (Padding top: 64u, bottom: 64u)
- **Header**:
  - Badge: "CBSE SYLLABUS MASTERY" (width 206u, height 36u, fill `#FFF4D4`, border 1px `#F5E2A5`)
  - H2: "What You Will Master: <4 Core Syllabus Books>" (soft marker `linear-gradient(90deg, #FFE9A6, #FFDDA0)`)
- **Card Grid**:
  - Desktop: 4 columns, gap 19u, padding-inline 36u, cards 368u x 610u, radius 30u.
  - Tones:
    - **Book 1 (Yellow)**: pill `#FFC21A` + `#1A1A1A` text, bg `linear-gradient(165deg, #FFF1C8 0%, #FFF8E2 45%, #FFFCF3 100%)`, border `#FBE9B5`, Book 3D SVG cover `#FFD84D -> #F5B50F`
    - **Book 2 (Navy)**: pill `#0B2A5B` + `#FFFFFF` text, bg `linear-gradient(165deg, #D6EAFF 0%, #EAF4FF 45%, #F6FAFF 100%)`, border `#CFE3F8`, Book 3D SVG cover `#1B3F8F -> #0B2A63`
    - **Book 3 (Orange)**: pill `#F97316` + `#FFFFFF` text, bg `linear-gradient(165deg, #FFE4CF 0%, #FFF0E3 45%, #FFF9F4 100%)`, border `#F8DCC6`, Book 3D SVG cover `#FFC59A -> #F99A5C`
    - **Book 4 (Blue)**: pill `#1E6FE8` + `#FFFFFF` text, bg `linear-gradient(165deg, #D9EAFF 0%, #EAF4FF 45%, #F6FAFF 100%)`, border `#CFE3F8`, Book 3D SVG cover `#3B93FF -> #1E6FE8`
  - 6 topic rows per card: height 38u, pitch 42.4u, radius 22u, background `rgba(255,255,255,0.78)`
  - Footer button: "Complete Board Mastery" (height 65u, radius 33u, bg `#0B1F3F`, right circle 48u)

---

## 4. Section F: Student Learning Portal (`id="portal"`)
- **Total Canvas Height**: ~792u (Padding top: 64u, bottom: 96u)
- **Outer White Card**:
  - Dimensions: width ~1504u (margin-inline 48u), radius 36u, border 1px `rgba(15,23,42,0.04)`, shadow `0 30px 60px -30px rgba(120,90,20,0.18)`
  - Inner padding: 48u top, 70u left, 50u bottom, 48u right
- **Left Column (Width ~650u)**:
  - Badge: "24/7 STUDENT LEARNING PORTAL" with Zap icon (height 36u, fill `#FFF2D0`)
  - H2: "Never Miss a Class With" / "Our <HD Video Player>" (line-height 1.0, 52u, warm marker)
  - Paragraph: "Missed a class for school competitions or need a late-night concept revision before your pre-boards? Log in to your private student dashboard anytime." (19u / 1.47 / #596273, max-width 600u)
  - 4 Feature Rows: tile 52u (radius 14u), title 17u / 700 / #0F172A, description 14.5u / #5B6676
  - Buttons:
    - Primary "Student Login" (256u x 60u, radius 30u, `#0F1B2D`, right yellow circle 46u)
    - Secondary "Browse Lecture Library" (282u x 58u, radius 29u, white, 1.5u border `#F4E4B0`)
- **Right Column (Device Showcase, 810u x 555u)**:
  - Laptop Mockup (metallic bezel, black display, video player with sidebar and blackboard handwritten Caveat font)
  - Phone Mockup (black body, dark RD Classes lecture card)
  - 3 Floating Chips:
    1. "PDF Notes" (blue icon circle, top-left)
    2. "Watch at 1x – 2x" (orange icon circle, top-right)
    3. "Access on All Devices" (yellow icon circle, bottom-left)
