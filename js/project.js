/* 프로젝트 상세 페이지 — project.html?id=프로젝트id */
(function () {
  const { D, esc, fmt, linkOrNull, setTitle } = window.PF;
  const P = D.profile || {};
  const $ = id => document.getElementById(id);

  setTitle();
  const toggle = $("theme-toggle");
  function applyTheme(t) {
    if (t === "night") document.documentElement.setAttribute("data-theme", "night"); else document.documentElement.removeAttribute("data-theme");
    toggle.textContent = t === "night" ? "NIGHT" : "DAY";
  }
  applyTheme(document.documentElement.getAttribute("data-theme") === "night" ? "night" : "day");
  toggle.addEventListener("click", () => { const n = document.documentElement.getAttribute("data-theme") === "night" ? "day" : "night"; applyTheme(n); try { localStorage.setItem("theme", n); } catch (e) {} });

  $("brand").textContent = P.name + "  ·  " + P.nameEn;
  $("footer-name").textContent = "© " + new Date().getFullYear() + " " + P.name;
  $("footer-note").textContent = (D.settings && D.settings.footerNote) || "";

  const projects = D.projects || [];
  const id = new URLSearchParams(location.search).get("id");
  const idx = projects.findIndex(p => p.id === id);
  const root = $("project");

  if (idx < 0) {
    root.innerHTML = '<p class="empty">프로젝트를 찾을 수 없습니다. 아래 목록에서 선택하세요.</p><div class="works">' +
      projects.map(p => '<a class="work" href="project.html?id=' + encodeURIComponent(p.id) + '"><div><h3>' + esc(p.title) + '</h3><p class="sub">' + esc(p.subtitle) + "</p></div></a>").join("") + "</div>";
    return;
  }

  const p = projects[idx], d = p.detail || {};
  const comp = (D.competencies || []).find(c => c.id === p.competency);
  document.title = p.title + " — " + P.name;
  const section = (title, bodyHtml) => bodyHtml ? '<section class="p-section"><h2>' + esc(title) + '</h2><div class="body">' + bodyHtml + "</div></section>" : "";
  const paras = s => s ? String(s).split(/\n{2,}/).map(x => "<p>" + fmt(x) + "</p>").join("") : "";
  const olist = a => (a || []).length ? "<ol>" + a.map(x => "<li>" + fmt(x) + "</li>").join("") + "</ol>" : "";
  const ulist = a => (a || []).length ? "<ul>" + a.map(x => "<li>" + fmt(x) + "</li>").join("") + "</ul>" : "";
  const block = v => Array.isArray(v) ? ulist(v) : paras(v);
  const prev = projects[(idx - 1 + projects.length) % projects.length], next = projects[(idx + 1) % projects.length];

  root.innerHTML =
    '<div class="p-hero"><div class="when">' + esc(p.title) + (comp ? ' · <b>공고 항목 · ' + esc(comp.jd) + "</b>" : "") + "</div>" +
    "<h1>" + esc(p.headline || p.title) + "</h1>" + '<p class="sub">' + esc(p.subtitle) + "</p>" +
    '<dl class="p-meta">' + [["기간", p.period], ["소속 · 고객", p.org], ["역할 · 기여", p.role], ["기술", (p.tags || []).join(" · ")]]
      .filter(([, v]) => v).map(([k, v]) => "<div><dt>" + esc(k) + "</dt><dd>" + esc(v) + "</dd></div>").join("") + "</dl>" +
    (p.thumbnail ? '<div class="p-cover"><div class="shot' + (p.thumbnailFit === "contain" ? " contain" : "") + '" data-lb="cover"><img src="' + esc(p.thumbnail) + '" alt=""></div></div>' : "") +
    ((p.metrics || []).length ? '<div class="metrics">' + p.metrics.map(m => '<div><div class="label">' + esc(m.label) + '</div><div class="value">' + esc(m.value) + "</div></div>").join("") + "</div>" : "") +
    "" +
    "</div>" +
    section("개요", block(d.background)) +
    section("담당 업무", block(d.myRole)) +
    section("주요 작업", block(d.approach)) +
    section("문제 해결", block(d.problem)) +
    section("성과", block(d.result)) +
    ((d.images || []).filter(im => im.src !== p.thumbnail).length ? '<div class="gallery">' + d.images.filter(im => im.src !== p.thumbnail).map((im, gi) => '<figure' + (im.wide ? ' class="wide"' : "") + '><div class="shot' + (im.tall ? " tall" : "") + (im.fit === "contain" ? " fit-contain" : "") + '" data-lb="' + gi + '"><img src="' + esc(im.src) + '" alt="' + esc(im.caption || "") + '" loading="lazy"></div>' + (im.caption ? "<figcaption>" + esc(im.caption) + "</figcaption>" : "") + "</figure>").join("") + "</div>" : "") +
    ((d.links || []).length ? '<div class="p-links">' + d.links.map(l => linkOrNull(l.label, l.url)).filter(Boolean).join("") + "</div>" : "") +
    (projects.length > 1 ? '<nav class="p-nav"><a href="project.html?id=' + encodeURIComponent(prev.id) + '"><div class="k">← 이전 · ' + esc(prev.title.split(" — ")[0]) + '</div><div class="t">' + esc(prev.headline || prev.title) + "</div></a>" +
      '<a class="next" href="project.html?id=' + encodeURIComponent(next.id) + '"><div class="k">다음 → · ' + esc(next.title.split(" — ")[0]) + '</div><div class="t">' + esc(next.headline || next.title) + "</div></a></nav>" : "");

  /* 라이트박스: 대표 이미지 + 갤러리 */
  const lbItems = [];
  if (p.thumbnail) { const c = (d.images || []).find(im => im.src === p.thumbnail); lbItems.push({ src: p.thumbnail, caption: c ? c.caption : p.title }); }
  (d.images || []).filter(im => im.src !== p.thumbnail).forEach(im => lbItems.push({ src: im.src, caption: im.caption }));
  root.addEventListener("click", e => {
    const el = e.target.closest("[data-lb]"); if (!el || !window.PF.lightbox) return;
    const k = el.getAttribute("data-lb");
    window.PF.lightbox(lbItems, k === "cover" ? 0 : Number(k) + (p.thumbnail ? 1 : 0));
  });
})();
