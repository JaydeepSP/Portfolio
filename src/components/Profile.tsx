import { useRef, useState } from "react";
import { motion } from "framer-motion";
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
        className={`fixed inset-0 z-[150] transition-all duration-500 ease-in-out ${isMenuOpen
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

      {/* Fixed Header Elements */}
      <div className="flex items-center gap-2 fixed top-6 right-6 md:top-12 md:right-12 z-[250]">
        {/* Desktop theme toggle */}
        {isMenuOpen ? <div className="size-10"></div> : <ThemeToggle />}

        {/*menu toggle button */}
        <button
          onClick={handleToggleMenu}
          type="button"
          className="sm-scope sm-toggle group inline-flex items-center gap-[0.3rem] text-sm font-semibold text-text-primary-light dark:text-text-primary-dark hover:text-[#ff5500] dark:hover:text-[#ff5500] transition-colors duration-300 ease-in-out cursor-pointer overflow-visible border border-black/10 dark:border-white/10 rounded-full p-2 backdrop-blur-sm"
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
        className="h-[100dvh] w-full flex flex-col items-center justify-center text-center gap-12 relative overflow-hidden"
      >
        <div className="space-y-8 max-w-4xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-200 dark:bg-gray-800 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden transition-all duration-700">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover scale-100 hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="overflow-hidden py-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[42px] md:text-[86px] leading-[1.1] font-medium text-text-primary-light dark:text-text-primary-dark tracking-[-0.04em]"
              >
                Jaydeep Prajapati.
              </motion.h1>
            </div>

            <div className="overflow-hidden py-1 flex justify-center">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[18px] md:text-[24px] leading-relaxed text-text-primary-light/60 dark:text-text-primary-dark/60 tracking-tight max-w-2xl"
              >
                Junior Software Engineer crafting seamless digital experiences with precision and minimalist aesthetics.
              </motion.p>
            </div>
          </div>
        </div>

      </motion.section>
    </>
  );
}
