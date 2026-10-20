import Image from "next/image";
import { SITE_CONFIG } from "@/constants/site";

/**
 * Right column Arch-shaped image cards grid for Hero section.
 * Scales dynamically with viewport height (svh) to guarantee zero page scroll on desktop/laptop.
 * On desktop: fills the right column with staggered vertical offsets and arch cards.
 * On mobile: scales to flex-1 (max-h 34svh) centered horizontally.
 * Includes CSS entrance animations and a subtle floating loop.
 */
export default function HeroImageGrid() {
  const images = SITE_CONFIG.heroImages;

  const col1Images = images.filter((img) => img.column === 1);
  const col2Images = images.filter((img) => img.column === 2);
  const col3Images = images.filter((img) => img.column === 3);

  const cardHeightClasses = {
    "student-1": "h-[20svh] min-h-[130px] max-h-[180px] lg:min-h-0 lg:max-h-[520px] lg:h-[54svh]",
    "student-2": "h-[11svh] min-h-[70px] max-h-[100px] lg:min-h-0 lg:max-h-[280px] lg:h-[29svh]",
    "student-3": "h-[16svh] min-h-[105px] max-h-[145px] lg:min-h-0 lg:max-h-[400px] lg:h-[42svh]",
    "student-4": "h-[16svh] min-h-[105px] max-h-[145px] lg:min-h-0 lg:max-h-[420px] lg:h-[44svh]",
    "student-5": "h-[21svh] min-h-[140px] max-h-[190px] lg:min-h-0 lg:max-h-[540px] lg:h-[56svh]",
  };

  const renderCard = (card) => {
    const entranceDelayMs = (card.order - 1) * 80;

    return (
      <div
        key={card.id}
        style={{
          backgroundColor: card.bgColor,
          animationDelay: `${entranceDelayMs}ms`,
        }}
        className={`group relative w-full ${cardHeightClasses[card.id]} rounded-t-full rounded-b-[24px] lg:rounded-b-[28px] overflow-hidden shadow-2xl animate-arch-card shrink-0 transition-transform duration-300`}
      >
        {/* Floating wrapper */}
        <div
          className="relative w-full h-full animate-arch-float rounded-t-full rounded-b-[24px] lg:rounded-b-[28px] overflow-hidden"
          style={{ animationDelay: card.floatDelay }}
        >
          {card.src && (
            <Image
              src={card.src}
              alt={card.alt}
              fill
              priority
              sizes="(max-width: 640px) 26vw, (max-width: 1024px) 150px, (max-width: 1440px) 165px, 200px"
              className="object-cover object-center pointer-events-none select-none transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative flex items-start justify-center lg:justify-end gap-2 sm:gap-3 lg:gap-[clamp(10px,1.4vw,22px)] w-full lg:h-full max-h-[34svh] lg:max-h-none overflow-hidden select-none"
      aria-label="Student showcase gallery"
    >
      {/* Column 1: Starts mid-height (~11svh) */}
      <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[clamp(10px,1.4vw,22px)] w-[26vw] sm:w-[130px] lg:w-[clamp(120px,12.5vw,200px)] pt-[4svh] lg:pt-[11svh] shrink-0">
        {renderCard(col1Images[0])}
        {col1Images[1] && renderCard(col1Images[1])}
      </div>

      {/* Column 2: Starts highest (0%) */}
      <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[clamp(10px,1.4vw,22px)] w-[26vw] sm:w-[130px] lg:w-[clamp(120px,12.5vw,200px)] pt-0 shrink-0">
        {renderCard(col2Images[0])}
        {col2Images[1] && renderCard(col2Images[1])}
      </div>

      {/* Column 3: Starts slightly lower than Col 2 (~5svh) */}
      <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[clamp(10px,1.4vw,22px)] w-[26vw] sm:w-[130px] lg:w-[clamp(120px,12.5vw,200px)] pt-[2svh] lg:pt-[5svh] shrink-0">
        {renderCard(col3Images[0])}
      </div>
    </div>
  );
}
