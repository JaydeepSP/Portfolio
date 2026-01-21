import React, {
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
  forwardRef,
} from "react";
import { gsap } from "gsap";

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}
export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}
export interface StaggeredMenuProps {
  position?: "left" | "right";
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  accentColor?: string;
  isFixed?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  headerExtra?: React.ReactNode;
  renderToggleButton?: (props: {
    onClick: () => void;
    isOpen: boolean;
  }) => React.ReactNode;
  onToggleReady?: (toggle: () => void, isOpen: boolean) => void;
}

export interface StaggeredMenuRef {
  toggle: () => void;
  isOpen: boolean;
}

export const StaggeredMenu = forwardRef<StaggeredMenuRef, StaggeredMenuProps>(
  (
    {
      position = "right",
      colors = ["#171717", "#252525"],
      items = [],
      socialItems = [],
      displaySocials = true,
      displayItemNumbering = true,
      className,
      accentColor = "#ff5500",
      isFixed = false,
      closeOnClickAway = true,
      onMenuOpen,
      onMenuClose,
      renderToggleButton,
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const openRef = useRef(false);

    const panelRef = useRef<HTMLDivElement | null>(null);
    const preLayersRef = useRef<HTMLDivElement | null>(null);
    const preLayerElsRef = useRef<HTMLElement[]>([]);

    const plusHRef = useRef<HTMLSpanElement | null>(null);
    const plusVRef = useRef<HTMLSpanElement | null>(null);
    const iconRef = useRef<HTMLSpanElement | null>(null);

    const textInnerRef = useRef<HTMLSpanElement | null>(null);
    const [_textLines, setTextLines] = useState<string[]>(["Menu", "Close"]);

    const openTlRef = useRef<gsap.core.Timeline | null>(null);
    const closeTweenRef = useRef<gsap.core.Tween | null>(null);
    const spinTweenRef = useRef<gsap.core.Timeline | null>(null);
    const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);

    const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
    const busyRef = useRef(false);

    const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        const panel = panelRef.current;
        const preContainer = preLayersRef.current;

        const plusH = plusHRef.current;
        const plusV = plusVRef.current;
        const icon = iconRef.current;
        const textInner = textInnerRef.current;

        // Ensure menu starts closed
        if (!openRef.current) {
          openRef.current = false;
        }

        if (!panel) return;

        let preLayers: HTMLElement[] = [];
        if (preContainer) {
          preLayers = Array.from(
            preContainer.querySelectorAll(".sm-prelayer"),
          ) as HTMLElement[];
        }
        preLayerElsRef.current = preLayers;

        const offscreen = position === "left" ? -100 : 100;
        // Ensure panel starts offscreen - immediately
        gsap.set([panel, ...preLayers], {
          xPercent: offscreen,
          immediateRender: true,
          visibility: "visible",
        });

        if (plusH && plusV && icon && textInner) {
          gsap.set(plusH, { transformOrigin: "50% 50%", rotate: 0 });
          gsap.set(plusV, { transformOrigin: "50% 50%", rotate: 90 });
          gsap.set(icon, { rotate: 0, transformOrigin: "50% 50%" });
          gsap.set(textInner, { yPercent: 0 });
        }
      });
      return () => ctx.revert();
    }, [position]);

    const buildOpenTimeline = useCallback(() => {
      const panel = panelRef.current;
      const layers = preLayerElsRef.current;
      if (!panel) return null;

      openTlRef.current?.kill();
      if (closeTweenRef.current) {
        closeTweenRef.current.kill();
        closeTweenRef.current = null;
      }
      itemEntranceTweenRef.current?.kill();

      const itemEls = Array.from(
        panel.querySelectorAll(".sm-panel-itemLabel"),
      ) as HTMLElement[];
      const numberEls = Array.from(
        panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"),
      ) as HTMLElement[];
      const socialTitle = panel.querySelector(
        ".sm-socials-title",
      ) as HTMLElement | null;
      const socialLinks = Array.from(
        panel.querySelectorAll(".sm-socials-link"),
      ) as HTMLElement[];

      const layerStates = layers.map((el) => ({
        el,
        start: Number(gsap.getProperty(el, "xPercent")),
      }));
      const panelStart = Number(gsap.getProperty(panel, "xPercent"));

      if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
      if (numberEls.length)
        gsap.set(numberEls, { ["--sm-num-opacity" as any]: 0 });
      if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
      if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

      const tl = gsap.timeline({ paused: true });

      layerStates.forEach((ls, i) => {
        tl.fromTo(
          ls.el,
          { xPercent: ls.start },
          { xPercent: 0, duration: 0.5, ease: "power4.out" },
          i * 0.07,
        );
      });

      const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
      const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
      const panelDuration = 0.65;

      tl.fromTo(
        panel,
        { xPercent: panelStart },
        { xPercent: 0, duration: panelDuration, ease: "power4.out" },
        panelInsertTime,
      );

      if (itemEls.length) {
        const itemsStartRatio = 0.15;
        const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;

        tl.to(
          itemEls,
          {
            yPercent: 0,
            rotate: 0,
            duration: 1,
            ease: "power4.out",
            stagger: { each: 0.1, from: "start" },
          },
          itemsStart,
        );

        if (numberEls.length) {
          tl.to(
            numberEls,
            {
              duration: 0.6,
              ease: "power2.out",
              ["--sm-num-opacity" as any]: 1,
              stagger: { each: 0.08, from: "start" },
            },
            itemsStart + 0.1,
          );
        }
      }

      if (socialTitle || socialLinks.length) {
        const socialsStart = panelInsertTime + panelDuration * 0.4;

        if (socialTitle)
          tl.to(
            socialTitle,
            { opacity: 1, duration: 0.5, ease: "power2.out" },
            socialsStart,
          );
        if (socialLinks.length) {
          tl.to(
            socialLinks,
            {
              y: 0,
              opacity: 1,
              duration: 0.55,
              ease: "power3.out",
              stagger: { each: 0.08, from: "start" },
              onComplete: () => {
                gsap.set(socialLinks, { clearProps: "opacity" });
              },
            },
            socialsStart + 0.04,
          );
        }
      }

      openTlRef.current = tl;
      return tl;
    }, [position]);

    const playOpen = useCallback(() => {
      if (busyRef.current) return;
      busyRef.current = true;
      const tl = buildOpenTimeline();
      if (tl) {
        tl.eventCallback("onComplete", () => {
          busyRef.current = false;
        });
        tl.play(0);
      } else {
        busyRef.current = false;
      }
    }, [buildOpenTimeline]);

    const playClose = useCallback(() => {
      openTlRef.current?.kill();
      openTlRef.current = null;
      itemEntranceTweenRef.current?.kill();

      const panel = panelRef.current;
      const layers = preLayerElsRef.current;
      if (!panel) return;

      const all: HTMLElement[] = [...layers, panel];
      closeTweenRef.current?.kill();

      const offscreen = position === "left" ? -100 : 100;

      closeTweenRef.current = gsap.to(all, {
        xPercent: offscreen,
        duration: 0.32,
        ease: "power3.in",
        overwrite: "auto",
        onComplete: () => {
          const itemEls = Array.from(
            panel.querySelectorAll(".sm-panel-itemLabel"),
          ) as HTMLElement[];
          if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });

          const numberEls = Array.from(
            panel.querySelectorAll(
              ".sm-panel-list[data-numbering] .sm-panel-item",
            ),
          ) as HTMLElement[];
          if (numberEls.length)
            gsap.set(numberEls, { ["--sm-num-opacity" as any]: 0 });

          const socialTitle = panel.querySelector(
            ".sm-socials-title",
          ) as HTMLElement | null;
          const socialLinks = Array.from(
            panel.querySelectorAll(".sm-socials-link"),
          ) as HTMLElement[];
          if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
          if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

          busyRef.current = false;
        },
      });
    }, [position]);

    const animateIcon = useCallback((opening: boolean) => {
      const icon = iconRef.current;
      const h = plusHRef.current;
      const v = plusVRef.current;
      if (!icon || !h || !v) return;

      spinTweenRef.current?.kill();

      if (opening) {
        gsap.set(icon, { rotate: 0, transformOrigin: "50% 50%" });
        spinTweenRef.current = gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .to(h, { rotate: 45, duration: 0.5 }, 0)
          .to(v, { rotate: -45, duration: 0.5 }, 0);
      } else {
        spinTweenRef.current = gsap
          .timeline({ defaults: { ease: "power3.inOut" } })
          .to(h, { rotate: 0, duration: 0.35 }, 0)
          .to(v, { rotate: 90, duration: 0.35 }, 0)
          .to(icon, { rotate: 0, duration: 0.001 }, 0);
      }
    }, []);

    const animateColor = () => {
      // Handled by CSS
    };

    React.useEffect(() => {
      // Handled by CSS
    }, []);

    const animateText = useCallback((opening: boolean) => {
      const inner = textInnerRef.current;
      if (!inner) return;

      textCycleAnimRef.current?.kill();

      const currentLabel = opening ? "Menu" : "Close";
      const targetLabel = opening ? "Close" : "Menu";
      const cycles = 3;

      const seq: string[] = [currentLabel];
      let last = currentLabel;
      for (let i = 0; i < cycles; i++) {
        last = last === "Menu" ? "Close" : "Menu";
        seq.push(last);
      }
      if (last !== targetLabel) seq.push(targetLabel);
      seq.push(targetLabel);

      setTextLines(seq);
      gsap.set(inner, { yPercent: 0 });

      const lineCount = seq.length;
      const finalShift = ((lineCount - 1) / lineCount) * 100;

      textCycleAnimRef.current = gsap.to(inner, {
        yPercent: -finalShift,
        duration: 0.5 + lineCount * 0.07,
        ease: "power4.out",
      });
    }, []);

    const toggleMenu = useCallback(() => {
      const target = !openRef.current;
      openRef.current = target;
      setOpen(target);

      if (target) {
        onMenuOpen?.();
        playOpen();
      } else {
        onMenuClose?.();
        playClose();
      }

      animateIcon(target);
      animateColor();
      animateText(target);
    }, [
      playOpen,
      playClose,
      animateIcon,
      animateColor,
      animateText,
      onMenuOpen,
      onMenuClose,
    ]);

    const closeMenu = useCallback(() => {
      if (openRef.current || open) {
        openRef.current = false;
        setOpen(false);
        onMenuClose?.();
        playClose();
        animateIcon(false);
        animateColor();
        animateText(false);
      }
    }, [playClose, animateIcon, animateColor, animateText, onMenuClose, open]);

    // Expose toggle function via ref
    useImperativeHandle(
      ref,
      () => ({
        toggle: toggleMenu,
        isOpen: open,
      }),
      [toggleMenu, open],
    );

    React.useEffect(() => {
      if (!closeOnClickAway || !open) return;

      const handleClickOutside = (event: MouseEvent) => {
        if (
          panelRef.current &&
          !panelRef.current.contains(event.target as Node) &&
          toggleBtnRef.current &&
          !toggleBtnRef.current.contains(event.target as Node)
        ) {
          closeMenu();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [closeOnClickAway, open, closeMenu]);

    return (
      <div
        className={`sm-scope z-[100] ${
          isFixed || open
            ? "fixed inset-0 w-screen h-screen overflow-hidden"
            : "relative"
        }`}
      >
        <div
          className={
            (className ? className + " " : "") +
            "staggered-menu-wrapper pointer-events-none relative w-full h-full z-40"
          }
          style={
            accentColor
              ? ({ ["--sm-accent" as any]: accentColor } as React.CSSProperties)
              : undefined
          }
          data-position={position}
          data-open={open || undefined}
        >
          <div
            ref={preLayersRef}
            className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[5]"
            aria-hidden="true"
          >
            {(() => {
              const raw =
                colors && colors.length
                  ? colors.slice(0, 4)
                  : ["#171717", "#252525"];
              let arr = [...raw];
              if (arr.length >= 3) {
                const mid = Math.floor(arr.length / 2);
                arr.splice(mid, 1);
              }
              return arr.map((c, i) => (
                <div
                  key={i}
                  className="sm-prelayer absolute top-0 right-0 h-full w-full translate-x-0"
                  style={{ background: c }}
                />
              ));
            })()}
          </div>

          {renderToggleButton ? (
            <div className="pointer-events-auto relative z-[200]">
              {renderToggleButton({ onClick: toggleMenu, isOpen: open })}
            </div>
          ) : (
            <button
              ref={toggleBtnRef}
              onClick={toggleMenu}
              type="button"
              className="sm-toggle pointer-events-auto inline-flex items-center gap-2 text-sm font-semibold relative z-[200]"
            >
              <span className="uppercase">Menu</span>
              <span className="sm-icon">+</span>
            </button>
          )}

          <aside
            id="staggered-menu-panel"
            ref={panelRef}
            className="staggered-menu-panel absolute top-0 right-0 h-full bg-white dark:bg-[#0a0a0a] flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-10 backdrop-blur-[12px] pointer-events-auto"
            style={{
              WebkitBackdropFilter: "blur(12px)",
              visibility: open ? "visible" : "hidden",
            }}
            aria-hidden={!open}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                closeMenu();
              }}
              type="button"
              className="sm-panel-close absolute top-8 right-8 w-10 h-10 flex items-center justify-center text-2xl font-light text-black dark:text-white hover:text-[#ff5500] dark:hover:text-[#ff5500] transition-colors duration-200 z-50 cursor-pointer"
              aria-label="Close menu"
            >
              ×
            </button>

            <div className="sm-panel-inner flex-1 flex flex-col gap-5">
              <ul
                className="sm-panel-list list-none m-0 p-0 flex flex-col gap-2"
                role="list"
                data-numbering={displayItemNumbering || undefined}
              >
                {items && items.length ? (
                  items.map((it, idx) => (
                    <li
                      className="sm-panel-itemWrap relative overflow-hidden leading-none"
                      key={it.label + idx}
                    >
                      <a
                        className="sm-panel-item relative text-black dark:text-white font-black text-[3rem] md:text-[4rem] cursor-pointer leading-none tracking-tighter uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em] hover:text-[#ff5500] dark:hover:text-[#ff5500]"
                        href={it.link}
                        onClick={closeMenu}
                        aria-label={it.ariaLabel}
                        data-index={idx + 1}
                      >
                        <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                          {it.label}
                        </span>
                      </a>
                    </li>
                  ))
                ) : (
                  <li
                    className="sm-panel-itemWrap relative overflow-hidden leading-none"
                    aria-hidden="true"
                  >
                    <span className="sm-panel-item relative text-black dark:text-white font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]">
                      <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                        No items
                      </span>
                    </span>
                  </li>
                )}
              </ul>

              {displaySocials && socialItems && socialItems.length > 0 && (
                <div
                  className="sm-socials mt-auto pt-8 flex flex-col gap-3"
                  aria-label="Social links"
                >
                  <h3 className="sm-socials-title m-0 text-xs font-black uppercase tracking-[0.3em] [color:var(--sm-accent,#ff5500)]">
                    Socials
                  </h3>
                  <ul
                    className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-6 flex-wrap"
                    role="list"
                  >
                    {socialItems.map((s, i) => (
                      <li key={s.label + i} className="sm-socials-item">
                        <a
                          href={s.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sm-socials-link text-[0.9rem] font-black uppercase tracking-widest text-[#111] dark:text-white/60 no-underline relative inline-block py-[2px] transition-[color,opacity] duration-300 ease-linear hover:text-[#ff5500] dark:hover:text-[#ff5500] hover:opacity-100"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>

        <style>{`
.sm-scope .staggered-menu-wrapper { position: relative; width: 100%; height: 100%; z-index: 40; pointer-events: none; }
.sm-scope .staggered-menu-header { position: absolute; top: 0; left: 0; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 2em; background: transparent; pointer-events: none; z-index: 20; }
.sm-scope .staggered-menu-header > * { pointer-events: auto; }
.sm-scope .sm-logo { display: flex; align-items: center; user-select: none; }
.sm-scope .sm-logo-img { display: block; filter: invert(0); transition: filter 0.3s; }
.dark .sm-scope .sm-logo-img { filter: invert(0); }
.sm-scope .sm-toggle { position: relative; display: inline-flex; align-items: center; gap: 0.3rem; background: transparent; border: none; cursor: pointer; color: inherit; font-weight: 500; line-height: 1; overflow: visible; }
.sm-scope .sm-toggle:focus-visible { outline: 2px solid #ff5500; outline-offset: 4px; border-radius: 4px; }
.sm-scope .sm-toggle-textWrap { position: relative; margin-right: 0.5em; display: inline-block; height: 1em; overflow: hidden; white-space: nowrap; width: var(--sm-toggle-width, auto); min-width: var(--sm-toggle-width, auto); }
.sm-scope .sm-toggle-textInner { display: flex; flex-direction: column; line-height: 1; }
.sm-scope .sm-toggle-line { display: block; height: 1em; line-height: 1; }
.sm-scope .sm-icon { position: relative; width: 14px; height: 14px; flex: 0 0 14px; display: inline-flex; align-items: center; justify-content: center; will-change: transform; }
.sm-scope .sm-panel-itemWrap { position: relative; overflow: hidden; line-height: 1; }
.sm-scope .sm-icon-line { position: absolute; left: 50%; top: 50%; width: 100%; height: 2px; background: currentColor; border-radius: 2px; transform: translate(-50%, -50%); will-change: transform; }
.sm-scope .staggered-menu-panel { position: absolute; top: 0; right: 0; width: clamp(280px, 45vw, 600px); height: 100%; display: flex; flex-direction: column; padding: 8em 3em 3em 3em; overflow-y: auto; z-index: 10; border-left: 1px solid rgba(255,255,255,0.05); }
.sm-scope [data-position='left'] .staggered-menu-panel { right: auto; left: 0; }
.sm-scope .sm-prelayers { position: absolute; top: 0; right: 0; bottom: 0; width: clamp(280px, 45vw, 600px); pointer-events: none; z-index: 5; }
.sm-scope [data-position='left'] .sm-prelayers { right: auto; left: 0; }
.sm-scope .sm-prelayer { position: absolute; top: 0; right: 0; height: 100%; width: 100%; transform: translateX(0); }
.sm-scope .sm-panel-inner { flex: 1; display: flex; flex-direction: column; gap: 2rem; }
.sm-scope .sm-socials { margin-top: auto; padding-top: 2rem; display: flex; flex-direction: column; gap: 1rem; }
.sm-scope .sm-socials-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: row; align-items: center; gap: 1.5rem; flex-wrap: wrap; }
.sm-scope .sm-socials-list .sm-socials-link { opacity: 1; transition: all 0.3s ease; }
.sm-scope .sm-socials-list:hover .sm-socials-link:not(:hover) { opacity: 0.35; }
.sm-scope .sm-panel-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 1rem; }
.sm-scope .sm-panel-item { position: relative; transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); }
.sm-scope .sm-panel-itemLabel { display: inline-block; will-change: transform; transform-origin: 50% 100%; }
.sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
.sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after { counter-increment: smItem; content: counter(smItem, decimal-leading-zero); position: absolute; top: 0.2em; right: 2em; font-size: 14px; font-weight: 900; color: var(--sm-accent, #ff5500); letter-spacing: 0.1em; pointer-events: none; user-select: none; opacity: var(--sm-num-opacity, 0); transition: opacity 0.5s; }
@media (max-width: 768px) { 
  .sm-scope .staggered-menu-panel, .sm-scope .sm-prelayers { width: 100%; left: 0; right: 0; }
  .sm-scope .sm-panel-item { font-size: 2.5rem; }
}
      `}</style>
      </div>
    );
  },
);

StaggeredMenu.displayName = "StaggeredMenu";

export default StaggeredMenu;
