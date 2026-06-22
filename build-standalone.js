const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.mobile4k.hdwallpaper&hl=en_IN";
const CONTACT_EMAIL = "aramteke19@gmail.com";

const playStoreBtn = `<a href="${PLAY_STORE_URL}" class="btn btn--primary" target="_blank" rel="noopener">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/></svg>
  Get on Play Store
</a>`;

const APP_ICON = "assets/hd-wallpaper-icon.png";
const NEXORA_LOGO = "assets/nexora-logo.png";
const NEXORA_ICON = "assets/nexora-icon.png";
const appIconImg = (sizeClass = "") =>
  `<div class="app-icon app-icon--image${sizeClass ? ` ${sizeClass}` : ""}"><img src="${APP_ICON}" alt="HD Wallpaper app icon" width="80" height="80" /></div>`;

const fs = require("fs");
const css = fs.readFileSync("css/style.css", "utf8");

const categories = [
  ["Animals", "🐾", "#1B4332", "#40916C"],
  ["Babies & Kids", "👶", "#5C4D7D", "#E07A5F"],
  ["Birds", "🕊️", "#0077B6", "#90E0EF"],
  ["Cars", "🚗", "#2B2D42", "#EF233C"],
  ["Flowers", "🌸", "#9D4EDD", "#FFAFCC"],
  ["God", "🙏", "#7F5539", "#F4A261"],
  ["Love", "❤️", "#9B2226", "#FF758F"],
  ["Music", "🎵", "#3A0CA3", "#4CC9F0"],
  ["Nature", "🌿", "#386641", "#A7C957"],
  ["Night", "🌙", "#03045E", "#7209B7"],
  ["Rain", "🌧️", "#023E8A", "#48CAE4"],
  ["Random", "✨", "#6A0572", "#AB83F6"],
  ["Sunshine", "☀️", "#E85D04", "#FFD60A"],
  ["Texture", "🎨", "#495057", "#ADB5BD"],
];

const mockGrid = categories
  .slice(0, 6)
  .map(
    (c) =>
      `<div class="mock-cat" style="background:linear-gradient(135deg,${c[2]},${c[3]})"><span class="mock-cat__label">${c[1]} ${c[0].split(" ")[0]}</span></div>`
  )
  .join("");

const catGrid = categories
  .map(
    (c) =>
      `<div class="category-chip glass-card" style="background:linear-gradient(135deg,${c[2]}33,${c[3]}22)"><span class="category-chip__emoji">${c[1]}</span><span class="category-chip__name">${c[0]}</span><span class="category-chip__count">50 wallpapers</span></div>`
  )
  .join("");

const features = [
  ["📂", "Category Grid", "Browse 14 categories with live preview thumbnails in a beautiful 2-column grid layout."],
  ["🔍", "Full-Screen Preview", "Tap any wallpaper to view it in immersive full-screen mode before applying."],
  ["🏠", "Set Wallpaper", "Apply wallpapers to Home Screen, Lock Screen, or Both — your choice, one tap."],
  ["📤", "Share Wallpapers", "Share your favorite wallpapers with friends via the Android share sheet."],
  ["✨", "Glassmorphism UI", "Frosted glass cards with BackdropFilter blur effects for a premium modern look."],
  ["📴", "100% Offline", "All 700+ images are bundled locally. No internet connection needed ever."],
  ["🎨", "Gradient Themes", "Each category has its own unique gradient color scheme and emoji icon."],
  ["⚡", "Fast & Lightweight", "Built with Flutter for smooth 60fps scrolling and minimal battery usage."],
]
  .map(
    (f) =>
      `<div class="feature-card glass-card"><div class="feature-card__icon">${f[0]}</div><h4>${f[1]}</h4><p>${f[2]}</p></div>`
  )
  .join("");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="description" content="Nexora AppLabs — Premium Android apps. HD Wallpaper app showcase."/>
<meta name="theme-color" content="#0A0E1A"/>
<title>Nexora AppLabs — HD Wallpaper & More</title>
<link rel="icon" href="${NEXORA_ICON}" type="image/png"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<style>${css}</style>
</head>
<body>
<div class="bg-glow bg-glow--cyan" aria-hidden="true"></div>
<div class="bg-glow bg-glow--purple" aria-hidden="true"></div>

<header class="nav" id="nav">
  <div class="container nav__inner">
    <a href="#" class="nav__logo"><img src="${NEXORA_LOGO}" alt="Nexora AppLabs" class="nav__logo-img" height="42" /></a>
    <nav class="nav__links"><a href="#apps">Apps</a><a href="#hd-wallpaper">HD Wallpaper</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
    <a href="#apps" class="btn btn--primary btn--sm nav__cta">Explore Apps</a>
    <button class="nav__toggle" id="navToggle" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
  <div class="nav__mobile" id="navMobile" hidden><a href="#apps">Apps</a><a href="#hd-wallpaper">HD Wallpaper</a><a href="#about">About</a><a href="#contact">Contact</a></div>
