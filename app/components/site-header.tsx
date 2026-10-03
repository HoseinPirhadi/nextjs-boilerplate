"use client";

import { FormEvent, useState } from "react";

const navItems = [
  { label: "استان‌ها", href: "/ostan-ha" },
  { label: "قیمت خدمات", href: "#prices" },
  { label: "راهنمای انتخاب", href: "#guide" },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    if (!value) return;
    window.location.href = `/search?q=${encodeURIComponent(value)}`;
  }

  return (
    <header className="site-header-wrap" dir="rtl">
      <div className="site-header">
        <a
          className="site-logo"
          href="/"
          aria-label="قالی مپ؛ راهنمای قالیشویی و خدمات شست‌وشوی فرش"
        >
          <span className="site-logo-mark" aria-hidden="true">ق</span>
          <span className="site-logo-text">
            <strong>قالی مپ</strong>
            <small>راهنمای قالیشویی</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="ناوبری اصلی">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="site-nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header-actions">
          <button
            type="button"
            className="site-search-trigger"
            aria-label="جستجوی شهر، منطقه یا محله"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((value) => !value)}
          >
            <SearchIcon />
            <span>جستجو</span>
          </button>

          <a className="site-header-cta" href="/ostan-ha">
            پیدا کردن قالیشویی
          </a>
        </div>

        <button
          type="button"
          className="site-mobile-search-trigger"
          aria-label="جستجوی شهر، منطقه یا محله"
          aria-expanded={searchOpen}
          onClick={() => setSearchOpen((value) => !value)}
        >
          <SearchIcon />
        </button>

        <button
          type="button"
          className="site-menu-toggle"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span /><span />
        </button>
      </div>

      {searchOpen && (
        <form className="site-search-panel" role="search" onSubmit={submitSearch}>
          <label htmlFor="site-search-input">جستجوی شهر، منطقه یا محله</label>
          <div className="site-search-box">
            <SearchIcon />
            <input
              id="site-search-input"
              name="q"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="مثلاً تهران، سعادت‌آباد یا شیراز"
              autoComplete="off"
            />
            <button type="submit">جستجو</button>
          </div>
          <p>نام شهر، منطقه یا محله را وارد کنید.</p>
        </form>
      )}

      <div className={`site-mobile-menu ${open ? "is-open" : ""}`}>
        <form className="site-mobile-search" role="search" onSubmit={submitSearch}>
          <label htmlFor="mobile-search-input">جستجوی شهر، منطقه یا محله</label>
          <div>
            <input
              id="mobile-search-input"
              name="q"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="جستجوی شهر یا منطقه"
            />
            <button type="submit" aria-label="جستجو">
              <SearchIcon />
            </button>
          </div>
        </form>

        <nav aria-label="ناوبری موبایل">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="site-mobile-cta" href="/ostan-ha" onClick={() => setOpen(false)}>
          پیدا کردن قالیشویی
        </a>
      </div>
    </header>
  );
}
