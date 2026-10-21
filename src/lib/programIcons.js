import {
  GraduationCap,
  BookOpen,
  Zap,
  CirclePlay,
  FileCheck,
} from "lucide-react";

const ICON_MAP = {
  GraduationCap,
  BookOpen,
  Zap,
  CirclePlay,
  FileCheck,
};

/**
 * Returns the Lucide icon component corresponding to the string key.
 * Fallbacks to GraduationCap if key is missing or unmapped.
 */
export function getProgramIcon(iconKey) {
  return ICON_MAP[iconKey] || GraduationCap;
}
