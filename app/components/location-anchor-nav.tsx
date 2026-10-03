"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ItemId = "cleaners" | "about" | "prices" | "areas" | "faq" | "reviews";

const items = [
  ["cleaners", "قالیشویی‌ها"],
  ["about", "درباره این محدوده"],
  ["prices", "قیمت‌ها"],
  ["areas", "مناطق"],
  ["faq", "سوالات متداول"],
  ["reviews", "تجربه کاربران"],
] as const;

export default function LocationAnchorNav() {
  const [active, setActive] = useState<ItemId>(items[0][0]);
  const [indicator, setIndicator] = useState({ x: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Partial<Record<ItemId, HTMLButtonElement | null>>>({});

  const updateIndicator = useCallback(() => {
    const nav = navRef.current;
    const button = buttonRefs.current[active];
    if (!nav || !button) return;

    const navRect = nav.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    setIndicator({
      x: buttonRect.left - navRect.left,
      width: buttonRect.width,
    });
  }, [active]);

  useEffect(() => {
    const sections = items
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const nextActive = visible[0]?.target.id;
        if (nextActive && items.some(([id]) => id === nextActive)) {
          setActive(nextActive as ItemId);
        }
      },
      {
        rootMargin: "-132px 0px -55% 0px",
        threshold: [0.05, 0.2, 0.4, 0.65],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    updateIndicator();
    const handleResize = () => updateIndicator();
    window.addEventListener("resize", handleResize);
    const observer = navRef.current ? new ResizeObserver(handleResize) : null;
    if (navRef.current && observer) observer.observe(navRef.current);
    return () => {
      window.removeEventListener("resize", handleResize);
      observer?.disconnect();
    };
  }, [updateIndicator]);

  const scrollToSection = (id: ItemId) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(updateIndicator, 80);
  };

  return (
    <nav className="location-anchor-nav" aria-label="دسترسی سریع">
      <div ref={navRef} className="location-shell location-anchor-inner">
        <span
          className="location-anchor-indicator"
          aria-hidden="true"
          style={{ transform: `translateX(${indicator.x}px)`, width: indicator.width }}
        />
        {items.map(([id, label]) => (
          <button
            key={id}
            ref={(element) => {
              buttonRefs.current[id] = element;
            }}
            type="button"
            className={active === id ? "is-active" : ""}
            aria-current={active === id ? "location" : undefined}
            onClick={() => scrollToSection(id)}
          >
            <span>{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
