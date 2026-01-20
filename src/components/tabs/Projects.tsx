import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/utils/constant";
import { ProjectModal } from "@/components/ui/ProjectModal";
import type { Project } from "@/types";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            onClick={(e) => handleProjectClick(e, project)}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col bg-white/40 dark:bg-[#171717]/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/20 dark:border-white/5 shadow-premium hover:shadow-premium-hover transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative w-full h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-[#171717]/80 to-transparent z-10 opacity-60" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Hover Link Icon */}
              <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-black dark:bg-[#ff5500] rounded-full flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
                <ArrowUpRight size={22} className="text-white" />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-8 pt-2 relative z-20">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight transition-colors group-hover:text-black dark:group-hover:text-[#ff5500]">
                  {project.title}
                </h3>

                <p className="text-[17px] leading-relaxed text-text-secondary-light/80 dark:text-text-secondary-dark/80 font-medium line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-base font-bold text-text-primary-light dark:text-text-primary-dark group-hover:gap-3 transition-all">
                  View on GitHub{" "}
                  <ArrowUpRight
                    size={20}
                    className="group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 text-[11px] uppercase tracking-widest font-bold rounded-full bg-black/5 dark:bg-white/5 text-text-secondary-light dark:text-text-secondary-dark border border-transparent group-hover:border-black/10 dark:group-hover:border-white/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </motion.a>
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
