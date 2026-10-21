import Hero from "@/components/sections/Hero/Hero";
import ProgramsSection from "@/components/sections/Programs/ProgramsSection";
import FeaturedCoursesSection from "@/components/sections/FeaturedCourses/FeaturedCoursesSection";
import StatsSection from "@/components/sections/Stats/StatsSection";

/**
 * RD Classes Home page.
 * Order: Hero -> Section A (Programs) -> Section B (Featured Courses) -> Section C (Stats Band)
 */
export default function Home() {
  return (
    <main className="w-full overflow-x-clip">
      <Hero />
      <ProgramsSection />
      <FeaturedCoursesSection />
      <StatsSection />
    </main>
  );
}
