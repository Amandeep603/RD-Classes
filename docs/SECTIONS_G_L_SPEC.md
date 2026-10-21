# Sections G - L Measured Design Specifications

Measured and sampled from 1600px canvas reference designs for Home page sections G through L.
Reference canvases: 1600u desktop target width (1u = 1px at 1600px).

---

## Section G: Board Toppers (`id="results"`, Dark Band)
- **Base Background**: `#0A1424` (sampled `#0B1525`)
- **Paddings**: Top `64u`, Bottom `72u`
- **Decorative Layers**:
  - Top-right dark blue circle: `x: 1130..1500, y: 0..130` (fill `#12233A`, opacity 0.4, hard edge)
  - Left amber arc: `x: 0..170, y: 185..310` (fill `#5A3212`, opacity 0.35, hard edge)
  - Right orange arc: `x: 1480..1600, y: 330..420` (fill `#52280E`, opacity 0.35, hard edge)
  - Behind featured card: radial glow `rgba(249, 115, 22, 0.45)`, diameter 280u, static
- **Header (Left Aligned at x = 101u)**:
  - Badge: "PROVEN HALL OF FAME", Trophy icon + text `#FF8A1F`, 13.5u/800, border 1.5u `#F97316`, fill `rgba(249,115,22,0.08)`, size `220u x 34u`
  - H2: "Celebrating Our <Board Toppers>", 52u / 1.1 / 800 / -0.02em, white, marker = orange gradient block `#F97316 -> #FFB21E`
  - Paragraph: "Consistent 95+ and 100/100 scores produced year after year\nfrom Sector 9, Faridabad." (break after "year"), 19u, color `#A8B3C5`, ANCHOR line 1 = `502u`
  - Arrows (top right, y=140u): Prev 58u circle `#16233A` (1px `#2A3A55`), Next 58u circle gradient `#FF9A2E -> #F26A0A`
- **Cards (Carousel with 5 slots, featured width 318u x 428u)**:
  - Base Card: `318u x 428u` (container query inline-size)
  - Transforms:
    - Offset 0: `translate(0, 0) scale(1)` (featured)
    - Offset -1: `translate(-313u, 31.5u) scale(0.836)`
    - Offset +1: `translate(315u, 31.5u) scale(0.84)`
    - Offset -2: `translate(-587u, 40u) scale(0.767)`
    - Offset +2: `translate(589u, 40u) scale(0.77)`
  - Card Silhouette: shield shape with top ears, bottom V, SVG gradient fill + stroke
  - Year pill: 40% W x 7.5% H, 1px border (`#2D5DA8` blue / `#E8731A` orange), featured filled orange gradient
  - Score circle: 30% W (96u on featured), centered at 65% H, count-up 0 -> score
  - Name: center 80% H, 7.4% W / 700 white, ANCHORS: Sneha Verma 122u (244u card), Vardaan Agarwal 190u (318u card)
  - School: center 87.5% H, 5.3% W / 500 `#9AA7BA`
  - Featured Extras: LaurelWreath SVG branches `#FFB21E -> #E8730A`
- **CTA Button**:
  - "View All Results & Toppers" + ArrowRight
  - Orange gradient `#FF9A2E -> #F26A0A`, size `310u x 55u`, text 15.5u / 700 white (ANCHOR `203u`), href `/results`

---

## Section H: Testimonials (`id="reviews"`, Light)
- **Background**: Continuous LightFlow cream (`#FDFBF5` deepened)
- **Paddings**: Top `64u`, Bottom `64u`
- **Header**:
  - Badge: "PARENT & STUDENT FEEDBACK", MessageSquareQuote icon, `331u x 42u`, text 14.5u/800 letter-spacing 0.06em
  - H2: "What Students & Parents <Say>", 52u / 1.1 / 800, warm marker under "Say"
  - Subtitle: "Real testimonials and WhatsApp result messages from Class 11 and 12 Accountancy students." (20u / `#5F6A7A`, ANCHOR line 1 = `827u`)
  - Rating row: "4.8/5" 24u/800 + 5 stars 26u `#FFB800` + 2u x 24u divider + "Based on 500+ reviews" 19u `#5F6A7A`
- **Layout (>=1100px)**:
  - Left column: 266u width, giant quote glyph (62u, `#9ED3F0`), 4-line heading 48u "What our / students & / parents are / saying" (orange gradient text on "saying"), controls: prev 58u, 3 pills 40u x 6u, next 58u (`#1B97C9`)
  - Right track: 3 cards, width `392u x 404u`, gap 17u, radius 22u
- **Cards**:
  - 1 Blue: `#EAF5FD` (border `#CFE6F7`), quote badge 66u `#BFE0F5`
  - 2 Navy: `#0A3150 -> #082B47`, quote badge 66u `#0F6A9E`
  - 3 Yellow: `#FFF6DC` (border `#F6E4B0`), quote badge 66u `#FFE3A3`
  - Author row: 66u avatar circle with letter initial, name 20u/700, meta 17.5u

