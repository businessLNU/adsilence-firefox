"use strict";
(() => {
  // <define:import.meta.env>
  var define_import_meta_env_default = { ADSILENCE_API: "https://adsilence.net", VERSION: "1.0.3", BROWSER: "firefox" };

  // src/gemeinsam/browser.ts
  var global = globalThis;
  var api = global.browser ?? global.chrome;

  // src/gemeinsam/fingerabdruck-kanal.ts
  var EREIGNIS_KOSMETIK = "adsilence:kosmetik";
  var EREIGNIS_FINGERABDRUCK = "adsilence:fingerabdruck";
  var HANDSCHLAG_FRAGE = "adsilence:handschlag";
  var HANDSCHLAG_ANTWORT = "adsilence:handschlag-antwort";
  var HANDSCHLAG_FERTIG = "adsilence:handschlag-fertig";
  function kodiere(geheimnis2, f) {
    if (!f.an) return `${geheimnis2}:0`;
    return typeof f.token === "string" && f.token.length > 0 ? `${geheimnis2}:1:${f.token}` : `${geheimnis2}:1`;
  }

  // src/gemeinsam/konstanten.ts
  var umgebung = define_import_meta_env_default ?? {};
  var API_BASIS = (umgebung.ADSILENCE_API ?? "http://localhost:3000").replace(/\/+$/, "");
  var VERSION = umgebung.VERSION ?? "0.0.0";
  var BROWSER = umgebung.BROWSER ?? "chromium";
  var LISTENPFLEGE_TAKT_MIN = 24 * 60;
  var LISTENPFLEGE_UEBERFAELLIG_MS = 26 * 60 * 60 * 1e3;
  var LISTENPFLEGE_VERALTET_MS = 3 * 24 * 60 * 60 * 1e3;
  var GNADENFRIST_MS = 7 * 24 * 60 * 60 * 1e3;
  var LIZENZ_FRISCH_MS = 60 * 60 * 1e3;
  var KAUF_MAX_MS = 60 * 1e3;
  var VERBINDUNG_MAX_MS = 10 * 60 * 1e3;
  var TOKEN_PUFFER_MS = 30 * 1e3;
  var SELEKTOREN_JE_REGEL = 100;

  // src/inhalt/kosmetik.ts
  var geheimnis = handschlag();
  (function start() {
    const host = eigenerHost();
    if (host === null) return;
    let frage;
    try {
      frage = api.runtime.sendMessage({ typ: "kosmetik", host });
    } catch {
      return;
    }
    frage.then((antwort) => {
      if (antwort) reicheFingerabdruck(antwort.fingerabdruck);
      if (!antwort || antwort.aus) return;
      const spezifisch = Array.isArray(antwort.selektoren) ? antwort.selektoren : [];
      if (spezifisch.length) {
        const css = baueCss(spezifisch);
        if (css) {
          anbringen(css);
          reicheAnHauptwelt(css);
        }
      }
      const textregeln = Array.isArray(antwort.textregeln) ? antwort.textregeln : [];
      if (textregeln.length) starteTextlaeufer(textregeln);
      const listen = Array.isArray(antwort.listen) ? antwort.listen : [];
      if (listen.length) spaeter(() => generischeInDenSchatten(listen));
    }).catch(() => {
    });
  })();
  function eigenerHost() {
    const eigener = location.hostname.toLowerCase();
    if (eigener && (location.protocol === "http:" || location.protocol === "https:")) return eigener;
    try {
      const ahnen = location.ancestorOrigins;
      if (ahnen && ahnen.length > 0) {
        const h = new URL(ahnen[0]).hostname.toLowerCase();
        if (h) return h;
      }
    } catch {
    }
    let eingebettet = false;
    try {
      eingebettet = parent !== window;
      if (eingebettet) {
        const h = parent.location.hostname.toLowerCase();
        if (h) return h;
      }
    } catch {
    }
    return eingebettet ? "" : null;
  }
  function handschlag() {
    const neu = geheimnisErzeugen();
    if (BROWSER === "safari") return neu;
    try {
      const beiFrage = () => {
        try {
          document.dispatchEvent(new CustomEvent(HANDSCHLAG_ANTWORT, { detail: neu }));
        } catch {
        }
      };
      const beiFertig = () => {
        document.removeEventListener(HANDSCHLAG_FRAGE, beiFrage, true);
        document.removeEventListener(HANDSCHLAG_FERTIG, beiFertig, true);
      };
      document.addEventListener(HANDSCHLAG_FRAGE, beiFrage, true);
      document.addEventListener(HANDSCHLAG_FERTIG, beiFertig, true);
      beiFrage();
    } catch {
    }
    return neu;
  }
  function geheimnisErzeugen() {
    try {
      const c = crypto;
      if (typeof c.randomUUID === "function") return c.randomUUID();
      const bytes = new Uint8Array(16);
      c.getRandomValues(bytes);
      let hex = "";
      for (const b of bytes) hex += b.toString(16).padStart(2, "0");
      return hex;
    } catch {
      return `${Math.random().toString(16).slice(2)}${Math.random().toString(16).slice(2)}`;
    }
  }
  function reicheFingerabdruck(f) {
    if (!f || typeof f.an !== "boolean") return;
    const detail = kodiere(geheimnis, { an: f.an, token: typeof f.token === "string" ? f.token : null });
    try {
      document.dispatchEvent(new CustomEvent(EREIGNIS_FINGERABDRUCK, { detail, bubbles: false }));
    } catch {
    }
  }
  function baueCss(selektoren) {
    const teile = [];
    for (let i = 0; i < selektoren.length; i += SELEKTOREN_JE_REGEL) {
      const gruppe = selektoren.slice(i, i + SELEKTOREN_JE_REGEL).filter((s) => typeof s === "string" && s.length > 0 && s.indexOf("{") === -1 && s.indexOf("}") === -1);
      if (gruppe.length) teile.push(`${gruppe.join(",\n")}{display:none!important}`);
    }
    return teile.join("\n");
  }
  function reicheAnHauptwelt(css) {
    try {
      document.dispatchEvent(new CustomEvent(EREIGNIS_KOSMETIK, { detail: css }));
    } catch {
    }
  }
  function spaeter(was) {
    const w = globalThis;
    if (typeof w.requestIdleCallback === "function") w.requestIdleCallback(was, { timeout: 2e3 });
    else setTimeout(was, 300);
  }
  async function generischeInDenSchatten(listen) {
    try {
      if (window.top !== window) return;
    } catch {
      return;
    }
    try {
      const antwort = await api.runtime.sendMessage({ typ: "kosmetik.generisch", listen });
      const css = antwort?.css;
      if (typeof css === "string" && css.length > 0) reicheAnHauptwelt(css);
    } catch {
    }
  }
  function anbringen(css) {
    const wurzel = document.documentElement;
    if (!wurzel) return;
    const style = document.createElement("style");
    style.setAttribute("data-adsilence", "");
    style.textContent = css;
    wurzel.appendChild(style);
    let blatt = null;
    try {
      if (typeof CSSStyleSheet === "function" && "replaceSync" in CSSStyleSheet.prototype) {
        blatt = new CSSStyleSheet();
        blatt.replaceSync(css);
      }
    } catch {
      blatt = null;
    }
    const versorgt = /* @__PURE__ */ new WeakSet();
    function versorge(root) {
      if (versorgt.has(root)) return;
      versorgt.add(root);
      try {
        if (blatt && "adoptedStyleSheets" in root) {
          root.adoptedStyleSheets = [...root.adoptedStyleSheets, blatt];
          return;
        }
      } catch {
      }
      const kopie = document.createElement("style");
      kopie.setAttribute("data-adsilence", "");
      kopie.textContent = css;
      root.appendChild(kopie);
    }
    function pruefe(el) {
      const root = el.shadowRoot;
      if (root) {
        versorge(root);
        beobachte(root);
      }
    }
    function beobachte(ziel) {
      const beobachter = new MutationObserver((eintraege) => {
        for (const eintrag of eintraege) {
          for (const knoten of eintrag.addedNodes) {
            if (knoten.nodeType !== 1) continue;
            const el = knoten;
            pruefe(el);
            if (el.firstElementChild) {
              const alle = el.getElementsByTagName("*");
              for (let i = 0; i < alle.length; i++) pruefe(alle[i]);
            }
          }
        }
      });
      beobachter.observe(ziel, { childList: true, subtree: true });
    }
    beobachte(wurzel);
  }
  function starteTextlaeufer(regeln) {
    const gepruefte = regeln.map((r) => {
      const roh = String(r.text ?? "");
      let treffer;
      if (roh.length > 2 && roh.startsWith("/") && roh.endsWith("/")) {
        try {
          const re = new RegExp(roh.slice(1, -1));
          treffer = (t) => re.test(t);
        } catch {
          return null;
        }
      } else {
        treffer = (t) => t.includes(roh);
      }
      return { wahl: String(r.wahl ?? ""), treffer };
    }).filter((r) => r !== null && r.wahl !== "");
    if (gepruefte.length === 0) return;
    const MERKER = "adsilenceTextregel";
    const laufe = () => {
      for (const regel of gepruefte) {
        let knoten;
        try {
          knoten = document.querySelectorAll(regel.wahl);
        } catch {
          continue;
        }
        for (const el of knoten) {
          const h = el;
          if (h.dataset && h.dataset[MERKER] === "1") continue;
          const text = el.textContent ?? "";
          if (text === "" || !regel.treffer(text)) continue;
          try {
            h.style.setProperty("display", "none", "important");
            if (h.dataset) h.dataset[MERKER] = "1";
          } catch {
          }
        }
      }
    };
    laufe();
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", laufe, { once: true, capture: true });
    }
    const Beobachter = globalThis.MutationObserver;
    if (typeof Beobachter !== "function") return;
    let geplant = false;
    const beobachter = new Beobachter(() => {
      if (geplant) return;
      geplant = true;
      setTimeout(() => {
        geplant = false;
        laufe();
      }, 250);
    });
    const starte = () => {
      try {
        beobachter.observe(document.documentElement, { childList: true, subtree: true });
      } catch {
      }
    };
    if (document.documentElement) starte();
    else document.addEventListener("DOMContentLoaded", starte, { once: true, capture: true });
  }
})();
