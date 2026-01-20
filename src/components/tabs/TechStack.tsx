import { motion } from "framer-motion";
import { stack } from "@/utils/constant";

export function TechStack() {
  // Group stack items by category
  const categories = Array.from(
    new Set(stack.map((item) => item.category || "Other")),
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {categories.map((category) => (
        <div key={category}>
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
            {category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {stack
              .filter((item) => (item.category || "Other") === category)
              .map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-card-bg-dark rounded-full border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all cursor-pointer relative z-10"
                >
                  <div className="text-text-primary-light dark:text-text-primary-dark">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-sm text-text-primary-light dark:text-text-primary-dark">
                    {item.name}
                  </span>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
