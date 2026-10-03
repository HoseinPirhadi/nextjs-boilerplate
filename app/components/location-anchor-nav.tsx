"use client";

import { useEffect, useState } from "react";

const items = [
  ["cleaners", "قالیشویی‌ها"],
  ["about", "درباره این محدوده"],
  ["prices", "قیمت‌ها"],
  ["areas", "مناطق"],
  ["faq", "سوالات متداول"],
  ["reviews", "تجربه کاربران"],
] as const;

export default function LocationAnchorNav() {
  const [active, setActive] = useState(items[0][0]);

  useEffect(() => {
    const sections = items
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-132px 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="location-anchor-nav" aria-label="دسترسی سریع">
      <div className="location-shell location-anchor-inner">
        {items.map(([id, label]) => (
          <button
            key={id}
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
