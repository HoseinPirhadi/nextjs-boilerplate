import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";

type IconName = "arrow" | "check" | "phone" | "instagram" | "telegram" | "map" | "location";

function Icon({ name }: { name: IconName }) {
  const paths = {
    arrow: <><path d="M18 12H6" /><path d="m11 6-6 6 6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    phone: <path d="M7.4 4.5 10 7l-1.7 2.8c1 2.1 2.5 3.7 4.6 4.7l2.8-1.8 2.5 2.6c.6.6.6 1.6 0 2.2l-1.2 1.2C11.2 19 5 12.8 4.3 6.9l1.2-1.2c.5-.7 1.3-.8 1.9-.2Z" />,
    instagram: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.2" cy="6.8" r=".8" fill="currentColor" stroke="none" /></>,
    telegram: <path d="m21 4-3.1 16-6.1-4.4-3.4 3.2.6-5.2L18.8 7l-10.6 5.2L3 10.5 21 4Z" />,
    map: <><path d="M9 18.5 4 21V6l5-2.5L15 6l5-2.5v15l-5 2.5-6-2.5Z" /><path d="M9 3.5v15M15 6v15" /></>,
    location: <><path d="M20 10c0 5-8 10-8 10S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

const featuredCleaner = {
  name: "قالیشویی پاک‌نگار",
  description:
    "قالیشویی پاک‌نگار با ارائه خدمات تخصصی شست‌وشوی فرش‌های ماشینی و دستباف، مبل‌شویی و ترمیم فرش، سفارش‌های شما را در مناطق مختلف تهران دریافت کرده و با هماهنگی قبلی جمع‌آوری و تحویل می‌دهد.",
  services: ["شست‌وشوی فرش", "مبل‌شویی", "ترمیم فرش", "فرش دستباف"],
};

const normalCleaners = [
  {
    name: "قالیشویی نوین تهران",
    logo: "ن",
    description: "خدمات قالیشویی و شست‌وشوی فرش دستباف و ماشینی با جمع‌آوری و تحویل در محدوده تهران.",
    services: ["قالیشویی", "فرش دستباف", "مبل‌شویی"],
    coverage: "پوشش مناطق مرکزی و شمال تهران",
    verified: true,
  },
  {
    name: "قالیشویی گلستان",
    logo: "گ",
    description: "پذیرش سفارش و خدمات شست‌وشوی فرش و موکت با هماهنگی قبلی برای مناطق مختلف تهران.",
    services: ["قالیشویی", "موکت‌شویی"],
    coverage: "پوشش غرب و مرکز تهران",
    verified: false,
  },
  {
    name: "قالیشویی ایرانیان",
    logo: "ا",
    description: "ارائه خدمات شست‌وشوی فرش ماشینی، مبل‌شویی و جمع‌آوری سفارش در چند منطقه تهران.",
    services: ["قالیشویی", "مبل‌شویی", "موکت‌شویی"],
    coverage: "پوشش چند منطقه تهران",
    verified: true,
  },
];

const prices = [
  ["فرش ماشینی", "هر مترمربع", "از ۴۵٬۰۰۰ تومان"],
  ["فرش دستباف", "هر مترمربع", "از ۸۰٬۰۰۰ تومان"],
  ["موکت", "هر مترمربع", "از ۳۵٬۰۰۰ تومان"],
  ["مبل‌شویی", "هر دست", "از ۷۵۰٬۰۰۰ تومان"],
];

const neighborhoods = [
  ["سعادت‌آباد", "منطقه ۲", "۱۲ قالیشویی"],
  ["پونک", "منطقه ۵", "۹ قالیشویی"],
  ["نیاوران", "منطقه ۱", "۷ قالیشویی"],
  ["مرزداران", "منطقه ۲", "۸ قالیشویی"],
  ["تهرانپارس", "منطقه ۴", "۱۱ قالیشویی"],
  ["ونک", "منطقه ۳", "۱۰ قالیشویی"],
];

const similar = [
  ["شهر", "کرج", "استان البرز", "۳۸ قالیشویی"],
  ["منطقه", "منطقه ۵ تهران", "تهران · مناطق", "۹ قالیشویی"],
  ["محله", "سعادت‌آباد", "تهران · منطقه ۲", "۱۲ قالیشویی"],
  ["جهت", "شمال تهران", "تهران · محدوده", "۲۴ قالیشویی"],
];

const faqs = [
  ["قیمت قالیشویی در تهران چطور محاسبه می‌شود؟", "قیمت معمولاً بر اساس نوع فرش، متراژ، نوع شست‌وشو و خدمات تکمیلی تعیین می‌شود. مبلغ نهایی را قبل از سفارش استعلام کنید."],
  ["آیا قالیشویی‌ها جمع‌آوری و تحویل دارند؟", "بسیاری از مجموعه‌ها این سرویس را ارائه می‌کنند؛ محدوده و شرایط هر مجموعه را هنگام تماس بررسی کنید."],
  ["چطور قالیشویی مناسب انتخاب کنم؟", "محدوده خدمت، خدمات موردنیاز، وضعیت تأیید اطلاعات و قیمت را کنار هم بررسی کنید و سپس برای زمان‌بندی تماس بگیرید."],
];

function Socials() {
  return (
    <div className="tehran-socials" aria-label="راه‌های ارتباطی">
      <button type="button" aria-label="بله"><span>ب</span></button>
      <button type="button" aria-label="اینستاگرام"><Icon name="instagram" /></button>
      <button type="button" aria-label="تلگرام"><Icon name="telegram" /></button>
    </div>
  );
}

function CallButton() {
  return <button type="button" className="tehran-call"><Icon name="phone" /><span>تماس</span></button>;
}

function FeaturedCleaner() {
  return (
    <article className="tehran-featured-card">
      <div className="tehran-featured-strip">
        <span className="tehran-featured-dot" />
        <span>پیشنهاد ویژه</span>
      </div>

      <div className="tehran-featured-body">
        <div className="tehran-featured-identity">
          <div className="tehran-logo tehran-logo-featured">پ</div>
          <div>
            <div className="tehran-name-line">
              <h3>{featuredCleaner.name}</h3>
              <span className="tehran-verified"><Icon name="check" /> تأیید شده</span>
            </div>
            <p>{featuredCleaner.description}</p>
          </div>
        </div>

        <div className="tehran-service-row">
          {featuredCleaner.services.map((service) => <span key={service}>{service}</span>)}
        </div>
      </div>

      <footer className="tehran-featured-footer">
        <span className="tehran-coverage"><Icon name="location" /> پوشش مناطق مختلف تهران</span>
        <div className="tehran-contact">
          <Socials />
          <CallButton />
        </div>
      </footer>
    </article>
  );
}

function NormalCleaner({ cleaner }: { cleaner: typeof normalCleaners[number] }) {
  return (
    <article className="tehran-normal-card">
      <header className="tehran-normal-top">
        <div className="tehran-normal-identity">
          <div className="tehran-logo">{cleaner.logo}</div>
          <div>
            <div className="tehran-normal-name">
              <h3>{cleaner.name}</h3>
              {cleaner.verified && <span className="tehran-verified"><Icon name="check" /> تأیید شده</span>}
            </div>
            <span className="tehran-normal-type">قالیشویی در تهران</span>
          </div>
        </div>
        <Socials />
      </header>

      <p className="tehran-normal-description">{cleaner.description}</p>

      <div className="tehran-normal-services">
        <div className="tehran-service-title"><i /> خدمات</div>
        <div className="tehran-service-row">
          {cleaner.services.map((service) => <span key={service}>{service}</span>)}
        </div>
      </div>

      <footer className="tehran-normal-footer">
        <span className="tehran-coverage"><Icon name="location" /> {cleaner.coverage}</span>
        <CallButton />
      </footer>
    </article>
  );
}

function NeighborhoodCarousel() {
  return (
    <section className="tehran-section tehran-neighborhood-section">
      <header className="tehran-section-head">
        <div>
          <span className="tehran-overline">محله‌های تهران</span>
          <h2>محله موردنظرتان را انتخاب کنید</h2>
          <p>برای رسیدن سریع‌تر به قالیشویی‌های نزدیک، محله را انتخاب کنید.</p>
        </div>
        <a href="#similar">همه محله‌ها <Icon name="arrow" /></a>
      </header>

      <div className="tehran-neighborhood-carousel">
        {neighborhoods.map(([name, region, count], index) => (
          <a className="tehran-neighborhood-card" href="#" key={name}>
            <span className="tehran-neighborhood-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="tehran-neighborhood-icon"><Icon name="location" /></span>
            <strong>{name}</strong>
            <span className="tehran-neighborhood-meta">{region} · {count}</span>
            <span className="tehran-card-arrow"><Icon name="arrow" /></span>
          </a>
        ))}
      </div>
    </section>
  );
}

function SimilarCard({ item }: { item: typeof similar[number] }) {
  return (
    <a className="tehran-similar-card" href="#">
      <span className="tehran-similar-icon"><Icon name="location" /></span>
      <span className="tehran-similar-content">
        <small>{item[0]}</small>
        <strong>{item[1]}</strong>
        <span>{item[2]} · {item[3]}</span>
      </span>
      <span className="tehran-card-arrow"><Icon name="arrow" /></span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="tehran-page" dir="rtl">
      <SiteHeader />

      <section className="tehran-hero">
        <div className="tehran-hero-overlay" />
        <div className="tehran-shell tehran-hero-inner">
          <nav className="tehran-breadcrumb" aria-label="مسیر صفحه">
            <a href="/">قالی مپ</a><span>‹</span><a href="/ostan-ha">استان تهران</a><span>‹</span><strong>تهران</strong>
          </nav>

          <div className="tehran-hero-copy">
            <span className="tehran-hero-eyebrow">راهنمای قالیشویی در تهران</span>
            <h1>قالیشویی در تهران</h1>
            <p>قالیشویی‌های تهران را بر اساس محدوده، خدمات و وضعیت تأیید اطلاعات مقایسه کنید و سریع‌تر به گزینه مناسب برسید.</p>
            <div className="tehran-hero-actions">
              <a className="tehran-hero-primary" href="#cleaners">دیدن قالیشویی‌ها <Icon name="arrow" /></a>
              <a className="tehran-hero-secondary" href="#prices">مشاهده قیمت‌ها</a>
            </div>
          </div>

          <div className="tehran-hero-bottom">
            <span><Icon name="location" /> تهران · ۲۴ مجموعه قابل بررسی</span>
            <span>۲۲ منطقه · محله‌های متعدد</span>
          </div>
        </div>
      </section>

      <div className="tehran-anchor-wrap">
        <nav className="tehran-anchor-nav" aria-label="بخش‌های صفحه">
          <a href="#cleaners">قالیشویی‌ها</a>
          <a href="#guide">راهنمای انتخاب</a>
          <a href="#prices">قیمت‌ها</a>
          <a href="#neighborhoods">محله‌ها</a>
          <a href="#faq">سوالات متداول</a>
          <a href="#similar">موارد مشابه</a>
        </nav>
      </div>

      <div className="tehran-shell tehran-content">

        <section id="cleaners" className="tehran-section">
          <header className="tehran-section-head">
            <div>
              <span className="tehran-overline">قالیشویی‌های تهران</span>
              <h2>گزینه‌های قابل بررسی</h2>
              <p>اول پیشنهاد ویژه را ببینید، سپس سایر مجموعه‌ها را مقایسه کنید.</p>
            </div>
            <span className="tehran-count">۲۴ مجموعه</span>
          </header>

          <FeaturedCleaner />

          <div className="tehran-subhead">
            <h3>سایر مجموعه‌ها</h3>
            <span>نتایج بیشتر</span>
          </div>

          <div className="tehran-normal-grid">
            {normalCleaners.map((cleaner) => <NormalCleaner cleaner={cleaner} key={cleaner.name} />)}
          </div>
        </section>

        <section id="guide" className="tehran-section">
          <div className="tehran-guide">
            <div>
              <span className="tehran-overline">راهنمای انتخاب</span>
              <h2>قبل از سفارش، این چهار مورد را بررسی کنید.</h2>
              <p>قیمت تنها معیار انتخاب نیست. محدوده جمع‌آوری، نوع شست‌وشو، زمان تحویل و خدمات تکمیلی می‌توانند تفاوت اصلی بین گزینه‌ها باشند.</p>
            </div>
            <div className="tehran-guide-list">
              {["محدوده خدمت‌رسانی", "خدمات موردنیاز", "تأیید اطلاعات مجموعه", "استعلام قیمت نهایی"].map((item, index) => (
                <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><Icon name="check" /></div>
              ))}
            </div>
          </div>
        </section>

        <section id="prices" className="tehran-section">
          <header className="tehran-section-head">
            <div>
              <span className="tehran-overline">قیمت خدمات</span>
              <h2>قیمت تقریبی قالیشویی</h2>
              <p>اعداد برای مقایسه اولیه هستند و با شرایط سفارش تغییر می‌کنند.</p>
            </div>
            <span className="tehran-update">به‌روزرسانی شهریور ۱۴۰۵</span>
          </header>

          <div className="tehran-price-card">
            {prices.map(([title, unit, price], index) => (
              <div className="tehran-price-row" key={title}>
                <span className="tehran-price-number">{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{title}</strong><span>{unit}</span></div>
                <b>{price}</b>
              </div>
            ))}
          </div>
        </section>

        <NeighborhoodCarousel />

        <section id="faq" className="tehran-section">
          <header className="tehran-section-head">
            <div>
              <span className="tehran-overline">پرسش‌های پرتکرار</span>
              <h2>سوالات متداول</h2>
              <p>پاسخ کوتاه به پرسش‌هایی که قبل از تماس بیشتر مطرح می‌شوند.</p>
            </div>
          </header>

          <div className="tehran-faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary><span>{question}</span><b>+</b></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="similar" className="tehran-section">
          <header className="tehran-section-head">
            <div>
              <span className="tehran-overline">موارد مشابه</span>
              <h2>اگر دنبال محدوده دیگری هستید</h2>
              <p>شهر، منطقه، محله یا جهت موردنظر را از مسیرهای مرتبط انتخاب کنید.</p>
            </div>
          </header>

          <div className="tehran-similar-grid">
            {similar.map((item) => <SimilarCard item={item} key={item[1]} />)}
          </div>
        </section>

      </div>

      <SiteFooter />
    </main>
  );
}
