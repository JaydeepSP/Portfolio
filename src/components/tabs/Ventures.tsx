import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../utils/constant';



export function Ventures() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-6"
        >
            {projects.map((project, index) => (
                <a
                    key={index}
                    href={project.link}
                    className="group block bg-white dark:bg-card-bg-dark rounded-3xl p-2 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all"
                >
                    <div className="flex flex-col md:flex-row gap-6 p-4">
                        <div className="flex-1 flex flex-col justify-between py-2">
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                    <div className="w-5 h-5 bg-black dark:bg-white rounded-full" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">{project.title}</h3>
                                    <p className="text-text-secondary-light dark:text-text-secondary-dark">{project.description}</p>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-text-primary-light dark:text-text-primary-dark group-hover:gap-3 transition-all">
                                Visit site <ArrowUpRight size={16} />
                            </div>
                        </div>

                        <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </a>
            ))}
        </motion.div>
    );
}
