import { useRef } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/utils/constant";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!lineRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1.5, // Smooth "floaty" feel
        },
      }
    );
  }, { scope: containerRef });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ }}
      className="relative origin-top"
    >
      {/* Vertical timeline line container */}
      <div className="absolute left-[5px] top-2 bottom-2 w-[1px] bg-gray-100 dark:bg-white/5 origin-top overflow-hidden">
        {/* The actual animated line */}
        <div 
          ref={lineRef}
          className="w-full h-full bg-[#ff5500] origin-top"
        />
      </div>

      <div className="flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative pl-9"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-[6px] flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ }}
                transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                className="w-[11px] h-[11px] rounded-full border-2 border-[#ff5500] bg-white dark:bg-[#0a0a0a] z-10" 
              />
            </div>

            {/* Duration badge */}
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 dark:text-white/20 mb-2">
              {exp.duration}
            </span>

            {/* Role + Company */}
            <h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight leading-snug">
              {exp.role}
            </h3>
            <p className="text-sm font-semibold text-[#ff5500] mt-0.5 mb-1">
              {exp.company}
            </p>
            <p className="text-xs text-gray-300 dark:text-white/20 mb-4 font-medium">
              {exp.location} · {exp.type}
            </p>

            {/* Bullets */}
            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-gray-200 dark:bg-white/15 shrink-0" />
                  <span className="text-sm leading-relaxed text-gray-500 dark:text-white/40 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
