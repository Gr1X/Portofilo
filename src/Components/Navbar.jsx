import { useLayoutEffect, useRef, useState, useCallback } from "react"; // 1. Tambahkan useCallback
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const CardNav = ({
    logo,
    logoAlt = "Logo",
    items,
    className = "",
    ease = "power3.out",
    menuColor,
    buttonBgColor,
    buttonTextColor,

}) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef(null);
    const cardsRef = useRef([]);
    const tlRef = useRef(null);

        const calculateHeight = () => {
            const navEl = navRef.current;
            if (!navEl) return 260;
            const isMobile = window.matchMedia("(max-width: 768px)").matches;
            if (isMobile) {
            const contentEl = navEl.querySelector(".card-nav-content");
            if (contentEl) {
                const wasVisible = contentEl.style.visibility;
                const wasPointerEvents = contentEl.style.pointerEvents;
                const wasPosition = contentEl.style.position;
                const wasHeight = contentEl.style.height;
                contentEl.style.visibility = "visible";
                contentEl.style.pointerEvents = "auto";
                contentEl.style.position = "static";
                contentEl.style.height = "auto";
                contentEl.offsetHeight;
                const topBar = 60;
                const padding = 16;
                const contentHeight = contentEl.scrollHeight;
                contentEl.style.visibility = wasVisible;
                contentEl.style.pointerEvents = wasPointerEvents;
                contentEl.style.position = wasPosition;
                contentEl.style.height = wasHeight;
                return topBar + contentHeight + padding;
            }
            }
            return 260;
        };

        const createTimeline = () => {
            const navEl = navRef.current;
            if (!navEl) return null;
            gsap.set(navEl, { height: 60, overflow: "hidden" });
            gsap.set(cardsRef.current, { y: 50, opacity: 0 });
            const tl = gsap.timeline({ paused: true });
            tl.to(navEl, { height: calculateHeight, duration: 0.4, ease });
            tl.to(
            cardsRef.current,
            { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
            "-=0.1"
            );
            return tl;
        };

        useLayoutEffect(() => {
            const tl = createTimeline();
            tlRef.current = tl;
            return () => {
            tl?.kill();
            tlRef.current = null;
            };
        }, [ease, items]);

        useLayoutEffect(() => {
            const handleResize = () => {
            if (!tlRef.current) return;
            if (isExpanded) {
                const newHeight = calculateHeight();
                gsap.set(navRef.current, { height: newHeight });
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                newTl.progress(1);
                tlRef.current = newTl;
                }
            } else {
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                tlRef.current = newTl;
                }
            }
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, [isExpanded]);

        // Efek untuk animasi style navbar saat scroll
        useLayoutEffect(() => {
            const navContainer = navRef.current.parentElement;

            gsap.set(navRef.current, { 
                backgroundColor: "rgba(180, 180, 180, 0.44)",
                backdropFilter: "blur(0px)",
            });

            const scrollAnimation = gsap.to(navContainer, {
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top top",
                    end: "+=100",
                    scrub: 1,
                },
                scale: 0.95,
                ease: "power2.inOut",
            });

            const styleAnimation = gsap.to(navRef.current, {
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top top",
                    end: "+=100",
                    scrub: 1,
                },
                backgroundColor: "rgba(239, 239, 239, 0.02)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(218, 218, 218, 0.24)",
                duration: 0.
            });

            return () => {
            scrollAnimation.kill();
            styleAnimation.kill();
            };
        }, []);

        // 2. Buat fungsi `closeMenu` yang aman, dibungkus useCallback
        const closeMenu = useCallback(() => {
            const tl = tlRef.current;
            // Cek jika menu terbuka DAN animasinya tidak sedang berjalan mundur
            if (isExpanded && tl && !tl.reversed()) {
            setIsHamburgerOpen(false);
            tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
            tl.reverse();
            }
        }, [isExpanded, tlRef]);

        // 3. Buat `useEffect` terpisah khusus untuk menutup menu saat scroll
        useLayoutEffect(() => {
            window.addEventListener("scroll", closeMenu);
            return () => {
            window.removeEventListener("scroll", closeMenu);
            };
        }, [closeMenu]);

        // 4. Update fungsi `toggleMenu` untuk menggunakan `closeMenu`
        const toggleMenu = () => {
            const tl = tlRef.current;
            if (!tl) return;
            if (!isExpanded) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.play(0);
            } else {
            closeMenu(); // Panggil fungsi yang aman
            }
        };

        const setCardRef = (i) => (el) => {
            if (el) cardsRef.current[i] = el;
        };

    return (
        <div
        className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] top-[1.2em] md:top-[2em] ${className}`}
        >
            <nav
                ref={navRef}
                // Hapus style glassmorphism dari sini karena sekarang diatur oleh GSAP
                className={`card-nav ${
                isExpanded ? "open" : ""
                } block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height]`}
            >
                <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
                    <div
                        className={`hamburger-menu ${
                        isHamburgerOpen ? "open" : ""
                        } group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none`}
                        onClick={toggleMenu}
                        role="button"
                        aria-label={isExpanded ? "Close menu" : "Open menu"}
                        tabIndex={0}
                        style={{ color: menuColor || "#000" }}
                    >
                        <div
                        className={`hamburger-line w-[30px] h-[2px] bg-current transition-transform duration-300 ease-linear [transform-origin:50%_50%] ${
                            isHamburgerOpen ? "translate-y-[4px] rotate-45" : ""
                        }`}
                        />
                        <div
                        className={`hamburger-line w-[30px] h-[2px] bg-current transition-transform duration-300 ease-linear [transform-origin:50%_50%] ${
                            isHamburgerOpen ? "-translate-y-[4px] -rotate-45" : ""
                        }`}
                        />
                    </div>

                    <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
                        <img src={logo} alt={logoAlt} className="logo h-[28px]" />
                    </div>

                    <Button href={"aa"} text={""} />
                </div>

                <div
                className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${
                    isExpanded
                    ? "visible pointer-events-auto"
                    : "invisible pointer-events-none"
                } md:flex-row md:items-end md:gap-[12px]`}
                aria-hidden={!isExpanded}
                >
                {(items || []).slice(0, 3).map((item, idx) => (
                    <div
                    key={`${item.label}-${idx}`}
                    className="nav-card select-none relative flex flex-col gap-2 p-3 md:p-4 rounded-lg min-w-0 flex-1 h-auto min-h-[60px] md:h-full"
                    ref={setCardRef(idx)}
                    style={{ backgroundColor: item.bgColor, color: item.textColor }}
                    >
                        <div className="nav-card-label font-normal tracking-[-0.5px] text-lg md:text-xl">
                            {item.label}
                        </div>
                        
                        <div className="nav-card-links mt-auto flex flex-col gap-0.5">
                            {item.links?.map((lnk, i) => (
                            <a
                                key={`${lnk.label}-${i}`}
                                className="nav-card-link inline-flex items-center gap-1.5 no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-sm md:text-base"
                                href={lnk.href}
                                aria-label={lnk.ariaLabel}
                            >
                                <ArrowUpRight
                                className="nav-card-link-icon shrink-0"
                                size={16}
                                aria-hidden="true"
                                />
                                {lnk.label}
                            </a>
                            ))}
                        </div>
                    </div>
                ))}
                </div>
            </nav>
        </div>
    );
};

export default CardNav;