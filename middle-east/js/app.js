(function () {
  "use strict";

  const CFG = window.APP_CONFIG || {};
  const DATA = window.APP_DATA || {};
  const ALL_QUESTIONS = window.APP_QUESTIONS || [];
  const ALL_CHARACTERS = window.APP_CHARACTERS || [];
  const VERSION = (DATA && DATA.versionId) || "middle-east";
  const UNLOCK_KEY = "hp_unlocked_" + VERSION + "_v2";

  const QUESTIONS = ALL_QUESTIONS.filter((q) => q && q.status === "published");
  const CHARACTERS = ALL_CHARACTERS.filter((c) => c && c.allowed_match === true);
  const DIM_IDS = (DATA.dimensions || []).map((d) => d.id);

  const state = {
    lang: CFG.defaultLang === "en" ? "en" : "ar",
    idx: 0,
    answers: [],
    unlocked: false,
    result: null,
    auth: { token: null, user: null }
  };

  const $ = (sel) => document.querySelector(sel);

  function apiFetch(path, options) {
    const opts = Object.assign({}, options);
    opts.headers = Object.assign({}, opts.headers || {});
    if (state.auth && state.auth.token) {
      opts.headers["Authorization"] = "Bearer " + state.auth.token;
    }
    return fetch(path, opts);
  }

  /* ---------- i18n ---------- */
  function t(field) {
    if (field == null) return "";
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
    ["home", "quiz", "result"].forEach((s) => {
      $("#screen-" + s).classList.toggle("hidden", s !== id);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------- home ---------- */
  function renderHome() {
    $("#eyebrow").textContent = "Historical Persona · Middle East";
    $("#brand-name").textContent = t(DATA.ui.brand);
    $("#home-title").textContent = t(DATA.ui.homeTitle);
    $("#home-sub").textContent = t(DATA.ui.homeSub);
    $("#begin-btn").textContent = t(DATA.ui.begin);
    $("#free-note").textContent = t(DATA.ui.freeNote);
    $("#footer-note").textContent = t(DATA.ui.footerNote);

    const featBox = $("#features");
    featBox.innerHTML = "";
    DATA.ui.features.forEach((f) => {
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
    const q = QUESTIONS[state.idx];
    const total = QUESTIONS.length;
    const qt = t(q);
    $("#quiz-counter").textContent = t(DATA.ui.questionCounter)(state.idx + 1, total);
    $("#quiz-question").textContent = qt.q;
    ["a", "b", "c", "d"].forEach((letter) => {
      $("#opt-" + letter + "-label").textContent = qt[letter];
      $("#opt-" + letter + " .opt-letter").textContent = t(DATA.ui["opt" + letter.toUpperCase()]);
    });
    $("#quiz-back").textContent = t(DATA.ui.back);
    $("#quiz-back").classList.toggle("hidden", state.idx === 0);
    $("#quiz-progress-fill").style.width = Math.round((state.idx / total) * 100) + "%";

    const prev = state.answers[state.idx];
    ["a", "b", "c", "d"].forEach((letter) => {
      $("#opt-" + letter).classList.toggle("selected", prev === letter);
    });
  }

  function choose(letter) {
    state.answers[state.idx] = letter;
    if (state.idx < QUESTIONS.length - 1) {
      state.idx += 1;
      renderQuiz();
    } else {
      computeResult();
    }
  }

  /* ---------- scoring + matching ---------- */
  function computeResult() {
    const raw = {};
    const maxPossible = {};
    DIM_IDS.forEach((d) => { raw[d] = 0; maxPossible[d] = 0; });

    QUESTIONS.forEach((q, i) => {
      const letter = state.answers[i];
      const scores = (q.scores && q.scores[letter]) || {};
      DIM_IDS.forEach((d) => {
        if (scores[d]) {
          raw[d] += scores[d];
          maxPossible[d] += 1;
        }
      });
    });

    const vector = {};
    DIM_IDS.forEach((d) => {
      vector[d] = maxPossible[d] > 0 ? Math.max(0, Math.min(1, raw[d] / maxPossible[d])) : 0.5;
    });

    const ranked = CHARACTERS.slice().map((c) => {
      let sum = 0;
      DIM_IDS.forEach((d) => {
        const delta = vector[d] - (c.profile[d] || 0);
        sum += delta * delta;
      });
      return { c, distance: Math.sqrt(sum) };
    }).sort((a, b) => {
      if (a.distance !== b.distance) return a.distance - b.distance;
      return String(a.c.person_id).localeCompare(String(b.c.person_id));
    });

    state.result = {
      vector,
      buckets: {},
      primary: ranked[0].c,
      secondary: ranked[1].c
    };
    DIM_IDS.forEach((d) => {
      state.result.buckets[d] = vector[d] >= 0.66 ? "high" : vector[d] >= 0.34 ? "mid" : "low";
    });

    show("result");
    renderResult();
  }

  /* ---------- result ---------- */
  function renderResult() {
    const ui = DATA.ui;
    const r = state.result;

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
    $("#pay-msg").textContent = "";

    $("#teaser-figure").textContent = t(r.primary.names);
    if (!CFG.previewEnabled) $("#demo-link").classList.add("hidden");

    if (state.unlocked) {
      $("#result-locked").classList.add("hidden");
      $("#result-full").classList.remove("hidden");
      renderFull();
    } else {
      $("#result-locked").classList.remove("hidden");
      $("#result-full").classList.add("hidden");
    }
  }

  function renderFull() {
    const ui = DATA.ui;
    const r = state.result;
    const p = r.primary;
    const s = r.secondary;

    $("#full-figure").textContent = t(p.names);
    $("#full-epithet").textContent = t(p.epithet);
    $("#full-years").textContent = p.years;
    $("#full-tagline").textContent = t(p.tagline);
    $("#full-bio").textContent = t(p.bio);

    $("#sec-name").textContent = t(s.names);
    $("#sec-difference").textContent = t(s.difference);
    $("#sec-label").textContent = t(ui.secondaryMatch);
    $("#dim-label").textContent = t(ui.dimAnalysis);

    $("#full-strengths-label").textContent = t(ui.strengths);
    $("#full-blindspots-label").textContent = t(ui.blindspots);
    $("#full-decision-label").textContent = t(ui.decisionStyle);
    $("#full-collab-label").textContent = t(ui.collaborationStyle);
    $("#full-growth-label").textContent = t(ui.growth);
    $("#full-history-label").textContent = t(ui.historicalNote);
    $("#full-plan-label").textContent = state.lang === "ar" ? "خطة 30 يوماً" : "30-Day Plan";
    $("#full-limits-label").textContent = t(ui.limitations);
    $("#share-btn").textContent = t(ui.share);
    $("#retake-btn").textContent = t(ui.retake);

    $("#full-decision").textContent = t(p.decision_style);
    $("#full-collab").textContent = t(p.collaboration_style);
    $("#full-growth").textContent = t(p.growth);
    $("#full-history").textContent = t(p.historical_note);
    $("#full-limits").textContent = t(DATA.report.disclaimer);

    fillList("#full-strengths", p.strengths);
    fillList("#full-blindspots", p.blindspots);
    renderDimAnalysis();
    renderPlan();
  }

  function fillList(sel, items) {
    const box = $(sel);
    box.innerHTML = "";
    (items || []).forEach((it) => {
      const li = document.createElement("li");
      li.textContent = t(it);
      box.appendChild(li);
    });
  }

  function renderDimAnalysis() {
    const box = $("#dim-list");
    box.innerHTML = "";
    DATA.dimensions.forEach((d) => {
      const pct = Math.round(state.result.vector[d.id] * 100);
      const bucket = state.result.buckets[d.id];
      const text = DATA.report.dimensionBuckets[d.id][bucket];
      const label = pct >= 66 ? t(d.highLabel) : t(d.lowLabel);

      const row = document.createElement("div");
      row.className = "dim-row";

      const head = document.createElement("div");
      head.className = "dim-head";
      const name = document.createElement("span");
      name.className = "dim-name";
      name.textContent = t(d);
      const tag = document.createElement("span");
      tag.className = "dim-bucket-label";
      tag.textContent = label + " · " + pct + "%";
      head.appendChild(name);
      head.appendChild(tag);

      const bar = document.createElement("div");
      bar.className = "dim-bar";
      const fill = document.createElement("div");
      fill.className = "dim-bar-fill";
      fill.style.width = pct + "%";
      bar.appendChild(fill);

      const desc = document.createElement("p");
      desc.className = "dim-desc";
      desc.textContent = t(text);

      row.appendChild(head);
      row.appendChild(bar);
      row.appendChild(desc);
      box.appendChild(row);
    });
  }

  function renderPlan() {
    const sorted = DIM_IDS.slice().sort((a, b) => state.result.vector[b] - state.result.vector[a]);
    const d1 = DATA.dimensions.find((d) => d.id === sorted[0]);
    const d2 = DATA.dimensions.find((d) => d.id === sorted[1]);
    const plan = t(DATA.report.thirtyDay)
      .replace("{d1}", t(d1))
      .replace("{d2}", t(d2));
    $("#full-plan").textContent = plan;
  }

  /* ---------- unlock / payment ---------- */
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
      $("#code-msg").textContent = t(DATA.ui.codeWrong);
    }
  }

  function startPayment() {
    $("#pay-msg").textContent = "";
    if (CFG.payProvider === "waffo" && CFG.createCheckoutEndpoint) {
      apiFetch(CFG.createCheckoutEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: state.answers, lang: state.lang })
      })
        .then((r) => r.json())
        .then((j) => {
          if (j && j.ok && j.checkoutUrl) {
            try { localStorage.setItem("hp_resultId", j.resultId); } catch (e) {}
            window.open(j.checkoutUrl, "_blank", "noopener,noreferrer");
            $("#completed-payment").classList.remove("hidden");
            $("#completed-payment-hint").classList.remove("hidden");
          } else {
            $("#pay-msg").textContent = (j && j.error) || "Checkout failed.";
          }
        })
        .catch(() => {
          $("#pay-msg").textContent =
            "Payment server unavailable. Start it with: node outputs/server/waffo-payment.mjs, then open http://localhost:8787";
        });
      return;
    }

    // No server configured: fall back to demo preview.
    $("#demo-box").classList.remove("hidden");
    $("#completed-payment").classList.remove("hidden");
  }

  function applyServerReport(report, token) {
    const byId = {};
    (window.APP_CHARACTERS || []).forEach((c) => { byId[c.person_id] = c; });
    state.result = {
      vector: report.vector,
      buckets: report.buckets,
      primary: byId[report.primaryId],
      secondary: byId[report.secondaryId]
    };
    if (token) {
      try { localStorage.setItem("hp_unlock_token", token); } catch (e) {}
    }
  }

  function restorePaidAccess(resultId) {
    if (!CFG.verifyEndpoint) return;
    apiFetch(CFG.verifyEndpoint + "?resultId=" + encodeURIComponent(resultId))
      .then((r) => r.json())
      .then((j) => {
        if (j && j.ok && j.report) {
          applyServerReport(j.report, j.token);
          unlock();
          show("result");
        }
      })
      .catch(() => {});
  }

  function refreshAccess() {
    let resultId = null;
    try { resultId = localStorage.getItem("hp_resultId"); } catch (e) {}
    if (resultId && CFG.verifyEndpoint) {
      apiFetch(CFG.verifyEndpoint + "?resultId=" + encodeURIComponent(resultId))
        .then((r) => r.json())
        .then((j) => {
          if (j && j.ok && j.report) {
            applyServerReport(j.report, j.token);
            unlock();
          } else {
            $("#pay-msg").textContent = "Payment not confirmed yet.";
          }
        })
        .catch(() => { $("#pay-msg").textContent = "Verification unavailable."; });
      return;
    }
    unlock();
  }

  /* ---------- auth ---------- */
  let authMode = "login";

  function renderAuth() {
    const u = state.auth.user;
    if (u) {
      $("#auth-btn").classList.add("hidden");
      $("#auth-email").classList.remove("hidden");
      $("#auth-email").textContent = u.email;
      $("#logout-btn").classList.remove("hidden");
      $("#logout-btn").textContent = t(DATA.ui.logout);
    } else {
      $("#auth-btn").classList.remove("hidden");
      $("#auth-btn").textContent = t(DATA.ui.signIn);
      $("#auth-email").classList.add("hidden");
      $("#auth-email").textContent = "";
      $("#logout-btn").classList.add("hidden");
    }
  }

  function renderAuthModal() {
    const login = authMode === "login";
    $("#auth-title").textContent = t(login ? DATA.ui.authTitleLogin : DATA.ui.authTitleSignup);
    $("#tab-login").textContent = t(DATA.ui.signIn);
    $("#tab-signup").textContent = t(DATA.ui.signUp);
    $("#tab-login").classList.toggle("active", login);
    $("#tab-signup").classList.toggle("active", !login);
    $("#lbl-email").textContent = t(DATA.ui.emailLabel);
    $("#lbl-password").textContent = t(DATA.ui.passwordLabel);
    $("#auth-submit").textContent = t(login ? DATA.ui.authSubmitLogin : DATA.ui.authSubmitSignup);
  }

  function openAuth(mode) {
    authMode = mode || "login";
    $("#auth-msg").textContent = "";
    $("#auth-email-input").value = "";
    $("#auth-password-input").value = "";
    renderAuthModal();
    $("#auth-modal").classList.remove("hidden");
  }

  function closeAuth() {
    $("#auth-modal").classList.add("hidden");
  }

  function authErrorText(code) {
    const map = {
      email_taken: DATA.ui.authEmailTaken,
      invalid_credentials: DATA.ui.authInvalidCredentials,
      password_too_short: DATA.ui.authPasswordTooShort,
      invalid_email: DATA.ui.authInvalidEmail,
      not_your_report: DATA.ui.authNotYourReport
    };
    return t(map[code] || DATA.ui.authServerError);
  }

  function submitAuth() {
    const email = $("#auth-email-input").value.trim();
    const password = $("#auth-password-input").value;
    const path = authMode === "login" ? "/api/auth/login" : "/api/auth/signup";
    apiFetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
      .then((r) => r.json())
      .then((j) => {
        if (j && j.ok) {
          state.auth.token = j.token;
          state.auth.user = j.user;
          try { localStorage.setItem("hp_token", j.token); } catch (e) {}
          closeAuth();
          renderAuth();
        } else {
          $("#auth-msg").textContent = authErrorText(j && j.error);
        }
      })
      .catch(() => { $("#auth-msg").textContent = t(DATA.ui.authServerError); });
  }

  function doLogout() {
    const tok = state.auth.token;
    state.auth.token = null;
    state.auth.user = null;
    try {
      localStorage.removeItem("hp_token");
      localStorage.removeItem("hp_resultId");
    } catch (e) {}
    renderAuth();
    if (tok) apiFetch("/api/auth/logout", { method: "POST" }).catch(() => {});
  }

  /* ---------- share ---------- */
  function shareResult() {
    const p = state.result.primary;
    const text = [
      "Historical Persona — " + t(DATA.ui.brand),
      t(p.names) + " · " + t(p.epithet),
      window.location.href.split("?")[0]
    ].join("\n");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(flashCopied).catch(() => fallbackCopy(text));
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
    btn.textContent = t(DATA.ui.copied);
    setTimeout(() => { btn.textContent = old; }, 1400);
  }

  /* ---------- reset ---------- */
  function resetQuiz() {
    state.idx = 0;
    state.answers = [];
    state.result = null;
    show("home");
    renderHome();
  }

  /* ---------- init ---------- */
  function init() {
    try {
      if (localStorage.getItem(UNLOCK_KEY) === "1") state.unlocked = true;
    } catch (e) {}

    let savedResultId = null;
    try { savedResultId = localStorage.getItem("hp_resultId"); } catch (e) {}
    if (savedResultId) restorePaidAccess(savedResultId);

    applyLang();
    renderHome();
    show("home");

    let savedToken = null;
    try { savedToken = localStorage.getItem("hp_token"); } catch (e) {}
    if (savedToken) {
      state.auth.token = savedToken;
      apiFetch("/api/auth/me")
        .then((r) => r.json())
        .then((j) => {
          if (j && j.ok && j.user) {
            state.auth.user = j.user;
          } else {
            state.auth.token = null;
            try { localStorage.removeItem("hp_token"); } catch (e) {}
          }
          renderAuth();
        })
        .catch(() => { state.auth.token = null; renderAuth(); });
    } else {
      renderAuth();
    }

    $("#begin-btn").addEventListener("click", () => {
      state.idx = 0;
      state.answers = [];
      show("quiz");
      renderQuiz();
    });
    ["a", "b", "c", "d"].forEach((letter) => {
      $("#opt-" + letter).addEventListener("click", () => choose(letter));
    });
    $("#quiz-back").addEventListener("click", () => {
      if (state.idx > 0) { state.idx -= 1; renderQuiz(); }
    });

    $("#lang-en").addEventListener("click", () => { state.lang = "en"; applyLang(); rerenderCurrent(); });
    $("#lang-ar").addEventListener("click", () => { state.lang = "ar"; applyLang(); rerenderCurrent(); });

    $("#unlock-btn").addEventListener("click", startPayment);
    $("#completed-payment").addEventListener("click", refreshAccess);
    $("#demo-link").addEventListener("click", (e) => {
      e.preventDefault();
      $("#demo-box").classList.toggle("hidden");
    });
    $("#unlock-code-btn").addEventListener("click", tryDemoCode);
    $("#code-input").addEventListener("keydown", (e) => {
      if (e.key === "Enter") tryDemoCode();
    });

    $("#auth-btn").addEventListener("click", () => openAuth("login"));
    $("#logout-btn").addEventListener("click", doLogout);
    $("#auth-close").addEventListener("click", closeAuth);
    $("#tab-login").addEventListener("click", () => openAuth("login"));
    $("#tab-signup").addEventListener("click", () => openAuth("signup"));
    $("#auth-submit").addEventListener("click", submitAuth);
    $("#auth-password-input").addEventListener("keydown", (e) => {
      if (e.key === "Enter") submitAuth();
    });

    $("#share-btn").addEventListener("click", shareResult);
    $("#retake-btn").addEventListener("click", resetQuiz);
  }

  function rerenderCurrent() {
    const homeHidden = $("#screen-home").classList.contains("hidden");
    const quizHidden = $("#screen-quiz").classList.contains("hidden");
    if (!homeHidden) renderHome();
    else if (!quizHidden) renderQuiz();
    else if (state.result) renderResult();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
