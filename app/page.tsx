import SiteHeader from "./components/site-header";

export default function Home() {
  return (
    <main className="site-preview">
      <SiteHeader />

      <section className="preview-hero">
        <div className="preview-hero-content">
          <span className="preview-eyebrow">قالی مپ</span>
          <h1>قالیشویی مناسب شهرت را راحت‌تر پیدا کن</h1>
          <p>
            شهر یا منطقه خود را جستجو کنید و قالیشویی‌های همان محدوده،
            خدمات و قیمت‌ها را بررسی کنید.
          </p>

          <form className="preview-hero-search" role="search" action="/search">
            <label htmlFor="hero-search">جستجوی شهر یا منطقه</label>
            <div>
              <input
                id="hero-search"
                name="q"
                type="search"
                placeholder="مثلاً تهران یا سعادت‌آباد"
              />
              <button type="submit">جستجو</button>
            </div>
          </form>
        </div>
      </section>

      <section id="cities" className="preview-section preview-section-tall">
        <div className="preview-placeholder"><span>شهرها و مناطق</span></div>
      </section>

      <section id="cleaners" className="preview-section">
        <div className="preview-card" />
        <div className="preview-card" />
        <div className="preview-card" />
      </section>

      <section id="prices" className="preview-section preview-section-tall">
        <div className="preview-placeholder"><span>قیمت خدمات</span></div>
      </section>

      <section id="guide" className="preview-section preview-section-tall">
        <div className="preview-placeholder"><span>راهنمای انتخاب</span></div>
      </section>
    </main>
  );
}
