/* =============================================================================
   home.js — renders dynamic sections on the landing page
============================================================================= */
(function () {
  "use strict";
  const S = window.SITE, U = window.UI;
  const mount = (id) => document.getElementById(id);

  /* hero stats */
  const stats = mount("hero-stats");
  if (stats) {
    S.stats.forEach((s, i) => {
      const c = U.el("div", "stat-card glass reveal");
      c.dataset.delay = String((i % 4) + 1);
      c.innerHTML = `<div class="num"><span data-count="${s.value}" data-suffix="${s.suffix}">0</span></div>
                     <div class="lbl">${U.esc(s.label)}</div>`;
      stats.append(c);
    });
  }

  /* clients marquee (doubled for seamless loop) */
  const track = mount("marquee-track");
  if (track) {
    const items = S.clients.concat(S.clients).map((c) => `<span>${U.esc(c)}</span>`).join("");
    track.innerHTML = items;
  }

  /* sectors */
  const sg = mount("sector-grid");
  if (sg) {
    S.sectors.forEach((sec, i) => {
      const a = U.el("a", "sector-card glass reveal");
      a.href = `work.html?sector=${sec.id}`;
      a.dataset.delay = String((i % 4) + 1);
      a.setAttribute("aria-label", `View ${sec.name} work`);
      a.innerHTML = `
        <span class="s-glow" style="background:${sec.accent}"></span>
        <div class="s-icon" style="color:${sec.accent}">${sec.icon}</div>
        <div>
          <h3>${U.esc(sec.name)}</h3>
          <p>${U.esc(sec.blurb)}</p>
        </div>
        <span class="s-go">View work <span aria-hidden="true">→</span></span>`;
      sg.append(a);
    });
  }

  /* featured work */
  const fw = mount("featured-work");
  if (fw) {
    S.projects.filter((p) => p.featured).slice(0, 4).forEach((p, i) => {
      const card = U.el("a", "project-card reveal " + (i < 2 ? "feat" : "span-4"));
      card.href = `project.html?id=${p.id}`;
      card.dataset.delay = String((i % 2) + 1);
      card.innerHTML = projectCardInner(p);
      fw.append(card);
    });
  }

  /* services */
  const sv = mount("services-grid");
  if (sv) {
    S.services.forEach((s, i) => {
      const c = U.el("article", "service-card glass reveal");
      c.dataset.delay = String((i % 2) + 1);
      c.innerHTML = `<h3>${U.esc(s.title)}</h3><p>${U.esc(s.desc)}</p>
        <ul>${s.items.map((it) => `<li>${U.esc(it)}</li>`).join("")}</ul>`;
      sv.append(c);
    });
  }

  /* process */
  const pr = mount("process-list");
  if (pr) {
    S.process.forEach((p) => {
      const row = U.el("div", "process-row reveal");
      row.innerHTML = `<span class="p-no">${p.no}</span>
        <div><h3>${U.esc(p.title)}</h3><p>${U.esc(p.desc)}</p></div>`;
      pr.append(row);
    });
  }

  /* testimonials */
  const tg = mount("testi-grid");
  if (tg) {
    S.testimonials.forEach((t, i) => {
      const c = U.el("figure", "testi-card glass reveal");
      c.dataset.delay = String((i % 3) + 1);
      c.innerHTML = `<div class="quote-mark" aria-hidden="true">"</div>
        <blockquote>${U.esc(t.quote)}</blockquote>
        <figcaption class="t-author"><div class="name">${U.esc(t.author)}</div><div class="org">${U.esc(t.org)}</div></figcaption>`;
      tg.append(c);
    });
  }

  function projectCardInner(p) {
    const tags = p.sectors.slice(0, 2).map((id) => `<span class="pc-tag">${U.esc(S.sectorById(id).short)}</span>`).join("");
    return `
      <div class="pc-cover">
        <div class="pc-tags">${tags}</div>
        ${p.real ? `<span class="pc-real">Live work</span>` : ""}
        ${U.coverArt(p.art)}
      </div>
      <div class="pc-body">
        <span class="pc-client">${U.esc(p.client)}</span>
        <h3>${U.esc(p.title)}</h3>
        <p class="pc-tagline">${U.esc(p.tagline)}</p>
        <div class="pc-foot"><span>${U.esc(p.role)} · ${U.esc(p.year)}</span>
          <span class="view">View case <span aria-hidden="true">→</span></span></div>
      </div>`;
  }

  document.addEventListener("DOMContentLoaded", () => { U.init(); });
})();
