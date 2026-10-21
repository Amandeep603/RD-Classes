import { HERO_STUDENTS } from "@/constants/heroStudents";
import ArchPhoto from "./ArchPhoto";

/**
 * Right column Arch-shaped image cards cluster for Hero section.
 * Implements exact measured 3-column staggered layout from the 1600x900 reference canvas.
 * - Column 1: Arch A (Sky Blue) + Arch B (Orange, cut by bottom edge)
 * - Column 2: Arch C (Yellow, starts highest) + Arch D (Teal, cut by bottom edge)
 * - Column 3: Arch E (Orange, tall with slanted bottom corner)
 * - Floating loop animation with staggered entrance
 * - Scaled dynamically via --u token with right padding = 3.9vw
 * - Mobile (<1024px): Scaled to fill width with 10px gaps and soft fade at bottom edge
 */
export default function HeroImageGrid() {
  const col1Students = HERO_STUDENTS.filter((s) => s.column === 1);
  const col2Students = HERO_STUDENTS.filter((s) => s.column === 2);
  const col3Students = HERO_STUDENTS.filter((s) => s.column === 3);

  return (
    <div
      className="relative flex items-start justify-center lg:justify-end gap-[10px] w-[calc(100%-32px)] sm:w-[500px] lg:w-auto h-full overflow-hidden select-none"
      style={{
        gap: "calc(var(--u) * 22)",
      }}
      aria-label="Student showcase gallery"
    >
      {/* Column 1: Starts at y=140px in reference (offset from top ~140u) */}
      <div
        className="flex flex-col gap-[10px] w-[calc((100%-20px)/3)] pt-[clamp(28px,5svh,44px)] shrink-0 animate-hero-fade [animation-delay:100ms]"
        style={{
          width: "calc(var(--u) * 198)",
          paddingTop: "calc(var(--u) * 140)",
          gap: "calc(var(--u) * 20)",
        }}
      >
        {/* Arch A: Sky Blue */}
        <div
          className="relative w-full h-[clamp(140px,22svh,190px)] animate-arch-float"
          style={{
            height: "calc(var(--u) * 515)",
            animationDelay: col1Students[0]?.floatDelay,
          }}
        >
          <ArchPhoto student={col1Students[0]} />
        </div>

        {/* Arch B: Orange (bottom edge cropped) */}
        {col1Students[1] && (
          <div
            className="relative w-full h-[clamp(90px,14svh,130px)] animate-arch-float"
            style={{
              height: "calc(var(--u) * 340)",
              animationDelay: col1Students[1]?.floatDelay,
            }}
          >
            <ArchPhoto student={col1Students[1]} />
          </div>
        )}
      </div>

      {/* Column 2: Starts highest at y=85px in reference (offset ~85u) */}
      <div
        className="flex flex-col gap-[10px] w-[calc((100%-20px)/3)] pt-0 shrink-0 animate-hero-fade [animation-delay:200ms]"
        style={{
          width: "calc(var(--u) * 203)",
          paddingTop: "calc(var(--u) * 85)",
          gap: "calc(var(--u) * 17)",
        }}
      >
        {/* Arch C: Yellow */}
        <div
          className="relative w-full h-[clamp(120px,19svh,165px)] animate-arch-float"
          style={{
            height: "calc(var(--u) * 398)",
            animationDelay: col2Students[0]?.floatDelay,
          }}
        >
          <ArchPhoto student={col2Students[0]} />
        </div>

        {/* Arch D: Teal (bottom edge cropped) */}
        {col2Students[1] && (
          <div
            className="relative w-full h-[clamp(100px,16svh,140px)] animate-arch-float"
            style={{
              height: "calc(var(--u) * 380)",
              animationDelay: col2Students[1]?.floatDelay,
            }}
          >
            <ArchPhoto student={col2Students[1]} />
          </div>
        )}
      </div>

      {/* Column 3: Starts at y=137px in reference (offset ~137u) */}
      <div
        className="flex flex-col gap-[10px] w-[calc((100%-20px)/3)] pt-[clamp(16px,3svh,30px)] shrink-0 animate-hero-fade [animation-delay:300ms]"
        style={{
          width: "calc(var(--u) * 207)",
          paddingTop: "calc(var(--u) * 137)",
          gap: "calc(var(--u) * 20)",
        }}
      >
        {/* Arch E: Orange (slanted bottom corner) */}
        <div
          className="relative w-full h-[clamp(145px,24svh,200px)] animate-arch-float"
          style={{
            height: "calc(var(--u) * 541)",
            animationDelay: col3Students[0]?.floatDelay,
          }}
        >
          <ArchPhoto student={col3Students[0]} isSlanted={true} />
        </div>
      </div>

      {/* Mobile/Tablet Soft Fade Gradient at Bottom Edge */}
      <div
        className="lg:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />
    </div>
  );
}
