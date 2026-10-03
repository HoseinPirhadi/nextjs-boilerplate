import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";

const featuredCleaners = [
  {
    name: "قالیشویی پاک‌نگار",
    description: "شست‌وشوی تخصصی فرش و خدمات تکمیلی با ثبت سفارش در محدوده تهران.",
    verified: true,
    ad: true,
    services: ["شست‌وشوی فرش", "مبل‌شویی", "ترمیم"],
    logo: "پ",
  },
  {
    name: "قالیشویی فرشینه",
    description: "پوشش مناطق مختلف تهران با سرویس جمع‌آوری و تحویل فرش.",
    verified: true,
    ad: false,
    services: ["قالیشویی", "موکت‌شویی", "مبل‌شویی"],
    logo: "ف",
  },
];

const cleaners = [
  {
    name: "قالیشویی نوین تهران",
    description: "خدمات قالیشویی و شست‌وشوی انواع فرش دستباف و ماشینی.",
    verified: true,
    ad: false,
    services: ["قالیشویی", "شست‌وشوی فرش دستباف"],
    logo: "ن",
  },
  {
    name: "قالیشویی گلستان",
    description: "پذیرش سفارش در مناطق مرکزی و غرب تهران.",
    verified: false,
    ad: false,
    services: ["قالیشویی", "موکت‌شویی"],
    logo: "گ",
  },
  {
    name: "قالیشویی ایرانیان",
    description: "سرویس جمع‌آوری و تحویل با پوشش چند منطقه تهران.",
    verified: true,
    ad: false,
    services: ["قالیشویی", "مبل‌شویی"],
    logo: "ا",
  },
];

const prices = [
  { title: "فرش ماشینی", unit: "هر مترمربع", price: "از ۴۵٬۰۰۰ تومان" },
  { title: "فرش دستباف", unit: "هر مترمربع", price: "از ۸۰٬۰۰۰ تومان" },
  { title: "موکت", unit: "هر مترمربع", price: "از ۳۵٬۰۰۰ تومان" },
  { title: "مبل‌شویی", unit: "هر دست", price: "از ۷۵۰٬۰۰۰ تومان" },
];

const areas = ["سعادت‌آباد", "شهرک غرب", "پونک", "مرزداران", "ونک", "یوسف‌آباد", "جردن", "گیشا"];

const faqs = [
  {
    q: "قیمت قالیشویی در تهران چطور محاسبه می‌شود؟",
    a: "قیمت معمولاً بر اساس نوع فرش، متراژ، نوع شست‌وشو و خدمات تکمیلی تعیین می‌شود. اعداد این صفحه برای مقایسه اولیه هستند.",
  },
  {
    q: "آیا قالیشویی‌های این صفحه فرش را در محل جمع‌آوری می‌کنند؟",
    a: "بسیاری از قالیشویی‌ها سرویس جمع‌آوری و تحویل دارند؛ جزئیات هر مجموعه را باید در اطلاعات همان کارت بررسی کنید.",
  },
  {
    q: "چطور یک قالیشویی مناسب انتخاب کنم؟",
    a: "ابتدا محدوده خدمت‌رسانی، خدمات موردنیاز و اطلاعات تأییدشده را بررسی کنید و سپس برای استعلام قیمت و زمان‌بندی با مجموعه تماس بگیرید.",
  },
];

const relatedPlaces = ["کرج", "شهریار", "اسلامشهر", "ری", "پردیس"];

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>;
}

function StarIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 4 2.5 5.1 5.5.8-4 4 1 5.5-5-2.6-5 2.6 1-5.5-4-4 5.5-.8L12 4Z" /></svg>;
}

