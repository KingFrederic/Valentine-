/* =============================================================================
   ui.js — shared interaction engine + render helpers (no dependencies)
   Exposes window.UI. Every page calls UI.init() then its own render code.
============================================================================= */
(function () {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none)").matches;

  /* --------------------------------------------------------------- helpers */
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const qs = (k) => new URLSearchParams(location.search).get(k);

  /* ----------------------------------------------- generated cover artwork */
  /* Builds a unique, gorgeous gradient "cover" from a project's art spec.   */
  function coverArt(art, opts = {}) {
    const { a, b, glyph } = art;
    const big = opts.big ? "big" : "";
    return `
      <div class="art" style="background:
          radial-gradient(120% 120% at 12% 0%, ${b}33 0%, transparent 45%),
          radial-gradient(140% 140% at 100% 100%, ${a} 0%, ${a} 35%, #05060977 100%),
          linear-gradient(135deg, ${a} 0%, ${shade(a, 18)} 100%);">
        <span class="ring" style="border-color:${b}40"></span>
        <span class="ring" style="border-color:${b}25; width:42%; height:96%; left:18%; top:-12%"></span>
        <span class="glyph ${big}" style="color:${b}">${glyph}</span>
      </div>`;
  }
  function shade(hex, amt) {
    const n = parseInt(hex.replace("#", ""), 16);
    let r = (n >> 16) + amt, g = ((n >> 8) & 255) + amt, bl = (n & 255) + amt;
    r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); bl = Math.max(0, Math.min(255, bl));
    return "#" + ((r << 16) | (g << 8) | bl).toString(16).padStart(6, "0");
  }

  /* ------------------------------------------------------------------- nav */
  function initNav() {
    const nav = document.querySelector(".nav");
    if (nav) {
      const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".mobile-menu");
    if (toggle && menu) {
      const set = (open) => {
        toggle.setAttribute("aria-expanded", String(open));
        menu.classList.toggle("open", open);
        document.body.classList.toggle("no-scroll", open);
      };
      toggle.addEventListener("click", () => set(menu.classList.contains("open") ? false : true));
      menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => set(false)));
    }
  }

  /* -------------------------------------------------------- custom cursor */
  function initCursor() {
    if (isTouch || reduceMotion) return;
    const dot = el("div", "cursor-dot");
    const ring = el("div", "cursor-ring");
    document.body.append(dot, ring);
    let rx = 0, ry = 0, x = 0, y = 0;
    document.addEventListener("mousemove", (e) => {
      x = e.clientX; y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
    });
    const loop = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    };
    loop();
    const hoverables = "a, button, .project-card, .sector-card, [data-cursor]";
    document.addEventListener("mouseover", (e) => { if (e.target.closest(hoverables)) ring.classList.add("hover"); });
    document.addEventListener("mouseout", (e) => { if (e.target.closest(hoverables)) ring.classList.remove("hover"); });
  }

  /* ------------------------------------------------------- scroll reveals */
  /* A rAF-throttled position sweep rather than IntersectionObserver: it can
     never "miss" an element on a fast scroll, anchor jump or restored scroll
     position — content is guaranteed to become visible. */
  let revealBound = false;
  function initReveals(root = document) {
    const all = () => document.querySelectorAll(".reveal:not(.in)");
    if (reduceMotion) { all().forEach((i) => i.classList.add("in")); return; }

    const sweep = () => {
      const trigger = window.innerHeight * 0.9;
      all().forEach((node) => {
        if (node.getBoundingClientRect().top < trigger) node.classList.add("in");
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { sweep(); ticking = false; });
    };

    sweep(); // reveal whatever is already in view immediately
    if (!revealBound) {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      window.addEventListener("load", sweep);
      revealBound = true;
    }
    // safety net: nothing stays hidden forever even if events never fire
    setTimeout(sweep, 400);
  }

  /* ------------------------------------------------------------- counters */
  function initCounters() {
    const nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;
    const run = (node) => {
      const target = parseFloat(node.dataset.count);
      const suffix = node.dataset.suffix || "";
      if (reduceMotion) { node.textContent = target + suffix; return; }
      const dur = 1500, start = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        node.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.5 });
    nums.forEach((n) => io.observe(n));
  }

  /* ------------------------------------------------------ magnetic buttons */
  function initMagnetic() {
    if (isTouch || reduceMotion) return;
    document.querySelectorAll("[data-magnetic]").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const mx = e.clientX - r.left - r.width / 2;
        const my = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${mx * 0.25}px, ${my * 0.35}px)`;
      });
      btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
    });
  }

  /* ----------------------------------------------------------- to-top btn */
  function initToTop() {
    const btn = document.querySelector(".to-top");
    if (!btn) return;
    window.addEventListener("scroll", () => btn.classList.toggle("show", window.scrollY > 700), { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  }

  /* ---------------------------------------------------------------- year */
  function setYear() {
    document.querySelectorAll("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));
  }

  /* ----------------------------------------------------------------- init */
  function init() {
    initNav(); initCursor(); initReveals(); initCounters();
    initMagnetic(); initToTop(); setYear();
  }

  window.UI = { init, initReveals, coverArt, shade, el, esc, qs, reduceMotion };
})();
