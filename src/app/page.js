import Hero from "@/components/sections/Hero/Hero";
import ProgramsSection from "@/components/sections/Programs/ProgramsSection";

/**
 * RD Classes Home page.
 * - Hero section (pixel replica with capped scaling)
 * - Explore Popular Programs section (sits directly below hero)
 */
export default function Home() {
  return (
    <main className="w-full overflow-x-clip">
      <Hero />
      <ProgramsSection />
    </main>
  );
}
