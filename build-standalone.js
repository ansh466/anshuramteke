/**
 * Builds nexora-applab.html — professional theme, icons only (no feature graphics).
 */
const fs = require("fs");

const EMAIL = "aramteke19@gmail.com";
const ARROW_PLAY =
  "https://play.google.com/store/apps/details?id=com.arrowgo.puzzlegame&hl=en_IN";
const HD_PLAY =
  "https://play.google.com/store/apps/details?id=com.mobile4k.hdwallpaper&hl=en_IN";

const PATHS = {
  nexoraLogo: "assets/nexora-logo.png",
  nexoraIcon: "assets/nexora-icon.png",
  hdIcon: "assets/hd-wallpaper-icon.png",
  arrowIcon: "assets/arrow-go-icon.png",
};

const FALLBACKS = {
  [PATHS.nexoraLogo]:
    "C:/Users/ANSHU/.cursor/projects/c-Users-ANSHU-hd-wallpaper/assets/c__Users_ANSHU_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_nexora_applabs_logo_4096x2304-92c03647-ea1e-42a2-8484-c20cf6a2be65.png",
  [PATHS.nexoraIcon]:
    "C:/Users/ANSHU/.cursor/projects/c-Users-ANSHU-hd-wallpaper/assets/c__Users_ANSHU_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_512-f58db368-aec0-4f00-adf0-be81bbb2d467.png",
  [PATHS.hdIcon]:
    "C:/Users/ANSHU/.cursor/projects/c-Users-ANSHU-hd-wallpaper/assets/c__Users_ANSHU_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_hdwallpaper_appIcon-24feec15-d0cf-4e58-9dfa-8f525659e055.png",
  [PATHS.arrowIcon]:
    "C:/Users/ANSHU/.cursor/projects/c-Users-ANSHU-hd-wallpaper/assets/c__Users_ANSHU_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_arrow_go_icon-49fe88f9-a9a1-4b8b-9d23-471309fd7ad0.png",
};

function ensure() {
  fs.mkdirSync("assets", { recursive: true });
  for (const [dest, src] of Object.entries(FALLBACKS)) {
    if (!fs.existsSync(dest) && fs.existsSync(src)) fs.copyFileSync(src, dest);
  }
}

function uri(p) {
  const file = fs.existsSync(p) ? p : FALLBACKS[p];
  if (!file || !fs.existsSync(file)) {
    console.warn("Missing", p);
    return p;
  }
  return `data:image/png;base64,${fs.readFileSync(file).toString("base64")}`;
}

ensure();
const U = {
  logo: uri(PATHS.nexoraLogo),
  mark: uri(PATHS.nexoraIcon),
  hd: uri(PATHS.hdIcon),
  arrow: uri(PATHS.arrowIcon),
};

const css = fs.readFileSync("css/style.css", "utf8");

const cats = [
  "Animals", "Babies & Kids", "Birds", "Cars", "Flowers", "God", "Love",
  "Music", "Nature", "Night", "Rain", "Random", "Sunshine", "Texture",
]
  .map((n) => `<span>${n}</span>`)
  .join("");

const arrowFeatures = [
  ["Tap to Clear", "Tap arrow tiles in the right order to clear the grid and complete each level."],
  ["500 Puzzle Levels", "Hundreds of challenges that get tougher as you progress."],
  ["Endless Mode", "Keep playing without limits and push your streak further."],
  ["Colorful Grids", "Bright arrow tiles and polished visuals that make every puzzle pop."],
  ["Quick Sessions", "Perfect for short play sessions — jump in, clear, and win."],
  ["Think Fast", "Plan carefully — one wrong tap can change everything."],
]
  .map(([t, d]) => `<div class="feature"><strong>${t}</strong><p>${d}</p></div>`)
  .join("");

const hdFeatures = [
  ["Category Grid", "Browse 14 categories with live preview thumbnails in a clear two-column layout."],
  ["Full-Screen Preview", "Tap any wallpaper to view it immersive before you apply it."],
  ["Set Wallpaper", "Apply to Home Screen, Lock Screen, or Both in one step."],
  ["Share Wallpapers", "Share favorites through the Android share sheet."],
  ["100% Offline", "All images are bundled locally. No connection needed."],
  ["Fast & Light", "Built with Flutter for smooth scrolling and low overhead."],
]
  .map(([t, d]) => `<div class="feature"><strong>${t}</strong><p>${d}</p></div>`)
  .join("");

