(function () {
  "use strict";

  const CFG = window.APP_CONFIG || {};
  const CONTENT =
    window.APP_CONTENT ||
    (typeof APP_CONTENT !== "undefined" ? APP_CONTENT : {});
  const VERSION = (CONTENT.version && CONTENT.version.id) || "middle-east";
  const UNLOCK_KEY = "hp_unlocked_" + VERSION;

  const state = {
    lang: CFG.defaultLang === "en" ? "en" : "ar",
    idx: 0,               // current question index (0-based)
    answers: [],          // "a" or "b" per question
    unlocked: false
  };

  const $ = (sel) => document.querySelector(sel);

  /* ---------- i18n ---------- */
  function t(field) {
    if (!field) return "";
    if (typeof field === "function") return field;
    return field[state.lang] != null ? field[state.lang] : field.en;
  }
  function applyLang() {
    const isAr = state.lang === "ar";
    document.documentElement.lang = isAr ? "ar" : "en";
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    $("#lang-en").classList.toggle("active", !isAr);
    $("#lang-ar").classList.toggle("active", isAr);
  }

  /* ---------- screens ---------- */
  function show(id) {
    ["home", "quiz", "result"].forEach(function (s) {
      $("#screen-" + s).classList.toggle("hidden", s !== id);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------- home ---------- */
  function renderHome() {
    $("#eyebrow").textContent = t(CONTENT.version.eyebrow);
    $("#brand-name").textContent = t(CONTENT.ui.brand);
    $("#home-title").textContent = t(CONTENT.ui.homeTitle);
    $("#home-sub").textContent = t(CONTENT.ui.homeSub);
    $("#begin-btn").textContent = t(CONTENT.ui.begin);
    $("#free-note").textContent = t(CONTENT.ui.freeNote);
    $("#footer-note").textContent = t(CONTENT.ui.footerNote);

    const featBox = $("#features");
    featBox.innerHTML = "";
    CONTENT.ui.features.forEach(function (f) {
      const card = document.createElement("div");
      card.className = "feature-card";
      const h = document.createElement("h3");
      h.textContent = t(f);
      const p = document.createElement("p");
      p.textContent = t(f.desc);
      card.appendChild(h);
      card.appendChild(p);
      featBox.appendChild(card);
    });
  }

  /* ---------- quiz ---------- */
  function renderQuiz() {
    const qs = CONTENT.questions;
    const q = qs[state.idx];
    const qText = q[state.lang] || q.en;
    const total = qs.length;

    $("#quiz-counter").textContent = t(CONTENT.ui.questionCounter)(state.idx + 1, total);
    $("#quiz-question").textContent = qText.q;
    $("#opt-a-label").textContent = qText.a;
    $("#opt-b-label").textContent = qText.b;
    $("#opt-a .opt-letter").textContent = t(CONTENT.ui.optionA);
    $("#opt-b .opt-letter").textContent = t(CONTENT.ui.optionB);
    $("#quiz-back").textContent = t(CONTENT.ui.back);
    $("#quiz-back").classList.toggle("hidden", state.idx === 0);

    const pct = Math.round(((state.idx) / total) * 100);
    $("#quiz-progress-fill").style.width = pct + "%";

    // reflect previously chosen answer
    const prev = state.answers[state.idx];
    $("#opt-a").classList.toggle("selected", prev === "a");
    $("#opt-b").classList.toggle("selected", prev === "b");
  }

  function choose(letter) {
    state.answers[state.idx] = letter;
    if (state.idx < CONTENT.questions.length - 1) {
      state.idx += 1;
      renderQuiz();
    } else {
      computeResult();
    }
  }

  function computeResult() {
    const scores = { EI: 0, RF: 0, ON: 0 };
    CONTENT.questions.forEach(function (q, i) {
      if (state.answers[i] === "a") scores[q.dim] += 1;
    });

    let code = "";
    CONTENT.dimensions.forEach(function (d) {
      // 4 questions per dimension; majority (>=2) chooses pole A.
      code += scores[d.id] >= 2 ? d.poleA.code : d.poleB.code;
    });

    state.code = code;
    state.archetype = CONTENT.archetypes[code];
    show("result");
    renderResult();
  }

  /* ---------- result ---------- */
  function renderResult() {
    const a = state.archetype;
    const ui = CONTENT.ui;

    $("#result-ready").textContent = t(ui.resultReady);
    $("#result-locked-hint").textContent = t(ui.resultLockedHint);
    $("#unlock-btn").textContent = t(ui.unlockPrice);
    $("#price-note").textContent = t(ui.priceNote);
    $("#completed-payment").textContent = t(ui.completedPayment);
    $("#completed-payment-hint").textContent = t(ui.completedPaymentHint);
    $("#demo-link").textContent = t(ui.demoLink);
    $("#code-input").placeholder = t(ui.enterCode);
    $("#unlock-code-btn").textContent = t(ui.unlock);
    $("#code-msg").textContent = "";

    // teaser card shows blurred figure name + type code
    $("#teaser-code").textContent = a.code;
    $("#teaser-figure").textContent = t(a.figure);

    if (!CFG.previewEnabled) $("#demo-link").classList.add("hidden");

    if (state.unlocked) {
      $("#result-locked").classList.add("hidden");
      $("#result-full").classList.remove("hidden");
      renderFull(a);
    } else {
      $("#result-locked").classList.remove("hidden");
      $("#result-full").classList.add("hidden");
    }
  }

  function renderFull(a) {
    $("#full-code").textContent = a.code;
    $("#full-figure").textContent = t(a.figure);
    $("#full-epithet").textContent = t(a.epithet);
    $("#full-years").textContent = t(a.years);
    $("#full-tagline").textContent = t(a.tagline);
    $("#full-essence").textContent = t(a.essence);
    $("#full-growth").textContent = t(a.growth);
    $("#full-echo").textContent = t(a.echo);

    const ui = CONTENT.ui;
    $("#full-prototype-label").textContent = t(ui.yourPrototype);
    $("#full-strengths-label").textContent = t(ui.strengths);
    $("#full-blindspots-label").textContent = t(ui.blindspots);
    $("#full-growth-label").textContent = t(ui.growth);
    $("#full-echo-label").textContent = t(ui.echo);
    $("#share-btn").textContent = t(ui.share);
    $("#retake-btn").textContent = t(ui.retake);

    const strengthsBox = $("#full-strengths");
    strengthsBox.innerHTML = "";
    a.strengths.forEach(function (s) {
      const li = document.createElement("li");
      li.textContent = t(s);
      strengthsBox.appendChild(li);
    });

    const blindBox = $("#full-blindspots");
    blindBox.innerHTML = "";
    a.blindspots.forEach(function (s) {
      const li = document.createElement("li");
      li.textContent = t(s);
      blindBox.appendChild(li);
    });

    renderDimSummary();
  }

  function renderDimSummary() {
    const box = $("#dim-summary");
    box.innerHTML = "";
    const parts = state.code.split("·");
    CONTENT.dimensions.forEach(function (d, i) {
      const poleCode = parts[i];
      const pole = d.poleA.code === poleCode ? d.poleA : d.poleB;
      const row = document.createElement("div");
      row.className = "dim-row";

      const name = document.createElement("span");
      name.className = "dim-name";
      name.textContent = t(d.name);

      const bar = document.createElement("div");
      bar.className = "dim-bar";
      const aSpan = document.createElement("span");
      aSpan.textContent = t(d.poleA);
      aSpan.className = "dim-pole" + (d.poleA.code === poleCode ? " on" : "");
      const bSpan = document.createElement("span");
      bSpan.textContent = t(d.poleB);
      bSpan.className = "dim-pole" + (d.poleB.code === poleCode ? " on" : "");
      bar.appendChild(aSpan);
      bar.appendChild(bSpan);

      row.appendChild(name);
      row.appendChild(bar);
      box.appendChild(row);
    });
  }

  /* ---------- unlock ---------- */
  function unlock() {
    state.unlocked = true;
    try { localStorage.setItem(UNLOCK_KEY, "1"); } catch (e) {}
    renderResult();
  }

  function tryDemoCode() {
    const val = ($("#code-input").value || "").trim();
    if (val === CFG.demoUnlockCode) {
      unlock();
    } else {
      $("#code-msg").textContent = t(CONTENT.ui.codeWrong);
    }
  }

  function startPayment() {
    if (CFG.paymentLink) {
      window.open(CFG.paymentLink, "_blank");
      $("#completed-payment").classList.remove("hidden");
    } else {
      // No payment link configured yet: fall back to demo for preview.
      $("#demo-box").classList.remove("hidden");
      $("#completed-payment").classList.remove("hidden");
    }
  }

  /* ---------- share ---------- */
  function shareResult() {
    const a = state.archetype;
    const text = [
      "Historical Persona — " + t(CONTENT.ui.brand),
      t(a.figure) + " · " + a.code + " · " + t(a.epithet),
      window.location.href.split("?")[0]
    ].join("\n");

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        flashCopied();
      }).catch(function () {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); flashCopied(); } catch (e) {}
    document.body.removeChild(ta);
  }

  function flashCopied() {
    const btn = $("#share-btn");
    const old = btn.textContent;
    btn.textContent = t(CONTENT.ui.copied);
    setTimeout(function () { btn.textContent = old; }, 1400);
  }

  /* ---------- reset ---------- */
  function resetQuiz() {
    state.idx = 0;
    state.answers = [];
    state.code = null;
    state.archetype = null;
    show("home");
    renderHome();
  }

  /* ---------- init ---------- */
  function init() {
    // restore unlock
    try {
      if (localStorage.getItem(UNLOCK_KEY) === "1") state.unlocked = true;
    } catch (e) {}

    // honor ?paid=1 on return from payment
    const qp = new URLSearchParams(window.location.search);
    if (qp.get(CFG.paymentSuccessParam) === "1") unlock();

    applyLang();
    renderHome();
    show("home");

    // events
    $("#begin-btn").addEventListener("click", function () {
      state.idx = 0;
      state.answers = [];
      state.unlocked = state.unlocked; // keep unlock across retakes
      show("quiz");
      renderQuiz();
    });
    $("#opt-a").addEventListener("click", function () { choose("a"); });
    $("#opt-b").addEventListener("click", function () { choose("b"); });
    $("#quiz-back").addEventListener("click", function () {
      if (state.idx > 0) { state.idx -= 1; renderQuiz(); }
    });

    $("#lang-en").addEventListener("click", function () {
      state.lang = "en";
      applyLang();
      rerenderCurrent();
    });
    $("#lang-ar").addEventListener("click", function () {
      state.lang = "ar";
      applyLang();
      rerenderCurrent();
    });

    $("#unlock-btn").addEventListener("click", startPayment);
    $("#completed-payment").addEventListener("click", function () {
      if (CFG.paymentLink) {
        // Reload to let the ?paid=1 param (or stored key) take effect.
        window.location.reload();
      } else {
        unlock();
      }
    });
    $("#demo-link").addEventListener("click", function (e) {
      e.preventDefault();
      $("#demo-box").classList.toggle("hidden");
    });
    $("#unlock-code-btn").addEventListener("click", tryDemoCode);
    $("#code-input").addEventListener("keydown", function (e) {
      if (e.key === "Enter") tryDemoCode();
    });

    $("#share-btn").addEventListener("click", shareResult);
    $("#retake-btn").addEventListener("click", resetQuiz);
  }

  function rerenderCurrent() {
    const homeHidden = $("#screen-home").classList.contains("hidden");
    const quizHidden = $("#screen-quiz").classList.contains("hidden");
    if (!homeHidden) renderHome();
    else if (!quizHidden) renderQuiz();
    else if (state.archetype) renderResult();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
