import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  ArrowRight,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import FooterWave from "./FooterWave";
import {
  WhatsAppIcon,
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
} from "@/components/ui/BrandIcons";
import {
  FOOTER_COURSES,
  FOOTER_QUICK_LINKS,
  FOOTER_CONTACT,
  FOOTER_SOCIALS,
} from "@/constants/footer";

const SOCIAL_ICON_MAP = {
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
  Facebook: FacebookIcon,
  WhatsApp: WhatsAppIcon,
};

export default async function Footer() {
  "use cache";
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-label="Site Footer and Contact Information"
      className="relative w-full bg-[#121212] text-white [isolation:isolate] overflow-hidden"
      style={{
        "--su": "min(100vw / 1600, 1px)",
      }}
    >
      {/* Wave Transition Band from Light Page Flow */}
      <FooterWave />

      {/* Main Footer Body */}
      <div
        className="relative z-10 w-full max-w-[1600px] lg:max-w-[calc(var(--su,1px)*1600)] mx-auto px-4 lg:px-0"
        style={{
          paddingTop: "clamp(36px, 4.5vw, calc(var(--su, 1px) * 56))",
          paddingLeft: "clamp(16px, 4.5vw, calc(var(--su, 1px) * 79))",
          paddingRight: "clamp(16px, 4.5vw, calc(var(--su, 1px) * 79))",
        }}
      >
        {/* Large Faint Graduation Cap Watermark (Bottom-Right, Decorative) */}
        <div
          className="absolute -bottom-10 -right-10 pointer-events-none opacity-8 text-[#1A1A1A] select-none -z-10"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 200 200"
            className="w-96 h-96 fill-current text-white/5"
          >
            <polygon points="100,20 180,60 100,100 20,60" />
            <path d="M 50 80 Q 100 120 150 80 L 150 115 Q 100 155 50 115 Z" />
            <path d="M 100 60 Q 160 80 170 120" stroke="currentColor" strokeWidth="6" fill="none" />
            <polygon points="165,120 175,120 170,145" />
          </svg>
        </div>

        {/* 4-Column Grid (Desktop >=1100px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
          {/* Column 1: Brand (332u, lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left pr-0 lg:pr-8">
            {/* Logo */}
            <Link href="/" className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-[#FFC21A]">
              <Image
                src="/images/logo-rd-light.png"
                alt="RD Classes for Accountancy"
                width={187}
                height={118}
                className="object-contain h-auto"
                style={{ width: "clamp(150px, 16vw, calc(var(--su, 1px) * 187))" }}
              />
            </Link>

            {/* Description (margin-top 20u, 3 lines desktop) */}
            <p
              className="mt-4 lg:mt-[calc(var(--su,1px)*20)] text-white/75 font-normal leading-[1.45] text-balance"
              style={{ fontSize: "clamp(14px, 1.6vw, calc(var(--su, 1px) * 17))" }}
            >
              Faridabad&apos;s premier Accountancy coaching institute for CBSE Class 11 &amp; 12, founded and personally taught by Ronak Dugar in Sector 9.
            </p>

            {/* Reward Pill (margin-top 18u, 332u x 46u) */}
            <div
              className="mt-4 lg:mt-[calc(var(--su,1px)*18)] rounded-[10px] flex items-center justify-center gap-2 px-3 border border-[#E8B000] bg-[rgba(255,194,26,0.06)]"
              style={{
                width: "clamp(260px, 100%, calc(var(--su, 1px) * 332))",
                height: "clamp(40px, 4.2vw, calc(var(--su, 1px) * 46))",
              }}
            >
              <Trophy className="w-4 h-4 text-[#F5C242] shrink-0" />
              <span
                className="font-bold text-[#F5C242] whitespace-nowrap"
                style={{ fontSize: "clamp(12px, 1.4vw, calc(var(--su, 1px) * 15))" }}
              >
                ₹5,100 reward for 100/100 board score
              </span>
            </div>

            {/* Social Icons Row (margin-top 20u) */}
            <div
              className="mt-5 lg:mt-[calc(var(--su,1px)*20)] flex items-center gap-3 lg:gap-[calc(var(--su,1px)*14)]"
            >
              {FOOTER_SOCIALS.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.platform];
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="group rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#FFC21A] hover:-translate-y-1 active:scale-95 border border-[#3A3A3C]"
                    style={{
                      width: "clamp(40px, 4.5vw, calc(var(--su, 1px) * 47))",
                      height: "clamp(40px, 4.5vw, calc(var(--su, 1px) * 47))",
                    }}
                  >
                    <Icon className="w-5 h-5 text-white group-hover:text-[#121212] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Desktop Divider 1 */}
          <div
            className="hidden lg:block lg:col-span-1 w-[1px] h-[calc(var(--su,1px)*260)] bg-white/8 mx-auto"
            aria-hidden="true"
          />

          {/* Column 2: Courses (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4
              className="font-bold text-white relative pb-2.5"
              style={{ fontSize: "clamp(18px, 2vw, calc(var(--su, 1px) * 22))" }}
            >
              Courses
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 rounded-full bg-[#F5B400]"
                style={{
                  width: "calc(var(--su, 1px) * 34)",
                  height: "calc(var(--su, 1px) * 3)",
                }}
              />
            </h4>

            <ul
              className="mt-5 lg:mt-[calc(var(--su,1px)*24)] space-y-2.5 lg:space-y-[calc(var(--su,1px)*10)]"
              style={{ fontSize: "clamp(14px, 1.5vw, calc(var(--su, 1px) * 16.5))" }}
            >
              {FOOTER_COURSES.map((course, idx) => (
                <li key={idx}>
                  <Link
                    href={course.href}
                    className="group inline-flex items-center text-[#D1D5DB] hover:text-[#FFC21A] transition-colors py-1 min-h-[44px]"
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {course.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Divider 2 */}
          <div
            className="hidden lg:block lg:col-span-1 w-[1px] h-[calc(var(--su,1px)*260)] bg-white/8 mx-auto"
            aria-hidden="true"
          />

          {/* Column 3: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4
              className="font-bold text-white relative pb-2.5"
              style={{ fontSize: "clamp(18px, 2vw, calc(var(--su, 1px) * 22))" }}
            >
              Quick Links
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 rounded-full bg-[#F5B400]"
                style={{
                  width: "calc(var(--su, 1px) * 34)",
                  height: "calc(var(--su, 1px) * 3)",
                }}
              />
            </h4>

            <ul
              className="mt-5 lg:mt-[calc(var(--su,1px)*24)] space-y-2.5 lg:space-y-[calc(var(--su,1px)*10)]"
              style={{ fontSize: "clamp(14px, 1.5vw, calc(var(--su, 1px) * 16.5))" }}
            >
              {FOOTER_QUICK_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className={`group inline-flex items-center gap-1.5 transition-colors py-1 min-h-[44px] ${
                      link.highlight
                        ? "text-[#FFC21A] font-bold hover:underline"
                        : "text-[#D1D5DB] hover:text-[#FFC21A]"
                    }`}
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {link.label}
                    </span>
                    {link.highlight && (
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Divider 3 */}
          <div
            className="hidden lg:block lg:col-span-1 w-[1px] h-[calc(var(--su,1px)*260)] bg-white/8 mx-auto"
            aria-hidden="true"
          />

          {/* Column 4: Contact (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4
              className="font-bold text-white relative pb-2.5"
              style={{ fontSize: "clamp(18px, 2vw, calc(var(--su, 1px) * 22))" }}
            >
              Contact Us
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 rounded-full bg-[#F5B400]"
                style={{
                  width: "calc(var(--su, 1px) * 34)",
                  height: "calc(var(--su, 1px) * 3)",
                }}
              />
            </h4>

            <div
              className="mt-5 lg:mt-[calc(var(--su,1px)*24)] space-y-3.5 lg:space-y-[calc(var(--su,1px)*14)]"
              style={{ fontSize: "clamp(14px, 1.5vw, calc(var(--su, 1px) * 16.5))" }}
            >
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F5B400] shrink-0 mt-0.5" />
                <span className="text-[#D1D5DB] leading-snug">
                  SCF 59-60, 2nd Floor, Sector 9,
                  <br />
                  Faridabad, Haryana 121006
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F5B400] shrink-0" />
                <a
                  href={`tel:${FOOTER_CONTACT.phoneTel}`}
                  className="text-[#D1D5DB] hover:text-[#FFC21A] transition-colors min-h-[44px] flex items-center"
                >
                  {FOOTER_CONTACT.phoneDisplay}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F5B400] shrink-0" />
                <a
                  href={`mailto:${FOOTER_CONTACT.email}`}
                  className="text-[#D1D5DB] hover:text-[#FFC21A] transition-colors min-h-[44px] flex items-center"
                >
                  {FOOTER_CONTACT.email}
                </a>
              </div>

              {/* Google Maps Directions Button */}
              <div className="pt-2">
                <a
                  href={FOOTER_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full font-bold border border-[#E8B000] text-[#FFC21A] transition-all duration-300 hover:bg-[#FFC21A] hover:text-[#121212] active:scale-95"
                  style={{
                    width: "clamp(220px, 100%, calc(var(--su, 1px) * 242))",
                    height: "clamp(42px, 4.5vw, calc(var(--su, 1px) * 45))",
                    fontSize: "clamp(13px, 1.4vw, calc(var(--su, 1px) * 15))",
                  }}
                >
                  <MapPin className="w-4 h-4 text-inherit" />
                  <span>Google Maps Directions</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Divider + Copyright + Meta + Back to Top */}
        <div
          className="mt-12 lg:mt-[calc(var(--su,1px)*48)] border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-white/60"
          style={{
            paddingTop: "calc(var(--su, 1px) * 22)",
            paddingBottom: "calc(var(--su, 1px) * 26)",
            fontSize: "clamp(12px, 1.3vw, calc(var(--su, 1px) * 14.5))",
          }}
        >
          {/* Copyright */}
          <div>
            &copy; {currentYear} RD Classes for Accountancy. All rights reserved. Directed by Ronak Dugar.
          </div>

          {/* Right Meta + Back to Top */}
          <div className="flex items-center flex-wrap justify-center gap-3">
            <span>CBSE Class 11 &amp; 12</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" aria-hidden="true" />
            <span>Sector 9, Faridabad</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" aria-hidden="true" />
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 text-white/80 hover:text-[#FFC21A] font-semibold transition-colors min-h-[44px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
