import { motion } from 'framer-motion';

export type Tab = 'Ventures' | 'Services' | 'Clients' | 'Tech Stack' | 'Connect';

interface NavbarProps {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
}

const tabs: Tab[] = ['Ventures', 'Services', 'Clients', 'Tech Stack', 'Connect'];

export function Navbar({ activeTab, setActiveTab }: NavbarProps) {
    return (
        <div className="sticky top-4 z-50 flex justify-center w-full">
            <nav className="flex items-center flex-wrap p-1.5 bg-white/80 dark:bg-[#171717]/80 backdrop-blur-md rounded-full shadow-sm border border-gray-200/50 dark:border-gray-800 overflow-x-auto max-w-full no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab ? 'text-white dark:text-white' : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark'
                            }`}
                    >
                        {activeTab === tab && (
                            <motion.div
                                layoutId="active-tab"
                                className="absolute inset-0 bg-black dark:bg-[#ff5500] rounded-full"
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{tab}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}