</header>

<main>
<section class="hero">
  <div class="container hero__grid">
    <div class="hero__content">
      <div class="badge">Android App Studio</div>
      <h1 class="hero__title">Crafting <span class="gradient-text">Premium</span><br/>Android Experiences</h1>
      <p class="hero__desc">Nexora AppLabs builds beautiful Android apps — designed for real users, built to last.</p>
          <div class="hero__actions">
            <a href="#apps" class="btn btn--primary">View Our Apps</a>
            <a href="${PLAY_STORE_URL}" class="btn btn--ghost" target="_blank" rel="noopener">HD Wallpaper on Play Store</a>
          </div>
      <div class="hero__stats">
        <div class="stat"><span class="stat__value">1+</span><span class="stat__label">Live Apps</span></div>
        <div class="stat"><span class="stat__value">700+</span><span class="stat__label">Wallpapers</span></div>
        <div class="stat"><span class="stat__value">14</span><span class="stat__label">Categories</span></div>
      </div>
    </div>
    <div class="hero__visual">
      <div class="phone-mockup">
        <div class="phone-mockup__frame">
          <div class="phone-mockup__notch"></div>
          <div class="phone-mockup__screen">
            <div class="mock-app">
              <div class="mock-app__header">
                <img class="mock-app__icon" src="${APP_ICON}" alt="HD Wallpaper" width="28" height="28" />
                <div>
                  <span class="mock-app__title">HD Wallpaper</span>
                  <span class="mock-app__sub">Premium local wallpapers</span>
                </div>
              </div>
              <div class="mock-app__grid">${mockGrid}</div>
            </div>
          </div>
        </div>
        <div class="phone-mockup__glow"></div>
      </div>
    </div>
  </div>
</section>

<section class="section" id="apps">
  <div class="container">
    <div class="section__header">
      <span class="badge badge--purple">Our Apps</span>
      <h2 class="section__title">App List</h2>
      <p class="section__desc">Explore our published apps. More releases are on the way.</p>
    </div>
    <div class="coming-grid" style="margin-bottom:48px">
      <a href="#hd-wallpaper" class="glass-card app-list-card">
        <div class="app-list-card__inner">
          ${appIconImg("app-list-card__icon app-icon--sm")}
          <div>
            <span class="badge badge--live">Live</span>
            <h3 class="app-list-card__title">HD Wallpaper</h3>
            <p class="app-list-card__meta">Premium local wallpapers • Android • Flutter</p>
          </div>
        </div>
      </a>
      <div class="coming-card glass-card"><span class="badge badge--soon">Coming Soon</span><div class="coming-card__emoji">🚀</div><h4>New App</h4><p>Something exciting is in development. Stay tuned!</p></div>
      <div class="coming-card glass-card"><span class="badge badge--soon">Coming Soon</span><div class="coming-card__emoji">💡</div><h4>New App</h4><p>Another innovative app coming soon from Nexora AppLabs.</p></div>
    </div>
  </div>
</section>

<section class="section section--alt" id="hd-wallpaper">
  <div class="container">
    <article class="app-showcase">
      <div class="app-hero-card glass-card">
        ${appIconImg("app-icon--hd")}
        <div class="app-hero-info">
          <h3>HD Wallpaper</h3>
          <p>Premium local wallpapers with glassmorphism UI</p>
          <div class="app-meta">
            <span class="badge badge--live">Live</span>
            <span class="app-meta__tag">Android</span>
            <span class="app-meta__tag">Flutter</span>
            <span class="app-meta__tag">14 Categories</span>
            <span class="app-meta__tag">700+ Wallpapers</span>
          </div>
        </div>
        <div class="app-hero-actions">${playStoreBtn}</div>
      </div>
      <div class="app-description">
        <p>HD Wallpaper is a beautifully crafted Android app with 700+ high-quality wallpapers — fully offline, no internet required. Browse 14 categories, preview in full screen, set as Home / Lock / Both wallpapers, or share with friends.</p>
        <div class="app-highlights">
          <span>700+ HD wallpapers — fully offline</span>
          <span>14 curated categories</span>
          <span>Set Home, Lock, or Both</span>
          <span>One-tap share</span>
          <span>Glassmorphism UI</span>
          <span>Plus Jakarta Sans font</span>
        </div>
      </div>
      <h4 class="subsection-title">Features</h4>
      <div class="features-grid">${features}</div>
      <div class="categories-section">
        <h4>All 14 Categories</h4>
        <div class="categories-grid">${catGrid}</div>
      </div>
      <h4 class="subsection-title">App Specifications</h4>
      <div class="specs-grid">
        <div class="spec-item"><div class="spec-item__label">Platform</div><div class="spec-item__value">Android</div></div>
        <div class="spec-item"><div class="spec-item__label">Framework</div><div class="spec-item__value">Flutter</div></div>
        <div class="spec-item"><div class="spec-item__label">Min SDK</div><div class="spec-item__value">Android 5.0+</div></div>
        <div class="spec-item"><div class="spec-item__label">Language</div><div class="spec-item__value">English</div></div>
      </div>
    </article>
  </div>
