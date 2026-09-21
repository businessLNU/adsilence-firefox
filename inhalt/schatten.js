"use strict";
(() => {
  // src/gemeinsam/fingerabdruck-kanal.ts
  var EREIGNIS_KOSMETIK = "adsilence:kosmetik";

  // src/inhalt/tarnkappe.ts
  var registriert = /* @__PURE__ */ new WeakMap();
  var huellenTexte = /* @__PURE__ */ new Set();
  var nativTextJeName = /* @__PURE__ */ new Map();
  var hole = WeakMap.prototype.get;
  var rufe = Reflect.apply;
  var eingebaut = false;
  function tarne(huelle, echt) {
    if (!eingebaut) baueEin();
    try {
      Object.defineProperty(huelle, "name", { value: echt.name, configurable: true });
      Object.defineProperty(huelle, "length", { value: echt.length, configurable: true });
    } catch {
    }
    try {
      registriert.set(huelle, echt);
    } catch {
    }
    merke(huelle, echt);
  }
  var nativesToString = null;
  function merke(huelle, echt) {
    try {
      if (!nativesToString) return;
      huellenTexte.add(rufe(nativesToString, huelle, []));
      nativTextJeName.set(echt.name, rufe(nativesToString, echt, []));
    } catch {
    }
  }
  function baueEin() {
    eingebaut = true;
    try {
      const desk = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
      if (!desk || typeof desk.value !== "function") return;
      const echt = desk.value;
      nativesToString = echt;
      const huelle = {
        toString() {
          const ziel = rufe(hole, registriert, [this]);
          if (ziel) return rufe(echt, ziel, []);
          const text = rufe(echt, this, []);
          if (huellenTexte.has(text)) {
            const nativ = nativTextJeName.get(this.name);
            if (nativ) return nativ;
          }
          return text;
        }
      }.toString;
      registriert.set(huelle, echt);
      desk.value = huelle;
      Object.defineProperty(Function.prototype, "toString", desk);
      merke(huelle, echt);
    } catch {
    }
  }

  // src/inhalt/schatten.ts
  var WARTELISTE_MAX = 2e3;
  (function start() {
    try {
      let baueBlatt2 = function() {
        try {
          if (typeof CSSStyleSheet !== "function" || !("replaceSync" in CSSStyleSheet.prototype)) return;
          if (!blatt) blatt = new CSSStyleSheet();
          blatt.replaceSync(css);
        } catch {
          blatt = null;
        }
      }, versorge2 = function(root) {
        if (!root || versorgt.has(root)) return;
        try {
          if (blatt && "adoptedStyleSheets" in root) {
            const vorhanden = root.adoptedStyleSheets;
            if (!vorhanden.includes(blatt)) root.adoptedStyleSheets = [...vorhanden, blatt];
            versorgt.add(root);
            return;
          }
        } catch {
        }
        try {
          const style = document.createElement("style");
          style.textContent = css;
          root.appendChild(style);
          versorgt.add(root);
        } catch {
        }
      }, merke3 = function(root) {
        if (css) {
          versorge2(root);
          return;
        }
        if (warteliste && warteliste.length < WARTELISTE_MAX) warteliste.push(root);
      }, beiCss2 = function(text) {
        if (typeof text !== "string" || text.length === 0) return;
        css = css ? `${css}
${text}` : text;
        baueBlatt2();
        const warten = warteliste;
        warteliste = null;
        if (warten) for (const root of warten) versorge2(root);
      };
      var baueBlatt = baueBlatt2, versorge = versorge2, merke2 = merke3, beiCss = beiCss2;
      if (typeof Element === "undefined" || typeof document === "undefined") return;
      const desk = Object.getOwnPropertyDescriptor(Element.prototype, "attachShadow");
      const echt = desk?.value;
      if (!desk || typeof echt !== "function") return;
      let css = "";
      let blatt = null;
      let warteliste = [];
      const versorgt = /* @__PURE__ */ new WeakSet();
      document.addEventListener(
        EREIGNIS_KOSMETIK,
        (e) => {
          try {
            beiCss2(e.detail);
          } catch {
          }
        },
        // `capture`, damit ein `stopPropagation` der Seite nichts abschneidet.
        true
      );
      const huelle = {
        attachShadow(init) {
          const root = echt.call(this, init);
          try {
            merke3(root);
          } catch {
          }
          return root;
        }
      }.attachShadow;
      tarne(huelle, echt);
      desk.value = huelle;
      Object.defineProperty(Element.prototype, "attachShadow", desk);
    } catch {
    }
  })();
})();
