import { useState, useRef, useEffect, type JSX } from "react";
import { gsap } from "gsap";

type Dimensions = {
  width: number;
  height: number;
};

const String = (): JSX.Element => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  const [dimensions, setDimensions] = useState<Dimensions>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: 250,
  });

  const centerY = dimensions.height / 2;

  const defaultPath = `M 0 ${centerY} Q ${dimensions.width / 2} ${centerY} ${dimensions.width} ${centerY}`;

  const [initialPath, setInitialPath] = useState<string>(defaultPath);

  /* ---------- Resize handler ---------- */
  useEffect(() => {
    const updateDimensions = () => {
      if (!svgRef.current) return;

      const rect = svgRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: 250,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  /* ---------- Mouse interaction ---------- */
  useEffect(() => {
    const svgEl = svgRef.current;
    const pathEl = pathRef.current;

    if (!svgEl || !pathEl || dimensions.width === 0) return;

    const centerY = dimensions.height / 2;

    const initPath = `M 0 ${centerY} Q ${dimensions.width / 2} ${centerY} ${dimensions.width} ${centerY}`;

    setInitialPath(initPath);
    pathEl.setAttribute("d", initPath);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = svgEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const path = `M 0 ${centerY} Q ${x} ${y} ${dimensions.width} ${centerY}`;

      gsap.to(pathEl, {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pathEl, {
        attr: { d: initPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
      });
    };

    svgEl.addEventListener("mousemove", handleMouseMove);
    svgEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      svgEl.removeEventListener("mousemove", handleMouseMove);
      svgEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dimensions]);

  return (
    <svg
      ref={svgRef}
      height={dimensions.height}
      className="w-full stroke-gray-300 dark:!stroke-gray-100/50 absolute top-[-126px] left-0"
    >
      <path ref={pathRef} d={initialPath} strokeWidth={1} fill="transparent" />
    </svg>
  );
};

export default String;
