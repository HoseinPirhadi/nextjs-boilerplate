"use client";

import { FormEvent, useEffect, useState } from "react";

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

function MenuIcon({ open }: { open: boolean }) {
  return open ? <CloseIcon /> : <><span /><span /><span /></>;
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.body.classList.toggle("header-drawer-open", menuOpen);
    return () => document.body.classList.remove("header-drawer-open");
  }, [menuOpen]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    if (!value) return;
    setSearchOpen(false);
    setMenuOpen(false);
    window.location.href = `/search?q=${encodeURIComponent(value)}`;
  }

  function closeAll() {
    setSearchOpen(false);
    setMenuOpen(false);
  }

  return (
    <header className="site-header-wrap" dir="rtl">
      <div className="site-header">
        <a
          className="site-logo"
          href="/"
          aria-label="قالی مپ؛ راهنمای قالیشویی و خدمات شست‌وشوی فرش"
          onClick={closeAll}
        >
          <span className="site-logo-mark" aria-hidden="true">ق</span>
          <span className="site-logo-text">
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
            type="button"
            className={`site-search-trigger ${searchOpen ? "is-active" : ""}`}
            aria-label="باز کردن جستجو"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((value) => !value)}
          >
            <SearchIcon />
            <span>جستجو</span>
          </button>
          <a className="site-header-cta" href="/ostan-ha">پیدا کردن قالیشویی</a>
        </div>

        <div className="site-mobile-actions">
          <button
            type="button"
            className="site-mobile-search-trigger"
            aria-label="جستجو"
            aria-expanded={searchOpen}
            onClick={() => {
              setMenuOpen(false);
              setSearchOpen(true);
            }}
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            className={`site-menu-toggle ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menuOpen}
            onClick={() => {
              setSearchOpen(false);
              setMenuOpen((value) => !value);
            }}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {searchOpen && (
        <>
          <button className="site-search-backdrop" type="button" aria-label="بستن جستجو" onClick={() => setSearchOpen(false)} />
          <div className="site-search-panel" role="dialog" aria-modal="true" aria-label="جستجوی قالی مپ">
            <div className="site-search-heading">
              <div>
                <strong>کجا دنبال قالیشویی می‌گردید؟</strong>
                <span>شهر، منطقه یا محله را جستجو کنید.</span>
              </div>
              <button type="button" aria-label="بستن جستجو" onClick={() => setSearchOpen(false)}>
                <CloseIcon />
              </button>
            </div>
            <form role="search" onSubmit={submitSearch}>
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
                  autoFocus
                />
                <button type="submit">جستجو</button>
              </div>
            </form>
            <div className="site-search-hint">مثال: تهران، کرج، سعادت‌آباد، شیراز</div>
          </div>
        </>
      )}

      <button
        className={`site-drawer-backdrop ${menuOpen ? "is-visible" : ""}`}
        type="button"
        aria-label="بستن منو"
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`site-mobile-drawer ${menuOpen ? "is-open" : ""}`} aria-label="منوی موبایل" aria-hidden={!menuOpen}>
        <div className="site-drawer-head">
          <div>
            <strong>منوی قالی مپ</strong>
            <span>انتخاب مسیر موردنظر</span>
          </div>
          <button type="button" aria-label="بستن منو" onClick={() => setMenuOpen(false)}>
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
          <button type="submit" aria-label="جستجو">برو</button>
        </form>

        <nav aria-label="ناوبری موبایل">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span className="site-drawer-index">۰{index + ۱}</span>
              <span>{item.label}</span>
              <span className="site-drawer-arrow" aria-hidden="true">←</span>
            </a>
          ))}
        </nav>

        <a className="site-drawer-cta" href="/ostan-ha" onClick={() => setMenuOpen(false)}>
          <span>پیدا کردن قالیشویی</span>
          <span aria-hidden="true">←</span>
        </a>
      </aside>
    </header>
  );
}
