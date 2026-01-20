import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../assets/images/avatar.png";
import { ThemeToggle } from "./ThemeToggle";
import GlassSurface, { useDarkMode } from "./ui/GlassSurface";
import { tabs } from "./Navbar";

export function Profile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = useDarkMode();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 200 }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { type: "spring", damping: 25, stiffness: 200 }
    }
  } as const;

  return (
    <section className="flex flex-col items-start gap-6">
      <div className="flex gap-2 items-start justify-between w-full">
        <div className="bg-gray-200 dark:bg-gray-800 p-1 rounded-xl hover:backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-lg">
          <div className="w-[3.75rem] h-[3.75rem] rounded-xl bg-gray-200 overflow-hidden shadow-sm transition-all duration-300 ease-in-out group-hover:backdrop">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className={`md:hidden z-[60] w-10 h-10 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 shadow-lg flex items-center justify-center transition-all duration-300 ${isMenuOpen ? "fixed top-8 right-6" : "relative"
              } overflow-hidden group`}
            aria-label="Toggle navigation menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center relative">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-black dark:bg-white rounded-full origin-center"
              />
              <motion.span
                animate={isMenuOpen ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
                className="w-full h-0.5 bg-black dark:bg-white rounded-full"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-black dark:bg-white rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
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
                  <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Navigation</p>
                  {tabs.map((tab) => (
                    <a
                      key={tab}
                      href={`#${tab.toLowerCase().replace(" ", "-")}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-left text-2xl font-semibold text-gray-800 dark:text-gray-500 hover:text-black dark:hover:text-[#ff5500] transition-all"
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
      <div className="space-y-4">
        <h1 className="text-[25px] leading-[37.5px] font-medium text-text-primary-light dark:text-text-primary-dark tracking-[-0.5px]">
          Hey, I'm Jaydeep Prajapati.
        </h1>
        <p className="text-[20px] leading-[30px] font-medium text-text-primary-light/60 dark:text-text-primary-dark/60 tracking-[-0.4px] max-w-lg">
          I'm a Web Developer.
        </p>
      </div>
      {/* <String /> */}
    </section>
  );
}