---

## Section I: Gallery (`id="gallery"`, Light)
- **Background**: Continuous LightFlow
- **Paddings**: Top `64u`, Bottom `72u`
- **Header**:
  - Badge: "LIFE AT RD CLASSES" (`184u x 35u`)
  - H2: "Inside Our <Classroom & Celebrations>", 52u, thick warm marker (covers 55% height)
  - Subtitle: "Real snapshots from daily lecture discussions, whiteboard problem solving, and annual prize distributions." (19u / `#6B7686`, ANCHOR line 1 = `761u`)
  - Desktop arrows at right: prev 48u `#D6ECFA`, next 54u `#0F6A8F`
- **Strip (3D Concave Cylinder Look)**:
  - Full-bleed 100vw, CSS scroll-snap track
  - 8 cards: `188u x 320u`, gap 12u, radius 18u, overflow hidden
  - 3D concave cylinder perspective: `perspective(1200px) rotateY(calc(var(--ry) * 1deg))`, outer edges taller (up to 14deg desktop, 7deg mobile)
- **CTA**:
  - "View Full Classroom Gallery" + ArrowRight, teal `#0F6A8F`, `294u x 49u`, text 15u / 700 (ANCHOR `206u`), href `/gallery`

---

## Section J: FAQ (`id="faq"`, Light)
- **Background**: Continuous LightFlow
- **Paddings**: Top `64u`, Bottom `64u`
- **Header**:
  - Badge: "COMMON DOUBTS ANSWERED" (`253u x 29u`, 12.5u/700)
  - H2: Two lines "Frequently Asked" / "<Questions>", 56u / 800 / 0.95 / `#0B1630` (max-width 520u), block highlight on "Questions" (`linear-gradient(90deg, #FFD21F, #FF9F1A)`), ANCHOR line 1 = `463u`
  - Subtitle: 2 lines centered, 18u / 1.45 / `#6B7280`, ANCHOR line 2 = `732u`
- **Accordion List**:
  - Width `874u`, rows gap 6u (mobile 10px), radius 18u, single-open (row 1 open by default)
  - Row grid: 75u number column | divider | 46u icon circle | divider | question 18.5u / 700 | 42u toggle circle
  - CSS grid transition `0fr -> 1fr`, 350ms
  - JSON-LD FAQPage emitted

---

## Section K: CTA Banner (`id="demo"`, Light)
- **Wrapper Paddings**: Top `40u`, Bottom `88u`, container padding-inline `62u`
- **Card**: `1475u x 620u`, radius 36u, bg `linear-gradient(135deg, #FFFEFB, #FBF7EC)` deepened, shadow `0 40u 80u -40u rgba(120,90,20,0.25)`
- **Decorations**:
  - Top-right pale yellow circle (520u diameter `#FFE08A -> #FFD966`)
  - Faint RD watermark at 18% opacity inside circle
  - Bottom-right desk books photo masked with linear gradient fade
- **Content (Left Column ~800u)**:
  - Row 1: Logo tile `129u x 90u` radius 18u + 2 pills: "LIMITED BATCH SEATS" (`247u x 50u`) and "₹5,100 Cash for 100/100" (`269u x 50u`)
  - H2: Line 1 "Take a demo for free;" (ANCHOR `761u`), Line 2 "you won't regret it." in gradient text (`#FFC21A -> #F97316`)
  - Paragraph: 2 lines, 20u / 1.55 / `#4B5563`, ANCHOR line 2 = `794u`
  - Buttons: Primary WhatsApp yellow pill `437u x 61u` (`#FFCB2E -> #FFB800`), Secondary Call outline pill `295u x 61u`
  - Info Row: 3 items with dividers (MapPin, IndianRupee, Users)

---

## Section L: Footer (`id="contact"`, Site-Wide in `app/layout.js`)
- **Top Band (`FooterWave.jsx`)**:
  - Cream band 165u height, SVG viewBox `0 0 1600 165`
  - Black wave fill `#121212` with 4u yellow stroke `#F5B400`
  - Hand-crafted flat vector illustrations: leafy plants, stacked books, calculator with yellow keys, pencils in holder, graduation cap on books
- **Body**:
  - Background `#121212`, padding top 56u, container padding-inline 79u
  - Large faint grad-cap watermark `#1A1A1A` bottom-right
  - 4 Columns:
    1. Brand: `logo-rd-light.png` (187u), description, reward pill `332u x 46u`, 4 social icon circles
    2. Courses: 6 courses list with yellow underline
    3. Quick Links: 6 links + Student Portal Login
    4. Contact: Address, Phone, Email + "Google Maps Directions" yellow outline pill
  - Bottom Bar: divider line, copyright + meta + "Back to Top" `#top`
