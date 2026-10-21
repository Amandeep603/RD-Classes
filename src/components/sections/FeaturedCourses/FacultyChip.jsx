import Image from "next/image";
import { useState } from "react";

/**
 * Faculty Chip component for CourseCard.
 * Displays faculty avatar with a 2u yellow-orange gradient ring, name, and role.
 */
export default function FacultyChip({ faculty }) {
  const [hasImgError, setHasImgError] = useState(false);

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Avatar with 2u yellow-orange gradient ring */}
      <div className="relative rounded-full p-[2px] bg-gradient-to-tr from-[#FFB800] to-[#F97316] shrink-0">
        <div className="relative w-[38px] h-[38px] lg:w-[calc(var(--su)*46)] lg:h-[calc(var(--su)*46)] rounded-full overflow-hidden bg-[#FFF3C7] flex items-center justify-center">
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
            <span className="font-extrabold text-[14px] lg:text-[calc(var(--su)*16)] text-[#B45309]">
              RD
            </span>
          )}
        </div>
      </div>

      {/* Name and Role */}
      <div className="flex flex-col">
        <span className="font-bold text-[15px] lg:text-[calc(var(--su)*17)] text-[#0F172A] leading-tight">
          {faculty?.name || "Ronak Dugar"}
        </span>
        <span className="text-[13px] lg:text-[calc(var(--su)*14.5)] text-[#6B7280] leading-tight mt-0.5">
          {faculty?.role || "Lead Accountancy Faculty"}
        </span>
      </div>
    </div>
  );
}
