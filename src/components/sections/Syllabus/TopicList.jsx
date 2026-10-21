import { DynamicIcon } from "@/lib/icons";

/**
 * TopicList component for Section E: "What You Will Master".
 * Displays 6 topic items with duotone Lucide icons in rounded white pills.
 * Micro-interactions:
 * - Hover: item background turns pure white, translateX(4px), icon scales 1.12.
 */
export default function TopicList({ topics, tone }) {
  return (
    <ul className="flex flex-col gap-[max(4px,calc(var(--su,1px)*4.4))] w-full">
      {topics.map((topic, i) => {
        const isBulb = topic.icon === "Lightbulb";
        const iconColor = isBulb
          ? "#EAB308"
          : "var(--book-topic-icon)";

        return (
          <li
            key={i}
            className="group/row flex items-center transition-all duration-200 ease-out hover:bg-white hover:translate-x-1 hover:shadow-[0_4px_12px_rgba(15,23,42,0.06)]"
            style={{
              minHeight: "max(34px, calc(var(--su, 1px) * 38))",
              borderRadius: "max(18px, calc(var(--su, 1px) * 22))",
              backgroundColor: "rgba(255, 255, 255, 0.78)",
              paddingLeft: "clamp(12px, 4.9cqw, calc(var(--su, 1px) * 18))",
              paddingRight: "clamp(10px, 3.5cqw, calc(var(--su, 1px) * 14))",
              paddingTop: "max(4px, calc(var(--su, 1px) * 5))",
              paddingBottom: "max(4px, calc(var(--su, 1px) * 5))",
            }}
          >
            <div
              className="shrink-0 flex items-center justify-center transition-transform duration-200 group-hover/row:scale-110 mr-[clamp(8px,3.2cqw,calc(var(--su,1px)*12))]"
              style={{
                color: iconColor,
              }}
            >
              <DynamicIcon
                name={topic.icon}
                style={{
                  width: "clamp(17px, 6cqw, calc(var(--su, 1px) * 22))",
                  height: "clamp(17px, 6cqw, calc(var(--su, 1px) * 22))",
                }}
                strokeWidth={2}
                className="fill-current/15"
                aria-hidden="true"
              />
            </div>

            <span
              className="font-medium text-[#1F2937] leading-tight select-none overflow-hidden text-ellipsis whitespace-nowrap min-[768px]:whitespace-normal min-[1340px]:whitespace-nowrap"
              style={{
                fontSize: "clamp(13px, 4.4cqw, calc(var(--su, 1px) * 16.2))",
              }}
            >
              {topic.text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
