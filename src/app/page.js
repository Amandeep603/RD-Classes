import Hero from "@/components/sections/Hero/Hero";
import ProgramsSection from "@/components/sections/Programs/ProgramsSection";
import FeaturedCoursesSection from "@/components/sections/FeaturedCourses/FeaturedCoursesSection";
import StatsSection from "@/components/sections/Stats/StatsSection";
import LightFlow from "@/components/ui/LightFlow";
import HowItWorksSection from "@/components/sections/HowItWorks/HowItWorksSection";
import SyllabusSection from "@/components/sections/Syllabus/SyllabusSection";
import PortalSection from "@/components/sections/Portal/PortalSection";

/**
 * RD Classes Home page.
 * Order: Hero -> Continuous Cream Wrapper (Section A Programs + Section B Featured Courses) -> Section C (Stats Band) -> LightFlow (Section D How It Works + Section E Syllabus + Section F Student Portal)
 */
export default function Home() {
  return (
    <main className="w-full overflow-x-clip">
      <Hero />

      {/* Continuous Cream Panel rising over dark hero */}
      <div
        className="relative z-20 w-full rounded-t-[clamp(24px,2.5vw,40px)] shadow-[0_-12px_36px_rgba(0,0,0,0.18)]"
        style={{
          backgroundColor: "var(--bg-cream-panel, #F7F0E0)",
          "--su": "min(100vw / 1600, 1px)",
        }}
      >
        <ProgramsSection />
        <FeaturedCoursesSection />
      </div>

      <StatsSection />

      {/* Continuous light background wrapper for Sections D, E, and F */}
      <LightFlow>
        <HowItWorksSection />
        <SyllabusSection />
        <PortalSection />
      </LightFlow>
    </main>
  );
}

