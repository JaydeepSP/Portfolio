import { motion } from "framer-motion";
import { experiences } from "@/utils/constant";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import { MapPin, Calendar, Briefcase } from "lucide-react";

export function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative w-full flex justify-center py-12 px-4"
    >
      <CardSwap 
        width={560} // Fixed width on desktop for better design control
        height={380} 
        cardDistance={40} 
        verticalDistance={40} 
        delay={4500}
        pauseOnHover={true}
      >
        {experiences.map((exp, index) => (
          <Card key={index} customClass="p-6 md:p-10 flex flex-col gap-6 !border-white/20 shadow-2xl overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5500]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            {/* Header section */}
            <div className="flex flex-col gap-1 relative z-10">
              <div className="flex items-center gap-2 text-[#ff5500] mb-1">
                <Briefcase size={14} className="shrink-0" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Work Experience
                </span>
              </div>
              
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tighter uppercase leading-none">
                  {exp.role}
                </h3>
              </div>
              
              <p className="text-lg font-bold text-[#ff5500]/90 italic mt-1">
                @ {exp.company}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-black/5 dark:border-white/10 relative z-10">
              <div className="flex items-center gap-2 text-gray-500 dark:text-white/40">
                <Calendar size={14} className="shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wider">{exp.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-white/40">
                <MapPin size={14} className="shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wider">{exp.location}</span>
              </div>
            </div>

            {/* Content section */}
            <div className="flex-1 relative z-10">
              <ul className="space-y-3">
                {exp.description.slice(0, 3).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#ff5500] shrink-0 shadow-[0_0_8px_rgba(255,85,0,0.5)]" />
                    <span className="text-[13px] md:text-sm leading-relaxed text-gray-600 dark:text-white/60 font-medium group-hover:text-gray-900 dark:group-hover:text-white/80 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Bottom Decor */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff5500]/20 to-transparent" />
          </Card>
        ))}
      </CardSwap>
    </motion.div>
  );
}
