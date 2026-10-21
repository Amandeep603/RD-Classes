"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll Reveal component using IntersectionObserver.
 * Only hides elements after hydration by checking/adding the 'js' class on <html>.
 * Respects prefers-reduced-motion: reduce via CSS rules.
 */
export default function Reveal({
  children,
  className = "",
  index = 0,
  as: Component = "div",
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("js");

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      data-visible={isVisible ? "true" : "false"}
      style={{ "--i": index }}
      className={`reveal-item ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
