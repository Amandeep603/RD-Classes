import Image from "next/image";
import { useState } from "react";

/**
 * Faculty Chip component for CourseCard.
 * Displays faculty avatar with a 2u ring linear-gradient(135deg,#FFC21A,#F97316),
 * name 15.5u / 700 #0F172A (Anchor 97u), role 12.5u / #6B7280 (Anchor 169u).
 */
export default function FacultyChip({ faculty }) {
  const [hasImgError, setHasImgError] = useState(false);

  return (
    <div className="flex items-center select-none" style={{ gap: "clamp(10px, 2.5cqw, calc(var(--su, 1px) * 12))" }}>
      {/* 46u Avatar with 2u gradient ring */}
      <div
        className="relative rounded-full p-[2px] shrink-0"
        style={{
          background: "linear-gradient(135deg, #FFC21A, #F97316)",
          width: "clamp(38px, 9.6cqw, calc(var(--su, 1px) * 46))",
          height: "clamp(38px, 9.6cqw, calc(var(--su, 1px) * 46))",
        }}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden bg-[#FFF3C7] flex items-center justify-center">
          {!hasImgError && faculty?.avatar ? (
            <Image
              src={faculty.avatar}
              alt={faculty.name}
              fill
              sizes="46px"
              className="object-cover"
              onError={() => setHasImgError(true)}
            />
          ) : (
            <span
              className="font-extrabold text-[#B45309]"
              style={{ fontSize: "clamp(12px, 3.2cqw, calc(var(--su, 1px) * 15))" }}
            >
              RD
            </span>
          )}
        </div>
      </div>

      {/* Name and Role */}
      <div className="flex flex-col">
        <span
          className="font-bold text-[#0F172A] leading-tight"
          style={{ fontSize: "clamp(13px, 3.2cqw, calc(var(--su, 1px) * 15.5))" }}
        >
          {faculty?.name || "Ronak Dugar"}
        </span>
        <span
          className="text-[#6B7280] leading-tight"
          style={{
            marginTop: "2px",
            fontSize: "clamp(11px, 2.86cqw, calc(var(--su, 1px) * 13.6))",
          }}
        >
          {faculty?.role || "Lead Accountancy Faculty"}
        </span>
      </div>
    </div>
  );
}
