import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/utils/constant";
import { ProjectModal } from "@/components/ui/ProjectModal";
import type { Project } from "@/types";

const DOT_COLORS = [
  "#3b82f6", // blue
  "#f97316", // orange
  "#22c55e", // green
  "#a855f7", // purple
  "#ec4899", // pink
  "#14b8a6", // teal
  "#eab308", // yellow
  "#ef4444", // red
  "#6366f1", // indigo
  "#f43f5e", // rose
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              delay: (index % 3) * 0.1, 
              ease: [0.215, 0.61, 0.355, 1] 
            }}
            onClick={() => handleProjectClick(project)}
            className="group flex items-start justify-between gap-6 py-5 border-b border-gray-100 dark:border-white/5 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.02] -mx-4 px-4 rounded-xl transition-colors duration-200"
          >
            {/* Left: index + title + description */}
            <div className="flex items-start gap-5 min-w-0">
              <span className="text-xs font-black text-gray-300 dark:text-white/20 tabular-nums pt-1 shrink-0 w-5">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight group-hover:text-[#ff5500] dark:group-hover:text-[#ff5500] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 dark:text-white/35 mt-0.5 line-clamp-1 font-medium">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Right: tech tags + arrow */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden sm:flex items-center gap-1.5">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-[5px] px-2.5 py-1 text-[11px] font-semibold rounded-full border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/60"
                  >
                    <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ background: DOT_COLORS[i % DOT_COLORS.length] }} />
                    {tech}
                  </span>
                ))}
              </div>
              <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[#ff5500] group-hover:text-[#ff5500] transition-all duration-200">
                <ArrowUpRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
