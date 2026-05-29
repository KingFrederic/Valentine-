/* =============================================================================
   Site test suite — zero dependencies, runs with `node --test`.
   Validates structure, asset integrity, data correctness, links & a11y basics.
============================================================================= */
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const exists = (p) => fs.existsSync(path.join(ROOT, p));

const HTML_PAGES = ["index.html", "work.html", "about.html", "project.html", "contact.html", "404.html"];

/* ----------------------------------------------------- load SITE from data.js */
function loadSite() {
  const src = read("assets/js/data.js");
  const fakeWindow = {};
  // data.js is an IIFE that assigns to window.SITE
  new Function("window", src)(fakeWindow);
  return fakeWindow.SITE;
}

/* ----------------------------------------------------------------- structure */
test("all core files exist", () => {
  const required = [
    ...HTML_PAGES,
    "assets/css/tokens.css", "assets/css/styles.css",
    "assets/js/data.js", "assets/js/ui.js", "assets/js/home.js",
    "assets/js/work.js", "assets/js/project.js", "assets/js/about.js", "assets/js/contact.js",
    "assets/img/favicon.svg", "assets/img/og.svg",
    "site.webmanifest", "robots.txt", "sitemap.xml", "vercel.json", "README.md"
  ];
  for (const f of required) assert.ok(exists(f), `missing file: ${f}`);
});

test("the old Valentine site is fully removed", () => {
  for (const page of HTML_PAGES) {
    const html = read(page).toLowerCase();
    assert.ok(!html.includes("valentine"), `${page} still references Valentine`);
    assert.ok(!html.includes("envelope"), `${page} still references envelope`);
    assert.ok(!html.includes("proposal"), `${page} still references proposal`);
  }
});

/* --------------------------------------------------------- html meta & a11y */
for (const page of HTML_PAGES) {
  test(`${page}: valid head + accessibility basics`, () => {
    const html = read(page);
    assert.match(html, /<!DOCTYPE html>/i, "doctype");
    assert.match(html, /<html lang="en">/, "html lang");
    assert.match(html, /<meta charset="UTF-8"/i, "charset");
    assert.match(html, /name="viewport"/, "viewport");
    assert.match(html, /<title>[^<]+<\/title>/, "non-empty title");
    assert.match(html, /rel="icon"/, "favicon link");
    // every <img> (if any) must have alt
    const imgs = html.match(/<img\b[^>]*>/gi) || [];
    for (const img of imgs) assert.match(img, /\salt=/i, `img without alt in ${page}`);
  });
}

test("content pages declare a meta description", () => {
  for (const page of ["index.html", "work.html", "about.html", "contact.html"]) {
    assert.match(read(page), /name="description" content="[^"]{40,}"/, `${page} description`);
  }
});

/* ------------------------------------------------- local asset references OK */
test("every local asset reference resolves to a real file", () => {
  const re = /(?:href|src)="((?:assets\/|\.\/assets\/)[^"#?]+)"/g;
  for (const page of HTML_PAGES) {
    const html = read(page);
    let m;
    while ((m = re.exec(html))) {
      const ref = m[1].replace(/^\.\//, "");
      assert.ok(exists(ref), `${page} references missing asset: ${ref}`);
    }
  }
});

test("every HTML page links its stylesheet and scripts that exist", () => {
  for (const page of HTML_PAGES) {
    const html = read(page);
    assert.match(html, /assets\/css\/tokens\.css/, `${page} missing tokens.css`);
    assert.match(html, /assets\/css\/styles\.css/, `${page} missing styles.css`);
    assert.match(html, /assets\/js\/(data|ui)\.js/, `${page} missing core js`);
  }
});

/* ----------------------------------------------------- internal nav links OK */
test("internal page links point to pages that exist", () => {
  const re = /href="([a-z0-9_-]+\.html)(?:[?#][^"]*)?"/gi;
  for (const page of HTML_PAGES) {
    const html = read(page);
    let m;
    while ((m = re.exec(html))) {
      assert.ok(exists(m[1]), `${page} links to missing page: ${m[1]}`);
    }
  }
});

/* ---------------------------------------------------------------- data model */
test("SITE data loads and has all sections", () => {
  const S = loadSite();
  assert.ok(S, "window.SITE assigned");
  for (const key of ["profile", "stats", "clients", "sectors", "services", "skills",
    "experience", "credentials", "testimonials", "process", "projects"]) {
    assert.ok(S[key], `SITE.${key} present`);
  }
  assert.equal(typeof S.projectById, "function");
  assert.equal(typeof S.sectorById, "function");
});

test("profile carries the real contact details", () => {
  const S = loadSite();
  assert.equal(S.profile.email, "fredericidowu@gmail.com");
  assert.match(S.profile.phoneHref, /^\+?\d{10,}$/);
  assert.ok(S.profile.languages.length >= 4);
});

test("there are at least 8 sectors and 10 projects", () => {
  const S = loadSite();
  assert.ok(S.sectors.length >= 8, "8+ sectors");
  assert.ok(S.projects.length >= 10, "10+ projects");
});

test("the requested sectors all exist", () => {
  const S = loadSite();
  const ids = S.sectors.map((s) => s.id);
  for (const need of ["branding", "diplomacy", "corporate", "social", "decks", "web3"]) {
    assert.ok(ids.includes(need), `sector "${need}" required by brief`);
  }
});

test("project records are complete and well-formed", () => {
  const S = loadSite();
  const seen = new Set();
  const sectorIds = new Set(S.sectors.map((s) => s.id));
  for (const p of S.projects) {
    assert.ok(p.id && !seen.has(p.id), `unique id: ${p.id}`);
    seen.add(p.id);
    for (const f of ["title", "client", "year", "role", "tagline", "summary",
      "challenge", "approach", "outcome", "art"]) {
      assert.ok(p[f], `project ${p.id} missing ${f}`);
    }
    assert.ok(Array.isArray(p.sectors) && p.sectors.length >= 1, `${p.id} sectors`);
    for (const s of p.sectors) assert.ok(sectorIds.has(s), `${p.id} unknown sector ${s}`);
    assert.equal(p.metrics.length, 3, `${p.id} should have 3 metrics`);
    assert.equal(p.gallery.length, 4, `${p.id} should have 4 gallery items`);
    assert.ok(p.art.a && p.art.b && p.art.glyph, `${p.id} art spec`);
  }
});

test("at least the real institutional projects are flagged real", () => {
  const S = loadSite();
  const realIds = S.projects.filter((p) => p.real).map((p) => p.id);
  assert.ok(realIds.includes("afritalent-bootcamp"), "AU bootcamp is real");
  assert.ok(realIds.includes("reimagining-hope"), "Reimagining Hope is real");
});

test("featured projects exist for the landing page", () => {
  const S = loadSite();
  assert.ok(S.projects.filter((p) => p.featured).length >= 3, "3+ featured");
});

/* --------------------------------------------------------- sitemap integrity */
test("sitemap project links reference real project ids", () => {
  const S = loadSite();
  const ids = new Set(S.projects.map((p) => p.id));
  const sitemap = read("sitemap.xml");
  const re = /project\.html\?id=([a-z0-9-]+)/g;
  let m;
  while ((m = re.exec(sitemap))) {
    assert.ok(ids.has(m[1]), `sitemap references unknown project: ${m[1]}`);
  }
});

/* ------------------------------------------------------------- json configs */
test("json config files parse", () => {
  assert.doesNotThrow(() => JSON.parse(read("site.webmanifest")));
  assert.doesNotThrow(() => JSON.parse(read("vercel.json")));
  assert.doesNotThrow(() => JSON.parse(read("package.json")));
});
