import { motion } from "framer-motion";
import { links } from "../utils/constant";

export function Connect() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-4"
    >
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          className="flex items-center gap-6 p-4 bg-white dark:bg-card-bg-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group"
        >
          <div
            className={`p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl text-text-primary-light dark:text-text-primary-dark ${link.color} transition-colors`}
          >
            <link.icon size={24} />
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
              {link.name}
            </span>
            <span className="text-text-secondary-light dark:text-text-secondary-dark">
              {link.username}
            </span>
          </div>
        </a>
      ))}
    </motion.div>
  );
}
