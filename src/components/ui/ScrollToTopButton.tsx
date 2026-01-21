import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        flex items-center justify-center
        fixed bottom-6 right-6 z-40
        h-10 w-10 rounded-full
        bg-black text-white dark:bg-white dark:text-black
        shadow-lg
        transition-all duration-300 ease-out
        hover:scale-110 hover:shadow-xl
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5500]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ChevronUp size={16} />
    </button>
  );
}
