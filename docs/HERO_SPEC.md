# HERO_SPEC.md (Canvas 1600x900)

Measured bounding boxes and geometry extracted directly from `reference/hero-reference.jpeg`.

## 1. Global & Header Geometry (Canvas: 1600 x 900 px)
- **Header Overlay Height**: 112px (min 68px, target ~112u)
- **Header Left Padding**: x = 102px (~100px from left edge, 6.25vw)
- **Header Right Padding**: x = 1520px (~80px from right edge)
- **Header Logo Badge**: x = 102..164 (w = 63px, h = 48px, y = 33px)
- **Header Enquire Button**: x = 1336..1520 (w = 185px, h = 50px, y = 31px), radius ~8px

## 2. Left Column Typography & Elements
- **Content Left Alignment**: x = 102px (exactly 100px from left edge, 6.25vw)
- **Eyebrow Cyan Line**: x = 102..177 (w = 46px, h = 2px), y = 204px (~204px)
- **Eyebrow Text**: y ~ 197..212px, uppercase ~15px, letter-spacing ~0.22em, color #D6D6D6
- **H1 3 Lines**:
  - Line 1 ("Build"): y ~ 240..328px (h ~ 88px)
  - Line 2 ("confidence in"): y ~ 328..416px (h ~ 88px)
  - Line 3 ("Accountancy."): y ~ 416..505px (h ~ 89px)
  - Total H1 bounding box: y = 240..505px, line pitch ~88px, font-size ~96px, weight 800, letter-spacing -0.02em
- **Subtext ("Clear concepts. Regular practice. / Better preparation.")**:
  - y ~ 512..582px, font-size ~28px, line pitch ~35px, weight 300, color #EDEDED
- **Action Buttons Row**:
  - Top: y = 621px (~620px), height = 65px (~66px)
  - Explore Courses (Yellow Primary): x = 119..374 (w = 256px, ~257px), radius ~10px
  - Get in Touch (Outline): x = 403..653 (w = 251px, ~250px), radius ~10px
  - Button Gap: 29px (~28px)
- **Bottom Meta Row**:
  - Cyan Line: x = 112..177 (w = 38px, h = 2px), y = 794px (~795px)
  - Text: "CLASS 11  /  CLASS 12  /  ACCOUNTANCY", uppercase ~14px, letter-spacing ~0.2em, color #D6D6D6

## 3. Right Column Arch Cards
- **Arch A (Column 1 Top, Sky Blue #72C7E8)**:
  - x = 886px, y = 142px (~140px), width = 196px (~198px), height = 380px (~515px)
  - Top: fully rounded pill (radius = w/2 = ~99px), bottom: softly rounded
- **Arch B (Column 1 Bottom, Orange #FF7A00)**:
  - x = 888px (~887px), y = 653px (~652px), width = 196px (~198px), cut by bottom edge
- **Arch C (Column 2 Top, Yellow #FFB800)**:
  - x = 1106px (~1105px), y = 86px (~85px), width = 201px (~203px), height = 287px (~398px)
  - Top: fully rounded pill (radius = w/2 = ~101px)
- **Arch D (Column 2 Bottom, Teal #1AA6C8)**:
  - x = 1107px (~1107px), y = 501px (~500px), width = 199px (~203px), cut by bottom edge
- **Arch E (Column 3, Orange #FF7A00)**:
  - x = 1331px (~1331px), y = 138px (~137px), width = 206px (~207px), height = 276px (~541px)
  - Slanted bottom-right corner as in reference
- **Arch Cluster Right Edge**: x = 1536px (~1538px, ~3.9vw from right edge)
- **Column Gaps**: ~20-22px

## 4. Scaling System Ratios (Desktop & Laptop >= 1024px)
- **Unit Token**: `--u: min(100vw / 1600, max(100svh, 560px) / 900)`, capped at 1.25.
- Every element in the hero calculates as `calc(var(--u) * N)` with safe minimum font clamps.
