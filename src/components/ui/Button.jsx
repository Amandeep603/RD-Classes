import Link from "next/link";

/**
 * Reusable Button component with primary and outline variants.
 * Supports rendering as a Next.js Link or native button, optional trailing icon with hover nudge animation,
 * and prominent accessible focus rings.
 *
 * @param {Object} props
 * @param {"primary" | "outline"} [props.variant="primary"] - Button visual style.
 * @param {string} [props.href] - Destination URL if rendering as a Link.
 * @param {React.ReactNode} [props.icon] - Trailing icon element.
 * @param {React.ReactNode} props.children - Button label / content.
 * @param {string} [props.className] - Additional utility classes.
 * @param {"button" | "submit" | "reset"} [props.type="button"] - HTML button type.
 * @param {() => void} [props.onClick] - Click handler.
 * @param {string} [props.ariaLabel] - Accessible label.
 */
export default function Button({
  variant = "primary",
  href,
  icon,
  children,
  className = "",
  type = "button",
  onClick,
  ariaLabel,
  ...rest
}) {
  const baseStyles =
    "group inline-flex items-center justify-center font-bold tracking-normal transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]";

  const variantStyles = {
    primary:
      "bg-[#FFB800] text-[#0A0A0B] hover:bg-[#FFC933] active:bg-[#E5A600] shadow-sm",
    outline:
      "bg-transparent border border-white/40 text-white hover:border-[#FFB800] hover:text-[#FFB800] active:border-[#FFC933] active:text-[#FFC933]",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span
          className="ml-2.5 inline-flex items-center transition-transform duration-200 group-hover:translate-x-[2px]"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
      {...rest}
    >
      {content}
    </button>
  );
}
