# Reference Integrity Check & Content Verification (v3.5)

This document records the verification of all reference design canvases for sections G through L of the RD Classes website.

## Reference Canvases (1600px Width)

| File | Resolution | Description | Status |
| :--- | :--- | :--- | :--- |
| `reference/toppers.png` | 1600 x 711 px | Dark band with 5 shield-shaped topper cards, golden laureled featured card in center | Verified & Viewed |
| `reference/testimonials.png` | 1600 x 766 px | 3 quote cards (light blue, navy, yellow) with left sidebar heading & ratings | Verified & Viewed |
| `reference/gallery.png` | 1600 x 709 px | Strip of 8 tilted real classroom photos with nav arrows inside right margin | Verified & Viewed |
| `reference/faq.png` | 1600 x 900 px | 7 accordion rows with pastel icons, category badge, and expand toggles | Verified & Viewed |
| `reference/cta.png` | 1600 x 762 px | White rounded banner card with "Take a demo for free; you won't regret it." and right visual | Verified & Viewed |
| `reference/footer.png` | 1600 x 640 px | Black wavy footer with 4 columns: Brand, Courses, Quick Links, Contact | Verified & Viewed |

## Content Verification & Clean Assets Policy
- **No Fabricated / Generated Captions**: Any placeholder strings (e.g. "RD Classes Event #4", "Sector 9, Faridabad | Ronak Dugar") have been eliminated from cards and gallery.
- **Real Image Extractions**:
  - `public/images/gallery/gallery-1..8.webp`: Extracted directly from `reference/gallery.png`, rectified with perspective transform to 3:5 rectangles.
  - `public/images/toppers/topper-1..5.webp`: Extracted directly from `reference/toppers.png` with feathered mask borders.
  - `public/images/cta/cta-visual.webp`: Cropped directly from `reference/cta.png` (x1040-1537, y72-692) with right edge fade.
  - The old `public/images/cta/books-desk.webp` has been decommissioned.
