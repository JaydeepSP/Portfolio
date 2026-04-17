import clsx from "clsx";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "text-xl sm:text-3xl md:text-[64px] font-bold mb-12 uppercase tracking-tight text-gray-400 dark:text-white",
        className,
      )}
    >
      {title}
    </motion.h2>
  );
}
