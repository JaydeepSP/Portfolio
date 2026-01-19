import { motion } from "framer-motion";
import { stack } from "../../utils/constant";

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
            <item.icon />
          </div>
          <span className="font-medium text-sm text-text-primary-light dark:text-text-primary-dark text-center">
            {item.name}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
