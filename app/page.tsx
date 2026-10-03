import SiteHeader from "./components/site-header";

export default function Home() {
  return (
    <main className="site-preview">
      <SiteHeader />
      <section className="preview-hero">
        <div className="preview-hero-content">
          <span className="preview-eyebrow">قالی مپ</span>
          <h1>قالیشویی مناسب شهرت را راحت‌تر پیدا کن</h1>
          <p>این صفحه برای مشاهده و طراحی رابط کاربری ساخته شده است. هدر شناور و شیشه‌ای را در اندازه‌های مختلف بررسی کن.</p>
          <div className="preview-actions"><a href="#cleaners">مشاهده قالیشویی‌ها</a><a href="#guide">راهنمای انتخاب</a></div>
        </div>
      </section>
      <section id="cleaners" className="preview-section"><div className="preview-card" /><div className="preview-card" /><div className="preview-card" /></section>
      <section id="prices" className="preview-section preview-section-tall"><div className="preview-placeholder"><span>بخش قیمت‌ها</span></div></section>
      <section id="guide" className="preview-section preview-section-tall"><div className="preview-placeholder"><span>بخش راهنما</span></div></section>
    </main>
  );
}
