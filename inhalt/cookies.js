"use strict";
(() => {
  // src/gemeinsam/browser.ts
  var global = globalThis;
  var api = global.browser ?? global.chrome;

  // src/gemeinsam/cookies.ts
  var WERKZEUGE = [
    {
      name: "OneTrust",
      erkennung: "#onetrust-banner-sdk, #onetrust-consent-sdk",
      ablehnen: ["#onetrust-reject-all-handler", ".ot-pc-refuse-all-handler", "#onetrust-pc-btn-handler + button"],
      annehmen: ["#onetrust-accept-btn-handler", ".onetrust-close-btn-handler.banner-close-button"]
    },
    {
      name: "Cookiebot",
      erkennung: "#CybotCookiebotDialog",
      ablehnen: ["#CybotCookiebotDialogBodyButtonDecline", "#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll"],
      annehmen: ["#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll", "#CybotCookiebotDialogBodyButtonAccept"]
    },
    {
      name: "Didomi",
      erkennung: "#didomi-host, .didomi-popup-container",
      ablehnen: ["#didomi-notice-disagree-button", ".didomi-continue-without-agreeing"],
      annehmen: ["#didomi-notice-agree-button"]
    },
    {
      name: "Usercentrics",
      erkennung: '#usercentrics-root, [data-testid="uc-default-banner"]',
      ablehnen: ['[data-testid="uc-deny-all-button"]'],
      annehmen: ['[data-testid="uc-accept-all-button"]']
    },
    {
      name: "Quantcast",
      erkennung: ".qc-cmp2-container, .qc-cmp-cleanslate",
      ablehnen: ['.qc-cmp2-summary-buttons > button[mode="secondary"]'],
      annehmen: ['.qc-cmp2-summary-buttons > button[mode="primary"]']
    },
    {
      name: "Sourcepoint",
      erkennung: ".sp_message_container, .message-container",
      ablehnen: [".sp_choice_type_13", 'button[title="Reject All"]'],
      annehmen: [".sp_choice_type_11", 'button[title="Accept All"]', 'button[title="Alle akzeptieren"]']
    },
    {
      name: "Borlabs Cookie",
      erkennung: "#BorlabsCookieBox, #brlbs-cookie-box",
      ablehnen: ["a.borlabs-cookie-refuse", '[data-borlabs-cookie-handle="refuse"]'],
      annehmen: ["a.borlabs-cookie-btn-accept-all", '[data-borlabs-cookie-handle="accept-all"]']
    },
    {
      name: "Complianz",
      erkennung: "#cmplz-cookiebanner-container",
      ablehnen: [".cmplz-deny"],
      annehmen: [".cmplz-accept"]
    },
    {
      name: "CookieYes",
      erkennung: ".cky-consent-container, #cookie-law-info-bar",
      ablehnen: [".cky-btn-reject", "#cookie_action_close_header_reject"],
      annehmen: [".cky-btn-accept", "#cookie_action_close_header"]
    },
    {
      name: "Klaro",
      erkennung: ".klaro .cookie-notice, #klaro",
      ablehnen: [".cn-decline", ".cm-btn-decline"],
      annehmen: [".cn-buttons .cm-btn-success", ".cookie-notice .cm-btn-accept-all"]
    },
    {
      name: "Osano",
      erkennung: ".osano-cm-window, .osano-cm-dialog",
      ablehnen: [".osano-cm-denyAll"],
      annehmen: [".osano-cm-accept-all"]
    },
    {
      name: "TrustArc",
      erkennung: "#truste-consent-track, .truste_box_overlay",
      ablehnen: ["#truste-consent-required"],
      annehmen: ["#truste-consent-button"]
    },
    {
      name: "Consent Manager",
      erkennung: "#cmpbox, .cmpboxBG",
      ablehnen: [".cmpboxbtnno", "#cmpbntnotxt"],
      annehmen: [".cmpboxbtnyes", "#cmpbntyestxt"]
    },
    {
      name: "Iubenda",
      erkennung: "#iubenda-cs-banner",
      ablehnen: [".iubenda-cs-reject-btn"],
      annehmen: [".iubenda-cs-accept-btn"]
    },
    {
      name: "Cookie Script",
      erkennung: "#cookiescript_injected",
      ablehnen: ["#cookiescript_reject"],
      annehmen: ["#cookiescript_accept"]
    },
    {
      name: "Termly",
      erkennung: "#termly-code-snippet-support",
      ablehnen: ['[data-tid="banner-decline"]'],
      annehmen: ['[data-tid="banner-accept"]']
    }
  ];
  function findeKnopf(antwort, gibtEs, sichtbar) {
    for (const w of WERKZEUGE) {
      if (!gibtEs(w.erkennung)) continue;
      for (const selektor of antwort === "annehmen" ? w.annehmen : w.ablehnen) {
        if (sichtbar(selektor)) return { werkzeug: w.name, selektor };
      }
    }
    return null;
  }

  // src/inhalt/cookies.ts
  var FRIST_MS = 12e3;
  var MAX_KLICKS = 2;
  function klickbar(element) {
    const el = element;
    if (!el.isConnected) return false;
    if (el.disabled) return false;
    if (el.getAttribute("aria-disabled") === "true") return false;
    return true;
  }
  function ersterKlickbarer(selektor) {
    let treffer;
    try {
      treffer = document.querySelectorAll(selektor);
    } catch {
      return null;
    }
    for (const el of treffer) if (klickbar(el)) return el;
    return null;
  }
  var geklickt = 0;
  function versuche(antwort) {
    const fund = findeKnopf(
      antwort,
      (selektor) => {
        try {
          return document.querySelector(selektor) !== null;
        } catch {
          return false;
        }
      },
      (selektor) => ersterKlickbarer(selektor) !== null
    );
    if (!fund) return false;
    const knopf = ersterKlickbarer(fund.selektor);
    if (!knopf) return false;
    knopf.click();
    geklickt += 1;
    return true;
  }
  async function starte() {
    let antwort = null;
    try {
      const ergebnis = await api.runtime.sendMessage({ typ: "cookies.antwort" });
      if (!ergebnis || !("ok" in ergebnis) || !ergebnis.ok) return;
      antwort = ergebnis.antwort;
    } catch {
      return;
    }
    if (!antwort) return;
    const wache = new MutationObserver(() => void pruefen());
    let takt = null;
    function beenden() {
      wache.disconnect();
      if (takt !== null) clearInterval(takt);
      takt = null;
    }
    function pruefen() {
      if (versuche(antwort) && geklickt >= MAX_KLICKS) beenden();
    }
    pruefen();
    if (geklickt >= MAX_KLICKS) return;
    wache.observe(document.documentElement, { childList: true, subtree: true });
    takt = setInterval(pruefen, 250);
    setTimeout(beenden, FRIST_MS);
  }
  void starte();
})();
