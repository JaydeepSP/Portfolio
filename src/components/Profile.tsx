import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import profile from "@/assets/images/avatar-logo.png";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { tabs } from "@/components/Navbar";
import { links } from "@/utils/constant";
import {
  StaggeredMenu,
  type StaggeredMenuRef,
} from "@/components/ui/StaggeredMenu";

export function Profile() {
  const menuRef = useRef<StaggeredMenuRef>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lenis = useLenis();

  // Scroll locking logic to prevent multiple scrollbars and background shifting
  useEffect(() => {
    if (isMenuOpen) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, lenis]);

  const menuItems = tabs.map((tab) => ({
    label: tab,
    ariaLabel: `Navigate to ${tab}`,
    link: `#${tab.toLowerCase().replace(/\s+/g, "-")}`,
  }));

  const socialItems = links.map((link) => ({
    label: link.name,
    link: link.url,
  }));

  const handleToggleMenu = () => {
    menuRef.current?.toggle();
  };

  return (
    <>
      {/* Background blur overlay when menu is open */}
      <div
        className={`fixed inset-0 z-[150] transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "bg-black/40 backdrop-blur-sm opacity-100 pointer-events-auto"
            : "bg-transparent backdrop-blur-none opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          if (isMenuOpen) {
            handleToggleMenu();
          }
        }}
        aria-hidden="true"
      />

      {/* Staggered Menu - positioned fixed to overlay */}
      <div className="fixed inset-0 z-[200] pointer-events-none">
        <StaggeredMenu
          ref={menuRef}
          items={menuItems}
          socialItems={socialItems}
          accentColor="#ff5500"
          colors={["#171717", "#252525"]}
          isFixed={true}
          renderToggleButton={() => null}
          onMenuOpen={() => setIsMenuOpen(true)}
          onMenuClose={() => setIsMenuOpen(false)}
        />
      </div>

      {/* Fixed Header Elements - Moved outside motion section for stability */}
      <div className="flex items-center gap-2 fixed top-6 right-6 md:top-12 md:right-12 z-[250]">
        {/* Desktop theme toggle */}
        {isMenuOpen ? <div className="size-10"></div> : <ThemeToggle />}

        {/*menu toggle button */}
        <button
          onClick={handleToggleMenu}
          type="button"
          className="sm-scope sm-toggle group inline-flex items-center gap-[0.3rem] text-sm font-semibold text-text-primary-light dark:text-text-primary-dark hover:text-[#ff5500] dark:hover:text-[#ff5500] transition-colors duration-300 ease-in-out cursor-pointer overflow-visible"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className="relative inline-block h-[1em] overflow-hidden whitespace-nowrap w-auto">
            <span
              className="flex flex-col leading-none transition-transform duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isMenuOpen ? "translateY(-50%)" : "translateY(0)",
              }}
            >
              <span className="block h-[1em] leading-none uppercase">
                Menu
              </span>
              <span className="block h-[1em] leading-none uppercase">
                Close
              </span>
            </span>
          </span>

          <span className="relative w-[14px] h-[14px] shrink-0 inline-flex items-center justify-center -translate-y-[1px]">
            <span
              className="absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] transition-transform duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isMenuOpen
                  ? "translate(-50%, -50%) rotate(45deg)"
                  : "translate(-50%, -50%) rotate(0deg)",
              }}
            />
            <span
              className="absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] transition-transform duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isMenuOpen
                  ? "translate(-50%, -50%) rotate(-45deg)"
                  : "translate(-50%, -50%) rotate(90deg)",
              }}
            />
          </span>
        </button>
      </div>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-start gap-6"
      >
        <div className="flex gap-2 items-start justify-between w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gray-200 dark:bg-gray-800 p-1 rounded-xl hover:backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            <div className="w-[3.75rem] h-[3.75rem] rounded-xl bg-gray-200 overflow-hidden shadow-sm transition-all duration-300 ease-in-out group-hover:backdrop">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[25px] leading-[37.5px] font-medium text-text-primary-light dark:text-text-primary-dark tracking-[-0.5px]"
          >
            Hey, I'm Jaydeep Prajapati.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-[20px] leading-[30px] font-medium text-text-primary-light/60 dark:text-text-primary-dark/60 tracking-[-0.4px] max-w-lg"
          >
            Junior Software Engineer experienced in building responsive,
            user-focused interfaces with maintainable and scalable code.
          </motion.p>
        </div>
      </motion.section>
    </>
  );
}
