"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Client animation wrapper for the Programs section.
 * - Progressive enhancement: Content is visible by default (server-rendered).
 * - After hydration, applies IntersectionObserver to trigger smooth staggered fade-up.
 * - Automatically respects prefers-reduced-motion.
 */
export default function ProgramsRevealWrapper({ children, className = "" }) {
  const domRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const el = domRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`${className} ${
        isVisible ? "programs-revealed" : "programs-init"
      }`}
    >
      {children}
    </div>
  );
}
