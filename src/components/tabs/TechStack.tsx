import { motion } from "framer-motion";
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
} from "lucide-react";

const stack = [
  // Frontend
  { name: "HTML", icon: <Code /> },
  { name: "CSS", icon: <PenTool /> },
  { name: "JavaScript", icon: <Code /> },
  { name: "TypeScript", icon: <Code /> },
  { name: "React.js", icon: <Globe /> },
  { name: "Next.js", icon: <Monitor /> },
  { name: "jQuery", icon: <Code /> },
  { name: "Tailwind CSS", icon: <Layout /> },
  { name: "Bootstrap", icon: <Layout /> },

  // Backend
  { name: "Node.js", icon: <Server /> },
  { name: "Python", icon: <Cpu /> },
  { name: "Java", icon: <Cpu /> },

  // Database
  { name: "MySQL", icon: <Database /> },
  { name: "MongoDB", icon: <Database /> },

  // Tools & Concepts
  { name: "REST APIs", icon: <Globe /> },
  { name: "Git", icon: <GitBranch /> },
  { name: "GitHub", icon: <GitBranch /> },
  { name: "Postman", icon: <Command /> },
  { name: "Figma", icon: <Figma /> },
  { name: "VS Code", icon: <Command /> },
];

export function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {stack.map((item, index) => (
        <div
          key={index}
          className="aspect-square flex flex-col items-center justify-center gap-3 bg-white dark:bg-card-bg-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:scale-105 transition-transform"
        >
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl text-text-primary-light dark:text-text-primary-dark">
            {item.icon}
          </div>
          <span className="font-medium text-sm text-text-primary-light dark:text-text-primary-dark text-center">
            {item.name}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