function appCard({ id, name, tagline, icon, play, meta, desc, highlights, features, catsHtml }) {
  return `
<article class="app-card" id="${id}">
  <div class="app-card__icon"><img src="${icon}" alt="${name} icon" width="96" height="96"/></div>
  <div class="app-card__body">
    <div class="app-card__head">
      <div>
        <h3 class="app-card__title">${name}</h3>
        <p class="app-card__tagline">${tagline}</p>
        <div class="app-card__meta">
          <span class="tag tag--live">Live</span>
          ${meta.map((m) => `<span class="tag">${m}</span>`).join("")}
        </div>
      </div>
      <a href="${play}" class="btn btn--dark" target="_blank" rel="noopener">Get on Play Store</a>
    </div>
    <p class="app-card__desc">${desc}</p>
    <div class="app-card__highlights">${highlights.map((h) => `<span>${h}</span>`).join("")}</div>
    <div class="app-card__features">
      <h4>Features</h4>
      <div class="features">${features}</div>
    </div>
    ${catsHtml || ""}
    <div class="app-card__specs">
      <h4>Details</h4>
      <div class="specs">
        <div class="spec"><div class="spec__label">Platform</div><div class="spec__value">Android</div></div>
        <div class="spec"><div class="spec__label">Framework</div><div class="spec__value">Flutter</div></div>
        <div class="spec"><div class="spec__label">Min SDK</div><div class="spec__value">Android 5.0+</div></div>
        <div class="spec"><div class="spec__label">Language</div><div class="spec__value">English</div></div>
      </div>
    </div>
  </div>
</article>`;
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="description" content="Nexora AppLabs — Independent Android studio. Arrow Go! and HD Wallpaper."/>
<meta name="theme-color" content="#0B1428"/>
<title>Nexora AppLabs</title>
<link rel="icon" href="${U.mark}" type="image/png"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap" rel="stylesheet"/>
<style>${css}</style>
</head>
<body>
<header class="nav" id="nav">
  <div class="container nav__inner">
    <a href="#" class="nav__logo"><img src="${U.logo}" alt="Nexora AppLabs" class="nav__logo-img"/></a>
    <nav class="nav__links" aria-label="Main">
      <a href="#apps">Apps</a>
      <a href="#about">Studio</a>
      <a href="#contact">Contact</a>
    </nav>
    <a href="#apps" class="btn btn--ghost nav__cta">View Apps</a>
    <button class="nav__toggle" id="navToggle" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>
  </div>
  <div class="nav__mobile" id="navMobile" hidden>
    <a href="#apps">Apps</a>
    <a href="#about">Studio</a>
    <a href="#contact">Contact</a>
  </div>
</header>

<main>
<section class="hero">
  <div class="hero__bg" aria-hidden="true"></div>
  <div class="container hero__grid">
    <div class="hero__copy">
      <img src="${U.logo}" alt="Nexora AppLabs" class="hero__brand"/>
      <h1 class="hero__title">Independent Android studio</h1>
      <p class="hero__lead">Focused apps. Clear design. Built for everyday use.</p>
      <div class="hero__actions">
        <a href="#apps" class="btn btn--primary">Explore Apps</a>
        <a href="#contact" class="btn btn--ghost">Contact Us</a>
      </div>
    </div>
    <div class="hero__apps" aria-label="Featured apps">
      <a href="#arrow-go" class="hero-app">
        <img src="${U.arrow}" alt="Arrow Go!" width="88" height="88"/>
        <span>Arrow Go!</span>
      </a>
      <a href="#hd-wallpaper" class="hero-app">
        <img src="${U.hd}" alt="HD Wallpaper" width="88" height="88"/>
        <span>HD Wallpaper</span>
      </a>
    </div>
  </div>
</section>

<section class="section" id="apps">
  <div class="container">
    <header class="section-head">
      <p class="section-head__label">Products</p>
      <h2 class="section-head__title">Our Apps</h2>
      <p class="section-head__text">Available on Google Play.</p>
    </header>
    ${appCard({
      id: "arrow-go",
      name: "Arrow Go!",
      tagline: "Tap · Clear · Win — a colorful arrow puzzle game",
      icon: U.arrow,
      play: ARROW_PLAY,
      meta: ["Android", "Flutter", "Puzzle", "500 Levels"],
      desc: "Arrow Go! is a fast-paced puzzle game where you tap colorful arrow tiles to clear the board. With 500 puzzle levels and Endless Mode, every move keeps you thinking, reacting, and chasing the next win.",
      highlights: ["500 puzzle levels", "Endless Mode", "Tap · Clear · Win gameplay", "Colorful arrow grids", "Fast sessions", "Free on Google Play"],
      features: arrowFeatures,
    })}
    ${appCard({
      id: "hd-wallpaper",
      name: "HD Wallpaper",
      tagline: "700+ premium local wallpapers — offline and ready",
      icon: U.hd,
      play: HD_PLAY,
      meta: ["Android", "Flutter", "14 Categories", "700+ Wallpapers"],
      desc: "HD Wallpaper brings 700+ high-quality wallpapers to your device — fully offline, no internet required. Browse 14 curated categories, preview full screen, set Home / Lock / Both, or share with friends.",
      highlights: ["700+ HD wallpapers — offline", "14 curated categories", "Set Home, Lock, or Both", "One-tap share", "Clean modern UI"],
      features: hdFeatures,
      catsHtml: `<div class="app-card__cats"><h4>Categories</h4><div class="cats">${cats}</div></div>`,
    })}
  </div>
</section>

<section class="section section--studio" id="about">
  <div class="container studio">
    <div class="studio__copy">
      <p class="section-head__label">Studio</p>
      <h2 class="section-head__title">About Nexora AppLabs</h2>
      <p class="studio__lead">We are an independent Android studio. Every release is built with clear purpose, smooth performance, and respectful design.</p>
      <ul class="studio__list">
        <li><strong>Performance</strong> Lightweight builds for real devices</li>
        <li><strong>Design</strong> Interfaces that stay out of the way</li>
        <li><strong>Privacy</strong> Local-first where it matters</li>
      </ul>
    </div>
    <div class="studio__mark">
      <img src="${U.mark}" alt="Nexora AppLabs" width="112" height="112"/>
    </div>
  </div>
</section>

<section class="section section--contact" id="contact">
  <div class="container contact">
    <div>
      <p class="section-head__label">Contact</p>
      <h2 class="section-head__title">Contact Us</h2>
      <p class="section-head__text">Feedback, ideas, or collaboration — we’d love to hear from you.</p>
    </div>
    <a href="mailto:${EMAIL}" class="btn btn--primary">Contact Us</a>
  </div>
</section>
</main>

<footer class="footer">
  <div class="container footer__inner">
    <div class="footer__brand">
      <img src="${U.mark}" alt="" width="24" height="24"/>
      <span>Nexora AppLabs</span>
    </div>
    <p>&copy; 2026 Nexora AppLabs</p>
    <nav class="footer__links">
      <a href="#apps">Apps</a>
      <a href="#about">Studio</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</footer>

<script>
document.getElementById("nav").classList.toggle("nav--scrolled", window.scrollY > 12);
window.addEventListener("scroll", function () {
  document.getElementById("nav").classList.toggle("nav--scrolled", window.scrollY > 12);
});
var t = document.getElementById("navToggle"), m = document.getElementById("navMobile");
if (t && m) {
  t.onclick = function () {
    var open = m.hidden;
    m.hidden = !open;
    t.setAttribute("aria-expanded", String(open));
  };
  m.querySelectorAll("a").forEach(function (a) {
    a.onclick = function () { m.hidden = true; t.setAttribute("aria-expanded", "false"); };
  });
}
</script>
</body>
</html>`;

fs.writeFileSync("nexora-applab.html", html);
console.log(
  "Created nexora-applab.html (" +
    (fs.statSync("nexora-applab.html").size / (1024 * 1024)).toFixed(2) +
    " MB)"
);
