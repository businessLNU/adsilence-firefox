"use strict";
(() => {
  // src/gemeinsam/fingerabdruck-kanal.ts
  var EREIGNIS_FINGERABDRUCK = "adsilence:fingerabdruck";
  var HANDSCHLAG_FRAGE = "adsilence:handschlag";
  var HANDSCHLAG_ANTWORT = "adsilence:handschlag-antwort";
  var HANDSCHLAG_FERTIG = "adsilence:handschlag-fertig";
  function dekodiere(geheimnis, detail) {
    if (typeof detail !== "string" || geheimnis.length === 0) return null;
    const praefix = `${geheimnis}:`;
    if (detail.length <= praefix.length || detail.slice(0, praefix.length) !== praefix) return null;
    const rest = detail.slice(praefix.length);
    if (rest === "0") return { an: false, token: null };
    if (rest === "1") return { an: true, token: null };
    if (rest.length > 2 && rest.charCodeAt(0) === 49 && rest.charCodeAt(1) === 58) return { an: true, token: rest.slice(2) };
    return null;
  }

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

  // src/inhalt/fingerabdruck-kern.ts
  var PIXEL_BUDGET = 262144;
  var PROBEN_BUDGET = 1e6;
  var KOPIE_MAX_PIXEL = 16777216;
  var WEBGL_KOPIE_MAX_PIXEL = 1048576;
  function hash32(text) {
    let h = 2166136261;
    for (let i = 0; i < text.length; i++) {
      h ^= text.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  function fmix(h) {
    h ^= h >>> 16;
    h = Math.imul(h, 2246822507);
    h ^= h >>> 13;
    h = Math.imul(h, 3266489909);
    h ^= h >>> 16;
    return h >>> 0;
  }
  var C1 = 3432918353;
  var C2 = 461845907;
  function misch(seed, x, y) {
    let h = seed | 0;
    h = fmix(h ^ Math.imul(x | 0, C1));
    h = fmix(h ^ Math.imul(y | 0, C2));
    return h >>> 0;
  }
  function seedAus(token, host) {
    return hash32(`${token}|${host}`);
  }
  function zeilenschritt(gesamtPixel) {
    const k = Math.ceil(gesamtPixel / PIXEL_BUDGET);
    return k > 1 ? k : 1;
  }
  function probenschritt(gesamtProben) {
    const k = Math.ceil(gesamtProben / PROBEN_BUDGET);
    return k > 1 ? k : 1;
  }
  function istReinfarbe(r, g, b) {
    return (r === 0 || r === 255) && (g === 0 || g === 255) && (b === 0 || b === 255);
  }
  function verrauschePixel(daten, breite, hoehe, seed, gesamtPixel, x0 = 0, y0 = 0) {
    const k = zeilenschritt(gesamtPixel);
    for (let y = 0; y < hoehe; y++) {
      const ay = y0 + y;
      if (k > 1 && ay % k !== 0) continue;
      let i = y * breite * 4;
      for (let x = 0; x < breite; x++, i += 4) {
        if (daten[i + 3] !== 255) continue;
        if (istReinfarbe(daten[i], daten[i + 1], daten[i + 2])) continue;
        const m = misch(seed, x0 + x, ay);
        daten[i] = daten[i] & 254 | m & 1;
        daten[i + 1] = daten[i + 1] & 254 | m >>> 1 & 1;
        daten[i + 2] = daten[i + 2] & 254 | m >>> 2 & 1;
      }
    }
  }
  function verrauscheBild(bild, seed, gesamtPixel, x0 = 0, y0 = 0) {
    if (!(bild.data instanceof Uint8ClampedArray)) return false;
    verrauschePixel(bild.data, bild.width, bild.height, seed, gesamtPixel, x0, y0);
    return true;
  }
  function normiereBereich(sx, sy, sw, sh) {
    const x = Math.trunc(Number(sx)) | 0;
    const y = Math.trunc(Number(sy)) | 0;
    const w = Math.trunc(Number(sw)) | 0;
    const h = Math.trunc(Number(sh)) | 0;
    return { x0: w < 0 ? x + w : x, y0: h < 0 ? y + h : y };
  }
  function darfKopieren(breite, hoehe, grenze = KOPIE_MAX_PIXEL) {
    return breite > 0 && hoehe > 0 && breite * hoehe <= grenze;
  }
  var PROBEN_DELTA = 1e-7;
  function verrauscheProben(daten, seed, start2 = 0, gesamtProben = start2 + daten.length) {
    const k = probenschritt(gesamtProben);
    const erster = k > 1 ? (k - start2 % k) % k : 0;
    for (let index = erster; index < daten.length; index += k) {
      const wert = daten[index];
      if (wert === 0) continue;
      const i = start2 + index;
      const delta = misch(seed, i, 0) / 4294967295 * 2 - 1;
      daten[index] = wert + delta * PROBEN_DELTA;
    }
  }
  var KERNE_WERTE = [2, 4, 8];
  var KERNE_STROM = 1262834254;
  var PLUGIN_STROM = 1347179847;
  function kerneAus(seed) {
    return KERNE_WERTE[misch(seed, 0, KERNE_STROM) % KERNE_WERTE.length];
  }
  var VERBOTENE_PLUGIN_BEGRIFFE = ["pdf", "flash", "java", "silverlight", "quicktime", "shockwave", "vlc", "media", "widevine"];
  var VERBOTENE_TEILWOERTER = [
    // Gewalt, Sexuelles, Koerper
    "nazi",
    "rape",
    "anal",
    "penis",
    "vagina",
    "vulva",
    "semen",
    "pedo",
    "puta",
    "pute",
    "pene",
    "boner",
    "sado",
    "labia",
    "tumor",
    "gulag",
    "satan",
    "tote",
    "neger",
    "negro",
    "niga",
    "nigo",
    "fuk",
    "kut",
    "lul",
    "pik",
    // Kindersprache
    "kaka",
    "pipi",
    "popo",
    "pupu",
    // Politik, Religion
    "putin",
    "lenin",
    "koran",
    "bibel",
    "obama",
    "biden",
    "modi",
    // Marken
    "kodak",
    "sonos",
    "lenovo",
    "zotero",
    "nokia",
    "nike",
    "puma",
    "bose",
    "sega",
    "roku",
    "vivo",
    "moto",
    "lego",
    "nero",
    "nivea",
    "duden",
    "zara",
    "mango",
    "fila",
    "tesa",
    "adobe",
    "opera"
  ];
  var KONSONANTEN = "bdfgklmnprstvz";
  var VOKALE = "aeiou";
  var WORT_MIN = 5;
  var WORT_LAENGEN = 3;
  var PLUGIN_VERSUCHE = 16;
  function pseudowort(seed, kanal) {
    const laenge = WORT_MIN + misch(seed, kanal, PLUGIN_STROM) % WORT_LAENGEN;
    let wort = "";
    for (let i = 0; i < laenge; i++) {
      const m = misch(seed, kanal, PLUGIN_STROM + 1 + i);
      wort += i % 2 === 0 ? KONSONANTEN[m % KONSONANTEN.length] : VOKALE[m % VOKALE.length];
    }
    return wort;
  }
  function enthaeltVerbotenes(wort) {
    for (const begriff of VERBOTENE_PLUGIN_BEGRIFFE) if (wort.includes(begriff)) return true;
    for (const teil of VERBOTENE_TEILWOERTER) if (wort.includes(teil)) return true;
    return false;
  }
  function gross(wort) {
    return wort.charAt(0).toUpperCase() + wort.slice(1);
  }
  function pluginAus(seed) {
    let wort1 = "";
    let wort2 = "";
    for (let versuch = 0; versuch < PLUGIN_VERSUCHE; versuch++) {
      wort1 = pseudowort(seed, versuch * 2);
      wort2 = pseudowort(seed, versuch * 2 + 1);
      if (wort1 !== wort2 && !enthaeltVerbotenes(wort1) && !enthaeltVerbotenes(wort2)) break;
    }
    return {
      name: `${gross(wort1)} ${gross(wort2)}`,
      beschreibung: `${gross(wort1)} ${gross(wort2)} Plugin`,
      datei: `${wort1}-${wort2}.plugin`,
      mimeTyp: `application/x-${wort1}-${wort2}`,
      endung: wort1
    };
  }

  // src/inhalt/fingerabdruck.ts
  var SPEICHER_GB = 8;
  var WEBGL_TYPEN = /* @__PURE__ */ new Set(["webgl", "webgl2", "experimental-webgl", "experimental-webgl2"]);
  (function start() {
    try {
      let zufall2 = function() {
        try {
          if (zufallsquelle) {
            const a = new Uint32Array(1);
            zufallsquelle(a);
            return a[0];
          }
        } catch {
        }
        return Math.random() * 4294967296 >>> 0;
      }, holeSeed2 = function() {
        if (seed === null) seed = zufall2();
        return seed;
      }, nebenSeed2 = function() {
        if (seed !== null) return seed;
        nebenVorlaeufig = true;
        return zufall2();
      }, eintrag2 = function(canvas) {
        let b = buch.get(canvas);
        if (!b) {
          b = { typ: null, text: false };
          buch.set(canvas, b);
        }
        return b;
      }, eigenerHost2 = function() {
        try {
          const p = location.protocol;
          const h = location.hostname;
          if (h && (p === "http:" || p === "https:")) return h.toLowerCase();
        } catch {
        }
        try {
          const vorfahren = location.ancestorOrigins;
          if (vorfahren && vorfahren.length > 0) {
            const h = new URL(vorfahren[0]).hostname;
            if (h) return h.toLowerCase();
          }
        } catch {
        }
        try {
          if (parent !== window) {
            const h = parent.location.hostname;
            if (h) return h.toLowerCase();
          }
        } catch {
        }
        return "";
      }, einmalStrings2 = function(a, positionen) {
        let kopie = null;
        for (const i of positionen) {
          if (i >= a.length) continue;
          const v = a[i];
          if (typeof v === "object" && v !== null || typeof v === "function") {
            if (!kopie) kopie = a.slice();
            kopie[i] = `${v}`;
          }
        }
        return kopie ?? a;
      }, einmalZahlen2 = function(a, positionen) {
        let kopie = null;
        for (const i of positionen) {
          if (i >= a.length) continue;
          const v = a[i];
          if (typeof v === "object" && v !== null || typeof v === "function") {
            if (!kopie) kopie = a.slice();
            kopie[i] = +v;
          }
        }
        return kopie ?? a;
      }, ersetzeMethode2 = function(ziel, bau) {
        try {
          const desk = Object.getOwnPropertyDescriptor(ziel.obj, ziel.name);
          if (!desk || typeof desk.value !== "function") return null;
          const echt = desk.value;
          const huelle = bau(echt);
          tarne(huelle, echt);
          desk.value = huelle;
          Object.defineProperty(ziel.obj, ziel.name, desk);
          return { echt, huelle };
        } catch {
          return null;
        }
      }, ersetzeGetter2 = function(ziel, ab) {
        try {
          const desk = Object.getOwnPropertyDescriptor(ziel.obj, ziel.name);
          if (!desk || typeof desk.get !== "function") return;
          const echt = desk.get;
          const traeger = {
            get [ziel.name]() {
              const echterWert = rufe2(echt, this, []);
              if (!aktiv) return echterWert;
              try {
                return ab(echterWert);
              } catch {
                return echterWert;
              }
            }
          };
          const huelle = Object.getOwnPropertyDescriptor(traeger, ziel.name).get;
          tarne(huelle, echt);
          desk.get = huelle;
          Object.defineProperty(ziel.obj, ziel.name, desk);
        } catch {
        }
      }, getter2 = function(obj, name) {
        try {
          if (!obj) return null;
          const desk = Object.getOwnPropertyDescriptor(obj, name);
          return desk && typeof desk.get === "function" ? desk.get : null;
        } catch {
          return null;
        }
      }, setter2 = function(obj, name) {
        try {
          if (!obj) return null;
          const desk = Object.getOwnPropertyDescriptor(obj, name);
          return desk && typeof desk.set === "function" ? desk.set : null;
        } catch {
          return null;
        }
      }, methode2 = function(obj, name) {
        try {
          if (!obj) return null;
          const desk = Object.getOwnPropertyDescriptor(obj, name);
          return desk && typeof desk.value === "function" ? desk.value : null;
        } catch {
          return null;
        }
      }, familie2 = function(klasse) {
        const p = klasse?.prototype;
        return {
          breite: getter2(p, "width"),
          hoehe: getter2(p, "height"),
          setzeBreite: setter2(p, "width"),
          setzeHoehe: setter2(p, "height"),
          getContext: null
        };
      }, masse2 = function(f, canvas) {
        if (!f.breite || !f.hoehe) return null;
        const breite = rufe2(f.breite, canvas, []);
        const hoehe = rufe2(f.hoehe, canvas, []);
        return typeof breite === "number" && typeof hoehe === "number" ? { breite, hoehe } : null;
      }, huelleGetContext2 = function(f, klasse) {
        if (!klasse?.prototype) return;
        f.getContext = ersetzeMethode2(
          { obj: klasse.prototype, name: "getContext" },
          (echt) => ({
            getContext(...a) {
              const ctx = rufe2(echt, this, a);
              try {
                if (aktiv && ctx && typeof this === "object" && this !== null) {
                  const b = eintrag2(this);
                  if (b.typ === null) b.typ = typeof a[0] === "string" ? a[0] : "unbekannt";
                }
              } catch {
              }
              return ctx;
            }
          }).getContext
        )?.echt ?? null;
      }, huelleText2 = function(klasse) {
        const p = klasse?.prototype;
        if (!p) return;
        const holeCanvas = getter2(p, "canvas");
        if (!holeCanvas) return;
        for (const name of ["fillText", "strokeText"]) {
          ersetzeMethode2({ obj: p, name }, (echt) => {
            const traeger = {
              [name](...a) {
                const r = rufe2(echt, this, a);
                try {
                  if (aktiv) {
                    const c = rufe2(holeCanvas, this, []);
                    if (c) eintrag2(c).text = true;
                  }
                } catch {
                }
                return r;
              }
            };
            return traeger[name];
          });
        }
      }, huelleGetImageData2 = function(klasse, f) {
        const p = klasse?.prototype;
        if (!p) return;
        const holeCanvas = getter2(p, "canvas");
        if (!holeCanvas) return;
        ersetzeMethode2(
          { obj: p, name: "getImageData" },
          (echt) => ({
            getImageData(...a) {
              const args = einmalZahlen2(a, BEREICH);
              const bild = rufe2(echt, this, args);
              try {
                if (!aktiv) return bild;
                const c = rufe2(holeCanvas, this, []);
                const b = c ? buch.get(c) : void 0;
                if (!b || !b.text) return bild;
                const m = masse2(f, c);
                if (!m) return bild;
                const { x0, y0 } = normiereBereich(args[0], args[1], args[2], args[3]);
                verrauscheBild(bild, holeSeed2(), m.breite * m.hoehe, x0, y0);
              } catch {
              }
              return bild;
            }
          }).getImageData
        );
      }, setzeMasse2 = function(f, canvas, breite, hoehe) {
        if (f.setzeBreite) rufe2(f.setzeBreite, canvas, [breite]);
        if (f.setzeHoehe) rufe2(f.setzeHoehe, canvas, [hoehe]);
      }, leere2 = function(f, canvas) {
        try {
          setzeMasse2(f, canvas, 0, 0);
        } catch {
        }
      }, webglAttribute2 = function(ctx) {
        for (const k of webglKlassen) {
          if (!k.getContextAttributes) continue;
          let attr;
          try {
            attr = rufe2(k.getContextAttributes, ctx, []);
          } catch {
            continue;
          }
          const alpha = attr?.alpha !== false;
          if (alpha && attr?.premultipliedAlpha === false) return null;
          let colorSpace = "srgb";
          try {
            if (k.farbraum) {
              const f = rufe2(k.farbraum, ctx, []);
              if (typeof f === "string") colorSpace = f;
            }
          } catch {
          }
          return { alpha, colorSpace };
        }
        return null;
      }, verrauschteKopie2 = function(strecke, original, schluesselPraefix) {
        const b = buch.get(original);
        if (!b || b.typ === null) return null;
        const webgl = WEBGL_TYPEN.has(b.typ);
        if (!webgl && (b.typ !== "2d" || !b.text)) return null;
        const f = strecke.f;
        if (!f.getContext || !strecke.drawImage || !strecke.getImageData || !strecke.putImageData) return null;
        const m = masse2(f, original);
        if (!m || !darfKopieren(m.breite, m.hoehe, webgl ? WEBGL_KOPIE_MAX_PIXEL : KOPIE_MAX_PIXEL)) return null;
        const ctxOriginal = rufe2(f.getContext, original, [b.typ]);
        if (!ctxOriginal) return null;
        let alpha = true;
        let colorSpace = "srgb";
        if (webgl) {
          const attr = webglAttribute2(ctxOriginal);
          if (!attr) return null;
          alpha = attr.alpha;
          colorSpace = attr.colorSpace;
        } else if (strecke.getContextAttributes) {
          const attr = rufe2(strecke.getContextAttributes, ctxOriginal, []);
          if (attr) {
            if (typeof attr.alpha === "boolean") alpha = attr.alpha;
            if (typeof attr.colorSpace === "string") colorSpace = attr.colorSpace;
          }
        }
        const schluessel = `${schluesselPraefix}|${alpha}|${colorSpace}`;
        let kopie = arbeitsflaechen.get(schluessel);
        if (!kopie) {
          kopie = strecke.neu(original, m.breite, m.hoehe) ?? void 0;
          if (!kopie) return null;
          arbeitsflaechen.set(schluessel, kopie);
        }
        try {
          setzeMasse2(f, kopie, m.breite, m.hoehe);
          const ctx = rufe2(f.getContext, kopie, ["2d", { alpha, colorSpace, willReadFrequently: true }]);
          if (!ctx) return null;
          const mk = masse2(f, kopie);
          if (!mk || mk.breite !== m.breite || mk.hoehe !== m.hoehe) return null;
          rufe2(strecke.drawImage, ctx, [original, 0, 0]);
          const bild = rufe2(strecke.getImageData, ctx, [0, 0, m.breite, m.hoehe]);
          if (!verrauscheBild(bild, holeSeed2(), m.breite * m.hoehe, 0, 0)) return null;
          rufe2(strecke.putImageData, ctx, [bild, 0, 0]);
          return { kopie, f };
        } catch {
          leere2(f, kopie);
          return null;
        }
      }, huelleExport2 = function(klasse, name, strecke, praefix) {
        const p = klasse?.prototype;
        if (!p) return;
        ersetzeMethode2({ obj: p, name }, (echt) => {
          const traeger = {
            [name](...a) {
              let kopie = null;
              try {
                if (aktiv && typeof this === "object" && this !== null) kopie = verrauschteKopie2(strecke, this, praefix);
              } catch {
                kopie = null;
              }
              if (!kopie) return rufe2(echt, this, a);
              try {
                return rufe2(echt, kopie.kopie, a);
              } finally {
                leere2(kopie.f, kopie.kopie);
              }
            }
          };
          return traeger[name];
        });
      }, erledigte2 = function(buffer) {
        let menge = verrauscht.get(buffer);
        if (!menge) {
          menge = /* @__PURE__ */ new Set();
          verrauscht.set(buffer, menge);
        }
        return menge;
      }, verrauscheKanal2 = function(buffer, kanal) {
        if (!aktiv || !echtGetChannelData || !holeLaenge) return;
        const k = Math.trunc(Number(kanal)) | 0;
        const menge = erledigte2(buffer);
        if (menge.has(k)) return;
        const daten = rufe2(echtGetChannelData, buffer, [k]);
        if (!(daten instanceof Float32Array)) return;
        menge.add(k);
        const laenge = rufe2(holeLaenge, buffer, []);
        verrauscheProben(daten, misch(holeSeed2(), k, laenge), 0, daten.length);
      }, hinterVon2 = function(obj, klasse) {
        if (typeof obj !== "object" || obj === null) return void 0;
        const h = hinter.get(obj);
        return h && h.klasse === klasse ? h : void 0;
      }, alsIndex2 = function(v) {
        const z = Number(v);
        return Number.isFinite(z) ? Math.trunc(z) >>> 0 : 0;
      }, istIndexSchluessel2 = function(k) {
        return typeof k === "string" && /^(0|[1-9][0-9]*)$/.test(k);
      }, definiereWert2 = function(obj, name, value, enumerable) {
        Object.defineProperty(obj, name, { value, writable: false, enumerable, configurable: true });
      }, erfundener2 = function() {
        if (erfundenes !== void 0) return erfundenes;
        erfundenes = null;
        try {
          const pp = PluginK?.prototype;
          const mp = MimeTypeK?.prototype;
          if (!pp || !mp) return null;
          const daten = pluginAus(nebenSeed2());
          const plugin = Object.create(pp);
          const mime = Object.create(mp);
          erfundeneWerte.set(mime, { type: daten.mimeTyp, suffixes: daten.endung, description: daten.beschreibung, enabledPlugin: plugin });
          erfundeneWerte.set(plugin, { name: daten.name, description: daten.beschreibung, filename: daten.datei, length: 1 });
          definiereWert2(plugin, "0", mime, true);
          definiereWert2(plugin, daten.mimeTyp, mime, false);
          hinter.set(plugin, { klasse: pp, echt: null, eintrag: () => mime, name: () => daten.mimeTyp, alle: () => [mime] });
          erfundenes = { daten, plugin, mime };
        } catch {
          erfundenes = null;
        }
        return erfundenes;
      }, huelleBuchGetter2 = function(klasse, namen) {
        const p = klasse?.prototype;
        if (!p) return;
        for (const name of namen) {
          try {
            const desk = Object.getOwnPropertyDescriptor(p, name);
            if (!desk || typeof desk.get !== "function") continue;
            const echt = desk.get;
            const traeger = {
              get [name]() {
                const werte = typeof this === "object" && this !== null ? erfundeneWerte.get(this) : void 0;
                if (werte) return werte[name];
                const h = hinterVon2(this, p);
                const echterWert = rufe2(echt, h?.echt ?? this, []);
                return h && name === "length" ? h.alle().length : echterWert;
              }
            };
            const huelle = Object.getOwnPropertyDescriptor(traeger, name).get;
            tarne(huelle, echt);
            desk.get = huelle;
            Object.defineProperty(p, name, desk);
          } catch {
          }
        }
      }, huelleListe2 = function(klasse) {
        const p = klasse?.prototype;
        if (!p) return null;
        const echtLaenge = getter2(p, "length");
        const echtItem = methode2(p, "item");
        if (!echtLaenge || !echtItem) return null;
        huelleBuchGetter2(klasse, ["length"]);
        ersetzeMethode2({ obj: p, name: "item" }, (echt) => ({
          item(...a) {
            const h = hinterVon2(this, p);
            if (!h) return rufe2(echt, this, a);
            if (a.length === 0) return rufe2(echt, h.echt ?? spender.get(p) ?? this, a);
            const args = einmalZahlen2(a, ERSTES_ARGUMENT);
            const liste = h.alle();
            const i = alsIndex2(args[0]);
            return i < liste.length ? liste[i] : null;
          }
        }).item);
        ersetzeMethode2({ obj: p, name: "namedItem" }, (echt) => ({
          namedItem(...a) {
            const h = hinterVon2(this, p);
            if (!h) return rufe2(echt, this, a);
            if (a.length === 0) return rufe2(echt, h.echt ?? spender.get(p) ?? this, a);
            const args = einmalStrings2(a, ERSTES_ARGUMENT);
            if (args[0] === h.name()) return h.eintrag();
            return h.echt ? rufe2(echt, h.echt, args) : null;
          }
        }).namedItem);
        ersetzeMethode2({ obj: p, name: "refresh" }, (echt) => ({
          refresh(...a) {
            const h = hinterVon2(this, p);
            return rufe2(echt, h?.echt ?? this, a);
          }
        }).refresh);
        const iteratoren = [
          ["values", echtArrayValues],
          ["keys", echtArrayKeys],
          ["entries", echtArrayEntries]
        ];
        for (const [name, arrayMethode] of iteratoren) {
          if (!arrayMethode) continue;
          const ersetzt = ersetzeMethode2({ obj: p, name }, (echt) => {
            const traeger = {
              [name](...a) {
                const h = hinterVon2(this, p);
                if (!h) return rufe2(echt, this, a);
                return rufe2(arrayMethode, h.alle(), []);
              }
            };
            return traeger[name];
          });
          if (name === "values" && ersetzt) {
            try {
              const desk = Object.getOwnPropertyDescriptor(p, Symbol.iterator);
              if (desk && desk.value === ersetzt.echt) {
                desk.value = ersetzt.huelle;
                Object.defineProperty(p, Symbol.iterator, desk);
              }
            } catch {
            }
          }
        }
        ersetzeMethode2({ obj: p, name: "forEach" }, (echt) => ({
          forEach(...a) {
            const h = hinterVon2(this, p);
            if (!h || typeof a[0] !== "function") return rufe2(echt, h?.echt ?? this, a);
            const liste = h.alle();
            for (let i = 0; i < liste.length; i++) rufe2(a[0], a[1], [liste[i], i, this]);
            return void 0;
          }
        }).forEach);
        return { laenge: echtLaenge, item: echtItem };
      }, proxyFuer2 = function(echtListe, nativ, klasse, eintrag3, name) {
        if (typeof echtListe !== "object" || echtListe === null || !nativ) return echtListe;
        const vorhanden = proxies.get(echtListe);
        if (vorhanden) return vorhanden;
        const ziel = echtListe;
        const echteLaenge = () => rufe2(nativ.laenge, ziel, []);
        const alle = () => {
          const n = echteLaenge();
          const aus = [];
          for (let i = 0; i < n; i++) aus.push(rufe2(nativ.item, ziel, [i]));
          aus.push(eintrag3());
          return aus;
        };
        if (echteLaenge() > 0) {
          const erster = rufe2(nativ.item, ziel, [0]);
          if (typeof erster === "object" && erster !== null) {
            const ep = Object.getPrototypeOf(erster);
            if (ep) spender.set(ep, erster);
          }
        }
        const istNeuerIndex = (prop) => typeof prop === "string" && prop === String(echteLaenge());
        const proxy = new Proxy(ziel, {
          get(z, prop) {
            if (istNeuerIndex(prop) || prop === name()) return eintrag3();
            if (prop === "length") return echteLaenge() + 1;
            return Reflect.get(z, prop, z);
          },
          has(z, prop) {
            return istNeuerIndex(prop) || prop === name() || Reflect.has(z, prop);
          },
          ownKeys(z) {
            const echte = Reflect.ownKeys(z);
            const indizes = [];
            const namen = [];
            for (const k of echte) (istIndexSchluessel2(k) ? indizes : namen).push(k);
            const neuerIndex = String(echteLaenge());
            if (!echte.includes(neuerIndex)) indizes.push(neuerIndex);
            if (!echte.includes(name())) namen.push(name());
            return indizes.concat(namen);
          },
          getOwnPropertyDescriptor(z, prop) {
            if (istNeuerIndex(prop)) return { value: eintrag3(), writable: false, enumerable: true, configurable: true };
            if (prop === name()) return { value: eintrag3(), writable: false, enumerable: false, configurable: true };
            return Reflect.getOwnPropertyDescriptor(z, prop);
          },
          /*
           * OHNE DIESE FALLE VERRAET EIN `delete` DEN PROXY. Das Ziel kennt
           * den neuen Index nicht, also meldete das Standardverhalten „schon
           * weg" und gab `true` zurueck - waehrend jeder echte Index `false`
           * gibt (die Eintraege sind nicht loeschbar). GEMESSEN 05.09.2026:
           * `delete navigator.plugins[5]` mit Erweiterung `true`, `[0]`
           * `false`; ohne Erweiterung jeder Index `false`. Eine Zeile
           * JavaScript, die den erfundenen Eintrag findet.
           */
          deleteProperty(z, prop) {
            if (istNeuerIndex(prop) || prop === name()) return false;
            return Reflect.deleteProperty(z, prop);
          }
        });
        hinter.set(proxy, { klasse, echt: ziel, eintrag: eintrag3, name, alle });
        proxies.set(echtListe, proxy);
        return proxy;
      };
      var zufall = zufall2, holeSeed = holeSeed2, nebenSeed = nebenSeed2, eintrag = eintrag2, eigenerHost = eigenerHost2, einmalStrings = einmalStrings2, einmalZahlen = einmalZahlen2, ersetzeMethode = ersetzeMethode2, ersetzeGetter = ersetzeGetter2, getter = getter2, setter = setter2, methode = methode2, familie = familie2, masse = masse2, huelleGetContext = huelleGetContext2, huelleText = huelleText2, huelleGetImageData = huelleGetImageData2, setzeMasse = setzeMasse2, leere = leere2, webglAttribute = webglAttribute2, verrauschteKopie = verrauschteKopie2, huelleExport = huelleExport2, erledigte = erledigte2, verrauscheKanal = verrauscheKanal2, hinterVon = hinterVon2, alsIndex = alsIndex2, istIndexSchluessel = istIndexSchluessel2, definiereWert = definiereWert2, erfundener = erfundener2, huelleBuchGetter = huelleBuchGetter2, huelleListe = huelleListe2, proxyFuer = proxyFuer2;
      if (typeof window === "undefined" || typeof document === "undefined") return;
      const rufe2 = Reflect.apply;
      let aktiv = true;
      let seed = null;
      const buch = /* @__PURE__ */ new WeakMap();
      let kerne;
      let erfundenes;
      let nebenVorlaeufig = false;
      const verrauscht = /* @__PURE__ */ new WeakMap();
      let zufallsquelle = null;
      try {
        const c = crypto;
        const f = c.getRandomValues;
        zufallsquelle = (a) => rufe2(f, c, [a]);
      } catch {
        zufallsquelle = null;
      }
      let geheimnis = null;
      try {
        const beiAntwort = (e) => {
          if (geheimnis !== null) return;
          try {
            const detail = e.detail;
            if (typeof detail !== "string" || detail.length === 0) return;
            geheimnis = detail;
            document.removeEventListener(HANDSCHLAG_ANTWORT, beiAntwort, true);
            document.dispatchEvent(new CustomEvent(HANDSCHLAG_FERTIG));
          } catch {
          }
        };
        document.addEventListener(HANDSCHLAG_ANTWORT, beiAntwort, true);
        document.dispatchEvent(new CustomEvent(HANDSCHLAG_FRAGE));
      } catch {
      }
      try {
        const beiNachricht = (e) => {
          try {
            if (geheimnis === null) return;
            const f = dekodiere(geheimnis, e.detail);
            if (!f) return;
            try {
              e.stopImmediatePropagation();
            } catch {
            }
            window.removeEventListener(EREIGNIS_FINGERABDRUCK, beiNachricht, true);
            if (!f.an) {
              aktiv = false;
              return;
            }
            if (f.token !== null && seed === null) {
              seed = seedAus(f.token, eigenerHost2());
              if (nebenVorlaeufig) {
                nebenVorlaeufig = false;
                kerne = void 0;
                erfundenes = void 0;
              }
            }
          } catch {
          }
        };
        window.addEventListener(EREIGNIS_FINGERABDRUCK, beiNachricht, true);
      } catch {
      }
      const BEREICH = [0, 1, 2, 3];
      const ERSTES_ARGUMENT = [0];
      const ZWEITES_ARGUMENT = [1];
      const g = globalThis;
      const CanvasEl = g["HTMLCanvasElement"];
      const Offscreen = g["OffscreenCanvas"];
      const Ctx2d = g["CanvasRenderingContext2D"];
      const OffCtx2d = g["OffscreenCanvasRenderingContext2D"];
      const Audio = g["AudioBuffer"];
      const Nav = g["Navigator"];
      const elementFamilie = familie2(CanvasEl);
      const offscreenFamilie = familie2(Offscreen);
      huelleGetContext2(elementFamilie, CanvasEl);
      huelleGetContext2(offscreenFamilie, Offscreen);
      huelleText2(Ctx2d);
      huelleText2(OffCtx2d);
      const echtGetContextAttributes2d = methode2(Ctx2d?.prototype, "getContextAttributes");
      const echtDrawImage2d = methode2(Ctx2d?.prototype, "drawImage");
      const echtGetImageData2d = methode2(Ctx2d?.prototype, "getImageData");
      const echtPutImageData2d = methode2(Ctx2d?.prototype, "putImageData");
      const echtGetContextAttributesOff = methode2(OffCtx2d?.prototype, "getContextAttributes");
      const echtDrawImageOff = methode2(OffCtx2d?.prototype, "drawImage");
      const echtGetImageDataOff = methode2(OffCtx2d?.prototype, "getImageData");
      const echtPutImageDataOff = methode2(OffCtx2d?.prototype, "putImageData");
      huelleGetImageData2(Ctx2d, elementFamilie);
      huelleGetImageData2(OffCtx2d, offscreenFamilie);
      const echtCreateElementNS = methode2(g["Document"]?.prototype, "createElementNS");
      let XHTML = null;
      try {
        XHTML = new Image().namespaceURI;
      } catch {
        XHTML = null;
      }
      const OffscreenKonstruktor = Offscreen;
      const arbeitsflaechen = /* @__PURE__ */ new Map();
      const elementStrecke = {
        f: elementFamilie,
        getContextAttributes: echtGetContextAttributes2d,
        drawImage: echtDrawImage2d,
        getImageData: echtGetImageData2d,
        putImageData: echtPutImageData2d,
        neu: (original) => {
          if (!echtCreateElementNS || !XHTML) return null;
          const dok = original.ownerDocument ?? document;
          return rufe2(echtCreateElementNS, dok, [XHTML, "canvas"]);
        }
      };
      const offscreenStrecke = {
        f: offscreenFamilie,
        getContextAttributes: echtGetContextAttributesOff,
        drawImage: echtDrawImageOff,
        getImageData: echtGetImageDataOff,
        putImageData: echtPutImageDataOff,
        neu: (_original, breite, hoehe) => OffscreenKonstruktor ? new OffscreenKonstruktor(breite, hoehe) : null
      };
      const webglKlassen = [g["WebGL2RenderingContext"], g["WebGLRenderingContext"]].map((k) => ({
        getContextAttributes: methode2(k?.prototype, "getContextAttributes"),
        farbraum: getter2(k?.prototype, "drawingBufferColorSpace")
      }));
      huelleExport2(CanvasEl, "toDataURL", elementStrecke, "element");
      huelleExport2(CanvasEl, "toBlob", elementStrecke, "element");
      huelleExport2(Offscreen, "convertToBlob", offscreenStrecke, "offscreen");
      const ap = Audio?.prototype;
      const echtGetChannelData = methode2(ap, "getChannelData");
      const holeLaenge = getter2(ap, "length");
      if (ap) {
        ersetzeMethode2(
          { obj: ap, name: "getChannelData" },
          (echt) => ({
            getChannelData(...a) {
              const args = einmalZahlen2(a, ERSTES_ARGUMENT);
              const daten = rufe2(echt, this, args);
              try {
                if (typeof this === "object" && this !== null) verrauscheKanal2(this, args[0]);
              } catch {
              }
              return daten;
            }
          }).getChannelData
        );
        ersetzeMethode2(
          { obj: ap, name: "copyFromChannel" },
          (echt) => ({
            copyFromChannel(...a) {
              const args = einmalZahlen2(a, ZWEITES_ARGUMENT);
              try {
                if (typeof this === "object" && this !== null) verrauscheKanal2(this, args[1]);
              } catch {
              }
              return rufe2(echt, this, args);
            }
          }).copyFromChannel
        );
        ersetzeMethode2(
          { obj: ap, name: "copyToChannel" },
          (echt) => ({
            copyToChannel(...a) {
              const args = einmalZahlen2(a, ZWEITES_ARGUMENT);
              const r = rufe2(echt, this, args);
              try {
                if (typeof this === "object" && this !== null) erledigte2(this).add(Math.trunc(Number(args[1])) | 0);
              } catch {
              }
              return r;
            }
          }).copyToChannel
        );
      }
      if (Nav?.prototype) {
        ersetzeGetter2({ obj: Nav.prototype, name: "hardwareConcurrency" }, () => {
          if (kerne === void 0) kerne = kerneAus(nebenSeed2());
          return kerne;
        });
        ersetzeGetter2({ obj: Nav.prototype, name: "deviceMemory" }, () => SPEICHER_GB);
      }
      const PluginK = g["Plugin"];
      const MimeTypeK = g["MimeType"];
      const PluginArrayK = g["PluginArray"];
      const MimeTypeArrayK = g["MimeTypeArray"];
      const echtArrayValues = methode2(Array.prototype, "values");
      const echtArrayKeys = methode2(Array.prototype, "keys");
      const echtArrayEntries = methode2(Array.prototype, "entries");
      const hinter = /* @__PURE__ */ new WeakMap();
      const erfundeneWerte = /* @__PURE__ */ new WeakMap();
      const proxies = /* @__PURE__ */ new WeakMap();
      const spender = /* @__PURE__ */ new WeakMap();
      const pluginListe = huelleListe2(PluginArrayK);
      const mimeListe = huelleListe2(MimeTypeArrayK);
      huelleListe2(PluginK);
      huelleBuchGetter2(PluginK, ["name", "description", "filename"]);
      huelleBuchGetter2(MimeTypeK, ["type", "suffixes", "description", "enabledPlugin"]);
      if (Nav?.prototype) {
        ersetzeGetter2({ obj: Nav.prototype, name: "plugins" }, (echtListe) => {
          const e = erfundener2();
          if (!e || !PluginArrayK?.prototype) return echtListe;
          return proxyFuer2(
            echtListe,
            pluginListe,
            PluginArrayK.prototype,
            () => erfundener2()?.plugin ?? e.plugin,
            () => erfundener2()?.daten.name ?? e.daten.name
          );
        });
        ersetzeGetter2({ obj: Nav.prototype, name: "mimeTypes" }, (echtListe) => {
          const e = erfundener2();
          if (!e || !MimeTypeArrayK?.prototype) return echtListe;
          return proxyFuer2(
            echtListe,
            mimeListe,
            MimeTypeArrayK.prototype,
            () => erfundener2()?.mime ?? e.mime,
            () => erfundener2()?.daten.mimeTyp ?? e.daten.mimeTyp
          );
        });
      }
    } catch {
    }
  })();
})();
