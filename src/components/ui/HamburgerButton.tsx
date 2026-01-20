import { motion } from "framer-motion";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  isFixed?: boolean;
  className?: string;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
  isFixed = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`md:hidden z-[60] w-10 h-10 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 shadow-lg flex items-center justify-center transition-all duration-300 ${
        isFixed && isOpen ? "fixed top-8 right-6" : "relative"
      } overflow-hidden group ${className}`}
      aria-label="Toggle navigation menu"
    >
      <div className="w-5 h-4 flex flex-col justify-between items-center relative">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          className="w-full h-0.5 bg-black dark:bg-white rounded-full origin-center"
        />
        <motion.span
          animate={isOpen ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
          className="w-full h-0.5 bg-black dark:bg-white rounded-full"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          className="w-full h-0.5 bg-black dark:bg-white rounded-full origin-center"
        />
      </div>
    </button>
  );
};
