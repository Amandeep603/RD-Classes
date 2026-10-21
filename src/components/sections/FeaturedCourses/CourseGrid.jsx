"use client";

import { useEffect, useMemo } from "react";
import CourseCard from "./CourseCard";
import { useCourseFilter } from "./CourseFilters";

/**
 * Responsive grid of course cards.
 * Subscribes to active filter, filters courses, updates live announcement count,
 * and handles staggered 350ms fade-in re-mount with 70ms stagger.
 * Layout: 3 cols >=1024px, 2 cols 640-1023px, 1 col <640px (max-w 480px).
 * Column gap: 16u, row gap: 24u.
 */
export default function CourseGrid({ courses }) {
  const { activeFilter, setCount } = useCourseFilter();

  const filteredCourses = useMemo(() => {
    if (activeFilter === "all") return courses;
    return courses.filter((c) => c.categories?.includes(activeFilter));
  }, [courses, activeFilter]);

  useEffect(() => {
    setCount(filteredCourses.length);
  }, [filteredCourses.length, setCount]);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-[480px] sm:max-w-none mx-auto items-stretch"
      style={{
        columnGap: "clamp(14px, 1.8vw, calc(var(--su, 1px) * 16))",
        rowGap: "clamp(18px, 2.5vw, calc(var(--su, 1px) * 24))",
      }}
    >
      {filteredCourses.map((course, idx) => (
        <div
          key={`${activeFilter}-${course.id}`}
          className="animate-filter-card h-full flex flex-col"
          style={{ animationDelay: `${idx * 70}ms` }}
        >
          <CourseCard course={course} index={idx} />
        </div>
      ))}
    </div>
  );
}
