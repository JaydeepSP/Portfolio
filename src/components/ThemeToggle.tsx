import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import toggleSound from "../assets/audio/toggle.wav";

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
    // 🔊 Play sound
    audioRef.current?.currentTime && (audioRef.current.currentTime = 0);
    audioRef.current?.play().catch(() => {
      // prevents error on first interaction in some browsers
    });

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
    <div className="fixed top-6 right-6 z-50">
      <div
        className={`
          relative w-11 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out
          shadow-inner flex items-center cursor-pointer
          ${isDark ? "bg-[#ff5500]" : "bg-[#e5e5e5]"}
        `}
        onClick={toggleTheme}
      >
        {/* Knob */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 35 }}
          className={`
            relative w-4 h-4 rounded-full shadow-lg z-10
            ${isDark ? "bg-[#2a2a2a] ml-auto" : "bg-white mr-auto"}
          `}
        >
          <div className="w-1 h-1 rounded-full bg-neutral-400/20" />
        </motion.div>
      </div>
    </div>
  );
}
