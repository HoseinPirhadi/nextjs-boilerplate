"use client";

import { useState } from "react";

const navItems = [
  { label: "خانه", href: "#" },
  { label: "قالیشویی‌ها", href: "#cleaners" },
  { label: "قیمت‌ها", href: "#prices" },
  { label: "راهنما", href: "#guide" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header-wrap" dir="rtl">
      <div className="site-header">
        <a className="site-logo" href="#" aria-label="قالی مپ">
          <span className="site-logo-mark" aria-hidden="true">ق</span>
          <span className="site-logo-text"><strong>قالی مپ</strong><small>راهنمای قالیشویی</small></span>
        </a>
        <nav className="site-nav" aria-label="منوی اصلی">
          {navItems.map((item) => <a key={item.href} href={item.href} className="site-nav-link">{item.label}</a>)}
        </nav>
        <div className="site-header-actions">
          <a className="site-location-btn" href="#locations"><span className="site-location-icon">⌖</span><span>انتخاب شهر</span></a>
          <a className="site-header-cta" href="#cleaners">مشاهده قالیشویی‌ها</a>
        </div>
        <button type="button" className="site-menu-toggle" aria-label={open ? "بستن منو" : "باز کردن منو"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span /><span /><span />
        </button>
      </div>
      <div className={`site-mobile-menu ${open ? "is-open" : ""}`}>
        <nav aria-label="منوی موبایل">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        </nav>
        <div className="site-mobile-actions">
          <a href="#locations" onClick={() => setOpen(false)}>⌖ انتخاب شهر</a>
          <a href="#cleaners" onClick={() => setOpen(false)}>مشاهده قالیشویی‌ها</a>
        </div>
      </div>
    </header>
  );
}
