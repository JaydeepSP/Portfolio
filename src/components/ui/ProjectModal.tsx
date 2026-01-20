import { motion, AnimatePresence } from "framer-motion";
import { X, Github } from "lucide-react";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#171717] rounded-[2.5rem] shadow-2xl border border-white/20 dark:border-white/5 flex flex-col"
          >
            {/* Fixed Close Button Container */}
            <div className="absolute top-6 right-6 z-[110]">
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md hover:bg-black/10 dark:hover:bg-white/20 transition-all border border-black/5 dark:border-white/10 shadow-lg group"
              >
                <X
                  size={24}
                  className="text-text-primary-light dark:text-text-primary-dark group-hover:scale-110 transition-transform"
                />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar rounded-[2.5rem]">
              <div className="flex flex-col">
                {/* Hero Image */}
                <div className="relative w-full h-[350px] md:h-[500px] shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#171717] via-transparent to-transparent" />
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-14 -mt-24 relative z-10">
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <h2 className="text-4xl md:text-6xl font-black text-text-primary-light dark:text-text-primary-dark tracking-tighter leading-none">
                        {project.title}
                      </h2>

                      <div className="flex flex-wrap gap-2.5">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-5 py-2 text-[12px] uppercase tracking-[0.2em] font-black rounded-full bg-black/5 dark:bg-white/5 text-text-secondary-light dark:text-text-secondary-dark border border-black/5 dark:border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                      {/* Left Column: Description */}
                      <div className="md:col-span-2 space-y-6">
                        <h3 className="text-xs font-black dark:text-[#ff5500] uppercase tracking-[0.3em] text-gray-500">
                          Project Overview
                        </h3>
                        <p className="text-xl md:text-2xl leading-relaxed text-text-primary-light dark:text-text-primary-dark font-medium opacity-90">
                          {project.longDescription || project.description}
                        </p>
                      </div>

                      {/* Right Column: Key Features */}
                      {project.features && (
                        <div className="space-y-6">
                          <h3 className="text-xs font-black dark:text-[#ff5500] uppercase tracking-[0.2em] text-gray-500">
                            Key Features
                          </h3>
                          <ul className="space-y-4">
                            {project.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex gap-4 text-text-secondary-light dark:text-text-secondary-dark font-semibold"
                              >
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-[#ff5500] shrink-0" />
                                <span className="text-[15px] leading-tight">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Action CTA */}
                    <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-6">
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-10 py-5 bg-black dark:bg-[#ff5500] text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:translate-y-[-4px] transition-all dark:shadow-[0_10px_30px_rgba(255,85,0,0.3)] active:scale-95"
                        >
                          <Github size={20} />
                          Explore Codebase
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
