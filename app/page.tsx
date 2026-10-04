import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import LocationAnchorNav from "./components/location-anchor-nav";

const featuredCleaners = [
  { name: "قالیشویی پاک‌نگار", description: "شست‌وشوی تخصصی فرش و خدمات تکمیلی با پوشش تهران.", verified: true, ad: true, services: ["شست‌وشوی فرش", "مبل‌شویی", "ترمیم"], logo: "پ" },
  { name: "قالیشویی فرشینه", description: "جمع‌آوری و تحویل فرش با پوشش مناطق مختلف تهران.", verified: true, ad: false, services: ["قالیشویی", "موکت‌شویی", "مبل‌شویی"], logo: "ف" },
];
const cleaners = [
  { name: "قالیشویی نوین تهران", description: "خدمات قالیشویی و شست‌وشوی فرش دستباف و ماشینی.", verified: true, ad: false, services: ["قالیشویی", "فرش دستباف"], logo: "ن" },
  { name: "قالیشویی گلستان", description: "پذیرش سفارش در مناطق مرکزی و غرب تهران.", verified: false, ad: false, services: ["قالیشویی", "موکت‌شویی"], logo: "گ" },
  { name: "قالیشویی ایرانیان", description: "سرویس جمع‌آوری و تحویل با پوشش چند منطقه تهران.", verified: true, ad: false, services: ["قالیشویی", "مبل‌شویی"], logo: "ا" },
];
const prices = [
  ["فرش ماشینی", "هر مترمربع", "از ۴۵٬۰۰۰ تومان"],
  ["فرش دستباف", "هر مترمربع", "از ۸۰٬۰۰۰ تومان"],
  ["موکت", "هر مترمربع", "از ۳۵٬۰۰۰ تومان"],
  ["مبل‌شویی", "هر دست", "از ۷۵۰٬۰۰۰ تومان"],
];
const areas = ["سعادت‌آباد", "شهرک غرب", "پونک", "مرزداران", "ونک", "یوسف‌آباد", "جردن", "گیشا"];
const faqs = [
  ["قیمت قالیشویی در تهران چطور محاسبه می‌شود؟", "قیمت معمولاً بر اساس نوع فرش، متراژ، نوع شست‌وشو و خدمات تکمیلی تعیین می‌شود. مبلغ نهایی را قبل از سفارش استعلام کنید."],
  ["آیا قالیشویی‌ها جمع‌آوری و تحویل دارند؟", "بسیاری از مجموعه‌ها این سرویس را ارائه می‌کنند؛ جزئیات محدوده و شرایط هر مجموعه در اطلاعات همان کارت مشخص می‌شود."],
  ["چطور قالیشویی مناسب انتخاب کنم؟", "محدوده خدمت، خدمات موردنیاز، وضعیت تأیید اطلاعات و قیمت را کنار هم بررسی کنید و سپس برای زمان‌بندی تماس بگیرید."],
];

