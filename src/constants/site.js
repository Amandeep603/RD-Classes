/**
 * Site-wide configuration and content constants for RD Classes.
 * All text content, navigation items, CTA definitions, and hero data are centralized here.
 */

export const SITE_CONFIG = {
  name: "RD Classes",
  tagline: "Accountancy Classes for Class 11 & 12, Faridabad",
  description:
    "Build confidence in Accountancy with RD Classes. Clear concepts, regular practice, and better preparation for Class 11 & 12 CBSE board exams in Faridabad.",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    studentLogin: {
      label: "Student Login",
      href: "/student/login",
    },
    enquire: {
      label: "Enquire Now",
      href: "/contact",
    },
    exploreCourses: {
      label: "Explore Courses",
      href: "/courses",
    },
    getInTouch: {
      label: "Get in Touch",
      href: "/contact",
    },
  },
  hero: {
    eyebrow: "ACCOUNTANCY CLASSES FOR 11 & 12",
    headline: {
      line1: "Build",
      line2: "confidence in",
      line3: "Accountancy.",
    },
    subtext: {
      line1: "Clear concepts. Regular practice.",
      line2: "Better preparation.",
    },
    metaItems: ["CLASS 11", "CLASS 12", "ACCOUNTANCY"],
  },
  heroImages: [
    {
      id: "student-1",
      src: "/images/hero/student-card-1.png",
      alt: "Class 11 and 12 Accountancy student studying with notebook",
      bgColor: "#7CC8E8", // sky blue
      column: 1,
      heightRatio: 1.0, // tall card
      order: 1,
      floatDelay: "0s",
    },
    {
      id: "student-2",
      src: "/images/hero/student-card-2.png",
      alt: "Accountancy student smiling in discussion",
      bgColor: "#FF7A00", // orange
      column: 1,
      heightRatio: 0.54, // bottom card
      order: 2,
      floatDelay: "1.2s",
    },
    {
      id: "student-3",
      src: "/images/hero/student-card-3.png",
      alt: "Student with books preparing for CBSE Accountancy board exams",
      bgColor: "#FFB800", // yellow
      column: 2,
      heightRatio: 0.77,
      order: 3,
      floatDelay: "2.4s",
    },
    {
      id: "student-4",
      src: "/images/hero/student-card-4.png",
      alt: "Confident Commerce student with glasses and notebooks",
      bgColor: "#1EA7C5", // teal
      column: 2,
      heightRatio: 0.81,
      order: 4,
      floatDelay: "3.6s",
    },
    {
      id: "student-5",
      src: "/images/hero/student-card-5.png",
      alt: "Successful Class 12 Accountancy student preparing for CUET and boards",
      bgColor: "#FF7A00", // orange
      column: 3,
      heightRatio: 1.04,
      order: 5,
      floatDelay: "4.8s",
    },
  ],
};
