import { motion } from 'framer-motion';
import { Monitor, Smartphone, Database, Globe, PenTool, Layout, Command, Cpu } from 'lucide-react';

const stack = [
    { name: "Framer", icon: <Layout /> },
    { name: "React", icon: <Globe /> },
    { name: "TypeScript", icon: <CodeIcon /> },
    { name: "Tailwind", icon: <PenTool /> },
    { name: "Node.js", icon: <Database /> },
    { name: "Next.js", icon: <Monitor /> },
    { name: "Raycast", icon: <Command /> },
    { name: "OpenAI", icon: <Cpu /> },
    { name: "Mobile", icon: <Smartphone /> },
];

function CodeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
    )
}

export function TechStack() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
            {stack.map((item, index) => (
                <div
                    key={index}
                    className="aspect-square flex flex-col items-center justify-center gap-3 bg-white dark:bg-card-bg-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:scale-105 transition-transform"
                >
                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl text-text-primary-light dark:text-text-primary-dark">
                        {item.icon}
                    </div>
                    <span className="font-medium text-text-primary-light dark:text-text-primary-dark">{item.name}</span>
                </div>
            ))}
        </motion.div>
    );
}
