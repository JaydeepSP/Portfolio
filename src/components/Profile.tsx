import { useRef, useState } from "react";
import profile from "@/assets/images/avatar-logo.png";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { tabs } from "@/components/Navbar";
import { links } from "@/utils/constant";
import { StaggeredMenu, type StaggeredMenuRef } from "@/components/ui/StaggeredMenu";

export function Profile() {
  const menuRef = useRef<StaggeredMenuRef>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = tabs.map(tab => ({
    label: tab,
    ariaLabel: `Navigate to ${tab}`,
    link: `#${tab.toLowerCase().replace(/\s+/g, '-')}`
  }));

  const socialItems = links.map(link => ({
    label: link.name,
    link: link.url
  }));

  const handleToggleMenu = () => {
    menuRef.current?.toggle();
  };

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
          {/* Desktop theme toggle */}
          <ThemeToggle />

          {/* Mobile menu toggle button */}
          <button
            onClick={handleToggleMenu}
            type="button"
            className="md:hidden inline-flex items-center gap-2 text-sm font-semibold text-text-primary-light dark:text-text-primary-dark"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="uppercase">Menu</span>
            <span className="text-lg">{isMenuOpen ? '×' : '+'}</span>
          </button>
        </div>
      </div>

      {/* Staggered Menu - positioned fixed to overlay */}
      <div className="md:hidden fixed inset-0 z-50 pointer-events-none">
        <StaggeredMenu
          ref={menuRef}
          items={menuItems}
          socialItems={socialItems}
          accentColor="#ff5500"
          colors={['#171717', '#252525']}
          isFixed={true}
          renderToggleButton={() => null}
          onMenuOpen={() => setIsMenuOpen(true)}
          onMenuClose={() => setIsMenuOpen(false)}
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-[25px] leading-[37.5px] font-medium text-text-primary-light dark:text-text-primary-dark tracking-[-0.5px]">
          Hey, I'm Jaydeep Prajapati.
        </h1>
        <p className="text-[20px] leading-[30px] font-medium text-text-primary-light/60 dark:text-text-primary-dark/60 tracking-[-0.4px] max-w-lg">
          Junior Software Engineer experienced in building responsive,
          user-focused interfaces with maintainable and scalable code.
        </p>
      </div>
    </section>
  );
}
