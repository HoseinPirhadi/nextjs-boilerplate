import Link from "next/link";

const footerGroups = [
  {
    title: "مسیرهای قالی‌مپ",
    links: [
      { label: "استان‌ها", href: "/ostan-ha" },
      { label: "قیمت خدمات", href: "#prices" },
      { label: "راهنمای انتخاب", href: "#guide" },
    ],
  },
  {
    title: "خدمات",
    links: [
      { label: "قالیشویی", href: "#services" },
      { label: "مبل‌شویی", href: "#services" },
      { label: "موکت‌شویی", href: "#services" },
      { label: "شست‌وشوی فرش", href: "#services" },
    ],
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 12h12M13 6l6 6-6 6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m21 4-3.1 16-6.1-4.4-3.4 3.2.6-5.2L18.8 7l-10.6 5.2L3 10.5 21 4Z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer" dir="rtl">
      <div className="site-footer-main">
        <div className="site-footer-brand">
          <Link className="site-footer-logo" href="/" aria-label="قالی مپ">
            <span className="site-footer-logo-mark" aria-hidden="true">ق</span>
            <span>
              <strong>قالی مپ</strong>
              <small>راهنمای قالیشویی</small>
            </span>
          </Link>

          <p>
            راهی ساده برای پیدا کردن قالیشویی، بررسی خدمات و مقایسه
            اطلاعات موردنیاز در شهر و منطقه شما.
          </p>

          <div className="site-footer-socials" aria-label="شبکه‌های اجتماعی">
            <a href="#" aria-label="اینستاگرام قالی مپ">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="تلگرام قالی مپ">
              <TelegramIcon />
            </a>
          </div>
        </div>

        <div className="site-footer-links">
          {footerGroups.map((group) => (
            <div className="site-footer-column" key={group.title}>
              <h2>{group.title}</h2>
              <nav aria-label={group.title}>
                {group.links.map((link) => (
                  <Link href={link.href} key={link.label}>
                    <span>{link.label}</span>
                    <ArrowIcon />
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="site-footer-contact">
          <span className="site-footer-eyebrow">قالی‌مپ</span>
          <h2>دنبال قالیشویی مناسب هستید؟</h2>
          <p>
            از استان شروع کنید، شهر و منطقه را انتخاب کنید و گزینه‌های
            موجود را بررسی کنید.
          </p>
          <Link className="site-footer-action" href="/ostan-ha">
            <span>پیدا کردن قالیشویی</span>
            <ArrowIcon />
          </Link>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>© {new Date().getFullYear()} قالی مپ. همه حقوق محفوظ است.</span>
        <div>
          <a href="#privacy">حریم خصوصی</a>
          <a href="#terms">قوانین استفاده</a>
        </div>
      </div>
    </footer>
  );
}
