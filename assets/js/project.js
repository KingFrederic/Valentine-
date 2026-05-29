/* =============================================================================
   project.js — renders a single case study from ?id=<slug>
============================================================================= */
(function () {
  "use strict";
  const S = window.SITE, U = window.UI;
  const id = U.qs("id");
  const p = id ? S.projectById(id) : null;
  const root = document.getElementById("case");
  if (!root) return;

  if (!p) {
    root.innerHTML = `<div class="wrap section" style="text-align:center">
      <p class="eyebrow">404</p>
      <h1 style="font-size:var(--fs-h1);margin-top:18px">Project not found</h1>
      <p style="color:var(--text-soft);margin:18px 0 30px">That case study doesn't exist — but plenty of others do.</p>
      <a class="btn btn-primary" href="work.html">View all work <span class="arrow">→</span></a></div>`;
    document.addEventListener("DOMContentLoaded", () => U.init());
    return;
  }

  document.title = `${p.title} — Frédéric Idowu`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", `${p.title} — ${p.tagline} Case study by Frédéric Idowu.`);

  const sectorChips = p.sectors.map((sid) => {
    const s = S.sectorById(sid);
    return `<a class="chip" href="work.html?sector=${s.id}" style="color:${s.accent}">${s.icon} ${U.esc(s.short)}</a>`;
  }).join("");

  const metrics = p.metrics.map((m) => `<div class="metric glass"><div class="v">${U.esc(m.v)}</div><div class="l">${U.esc(m.l)}</div></div>`).join("");
  const services = p.services.map((s) => `<span class="chip">${U.esc(s)}</span>`).join("");
  const gallery = p.gallery.map((g, i) => {
    const tint = i % 2 ? p.art.b : U.shade(p.art.a, 22);
    return `<figure class="tile" style="background:
        radial-gradient(120% 120% at ${i % 2 ? "100% 0%" : "0% 100%"}, ${p.art.b}30, transparent 50%),
        linear-gradient(135deg, ${U.shade(p.art.a, i * 6)} 0%, ${tint}cc 130%)">
        <span>${U.esc(g)}</span></figure>`;
  }).join("");

  /* next project */
  const idx = S.projects.findIndex((x) => x.id === p.id);
  const next = S.projects[(idx + 1) % S.projects.length];

  root.innerHTML = `
    <section class="cs-hero wrap">
      <a class="cs-back link-underline" href="work.html"><span aria-hidden="true">←</span> All work</a>
      <div class="cs-meta">${sectorChips}</div>
      <p class="eyebrow">${U.esc(p.client)}</p>
      <h1 class="reveal in">${U.esc(p.title)}</h1>
      <p class="cs-tagline">${U.esc(p.tagline)}</p>
      <div class="cs-cover glass" style="margin-top:36px">
        ${U.coverArt(p.art, { big: true })}
      </div>
      <div class="cs-metrics">${metrics}</div>

      <div class="cs-body">
        <div>
          <div class="cs-block"><h3>Overview</h3><p>${U.esc(p.summary)}</p></div>
          <div class="cs-block"><h3>The challenge</h3><p>${U.esc(p.challenge)}</p></div>
        </div>
        <div>
          <div class="cs-block"><h3>The approach</h3><p>${U.esc(p.approach)}</p></div>
          <div class="cs-block"><h3>The outcome</h3><p>${U.esc(p.outcome)}</p></div>
          <div class="cs-block"><h3>Scope</h3><div class="cs-services">${services}</div></div>
        </div>
      </div>

      <div class="cs-gallery">${gallery}</div>

      <a class="cs-next glass" href="project.html?id=${next.id}">
        <div><span class="label">Next project</span><h3>${U.esc(next.title)}</h3></div>
        <span class="btn btn-ghost">View case <span class="arrow">→</span></span>
      </a>
    </section>`;

  document.addEventListener("DOMContentLoaded", () => { U.init(); U.initReveals(); });
})();
