import { type ReactNode, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  useGSAP(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      gsap.to(document.documentElement, {
        "--mouse-x": `${clientX}px`,
        "--mouse-y": `${clientY}px`,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <ReactLenis root options={{
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
    }}>
      <div className="noise-overlay" />
      <div className="spotlight" id="spotlight" />
      <div className="min-h-screen w-full flex justify-center relative">
        <div className="w-full max-w-7xl mx-auto">{children}</div>
      </div>
    </ReactLenis>
  );
}
