"use client";

import { useEffect, useState } from "react";

type ItemId = "cleaners" | "about" | "prices" | "areas" | "faq" | "reviews";
const items: readonly [ItemId, string][] = [
  ["cleaners", "قالیشویی‌ها"], ["about", "راهنمای انتخاب"], ["prices", "قیمت‌ها"],
  ["areas", "مناطق"], ["faq", "سوالات متداول"], ["reviews", "تجربه کاربران"],
];

export default function LocationAnchorNav() {
  const [active, setActive] = useState<ItemId>("cleaners");
  useEffect(() => {
    const sections = items.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const update = () => {
      const marker = window.scrollY + 190;
      let current: ItemId = "cleaners";
      for (const section of sections) if (section.offsetTop <= marker) current = section.id as ItemId;
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <nav className="m3-anchor" aria-label="دسترسی سریع"><div className="m3-shell m3-anchor-inner">
    {items.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? "is-active" : ""} aria-current={active === id ? "location" : undefined}>{label}</a>)}
  </div></nav>;
}
