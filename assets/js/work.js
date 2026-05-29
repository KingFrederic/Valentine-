/* =============================================================================
   work.js — full portfolio grid with sector filtering (deep-linkable)
============================================================================= */
(function () {
  "use strict";
  const S = window.SITE, U = window.UI;
  const controls = document.getElementById("work-controls");
  const grid = document.getElementById("work-grid");
  const countEl = document.getElementById("work-count");
  if (!grid) return;

  const filters = [{ id: "all", short: "All work" }].concat(
    S.sectors.map((s) => ({ id: s.id, short: s.short }))
  );

  let active = U.qs("sector") || "all";
  if (!filters.some((f) => f.id === active)) active = "all";

  /* build filter buttons */
  filters.forEach((f) => {
    const b = U.el("button", "filter-btn" + (f.id === active ? " active" : ""));
    b.type = "button";
    b.textContent = f.short;
    b.dataset.filter = f.id;
    b.addEventListener("click", () => apply(f.id));
    controls.append(b);
  });

  /* build all cards once */
  S.projects.forEach((p) => {
    const card = U.el("a", "project-card");
    card.href = `project.html?id=${p.id}`;
    card.dataset.sectors = p.sectors.join(" ");
    card.innerHTML = cardInner(p);
    grid.append(card);
  });

  function cardInner(p) {
    const tags = p.sectors.slice(0, 3).map((id) => `<span class="pc-tag">${U.esc(S.sectorById(id).short)}</span>`).join("");
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

  function apply(id) {
    active = id;
    controls.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("active", b.dataset.filter === id));
    let shown = 0;
    grid.querySelectorAll(".project-card").forEach((card) => {
      const match = id === "all" || card.dataset.sectors.split(" ").includes(id);
      card.classList.toggle("hidden", !match);
      if (match) shown++;
    });
    if (countEl) {
      const label = id === "all" ? "projects" : `${S.sectorById(id).short.toLowerCase()} projects`;
      countEl.textContent = `${shown} ${label}`;
    }
    const url = new URL(location.href);
    if (id === "all") url.searchParams.delete("sector"); else url.searchParams.set("sector", id);
    history.replaceState(null, "", url);
  }

  document.addEventListener("DOMContentLoaded", () => {
    U.init();
    apply(active);
    U.initReveals();
  });
})();
