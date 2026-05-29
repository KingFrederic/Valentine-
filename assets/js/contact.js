/* =============================================================================
   contact.js — client-side validated contact form with mailto fallback.
   No backend required: composes a rich mailto so the message always sends.
   Swap FORM_ENDPOINT for a Formspree/Basin URL to capture submissions too.
============================================================================= */
(function () {
  "use strict";
  const U = window.UI, S = window.SITE;
  const form = document.getElementById("contact-form");
  if (!form) return;

  const FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxx" — optional
  const status = document.getElementById("form-status");

  const fields = {
    name: { req: true, msg: "Please tell me your name." },
    email: { req: true, email: true, msg: "A valid email lets me reply." },
    project: { req: false },
    budget: { req: false },
    message: { req: true, min: 10, msg: "A sentence or two about the project, please." }
  };

  function setStatus(type, text) {
    if (!status) return;
    status.className = "form-status show " + type;
    status.textContent = text;
  }

  function validate() {
    let ok = true;
    Object.entries(fields).forEach(([name, rule]) => {
      const input = form.elements[name];
      if (!input) return;
      const wrap = input.closest(".field");
      const val = (input.value || "").trim();
      let bad = false;
      if (rule.req && !val) bad = true;
      if (rule.email && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) bad = true;
      if (rule.min && val.length < rule.min) bad = true;
      if (wrap) wrap.classList.toggle("invalid", bad);
      if (bad) ok = false;
    });
    return ok;
  }

  form.addEventListener("input", (e) => {
    const wrap = e.target.closest(".field");
    if (wrap) wrap.classList.remove("invalid");
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validate()) { setStatus("bad", "A few fields need a second look."); return; }

    const data = Object.fromEntries(new FormData(form).entries());

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST", headers: { Accept: "application/json" }, body: new FormData(form)
        });
        if (res.ok) { form.reset(); setStatus("ok", "Thank you — your message is in. I'll reply within 48 hours."); return; }
      } catch (_) { /* fall through to mailto */ }
    }

    /* mailto fallback — always works */
    const subject = `New project enquiry — ${data.name || "Website"}`;
    const body =
      `Name: ${data.name}\nEmail: ${data.email}\nProject type: ${data.project || "—"}\n` +
      `Budget: ${data.budget || "—"}\n\n${data.message}`;
    window.location.href = `mailto:${S.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("ok", "Opening your email app to send — or write me directly at " + S.profile.email + ".");
    form.reset();
  });

  document.addEventListener("DOMContentLoaded", () => U.init());
})();
