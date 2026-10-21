import { getWhatsAppUrl } from "@/lib/whatsapp";

export const HOW_IT_WORKS_DATA = {
  badge: "SIMPLE 4-STEP PROCESS",
  heading: {
    prefix: "How It Works: From Demo to ",
    highlight: "Board Topper",
  },
  subtitle:
    "No complex admission procedures. Get started directly with expert guidance from day one.",
  steps: [
    {
      id: "step-1",
      number: "01",
      stepLabel: "STEP 1",
      title: "Free Demo",
      description:
        "Send a quick WhatsApp message with your class (11 or 12) and attend a live demo.",
      tone: "yellow",
      icon: "MonitorPlay",
      footerLabel: "Free demo included",
      get href() {
        return getWhatsAppUrl(
          "Hello RD Classes, I would like to attend a free demo class for Class 11/12 Accountancy."
        );
      },
    },
    {
      id: "step-2",
      number: "02",
      stepLabel: "STEP 2",
      title: "Enroll on WhatsApp",
      description:
        "Pick your preferred batch timing in Sector 9 and confirm your seat with transparent receipts.",
      tone: "blue",
      icon: "MessageCircle",
      footerLabel: "Free demo included",
      get href() {
        return getWhatsAppUrl(
          "Hello RD Classes, I would like to know the batch timings and confirm my seat in Sector 9."
        );
      },
    },
    {
      id: "step-3",
      number: "03",
      stepLabel: "STEP 3",
      title: "Learn With Lectures",
      description:
        "Attend interactive classroom lectures plus get 24/7 access to 136 recorded video lectures and chapter notes.",
      tone: "orange",
      icon: "BookOpen",
      footerLabel: "Free demo included",
      href: "#portal",
    },
    {
      id: "step-4",
      number: "04",
      stepLabel: "STEP 4",
      title: "Weekly Tests",
      description:
        "Take weekly Sunday CBSE-pattern tests checked personally. Aim for 100/100 and win ₹5,100!",
      tone: "blue",
      icon: "ClipboardList",
      footerLabel: "Free demo included",
      href: "#programs",
    },
  ],
  cta: {
    label: "Book Your Free Demo on WhatsApp",
    icon: "CalendarDays",
    message: "Hello RD Classes, I would like to book a free demo class.",
    get href() {
      return getWhatsAppUrl(this.message);
    },
  },
};
