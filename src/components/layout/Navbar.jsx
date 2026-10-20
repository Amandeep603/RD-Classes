"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, LogIn, Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

/**
 * Main application Navbar component.
 * Features brand chip logo, dynamic navigation links designed to gracefully fit up to 7 items,
 * dual action buttons (Student Login + Enquire Now), and mobile drawer toggle (< 1100px).
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on desktop breakpoint resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1100 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full h-[var(--navbar-h)] transition-all duration-300 flex items-center ${
          isScrolled
            ? "bg-[#0A0A0B]/80 backdrop-blur-md border-b border-white/[0.08] shadow-sm shadow-black/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Brand Logo Chip */}
          <Logo />

          {/* Center Navigation Links (>=1100px) */}
          <nav
            aria-label="Primary"
            className="hidden min-[1100px]:flex items-center gap-[clamp(20px,2.6vw,48px)]"
          >
            {SITE_CONFIG.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 text-[clamp(14px,1vw,16px)] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] rounded-sm whitespace-nowrap ${
                    isActive
                      ? "text-white"
                      : "text-white/90 hover:text-[#FFB800]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-[-6px] left-0 right-0 h-[3px] bg-[#FFB800] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Group (>=1100px): Student Login + Enquire Now */}
          <div className="hidden min-[1100px]:flex items-center gap-[12px]">
            <Button
              variant="outline"
              href={SITE_CONFIG.cta.studentLogin.href}
              icon={<LogIn className="w-4 h-4" />}
              className="h-[44px] px-[18px] rounded-[6px] text-[15px] font-semibold border-white/35 hover:border-[#FFB800] hover:text-[#FFB800]"
            >
              {SITE_CONFIG.cta.studentLogin.label}
            </Button>
            <Button
              href={SITE_CONFIG.cta.enquire.href}
              icon={<ArrowRight className="w-4 h-4" />}
              className="h-[44px] px-[22px] rounded-[6px] text-[15px] font-bold"
            >
              {SITE_CONFIG.cta.enquire.label}
            </Button>
          </div>

          {/* Mobile Hamburger Toggle (<1100px) */}
          <button
            type="button"
            className="min-[1100px]:hidden p-2 rounded-lg text-white hover:text-[#FFB800] hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPath={pathname}
      />
    </>
  );
}
