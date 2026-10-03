"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

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

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.classList.toggle("header-drawer-open", menuOpen || searchOpen);
    return () => document.body.classList.remove("header-drawer-open");
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    if (searchOpen) {
      const timer = window.setTimeout(() => searchInputRef.current?.focus(), 80);
      return () => window.clearTimeout(timer);
    }
  }, [searchOpen]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    if (!value) return;
    setSearchOpen(false);
    setMenuOpen(false);
    window.location.href = `/search?q=${encodeURIComponent(value)}`;
  }

  function closeOverlays() {
    setSearchOpen(false);
    setMenuOpen(false);
  }

  return (
    <header className="site-header-wrap" dir="rtl">
      <div className="site-header">
        <a className="site-logo" href="/" onClick={closeOverlays} aria-label="قالی مپ">
          <span className="site-logo-mark" aria-hidden="true">ق</span>
          <span className="site-logo-copy">
            <strong>قالی مپ</strong>
            <small>راهنمای قالیشویی</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="ناوبری اصلی">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="site-header-actions">
          <button
            className={`site-search-trigger ${searchOpen ? "is-active" : ""}`}
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setSearchOpen((value) => !value);
            }}
            aria-expanded={searchOpen}
          >
            <SearchIcon />
            <span>جستجو</span>
          </button>
          <a className="site-header-cta" href="/ostan-ha">پیدا کردن قالیشویی</a>
        </div>

        <div className="site-mobile-actions">
          <button
            className="site-icon-button"
            type="button"
            aria-label="جستجو"
            onClick={() => {
              setMenuOpen(false);
              setSearchOpen(true);
            }}
          >
            <SearchIcon />
          </button>
          <button
            className={`site-icon-button site-menu-button ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menuOpen}
            onClick={() => {
              setSearchOpen(false);
              setMenuOpen((value) => !value);
            }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <button
        className={`site-overlay ${searchOpen || menuOpen ? "is-visible" : ""}`}
        type="button"
        aria-label="بستن"
        onClick={closeOverlays}
      />

      <section className={`site-search-popover ${searchOpen ? "is-open" : ""}`} aria-hidden={!searchOpen}>
        <div className="site-search-top">
          <div>
            <span className="site-search-kicker">جستجوی سریع</span>
            <strong>شهر یا منطقه را پیدا کنید</strong>
          </div>
          <button className="site-close-button" type="button" aria-label="بستن جستجو" onClick={() => setSearchOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        <form className="site-search-form" role="search" onSubmit={submitSearch}>
          <SearchIcon />
          <input
            ref={searchInputRef}
            name="q"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="مثلاً تهران، سعادت‌آباد یا شیراز"
            autoComplete="off"
          />
          <button type="submit">جستجو</button>
        </form>
        <div className="site-search-suggestions">
          <span>پیشنهاد:</span>
          <button type="button" onClick={() => setQuery("تهران")}>تهران</button>
          <button type="button" onClick={() => setQuery("کرج")}>کرج</button>
          <button type="button" onClick={() => setQuery("شیراز")}>شیراز</button>
        </div>
      </section>

      <aside className={`site-mobile-drawer ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="site-drawer-brand">
          <span className="site-logo-mark" aria-hidden="true">ق</span>
          <div>
            <strong>منوی قالی مپ</strong>
            <span>انتخاب مسیر موردنظر</span>
          </div>
          <button className="site-close-button" type="button" aria-label="بستن منو" onClick={() => setMenuOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        <form className="site-drawer-search" role="search" onSubmit={submitSearch}>
          <SearchIcon />
          <input
            name="q"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="جستجوی شهر یا منطقه"
            autoComplete="off"
          />
          <button type="submit">برو</button>
        </form>

        <nav className="site-drawer-nav" aria-label="ناوبری موبایل">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span className="site-drawer-number">0{index + 1}</span>
              <span className="site-drawer-label">{item.label}</span>
              <span className="site-drawer-arrow" aria-hidden="true">←</span>
            </a>
          ))}
        </nav>

        <div className="site-drawer-footer">
          <span>دنبال قالیشویی مطمئن هستید؟</span>
          <a href="/ostan-ha" onClick={() => setMenuOpen(false)}>پیدا کردن قالیشویی <span aria-hidden="true">←</span></a>
        </div>
      </aside>
    </header>
  );
}