</section>

<section class="section" id="about">
  <div class="container">
    <div class="about-grid">
      <div class="about-content">
        <span class="badge">About Us</span>
        <h2 class="section__title">Nexora AppLabs</h2>
        <p class="about-text">We are an independent Android app studio focused on creating polished, user-friendly applications.</p>
        <ul class="about-list">
          <li><span class="about-list__icon">⚡</span><div><strong>Performance First</strong><p>Fast, lightweight, and optimized for all Android devices.</p></div></li>
          <li><span class="about-list__icon">🎨</span><div><strong>Beautiful Design</strong><p>Glassmorphism, gradients, and clean typography.</p></div></li>
          <li><span class="about-list__icon">📱</span><div><strong>User Focused</strong><p>Features built around what users actually need.</p></div></li>
          <li><span class="about-list__icon">🔒</span><div><strong>Privacy Friendly</strong><p>Local data, no tracking, no ads.</p></div></li>
        </ul>
      </div>
      <div class="about-visual">
        <div class="glass-card about-card">
          <img src="${NEXORA_ICON}" alt="Nexora AppLabs" class="about-card__logo" width="80" height="80" />
          <h3>Nexora AppLabs</h3>
          <p>Building premium Android apps, one release at a time.</p>
          <div class="tech-stack"><span class="tech-pill">Flutter</span><span class="tech-pill">Dart</span><span class="tech-pill">Material 3</span><span class="tech-pill">Android</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt" id="contact">
  <div class="container">
    <div class="contact-card glass-card">
      <div class="contact-card__content">
        <span class="badge">Get in Touch</span>
        <h2 class="section__title">Contact Nexora AppLabs</h2>
        <p class="section__desc">Have feedback, feature requests, or partnership ideas? We'd love to hear from you.</p>
      </div>
      <div class="contact-card__actions">
        <a href="mailto:${CONTACT_EMAIL}" class="btn btn--primary">Email Us</a>
        <a href="#apps" class="btn btn--ghost">Browse Apps</a>
      </div>
    </div>
  </div>
</section>
</main>

<footer class="footer">
  <div class="container footer__inner">
    <div class="footer__brand"><img src="${NEXORA_ICON}" alt="" class="footer__logo-icon" width="32" height="32" /><span>Nexora AppLabs</span></div>
    <p class="footer__copy">&copy; 2026 Nexora AppLabs. All rights reserved.</p>
    <div class="footer__links"><a href="#apps">Apps</a><a href="#hd-wallpaper">HD Wallpaper</a><a href="#about">About</a><a href="#contact">Contact</a></div>
  </div>
</footer>

<script>
document.getElementById("nav").classList.toggle("nav--scrolled", window.scrollY > 20);
window.addEventListener("scroll", function () {
  document.getElementById("nav").classList.toggle("nav--scrolled", window.scrollY > 20);
});
var t = document.getElementById("navToggle");
var m = document.getElementById("navMobile");
if (t && m) {
  t.onclick = function () {
    var open = m.hidden;
    m.hidden = !open;
    t.setAttribute("aria-expanded", String(open));
  };
  m.querySelectorAll("a").forEach(function (a) {
    a.onclick = function () {
      m.hidden = true;
      t.setAttribute("aria-expanded", "false");
    };
  });
}
</script>
</body>
</html>`;

const extraCss = `
.app-list-card { display: block; padding: 28px; text-decoration: none; transition: transform 0.3s, border-color 0.3s; }
.app-list-card:hover { transform: translateY(-4px); border-color: rgba(110,231,255,0.3); }
.app-list-card__inner { display: flex; align-items: center; gap: 16px; }
.app-list-card__icon { background: transparent; padding: 0; }
.app-list-card__title { font-size: 1.3rem; font-weight: 800; margin: 8px 0 4px; }
.app-list-card__meta { color: var(--text-muted); font-size: 0.9rem; }
.app-icon--hd { background: transparent; padding: 0; }
.subsection-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 20px; }
`;

const finalHtml = html.replace("</style>", extraCss + "</style>");
fs.writeFileSync("nexora-applab.html", finalHtml);
console.log("Created nexora-applab.html (" + fs.statSync("nexora-applab.html").size + " bytes)");
