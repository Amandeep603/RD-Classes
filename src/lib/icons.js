import {
  GraduationCap,
  BookOpen,
  Zap,
  CirclePlay,
  FileCheck,
  Award,
  Clock,
  Globe,
  Users,
  ClipboardCheck,
  Video,
  MessageCircle,
  ArrowRight,
  Star,
  Check,
} from "lucide-react";

export const ICON_MAP = {
  GraduationCap,
  BookOpen,
  Zap,
  CirclePlay,
  FileCheck,
  Award,
  Clock,
  Globe,
  Users,
  ClipboardCheck,
  Video,
  MessageCircle,
  ArrowRight,
  Star,
  Check,
};

export function DynamicIcon({ name, ...props }) {
  const IconComponent = ICON_MAP[name] || GraduationCap;
  return <IconComponent {...props} />;
}

export function getIcon(key) {
  return ICON_MAP[key] || GraduationCap;
}
