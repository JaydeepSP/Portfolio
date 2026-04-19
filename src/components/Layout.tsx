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
    const spotlight = document.getElementById("spotlight");
    if (!spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      gsap.to(spotlight, {
        x: clientX,
        y: clientY,
        duration: 0.6,
        ease: "power2.out",
        overwrite: true,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <ReactLenis root options={{
      duration: 1.2,
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      lerp: 0.1,
    }}>
      <div className="noise-overlay" />
      <div className="spotlight" id="spotlight" />
      <div className="min-h-screen w-full flex justify-center relative">
        <div className="w-full max-w-7xl mx-auto">{children}</div>
      </div>
    </ReactLenis>
  );
}
