import { Star } from "lucide-react";

/**
 * Course Rating component: 5 filled gold stars + rating number + student count.
 */
export default function Rating({ rating = 4.9, students = "120+" }) {
  return (
    <div className="flex items-center gap-1.5 flex-wrap select-none">
      {/* 5 filled stars in #FFB800 */}
      <div className="flex items-center gap-0.5 text-[#FFB800]" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 lg:w-[calc(var(--su)*18)] lg:h-[calc(var(--su)*18)] fill-[#FFB800]"
            strokeWidth={1.5}
          />
        ))}
      </div>

      {/* Numeric Rating */}
      <span className="font-extrabold text-[15px] lg:text-[calc(var(--su)*17)] text-[#0F172A] ml-1">
        {rating}
      </span>

      {/* Student Count */}
      <span className="text-[14px] lg:text-[calc(var(--su)*16)] text-[#6B7280]">
        ({students} students)
      </span>
    </div>
  );
}
