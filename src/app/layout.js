import { Plus_Jakarta_Sans } from "next/font/google";
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0B] text-white selection:bg-[#FFB800] selection:text-[#0A0A0B]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
