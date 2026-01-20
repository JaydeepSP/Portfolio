import type { LucideIcon } from "lucide-react";

/* ---------- Tech Stack ---------- */
export type TechStackItem = {
  name: string;
  icon: LucideIcon;
  category: string;
};

/* ---------- Project ---------- */
export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  image: string;
  link: string;
  tech: string[];
};

/* ---------- Service ---------- */
export type Service = {
  title: string;
  price: string;
};

/* ---------- Social / Connect Links ---------- */
export type SocialLink = {
  name: string;
  username: string;
  url: string;
  icon: LucideIcon;
  color: string;
};

/* ---------- Experience ---------- */
export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string[];
};

/* ---------- Education ---------- */
export type Education = {
  school: string;
  degree: string;
  duration: string;
  location: string;
  grade: string;
};

/* ---------- Testimonial ---------- */
export type Testimonial = {
  text: string;
  author: string;
  handle: string;
  image: string;
};
