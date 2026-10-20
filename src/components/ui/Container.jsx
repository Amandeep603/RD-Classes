/**
 * Container component providing consistent maximum width and fluid responsive horizontal padding.
 * At 1600px viewport, padding matches ~100px as defined in the design spec.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Inner content.
 * @param {string} [props.className] - Additional CSS class names.
 */
export default function Container({ children, className = "" }) {
  return (
    <div
      className={`w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[100px] ${className}`}
    >
      {children}
    </div>
  );
}
