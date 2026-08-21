export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  type: string;
  image: string;
  link: string;
  github: string;
  color: string;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

export type NewProject = Omit<Project, "id" | "created_at" | "updated_at">;

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  image: string;
  skills: string[];
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

export type NewSkillCategory = Omit<SkillCategory, "id" | "created_at" | "updated_at">;

export const PROJECT_COLOR_OPTIONS = [
  { label: "Blue", value: "bg-blue-50 text-blue-600" },
  { label: "Purple", value: "bg-purple-50 text-purple-600" },
  { label: "Emerald", value: "bg-emerald-50 text-emerald-600" },
  { label: "Orange", value: "bg-orange-50 text-orange-600" },
  { label: "Rose", value: "bg-rose-50 text-rose-600" },
  { label: "Indigo", value: "bg-indigo-50 text-indigo-600" },
];

export const ICON_OPTIONS = [
  "Layout",
  "Database",
  "Layers",
  "Brain",
  "Sparkles",
  "BarChart3",
  "Cpu",
  "Terminal",
  "Code",
  "Globe",
  "Server",
  "Smartphone",
];
