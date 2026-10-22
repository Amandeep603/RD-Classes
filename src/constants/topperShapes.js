/**
 * Normalised SVG path silhouettes for Topper Shield Cards
 * Both 0..100 (for viewBox 0 0 100 100) and 0..1 (for clipPathUnits objectBoundingBox)
 */

// Side card path (viewBox 0 0 100 100): top ears, rounded corners, subtle bottom curve
export const SIDE_CARD_PATH_100 =
  "M 0 8 C 0 3.6 3.6 0 8 0 L 16 0 C 18.5 0 20 1.5 21.5 2.8 C 22.8 3.6 24.5 4 26 4 L 74 4 C 75.5 4 77.2 3.6 78.5 2.8 C 80 1.5 81.5 0 84 0 L 92 0 C 96.4 0 100 3.6 100 8 L 100 92 C 100 95.8 97 98.2 93.5 98.8 L 52 100 C 50.7 100.1 49.3 100.1 48 100 L 6.5 98.8 C 3 98.2 0 95.8 0 92 Z";

export const SIDE_CARD_PATH_UNIT =
  "M 0 0.08 C 0 0.036 0.036 0 0.08 0 L 0.16 0 C 0.185 0 0.20 0.015 0.215 0.028 C 0.228 0.036 0.245 0.04 0.26 0.04 L 0.74 0.04 C 0.755 0.04 0.772 0.036 0.785 0.028 C 0.80 0.015 0.815 0 0.84 0 L 0.92 0 C 0.964 0 1 0.036 1 0.08 L 1 0.92 C 1 0.958 0.97 0.982 0.935 0.988 L 0.52 1.0 C 0.507 1.001 0.493 1.001 0.48 1.0 L 0.065 0.988 C 0.03 0.982 0 0.958 0 0.92 Z";

// Featured card path (viewBox 0 0 100 100): top ears flanking the year pill
export const FEATURED_CARD_PATH_100 =
  "M 0 8.5 C 0 3.8 3.8 0 8.5 0 L 18 0 C 20.5 0 22 1.5 23.5 2.8 C 24.8 3.6 26.5 4 28 4 L 72 4 C 73.5 4 75.2 3.6 76.5 2.8 C 78 1.5 79.5 0 82 0 L 91.5 0 C 96.2 0 100 3.8 100 8.5 L 100 92.5 C 100 96.2 97.2 98.5 93.8 99 L 52 100 C 50.7 100.1 49.3 100.1 48 100 L 6.2 99 C 2.8 98.5 0 96.2 0 92.5 Z";

export const FEATURED_CARD_PATH_UNIT =
  "M 0 0.085 C 0 0.038 0.038 0 0.085 0 L 0.18 0 C 0.205 0 0.22 0.015 0.235 0.028 C 0.248 0.036 0.265 0.04 0.28 0.04 L 0.72 0.04 C 0.735 0.04 0.752 0.036 0.765 0.028 C 0.78 0.015 0.795 0 0.82 0 L 0.915 0 C 0.962 0 1 0.038 1 0.085 L 1 0.925 C 1 0.962 0.972 0.985 0.938 0.99 L 0.52 1.0 C 0.507 1.001 0.493 1.001 0.48 1.0 L 0.062 0.99 C 0.028 0.985 0 0.962 0 0.925 Z";

// Shallow V-shaped bottom panel (sides at 60%, center at 68%)
export const V_PANEL_PATH_100 =
  "M 0 60 L 50 68 L 100 60 L 100 100 L 0 100 Z";

export const V_PANEL_PATH_UNIT =
  "M 0 0.60 L 0.50 0.68 L 1 0.60 L 1 1 L 0 1 Z";

// Photo clip path: area above the V line
export const PHOTO_CLIP_PATH_UNIT =
  "M 0 0 L 1 0 L 1 0.60 L 0.50 0.68 L 0 0.60 Z";
