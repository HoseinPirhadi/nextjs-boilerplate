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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 12H6M11 6l-6 6 6 6" />
    </svg>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const closeAll = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle("header-drawer-open", menuOpen || searchOpen);
    return () => document.body.classList.remove("header-drawer-open");
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const timer = window.setTimeout(() => searchInputRef.current?.focus(), 120);
    return () => window.clearTimeout(timer);
  }, [searchOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    if (!value) return;
    closeAll();
    window.location.href = `/search?q=${encodeURIComponent(value)}`;
  }

  return (
    <header className="site-header-wrap" dir="rtl">
      <div className="site-header">
        <a className="site-logo" href="/" onClick={closeAll} aria-label="قالی مپ">
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
            aria-controls="site-search-dialog"
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
            aria-controls="site-mobile-drawer"
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
        aria-label="بستن پنجره"
        onClick={closeAll}
      />

      <section
        id="site-search-dialog"
        className={`site-search-popover ${searchOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="جستجوی قالی مپ"
        aria-hidden={!searchOpen}
      >
        <div className="site-search-dialog-head">
          <div>
            <span className="site-search-kicker">جستجو</span>
            <strong>شهر یا منطقه موردنظر را پیدا کنید</strong>
            <span>نام شهر، محله یا منطقه را وارد کنید.</span>
          </div>
          <button className="site-close-button" type="button" aria-label="بستن جستجو" onClick={closeAll}>
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
            enterKeyHint="search"
          />
          <button type="submit">جستجو</button>
        </form>

        <div className="site-search-suggestions">
          <span>پیشنهادهای سریع</span>
          <button type="button" onClick={() => setQuery("تهران")}>تهران</button>
          <button type="button" onClick={() => setQuery("کرج")}>کرج</button>
          <button type="button" onClick={() => setQuery("شیراز")}>شیراز</button>
        </div>
      </section>

      <aside
        id="site-mobile-drawer"
        className={`site-mobile-drawer ${menuOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="منوی قالی مپ"
        aria-hidden={!menuOpen}
      >
        <div className="site-drawer-grab" aria-hidden="true" />

        <div className="site-drawer-brand">
          <span className="site-logo-mark" aria-hidden="true">ق</span>
          <div>
            <strong>قالی مپ</strong>
            <span>راهنمای قالیشویی</span>
          </div>
          <button className="site-close-button" type="button" aria-label="بستن منو" onClick={closeAll}>
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
            enterKeyHint="search"
          />
          <button type="submit" aria-label="جستجو">
            <ArrowIcon />
          </button>
        </form>

        <nav className="site-drawer-nav" aria-label="ناوبری موبایل">
          <span className="site-drawer-section-label">مسیرهای اصلی</span>
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} onClick={closeAll}>
              <span className="site-drawer-number">{String(index + 1).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)])}</span>
              <span className="site-drawer-label">{item.label}</span>
              <span className="site-drawer-arrow" aria-hidden="true"><ArrowIcon /></span>
            </a>
          ))}
        </nav>

        <div className="site-drawer-spacer" />

        <div className="site-drawer-footer">
          <div>
            <span>پیدا کردن قالیشویی</span>
            <strong>از استان شروع کنید</strong>
          </div>
          <a href="/ostan-ha" onClick={closeAll}>
            <span>شروع جستجو</span>
            <ArrowIcon />
          </a>
        </div>
      </aside>
    </header>
  );
}