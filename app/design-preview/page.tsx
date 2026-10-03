import Link from "next/link";
import styles from "./page.module.css";

const cleaners = [
  { name: "پاک‌نگار", area: "سعادت‌آباد", rating: "۴.۹", tag: "پیشنهاد قالی‌مپ", verified: true },
  { name: "فرشینه", area: "شهرک غرب", rating: "۴.۸", tag: "پاسخ‌گویی سریع", verified: true },
  { name: "نوین تهران", area: "پونک", rating: "۴.۷", tag: "انتخاب اقتصادی", verified: false },
];
const prices = [["فرش ماشینی", "از ۹۵,۰۰۰ تومان"],["فرش دستباف", "تماس برای قیمت"],["موکت", "از ۷۵,۰۰۰ تومان"],["مبل‌شویی", "از ۳۵۰,۰۰۰ تومان"]];
const areas = ["سعادت‌آباد","شهرک غرب","پونک","مرزداران","ونک","یوسف‌آباد","جردن","گیشا"];

function Arrow(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 12H6M11 6l-6 6 6 6"/></svg>}
function Search(){return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>}
function Pin(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></svg>}
function Check(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 12 4 4 8-9"/></svg>}
const fa=(n:number)=>n.toLocaleString("fa-IR",{useGrouping:false});

export default function HybridPreviewPage(){
 return <main className={styles.page} dir="rtl">
  <div className={styles.glow}/>
  <header className={styles.header}>
   <Link href="/" className={styles.logo}><b>ق</b><span><strong>قالی مپ</strong><small>راهنمای قالیشویی</small></span></Link>
   <nav><a href="#cleaners">قالیشویی‌ها</a><a href="#prices">قیمت خدمات</a><a href="#guide">راهنمای انتخاب</a></nav>
   <div className={styles.headerActions}><button><Search/><span>جستجو</span></button><Link href="/ostan-ha">پیدا کردن قالیشویی</Link></div>
  </header>

  <section className={styles.hero}>
   <div>
    <div className={styles.breadcrumb}>صفحه اصلی <i>‹</i> استان تهران <i>‹</i> تهران</div>
    <span className={styles.kicker}>راهنمای شهر</span>
    <h1>قالیشویی در تهران،<br/><em>ساده و قابل اعتماد.</em></h1>
    <p>قالیشویی‌های اطراف خودت را ببین، قیمت‌ها را مقایسه کن و بر اساس منطقه و خدمات، انتخاب راحت‌تری داشته باش.</p>
    <div className={styles.actions}><a className={styles.primary} href="#cleaners">دیدن قالیشویی‌ها <Arrow/></a><a className={styles.secondary} href="#prices">مشاهده قیمت‌ها</a></div>
    <div className={styles.stats}><span><b>۲۴+</b> گزینه فعال</span><span><b>۸</b> منطقه پوشش</span><span><b>۴.۸</b> امتیاز کاربران</span></div>
   </div>
   <aside className={styles.heroCard}>
    <div className={styles.pin}><Pin/></div><small>منطقه انتخاب‌شده</small><strong>تهران، تهران</strong>
    <p>برای دیدن گزینه‌های نزدیک‌تر، محله خودت را انتخاب کن.</p>
    <button className={styles.picker}>انتخاب محله <Arrow/></button>
    <div className={styles.cardMeta}><span>● پوشش همین محدوده</span><b>۲۴+ قالیشویی</b></div>
   </aside>
  </section>

  <nav className={styles.anchor}><a className={styles.active} href="#cleaners">قالیشویی‌ها</a><a href="#guide">راهنمای انتخاب</a><a href="#prices">قیمت‌ها</a><a href="#areas">مناطق</a><a href="#faq">سوالات متداول</a><a href="#reviews">تجربه کاربران</a></nav>

  <section id="cleaners" className={styles.section}>
   <div className={styles.sectionHead}><div><span className={styles.kicker}>انتخاب‌های پیشنهادی</span><h2>قالیشویی‌های منتخب</h2></div><a href="#all">مشاهده همه <Arrow/></a></div>
   <div className={styles.cleaners}>{cleaners.map((x,i)=><article className={i===0?styles.featured:styles.cleaner} key={x.name}>
    <div className={styles.cleanerTop}><span className={styles.avatar}>{x.name[0]}</span><div><h3>{x.name} {x.verified&&<small><Check/> تأییدشده</small>}</h3><span>{x.area}</span></div><b>★ {x.rating}</b></div>
    <label>{x.tag}</label><p>شست‌وشوی فرش و موکت با دریافت و تحویل در محدوده.</p>
    <div className={styles.cardBottom}>پاسخ‌گویی در همان روز <button><Arrow/></button></div>
   </article>)}</div>
  </section>

  <section id="guide" className={styles.guide}>
   <div><span className={styles.kicker}>راهنمای انتخاب</span><h2>قبل از تماس، این سه مورد را بررسی کن.</h2><p>پوشش منطقه، نوع خدمات و شیوه دریافت و تحویل را کنار هم ببین تا انتخاب دقیق‌تری داشته باشی.</p></div>
   <div className={styles.steps}>{["پوشش منطقه","نوع شست‌وشو","دریافت و تحویل"].map((x,i)=><article key={x}><b>{fa(i+1)}</b><strong>{x}</strong><p>{i===0?"محدوده سرویس‌دهی را با محله خودت تطبیق بده.":i===1?"نوع فرش یا مبلمان را با خدمات موجود مقایسه کن.":"زمان و شرایط دریافت و تحویل را قبل از سفارش بپرس."}</p></article>)}</div>
  </section>

  <section id="prices" className={styles.section}>
   <div className={styles.sectionHead}><div><span className={styles.kicker}>قیمت خدمات</span><h2>حدود قیمت در تهران</h2></div><small>آخرین بروزرسانی: امروز</small></div>
   <div className={styles.prices}>{prices.map((x,i)=><div key={x[0]}><span>{fa(i+1)}</span><strong>{x[0]}</strong><em>{x[1]}</em><Arrow/></div>)}</div>
  </section>

  <section id="areas" className={styles.section}><div className={styles.sectionHead}><div><span className={styles.kicker}>پوشش محلی</span><h2>مناطق تحت پوشش</h2></div></div><div className={styles.areas}>{areas.map((x,i)=><a href="#cleaners" key={x}><span>{fa(i+1)}</span><strong>{x}</strong><Arrow/></a>)}</div></section>

  <section id="faq" className={styles.faq}><div className={styles.sectionHead}><div><span className={styles.kicker}>پرسش‌های پرتکرار</span><h2>قبل از سفارش بدان</h2></div></div><div className={styles.faqGrid}>{["قیمت قالیشویی چطور محاسبه می‌شود؟","دریافت و تحویل فرش چطور انجام می‌شود؟","چطور بین چند قالیشویی انتخاب کنم؟"].map((q,i)=><details open={i===0} key={q}><summary>{q}<b>+</b></summary><p>قیمت به نوع فرش، متراژ، نوع شست‌وشو و شرایط سرویس بستگی دارد. قیمت نهایی را قبل از سفارش از قالیشویی بپرس.</p></details>)}</div></section>

  <section id="reviews" className={styles.review}><div><span className={styles.kicker}>تجربه کاربران</span><strong>۴.۸</strong><small>از ۵ امتیاز</small><b>★★★★★</b></div><blockquote>«مقایسه بر اساس محله خیلی کمک کرد؛ گزینه‌های نزدیک را یک‌جا دیدم و انتخابم سریع‌تر شد.»<cite>کاربر قالی مپ · تهران</cite></blockquote></section>

  <footer className={styles.footer}><div><Link href="/" className={styles.logo}><b>ق</b><span><strong>قالی مپ</strong><small>راهنمای قالیشویی</small></span></Link><p>راهنمای ساده برای پیدا کردن قالیشویی مناسب در شهر و منطقه شما.</p></div><div className={styles.links}><a href="#cleaners">قالیشویی‌ها</a><a href="#prices">قیمت خدمات</a><a href="#guide">راهنمای انتخاب</a><a href="/ostan-ha">استان‌ها</a></div><div className={styles.footerCta}><small>از استان شروع کن</small><strong>قالیشویی مناسب خودت را پیدا کن.</strong><Link href="/ostan-ha">شروع جستجو <Arrow/></Link></div><div className={styles.copyright}>© {new Date().getFullYear()} قالی مپ <span>حریم خصوصی · قوانین استفاده</span></div></footer>
 </main>
}
