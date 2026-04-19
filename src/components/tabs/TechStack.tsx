import { motion } from "framer-motion";
import { stack } from "@/utils/constant";

// Assign a unique accent color per category
const categoryColors: Record<string, string> = {
  Frontend: "#3b82f6",       // blue
  Backend: "#f97316",        // orange
  Database: "#22c55e",       // green
  "Tools & Libraries": "#a855f7", // purple
};

// Assign per-item dot colors to add variety (cycles through a palette)
const dotPalette = [
  "#3b82f6", "#f97316", "#22c55e", "#a855f7",
  "#ec4899", "#14b8a6", "#eab308", "#ef4444",
];

export function TechStack() {
  const categories = Array.from(
    new Set(stack.map((item) => item.category || "Other"))
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col"
    >
      {categories.map((category, catIdx) => {
        const items = stack.filter(
          (item) => (item.category || "Other") === category
        );
        const accentColor = categoryColors[category] ?? "#6b7280";

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-20px", once: true }}
            transition={{ duration: 0.6, delay: catIdx * 0.1, ease: "easeOut" }}
            className="flex max-md:flex-col items-start gap-6 py-4 md:first:pt-0 last:pb-0"
          >
            {/* Category label */}
            <span
              className="text-xs font-black uppercase tracking-[0.15em] md:w-28 shrink-0 pt-[6px]"
              style={{ color: accentColor }}
            >
              {category}
            </span>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {items.map((item, idx) => {
                const dotColor = dotPalette[(catIdx * 4 + idx) % dotPalette.length];
                return (
                  <motion.span
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-[6px] px-3 py-[5px] rounded-full border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-sm font-semibold text-gray-700 dark:text-white/85 cursor-default select-none transition-colors hover:border-gray-400 dark:hover:border-white/20 hover:bg-gray-200 dark:hover:bg-white/10"
                  >
                    <span
                      className="w-[7px] h-[7px] rounded-full shrink-0"
                      style={{ background: dotColor }}
                    />
                    {item.name}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
