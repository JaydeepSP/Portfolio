import { motion } from "framer-motion";
import { links } from "@/utils/constant";

export function Connect() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-1 relative z-10"
    >
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-4 py-3 -mx-4 rounded-2xl group hover:bg-gray-200 dark:hover:bg-gray-800/50 transition-all duration-200 w-fit"
        >
          {/* Icon */}
          <div className="flex-shrink-0">
            <link.icon
              size={20}
              className={`${link.color} text-text-primary-light dark:text-text-primary-dark`}
              strokeWidth={1.5}
            />
          </div>

          {/* Platform Name and Handle */}
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-text-primary-light dark:text-text-primary-dark">
              {link.name}
            </span>
            <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-primary-light dark:group-hover:text-text-primary-dark transition-colors duration-200">
              {link.username}
            </span>
          </div>
        </a>
      ))}
    </motion.div>
  );
}
