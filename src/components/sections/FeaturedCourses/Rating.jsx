import { Star } from "lucide-react";

/**
 * Course Rating row: 5 filled gold stars (16u, gap 2u) + "4.9" (15u / 800, ml 12u) + "(120+ students)" (13.5u / 400, ml 10u).
 */
export default function Rating({ rating = 4.9, students = "120+" }) {
  return (
    <div className="flex items-center select-none">
      {/* 5 filled stars in #FFB800 (16u, gap 2u) */}
      <div
        className="flex items-center text-[#FFB800]"
        style={{ gap: "calc(var(--su, 1px) * 2)" }}
        aria-hidden="true"
      >
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="fill-[#FFB800]"
            strokeWidth={1.5}
            style={{
              width: "clamp(13px, 3.3cqw, calc(var(--su, 1px) * 16))",
              height: "clamp(13px, 3.3cqw, calc(var(--su, 1px) * 16))",
            }}
          />
        ))}
      </div>

      {/* Numeric Rating: 15u / 800 (ml 12u) */}
      <span
        className="font-extrabold text-[#0F172A]"
        style={{
          marginLeft: "clamp(8px, 2.5cqw, calc(var(--su, 1px) * 12))",
          fontSize: "clamp(13px, 3.1cqw, calc(var(--su, 1px) * 15))",
        }}
      >
        {rating}
      </span>

      {/* Student Count: 13.5u / 400 #6B7280 (ml 10u) */}
      <span
        className="text-[#6B7280] font-normal"
        style={{
          marginLeft: "clamp(6px, 2.1cqw, calc(var(--su, 1px) * 10))",
          fontSize: "clamp(12px, 2.8cqw, calc(var(--su, 1px) * 13.5))",
        }}
      >
        ({students} students)
      </span>
    </div>
  );
}
