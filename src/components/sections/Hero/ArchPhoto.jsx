"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";

/**
 * ArchPhoto component representing an individual student card.
 * - Solid arch container matching sampled background color.
 * - Top radii = semicircular (radius = width/2 via 9999px) at every breakpoint.
 * - For Card E (slanted): CSS polygon clip-path for slanted bottom-right corner while keeping rounded top.
 * - Photo fills card with object-fit: cover, scaled 1.06 to guarantee no border lines.
 * - Hover scale 1.03 on desktop.
 */
export default function ArchPhoto({
  student,
  isSlanted = false,
  className = "",
  style = {},
}) {
  const [hasError, setHasError] = useState(false);
  const isTopAnchor = student.anchor === "top";

  return (
    <div
      style={{
        backgroundColor: student.bg,
        borderTopLeftRadius: "9999px",
        borderTopRightRadius: "9999px",
        borderBottomLeftRadius: isSlanted ? "0" : "9999px",
        borderBottomRightRadius: isSlanted ? "0" : "9999px",
        ...(isSlanted
          ? { clipPath: "polygon(0 0, 100% 0, 100% 82%, 35% 100%, 0 95%)" }
          : {}),
        ...style,
      }}
      className={`relative w-full h-full overflow-hidden lg:hover:scale-[1.03] transition-transform duration-300 ${className}`}
    >
      {!hasError && student.src ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src={student.src}
            alt={student.alt}
            fill
            priority
            onError={() => setHasError(true)}
            sizes="(max-width: 640px) 30vw, (max-width: 1024px) 160px, 220px"
            className={`w-full h-full object-cover ${
              isTopAnchor ? "object-top" : "object-bottom"
            } select-none pointer-events-none scale-[1.06]`}
          />
        </div>
      ) : (
        /* Graceful Fallback if image fails */
        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-black/40">
          <GraduationCap className="w-12 h-12 mb-2 opacity-60" />
          <span className="text-xs font-semibold text-center uppercase tracking-wider text-black/50">
            RD Classes
          </span>
        </div>
      )}
    </div>
  );
}
