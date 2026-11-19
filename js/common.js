/* 공통 유틸 — 두 페이지가 함께 사용합니다. 수정할 일은 거의 없습니다. */
(function () {
  const D = window.PORTFOLIO || {};

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // "[ ... ]" 로 감싼 텍스트는 미완성 항목으로 보고 노란색 표시
  const TODO_RE = /\[[^\[\]]*\]/g;
  function fmt(s) {
    const safe = esc(s);
    return safe.replace(TODO_RE, m => '<span class="todo">' + m + "</span>");
  }
  function isTodo(s) { return typeof s === "string" && /\[[^\[\]]*\]/.test(s); }

  function countTodos(obj) {
    let n = 0;
    (function walk(v) {
      if (typeof v === "string") { const m = v.match(TODO_RE); if (m) n += m.length; }
      else if (Array.isArray(v)) v.forEach(walk);
      else if (v && typeof v === "object") Object.values(v).forEach(walk);
    })(obj);
    return n;
  }

  function setupTodoBar() {
    const bar = document.getElementById("todo-bar");
    if (!bar) return;
    const show = D.settings && D.settings.showTodoBar;
    if (!show) return;
    const n = countTodos({ profile: D.profile, skills: D.skills, experience: D.experience,
      education: D.education, certifications: D.certifications, jobFit: D.jobFit, projects: D.projects, settings: D.settings });
    bar.hidden = false;
    document.getElementById("todo-count").textContent =
      n === 0 ? "모든 항목이 채워졌습니다. data.js 의 showTodoBar 를 false 로 바꾸면 이 바가 사라집니다."
              : "작성 중인 양식 · 남은 항목 " + n + "개 (노란색 표시) · js/data.js 에서 수정";
    const btn = document.getElementById("todo-toggle");
    let hidden = false;
    try { hidden = localStorage.getItem("hideTodo") === "1"; } catch (e) {}
    apply();
    btn.addEventListener("click", () => { hidden = !hidden; try { localStorage.setItem("hideTodo", hidden ? "1" : "0"); } catch (e) {} apply(); });
    function apply() {
      document.body.classList.toggle("hide-todo", hidden);
      btn.textContent = hidden ? "미완성 표시 켜기" : "미완성 표시 끄기";
    }
  }

  function linkOrNull(label, url) {
    if (!url || isTodo(url)) return null;
    const href = /^https?:\/\//.test(url) ? url : "https://" + url;
    return '<a href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(label) + "</a>";
  }

  function setTitle() {
    const t = D.settings && D.settings.siteTitle;
    if (t && !isTodo(t)) document.title = t;
    else if (D.profile && D.profile.name && !isTodo(D.profile.name)) document.title = D.profile.name + " | Portfolio";
  }

  window.PF = { D, esc, fmt, isTodo, countTodos, setupTodoBar, linkOrNull, setTitle };
})();
