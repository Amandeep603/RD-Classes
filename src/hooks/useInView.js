"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useInView hook:
 * Observes a target DOM element after hydration inside useEffect.
 * Toggles data-inview="true" / "false" on ref.current.dataset.
 * Server HTML contains NO data-inview or data-revealed attributes.
 */
export function useInView({
  rootMargin = "50px 0px 50px 0px",
  threshold = [0, 0.05],
} = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            el.dataset.inview = "true";
            el.dataset.revealed = "true";
          } else {
            setIsInView(false);
            el.dataset.inview = "false";
          }
        });
      },
      { rootMargin, threshold }
    );

    const rect = el.getBoundingClientRect();
    const inView = rect.bottom > 0 && rect.top < window.innerHeight;
    setIsInView(inView);
    el.dataset.inview = inView ? "true" : "false";
    if (inView) {
      el.dataset.revealed = "true";
    }

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return [ref, isInView];
}

export default useInView;
