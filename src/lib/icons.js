import {
  GraduationCap,
  BookOpen,
  Zap,
  CirclePlay,
  Play,
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
  MonitorPlay,
  ClipboardList,
  CalendarDays,
  FileText,
  BarChart3,
  ArrowLeftRight,
  UserCog,
  Calculator,
  MinusCircle,
  RefreshCw,
  FileSpreadsheet,
  Percent,
  Database,
  PieChart,
  TrendingUp,
  Settings,
  Lightbulb,
  CheckCircle2,
  Landmark,
  Monitor,
  Headset,
  LogIn,
  Gauge,
} from "lucide-react";

export const ICON_MAP = {
  GraduationCap,
  BookOpen,
  Zap,
  CirclePlay,
  Play,
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
  MonitorPlay,
  ClipboardList,
  CalendarDays,
  FileText,
  BarChart3,
  ArrowLeftRight,
  UserCog,
  Calculator,
  MinusCircle,
  RefreshCw,
  FileSpreadsheet,
  Percent,
  Database,
  PieChart,
  TrendingUp,
  Settings,
  Lightbulb,
  CheckCircle2,
  Landmark,
  Monitor,
  Headset,
  LogIn,
  Gauge,
};

export function DynamicIcon({ name, ...props }) {
  if (!name) return null;
  if (typeof name === "function" || typeof name === "object") {
    const Component = name;
    return <Component {...props} />;
  }
  const IconComponent = ICON_MAP[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}

export function getIcon(key) {
  if (!key) return null;
  if (typeof key === "function" || typeof key === "object") return key;
  return ICON_MAP[key] || null;
}

