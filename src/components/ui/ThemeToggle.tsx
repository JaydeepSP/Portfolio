import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sun, Moon } from "lucide-react";

import toggleSound from "@/assets/audio/toggle.wav";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio(toggleSound);

        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => { });
        }

        const newIsDark = !isDark;
        setIsDark(newIsDark);

        if (newIsDark) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative group"
            aria-label="Toggle theme"
        >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: isDark ? 360 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {isDark ? (
                        <Moon className="w-6 h-6 text-orange-500" />
                    ) : (
                        <Sun className="w-6 h-6 text-black" />
                    )}
                </motion.div>
            </div>

            <motion.div
                className="absolute -top-0.5 -right-0.5 w-3 h-3 dark:bg-[#ff5500] bg-black rounded-full border-2 border-white dark:border-gray-900 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
            />
        </button>
    );
}
