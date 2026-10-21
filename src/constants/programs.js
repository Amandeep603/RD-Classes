/**
 * Data and content constants for the Programs section.
 * Shape for each program: { id, number, slug, label, title, description, href, image, imageAlt, theme, icon }
 */

export const PROGRAMS_HEADER = {
  eyebrow: "COURSE CATEGORIES",
  headline: {
    line1: "Explore Popular",
    line2: "Programs",
  },
  description:
    "Choose the right learning format for your CBSE Accountancy goals in Class 11 & 12.",
  cta: {
    label: "View All Courses",
    href: "/courses",
  },
};

export const PROGRAMS = [
  {
    id: "program-1",
    number: "01",
    slug: "class-12-board",
    label: "FULL YEAR BATCH",
    title: "Class 12 Board",
    description: "Partnership, Company & Cash Flow",
    href: "/courses/class-12-board",
    image: "/images/programs/program-1.webp",
    imageAlt: "Class 12 CBSE Accountancy Board Exam Textbook and Course Material",
    theme: "sky",
    icon: "GraduationCap",
  },
  {
    id: "program-2",
    number: "02",
    slug: "class-11-foundation",
    label: "FOUNDATION BATCH",
    title: "Class 11 Foundation",
    description: "Journal, Ledger, BRS & Balance Sheet",
    href: "/courses/class-11-foundation",
    image: "/images/programs/program-2.webp",
    imageAlt: "Class 11 Accountancy Foundation Course Books and Study Table",
    theme: "navy",
    icon: "BookOpen",
  },
  {
    id: "program-3",
    number: "03",
    slug: "crash-course",
    label: "FAST TRACK",
    title: "Crash Course",
    description: "Rapid Revision & Board Sample Papers",
    href: "/courses/crash-course",
    image: "/images/programs/program-3.webp",
    imageAlt: "Fast Track Rapid Revision and Practice Session for CBSE Boards",
    theme: "white",
    icon: "Zap",
  },
  {
    id: "program-4",
    number: "04",
    slug: "online-video-portal",
    label: "SELF-PACED ACCESS",
    title: "Online Video Portal",
    description: "136 HD Chapter Lectures on Mobile",
    href: "/courses/online-video-portal",
    image: "/images/programs/program-4.webp",
    imageAlt: "Teacher explaining Accountancy concepts on whiteboard in HD Video Lecture",
    theme: "sun",
    icon: "CirclePlay",
  },
  {
    id: "program-5",
    number: "05",
    slug: "mock-test-series",
    label: "BOARD PATTERN",
    title: "Mock Test Series",
    description: "Weekly Sunday Tests & Evaluation",
    href: "/courses/mock-test-series",
    image: "/images/programs/program-5.webp",
    imageAlt: "CBSE Board Pattern Mock Test Question Paper with Pencil Evaluation",
    theme: "peach",
    icon: "FileCheck",
  },
];
