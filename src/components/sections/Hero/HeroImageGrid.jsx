import { HERO_STUDENTS } from "@/constants/heroStudents";
import ArchPhoto from "./ArchPhoto";

/**
 * Unified ArchCluster component (single source of truth for ALL screen sizes).
 * - Container aspect-ratio: 653 / 815 (measured reference cluster box x885-1538, y85-900)
 * - 5 arches positioned absolutely with exact percent left/top/width/height of that box
 * - Desktop: height = hero height minus header minus ~2% gap, width follows aspect ratio
 * - Mobile (<1024px): width = min(100% - 40px, 440px), centered, with soft 40px fade-to-background at bottom
 */
export default function HeroImageGrid({ isDesktop = false, className = "", style = {} }) {
  const studentA = HERO_STUDENTS.find((s) => s.cardKey === "A");
  const studentB = HERO_STUDENTS.find((s) => s.cardKey === "B");
  const studentC = HERO_STUDENTS.find((s) => s.cardKey === "C");
  const studentD = HERO_STUDENTS.find((s) => s.cardKey === "D");
  const studentE = HERO_STUDENTS.find((s) => s.cardKey === "E");

  return (
    <div
      className={`relative select-none ${className}`}
      style={{
        aspectRatio: "653 / 815",
        ...style,
      }}
      aria-label="Student showcase gallery"
    >
      {/* 1. Arch A (Col 1 Top, Sky Blue) */}
      <div
        className="absolute animate-hero-fade [animation-delay:100ms]"
        style={{
          left: "0.15%",
          top: "6.75%",
          width: "30.32%",
          height: "63.19%",
        }}
      >
        <div className="w-full h-full animate-arch-float" style={{ animationDelay: "0s" }}>
          <ArchPhoto student={studentA} />
        </div>
      </div>

      {/* 2. Arch B (Col 1 Bottom, Orange, cut by bottom edge) */}
      {studentB && (
        <div
          className="absolute animate-hero-fade [animation-delay:100ms]"
          style={{
            left: "0.31%",
            top: "69.57%",
            width: "30.32%",
            height: "41.72%",
          }}
        >
          <div className="w-full h-full animate-arch-float" style={{ animationDelay: "1.5s" }}>
            <ArchPhoto student={studentB} />
          </div>
        </div>
      )}

      {/* 3. Arch C (Col 2 Top, Yellow, starts highest) */}
      <div
        className="absolute animate-hero-fade [animation-delay:200ms]"
        style={{
          left: "33.69%",
          top: "0%",
          width: "31.09%",
          height: "48.83%",
        }}
      >
        <div className="w-full h-full animate-arch-float" style={{ animationDelay: "3s" }}>
          <ArchPhoto student={studentC} />
        </div>
      </div>

      {/* 4. Arch D (Col 2 Bottom, Teal, cut by bottom edge) */}
      {studentD && (
        <div
          className="absolute animate-hero-fade [animation-delay:200ms]"
          style={{
            left: "33.99%",
            top: "50.92%",
            width: "31.09%",
            height: "46.63%",
          }}
        >
          <div className="w-full h-full animate-arch-float" style={{ animationDelay: "4.5s" }}>
            <ArchPhoto student={studentD} />
          </div>
        </div>
      )}

      {/* 5. Arch E (Col 3, Orange Slanted) */}
      <div
        className="absolute animate-hero-fade [animation-delay:300ms]"
        style={{
          left: "68.30%",
          top: "6.38%",
          width: "31.70%",
          height: "66.38%",
        }}
      >
        <div className="w-full h-full animate-arch-float" style={{ animationDelay: "6s" }}>
          <ArchPhoto student={studentE} isSlanted={true} />
        </div>
      </div>

      {/* Mobile/Tablet Soft 40px Fade Gradient at Bottom Edge */}
      {!isDesktop && (
        <div
          className="lg:hidden absolute inset-x-0 bottom-0 h-[40px] bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
