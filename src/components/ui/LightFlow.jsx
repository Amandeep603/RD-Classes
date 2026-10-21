/**
 * LightFlow component.
 * Shared wrapper for Sections D ("How It Works"), E ("What You Will Master"), and F ("Student Learning Portal").
 * Provides a continuous, seamless light gradient background with zero seams or shadows between sections.
 */
export default function LightFlow({ children, className = "" }) {
  return (
    <div
      className={`relative w-full overflow-hidden text-[#0F172A] ${className}`}
      style={{
        background: "var(--bg-lightflow, linear-gradient(180deg, #FBF6EA 0%, #F7F0E0 45%, #F3EAD6 100%))",
        "--su": "min(100vw / 1600, 1px)",
      }}
    >
      {children}
    </div>
  );
}
