"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const cleaners = [
  { name: "پاک‌نگار", area: "سعادت‌آباد", rating: "۴.۹", status: "تأییدشده", note: "پیشنهاد قالی مپ", services: ["فرش", "موکت", "مبل"] },
  { name: "فرشینه", area: "شهرک غرب", rating: "۴.۸", status: "تأییدشده", note: "پاسخ‌گویی سریع", services: ["فرش", "دستباف", "موکت"] },
  { name: "نوین تهران", area: "پونک", rating: "۴.۷", status: "", note: "انتخاب اقتصادی", services: ["فرش", "موکت"] },
];

const prices = [
  ["فرش ماشینی", "از ۹۵,۰۰۰ تومان"],
  ["فرش دستباف", "تماس برای قیمت"],
  ["موکت", "از ۷۵,۰۰۰ تومان"],
  ["مبل‌شویی", "از ۳۵۰,۰۰۰ تومان"],
];

const areas = ["سعادت‌آباد", "شهرک غرب", "پونک", "مرزداران", "ونک", "یوسف‌آباد", "جردن", "گیشا"];

function Icon({ name }: { name: "search" | "chevron" | "pin" | "check" | "arrow" | "star" }) {
  if (name === "search") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>;
  if (name === "pin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></svg>;
  if (name === "check") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7" /></svg>;
  if (name === "star") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 4 2.35 4.76 5.25.76-3.8 3.7.9 5.23L12 16l-4.7 2.45.9-5.23-3.8-3.7 5.25-.76L12 4Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>;
}

const fa = (n: number) => n.toLocaleString("fa-IR", { useGrouping: false });

export default function DesignPreviewPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { if (searchOpen) inputRef.current?.focus(); }, [searchOpen]);
  useEffect(() => { document.body.style.overflow = (searchOpen || menuOpen) ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [searchOpen, menuOpen]);

  return (
    <main className={styles.page} dir="rtl">
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand} aria-label="قالی مپ">
            <span className={styles.brandMark}>ق</span>
            <span><strong>قالی مپ</strong><small>راهنمای قالیشویی</small></span>
          </Link>

          <nav className={styles.desktopNav} aria-label="ناوبری اصلی">
            <a href="#cleaners">قالیشویی‌ها</a><a href="#prices">قیمت‌ها</a><a href="#guide">راهنمای انتخاب</a>
          </nav>

          <div className={styles.headerTools}>
            <button className={styles.searchButton} type="button" onClick={() => { setMenuOpen(false); setSearchOpen(true); }} aria-label="جستجو"><Icon name="search" /><span>جستجو</span></button>
            <button className={styles.menuButton} type="button" onClick={() => { setSearchOpen(false); setMenuOpen(true); }} aria-label="باز کردن منو"><span></span><span></span><span></span></button>
            <Link href="/ostan-ha" className={styles.headerAction}>پیدا کردن قالیشویی</Link>
          </div>
        </div>
      </header>

      {searchOpen && <div className={styles.overlay} onMouseDown={() => setSearchOpen(false)}>
        <div className={styles.searchSheet} onMouseDown={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={() => setSearchOpen(false)} aria-label="بستن">×</button>
          <span className={styles.eyebrow}>جستجو</span>
          <h2>دنبال چه قالیشویی هستی؟</h2>
          <div className={styles.searchField}><Icon name="search" /><input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && query.trim()) window.location.href = `/search?q=${encodeURIComponent(query.trim())}`; }} placeholder="نام شهر، محله یا قالیشویی..." /><button type="button" onClick={() => query.trim() && (window.location.href = `/search?q=${encodeURIComponent(query.trim())}`)}>جستجو</button></div>
          <div className={styles.searchSuggestions}><span>پیشنهادها</span><button onClick={() => setQuery("تهران")}>تهران</button><button onClick={() => setQuery("سعادت‌آباد")}>سعادت‌آباد</button><button onClick={() => setQuery("قالیشویی")}>قالیشویی</button></div>
        </div>
      </div>}

      {menuOpen && <div className={styles.menuOverlay} onMouseDown={() => setMenuOpen(false)}>
        <aside className={styles.menuSheet} onMouseDown={(e) => e.stopPropagation()}>
          <div className={styles.menuTop}><strong>منو</strong><button onClick={() => setMenuOpen(false)} aria-label="بستن">×</button></div>
          <nav><a href="#cleaners" onClick={() => setMenuOpen(false)}>قالیشویی‌ها</a><a href="#prices" onClick={() => setMenuOpen(false)}>قیمت خدمات</a><a href="#guide" onClick={() => setMenuOpen(false)}>راهنمای انتخاب</a><Link href="/ostan-ha" onClick={() => setMenuOpen(false)}>استان‌ها</Link></nav>
          <Link href="/ostan-ha" className={styles.menuCTA} onClick={() => setMenuOpen(false)}>پیدا کردن قالیشویی</Link>
        </aside>
      </div>}

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}><Link href="/">صفحه اصلی</Link><span>/</span><span>استان تهران</span><span>/</span><b>تهران</b></div>
          <span className={styles.eyebrow}>راهنمای شهر</span>
          <h1>قالیشویی در تهران</h1>
          <p className={styles.heroLead}>قالیشویی‌های اطراف خودت را پیدا کن، قیمت خدمات را ببین و با خیال راحت انتخاب کن.</p>

          <div className={styles.heroActions}>
            <a href="#cleaners" className={styles.primaryButton}>دیدن قالیشویی‌ها <Icon name="chevron" /></a>
            <a href="#prices" className={styles.textButton}>مشاهده قیمت‌ها</a>
          </div>

          <div className={styles.heroFacts}>
            <div><strong>۲۴+</strong><span>قالیشویی فعال</span></div>
            <div><strong>۸</strong><span>منطقه تحت پوشش</span></div>
            <div><strong>۴.۸</strong><span>امتیاز کاربران</span></div>
          </div>
        </div>

        <aside className={styles.locationCard}>
          <div className={styles.locationHeader}><div className={styles.locationIcon}><Icon name="pin" /></div><span className={styles.cardLabel}>محدوده انتخاب‌شده</span></div>
          <h2>تهران، تهران</h2>
          <p>برای نتیجه دقیق‌تر، محله خودت را انتخاب کن.</p>
          <button type="button" className={styles.selectButton}><span>انتخاب محله</span><Icon name="chevron" /></button>
          <div className={styles.locationFoot}><span>پوشش همین محدوده</span><strong>۲۴+ گزینه</strong></div>
        </aside>
      </section>

      <nav className={styles.sectionNav} aria-label="دسترسی سریع">
        <a className={styles.selected} href="#cleaners">قالیشویی‌ها</a><a href="#guide">راهنمای انتخاب</a><a href="#prices">قیمت‌ها</a><a href="#areas">مناطق</a><a href="#faq">سوالات</a><a href="#reviews">تجربه کاربران</a>
      </nav>

      <section id="cleaners" className={styles.contentSection}>
        <div className={styles.sectionTitle}>
          <div><span className={styles.eyebrow}>انتخاب‌های پیشنهادی</span><h2>قالیشویی‌های منتخب</h2></div>
          <a href="#all">مشاهده همه <Icon name="chevron" /></a>
        </div>

        <div className={styles.cleanerGrid}>
          {cleaners.map((cleaner, index) => (
            <article className={index === 0 ? styles.cleanerCardFeatured : styles.cleanerCard} key={cleaner.name}>
              <div className={styles.cleanerIdentity}>
                <span className={styles.avatar}>{cleaner.name[0]}</span>
                <div><h3>{cleaner.name}</h3><span>{cleaner.area}</span></div>
                <span className={styles.rating}><Icon name="star" /> {cleaner.rating}</span>
              </div>
              <div className={styles.cleanerMeta}>
                {cleaner.status && <span className={styles.verified}><Icon name="check" /> {cleaner.status}</span>}
                <span>{cleaner.note}</span>
              </div>
              <p>شست‌وشوی فرش و موکت با دریافت و تحویل در محدوده.</p>
              <div className={styles.serviceChips}>{cleaner.services.map((service) => <span key={service}>{service}</span>)}</div>
              <a href="#contact" className={styles.cardLink}>مشاهده جزئیات <Icon name="chevron" /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="guide" className={styles.guideSection}>
        <div className={styles.guideIntro}><span className={styles.eyebrow}>راهنمای انتخاب</span><h2>انتخاب خوب، از سه سؤال ساده شروع می‌شود.</h2><p>قبل از تماس، این سه مورد را بررسی کن تا گزینه‌ای متناسب با نیازت پیدا کنی.</p></div>
        <div className={styles.guideList}>
          {["پوشش منطقه", "نوع شست‌وشو", "دریافت و تحویل"].map((item, index) => (
            <article key={item}><span>{fa(index + 1)}</span><div><h3>{item}</h3><p>{index === 0 ? "محدوده سرویس‌دهی را با محله خودت تطبیق بده." : index === 1 ? "خدمات موردنیازت را قبل از سفارش مشخص کن." : "زمان و شرایط دریافت و تحویل را از قبل بپرس."}</p></div></article>
          ))}
        </div>
      </section>

      <section id="prices" className={styles.contentSection}>
        <div className={styles.sectionTitle}><div><span className={styles.eyebrow}>قیمت خدمات</span><h2>حدود قیمت در تهران</h2></div><span className={styles.updateNote}>به‌روزشده امروز</span></div>
        <div className={styles.priceList}>{prices.map((price, index) => <a href="#contact" key={price[0]} className={styles.priceRow}><span>{fa(index + 1)}</span><strong>{price[0]}</strong><em>{price[1]}</em><Icon name="chevron" /></a>)}</div>
      </section>

      <section id="areas" className={styles.contentSection}>
        <div className={styles.sectionTitle}><div><span className={styles.eyebrow}>پوشش محلی</span><h2>مناطق تحت پوشش</h2></div></div>
        <div className={styles.areaGrid}>{areas.map((area, index) => <a href="#cleaners" key={area}><span>{fa(index + 1)}</span><strong>{area}</strong><Icon name="chevron" /></a>)}</div>
      </section>

      <section id="faq" className={styles.faqSection}>
        <div className={styles.faqIntro}><span className={styles.eyebrow}>پرسش‌های پرتکرار</span><h2>قبل از سفارش بدان</h2><p>پاسخ کوتاه به سؤال‌هایی که بیشتر پرسیده می‌شوند.</p></div>
        <div className={styles.faqList}>{["قیمت قالیشویی چطور محاسبه می‌شود؟", "دریافت و تحویل فرش چطور انجام می‌شود؟", "چطور بین چند قالیشویی انتخاب کنم؟"].map((question, index) => <details key={question} open={index === 0}><summary><span>{question}</span><b>+</b></summary><p>قیمت به نوع فرش، متراژ، نوع شست‌وشو و شرایط سرویس بستگی دارد. قیمت نهایی را قبل از سفارش از قالیشویی بپرس.</p></details>)}</div>
      </section>

      <section id="reviews" className={styles.reviewSection}>
        <div className={styles.reviewScore}><span className={styles.eyebrow}>تجربه کاربران</span><strong>۴.۸</strong><span>از ۵ امتیاز</span><b>★★★★★</b></div>
        <blockquote>«مقایسه بر اساس محله خیلی کمک کرد؛ گزینه‌های نزدیک را یک‌جا دیدم و انتخابم سریع‌تر شد.»<cite>کاربر قالی مپ · تهران</cite></blockquote>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}><Link href="/" className={styles.brand}><span className={styles.brandMark}>ق</span><span><strong>قالی مپ</strong><small>راهنمای قالیشویی</small></span></Link><p>راهنمای ساده برای پیدا کردن قالیشویی مناسب در شهر و منطقه شما.</p></div>
        <div className={styles.footerLinks}><a href="#cleaners">قالیشویی‌ها</a><a href="#prices">قیمت خدمات</a><a href="#guide">راهنمای انتخاب</a><Link href="/ostan-ha">استان‌ها</Link></div>
        <div className={styles.footerCallout}><span>از استان شروع کن</span><strong>قالیشویی مناسب خودت را پیدا کن.</strong><Link href="/ostan-ha">شروع جستجو <Icon name="chevron" /></Link></div>
        <div className={styles.copyright}>© {new Date().getFullYear()} قالی مپ <span>حریم خصوصی · قوانین استفاده</span></div>
      </footer>
    </main>
  );
}
