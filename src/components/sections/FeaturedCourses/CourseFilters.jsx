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
 * Filter tabs row for courses section.
 * Supports horizontal snap scrolling on mobile, centered wrapped layout on tablet/desktop.
 * Includes accessible aria-pressed and aria-live status.
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
          className="flex items-center gap-[10px] sm:gap-[14px] lg:gap-[calc(var(--su)*14)] overflow-x-auto sm:overflow-x-visible sm:flex-wrap sm:justify-center px-4 sm:px-0 py-2 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
                className={`shrink-0 snap-center transition-all duration-200 cursor-pointer rounded-full flex items-center justify-center select-none outline-none focus-visible:ring-2 focus-visible:ring-[#FFC21A] focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-[#FFC21A] text-[#0F172A] font-bold shadow-[0_4px_16px_rgba(255,194,26,0.35)]"
                    : "bg-white text-[#1A1A1A] font-semibold border border-[#E9E4D8] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#D6D0C2] hover:-translate-y-0.5"
                }`}
                style={{
                  height: "max(44px, calc(var(--su, 1px) * 46))",
                  paddingLeft: "max(22px, calc(var(--su, 1px) * 34))",
                  paddingRight: "max(22px, calc(var(--su, 1px) * 34))",
                  fontSize: "max(14px, calc(var(--su, 1px) * 17))",
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
