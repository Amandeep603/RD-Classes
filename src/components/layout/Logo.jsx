import Link from "next/link";
import Image from "next/image";

/**
 * Brand Logo component rendering the original brand logo image inside a clean
 * white rounded-lg chip (padding 4px 8px), with responsive height (52px desktop / 44px mobile).
 *
 * @param {Object} props
 * @param {string} [props.className] - Additional utility classes.
 */
export default function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center justify-center bg-white rounded-lg px-2 py-1 h-[44px] lg:h-[52px] shadow-sm hover:opacity-95 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] shrink-0 ${className}`}
      aria-label="RD Classes Home"
    >
      <div className="relative h-full flex items-center">
        <Image
          src="/images/logo-rd.png"
          alt="RD Classes - Classes for Accountancy"
          width={88}
          height={44}
          priority
          style={{ width: "auto", height: "100%" }}
          className="object-contain select-none"
        />
      </div>
    </Link>
  );
}