function Icon({ name }: { name: "arrow" | "search" | "check" | "star" | "map" | "phone" | "chevron" }) {
  const paths = {
    arrow: <><path d="M19 12H5" /><path d="m11 6-6 6 6 6" /></>,
    search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    star: <path d="m12 3.8 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.2-4.1 5.8-.8L12 3.8Z" />,
    map: <><path d="M9 18.5 4 21V6l5-2.5L15 6l5-2.5v15l-5 2.5-6-2.5Z" /><path d="M9 3.5v15M15 6v15" /></>,
    phone: <path d="M7.4 4.5 10 7l-1.7 2.8c1 2.1 2.5 3.7 4.6 4.7l2.8-1.8 2.5 2.6c.6.6.6 1.6 0 2.2l-1.2 1.2C11.2 19 5 12.8 4.3 6.9l1.2-1.2c.5-.7 1.3-.8 1.9-.2Z" />,
    chevron: <path d="m8 10 4 4 4-4" />,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function CleanerCard({ cleaner, featured = false }: { cleaner: typeof featuredCleaners[number]; featured?: boolean }) {
  return (
    <article className={`m3-cleaner-card ${featured ? "is-featured" : ""}`}>
      <div className="m3-cleaner-main">
        <div className="m3-cleaner-identity">
          <div className="m3-avatar" aria-hidden="true">{cleaner.logo}</div>
          <div className="m3-cleaner-title">
            <div className="m3-cleaner-name-row">
              <h3>{cleaner.name}</h3>
              {cleaner.verified && <span className="m3-verified"><Icon name="check" /> تأیید شده</span>}
            </div>
            <div className="m3-cleaner-meta">
              {cleaner.ad && <span className="m3-featured-label">پیشنهاد ویژه</span>}
            </div>
          </div>
        </div>
        <div className="m3-cleaner-summary">
          <p className="m3-cleaner-description">{cleaner.description}</p>
          <div className="m3-services-line">
            <span className="m3-field-label">خدمات</span>
            <div className="m3-chip-row">{cleaner.services.map((service) => <span className="m3-chip" key={service}>{service}</span>)}</div>
          </div>
        </div>
      </div>
      <div className="m3-cleaner-footer">
        <div className="m3-contact-row" aria-label="راه‌های ارتباطی">
          <span className="m3-contact-icon"><span>ب</span></span>
          <span className="m3-contact-icon"><span>◎</span></span>
          <span className="m3-contact-icon"><span>ت</span></span>
          <span className="m3-contact-icon"><Icon name="phone" /></span>
        </div>
        <button type="button" className="m3-filled-button"><Icon name="phone" /> نمایش شماره</button>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="m3-page" dir="rtl">
      <SiteHeader />
      <section className="m3-hero">
        <div className="m3-hero-orb m3-orb-one" /><div className="m3-hero-orb m3-orb-two" />
        <div className="m3-shell m3-hero-inner">
          <nav className="m3-breadcrumb" aria-label="مسیر صفحه"><a href="/">قالی مپ</a><span>‹</span><a href="/ostan-ha">استان تهران</a><span>‹</span><strong>تهران</strong></nav>
          <div className="m3-hero-layout">
            <div className="m3-hero-main"><span className="m3-label-large">راهنمای شهر</span><h1>قالیشویی در تهران</h1><p>قالیشویی‌های تهران را بر اساس محدوده، خدمات، وضعیت تأیید و قیمت تقریبی مقایسه کنید.</p><div className="m3-hero-stats"><div><strong>۲۴+</strong><span>مجموعه</span></div><div><strong>۸</strong><span>منطقه نمونه</span></div><div><strong>۴.۸</strong><span>امتیاز میانگین</span></div></div><div className="m3-hero-actions"><a href="#cleaners" className="m3-hero-primary">دیدن قالیشویی‌ها <Icon name="arrow" /></a><a href="#prices" className="m3-hero-secondary">مشاهده قیمت‌ها</a></div></div>
            <aside className="m3-hero-card"><div className="m3-hero-card-icon"><Icon name="map" /></div><span className="m3-label-medium">محدوده انتخابی</span><strong>تهران</strong><p>برای رسیدن به نتیجه دقیق‌تر، محله یا منطقه موردنظر خود را از بخش مناطق انتخاب کنید.</p><a href="#areas">دیدن مناطق <Icon name="arrow" /></a></aside>
          </div>
        </div>
      </section>
      <LocationAnchorNav />
      <div className="m3-shell m3-content">
        <section id="cleaners" className="m3-section">
          <header className="m3-section-head"><div><span className="m3-overline">انتخاب‌های پیشنهادی</span><h2>قالیشویی‌های تهران</h2><p>گزینه‌ها را سریع و بدون رفت‌وبرگشت بین صفحات مقایسه کنید.</p></div><span className="m3-count-pill">۲۴ مجموعه</span></header>
          <div className="m3-featured-grid">{featuredCleaners.map((c) => <CleanerCard key={c.name} cleaner={c} featured />)}</div>
          <div className="m3-subhead"><h3>سایر مجموعه‌ها</h3><span>نتایج بیشتر</span></div>
          <div className="m3-cleaner-grid">{cleaners.map((c) => <CleanerCard key={c.name} cleaner={c} />)}</div>
        </section>
        <section id="about" className="m3-section"><div className="m3-info-panel"><div className="m3-info-copy"><span className="m3-overline">راهنمای انتخاب</span><h2>قبل از سفارش، این چهار مورد را بررسی کنید.</h2><p>قیمت تنها معیار انتخاب نیست. محدوده جمع‌آوری، نوع شست‌وشو، زمان تحویل و خدمات تکمیلی می‌توانند تفاوت اصلی بین گزینه‌ها باشند.</p></div><div className="m3-check-list">{["محدوده خدمت‌رسانی", "خدمات موردنیاز", "تأیید اطلاعات مجموعه", "استعلام قیمت نهایی"].map((item) => <div key={item}><span><Icon name="check" /></span><strong>{item}</strong></div>)}</div></div></section>
        <section id="prices" className="m3-section"><header className="m3-section-head"><div><span className="m3-overline">قیمت خدمات</span><h2>قیمت تقریبی قالیشویی</h2><p>اعداد برای مقایسه اولیه هستند و با شرایط سفارش تغییر می‌کنند.</p></div><span className="m3-update">به‌روزرسانی شهریور ۱۴۰۵</span></header><div className="m3-price-card">{prices.map(([title, unit, price], i) => <div className="m3-price-row" key={title}><span className="m3-price-num">۰{i + 1}</span><div><strong>{title}</strong><span>{unit}</span></div><b>{price}</b></div>)}</div></section>
        <section id="areas" className="m3-section"><header className="m3-section-head"><div><span className="m3-overline">محدوده خدمت</span><h2>مناطق و محله‌های تهران</h2><p>یک محله را انتخاب کنید تا مسیر جست‌وجو کوتاه‌تر شود.</p></div></header><div className="m3-area-grid">{areas.map((area) => <a href="#" key={area}><span>{area}</span><Icon name="arrow" /></a>)}</div></section>
        <section id="faq" className="m3-section"><header className="m3-section-head"><div><span className="m3-overline">پرسش‌های پرتکرار</span><h2>سوالات متداول</h2><p>پاسخ کوتاه به پرسش‌هایی که قبل از تماس بیشتر مطرح می‌شوند.</p></div></header><div className="m3-faq-list">{faqs.map(([q, a]) => <details key={q}><summary><span>{q}</span><span className="m3-faq-icon">+</span></summary><p>{a}</p></details>)}</div></section>
        <section id="reviews" className="m3-section"><div className="m3-review-layout"><div className="m3-review-summary"><span className="m3-overline">تجربه کاربران</span><h2>انتخاب مطمئن‌تر با تجربه دیگران.</h2><div className="m3-big-rating"><strong>۴.۸</strong><span><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span></div><p>این امتیاز در نسخه نهایی از داده‌های واقعی کاربران تغذیه خواهد شد.</p></div><article className="m3-review-card"><div><strong>مریم · تهران</strong><span>۲ روز پیش</span></div><span className="m3-review-stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span><p>مقایسه محدوده و خدمات قبل از تماس خیلی کمک می‌کند، مخصوصاً وقتی چند گزینه در یک محله دارید.</p></article></div></section>
        <section className="m3-related"><div><span className="m3-overline">مسیرهای مرتبط</span><h2>شهرهای نزدیک</h2></div><div className="m3-related-list">{["کرج", "شهریار", "اسلامشهر", "ری", "پردیس"].map((place) => <a href="#" key={place}><span>قالیشویی در {place}</span><Icon name="arrow" /></a>)}</div></section>
      </div>
      <SiteFooter />
    </main>
  );
}