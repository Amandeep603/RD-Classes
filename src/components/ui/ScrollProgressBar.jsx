"use client";

import { useEffect, useRef } from "react";

/**
 * 3px top scroll-progress bar.
 * Yellow linear gradient, transform: scaleX tied to scroll via passive rAF-throttled listener.
 * No layout reads in scroll handler; hidden under reduced motion.
 */
export default function ScrollProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    let maxScroll = 1;
    const updateDimensions = () => {
      maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    };
    updateDimensions();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (barRef.current) {
            const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
            barRef.current.style.transform = `scaleX(${progress})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateDimensions, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none origin-left bg-gradient-to-r from-[#FFD43B] via-[#FFB800] to-[#F5821F] will-change-transform"
      style={{ transform: "scaleX(0)" }}
      aria-hidden="true"
    />
  );
}

