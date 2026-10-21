import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DynamicIcon } from "@/lib/icons";

/**
 * PortalFeatures component for Section F: "Student Learning Portal".
 * Left-column feature list with 52u icon tiles + Primary & Secondary buttons.
 */
export default function PortalFeatures({ features, buttons }) {
  return (
    <div className="flex flex-col w-full">
      {/* 4 Feature Items */}
      <div className="flex flex-col gap-[clamp(14px,1.8vw,calc(var(--su,1px)*20))] mt-[clamp(20px,2.5vw,calc(var(--su,1px)*28))]">
        {features.map((feat) => (
          <div
            key={feat.id}
            className="flex items-start gap-[clamp(12px,1.5vw,calc(var(--su,1px)*16))]"
          >
            {/* Feature Icon Tile */}
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: "clamp(42px, 4.5vw, calc(var(--su, 1px) * 52))",
                height: "clamp(42px, 4.5vw, calc(var(--su, 1px) * 52))",
                borderRadius: "max(12px, calc(var(--su, 1px) * 14))",
                backgroundColor: feat.tileBg,
                color: feat.iconColor,
              }}
            >
              <DynamicIcon
                name={feat.icon}
                style={{
                  width: "clamp(20px, 2.2vw, calc(var(--su, 1px) * 24))",
                  height: "clamp(20px, 2.2vw, calc(var(--su, 1px) * 24))",
                }}
                strokeWidth={2}
                aria-hidden="true"
              />
            </div>

            {/* Title & Description */}
            <div className="flex flex-col justify-center">
              <h3
                className="font-bold text-[#0F172A] leading-tight"
                style={{
                  fontSize: "clamp(15px, 1.8vw, calc(var(--su, 1px) * 17.5))",
                }}
              >
                {feat.title}
              </h3>
              <p
                className="text-[#5B6676] font-normal leading-normal mt-0.5"
                style={{
                  fontSize: "clamp(13px, 1.4vw, calc(var(--su, 1px) * 14.5))",
                }}
              >
                {feat.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button Row */}
      <div
        className="flex flex-col sm:flex-row items-center gap-[clamp(14px,1.8vw,calc(var(--su,1px)*22))] w-full mt-[clamp(24px,3vw,calc(var(--su,1px)*34))]"
      >
        {/* Primary: Student Login */}
        <Link
          href={buttons.primary.href}
          aria-label="Student Login"
          className="group relative flex items-center justify-between w-full sm:w-auto overflow-hidden text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_42px_-14px_rgba(15,26,44,0.6)] active:scale-[0.98] select-none"
          style={{
            minWidth: "calc(var(--su, 1px) * 256)",
            height: "max(52px, calc(var(--su, 1px) * 60))",
            borderRadius: "max(26px, calc(var(--su, 1px) * 30))",
            backgroundColor: "#0F1B2D",
            boxShadow: "0 18px 36px -16px rgba(15, 26, 44, 0.5)",
            paddingLeft: "clamp(20px, 2.5vw, calc(var(--su, 1px) * 28))",
            paddingRight: "max(8px, calc(var(--su, 1px) * 8))",
          }}
        >
          {/* Shine Sweep Effect on Hover */}
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
            aria-hidden="true"
          />

          <div className="flex items-center gap-[max(10px,calc(var(--su,1px)*12))]">
            {buttons.primary.icon && (
              <span className="text-white">
                <DynamicIcon
                  name={buttons.primary.icon}
                  style={{
                    width: "max(18px, calc(var(--su, 1px) * 22))",
                    height: "max(18px, calc(var(--su, 1px) * 22))",
                  }}
                  strokeWidth={2.2}
                />
              </span>
            )}
            <span
              className="font-bold tracking-tight text-white whitespace-nowrap"
              style={{
                fontSize: "clamp(14.5px, 1.8vw, calc(var(--su, 1px) * 16.5))",
              }}
            >
              {buttons.primary.label}
            </span>
          </div>

          <div
            className="flex items-center justify-center rounded-full bg-[#FFC21A] text-[#0F172A] shrink-0 transition-transform duration-300 group-hover:scale-105"
            style={{
              width: "max(40px, calc(var(--su, 1px) * 46))",
              height: "max(40px, calc(var(--su, 1px) * 46))",
            }}
            aria-hidden="true"
          >
            <ArrowRight
              className="transition-transform duration-300 group-hover:translate-x-[2px]"
              style={{
                width: "max(16px, calc(var(--su, 1px) * 20))",
                height: "max(16px, calc(var(--su, 1px) * 20))",
              }}
              strokeWidth={2.4}
            />
          </div>
        </Link>

        {/* Secondary: Browse Lecture Library */}
        <Link
          href={buttons.secondary.href}
          aria-label="Browse Lecture Library"
          className="group flex items-center justify-center gap-2.5 w-full sm:w-auto bg-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(15,23,42,0.12)] active:scale-[0.98] select-none text-[#0F172A]"
          style={{
            minWidth: "calc(var(--su, 1px) * 282)",
            height: "max(50px, calc(var(--su, 1px) * 58))",
            borderRadius: "max(25px, calc(var(--su, 1px) * 29))",
            border: "1.5px solid #F4E4B0",
            boxShadow: "0 8px 20px -8px rgba(244, 228, 176, 0.4)",
            paddingLeft: "clamp(20px, 2.5vw, calc(var(--su, 1px) * 28))",
            paddingRight: "clamp(20px, 2.5vw, calc(var(--su, 1px) * 28))",
          }}
        >
          <span
            className="font-bold whitespace-nowrap"
            style={{
              fontSize: "clamp(14.5px, 1.8vw, calc(var(--su, 1px) * 16.5))",
            }}
          >
            {buttons.secondary.label}
          </span>
          <ArrowRight
            className="text-[#F59E0B] transition-transform duration-300 group-hover:translate-x-[3px]"
            style={{
              width: "max(16px, calc(var(--su, 1px) * 18))",
              height: "max(16px, calc(var(--su, 1px) * 18))",
            }}
            strokeWidth={2.4}
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}
