async function loadSection(containerId, sectionPath, cssPath, jsPath) {
  // Завантажуємо HTML
  const res = await fetch(sectionPath);
  const html = await res.text();
  const container = document.getElementById(containerId);
  container.innerHTML = html;

  // Підключаємо CSS секції
  if (cssPath) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssPath;
    document.head.appendChild(link);
  }

  // Підключаємо JS секції
  if (jsPath) {
    const script = document.createElement("script");
    script.src = jsPath;
    document.body.appendChild(script);
  }
}

loadSection(
  "header",
  "./sections/header/header.html",
  "./sections/header/header.css",
  "./sections/header/header.js"
);
loadSection(
  "hero",
  "./sections/hero/hero.html",
  "./sections/hero/hero.css",
  "./sections/hero/hero.js"
);
loadSection(
  "about",
  "./sections/about/about.html",
  "./sections/about/about.css",
  "./sections/about/about.js"
);
loadSection(
  "gallery",
  "./sections/gallery/gallery.html",
  "./sections/gallery/gallery.css",
  "./sections/gallery/gallery.js"
);
