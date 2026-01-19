import {
  Monitor,
  Database,
  Globe,
  PenTool,
  Layout,
  Command,
  Cpu,
  Code,
  Server,
  GitBranch,
  Figma,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const stack: { name: string; icon: LucideIcon }[] = [
  // Frontend
  { name: "HTML", icon: Code },
  { name: "CSS", icon: PenTool },
  { name: "JavaScript", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "React.js", icon: Globe },
  { name: "Next.js", icon: Monitor },
  { name: "jQuery", icon: Code },
  { name: "Tailwind CSS", icon: Layout },
  { name: "Bootstrap", icon: Layout },

  // Backend
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Cpu },
  { name: "Java", icon: Cpu },

  // Database
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Database },

  // Tools & Concepts
  { name: "REST APIs", icon: Globe },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: GitBranch },
  { name: "Postman", icon: Command },
  { name: "Figma", icon: Figma },
  { name: "VS Code", icon: Command },
];

export const projects: {
  title: string;
  description: string;
  image: string;
  link: string;
}[] = [
  {
    title: "Minify",
    description: "A minimal icon set for minimalists.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    link: "#",
  },
  {
    title: "Lumina",
    description: "The ultimate lighting control app.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    link: "#",
  },
  {
    title: "Focus",
    description: "Productivity timer for Mac.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
    link: "#",
  },
];

export const services: { title: string; price: string }[] = [
  {
    title: "Web Design",
    price: "Starts at $500",
  },
  {
    title: "Framer Development",
    price: "Starts at $800",
  },
  {
    title: "Photography",
    price: "Starts at $300",
  },
  {
    title: "3D Visuals",
    price: "Starts at $600",
  },
];

export const links: {
  name: string;
  username: string;
  url: string;
  icon: LucideIcon;
  color: string;
}[] = [
  {
    name: "Twitter (X)",
    username: "@JaydeepPra58111",
    url: "https://x.com/JaydeepPra58111",
    icon: Twitter,
    color: "hover:!text-blue-400",
  },
  {
    name: "Instagram",
    username: "@___j._.d___",
    url: "https://www.instagram.com/___j._.d___/",
    icon: Instagram,
    color: "hover:!text-pink-500",
  },
  //   {
  //     name: "YouTube",
  //     username: "@JaydeepPrajapati-bj8xg",
  //     url: "https://www.youtube.com/@JaydeepPrajapati-bj8xg",
  //     icon: Youtube,
  //     color: "hover:!text-red-500",
  //   },
  {
    name: "LinkedIn",
    username: "/in/jaydeep-prajapati-614688214",
    url: "https://www.linkedin.com/in/jaydeep-prajapati-614688214/",
    icon: Linkedin,
    color: "hover:!text-blue-700",
  },
  {
    name: "GitHub",
    username: "@JaydeepSP",
    url: "httpls://github.com/JaydeepSP",
    icon: Github,
    color: "hover:!text-gray-800",
  },
  {
    name: "Email",
    username: "jaydeepprajapati456@gmail.com",
    url: "mailto:jaydeepprajapati456@gmail.com",
    icon: Mail,
    color: "hover:!text-orange-500",
  },
];
