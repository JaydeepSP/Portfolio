import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[200] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

          {/* Side Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            className="relative w-full max-w-lg h-full bg-white dark:bg-[#0f0f0f] border-l border-gray-100 dark:border-white/5 flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-gray-100 dark:border-white/5 shrink-0">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-[5px] px-2.5 py-1 text-[11px] font-semibold rounded-full border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/60"
                  >
                    <span
                      className="w-[6px] h-[6px] rounded-full shrink-0"
                      style={{ background: `hsl(${(i * 60 + 200) % 360}, 70%, 55%)` }}
                    />
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/30 transition-colors duration-150 shrink-0 ml-4"
                aria-label="Close"
              >
                <X size={14} className="text-gray-500 dark:text-white/50" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto">
              {/* Project Image */}
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0f0f0f] to-transparent" />
              </div>

              <div className="px-8 pb-10 -mt-12 relative z-10 space-y-8">
                {/* Title */}
                <div>
                  <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                    {project.title}
                  </h2>
                </div>

                {/* Overview */}
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ff5500]">
                    Overview
                  </span>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-white/50 font-medium">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Features */}
                {project.features && (
                  <div className="space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ff5500]">
                      Key Features
                    </span>
                    <ul className="space-y-2.5">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[#ff5500] shrink-0" />
                          <span className="text-sm text-gray-500 dark:text-white/45 font-medium leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="px-8 py-6 border-t border-gray-100 dark:border-white/5 shrink-0">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-gray-900 dark:bg-white/5 hover:bg-[#ff5500] dark:hover:bg-[#ff5500] text-white rounded-xl font-bold text-sm uppercase tracking-widest transition-colors duration-200 group"
              >
                View on GitHub
                <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-150" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
