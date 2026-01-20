import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/utils/constant";

export function Clients() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid gap-6"
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="p-8 bg-white dark:bg-card-bg-dark rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm"
        >
          <Quote className="text-gray-300 dark:text-gray-600 mb-6" size={32} />
          <p className="text-lg text-text-primary-light dark:text-text-primary-dark font-medium leading-relaxed mb-8">
            "{testimonial.text}"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-12 h-12 rounded-full border border-gray-100 dark:border-gray-700"
            />
            <div>
              <h4 className="font-bold text-text-primary-light dark:text-text-primary-dark">
                {testimonial.author}
              </h4>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                {testimonial.handle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
