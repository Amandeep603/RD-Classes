"use client";

import { createContext, useContext, useState, useRef } from "react";

const CourseFilterContext = createContext({
  activeFilter: "all",
  setActiveFilter: () => {},
  count: 6,
  setCount: () => {},
});

export function CourseFilterProvider({ children, initialFilter = "all", initialCount = 6 }) {
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [count, setCount] = useState(initialCount);

  return (
    <CourseFilterContext.Provider value={{ activeFilter, setActiveFilter, count, setCount }}>
      {children}
    </CourseFilterContext.Provider>
  );
}

export function useCourseFilter() {
  return useContext(CourseFilterContext);
}

/**
 * Filter tabs row for Section B: Featured Batches.
 * Exact visual replica: 46u high, padding-x 34u, gap 12u, font 16u / 600 (active 700).
 * Active: bg #FFC21A, text #0F172A, shadow 0 8px 20px -8px rgba(255,194,26,.7).
 * Inactive: #FFFFFF, border 1px #EBE6D8, shadow 0 2px 6px rgba(15,23,42,.05), hover border #FFC21A.
 */
export default function CourseFilters({ filters }) {
  const { activeFilter, setActiveFilter, count } = useCourseFilter();
  const containerRef = useRef(null);

  const handleTabClick = (key, event) => {
    setActiveFilter(key);
    if (event?.currentTarget && containerRef.current) {
      event.currentTarget.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Screen reader live region for filter announcements */}
      <div className="sr-only" aria-live="polite" role="status">
        Showing {count} {count === 1 ? "course" : "courses"}
      </div>

      {/* Tabs Container */}
      <div className="w-full max-w-full overflow-hidden relative">
        <div
          ref={containerRef}
          role="tablist"
          aria-label="Course batch filters"
          className="flex items-center overflow-x-auto sm:overflow-x-visible sm:flex-wrap sm:justify-center px-4 sm:px-0 py-2 no-scrollbar snap-x snap-mandatory"
          style={{
            gap: "clamp(8px, 1.5vw, calc(var(--su, 1px) * 12))",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={(e) => handleTabClick(filter.key, e)}
                className={`shrink-0 snap-center transition-all duration-200 cursor-pointer rounded-full flex items-center justify-center select-none outline-none focus-visible:ring-2 focus-visible:ring-[#FFC21A] focus-visible:ring-offset-2 whitespace-nowrap ${
                  isActive
                    ? "bg-[#FFC21A] text-[#0F172A] font-bold shadow-[0_8px_20px_-8px_rgba(255,194,26,0.7)]"
                    : "bg-white text-[#1A1A1A] font-semibold border border-[#EBE6D8] shadow-[0_2px_6px_rgba(15,23,42,0.05)] hover:border-[#FFC21A] hover:-translate-y-0.5"
                }`}
                style={{
                  height: "max(44px, calc(var(--su, 1px) * 46))",
                  paddingLeft: "clamp(18px, 2.5vw, calc(var(--su, 1px) * 34))",
                  paddingRight: "clamp(18px, 2.5vw, calc(var(--su, 1px) * 34))",
                  fontSize: isActive ? "max(14px, calc(var(--su, 1px) * 17.2))" : "max(14px, calc(var(--su, 1px) * 16.7))",
                }}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
