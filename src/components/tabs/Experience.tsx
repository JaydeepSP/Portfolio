import { motion } from "framer-motion";
import { experiences } from "@/utils/constant";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col gap-6"
    >
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-white dark:bg-card-bg-dark rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-black dark:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                    {exp.role}
                  </h3>
                  <p className="text-lg font-medium text-text-secondary-light dark:text-text-secondary-dark">
                    {exp.company}
                  </p>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <span className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">
                  {exp.duration}
                </span>
                <p className="text-xs text-text-secondary-light/60 dark:text-text-secondary-dark/60">
                  {exp.location} • {exp.type}
                </p>
              </div>
            </div>

            <div className="sm:hidden -mt-2 mb-2">
              <span className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">
                {exp.duration}
              </span>
              <p className="text-xs text-text-secondary-light/60 dark:text-text-secondary-dark/60">
                {exp.location} • {exp.type}
              </p>
            </div>

            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-text-secondary-light dark:text-text-secondary-dark"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
