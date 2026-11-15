/* 라이트박스 — 갤러리·대표 이미지를 클릭하면 크게 보고 ← → 로 넘깁니다. */
(function () {
  const { esc } = window.PF;
  let items = [], cur = 0, box;
  function build() {
    box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", "이미지 크게 보기");
    box.innerHTML = '<img alt=""><div class="lb-cap"></div><button class="lb-prev" type="button" aria-label="이전">‹</button><button class="lb-next" type="button" aria-label="다음">›</button><button class="lb-close" type="button" aria-label="닫기">✕</button>';
    document.body.appendChild(box);
    box.addEventListener("click", e => { if (e.target === box || e.target.classList.contains("lb-close")) close(); });
    box.querySelector(".lb-prev").addEventListener("click", () => show(cur - 1));
    box.querySelector(".lb-next").addEventListener("click", () => show(cur + 1));
    document.addEventListener("keydown", e => {
      if (!box.classList.contains("open")) return;
      if (e.key === "Escape") close(); else if (e.key === "ArrowLeft") show(cur - 1); else if (e.key === "ArrowRight") show(cur + 1);
    });
  }
  function show(i) {
    cur = (i + items.length) % items.length;
    const it = items[cur];
    box.querySelector("img").src = it.src;
    box.querySelector("img").alt = it.caption || "";
    box.querySelector(".lb-cap").innerHTML = "<b>" + String(cur + 1).padStart(2, "0") + " / " + String(items.length).padStart(2, "0") + "</b>" + esc(it.caption || "");
    const one = items.length < 2;
    box.querySelector(".lb-prev").hidden = one; box.querySelector(".lb-next").hidden = one;
    box.classList.add("open"); document.body.classList.add("lb-lock");
  }
  function close() { box.classList.remove("open"); document.body.classList.remove("lb-lock"); }
  window.PF.lightbox = function (list, start) {
    if (!box) build();
    items = list; show(start || 0);
  };
})();
