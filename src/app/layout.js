import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/themes.css";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { SITE_CONFIG } from "@/constants/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "RD Classes | Accountancy Classes for Class 11 & 12, Faridabad",
  description: SITE_CONFIG.description,
  keywords: [
    "RD Classes",
    "Accountancy Classes",
    "Class 11 Accountancy",
    "Class 12 Accountancy",
    "Accountancy Coaching Faridabad",
    "CBSE Commerce Coaching",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

const motionInitScript = `
  (function() {
    try {
      var force = "${process.env.NEXT_PUBLIC_FORCE_MOTION || ""}";
      var prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var motion = (prefersReduce && force !== "1") ? "reduce" : "full";
      document.documentElement.dataset.motion = motion;
      document.documentElement.dataset.js = "1";
    } catch(e) {
      document.documentElement.dataset.motion = "full";
      document.documentElement.dataset.js = "1";
    }
  })();
`;

import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import SectionObserver from "@/components/ui/SectionObserver";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} antialiased dark overflow-x-clip`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionInitScript }} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0A0A0B] text-white selection:bg-[#FFB800] selection:text-[#0A0A0B] overflow-x-clip">
        <ScrollProgressBar />
        <SectionObserver />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
