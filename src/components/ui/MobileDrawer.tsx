import { motion, AnimatePresence } from "framer-motion";
import GlassSurface, { useDarkMode } from "./GlassSurface";

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    activeTab: string;
    tabs: string[];
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
    isOpen,
    onClose,
    activeTab,
    tabs,
}) => {
    const isDark = useDarkMode();

    const navVariants = {
        hidden: { x: "100%", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", damping: 25, stiffness: 200 },
        },
        exit: {
            x: "100%",
            opacity: 0,
            transition: { type: "spring", damping: 25, stiffness: 200 },
        },
    } as const;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] md:hidden"
                    />
                    <motion.div
                        variants={navVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed top-0 right-0 h-full w-[280px] z-[58] md:hidden"
                    >
                        <GlassSurface
                            width="100%"
                            height="100%"
                            borderRadius={0}
                            backgroundOpacity={0.1}
                            saturation={2}
                            blur={20}
                            brightness={isDark ? 40 : 90}
                            className="flex flex-col p-8 pt-24 gap-6"
                        >
                            <div className="flex flex-col gap-4">
                                <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                                    Navigation
                                </p>
                                {tabs.map((tab) => (
                                    <a
                                        key={tab}
                                        href={`#${tab.toLowerCase().replace(" ", "-")}`}
                                        onClick={onClose}
                                        className={`text-left text-2xl font-semibold transition-all ${activeTab === tab
                                                ? "text-black dark:text-[#ff5500] translate-x-2"
                                                : "text-gray-800 dark:text-gray-500 hover:text-black dark:hover:text-[#ff5500]"
                                            }`}
                                    >
                                        {tab}
                                    </a>
                                ))}
                            </div>
                        </GlassSurface>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
