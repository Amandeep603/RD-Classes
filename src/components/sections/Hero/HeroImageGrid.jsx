import { HERO_STUDENTS } from "@/constants/heroStudents";
import ArchPhoto from "./ArchPhoto";

/**
 * HeroImageGrid component for RD Classes Hero section.
 * - Desktop: Aspect-ratio 653/815, arches positioned with exact gaps (>=18u between A & B, C & D).
 * - Mobile: Aspect-ratio 440/460, 3 columns with 10px gap, all 5 arches fully visible with rounded bottoms.
 * - Staggered entrance animation (0.1s stagger) + continuous floating loop (6-9s).
 */
export default function HeroImageGrid({ isDesktop = false, className = "", style = {} }) {
  const studentA = HERO_STUDENTS.find((s) => s.cardKey === "A");
  const studentB = HERO_STUDENTS.find((s) => s.cardKey === "B");
  const studentC = HERO_STUDENTS.find((s) => s.cardKey === "C");
  const studentD = HERO_STUDENTS.find((s) => s.cardKey === "D");
  const studentE = HERO_STUDENTS.find((s) => s.cardKey === "E");

  if (isDesktop) {
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
          className="absolute animate-arch-card [animation-delay:0s]"
          style={{
            left: "0.15%",
            top: "6.75%",
            width: "30.32%",
            height: "63.19%",
          }}
        >
          <div className="w-full h-full animate-arch-float-desktop" style={{ animationDelay: "0s", animationDuration: "7s" }}>
            <ArchPhoto student={studentA} />
          </div>
        </div>

        {/* 2. Arch B (Col 1 Bottom, Orange, gap >= 18u below A) */}
        {studentB && (
          <div
            className="absolute animate-arch-card [animation-delay:0.1s]"
            style={{
              left: "0.15%",
              top: "73%",
              width: "30.32%",
              height: "42%",
            }}
          >
            <div className="w-full h-full animate-arch-float-desktop" style={{ animationDelay: "1.5s", animationDuration: "8.5s" }}>
              <ArchPhoto student={studentB} />
            </div>
          </div>
        )}

        {/* 3. Arch C (Col 2 Top, Yellow, starts highest) */}
        <div
          className="absolute animate-arch-card [animation-delay:0.2s]"
          style={{
            left: "33.69%",
            top: "0%",
            width: "31.09%",
            height: "48.83%",
          }}
        >
          <div className="w-full h-full animate-arch-float-desktop" style={{ animationDelay: "3s", animationDuration: "6.5s" }}>
            <ArchPhoto student={studentC} />
          </div>
        </div>

        {/* 4. Arch D (Col 2 Bottom, Teal, gap >= 18u below C) */}
        {studentD && (
          <div
            className="absolute animate-arch-card [animation-delay:0.3s]"
            style={{
              left: "33.69%",
              top: "52%",
              width: "31.09%",
              height: "46%",
            }}
          >
            <div className="w-full h-full animate-arch-float-desktop" style={{ animationDelay: "4.5s", animationDuration: "9s" }}>
              <ArchPhoto student={studentD} />
            </div>
          </div>
        )}

        {/* 5. Arch E (Col 3, Orange Slanted) */}
        <div
          className="absolute animate-arch-card [animation-delay:0.4s]"
          style={{
            left: "68.30%",
            top: "6.38%",
            width: "31.70%",
            height: "66.38%",
          }}
        >
          <div className="w-full h-full animate-arch-float-desktop" style={{ animationDelay: "2s", animationDuration: "7.5s" }}>
            <ArchPhoto student={studentE} isSlanted={true} />
          </div>
        </div>
      </div>
    );
  }

  // Mobile / Tablet Cluster Layout (<1024px): All 5 arches fully visible
  return (
    <div
      className={`relative select-none w-full max-w-[440px] ${className}`}
      style={{
        aspectRatio: "440 / 460",
        ...style,
      }}
      aria-label="Student showcase gallery"
    >
      {/* Column 1: Arch A (Top 62%) */}
      <div
        className="absolute animate-arch-card [animation-delay:0s]"
        style={{
          left: "0%",
          top: "0%",
          width: "calc((100% - 20px) / 3)",
          height: "62%",
        }}
      >
        <div className="w-full h-full animate-arch-float-mobile" style={{ animationDelay: "0s", animationDuration: "7s" }}>
          <ArchPhoto student={studentA} />
        </div>
      </div>

      {/* Column 1: Arch B (Bottom 33%, starts 66%) */}
      {studentB && (
        <div
          className="absolute animate-arch-card [animation-delay:0.1s]"
          style={{
            left: "0%",
            top: "66%",
            width: "calc((100% - 20px) / 3)",
            height: "33%",
          }}
        >
          <div className="w-full h-full animate-arch-float-mobile" style={{ animationDelay: "1.5s", animationDuration: "8.5s" }}>
            <ArchPhoto student={studentB} />
          </div>
        </div>
      )}

      {/* Column 2: Arch C (Top 52%) */}
      <div
        className="absolute animate-arch-card [animation-delay:0.2s]"
        style={{
          left: "calc((100% - 20px) / 3 + 10px)",
          top: "0%",
          width: "calc((100% - 20px) / 3)",
          height: "52%",
        }}
      >
        <div className="w-full h-full animate-arch-float-mobile" style={{ animationDelay: "3s", animationDuration: "6.5s" }}>
          <ArchPhoto student={studentC} />
        </div>
      </div>

      {/* Column 2: Arch D (Bottom 40%, starts 58%) */}
      {studentD && (
        <div
          className="absolute animate-arch-card [animation-delay:0.3s]"
          style={{
            left: "calc((100% - 20px) / 3 + 10px)",
            top: "58%",
            width: "calc((100% - 20px) / 3)",
            height: "40%",
          }}
        >
          <div className="w-full h-full animate-arch-float-mobile" style={{ animationDelay: "4.5s", animationDuration: "9s" }}>
            <ArchPhoto student={studentD} />
          </div>
        </div>
      )}

      {/* Column 3: Arch E (Top 60%, slanted bottom kept) */}
      <div
        className="absolute animate-arch-card [animation-delay:0.4s]"
        style={{
          left: "calc(((100% - 20px) / 3 + 10px) * 2)",
          top: "0%",
          width: "calc((100% - 20px) / 3)",
          height: "60%",
        }}
      >
        <div className="w-full h-full animate-arch-float-mobile" style={{ animationDelay: "2s", animationDuration: "7.5s" }}>
          <ArchPhoto student={studentE} isSlanted={true} />
        </div>
      </div>
    </div>
  );
}
