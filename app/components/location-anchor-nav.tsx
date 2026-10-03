"use client";

import { useEffect, useRef, useState } from "react";

type ItemId = "cleaners" | "about" | "prices" | "areas" | "faq" | "reviews";

const items: readonly [ItemId, string][] = [
  ["cleaners", "قالیشویی‌ها"],
  ["about", "راهنمای انتخاب"],
  ["prices", "قیمت‌ها"],
  ["areas", "مناطق"],
  ["faq", "سوالات متداول"],
  ["reviews", "تجربه کاربران"],
];

export default function LocationAnchorNav() {
  const [active, setActive] = useState<ItemId>("cleaners");
  const navRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<ItemId>("cleaners");

  useEffect(() => {
    const sections = items
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const update = () => {
      const marker = window.scrollY + 210;
      let current: ItemId = "cleaners";

      for (const section of sections) {
        if (section.offsetTop <= marker) current = section.id as ItemId;
      }

      if (current === activeRef.current) return;
      activeRef.current = current;
      setActive(current);

      if (window.matchMedia("(max-width: 900px)").matches) {
        const activeButton = navRef.current?.querySelector<HTMLAnchorElement>(
          `a[data-section="${current}"]`
        );
        activeButton?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav className="m3-anchor location-anchor-nav" aria-label="دسترسی سریع">
      <div ref={navRef} className="m3-shell m3-anchor-inner">
        <span className="location-anchor-indicator" aria-hidden="true" />
        {items.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            data-section={id}
            className={active === id ? "is-active" : ""}
            aria-current={active === id ? "location" : undefined}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}