/* =============================================================================
   about.js — renders experience timeline, skills, languages, credentials
============================================================================= */
(function () {
  "use strict";
  const S = window.SITE, U = window.UI;
  const mount = (id) => document.getElementById(id);

  const tl = mount("timeline");
  if (tl) {
    S.experience.forEach((e) => {
      const item = U.el("div", "tl-item reveal");
      item.innerHTML = `
        <span class="tl-period">${U.esc(e.period)}</span>
        <h3>${U.esc(e.role)}</h3>
        <div class="tl-org">${U.esc(e.org)} · ${U.esc(e.place)}</div>
        <ul>${e.points.map((p) => `<li>${U.esc(p)}</li>`).join("")}</ul>`;
      tl.append(item);
    });
  }

  const sk = mount("skills");
  if (sk) {
    S.skills.forEach((g) => {
      const b = U.el("div", "skill-block reveal");
      b.innerHTML = `<h4>${U.esc(g.group)}</h4>
        <div class="chips">${g.list.map((s) => `<span class="chip">${U.esc(s)}</span>`).join("")}</div>`;
      sk.append(b);
    });
  }

  const lg = mount("languages");
  if (lg) {
    S.profile.languages.forEach((l) => {
      const d = U.el("div", "lang glass reveal");
      d.innerHTML = `<span class="l-name">${U.esc(l.name)}</span><span class="l-level">${U.esc(l.level)}</span>`;
      lg.append(d);
    });
  }

  const cr = mount("credentials");
  if (cr) {
    S.credentials.forEach((c) => {
      const d = U.el("div", "cred glass reveal");
      d.innerHTML = `<h4>${U.esc(c.title)}</h4><div class="c-org">${U.esc(c.org)}</div><div class="c-period">${U.esc(c.period)}</div>`;
      cr.append(d);
    });
  }

  document.addEventListener("DOMContentLoaded", () => { U.init(); U.initReveals(); });
})();
