"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const cleaners = [
  { name: "پاک‌نگار", area: "سعادت‌آباد", rating: "۴.۹", verified: true, tag: "پیشنهاد قالی مپ", services: ["فرش", "موکت", "مبل"] },
  { name: "فرشینه", area: "شهرک غرب", rating: "۴.۸", verified: true, tag: "پاسخ‌گویی سریع", services: ["فرش", "دستباف", "موکت"] },
  { name: "نوین تهران", area: "پونک", rating: "۴.۷", verified: false, tag: "انتخاب اقتصادی", services: ["فرش", "موکت"] },
];

const prices = [
  ["فرش ماشینی", "از ۹۵,۰۰۰ تومان"],
  ["فرش دستباف", "تماس برای قیمت"],
  ["موکت", "از ۷۵,۰۰۰ تومان"],
  ["مبل‌شویی", "از ۳۵۰,۰۰۰ تومان"],
];

const areas = ["سعادت‌آباد", "شهرک غرب", "پونک", "مرزداران", "ونک", "یوسف‌آباد", "جردن", "گیشا"];

function Icon({ name }: { name: "search" | "chevron" | "pin" | "check" | "star" | "arrow" | "filter" | "menu" }) {
  if (name === "search") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4" /><path d="m15.7 15.7 4.2 4.2" /></svg>;
  if (name === "pin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></svg>;
  if (name === "check") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7" /></svg>;
  if (name === "star") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 4 2.35 4.76 5.25.76-3.8 3.7.9 5.23L12 16l-4.7 2.45.9-5.23 5.25-.76L12 4Z" /></svg>;
  if (name === "filter") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M7 12h10M10 17h4" /></svg>;
  if (name === "menu") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>;
}

const fa = (n: number) => n.toLocaleString("fa-IR", { useGrouping: false });

export default function FluentPreviewPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (searchOpen) inputRef.current?.focus(); }, [searchOpen]);
  useEffect(() => {
    document.body.style.overflow = searchOpen || menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [searchOpen, menuOpen]);

  return (
    <main className={styles.page} dir="rtl">
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand}><span className={styles.brandMark}>ق</span><span><strong>قالی مپ</strong><small>راهنمای قالیشویی</small></span></Link>
          <nav className={styles.nav}>
            <a href="#cleaners">قالیشویی‌ها</a><a href="#prices">قیمت خدمات</a><a href="#guide">راهنمای انتخاب</a><Link href="/ostan-ha">استان‌ها</Link>
          </nav>
          <div className={styles.headerActions}>
            <button className={styles.iconButton} onClick={() => { setMenuOpen(false); setSearchOpen(true); }} aria-label="جستجو"><Icon name="search" /></button>
            <button className={styles.menuButton} onClick={() => { setSearchOpen(false); setMenuOpen(true); }} aria-label="باز کردن ناوبری"><Icon name="menu" /></button>
            <Link href="/ostan-ha" className={styles.primaryButton}>پیدا کردن قالیشویی</Link>
          </div>
        </div>
      </header>

      {searchOpen && <div className={styles.overlay} onMouseDown={() => setSearchOpen(false)}>
        <div className={styles.dialog} onMouseDown={(e) => e.stopPropagation()}>
          <div className={styles.dialogHeader}><div><span className={styles.kicker}>جستجو</span><h2>قالیشویی موردنظرت را پیدا کن</h2></div><button className={styles.closeButton} onClick={() => setSearchOpen(false)}>×</button></div>
          <div className={styles.searchField}><Icon name="search" /><input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && query.trim()) window.location.href = `/search?q=${encodeURIComponent(query.trim())}`; }} placeholder="شهر، محله یا نام قالیشویی" /><button onClick={() => query.trim() && (window.location.href = `/search?q=${encodeURIComponent(query.trim())}`)}>جستجو</button></div>
          <div className={styles.suggestions}><span>جستجوهای پیشنهادی</span><button onClick={() => setQuery("تهران")}>تهران</button><button onClick={() => setQuery("سعادت‌آباد")}>سعادت‌آباد</button><button onClick={() => setQuery("قالیشویی")}>قالیشویی</button></div>
        </div>
      </div>}

      {menuOpen && <div className={styles.overlay} onMouseDown={() => setMenuOpen(false)}>
        <aside className={styles.sideNav} onMouseDown={(e) => e.stopPropagation()}>
          <div className={styles.sideHeader}><strong>ناوبری</strong><button className={styles.closeButton} onClick={() => setMenuOpen(false)}>×</button></div>
          <nav><a href="#cleaners" onClick={() => setMenuOpen(false)}>قالیشویی‌ها</a><a href="#prices" onClick={() => setMenuOpen(false)}>قیمت خدمات</a><a href="#guide" onClick={() => setMenuOpen(false)}>راهنمای انتخاب</a><Link href="/ostan-ha" onClick={() => setMenuOpen(false)}>استان‌ها</Link></nav>
          <Link href="/ostan-ha" className={styles.primaryButton} onClick={() => setMenuOpen(false)}>پیدا کردن قالیشویی</Link>
        </aside>
      </div>}

      <section className={styles.hero}>
        <div className={styles.heroMain}>
          <div className={styles.breadcrumb}><Link href="/">صفحه اصلی</Link><span>›</span><span>استان تهران</span><span>›</span><strong>تهران</strong></div>
          <span className={styles.kicker}>راهنمای شهر</span>
          <h1>قالیشویی در تهران</h1>
          <p>قالیشویی‌های مناسب اطرافت را پیدا کن، خدمات و قیمت‌ها را مقایسه کن و انتخاب مطمئن‌تری داشته باش.</p>
          <div className={styles.heroActions}><a href="#cleaners" className={styles.primaryButton}>مشاهده قالیشویی‌ها <Icon name="chevron" /></a><a href="#prices" className={styles.secondaryButton}>مشاهده قیمت‌ها</a></div>
          <div className={styles.stats}><div><strong>۲۴+</strong><span>قالیشویی فعال</span></div><div><strong>۸</strong><span>منطقه تحت پوشش</span></div><div><strong>۴.۸</strong><span>امتیاز کاربران</span></div></div>
        </div>

        <aside className={styles.locationPanel}>
          <div className={styles.panelIcon}><Icon name="pin" /></div>
          <span className={styles.caption}>موقعیت انتخاب‌شده</span>
          <h2>تهران، تهران</h2>
          <p>با انتخاب محله، نتایج نزدیک‌تر و مرتبط‌تری می‌بینی.</p>
          <button className={styles.outlineButton}><span>انتخاب محله</span><Icon name="chevron" /></button>
          <div className={styles.panelMeta}><span>نتایج این محدوده</span><strong>۲۴+ گزینه</strong></div>
        </aside>
      </section>

      <nav className={styles.tabs}><a className={styles.tabActive} href="#cleaners">قالیشویی‌ها</a><a href="#guide">راهنمای انتخاب</a><a href="#prices">قیمت‌ها</a><a href="#areas">مناطق</a><a href="#faq">سوالات</a><a href="#reviews">تجربه کاربران</a></nav>

      <section id="cleaners" className={styles.section}>
        <div className={styles.sectionHeader}><div><span className={styles.kicker}>انتخاب‌های پیشنهادی</span><h2>قالیشویی‌های منتخب</h2><p>چند گزینه برای شروع مقایسه</p></div><button className={styles.subtleButton}><Icon name="filter" /> فیلتر</button></div>
        <div className={styles.cleanerGrid}>
          {cleaners.map((cleaner, index) => <article className={index === 0 ? styles.cleanerCardSelected : styles.cleanerCard} key={cleaner.name}>
            <div className={styles.cardTop}><span className={styles.avatar}>{cleaner.name[0]}</span><div className={styles.identity}><h3>{cleaner.name}</h3><span><Icon name="pin" /> {cleaner.area}</span></div><span className={styles.rating}><Icon name="star" />{cleaner.rating}</span></div>
            <div className={styles.badges}>{cleaner.verified && <span className={styles.verified}><Icon name="check" /> تأییدشده</span>}<span>{cleaner.tag}</span></div>
            <p>شست‌وشوی فرش و موکت با دریافت و تحویل در محدوده.</p>
            <div className={styles.chips}>{cleaner.services.map((service) => <span key={service}>{service}</span>)}</div>
            <a href="#contact" className={styles.cardAction}>مشاهده جزئیات <Icon name="chevron" /></a>
          </article>)}
        </div>
      </section>

      <section id="guide" className={styles.featureSection}>
        <div><span className={styles.kicker}>راهنمای انتخاب</span><h2>برای انتخاب بهتر، این سه مورد را بررسی کن.</h2><p>اطلاعات مهم را قبل از تماس کنار هم بگذار تا مقایسه ساده‌تر شود.</p></div>
        <div className={styles.guideList}>{["پوشش منطقه", "نوع شست‌وشو", "دریافت و تحویل"].map((item, index) => <div key={item}><span>{fa(index + 1)}</span><div><strong>{item}</strong><p>{index === 0 ? "محدوده سرویس‌دهی را با محله خودت تطبیق بده." : index === 1 ? "خدمت موردنیازت را پیش از سفارش مشخص کن." : "زمان و شرایط دریافت و تحویل را از قبل بپرس."}</p></div><Icon name="chevron" /></div>)}</div>
      </section>

      <section id="prices" className={styles.section}>
        <div className={styles.sectionHeader}><div><span className={styles.kicker}>قیمت خدمات</span><h2>حدود قیمت در تهران</h2><p>برای قیمت نهایی، شرایط سرویس را بررسی کن.</p></div><span className={styles.status}>به‌روزشده امروز</span></div>
        <div className={styles.priceTable}>{prices.map((price, index) => <a href="#contact" key={price[0]}><span>{fa(index + 1)}</span><strong>{price[0]}</strong><em>{price[1]}</em><Icon name="chevron" /></a>)}</div>
      </section>

      <section id="areas" className={styles.section}>
        <div className={styles.sectionHeader}><div><span className={styles.kicker}>پوشش محلی</span><h2>مناطق تحت پوشش</h2><p>محله نزدیکت را انتخاب کن.</p></div></div>
        <div className={styles.areaGrid}>{areas.map((area, index) => <a href="#cleaners" key={area}><span>{fa(index + 1)}</span><strong>{area}</strong><Icon name="chevron" /></a>)}</div>
      </section>

      <section id="faq" className={styles.featureSection}>
        <div><span className={styles.kicker}>پرسش‌های پرتکرار</span><h2>قبل از سفارش بدان</h2><p>پاسخ کوتاه به سؤال‌هایی که بیشتر پرسیده می‌شوند.</p></div>
        <div className={styles.faq}>{["قیمت قالیشویی چطور محاسبه می‌شود؟", "دریافت و تحویل فرش چطور انجام می‌شود؟", "چطور بین چند قالیشویی انتخاب کنم؟"].map((q, index) => <details key={q} open={index === 0}><summary><span>{q}</span><b>+</b></summary><p>قیمت به نوع فرش، متراژ، نوع شست‌وشو و شرایط سرویس بستگی دارد. قیمت نهایی را قبل از سفارش از قالیشویی بپرس.</p></details>)}</div>
      </section>

      <section id="reviews" className={styles.reviewSection}>
        <div className={styles.reviewMetric}><span className={styles.kicker}>تجربه کاربران</span><strong>۴.۸</strong><span>از ۵ امتیاز</span><b>★★★★★</b></div>
        <blockquote>«مقایسه بر اساس محله خیلی کمک کرد؛ گزینه‌های نزدیک را یک‌جا دیدم و انتخابم سریع‌تر شد.»<cite>کاربر قالی مپ · تهران</cite></blockquote>
      </section>

      <footer className={styles.footer}>
        <div><Link href="/" className={styles.brand}><span className={styles.brandMark}>ق</span><span><strong>قالی مپ</strong><small>راهنمای قالیشویی</small></span></Link><p>راهنمای ساده برای پیدا کردن قالیشویی مناسب در شهر و منطقه شما.</p></div>
        <div className={styles.footerLinks}><a href="#cleaners">قالیشویی‌ها</a><a href="#prices">قیمت خدمات</a><a href="#guide">راهنمای انتخاب</a><Link href="/ostan-ha">استان‌ها</Link></div>
        <div className={styles.footerCallout}><span>شروع جستجو</span><strong>قالیشویی مناسب خودت را پیدا کن.</strong><Link href="/ostan-ha">رفتن به استان‌ها <Icon name="chevron" /></Link></div>
        <div className={styles.copyright}>© {new Date().getFullYear()} قالی مپ <span>حریم خصوصی · قوانین استفاده</span></div>
      </footer>
    </main>
  );
}
