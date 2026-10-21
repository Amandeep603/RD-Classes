/**
 * Shared responsive container primitive.
 * Matches 1600px desktop max-width scaled by var(--su), with responsive horizontal paddings.
 */
export default function Container({ children, className = "" }) {
  return (
    <div
      className={`relative w-full max-w-[1600px] lg:max-w-[calc(var(--su)*1600)] mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
