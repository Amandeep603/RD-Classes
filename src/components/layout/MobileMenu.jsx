"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";
import Button from "@/components/ui/Button";

/**
 * Mobile navigation slide-down menu for viewports < 1100px.
 * Locks body scroll when open, closes on Escape or link click, and provides touch targets >= 48px.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Menu open state.
 * @param {() => void} props.onClose - Function to close the mobile menu.
 * @param {string} props.currentPath - Current pathname for active styling.
 */
export default function MobileMenu({ isOpen, onClose, currentPath }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      className="fixed inset-x-0 top-[var(--navbar-h)] bottom-0 z-40 bg-[#0A0A0B]/95 backdrop-blur-xl border-t border-white/10 flex flex-col justify-between p-6 overflow-y-auto min-[1100px]:hidden transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <nav aria-label="Mobile Nav" className="flex flex-col gap-2 pt-2">
        {SITE_CONFIG.navLinks.map((link) => {
          const isActive = currentPath === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`flex items-center min-h-[48px] px-4 rounded-lg text-lg font-medium transition-colors ${
                isActive
                  ? "text-[#FFB800] bg-white/5 font-semibold"
                  : "text-white hover:text-[#FFB800] hover:bg-white/5"
              }`}
            >
              {link.label}
              {isActive && (
                <span className="ml-auto w-2 h-2 rounded-full bg-[#FFB800]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom CTA Group */}
      <div className="pt-6 pb-4 border-t border-white/10 mt-auto flex flex-col gap-3">
        <Button
          variant="outline"
          href={SITE_CONFIG.cta.studentLogin.href}
          icon={<LogIn className="w-4 h-4" />}
          className="w-full h-[48px] text-[15px] font-semibold rounded-[6px]"
          onClick={onClose}
        >
          {SITE_CONFIG.cta.studentLogin.label}
        </Button>
        <Button
          href={SITE_CONFIG.cta.enquire.href}
          icon={<ArrowRight className="w-4 h-4" />}
          className="w-full h-[48px] text-[15px] font-bold rounded-[6px]"
          onClick={onClose}
        >
          {SITE_CONFIG.cta.enquire.label}
        </Button>
      </div>
    </div>
  );
}
