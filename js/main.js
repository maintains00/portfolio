/* 메인 페이지 렌더링 + 테마 전환 + 실시간 NMEA 문장 스트림 */
(function () {
  const { D, esc, fmt, isTodo, linkOrNull, setTitle } = window.PF;
  const P = D.profile || {};
  const $ = id => document.getElementById(id);
  const byId = {};
  (D.projects || []).forEach(p => { byId[p.id] = p; });

  setTitle();

  /* ---------- 테마 (ECDIS DAY / NIGHT) ---------- */
  const toggle = $("theme-toggle");
  function applyTheme(t) {
    if (t === "night") document.documentElement.setAttribute("data-theme", "night");
    else document.documentElement.removeAttribute("data-theme");
    toggle.textContent = t === "night" ? "NIGHT" : "DAY";
  }
  applyTheme(document.documentElement.getAttribute("data-theme") === "night" ? "night" : "day");
  toggle.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "night" ? "day" : "night";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- 헤더 / 푸터 ---------- */
  $("brand").textContent = P.name + "  ·  " + P.nameEn;
  $("footer-name").textContent = "© " + new Date().getFullYear() + " " + P.name;
  $("footer-note").textContent = (D.settings && D.settings.footerNote) || "";

  /* ---------- 히어로 ---------- */
  $("hero-tagline").innerHTML = P.taglineEm ? esc(P.tagline).replace(esc(P.taglineEm), "<em>" + esc(P.taglineEm) + "</em>") : esc(P.tagline);
  $("hero-lead").textContent = P.lead;
  $("hero-who").innerHTML = [
    "<span><strong>" + esc(P.name) + "</strong> " + esc(P.title) + "</span>",
    "<span>" + esc(P.focus) + "</span>",
    "<span>" + esc(P.careerLabel || ("경력 " + P.years)) + " · " + esc(P.careerSince || "") + " · " + esc(P.location) + "</span>"
  ].join("");

  /* ---------- NMEA 스트림: 실제 체크섬을 계산한 문장을 생성 ---------- */
  function checksum(body) {
    let c = 0;
    for (let i = 0; i < body.length; i++) c ^= body.charCodeAt(i);
    return c.toString(16).toUpperCase().padStart(2, "0");
  }
  const pad = (n, w, d) => (d == null ? String(n) : n.toFixed(d)).padStart(w, "0");
  function nmea(body) { return "$" + body + "*" + checksum(body); }
  function toDM(deg, posHemi, negHemi, w) {
    const h = deg >= 0 ? posHemi : negHemi; deg = Math.abs(deg);
    const d = Math.floor(deg), m = (deg - d) * 60;
    return pad(d, w) + pad(m, 7, 4) + "," + h;
  }
  function makeSentences() {
    const t = new Date();
    const utc = pad(t.getUTCHours(), 2) + pad(t.getUTCMinutes(), 2) + pad(t.getUTCSeconds(), 2) + "." + pad(Math.floor(t.getUTCMilliseconds() / 10), 2);
    const date = pad(t.getUTCDate(), 2) + pad(t.getUTCMonth() + 1, 2) + pad(t.getUTCFullYear() % 100, 2);
    const sec = t.getTime() / 1000;
    const lat = 35.0 + 0.02 * Math.sin(sec / 600), lon = 129.0 + 0.02 * Math.cos(sec / 600);
    const hdg = (90 + 20 * Math.sin(sec / 120) + 360) % 360, sog = 12.4 + 0.6 * Math.sin(sec / 90), rot = 2.5 * Math.cos(sec / 120);
    const out = [
      nmea("GPRMC," + utc + ",A," + toDM(lat, "N", "S", 2) + "," + toDM(lon, "E", "W", 3) + "," + sog.toFixed(1) + "," + hdg.toFixed(1) + "," + date + ",7.2,W,A"),
      nmea("HEHDT," + hdg.toFixed(1) + ",T"),
      nmea("GPGGA," + utc + "," + toDM(lat, "N", "S", 2) + "," + toDM(lon, "E", "W", 3) + ",1,09,0.9,12.3,M,23.1,M,,"),
      nmea("VDVHW," + hdg.toFixed(1) + ",T," + ((hdg + 7.2) % 360).toFixed(1) + ",M," + (sog - 0.3).toFixed(1) + ",N," + ((sog - 0.3) * 1.852).toFixed(1) + ",K"),
      nmea("TIROT," + rot.toFixed(1) + ",A"),
      nmea("SDDPT," + (42.0 + 3 * Math.sin(sec / 300)).toFixed(1) + ",0.5,"),
      nmea("WIMWV," + ((hdg + 35) % 360).toFixed(0) + ",R," + (8.2 + Math.sin(sec / 40)).toFixed(1) + ",M,A"),
      "\\s:CA0001,n:" + (Math.floor(sec) % 1000) + "*" + checksum("s:CA0001,n:" + (Math.floor(sec) % 1000)) + "\\" + nmea("CAHBT,30,A,1"),
      nmea("GPZDA," + utc + "," + pad(t.getUTCDate(), 2) + "," + pad(t.getUTCMonth() + 1, 2) + "," + t.getUTCFullYear() + ",00,00")
    ];
    return out;
  }
  const stream = $("stream");
  function renderStream() {
    const s = makeSentences();
    const html = s.map(x => "<span>" + esc(x).replace(/\*([0-9A-F]{2})(?=\\|$)/g, "*<b>$1</b>") + "</span>").join("");
    stream.innerHTML = '<div class="track">' + html + html + '</div><div class="cap">IEC 61162-1 · 체크섬은 지금 계산된 값</div>';
  }
  renderStream();
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) setInterval(renderStream, 45000);

  /* ---------- 역량 목차: 공고 문장 ↔ 한 일 ---------- */
  const comps = D.competencies || [];
  const compById = {};
  comps.forEach(c => { compById[c.id] = c; });
  const pill = id => byId[id] ? '<a href="project.html?id=' + encodeURIComponent(id) + '">' + esc(byId[id].title.split(" — ")[0]) + "</a>" : "";
  if ($("comp-list")) {
    $("comp-list").innerHTML = comps.map((c, i) =>
      '<li><div class="jd"><span>' + esc(c.jd) + "</span></div>" +
      "<h3>" + esc(c.title) + "</h3>" +
      '<p class="bridge">' + esc(c.bridge) + "</p>" +
      '<ul class="facts">' + (c.facts || []).map(f => "<li>" + esc(f) + "</li>").join("") + "</ul>" +
      '<div class="links">' + (c.projects || []).map(pill).join("") + "</div></li>").join("");
  }

  /* ---------- 프로젝트 ---------- */
  const featured = (D.projects || []).filter(p => p.featured !== false);
  $("works-list").innerHTML = featured.map((p, i) =>
    '<a class="card' + (i % 3 === 0 ? " wide" : "") + '" href="project.html?id=' + encodeURIComponent(p.id) + '">' +
    '<div class="media">' + (p.thumbnail ? '<img src="' + esc(p.thumbnail) + '" alt="" loading="lazy"' + (p.thumbnailFit === "contain" ? ' style="object-fit:contain;padding:6%;background:#fff"' : "") + ">" : "") +
    '<span class="badge">' + esc(p.period.split(" · ")[0]) + "</span>" +
    '<div class="figs">' + (p.metrics || []).slice(0, 3).map(m => "<span>" + esc(m.label) + "<b>" + esc(m.value) + "</b></span>").join("") + "</div></div>" +
    '<div class="body"><div class="kicker">' + esc(p.title) + (compById[p.competency] ? " · <b>" + esc(compById[p.competency].jd) + "</b>" : "") + "</div>" +
    "<h3>" + esc(p.headline || p.title) + "</h3>" +
    '<p class="sub">' + esc(p.subtitle) + "</p>" +
    '<div class="tags">' + (p.tags || []).map(t => "<span>" + esc(t) + "</span>").join("") + "</div>" +
    '<div class="more">' + esc(p.role) + " · 자세히 →</div></div>" +
    "</a>").join("");

  /* ---------- 입사 후 제안 (화면 가안 포함) ---------- */
  const MOCK = {
    sim: '<div class="mock"><div class="bar"><i></i><i></i><i></i><span>신호 시뮬레이터 · 제품 A (가안)</span></div><div class="body">' +
      '<div class="row"><span>Modbus RTU · 입구 온도 / 압력 / 유량</span><span class="chip ok">송신 1 s</span></div>' +
      '<div class="row"><span>접점 입력 8ch · 펌프 운전 / 밸브 개폐</span><span class="chip">ON 5 · OFF 3</span></div>' +
      '<div class="row"><span>4–20 mA · 농도 / 유속</span><span class="chip ok">송신 500 ms</span></div>' +
      '<div class="row"><span>시나리오 03 · 센서 고장 → 경보 → 복구</span><span class="chip acc">재생 00:42 / 02:10</span></div>' +
      '<div class="track" style="--p:34%"></div></div><div class="cap">화면 가안. 신호 종류와 주기는 제품 사양을 보고 정함.</div></div>',
    dump: '<div class="mock"><div class="bar"><i></i><i></i><i></i><span>데이터 덤프 · 재생 (가안)</span></div><div class="body">' +
      '<div class="row"><span>현장 덤프 · 14:02 ~ 15:40 · 장비 3대</span><span class="chip">1.2 GB</span></div>' +
      '<div class="row"><span>재생 1× · 원본 타임스탬프 기준</span><span class="chip acc">00:38:12</span></div>' +
      '<div class="row"><span>이벤트 · 14:40:07 단절 → 14:41:45 복구</span><span class="chip alt">자동 기록</span></div>' +
      '<div class="row"><span>수신 카운터 리셋 감지 · bps 보정</span><span class="chip ok">1건</span></div>' +
      '<div class="track" style="--p:58%"></div></div><div class="cap">화면 가안. 프로토콜과 저장 형식은 장치를 보고 정함.</div></div>',
    map: '<div class="mock"><div class="bar"><i></i><i></i><i></i><span>E27 요구 ↔ 제품 기능 판정표 (가안)</span></div><div class="body">' +
      '<div class="row three"><span>계정 · 역할 분리</span><span>운영 / 정비 / 관리자</span><span class="chip ok">충족</span></div>' +
      '<div class="row three"><span>로그인 실패 잠금</span><span>펌웨어 미지원 → 중앙 인증 위임</span><span class="chip alt">보완대책</span></div>' +
      '<div class="row three"><span>원격 접속 보호</span><span>위성 링크 · VPN 구간 확인</span><span class="chip">확인 필요</span></div>' +
      '<div class="row three"><span>감사 로그 보존</span><span>90일 · NTP 동기</span><span class="chip ok">충족</span></div>' +
      '</div><div class="cap">표 가안. 항목은 E27 Table 1과 IEC 62443-3-3 기준.</div></div>'
  };
  const PL = D.plan;
  if (PL && $("plan-list")) {
    $("plan-title").textContent = PL.title || "";
    $("plan-note").textContent = PL.note || "";
    $("plan-list").innerHTML = (PL.items || []).map((it, i) =>
      '<div class="plan-item"><div class="text">' +
      '<div class="jd"><span class="n">' + String(i + 1).padStart(2, "0") + "</span><span>" + esc(it.jd) + "</span></div>" +
      "<h3>" + esc(it.title) + "</h3>" +
      '<p class="what">' + esc(it.what) + "</p>" +
      '<p class="why"><b>근거</b>' + esc(it.why) + "</p>" +
      '<ul class="steps">' + (it.steps || []).map(s => "<li><b>" + esc(s.when) + "</b><span>" + esc(s.what) + "</span></li>").join("") + "</ul>" +
      ((it.basis || []).length ? '<div class="basis">' + it.basis.map(pill).join("") + "</div>" : "") +
      "</div>" + (MOCK[it.mock] || "") + "</div>").join("");
  }

  /* ---------- 정리 ---------- */
  const CL = D.closing;
  if (CL && $("closing-lines")) {
    $("closing-title").textContent = CL.title || "";
    $("closing-lines").innerHTML = (CL.lines || []).map(l => "<p>" + esc(l) + "</p>").join("");
  }

  /* ---------- 인증 ---------- */
  $("certs-list").innerHTML = (D.credentials || []).map(c =>
    '<figure><div class="shot"><img src="' + esc(c.image) + '" alt="' + esc(c.title) + '" loading="lazy"></div>' +
    "<figcaption><strong>" + esc(c.title) + "</strong><span>" + esc(c.desc) + "</span></figcaption></figure>").join("");

  /* ---------- 경로 ---------- */
  $("about-intro").innerHTML = (P.intro || []).map(p => "<p>" + fmt(p) + "</p>").join("");

  /* ---------- 기술 ---------- */
  $("skills-list").innerHTML = (D.skills || []).map(g =>
    '<div class="group"><h3>' + esc(g.group) + '</h3><div class="items">' +
    (g.items || []).map(i => '<div class="item"><div class="name">' + esc(i.name) + (i.level ? "<small>" + esc(i.level) + "</small>" : "") + "</div>" +
      (i.note ? '<div class="note">' + fmt(i.note) + "</div>" : "") + "</div>").join("") + "</div></div>").join("");

  /* ---------- 경력 ---------- */
  $("exp-list").innerHTML = (D.experience || []).map(e =>
    '<li><div class="when">' + esc(e.period) + "</div><div><h3>" + esc(e.company) + '</h3><div class="role">' + esc(e.role) + "</div>" +
    (e.summary ? '<p class="summary">' + esc(e.summary) + "</p>" : "") +
    ((e.bullets || []).length ? '<ul class="bullets">' + e.bullets.map(b => "<li>" + esc(b) + "</li>").join("") + "</ul>" : "") + "</div></li>").join("");
  $("cert-list").innerHTML = (D.certifications || []).map(c => "<li><span>" + fmt(c.name) + "</span><span>" + fmt(c.date) + "</span></li>").join("");
  $("edu-list").innerHTML = (D.education || []).map(e => "<li><span>" + fmt(e.school) + " · " + fmt(e.major) + (e.note ? " · " + fmt(e.note) : "") + "</span><span>" + fmt(e.period) + "</span></li>").join("");

  /* 접점(jobFit)·연락처·정리 섹션은 2026-11-15 사용자 요청으로 웹에서 제거. jobFit 데이터는 경력기술서 docx 에서만 사용. */
})();
