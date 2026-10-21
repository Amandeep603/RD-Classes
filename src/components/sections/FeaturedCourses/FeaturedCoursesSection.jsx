import Container from "@/components/layout/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CourseFilters, { CourseFilterProvider } from "./CourseFilters";
import CourseGrid from "./CourseGrid";
import { COURSE_FILTERS } from "@/constants/courseFilters";
import { COURSES } from "@/constants/courses";

/**
 * Section B: Explore Popular Accountancy Courses
 * Features category filter tabs, responsive 3/2/1 card grid, and JSON-LD structured data.
 */
export default function FeaturedCoursesSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: COURSES.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.description,
        provider: {
          "@type": "EducationalOrganization",
          name: "RD Classes",
        },
      },
    })),
  };

  return (
    <section
      id="courses"
      aria-labelledby="featured-courses-heading"
      className="relative w-full bg-[#FDFAF3] text-[#0F172A] pt-[64px] sm:pt-[80px] lg:pt-[calc(var(--su)*72)] pb-[56px] sm:pb-[72px] lg:pb-[calc(var(--su)*88)] px-[20px] sm:px-[32px] lg:px-[calc(var(--su)*80)] scroll-mt-20 overflow-hidden"
      style={{
        "--su": "min(100vw / 1600, 1.1px)",
      }}
    >
      {/* JSON-LD Course Catalog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container className="relative z-10 flex flex-col items-center">
        {/* Header Block: Badge + Heading */}
        <Reveal className="flex flex-col items-center text-center w-full">
          <SectionBadge text="FEATURED BATCHES" />

          <div className="mt-[16px] lg:mt-[calc(var(--su)*24)]">
            <SectionHeading
              id="featured-courses-heading"
              tag="h2"
              plainText="Explore Popular Accountancy"
              highlightText="Courses"
              className="text-center"
            />
          </div>
        </Reveal>

        {/* Filter Tabs + Course Grid with Client Context */}
        <CourseFilterProvider initialFilter="all" initialCount={COURSES.length}>
          {/* Filter Tabs */}
          <div className="w-full mt-[24px] lg:mt-[calc(var(--su)*40)]">
            <Reveal delay={120} className="w-full">
              <CourseFilters filters={COURSE_FILTERS} />
            </Reveal>
          </div>

          {/* Cards Grid */}
          <div className="w-full mt-[28px] lg:mt-[calc(var(--su)*52)]">
            <Reveal delay={200} className="w-full">
              <CourseGrid courses={COURSES} />
            </Reveal>
          </div>
        </CourseFilterProvider>
      </Container>
    </section>
  );
}
