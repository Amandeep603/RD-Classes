"use client";

import { useEffect, useRef } from "react";

/**
 * InViewSection:
 * Drops in for <section>, attaching data-inview and data-revealed to ref.current.dataset
 * strictly inside useEffect AFTER hydration.
 * Server HTML contains no data-inview or data-revealed, completely eliminating hydration mismatches.
 */
export default function InViewSection({
  as: Component = "section",
  children,
  rootMargin = "50px 0px 50px 0px",
  threshold = [0, 0.05],
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.dataset.inview = "true";
            el.dataset.revealed = "true";
          } else {
            el.dataset.inview = "false";
          }
        });
      },
      { rootMargin, threshold }
    );

    const rect = el.getBoundingClientRect();
    const inView = rect.bottom > 0 && rect.top < window.innerHeight;
    el.dataset.inview = inView ? "true" : "false";
    if (inView) {
      el.dataset.revealed = "true";
    }

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
}
