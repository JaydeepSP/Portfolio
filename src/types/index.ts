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
  image: string;
  link: string;
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

/* ---------- Simple Social Icons (Profile) ---------- */
export type SimpleSocialLink = {
  href: string;
  icon: LucideIcon;
  color: string;
};

/* ---------- Testimonial ---------- */
export type Testimonial = {
  text: string;
  author: string;
  handle: string;
  image: string;
};
