"use client";

import { useEffect, useMemo } from "react";
import CourseCard from "./CourseCard";
import { useCourseFilter } from "./CourseFilters";

/**
 * Responsive grid of course cards.
 * Subscribes to active filter, filters courses, updates live announcement count,
 * and handles staggered 350ms fade-in re-mount.
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px] lg:gap-[calc(var(--su)*24)] w-full max-w-[480px] sm:max-w-none mx-auto items-stretch">
      {filteredCourses.map((course, idx) => (
        <div
          key={`${activeFilter}-${course.id}`}
          className="animate-filter-card h-full flex flex-col"
          style={{ animationDelay: `${idx * 45}ms` }}
        >
          <CourseCard course={course} index={idx} />
        </div>
      ))}
    </div>
  );
}