function CleanerCard({ cleaner, featured = false }: { cleaner: typeof featuredCleaners[number]; featured?: boolean }) {
  return (
    <article className={`location-cleaner-card ${featured ? "is-featured" : ""}`}>
      <div className="location-cleaner-top">
        <div className="location-cleaner-logo">{cleaner.logo}</div>
        <div className="location-cleaner-title">
          <div className="location-cleaner-badges">
            {cleaner.ad && <span className="location-badge location-badge-ad">پیشنهاد ویژه</span>}
            {cleaner.verified && <span className="location-badge location-badge-verified"><CheckIcon /> تأیید شده</span>}
          </div>
          <h3>{cleaner.name}</h3>
        </div>
      </div>
      <p>{cleaner.description}</p>
      <div className="location-service-tags">
        {cleaner.services.map((service) => <span key={service}>{service}</span>)}
      </div>
      <div className="location-cleaner-actions">
        <button type="button" className="location-phone-button">نمایش شماره تماس</button>
        <button type="button" className="location-more-button" aria-label={`مشاهده اطلاعات ${cleaner.name}`}><ArrowIcon /></button>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="location-page">
      <SiteHeader />

      <section className="location-hero">
        <div className="location-hero-glow" />
        <div className="location-shell">
          <nav className="location-breadcrumb" aria-label="مسیر صفحه">
            <a href="/">قالی مپ</a><span>/</span><a href="/ostan-ha">استان تهران</a><span>/</span><strong>تهران</strong>
          </nav>

          <div className="location-hero-grid">
            <div className="location-hero-copy">
              <span className="location-eyebrow">شهر</span>
              <h1>قالیشویی در تهران</h1>
              <p>فهرست قالیشویی‌های تهران، خدمات، قیمت‌های تقریبی و مناطق تحت پوشش را یکجا بررسی کنید.</p>
              <div className="location-hero-meta">
                <span><strong>۲۴+</strong> مجموعه</span>
                <span><strong>۸</strong> منطقه نمونه</span>
                <span><strong>به‌روز</strong> اطلاعات</span>
              </div>
              <div className="location-hero-actions">
                <a href="#cleaners" className="location-primary-action">دیدن قالیشویی‌ها <ArrowIcon /></a>
                <a href="#prices" className="location-secondary-action">مشاهده قیمت‌ها</a>
              </div>
            </div>

            <div className="location-quick-card">
              <div className="location-quick-icon"><SearchIcon /></div>
              <span>جستجو در این محدوده</span>
              <strong>قالیشویی نزدیک شما</strong>
              <p>منطقه یا محله خود را انتخاب کنید تا مسیر دقیق‌تری برای پیدا کردن مجموعه مناسب داشته باشید.</p>
              <a href="#areas">دیدن مناطق تحت پوشش <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <nav className="location-anchor-nav" aria-label="دسترسی سریع">
        <div className="location-shell location-anchor-inner">
          <a href="#cleaners">قالیشویی‌ها</a>
          <a href="#about">درباره این محدوده</a>
          <a href="#prices">قیمت‌ها</a>
          <a href="#areas">مناطق</a>
          <a href="#faq">سوالات متداول</a>
          <a href="#reviews">تجربه کاربران</a>
        </div>
      </nav>

      <div className="location-shell location-content">
        <section id="cleaners" className="location-section">
          <div className="location-section-heading">
            <div>
              <span className="location-section-kicker">انتخاب‌های پیشنهادی</span>
              <h2>قالیشویی‌های تهران</h2>
              <p>مجموعه‌ها را بر اساس محدوده، خدمات و اطلاعات ثبت‌شده مقایسه کنید.</p>
            </div>
            <span className="location-count">۲۴ مجموعه</span>
          </div>

          <div className="location-cleaner-grid location-featured-grid">
            {featuredCleaners.map((cleaner) => <CleanerCard key={cleaner.name} cleaner={cleaner} featured />)}
          </div>

          <div className="location-section-subheading">
            <h3>سایر قالیشویی‌ها</h3>
            <span>نتایج بیشتر در این محدوده</span>
          </div>
          <div className="location-cleaner-grid">
            {cleaners.map((cleaner) => <CleanerCard key={cleaner.name} cleaner={cleaner} />)}
          </div>
        </section>

        <section id="about" className="location-section location-about">
          <div className="location-about-copy">
            <span className="location-section-kicker">راهنمای این صفحه</span>
            <h2>قالیشویی در تهران؛ قبل از انتخاب چه چیزهایی را بررسی کنیم؟</h2>
            <p>اگر دنبال قالیشویی در تهران هستید، فقط به قیمت توجه نکنید. نوع فرش، کیفیت شست‌وشو، محدوده جمع‌آوری، زمان تحویل و خدمات تکمیلی می‌توانند در انتخاب شما مؤثر باشند.</p>
            <p>در قالی مپ تلاش کرده‌ایم اطلاعات موردنیاز را در یک صفحه جمع کنیم تا بتوانید قبل از تماس، گزینه‌های موجود در محدوده خود را سریع‌تر مقایسه کنید.</p>
          </div>
          <div className="location-about-points">
            {["بررسی محدوده خدمت‌رسانی", "مقایسه خدمات موردنیاز", "بررسی وضعیت تأیید اطلاعات", "استعلام قیمت پیش از سفارش"].map((item) => (
              <div key={item}><span><CheckIcon /></span><strong>{item}</strong></div>
            ))}
          </div>
        </section>

        <section id="prices" className="location-section">
          <div className="location-section-heading">
            <div>
              <span className="location-section-kicker">قیمت خدمات</span>
              <h2>قیمت تقریبی قالیشویی در تهران</h2>
              <p>برای مقایسه اولیه؛ مبلغ نهایی ممکن است بر اساس شرایط سفارش تغییر کند.</p>
            </div>
            <span className="location-price-note">آخرین بروزرسانی: شهریور ۱۴۰۵</span>
          </div>
          <div className="location-price-table">
            {prices.map((item, index) => (
              <div className="location-price-row" key={item.title}>
                <span className="location-price-index">۰{index + ۱}</span>
                <strong>{item.title}</strong>
                <span>{item.unit}</span>
                <b>{item.price}</b>
              </div>
            ))}
          </div>
        </section>

        <section id="areas" className="location-section">
          <div className="location-section-heading">
            <div>
              <span className="location-section-kicker">محدوده خدمت</span>
              <h2>مناطق و محله‌های تحت پوشش</h2>
              <p>این فهرست نمونه‌ای از محدوده‌هایی است که در اطلاعات مجموعه‌ها دیده می‌شود.</p>
            </div>
          </div>
          <div className="location-area-grid">
            {areas.map((area) => <a href="#" key={area}><span>{area}</span><ArrowIcon /></a>)}
          </div>
        </section>

        <section id="faq" className="location-section">
          <div className="location-section-heading">
            <div>
              <span className="location-section-kicker">پرسش‌های پرتکرار</span>
              <h2>سوالات متداول درباره قالیشویی تهران</h2>
            </div>
          </div>
          <div className="location-faq-list">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary><span>{faq.q}</span><b>+</b></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="reviews" className="location-section location-reviews">
          <div className="location-review-summary">
            <span className="location-section-kicker">تجربه کاربران</span>
            <h2>قبل از تماس، تجربه دیگران را هم ببینید.</h2>
            <div className="location-rating"><strong>۴.۸</strong><span><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span></div>
            <p>امتیاز نمایشی برای طراحی رابط است و در نسخه واقعی از داده‌های ثبت‌شده کاربران تغذیه می‌شود.</p>
          </div>
          <div className="location-review-card">
            <div className="location-review-card-top"><strong>مریم · تهران</strong><span>۲ روز پیش</span></div>
            <div className="location-review-stars"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
            <p>مقایسه محدوده و خدمات قبل از تماس خیلی کمک می‌کند. مخصوصاً وقتی چند گزینه در یک محله دارید.</p>
          </div>
        </section>

        <section className="location-related">
          <div>
            <span className="location-section-kicker">مسیرهای مرتبط</span>
            <h2>شهرهای نزدیک</h2>
          </div>
          <div className="location-related-list">
            {relatedPlaces.map((place) => <a href="#" key={place}>{place}<ArrowIcon /></a>)}
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
