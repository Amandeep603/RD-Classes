"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function GalleryStrip({ items, stripRef, onScrollStateChange }) {
  const [isInView, setIsInView] = useState(false);
  const rafIdRef = useRef(null);

  // Compute 3D cylinder rotation --ry for each card
  const updateCardRotations = useCallback(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const stripRect = strip.getBoundingClientRect();
    const centerX = stripRect.left + stripRect.width / 2;
    const maxDeg = window.innerWidth < 768 ? 7 : 14;

    const cards = strip.children;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;

      // Distance normalized from -1 to 1 across viewport
      const dist = (cardCenter - centerX) / (stripRect.width / 2);
      const clampedDist = Math.max(-1.2, Math.min(1.2, dist));

      // Signed so that outer edges are taller (closer)
      // Positive dist (right) -> positive rotation (right edge closer)
      // Negative dist (left) -> negative rotation (left edge closer)
      const ry = clampedDist * maxDeg;
      card.style.setProperty("--ry", ry.toFixed(2));
    }

    // Report scroll bounds for arrow disabled state
    if (onScrollStateChange) {
      const atStart = strip.scrollLeft <= 10;
      const atEnd =
        strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 10;
      onScrollStateChange({ atStart, atEnd });
    }
  }, [stripRef, onScrollStateChange]);

  // Throttled scroll listener running only when strip is in view
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(strip);

    const onScrollOrResize = () => {
      if (!isInView) return;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(updateCardRotations);
    };

    strip.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    // Initial calculation
    updateCardRotations();

    return () => {
      observer.disconnect();
      strip.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isInView, stripRef, updateCardRotations]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    const strip = stripRef.current;
    if (!strip) return;
    const cardW = strip.firstElementChild?.clientWidth || 200;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      strip.scrollBy({ left: -(cardW * 2), behavior: "smooth" });
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      strip.scrollBy({ left: cardW * 2, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={stripRef}
      tabIndex={0}
      role="region"
      aria-label="Classroom and celebration gallery photos"
      onKeyDown={handleKeyDown}
      className="w-full flex items-center overflow-x-auto snap-x snap-proximity scroll-smooth no-scrollbar outline-none focus-visible:ring-2 focus-visible:ring-[#0F6A8F] [perspective:1200px]"
      style={{
        gap: "clamp(8px, 1.2vw, calc(var(--su, 1px) * 12))",
        paddingTop: "24px",
        paddingBottom: "44px",
        marginTop: "-24px",
        marginBottom: "-44px",
        paddingInline: "clamp(16px, 2.5vw, calc(var(--su, 1px) * 30))",
        scrollPaddingInline: "clamp(16px, 2.5vw, calc(var(--su, 1px) * 30))",
      }}
    >
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="snap-center shrink-0 rounded-[18px] overflow-hidden relative shadow-md transition-transform duration-300 hover:scale-[1.04] group [transform-origin:center] [will-change:transform]"
          style={{
            width: "clamp(140px, 42vw, calc(var(--su, 1px) * 188))",
            height: "clamp(240px, 70vw, calc(var(--su, 1px) * 320))",
            transform: "perspective(1200px) rotateY(calc(var(--ry, 0) * 1deg))",
            border: "1px solid rgba(15, 23, 42, 0.08)",
          }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 160px, (max-width: 1024px) 180px, 240px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Subtle gradient vignette */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none"
            aria-hidden="true"
          />

          {/* Accessible image alt text for screen readers */}
          <span className="sr-only">{item.alt}</span>
        </div>
      ))}
    </div>
  );
}
