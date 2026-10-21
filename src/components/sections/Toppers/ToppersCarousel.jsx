"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import TopperCard from "./TopperCard";

export default function ToppersCarousel({
  toppers,
  activeIndex,
  onChangeActive,
}) {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const pointerStartRef = useRef(null);

  const n = toppers.length;

  // Media query & intersection observer for hydration safe behaviour
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });

    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onChangeActive((activeIndex - 1 + n) % n);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onChangeActive((activeIndex + 1) % n);
      }
    },
    [activeIndex, n, onChangeActive]
  );

  // Autoplay on desktop pointer:fine when in view, not hovered, reduced-motion: no
  useEffect(() => {
    if (isMobile || isHovered || !isIntersecting) return;
    const mediaFine = window.matchMedia("(pointer: fine)").matches;
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!mediaFine || prefersReduce) return;

    const interval = setInterval(() => {
      onChangeActive((prev) => (prev + 1) % n);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, isHovered, isIntersecting, n, onChangeActive]);

  // Pointer swipe handling
  const handlePointerDown = (e) => {
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e) => {
    if (!pointerStartRef.current) return;
    const dx = e.clientX - pointerStartRef.current.x;
    const dy = e.clientY - pointerStartRef.current.y;
    pointerStartRef.current = null;

    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) {
        onChangeActive((activeIndex + 1) % n);
      } else {
        onChangeActive((activeIndex - 1 + n) % n);
      }
    }
  };

  // Compute transform & styles for each card index
  const getSlotStyle = (i) => {
    // Normalised offset around active
    const half = Math.floor(n / 2);
    const offset = (((i - activeIndex + half) % n) + n) % n - half;

    if (isMobile) {
      if (offset === 0) {
        return {
          transform: "translate3d(0, 0, 0) scale(1)",
          zIndex: 30,
          opacity: 1,
          pointerEvents: "auto",
        };
      } else if (offset === -1) {
        return {
          transform: "translate3d(-62%, 18px, 0) scale(0.78)",
          zIndex: 20,
          opacity: 0.6,
          pointerEvents: "auto",
        };
      } else if (offset === 1) {
        return {
          transform: "translate3d(62%, 18px, 0) scale(0.78)",
          zIndex: 20,
          opacity: 0.6,
          pointerEvents: "auto",
        };
      } else {
        return {
          transform: `translate3d(${offset < 0 ? -120 : 120}%, 24px, 0) scale(0.7)`,
          zIndex: 10,
          opacity: 0,
          pointerEvents: "none",
        };
      }
    }

    // Desktop slot configs
    switch (offset) {
      case 0:
        return {
          transform: "translate3d(0, 0, 0) scale(1)",
          zIndex: 30,
          opacity: 1,
          pointerEvents: "auto",
        };
      case -1:
        return {
          transform:
            "translate3d(calc(var(--su, 1px) * -313), calc(var(--su, 1px) * 31.5), 0) scale(0.836)",
          zIndex: 20,
          opacity: 0.95,
          pointerEvents: "auto",
        };
      case 1:
        return {
          transform:
            "translate3d(calc(var(--su, 1px) * 315), calc(var(--su, 1px) * 31.5), 0) scale(0.84)",
          zIndex: 20,
          opacity: 0.95,
          pointerEvents: "auto",
        };
      case -2:
        return {
          transform:
            "translate3d(calc(var(--su, 1px) * -587), calc(var(--su, 1px) * 40), 0) scale(0.767)",
          zIndex: 10,
          opacity: 0.88,
          pointerEvents: "auto",
        };
      case 2:
        return {
          transform:
            "translate3d(calc(var(--su, 1px) * 589), calc(var(--su, 1px) * 40), 0) scale(0.77)",
          zIndex: 10,
          opacity: 0.88,
          pointerEvents: "auto",
        };
      default:
        return {
          transform: `translate3d(${offset < 0 ? "-700px" : "700px"}, 40px, 0) scale(0.7)`,
          zIndex: 5,
          opacity: 0,
          pointerEvents: "none",
        };
    }
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Board Toppers Carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-[1421px] lg:max-w-[calc(var(--su,1px)*1421)] mx-auto flex items-center justify-center touch-pan-y outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A1F] rounded-2xl"
      style={{
        height: "clamp(380px, 45vw, calc(var(--su, 1px) * 440))",
      }}
    >
      {toppers.map((topper, i) => {
        const slotStyle = getSlotStyle(i);
        const isFeatured = i === activeIndex;

        return (
          <div
            key={topper.id}
            data-featured={isFeatured ? "true" : undefined}
            onClick={() => {
              if (!isFeatured) onChangeActive(i);
            }}
            className="absolute top-0 transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] [will-change:transform]"
            style={{
              width: "clamp(240px, 72vw, calc(var(--su, 1px) * 318))",
              height: "clamp(320px, 98vw, calc(var(--su, 1px) * 428))",
              ...slotStyle,
            }}
          >
            <TopperCard
              topper={topper}
              isFeatured={isFeatured}
              onClick={() => {
                if (!isFeatured) onChangeActive(i);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
