var __ADSILENCE_KARTE = "{\n\"abogadosrosarinos.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"fetch\",\"_0x\",\"/^data:/\"]},\n{\"name\":\"abort-on-property-write\",\"args\":[\"ai_front\"]}\n],\n\"adrissa.com.co\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"americansoda.co.uk\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"aptisweb.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"fetch\",\"_0x\",\"/^data:/\"]},\n{\"name\":\"abort-on-property-write\",\"args\":[\"ai_front\"]}\n],\n\"avene-hebergement.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"fetch\",\"_0x\",\"/^data:/\"]},\n{\"name\":\"abort-on-property-write\",\"args\":[\"ai_front\"]}\n],\n\"caesarjaco.co.id\":[\n{\"name\":\"abort-current-script\",\"args\":[\"fetch\",\"_0x\",\"/^data:/\"]},\n{\"name\":\"abort-on-property-write\",\"args\":[\"ai_front\"]}\n],\n\"casabasics.es\":[\n{\"name\":\"remove-node-text\",\"args\":[\"script\",\"String.fromCharCode\"]}\n],\n\"casteloforte.com.br\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"centerfabril.com.br\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"cizitensports.com\":[\n{\"name\":\"remove-node-text\",\"args\":[\"script\",\"randomUUID\"]}\n],\n\"crimsonav.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"atob\",\"new Function(atob(\"]}\n],\n\"forqueen.cz\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"gemfellowship.org\":[\n{\"name\":\"remove-node-text\",\"args\":[\"script\",\"TextDecoder\"]}\n],\n\"https-xhamster.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"fetch\",\"_0x\",\"/^data:/\"]},\n{\"name\":\"abort-on-property-write\",\"args\":[\"ai_front\"]}\n],\n\"igualdad.iaa.csic.es\":[\n{\"name\":\"abort-current-script\",\"args\":[\"String.prototype.toLowerCase\",\"Contract\"]}\n],\n\"joinusonline.net\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"jollibee.com.vn\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"kitapsan.com.tr\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"longhall.consulting\":[\n{\"name\":\"remove-node-text\",\"args\":[\"script\",\"/document\\\\.currentScript\\\\.remove|0x0/\"]}\n],\n\"mebelinovdom.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"ngsingleissues.nationalgeographic.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"atob\",\"new Function(atob(\"]}\n],\n\"ojworld.it\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"ondigitalocean.app\":[\n{\"name\":\"prevent-addEventListener\",\"args\":[\"mousemove\",\"loadSecret\"]}\n],\n\"qualityrental.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"rapidkil.com.au\":[\n{\"name\":\"abort-on-stack-trace\",\"args\":[\"XMLHttpRequest\",\"/wp-content\"]}\n],\n\"skybap.shop\":[\n{\"name\":\"abort-current-script\",\"args\":[\"fetch\",\"_0x\",\"/^data:/\"]},\n{\"name\":\"abort-on-property-write\",\"args\":[\"ai_front\"]}\n],\n\"sport.elwatannews.com\":[\n{\"name\":\"abort-on-stack-trace\",\"args\":[\"Array.prototype.indexOf\",\"isWin\"]}\n],\n\"strand-co.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"document.createElement\",\".onerror\"]}\n],\n\"szaszmotorshop.hu\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"tvojstyl.sk\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"up-shop.org\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"web.core.windows.net\":[\n{\"name\":\"prevent-addEventListener\",\"args\":[\"beforeunload\",\"/[Ww]orker/\"]}\n],\n\"weightlossdiet.top\":[\n{\"name\":\"abort-current-script\",\"args\":[\"open\",\"executeCode\"]}\n],\n\"www.cambe.pr.gov.br\":[\n{\"name\":\"noeval\",\"args\":[\"tigervip2\"]}\n],\n\"yairalon.com.br\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"z13.web.core.windows.net\":[\n{\"name\":\"prevent-addEventListener\",\"args\":[\"DOMContentLoaded\",\"fullscreenEnabled\"]}\n]\n}";
"use strict";
(() => {
  // src/scriptlets/bibliothek.ts
  function scriptletLoader(eintraege) {
    const VORSATZ = "AdSilence-Abbruch-";
    const KENNUNG = VORSATZ + Math.random().toString(36).slice(2);
    const w = globalThis;
    const MERKER = "__adsilenceScriptlets";
    const erledigt = w[MERKER] ?? /* @__PURE__ */ new Set();
    w[MERKER] = erledigt;
    function abbruch() {
      throw new ReferenceError(KENNUNG);
    }
    if (!erledigt.has("#lauscher")) {
      erledigt.add("#lauscher");
      try {
        globalThis.addEventListener(
          "error",
          (ev) => {
            const text = typeof ev.message === "string" ? ev.message : "";
            const grund = ev.error;
            const inGrund = grund !== void 0 && grund !== null && typeof grund.message === "string" && grund.message.indexOf(VORSATZ) !== -1;
            if (text.indexOf(VORSATZ) !== -1 || inGrund) {
              ev.stopImmediatePropagation();
              ev.preventDefault();
            }
          },
          true
        );
      } catch {
      }
    }
    function konstante(text) {
      if (text === "true") return true;
      if (text === "false") return false;
      if (text === "null") return null;
      if (text === "undefined" || text === "") return void 0;
      if (text === "noopFunc") return function() {
      };
      if (text === "trueFunc") return function() {
        return true;
      };
      if (text === "falseFunc") return function() {
        return false;
      };
      if (text === "emptyArr") return [];
      if (text === "emptyObj") return {};
      if (text === "noopPromiseResolve") return function() {
        return Promise.resolve();
      };
      if (/^-?\d+$/.test(text)) {
        const zahl = parseInt(text, 10);
        return Math.abs(zahl) <= 32767 ? zahl : void 0;
      }
      if (text.length <= 100) return text;
      return void 0;
    }
    function fallen(pfad, beiLesen, beiSchreiben) {
      const teile = pfad.split(".");
      function anlegen(wurzel, ab) {
        const name = teile[ab];
        const letztes = ab === teile.length - 1;
        if (!letztes) {
          const vorhanden = wurzel[name];
          if (vorhanden !== void 0 && vorhanden !== null && (typeof vorhanden === "object" || typeof vorhanden === "function")) {
            anlegen(vorhanden, ab + 1);
            return;
          }
          let wert2 = vorhanden;
          Object.defineProperty(wurzel, name, {
            configurable: true,
            enumerable: true,
            get() {
              return wert2;
            },
            set(neu) {
              wert2 = neu;
              if (neu !== null && (typeof neu === "object" || typeof neu === "function")) anlegen(neu, ab + 1);
            }
          });
          return;
        }
        const beschreibung = Object.getOwnPropertyDescriptor(wurzel, name);
        if (beschreibung && beschreibung.configurable === false) return;
        let wert = wurzel[name];
        Object.defineProperty(wurzel, name, {
          configurable: true,
          enumerable: beschreibung ? beschreibung.enumerable !== false : true,
          get() {
            return beiLesen ? beiLesen(wert) : wert;
          },
          set(neu) {
            wert = beiSchreiben ? beiSchreiben(neu) : neu;
          }
        });
      }
      anlegen(w, 0);
    }
    function passt(text, muster) {
      if (!muster) return true;
      if (muster.length > 2 && muster.charAt(0) === "/" && muster.charAt(muster.length - 1) === "/") {
        try {
          return new RegExp(muster.slice(1, -1)).test(text);
        } catch {
          return false;
        }
      }
      return text.indexOf(muster) !== -1;
    }
    function verneint(muster) {
      return muster.charAt(0) === "!" ? { muster: muster.slice(1), negiert: true } : { muster, negiert: false };
    }
    function alsText(x) {
      try {
        return String(x);
      } catch {
        return "";
      }
    }
    function timerFalle(name, muster, verzoegerung) {
      const original = w[name];
      if (typeof original !== "function") return;
      const m = verneint(muster);
      const soll = verzoegerung ? parseInt(verzoegerung, 10) : NaN;
      w[name] = function(cb, ms, ...rest) {
        const textTrifft = passt(alsText(cb), m.muster) !== m.negiert;
        const zeitTrifft = Number.isNaN(soll) || Number(ms) === soll;
        if (textTrifft && zeitTrifft) {
          return original.call(this, function() {
          }, 2147483647);
        }
        return original.call(this, cb, ms, ...rest);
      };
    }
    function loesche(obj, pfad) {
      const teile = pfad.split(".");
      let geaendert = false;
      function ab(o, i) {
        if (o === null || typeof o !== "object") return;
        const name = teile[i];
        if (name === "[-]" && Array.isArray(o)) {
          const rest = teile.slice(i + 1).join(".");
          for (let k = o.length - 1; k >= 0; k -= 1) {
            if (rest === "" || hatPfad(o[k], rest)) {
              o.splice(k, 1);
              geaendert = true;
            }
          }
          return;
        }
        if (i === teile.length - 1) {
          if (name === "[]" && Array.isArray(o)) {
            if (o.length) geaendert = true;
            o.length = 0;
            return;
          }
          if (Object.prototype.hasOwnProperty.call(o, name)) geaendert = true;
          delete o[name];
          return;
        }
        if (name === "[]" && Array.isArray(o)) {
          for (const e of o) ab(e, i + 1);
          return;
        }
        if (name === "*") {
          for (const k of Object.keys(o)) ab(o[k], i + 1);
          return;
        }
        ab(o[name], i + 1);
      }
      ab(obj, 0);
      return geaendert;
    }
    function hatPfad(obj, pfad) {
      let o = obj;
      for (const name of pfad.split(".")) {
        if (o === null || typeof o !== "object" || !(name in o)) return false;
        o = o[name];
      }
      return true;
    }
    function eigenschaften(text) {
      if (text.length > 2 && text.charAt(0) === "/" && text.charAt(text.length - 1) === "/") {
        return [{ feld: "url", muster: text }];
      }
      const paare = [];
      for (const teil of text.split(/\s+/)) {
        if (!teil) continue;
        const i = teil.indexOf(":");
        const feld = i > 0 ? teil.slice(0, i) : "";
        if (feld && /^[a-zA-Z]+$/.test(feld) && teil.slice(i + 1, i + 3) !== "//") {
          paare.push({ feld, muster: teil.slice(i + 1) });
        } else {
          paare.push({ feld: "url", muster: teil === "*" ? "" : teil });
        }
      }
      return paare;
    }
    function trifftAnfrage(paare, werte) {
      if (paare.length === 0) return false;
      for (const paar of paare) {
        const m = verneint(paar.muster);
        if (passt(werte[paar.feld] ?? "", m.muster) === m.negiert) return false;
      }
      return true;
    }
    function rumpfVon(text) {
      if (text === void 0 || text === "" || text === "emptyStr") return "";
      if (text === "emptyObj") return "{}";
      if (text === "emptyArr") return "[]";
      return text;
    }
    function bauAntwort(rumpf, adresse) {
      const Antwort = w.Response;
      if (typeof Antwort === "function") {
        try {
          const r = new Antwort(rumpf, { status: 200, statusText: "OK" });
          try {
            Object.defineProperty(r, "url", { configurable: true, value: adresse });
          } catch {
          }
          return r;
        } catch {
        }
      }
      return {
        ok: true,
        status: 200,
        statusText: "OK",
        url: adresse,
        type: "basic",
        redirected: false,
        headers: { get: function() {
          return null;
        }, has: function() {
          return false;
        } },
        text: function() {
          return Promise.resolve(rumpf);
        },
        json: function() {
          try {
            return Promise.resolve(JSON.parse(rumpf === "" ? "{}" : rumpf));
          } catch {
            return Promise.resolve({});
          }
        },
        arrayBuffer: function() {
          return Promise.resolve(new ArrayBuffer(0));
        },
        clone: function() {
          return bauAntwort(rumpf, adresse);
        }
      };
    }
    function stapel() {
      let text = "";
      try {
        text = alsText(new Error().stack);
      } catch {
        return "";
      }
      const zeilen = [];
      for (const zeile of text.split("\n")) {
        if (zeile.indexOf("-extension://") !== -1) continue;
        zeilen.push(zeile);
      }
      return zeilen.join("\n");
    }
    function babFalle(gross, klein) {
      const wartend = [];
      let geplant = false;
      function melde() {
        const jetzt = wartend.splice(0, wartend.length);
        for (const cb of jetzt) {
          try {
            cb();
          } catch {
          }
        }
      }
      function plane() {
        if (geplant) return;
        geplant = true;
        globalThis.setTimeout(function() {
          geplant = false;
          melde();
        }, 1);
      }
      const attrappe = {};
      function selbst() {
        return attrappe;
      }
      function merke(cb) {
        if (typeof cb === "function") {
          wartend.push(cb);
          plane();
        }
        return attrappe;
      }
      attrappe.setOption = selbst;
      attrappe.setOptions = selbst;
      attrappe.clearEvent = selbst;
      attrappe.emitEvent = function() {
        melde();
        return attrappe;
      };
      attrappe.on = function(erkannt, cb) {
        return erkannt ? attrappe : merke(cb);
      };
      attrappe.onDetected = selbst;
      attrappe.onNotDetected = function(cb) {
        return merke(cb);
      };
      attrappe.check = function() {
        melde();
        return true;
      };
      const bau = function() {
        return attrappe;
      };
      bau.prototype = attrappe;
      fallen(gross, () => bau, () => bau);
      fallen(klein, () => attrappe, () => attrappe);
    }
    const PARSE_ROH = (() => {
      const ablage = "__adsilenceJsonParse";
      if (typeof w[ablage] !== "function") w[ablage] = w.JSON.parse;
      return w[ablage];
    })();
    function regexAus(text, flags, ganz = false) {
      if (text === "") return /^/;
      const m = /^\/(.+)\/([gimsu]*)$/.exec(text);
      if (m) {
        try {
          return new RegExp(m[1], m[2] || void 0);
        } catch {
          return /^/;
        }
      }
      const woertlich = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return new RegExp(ganz ? "^" + woertlich + "$" : woertlich, flags);
    }
    function zusatz(rest) {
      const aus = {};
      for (let i = 0; i + 1 < rest.length; i += 2) aus[rest[i]] = rest[i + 1];
      return aus;
    }
    function trifftProps(props, werte) {
      if (props === "") return true;
      return trifftAnfrage(eigenschaften(props), werte);
    }
    function fetchWerte(a) {
      const werte = { url: "", method: "GET" };
      const quelle = a[0];
      const optionen = a[1];
      if (quelle !== null && typeof quelle === "object" && "url" in quelle) {
        werte["url"] = alsText(quelle.url);
        const m = quelle.method;
        if (m) werte["method"] = alsText(m);
      } else {
        werte["url"] = alsText(quelle);
      }
      if (optionen && typeof optionen === "object" && optionen.method) werte["method"] = alsText(optionen.method);
      return werte;
    }
    function umschreibeFetch(props, aendere) {
      const alt = w.fetch;
      const Antwort = w.Response;
      if (typeof alt !== "function" || typeof Antwort !== "function") return;
      w.fetch = new Proxy(alt, {
        apply(f, dies, a) {
          const versprochen = Reflect.apply(f, dies, a);
          let werte;
          try {
            werte = fetchWerte(a);
          } catch {
            return versprochen;
          }
          if (!trifftProps(props, werte)) return versprochen;
          return versprochen.then((vorher) => {
            const v = vorher;
            if (!v || typeof v.clone !== "function") return vorher;
            let kopie;
            try {
              kopie = v.clone();
            } catch {
              return vorher;
            }
            return kopie.text().then((text) => {
              let neu = null;
              try {
                neu = aendere(text);
              } catch {
                neu = null;
              }
              if (neu === null) return vorher;
              const n = new Antwort(neu, { status: v.status, statusText: v.statusText, headers: v.headers });
              try {
                Object.defineProperties(n, {
                  ok: { value: v.ok },
                  redirected: { value: v.redirected },
                  type: { value: v.type },
                  url: { value: v.url }
                });
              } catch {
              }
              return n;
            }, () => vorher);
          });
        }
      });
    }
    function umschreibeXhr(props, aendereText, aendereObjekt) {
      const Basis = w.XMLHttpRequest;
      if (typeof Basis !== "function") return;
      const merk = /* @__PURE__ */ new WeakMap();
      w.XMLHttpRequest = class extends Basis {
        open(methode, adresse, ...rest) {
          try {
            if (trifftProps(props, { url: alsText(adresse), method: alsText(methode) })) merk.set(this, {});
            else merk.delete(this);
          } catch {
          }
          Basis.prototype.open.call(this, methode, adresse, ...rest);
        }
        get response() {
          const innen = super.response;
          const eintrag = merk.get(this);
          if (!eintrag) return innen;
          const laenge = typeof innen === "string" ? innen.length : void 0;
          if (eintrag.laenge !== laenge) {
            eintrag.fertig = false;
            eintrag.laenge = laenge;
          }
          if (eintrag.fertig) return eintrag.antwort;
          let aus = innen;
          try {
            if (typeof innen === "string") {
              const neu = aendereText(innen);
              if (neu !== null) aus = neu;
            } else if (innen !== null && typeof innen === "object" && aendereObjekt) {
              aendereObjekt(innen);
            }
          } catch {
          }
          if (this.readyState === 4) {
            eintrag.antwort = aus;
            eintrag.fertig = true;
          }
          return aus;
        }
        get responseText() {
          const r = this.response;
          return typeof r === "string" ? r : super.responseText;
        }
      };
    }
    function beschneideText(text, pfade, pflicht) {
      const erstes = text.trimStart().charAt(0);
      if (erstes !== "{" && erstes !== "[") return null;
      let daten;
      try {
        daten = PARSE_ROH(text);
      } catch {
        return null;
      }
      if (pflicht.length && !pflicht.every((p) => hatPfad(daten, p))) return null;
      let geaendert = false;
      for (const p of pfade) if (loesche(daten, p)) geaendert = true;
      return geaendert ? JSON.stringify(daten) : null;
    }
    function ersetzeKnotentext(knoten, musterText, ersatz, rest) {
      const doc = w.document;
      if (!doc) return;
      const knotenRe = regexAus(knoten, "i", true);
      const muster = regexAus(musterText, "gms");
      const extra = zusatz(rest);
      const bedingung = extra["includes"] || extra["condition"];
      const nur = bedingung ? regexAus(bedingung, "ms") : null;
      const ohne = extra["excludes"] ? regexAus(extra["excludes"], "ms") : null;
      let uebrig = extra["sedCount"] ? parseInt(extra["sedCount"], 10) : Number.MAX_SAFE_INTEGER;
      if (isNaN(uebrig)) uebrig = Number.MAX_SAFE_INTEGER;
      const bleibt = Boolean(extra["stay"]);
      const spaeter = extra["quitAfter"] ? parseInt(extra["quitAfter"], 10) || 0 : 0;
      let alsSkript = (t) => t;
      try {
        const tt = w.trustedTypes;
        if (tt && typeof tt.getPropertyType === "function" && tt.getPropertyType("script", "textContent") === "TrustedScript") {
          const richtlinie = tt.createPolicy("adsilence" + Math.random().toString(36).slice(2), { createScript: (t) => t });
          alsSkript = (t) => richtlinie.createScript(t);
        }
      } catch {
      }
      const behandle = (n) => {
        const vorher = alsText(n.textContent ?? "");
        if (nur) {
          nur.lastIndex = 0;
          if (!nur.test(vorher)) return;
        }
        if (ohne) {
          ohne.lastIndex = 0;
          if (ohne.test(vorher)) return;
        }
        muster.lastIndex = 0;
        if (!muster.test(vorher)) return;
        muster.lastIndex = 0;
        const nachher = musterText !== "" ? vorher.replace(muster, ersatz) : ersatz;
        n.textContent = n.nodeName === "SCRIPT" ? alsSkript(nachher) : nachher;
        uebrig -= 1;
      };
      const baum = (wurzel) => {
        const gang = doc.createTreeWalker(wurzel, 1 | 4);
        const aktuell = doc.currentScript;
        for (; ; ) {
          const n = gang.nextNode();
          if (n === null) break;
          if (n === aktuell) continue;
          if (knotenRe.test(n.nodeName)) behandle(n);
          else if (n.nodeName === "TEMPLATE" && n.content) baum(n.content);
          else continue;
          if (uebrig <= 0) break;
        }
      };
      try {
        if (doc.documentElement) baum(doc.documentElement);
      } catch {
      }
      if (uebrig <= 0 && !bleibt) return;
      const Beobachter = w.MutationObserver;
      if (typeof Beobachter !== "function") return;
      const verarbeite = (liste) => {
        for (const m of liste) {
          for (const n of Array.from(m.addedNodes)) {
            if (knotenRe.test(n.nodeName)) behandle(n);
            else if (n.nodeName === "TEMPLATE" && n.content) baum(n.content);
            else continue;
            if (uebrig <= 0 && !bleibt) {
              beobachter.disconnect();
              return;
            }
          }
        }
      };
      const beobachter = new Beobachter(verarbeite);
      const halt = () => {
        try {
          verarbeite(beobachter.takeRecords());
          beobachter.disconnect();
        } catch {
        }
      };
      beobachter.observe(doc, { childList: true, subtree: true });
      if (bleibt) return;
      const beiInteraktiv = () => {
        if (spaeter === 0) halt();
        else globalThis.setTimeout(halt, spaeter);
      };
      if (doc.readyState !== "loading") beiInteraktiv();
      else doc.addEventListener("DOMContentLoaded", beiInteraktiv, { once: true });
    }
    const bibliothek = {
      "abort-on-property-read"(args) {
        if (!args[0]) return;
        fallen(args[0], abbruch, null);
      },
      "abort-on-property-write"(args) {
        if (!args[0]) return;
        fallen(args[0], null, abbruch);
      },
      "abort-current-script"(args) {
        const pfad = args[0];
        if (!pfad) return;
        const muster = args[1] ?? "";
        const pruefe = () => {
          const doc = w.document;
          const skript = doc ? doc.currentScript : null;
          const text = skript && typeof skript.textContent === "string" ? skript.textContent : "";
          if (skript && passt(text, muster)) abbruch();
        };
        fallen(pfad, (aktuell) => {
          pruefe();
          return aktuell;
        }, (v) => {
          pruefe();
          return v;
        });
      },
      "set-constant"(args) {
        const pfad = args[0];
        if (!pfad) return;
        const wert = konstante(args[1] ?? "");
        fallen(pfad, () => wert, () => wert);
      },
      "no-setTimeout-if"(args) {
        timerFalle("setTimeout", args[0] ?? "", args[1] ?? "");
      },
      "no-setInterval-if"(args) {
        timerFalle("setInterval", args[0] ?? "", args[1] ?? "");
      },
      "json-prune"(args) {
        const pfade = (args[0] ?? "").split(/\s+/).filter(Boolean);
        const pflicht = (args[1] ?? "").split(/\s+/).filter(Boolean);
        if (pfade.length === 0) return;
        const beschneide = (wert) => {
          if (pflicht.length && !pflicht.every((p) => hatPfad(wert, p))) return wert;
          for (const p of pfade) loesche(wert, p);
          return wert;
        };
        const JSONx = w.JSON;
        const parseAlt = JSONx.parse;
        JSONx.parse = function(...a) {
          return beschneide(parseAlt.apply(this, a));
        };
        const Antwort = w.Response;
        if (Antwort && Antwort.prototype && typeof Antwort.prototype.json === "function") {
          const jsonAlt = Antwort.prototype.json;
          Antwort.prototype.json = function(...a) {
            return jsonAlt.apply(this, a).then(beschneide);
          };
        }
        const XHR = w.XMLHttpRequest;
        if (XHR && XHR.prototype) {
          for (const feld of ["responseText", "response"]) {
            const b = Object.getOwnPropertyDescriptor(XHR.prototype, feld);
            if (!b || typeof b.get !== "function" || b.configurable === false) continue;
            const leseAlt = b.get;
            Object.defineProperty(XHR.prototype, feld, {
              configurable: true,
              enumerable: b.enumerable !== false,
              get() {
                const roh = leseAlt.call(this);
                if (roh !== null && typeof roh === "object") return beschneide(roh);
                if (typeof roh !== "string" || roh.length === 0) return roh;
                const erstes = roh.charAt(0);
                if (erstes !== "{" && erstes !== "[") return roh;
                try {
                  return JSON.stringify(beschneide(JSON.parse(roh)));
                } catch {
                  return roh;
                }
              }
            });
          }
        }
      },
      "prevent-addEventListener"(args) {
        const typMuster = args[0] ?? "";
        const handlerMuster = args[1] ?? "";
        const Ziel = w.EventTarget;
        if (!Ziel || !Ziel.prototype || typeof Ziel.prototype.addEventListener !== "function") return;
        const alt = Ziel.prototype.addEventListener;
        Ziel.prototype.addEventListener = function(typ, handler, ...rest) {
          if (passt(alsText(typ), typMuster) && passt(alsText(handler), handlerMuster)) return;
          return alt.call(this, typ, handler, ...rest);
        };
      },
      nowebrtc() {
        const nichts = function() {
        };
        const attrappe = function() {
          return {
            createDataChannel: function() {
              return { close: nichts, send: nichts, addEventListener: nichts };
            },
            createOffer: function() {
              return Promise.resolve({});
            },
            createAnswer: function() {
              return Promise.resolve({});
            },
            setLocalDescription: function() {
              return Promise.resolve();
            },
            setRemoteDescription: function() {
              return Promise.resolve();
            },
            addIceCandidate: function() {
              return Promise.resolve();
            },
            addEventListener: nichts,
            removeEventListener: nichts,
            close: nichts
          };
        };
        for (const name of ["RTCPeerConnection", "webkitRTCPeerConnection", "mozRTCPeerConnection"]) {
          if (w[name] !== void 0) {
            try {
              Object.defineProperty(w, name, { configurable: true, writable: true, value: attrappe });
            } catch {
            }
          }
        }
      },
      noeval() {
        try {
          Object.defineProperty(w, "eval", { configurable: true, writable: true, value: function() {
            return void 0;
          } });
        } catch {
        }
      },
      nobab() {
        babFalle("BlockAdBlock", "blockAdBlock");
      },
      nofab() {
        babFalle("FuckAdBlock", "fuckAdBlock");
      },
      "abort-on-stack-trace"(args) {
        const pfad = args[0];
        const muster = args[1] ?? "";
        if (!pfad || !muster) return;
        fallen(pfad, (aktuell) => {
          if (passt(stapel(), muster)) abbruch();
          return aktuell;
        }, null);
      },
      "no-xhr-if"(args) {
        const paare = eigenschaften(args[0] ?? "");
        if (paare.length === 0) return;
        const rumpf = rumpfVon(args[1]);
        const XHR = w.XMLHttpRequest;
        const bau = XHR && XHR.prototype ? XHR.prototype : null;
        if (!bau) return;
        const oeffneAlt = bau.open;
        const sendeAlt = bau.send;
        if (typeof oeffneAlt !== "function" || typeof sendeAlt !== "function") return;
        const MERK = "__adsilenceAnfrage";
        bau.open = function(methode, adresse, ...rest) {
          this[MERK] = { method: alsText(methode), url: alsText(adresse) };
          return oeffneAlt.call(this, methode, adresse, ...rest);
        };
        bau.send = function(...rest) {
          const werte = this[MERK];
          if (!werte || !trifftAnfrage(paare, werte)) return sendeAlt.apply(this, rest);
          const setze = (name, wert) => {
            try {
              Object.defineProperty(this, name, { configurable: true, value: wert });
            } catch {
            }
          };
          setze("readyState", 4);
          setze("status", 200);
          setze("statusText", "OK");
          setze("responseURL", werte.url ?? "");
          setze("responseText", rumpf);
          setze("response", rumpf);
          const ziel = this;
          globalThis.setTimeout(function() {
            for (const typ of ["readystatechange", "load", "loadend"]) {
              try {
                if (ziel.dispatchEvent) ziel.dispatchEvent(new Event(typ));
              } catch {
              }
            }
          }, 1);
          return void 0;
        };
      },
      "no-fetch-if"(args) {
        const paare = eigenschaften(args[0] ?? "");
        if (paare.length === 0) return;
        const rumpf = rumpfVon(args[1]);
        const holeAlt = w.fetch;
        if (typeof holeAlt !== "function") return;
        w.fetch = function(eingabe, ...rest) {
          let adresse = "";
          let methode = "GET";
          try {
            if (typeof eingabe === "string") {
              adresse = eingabe;
            } else if (eingabe !== null && typeof eingabe === "object") {
              const anfrage = eingabe;
              adresse = typeof anfrage.url === "string" ? anfrage.url : alsText(eingabe);
              if (typeof anfrage.method === "string") methode = anfrage.method;
            }
            const init = rest[0];
            if (init !== null && typeof init === "object") {
              const m = init.method;
              if (typeof m === "string") methode = m;
            }
          } catch {
          }
          if (trifftAnfrage(paare, { url: adresse, method: methode })) {
            return Promise.resolve(bauAntwort(rumpf, adresse));
          }
          return holeAlt.call(this, eingabe, ...rest);
        };
      },
      "remove-class"(args) {
        const klassen = (args[0] ?? "").split(/[\s,|]+/).filter(Boolean);
        if (klassen.length === 0) return;
        const wahl = args[1] ?? "";
        const bleibt = (args[2] ?? "").indexOf("stay") !== -1;
        const doc = w.document;
        if (!doc || typeof doc.querySelectorAll !== "function") return;
        const raeume = () => {
          for (const klasse of klassen) {
            let liste = [];
            try {
              liste = Array.prototype.slice.call(
                wahl ? doc.querySelectorAll(wahl) : doc.getElementsByClassName(klasse)
              );
            } catch {
              continue;
            }
            for (const el of liste) {
              const knoten = el;
              try {
                if (knoten.classList) knoten.classList.remove(klasse);
              } catch {
              }
            }
          }
        };
        raeume();
        try {
          doc.addEventListener("DOMContentLoaded", raeume, true);
        } catch {
        }
        const Beobachter = w.MutationObserver;
        if (typeof Beobachter !== "function") return;
        let laeuft = false;
        const beobachter = new Beobachter(function() {
          if (laeuft) return;
          laeuft = true;
          globalThis.setTimeout(function() {
            laeuft = false;
            raeume();
          }, 0);
        });
        const starte = () => {
          try {
            beobachter.observe(doc.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });
          } catch {
          }
        };
        if (doc.documentElement) starte();
        else try {
          doc.addEventListener("DOMContentLoaded", starte, true);
        } catch {
        }
        if (!bleibt) globalThis.setTimeout(function() {
          try {
            beobachter.disconnect();
          } catch {
          }
        }, 15e3);
      },
      /*
       * ── Antworten umschreiben, BEVOR die Seite sie liest ────────────────────
       *
       * Nachgebaut nach uBlock Origin (GPL-3.0, wie AdSilence), weil YouTube
       * seit 2025 genau darauf antwortet: Ein Blocker, der die Werbeanfragen
       * abweist, die Werbeplaetze in der Player-Antwort aber stehen laesst, wird
       * erkannt — „Werbeblocker sind auf YouTube nicht erlaubt". GEMESSEN am
       * 26.09.2026: Die YouTube-Regeln aus uBlocks Schnellkorrekturen brauchten
       * sieben Scriptlets, die es hier nicht gab; unser Paket liess sie beim Bau
       * fallen. Diese hier kommen nur aus vertrauenswuerdigen Listen
       * (`brauchtVertrauen()` in src/engine/scriptlets.ts).
       */
      "trusted-replace-fetch-response"(args) {
        const roh = args[0] ?? "";
        if (roh === "") return;
        const muster = regexAus(roh === "*" ? ".*" : roh);
        const ersatz = args[1] ?? "";
        const props = args[2] ?? "";
        const extra = zusatz(args.slice(3));
        const nur = extra["includes"] ? regexAus(extra["includes"]) : null;
        umschreibeFetch(props, (text) => {
          if (nur) {
            nur.lastIndex = 0;
            if (!nur.test(text)) return null;
          }
          muster.lastIndex = 0;
          const neu = text.replace(muster, ersatz);
          return neu === text ? null : neu;
        });
      },
      "trusted-replace-xhr-response"(args) {
        const roh = args[0] ?? "";
        if (roh === "") return;
        const muster = regexAus(roh === "*" ? ".*" : roh);
        const ersatz = args[1] ?? "";
        const props = args[2] ?? "";
        const extra = zusatz(args.slice(3));
        const nur = extra["includes"] ? regexAus(extra["includes"]) : null;
        umschreibeXhr(props, (text) => {
          if (nur) {
            nur.lastIndex = 0;
            if (!nur.test(text)) return null;
          }
          muster.lastIndex = 0;
          const neu = text.replace(muster, ersatz);
          return neu === text ? null : neu;
        });
      },
      "json-prune-fetch-response"(args) {
        const pfade = (args[0] ?? "").split(/\s+/).filter(Boolean);
        const pflicht = (args[1] ?? "").split(/\s+/).filter(Boolean);
        const extra = zusatz(args.slice(2));
        if (pfade.length === 0) return;
        umschreibeFetch(extra["propsToMatch"] ?? "", (text) => beschneideText(text, pfade, pflicht));
      },
      "json-prune-xhr-response"(args) {
        const pfade = (args[0] ?? "").split(/\s+/).filter(Boolean);
        const pflicht = (args[1] ?? "").split(/\s+/).filter(Boolean);
        const extra = zusatz(args.slice(2));
        if (pfade.length === 0) return;
        umschreibeXhr(extra["propsToMatch"] ?? "", (text) => beschneideText(text, pfade, pflicht), (obj) => {
          if (pflicht.length && !pflicht.every((p) => hatPfad(obj, p))) return false;
          let geaendert = false;
          for (const p of pfade) if (loesche(obj, p)) geaendert = true;
          return geaendert;
        });
      },
      /*
       * Die Umgehung ueber einen leeren Rahmen: Eine Seite haengt ein
       * `about:blank`-iframe an und holt sich dort ein UNBERUEHRTES `fetch` oder
       * `JSON.parse` — an allen Scriptlets oben vorbei. Nach dem Anhaengen
       * bekommt der Rahmen deshalb unsere Fassung.
       */
      "trusted-prevent-dom-bypass"(args) {
        const methode = args[0] ?? "";
        const ziel = args[1] ?? "";
        if (methode === "") return;
        const kette2 = methode.split(".");
        const name = kette2.pop();
        let traeger = w;
        for (const glied of kette2) traeger = traeger == null ? void 0 : traeger[glied];
        if (traeger == null) return;
        const t = traeger;
        const alt = t[name];
        if (typeof alt !== "function") return;
        const Element = w.HTMLElement;
        t[name] = new Proxy(alt, {
          apply(f, dies, a) {
            const ergebnis = Reflect.apply(f, dies, a);
            for (const el of a) {
              try {
                if (!Element || !(el instanceof Element)) continue;
                const fenster = el.contentWindow;
                if (!fenster || alsText(fenster) !== "[object Window]") continue;
                const adresse = fenster["location"].href;
                if (adresse !== "about:blank" && adresse !== w.location.href) continue;
                if (ziel === "") {
                  Object.defineProperty(el, "contentWindow", { value: w });
                  continue;
                }
                const glieder = ziel.split(".");
                const letztes = glieder.pop();
                let ich = w;
                let es = fenster;
                for (const g of glieder) {
                  ich = ich[g];
                  es = es[g];
                }
                es[letztes] = ich[letztes];
              } catch {
              }
            }
            return ergebnis;
          }
        });
      },
      /*
       * Timer beschleunigen: Wartet die Seite `verzoegerung` Millisekunden auf
       * einen Rueckruf, der zum Muster passt, wird die Wartezeit mit `faktor`
       * multipliziert (0,001 bis 50). uBlocks `nano-setTimeout-booster`.
       */
      "nano-setTimeout-booster"(args) {
        const muster = regexAus(args[0] ?? "");
        let verzoegerung = (args[1] ?? "") !== "*" ? parseInt(args[1] ?? "", 10) : -1;
        if (isNaN(verzoegerung) || !isFinite(verzoegerung)) verzoegerung = 1e3;
        let faktor = parseFloat(args[2] ?? "");
        faktor = !isNaN(faktor) && isFinite(faktor) ? Math.min(Math.max(faktor, 1e-3), 50) : 0.05;
        const alt = w.setTimeout;
        if (typeof alt !== "function") return;
        w.setTimeout = new Proxy(alt, {
          apply(f, dies, a) {
            try {
              if ((verzoegerung === -1 || a[1] === verzoegerung) && muster.test(alsText(a[0]))) {
                a[1] = a[1] * faktor;
              }
            } catch {
            }
            return Reflect.apply(f, dies, a);
          }
        });
      },
      "remove-node-text"(args) {
        ersetzeKnotentext(args[0] ?? "", "", "", ["includes", args[1] ?? "", ...args.slice(2)]);
      },
      "trusted-replace-node-text"(args) {
        ersetzeKnotentext(args[0] ?? "", args[1] ?? "", args[2] ?? "", args.slice(3));
      }
    };
    const kuerzel = {
      aopr: "abort-on-property-read",
      aopw: "abort-on-property-write",
      acs: "abort-current-script",
      set: "set-constant",
      nostif: "no-setTimeout-if",
      nosiif: "no-setInterval-if",
      aeld: "prevent-addEventListener",
      aost: "abort-on-stack-trace",
      "prevent-xhr": "no-xhr-if",
      "prevent-fetch": "no-fetch-if",
      rc: "remove-class",
      "nano-stb": "nano-setTimeout-booster",
      rmnt: "remove-node-text",
      rpnt: "trusted-replace-node-text",
      "trusted-rpnt": "trusted-replace-node-text",
      "replace-node-text": "trusted-replace-node-text"
    };
    for (const eintrag of eintraege) {
      try {
        if (!eintrag || typeof eintrag.name !== "string") continue;
        const name = (kuerzel[eintrag.name] ?? eintrag.name).replace(/\.js$/, "");
        const args = Array.isArray(eintrag.args) ? eintrag.args.map(alsText) : [];
        const schluessel = name + " " + args.join(" ");
        if (erledigt.has(schluessel)) continue;
        const fn = bibliothek[name];
        if (!fn) continue;
        erledigt.add(schluessel);
        fn(args);
      } catch {
      }
    }
  }

  // src/scriptlets/inhalt.ts
  function kette(host) {
    const teile = host.split(".").filter(Boolean);
    const raus = [];
    for (let i = 0; i < teile.length - 1; i += 1) raus.push(teile.slice(i).join("."));
    if (raus.length === 0 && host) raus.push(host);
    return raus;
  }
  (function() {
    const roh = typeof __ADSILENCE_KARTE === "string" ? __ADSILENCE_KARTE : "";
    if (!roh) return;
    const host = location.hostname.toLowerCase();
    if (!host) return;
    const hosts = kette(host);
    let treffer = false;
    for (const h of hosts) {
      if (roh.indexOf('"' + h + '"') !== -1) {
        treffer = true;
        break;
      }
    }
    if (!treffer) return;
    let karte;
    try {
      karte = JSON.parse(roh);
    } catch {
      return;
    }
    const gesehen = {};
    const eintraege = [];
    for (const h of hosts) {
      const liste = karte[h];
      if (!liste || !liste.length) continue;
      for (const e of liste) {
        if (!e || typeof e.name !== "string") continue;
        const args = Array.isArray(e.args) ? e.args.map(String) : [];
        const schluessel = e.name + " " + args.join(" ");
        if (gesehen[schluessel]) continue;
        gesehen[schluessel] = true;
        eintraege.push({ name: e.name, args });
      }
    }
    if (eintraege.length === 0) return;
    try {
      scriptletLoader(eintraege);
    } catch {
    }
  })();
})();
