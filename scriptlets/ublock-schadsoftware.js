var __ADSILENCE_KARTE = "{\n\"abogadosrosarinos.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"fetch\",\"_0x\",\"/^data:/\"]},\n{\"name\":\"abort-on-property-write\",\"args\":[\"ai_front\"]}\n],\n\"adrissa.com.co\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"americansoda.co.uk\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"aptisweb.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"fetch\",\"_0x\",\"/^data:/\"]},\n{\"name\":\"abort-on-property-write\",\"args\":[\"ai_front\"]}\n],\n\"avene-hebergement.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"fetch\",\"_0x\",\"/^data:/\"]},\n{\"name\":\"abort-on-property-write\",\"args\":[\"ai_front\"]}\n],\n\"caesarjaco.co.id\":[\n{\"name\":\"abort-current-script\",\"args\":[\"fetch\",\"_0x\",\"/^data:/\"]},\n{\"name\":\"abort-on-property-write\",\"args\":[\"ai_front\"]}\n],\n\"casteloforte.com.br\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"centerfabril.com.br\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"crimsonav.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"atob\",\"new Function(atob(\"]}\n],\n\"forqueen.cz\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"https-xhamster.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"fetch\",\"_0x\",\"/^data:/\"]},\n{\"name\":\"abort-on-property-write\",\"args\":[\"ai_front\"]}\n],\n\"igualdad.iaa.csic.es\":[\n{\"name\":\"abort-current-script\",\"args\":[\"String.prototype.toLowerCase\",\"Contract\"]}\n],\n\"joinusonline.net\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"jollibee.com.vn\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"kitapsan.com.tr\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"mebelinovdom.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"ngsingleissues.nationalgeographic.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"atob\",\"new Function(atob(\"]}\n],\n\"ojworld.it\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"ondigitalocean.app\":[\n{\"name\":\"prevent-addEventListener\",\"args\":[\"mousemove\",\"loadSecret\"]}\n],\n\"qualityrental.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"rapidkil.com.au\":[\n{\"name\":\"abort-on-stack-trace\",\"args\":[\"XMLHttpRequest\",\"/wp-content\"]}\n],\n\"skybap.shop\":[\n{\"name\":\"abort-current-script\",\"args\":[\"fetch\",\"_0x\",\"/^data:/\"]},\n{\"name\":\"abort-on-property-write\",\"args\":[\"ai_front\"]}\n],\n\"sport.elwatannews.com\":[\n{\"name\":\"abort-on-stack-trace\",\"args\":[\"Array.prototype.indexOf\",\"isWin\"]}\n],\n\"strand-co.com\":[\n{\"name\":\"abort-current-script\",\"args\":[\"document.createElement\",\".onerror\"]}\n],\n\"szaszmotorshop.hu\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"tvojstyl.sk\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"up-shop.org\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"web.core.windows.net\":[\n{\"name\":\"prevent-addEventListener\",\"args\":[\"beforeunload\",\"/[Ww]orker/\"]}\n],\n\"weightlossdiet.top\":[\n{\"name\":\"abort-current-script\",\"args\":[\"open\",\"executeCode\"]}\n],\n\"www.cambe.pr.gov.br\":[\n{\"name\":\"noeval\",\"args\":[\"tigervip2\"]}\n],\n\"yairalon.com.br\":[\n{\"name\":\"abort-current-script\",\"args\":[\"WebSocket\",\"event.data\"]}\n],\n\"z13.web.core.windows.net\":[\n{\"name\":\"prevent-addEventListener\",\"args\":[\"DOMContentLoaded\",\"fullscreenEnabled\"]}\n]\n}";
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
      function ab(o, i) {
        if (o === null || typeof o !== "object") return;
        const name = teile[i];
        if (i === teile.length - 1) {
          if (name === "[]" && Array.isArray(o)) {
            o.length = 0;
            return;
          }
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
      rc: "remove-class"
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
