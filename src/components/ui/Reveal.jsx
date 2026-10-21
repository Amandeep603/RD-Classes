"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll Reveal component using IntersectionObserver.
 * Only hides elements after hydration by checking/adding data-js on <html>.
 * When data-motion="full", animates with 700ms cubic-bezier(.22,1,.36,1).
 * When data-motion="reduce", fades in with 200ms opacity.
 */
export default function Reveal({
  children,
  className = "",
  index = 0,
  delay,
  as: Component = "div",
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.js = "1";

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

  const transitionDelay = delay !== undefined ? `${delay}ms` : `calc(var(--i, 0) * 90ms)`;

  return (
    <Component
      ref={ref}
      data-reveal="true"
      data-visible={isVisible ? "true" : "false"}
      style={{
        "--i": index,
        transitionDelay: isVisible ? transitionDelay : "0ms",
      }}
      className={`reveal-item ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
