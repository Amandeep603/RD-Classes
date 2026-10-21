import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CourseFilters, { CourseFilterProvider } from "./CourseFilters";
import CourseGrid from "./CourseGrid";
import { COURSE_FILTERS } from "@/constants/courseFilters";
import { COURSES } from "@/constants/courses";

/**
 * Section B: Explore Popular Accountancy Courses
 * id="courses"
 * Seamless cream background.
 * Desktop: Padding top 72u, bottom 88u. Container padding-inline 70u.
 * Badge: "FEATURED BATCHES"
 * H2: "Explore Popular Accountancy Courses" (54u, highlighted Courses)
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
      className="relative w-full overflow-hidden scroll-mt-20 text-[#0F172A]"
      style={{
        paddingTop: "clamp(56px, 6vw, calc(var(--su, 1px) * 72))",
        paddingBottom: "clamp(56px, 7vw, calc(var(--su, 1px) * 88))",
      }}
    >
      {/* JSON-LD Course Catalog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        className="w-full max-w-[1600px] lg:max-w-[calc(var(--su,1px)*1600)] mx-auto flex flex-col items-center"
        style={{
          paddingLeft: "clamp(20px, 4.5vw, calc(var(--su, 1px) * 70))",
          paddingRight: "clamp(20px, 4.5vw, calc(var(--su, 1px) * 70))",
        }}
      >
        {/* Header Block: Badge "FEATURED BATCHES" + Heading "Explore Popular Accountancy Courses" */}
        <Reveal className="flex flex-col items-center text-center w-full">
          <SectionBadge text="FEATURED BATCHES" />

          {/* Gap badge -> H2: 16u */}
          <div
            className="w-full"
            style={{
              marginTop: "clamp(12px, 2vw, calc(var(--su, 1px) * 16))",
            }}
          >
            <SectionHeading
              id="featured-courses-heading"
              text="Explore Popular Accountancy"
              highlight="Courses"
              fontSize={56.5}
            />
          </div>
        </Reveal>

        {/* Filter Tabs + Course Grid with Client Context */}
        <CourseFilterProvider initialFilter="all" initialCount={COURSES.length}>
          {/* Filter Tabs: Gap H2 -> tabs: 34u */}
          <div
            className="w-full"
            style={{
              marginTop: "clamp(20px, 3vw, calc(var(--su, 1px) * 34))",
            }}
          >
            <Reveal delay={120} className="w-full">
              <CourseFilters filters={COURSE_FILTERS} />
            </Reveal>
          </div>

          {/* Cards Grid: Gap tabs -> grid: 32u */}
          <div
            className="w-full"
            style={{
              marginTop: "clamp(20px, 3vw, calc(var(--su, 1px) * 32))",
            }}
          >
            <Reveal delay={200} className="w-full">
              <CourseGrid courses={COURSES} />
            </Reveal>
          </div>
        </CourseFilterProvider>
      </div>
    </section>
  );
}
