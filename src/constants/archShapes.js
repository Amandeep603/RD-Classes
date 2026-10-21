/**
 * Normalized (0-1) SVG paths for ArchPhoto clip-paths with clipPathUnits="objectBoundingBox".
 * Each shape corresponds to the exact reference silhouettes segmented from hero.png:
 * - A & C: stadium / capsule (semicircle top, fully rounded bottom)
 * - B & D: semicircle top, cut flat at bottom on desktop, rounded bottom (~45% width radius) on mobile
 * - E: semicircle top, rounded bottom-left corner, straight diagonal up to right edge at y=0.82, softly rounded joins
 */

export const ARCH_SHAPES = {
  A: {
    round: "M 0 0.1928 A 0.5 0.1928 0 0 1 1 0.1928 L 1 0.8072 A 0.5 0.1928 0 0 1 0 0.8072 Z",
  },
  B: {
    cut: "M 0 0.4000 A 0.5 0.4000 0 0 1 1 0.4000 L 1 1 L 0 1 Z",
    round: "M 0 0.4000 A 0.5 0.4000 0 0 1 1 0.4000 L 1 0.6400 A 0.5 0.3600 0 0 1 0 0.6400 Z",
  },
  C: {
    round: "M 0 0.2559 A 0.5 0.2559 0 0 1 1 0.2559 L 1 0.7441 A 0.5 0.2559 0 0 1 0 0.7441 Z",
  },
  D: {
    cut: "M 0 0.2539 A 0.5 0.2539 0 0 1 1 0.2539 L 1 1 L 0 1 Z",
    round: "M 0 0.2539 A 0.5 0.2539 0 0 1 1 0.2539 L 1 0.7715 A 0.5 0.2285 0 0 1 0 0.7715 Z",
  },
  E: {
    slanted: "M 0 0.1841 A 0.5 0.1841 0 0 1 1 0.1841 L 1 0.8100 Q 1 0.8300 0.95 0.8400 L 0.18 0.9920 Q 0.08 1.0000 0.02 0.9650 Q 0 0.9400 0 0.9100 Z",
  },
};
