// <define:import.meta.env>
var define_import_meta_env_default = { ADSILENCE_API: "https://adsilence.net", VERSION: "1.0.3", BROWSER: "firefox" };

// src/gemeinsam/browser.ts
var global = globalThis;
var api = global.browser ?? global.chrome;

// src/gemeinsam/konstanten.ts
var umgebung = define_import_meta_env_default ?? {};
var API_BASIS = (umgebung.ADSILENCE_API ?? "http://localhost:3000").replace(/\/+$/, "");
var VERSION = umgebung.VERSION ?? "0.0.0";
var BROWSER = umgebung.BROWSER ?? "chromium";
var TARIF_KEY = "premium";
var SAMMELREGEL = "";
var ID_AUSNAHME_VON = 1;
var ID_AUSNAHME_BIS = 1e3;
var PRIORITAET_AUSNAHME = 100;
var ID_EIGENE_VON = 1001;
var BUDGET_EIGENE = 999;
var ID_LISTENPFLEGE_VON = 2e3;
var BUDGET_LISTENPFLEGE = 3e3;
var ALARM_LISTENPFLEGE = "listenpflege";
var LISTENPFLEGE_TAKT_MIN = 24 * 60;
var LISTENPFLEGE_UEBERFAELLIG_MS = 26 * 60 * 60 * 1e3;
var LISTENPFLEGE_VERALTET_MS = 3 * 24 * 60 * 60 * 1e3;
var ALARM_LIZENZ = "lizenz";
var LIZENZ_TAKT_MIN = 360;
var GNADENFRIST_MS = 7 * 24 * 60 * 60 * 1e3;
var LIZENZ_FRISCH_MS = 60 * 60 * 1e3;
var KAUF_TAKT_MS = 3e3;
var KAUF_MAX_MS = 60 * 1e3;
var ALARM_VERBINDUNG = "verbindung";
var VERBINDUNG_TAKT_MS = 3e3;
var VERBINDUNG_MAX_MS = 10 * 60 * 1e3;
var LOCK_SITZUNG = "adsilence-sitzung";
var TOKEN_PUFFER_MS = 30 * 1e3;
var SPEICHER_VERSION = 3;
var ZAHLUNGSHOSTS = [
  "stripe.com",
  "stripe.network",
  "adyen.com",
  "paypal.com",
  "paypalobjects.com",
  "braintreegateway.com"
];
var INHALT_CSS_ID = "adsilence-kosmetik-generisch";
var INHALT_SCRIPTLET_ID = "adsilence-scriptlets";
var MELDUNG_MAX_REGELN = 50;
var MELDUNG_MAX_REGEL_LAENGE = 200;
var MELDUNG_MAX_LISTEN = 20;
var MELDUNG_MAX_KOMMENTAR = 500;
var MELDUNG_MAX_SEITE = 500;
var BADGE_FARBE = "#1a0702";
var LISTEN_VORGABE = [
  { id: "basis", name: "EasyList", premium: false, standard: true },
  { id: "privatsphaere", name: "EasyPrivacy", premium: false, standard: true },
  { id: "hosts", name: "Peter Lowe's List", premium: false, standard: true },
  { id: "tarnung", name: "AdSilence Tarnung", premium: false, standard: true },
  { id: "ublock", name: "uBlock filters", premium: false, standard: true },
  { id: "ublock-privatsphaere", name: "uBlock filters - Privacy", premium: false, standard: true },
  { id: "ublock-schadsoftware", name: "uBlock filters - Badware risks", premium: false, standard: true },
  { id: "urlhaus", name: "Online Malicious URL Blocklist", premium: false, standard: true },
  { id: "heimnetz", name: "Block Outsider Intrusion into LAN", premium: false, standard: true },
  { id: "ublock-eilig", name: "uBlock filters - Quick fixes", premium: false, standard: true },
  { id: "ublock-reparatur", name: "uBlock filters - Unbreak", premium: false, standard: true },
  { id: "antiadblock", name: "Adblock Warning Removal List", premium: false, standard: true },
  { id: "cookies", name: "EasyList Cookie", premium: false, standard: true },
  { id: "laestig", name: "Fanboy's Annoyances", premium: false, standard: true },
  { id: "regional-de", name: "EasyList Germany", premium: false, standard: false, sprache: "de" },
  { id: "regional-fr", name: "Liste FR", premium: false, standard: false, sprache: "fr" },
  { id: "regional-it", name: "EasyList Italy", premium: false, standard: false, sprache: "it" },
  { id: "regional-nl", name: "EasyList Dutch", premium: false, standard: false, sprache: "nl" },
  { id: "regional-es", name: "EasyList Spanish", premium: false, standard: false, sprache: "es" },
  { id: "regional-zh", name: "EasyList China", premium: false, standard: false, sprache: "zh" },
  { id: "regional-ru", name: "RU AdList", premium: false, standard: false, sprache: "ru" },
  { id: "regional-pl", name: "EasyList Polish", premium: false, standard: false, sprache: "pl" },
  { id: "regional-pt", name: "EasyList Portuguese", premium: false, standard: false, sprache: "pt" },
  { id: "regional-ja", name: "ABP Japanese filters", premium: false, standard: false, sprache: "ja" },
  { id: "regional-ko", name: "YousList", premium: false, standard: false, sprache: "ko" },
  { id: "regional-tr", name: "Turkish Filters", premium: false, standard: false, sprache: "tr" },
  { id: "regional-vi", name: "ABPVN List", premium: false, standard: false, sprache: "vi" },
  { id: "regional-id", name: "ABPindo", premium: false, standard: false, sprache: "id" },
  { id: "regional-ar", name: "Liste AR", premium: false, standard: false, sprache: "ar" },
  { id: "regional-sv", name: "Frellwits Swedish Filter", premium: false, standard: false, sprache: "sv" },
  { id: "regional-fa", name: "Adblock Iran", premium: false, standard: false, sprache: "fa" },
  { id: "regional-hi", name: "IndianList", premium: false, standard: false, sprache: "hi" }
];
var BEREICH_JE_LISTE = {
  basis: "werbung",
  ublock: "werbung",
  "ublock-eilig": "werbung",
  tarnung: "werbung",
  antiadblock: "werbung",
  privatsphaere: "privatsphaere",
  "ublock-privatsphaere": "privatsphaere",
  hosts: "privatsphaere",
  "ublock-schadsoftware": "schadsoftware",
  urlhaus: "schadsoftware",
  heimnetz: "schadsoftware",
  cookies: "cookies",
  laestig: "laestiges",
  "ublock-reparatur": "reparatur"
};
var BEREICHE = ["werbung", "privatsphaere", "schadsoftware", "cookies", "laestiges", "reparatur", "regional"];
function bereicheVon(listenIds) {
  const gefunden = /* @__PURE__ */ new Set();
  for (const id of listenIds) {
    if (id.startsWith("regional-")) gefunden.add("regional");
    else if (BEREICH_JE_LISTE[id]) gefunden.add(BEREICH_JE_LISTE[id]);
  }
  return BEREICHE.filter((b) => gefunden.has(b));
}

// src/gemeinsam/speicher.ts
var EINSTELLUNGEN_VORGABE = {
  aktiv: true,
  listen: {},
  sprache: null,
  thema: "system",
  zaehlerBadge: true,
  warnung: true,
  cookieAntwort: "aus",
  listenPflege: true,
  /*
   * AN ab Werk, seit dem 08.09.2026.
   *
   * Der Schalter stand auf AUS, ohne dass irgendwo ein Grund dafuer
   * aufgeschrieben war. Die Folge, GEMESSEN mit
   * `tests/laufzeit/fingerabdruck-diagnose.mjs`: Ein Kunde MIT Premium bekam
   * denselben Canvas-Hash wie ein Browser ganz ohne Erweiterung - und Cover
   * Your Tracks meldete ihm „nearly-unique fingerprint". Er zahlte fuer eine
   * Funktion, die stumm auslieferte.
   *
   * Ein `true` verschenkt hier nichts: `fingerabdruckFuer()` in
   * `hintergrund/kosmetik.ts` verlangt zusaetzlich eine wirksame
   * Premium-Lizenz. Fuer einen freien Nutzer aendert diese Zeile nichts.
   */
  fingerabdruck: true
};
var LOKAL_VORGABE = {
  einstellungen: EINSTELLUNGEN_VORGABE,
  sites: {},
  konto: null,
  kontoHinweis: null,
  lizenz: null,
  eigeneRegeln: "",
  verbindungOffen: null,
  abgleich: { version: 0, aktualisiertAm: null },
  stand: { version: SPEICHER_VERSION },
  listenPflegeStand: null
};
var SITZUNG_VORGABE = {
  sitzung: null,
  listenFehler: null,
  verbindungFehler: null,
  fingerabdruckToken: null
};
async function liesLokal(...schluessel) {
  const roh = await api.storage.local.get(schluessel);
  const ergebnis = {};
  for (const k of schluessel) {
    const wert = roh[k];
    ergebnis[k] = k === "einstellungen" ? { ...EINSTELLUNGEN_VORGABE, ...wert ?? {} } : wert ?? LOKAL_VORGABE[k];
  }
  return ergebnis;
}
async function schreibeLokal(teil) {
  await api.storage.local.set(teil);
}
async function liesSitzung(...schluessel) {
  if (!api.storage.session) {
    const leer = {};
    for (const k of schluessel) leer[k] = SITZUNG_VORGABE[k];
    return leer;
  }
  const roh = await api.storage.session.get(schluessel);
  const ergebnis = {};
  for (const k of schluessel) ergebnis[k] = roh[k] ?? SITZUNG_VORGABE[k];
  return ergebnis;
}
async function schreibeSitzung(teil) {
  if (!api.storage.session) return;
  await api.storage.session.set(teil);
}
async function migriereSpeicher() {
  const roh = await api.storage.local.get(["stand"]);
  const stand = roh.stand;
  const version = typeof stand?.version === "number" ? stand.version : 0;
  if (version >= SPEICHER_VERSION) return;
  const alles = await api.storage.local.get(null);
  const neu = {};
  for (const k of Object.keys(LOKAL_VORGABE)) {
    if (alles[k] === void 0) neu[k] = LOKAL_VORGABE[k];
  }
  let einstellungen = { ...EINSTELLUNGEN_VORGABE, ...alles.einstellungen ?? {} };
  let geaendert = false;
  if (version < 2 && einstellungen.aktiv === false) {
    einstellungen = { ...einstellungen, aktiv: true };
    geaendert = true;
  }
  if (version < 3 && einstellungen.fingerabdruck === false) {
    einstellungen = { ...einstellungen, fingerabdruck: true };
    geaendert = true;
  }
  if (geaendert) neu.einstellungen = einstellungen;
  neu.stand = { version: SPEICHER_VERSION };
  await schreibeLokal(neu);
}

// src/hintergrund/lizenz-regeln.ts
function freiLizenz(jetzt) {
  return {
    tarif: "frei",
    premium: false,
    planKeys: [],
    gueltigBis: null,
    endetZumTermin: false,
    hinweis: null,
    geprueftAm: jetzt
  };
}
function lizenzWirksam(gespeichert, jetzt) {
  if (!gespeichert) return freiLizenz(jetzt);
  if (!gespeichert.premium) return gespeichert;
  const bestaetigungAlt = jetzt - gespeichert.geprueftAm > GNADENFRIST_MS;
  const ablauf = gespeichert.gueltigBis ? Date.parse(gespeichert.gueltigBis) : NaN;
  const abgelaufen = Number.isFinite(ablauf) && jetzt - ablauf > GNADENFRIST_MS;
  if (bestaetigungAlt || abgelaufen) {
    return { ...gespeichert, tarif: "frei", premium: false };
  }
  return gespeichert;
}
function lizenzFrisch(gespeichert, jetzt) {
  return gespeichert !== null && jetzt - gespeichert.geprueftAm < LIZENZ_FRISCH_MS;
}

// src/hintergrund/listenpflege.ts
var ZEIT_MS = 2e4;
function istUeberfaellig(am, jetzt, grenzeMs) {
  if (!am) return true;
  const zeit = Date.parse(am);
  if (!Number.isFinite(zeit)) return true;
  return jetzt - zeit > grenzeMs;
}
async function pflegeNachholen() {
  const { listenPflegeStand } = await liesLokal("listenPflegeStand");
  if (!istUeberfaellig(listenPflegeStand?.am, Date.now(), LISTENPFLEGE_UEBERFAELLIG_MS)) return null;
  return pflegeListen();
}
async function holeDelta() {
  const steuerung = new AbortController();
  const wecker = setTimeout(() => steuerung.abort(), ZEIT_MS);
  try {
    const antwort = await fetch(`${API_BASIS}/api/adsilence/listen/delta`, {
      signal: steuerung.signal,
      credentials: "omit",
      cache: "no-cache"
    });
    if (!antwort.ok) return null;
    const daten = await antwort.json();
    return Array.isArray(daten?.regeln) ? daten : null;
  } catch {
    return null;
  } finally {
    clearTimeout(wecker);
  }
}
async function merkeFehlschlag(grund) {
  const { listenPflegeStand } = await liesLokal("listenPflegeStand");
  if (!listenPflegeStand) return;
  await schreibeLokal({
    listenPflegeStand: { ...listenPflegeStand, fehlend: [grund], fehlgeschlagenAm: (/* @__PURE__ */ new Date()).toISOString() }
  });
}
async function pflegeListen() {
  const { einstellungen, lizenz } = await liesLokal("einstellungen", "lizenz");
  if (!einstellungen.aktiv || !einstellungen.listenPflege) return null;
  if (!lizenzWirksam(lizenz, Date.now()).premium) return null;
  const dnr = api.declarativeNetRequest;
  if (!dnr) return null;
  const delta = await holeDelta();
  if (!delta) {
    await merkeFehlschlag("abruf");
    return { neu: 0, uebergangen: 0, gelesen: [], fehlend: ["abruf"] };
  }
  const passen = delta.regeln.slice(0, BUDGET_LISTENPFLEGE);
  const mitId = passen.map((r, i) => ({ ...r, id: ID_LISTENPFLEGE_VON + i }));
  try {
    const alte = await dnr.getDynamicRules();
    const weg = alte.filter((r) => r.id >= ID_LISTENPFLEGE_VON && r.id < ID_LISTENPFLEGE_VON + BUDGET_LISTENPFLEGE).map((r) => r.id);
    await dnr.updateDynamicRules({ removeRuleIds: weg, addRules: mitId });
  } catch (e) {
    console.warn("[AdSilence] Listenpflege", e);
    await merkeFehlschlag("schreiben");
    return { neu: 0, uebergangen: delta.regeln.length, gelesen: Object.keys(delta.jeListe), fehlend: ["schreiben"] };
  }
  const ergebnis = {
    neu: mitId.length,
    uebergangen: delta.uebergangen + (delta.regeln.length - passen.length),
    gelesen: Object.keys(delta.jeListe),
    fehlend: []
  };
  await schreibeLokal({ listenPflegeStand: { am: (/* @__PURE__ */ new Date()).toISOString(), ...ergebnis } });
  return ergebnis;
}

// src/engine/abp.ts
var TYP_ALIAS = {
  script: "script",
  image: "image",
  stylesheet: "stylesheet",
  css: "stylesheet",
  object: "object",
  xmlhttprequest: "xmlhttprequest",
  xhr: "xmlhttprequest",
  subdocument: "subdocument",
  frame: "subdocument",
  ping: "ping",
  beacon: "ping",
  websocket: "websocket",
  media: "media",
  font: "font",
  other: "other",
  document: "document",
  doc: "document",
  popup: "popup"
};
var KOSMETIK_OPTIONEN = /* @__PURE__ */ new Set([
  "generichide",
  "ghide",
  "elemhide",
  "ehide",
  "specifichide",
  "shide",
  "genericblock"
]);
var LEERE_OPTIONEN = /* @__PURE__ */ new Set(["_", "noop"]);
var OPTIONSLISTE = /^~?[a-z0-9_-]+(=[^,]*)?(,~?[a-z0-9_-]+(=[^,]*)?)*$/i;
function trenneOptionen(text) {
  const stelle = text.lastIndexOf("$");
  if (stelle < 0) return { muster: text, optionen: [] };
  const rest = text.slice(stelle + 1);
  if (!OPTIONSLISTE.test(rest)) return { muster: text, optionen: [] };
  return { muster: text.slice(0, stelle), optionen: rest.split(",") };
}
function leseDomains(wert, trenner) {
  const domains = [];
  const ausgeschlossene = [];
  for (const roh of wert.split(trenner)) {
    const eintrag = roh.trim().toLowerCase();
    if (!eintrag) continue;
    if (eintrag.startsWith("~")) {
      if (eintrag.length > 1) ausgeschlossene.push(eintrag.slice(1));
    } else {
      domains.push(eintrag);
    }
  }
  return { domains, ausgeschlossene };
}
function parseNetz(roh, zeile) {
  const ausnahme = zeile.startsWith("@@");
  const ohneAusnahme = ausnahme ? zeile.slice(2) : zeile;
  const { muster: musterRoh, optionen } = trenneOptionen(ohneAusnahme);
  const regel = {
    typ: "netz",
    roh,
    ausnahme,
    muster: musterRoh,
    regex: null,
    drittanbieter: null,
    domains: [],
    ausgeschlosseneDomains: [],
    typen: [],
    ausgeschlosseneTypen: [],
    wichtig: false,
    matchCase: false,
    kosmetikOptionen: [],
    alleTypen: false,
    attrappe: null,
    fremdeOptionen: []
  };
  if (musterRoh.length > 2 && musterRoh.startsWith("/") && musterRoh.endsWith("/")) {
    regel.regex = musterRoh.slice(1, -1);
    regel.muster = "";
  }
  for (const rohOption of optionen) {
    const gleich = rohOption.indexOf("=");
    const name = (gleich === -1 ? rohOption : rohOption.slice(0, gleich)).trim().toLowerCase();
    const wert = gleich === -1 ? null : rohOption.slice(gleich + 1);
    const negiert = name.startsWith("~");
    const kern = negiert ? name.slice(1) : name;
    if (kern === "third-party" || kern === "3p") {
      regel.drittanbieter = !negiert;
    } else if (kern === "first-party" || kern === "1p") {
      regel.drittanbieter = negiert;
    } else if ((kern === "domain" || kern === "from") && wert !== null && !negiert) {
      const { domains, ausgeschlossene } = leseDomains(wert, "|");
      regel.domains.push(...domains);
      regel.ausgeschlosseneDomains.push(...ausgeschlossene);
    } else if (kern === "important" && !negiert) {
      regel.wichtig = true;
    } else if (kern === "match-case" && !negiert) {
      regel.matchCase = true;
    } else if (kern === "all" && !negiert && wert === null) {
      regel.alleTypen = true;
    } else if (kern in TYP_ALIAS && wert === null) {
      const typ = TYP_ALIAS[kern];
      if (negiert) regel.ausgeschlosseneTypen.push(typ);
      else regel.typen.push(typ);
    } else if (kern === "redirect" && wert !== null && !negiert) {
      regel.attrappe = wert.split(":")[0].trim().toLowerCase();
    } else if (KOSMETIK_OPTIONEN.has(kern) && !negiert) {
      regel.kosmetikOptionen.push(kern);
    } else if (LEERE_OPTIONEN.has(kern)) {
    } else {
      regel.fremdeOptionen.push(kern);
    }
  }
  return regel;
}
function leseScriptletArgumente(inhalt) {
  const teile = [];
  let aktuell = "";
  for (let i = 0; i < inhalt.length; i += 1) {
    const zeichen = inhalt[i];
    if (aktuell.trim() === "" && (zeichen === "'" || zeichen === '"' || zeichen === "`")) {
      let ende = -1;
      for (let j = i + 1; j < inhalt.length; j += 1) {
        if (inhalt[j] !== zeichen) continue;
        const danach = inhalt.slice(j + 1).match(/^\s*(,|$)/);
        if (danach) {
          ende = j;
          break;
        }
      }
      if (ende !== -1) {
        teile.push(inhalt.slice(i + 1, ende));
        const rest = inhalt.slice(ende + 1).match(/^\s*(,|$)/);
        i = ende + rest[0].length;
        aktuell = "";
        if (rest[1] === "") return teile;
        continue;
      }
    }
    if (zeichen === "\\" && inhalt[i + 1] === ",") {
      aktuell += ",";
      i += 1;
    } else if (zeichen === ",") {
      teile.push(aktuell.trim());
      aktuell = "";
    } else {
      aktuell += zeichen;
    }
  }
  teile.push(aktuell.trim());
  return teile;
}
var KOSMETIK = /^([^/|@"!]*?)#(@?)([?$%]{0,2})#(.*)$/;
function parseKosmetik(roh, treffer) {
  const [, domainTeil, ausnahmeZeichen, erweiterung, selektorRoh] = treffer;
  const prozedural = erweiterung === "?";
  if (erweiterung !== "" && !prozedural) return { typ: "unbekannt", roh, grund: "erweiterteKosmetik" };
  const selektor = (prozedural ? selektorRoh.replace(/:-abp-has\(/g, ":has(") : selektorRoh).trim();
  if (selektor === "") return { typ: "unbekannt", roh, grund: "syntax" };
  if (selektor.startsWith("^")) return { typ: "unbekannt", roh, grund: "htmlFilter" };
  const { domains, ausgeschlossene } = leseDomains(domainTeil, ",");
  const ausnahme = ausnahmeZeichen === "@";
  if (selektor.startsWith("+js(")) {
    if (!selektor.endsWith(")")) return { typ: "unbekannt", roh, grund: "syntax" };
    const inhalt = selektor.slice(4, -1).trim();
    const args = inhalt === "" ? [] : leseScriptletArgumente(inhalt);
    const name = (args.shift() ?? "").replace(/\.js$/, "");
    return {
      typ: "scriptlet",
      roh,
      ausnahme,
      domains,
      ausgeschlosseneDomains: ausgeschlossene,
      name,
      args
    };
  }
  return {
    typ: "kosmetik",
    roh,
    ausnahme,
    domains,
    ausgeschlosseneDomains: ausgeschlossene,
    selektor,
    prozedural
  };
}
function parseZeile(zeile) {
  const roh = zeile.replace(/\r$/, "");
  const text = roh.trim();
  if (text === "") return null;
  if (text.startsWith("!")) return null;
  if (text.startsWith("[") && text.endsWith("]")) return null;
  if (text.startsWith("# ") || text === "#") return null;
  const kosmetik = KOSMETIK.exec(text);
  if (kosmetik) return parseKosmetik(roh, kosmetik);
  return parseNetz(roh, text);
}

// src/engine/gruende.ts
function berichtsSchluessel(v) {
  return v.grund === "optionNichtUmsetzbar" && v.option ? v.option : v.grund;
}
function zaehle(ziel, v) {
  const schluessel = berichtsSchluessel(v);
  ziel[schluessel] = (ziel[schluessel] ?? 0) + 1;
}

// src/engine/dnr.ts
var REGEX_MAX_LAENGE = 200;
var MUSTER_MAX_LAENGE = 500;
var REGEX_BUDGET_STANDARD = 100;
var HOSTS_JE_REGEL = 1e3;
var EINZELN_BIS = 10;
var RESSOURCE_ZU_DNR = {
  script: "script",
  image: "image",
  stylesheet: "stylesheet",
  object: "object",
  xmlhttprequest: "xmlhttprequest",
  subdocument: "sub_frame",
  ping: "ping",
  websocket: "websocket",
  media: "media",
  font: "font",
  other: "other",
  document: "main_frame",
  popup: "main_frame"
};
var ALLE_RESSOURCEN = [
  "main_frame",
  "sub_frame",
  "stylesheet",
  "script",
  "image",
  "font",
  "object",
  "xmlhttprequest",
  "ping",
  "media",
  "websocket",
  "other"
];
var DOMAIN = /^[a-z0-9_]([a-z0-9_-]*[a-z0-9_])?(\.[a-z0-9_]([a-z0-9_-]*[a-z0-9_])?)*$/;
var IPV6_LITERAL = /^\[[0-9a-f:]+\]$/;
function domainGueltig(domain) {
  if (domain.length > 253) return false;
  return DOMAIN.test(domain) || IPV6_LITERAL.test(domain);
}
var REGEX_KOSTEN_MAX = 150;
var KOSTEN_PUNKT = 16;
var KOSTEN_JE_BEREICH = 2;
var KOSTEN_KUERZEL = 4;
function bereicheIn(inhalt) {
  let bereiche = 0;
  for (let i = 0; i < inhalt.length; i++) {
    if (inhalt[i] === "\\") {
      i += 1;
      bereiche += 2;
      continue;
    }
    if (inhalt[i + 1] === "-" && i + 2 < inhalt.length) {
      bereiche += 1;
      i += 2;
      continue;
    }
    bereiche += 1;
  }
  return Math.max(1, bereiche);
}
function regexKosten(regex) {
  let kosten = 0;
  let i = 0;
  const offeneGruppen = [];
  while (i < regex.length) {
    const zeichen = regex[i];
    let element = 0;
    if (zeichen === "\\") {
      element = /[wdsWDS]/.test(regex[i + 1] ?? "") ? KOSTEN_KUERZEL : 1;
      i += 2;
    } else if (zeichen === ".") {
      element = KOSTEN_PUNKT;
      i += 1;
    } else if (zeichen === "[") {
      const ende = regex.indexOf("]", i + 1);
      const bis = ende < 0 ? regex.length : ende;
      element = bereicheIn(regex.slice(i + 1, bis)) * KOSTEN_JE_BEREICH;
      i = bis + 1;
    } else if (zeichen === "(") {
      offeneGruppen.push(kosten);
      kosten = 0;
      i += 1;
      if (regex.startsWith("?:", i)) i += 2;
      continue;
    } else if (zeichen === ")") {
      const innen = kosten;
      kosten = offeneGruppen.pop() ?? 0;
      element = innen + 2;
      i += 1;
    } else if (zeichen === "|") {
      kosten += 2;
      i += 1;
      continue;
    } else if (zeichen === "^" || zeichen === "$") {
      i += 1;
      continue;
    } else {
      element = 1;
      i += 1;
    }
    const rest = regex.slice(i);
    const quantor = /^\{(\d+)(,(\d*))?\}/.exec(rest);
    if (quantor) {
      const von = Number(quantor[1]);
      const hatKomma = quantor[2] !== void 0;
      const bis = quantor[3] === "" || quantor[3] === void 0 ? null : Number(quantor[3]);
      const kopien = hatKomma ? bis === null ? von + 1 : bis : von;
      element = element * kopien + 2;
      i += quantor[0].length;
    } else if (rest[0] === "*" || rest[0] === "+") {
      element += 3;
      i += 1;
    } else if (rest[0] === "?") {
      element += 2;
      i += 1;
    }
    kosten += element;
  }
  while (offeneGruppen.length > 0) kosten += offeneGruppen.pop();
  return kosten;
}
function regexTauglich(regex) {
  if (!/^[\x21-\x7e]+$/.test(regex)) return false;
  if (/\(\?[=!]/.test(regex)) return false;
  if (/\(\?<[=!]/.test(regex)) return false;
  if (/\(\?>/.test(regex)) return false;
  if (/\\[1-9]/.test(regex)) return false;
  if (/\\k</.test(regex)) return false;
  try {
    new RegExp(regex);
  } catch {
    return false;
  }
  return true;
}
function verworfen(v) {
  return { ok: false, verwerfung: v };
}
function ohneDoppelte(liste) {
  return Array.from(new Set(liste));
}
var ATTRAPPEN = {
  noopjs: "noop.js",
  "noop.js": "noop.js",
  "noop.txt": "noop.txt",
  nooptext: "noop.txt",
  "noop.html": "noop.html",
  noopframe: "noop.html",
  "noop.css": "noop.css",
  noopcss: "noop.css",
  "1x1.gif": "1x1.gif",
  "1x1-transparent.gif": "1x1.gif",
  "2x2.png": "2x2.png",
  "2x2-transparent.png": "2x2.png",
  "32x32.png": "32x32.png",
  "32x32-transparent.png": "32x32.png",
  "googlesyndication_adsbygoogle.js": "adsbygoogle.js",
  "googlesyndication.com/adsbygoogle.js": "adsbygoogle.js",
  "fuckadblock.js-3.2.0": "fuckadblock.js"
};
var ATTRAPPEN_ORDNER = "/attrappen/";
var REINER_HOST = /^\|\|([A-Za-z0-9._-]+)\^?$/;
function musterZuUrlFilter(musterRoh) {
  let muster = musterRoh.replace(/\*{2,}/g, "*");
  while (muster.startsWith("*")) muster = muster.slice(1);
  while (muster.endsWith("*")) muster = muster.slice(0, -1);
  if (muster === "" || muster === "|" || muster === "||") return { urlFilter: null };
  if (!/^[\x00-\x7f]*$/.test(muster)) return { grund: "nichtAscii" };
  if (!/^[\x21-\x7e]*$/.test(muster)) return { grund: "sonderzeichen" };
  if (muster.length > MUSTER_MAX_LAENGE) return { grund: "zuLang" };
  const anfang = muster.startsWith("||") ? 2 : muster.startsWith("|") ? 1 : 0;
  const ende = muster.endsWith("|") ? muster.length - 1 : muster.length;
  if (ende < anfang) return { grund: "sonderzeichen" };
  if (muster.slice(anfang, ende).includes("|")) return { grund: "sonderzeichen" };
  if (muster.slice(anfang, ende) === "") return { urlFilter: null };
  if (muster.startsWith("||*")) return { urlFilter: muster.slice(2) };
  return { urlFilter: muster };
}
function domainsFuerDnr(regel) {
  const ausgeschlossene = ohneDoppelte(regel.ausgeschlosseneDomains);
  if (!ausgeschlossene.every(domainGueltig)) return { grund: "domainUngueltig" };
  const domains = ohneDoppelte(regel.domains).filter(domainGueltig);
  if (regel.domains.length > 0 && domains.length === 0) return { grund: "domainUngueltig" };
  return { domains, ausgeschlossene };
}
function uebersetzeNetzregel(regel, blocktNavigation = false) {
  if (regel.fremdeOptionen.length > 0) {
    return verworfen({ grund: "optionNichtUmsetzbar", option: regel.fremdeOptionen[0] });
  }
  if (regel.matchCase) return verworfen({ grund: "optionNichtUmsetzbar", option: "match-case" });
  const typen = ohneDoppelte(regel.typen);
  const ausgeschlosseneTypen = ohneDoppelte(regel.ausgeschlosseneTypen);
  const seitenTyp = typen.find((t) => t === "document" || t === "popup");
  if (!regel.ausnahme && seitenTyp) {
    return verworfen({ grund: "optionNichtUmsetzbar", option: seitenTyp });
  }
  if (regel.kosmetikOptionen.length > 0 && typen.length === 0) {
    return verworfen({ grund: "optionNichtUmsetzbar", option: regel.kosmetikOptionen[0] });
  }
  const bedingung = {};
  if (regel.regex !== null) {
    if (regel.regex.length > REGEX_MAX_LAENGE) return verworfen({ grund: "regexZuLang" });
    if (!regexTauglich(regel.regex)) return verworfen({ grund: "regexNichtRe2" });
    if (regexKosten(regel.regex) > REGEX_KOSTEN_MAX) return verworfen({ grund: "regexZuTeuer" });
    bedingung.regexFilter = regel.regex;
    bedingung.isUrlFilterCaseSensitive = false;
  } else {
    const hostTreffer = REINER_HOST.exec(regel.muster);
    const host = hostTreffer ? hostTreffer[1].toLowerCase() : null;
    if (host && host.includes(".") && domainGueltig(host)) {
      bedingung.requestDomains = [host];
    } else {
      const ergebnis = musterZuUrlFilter(regel.muster);
      if ("grund" in ergebnis) return verworfen(ergebnis);
      if (ergebnis.urlFilter !== null) {
        bedingung.urlFilter = ergebnis.urlFilter;
        bedingung.isUrlFilterCaseSensitive = false;
      }
    }
  }
  const herkunft = domainsFuerDnr(regel);
  if ("grund" in herkunft) return verworfen(herkunft);
  if (herkunft.domains.length > 0) bedingung.initiatorDomains = herkunft.domains;
  if (herkunft.ausgeschlossene.length > 0) bedingung.excludedInitiatorDomains = herkunft.ausgeschlossene;
  if (regel.drittanbieter !== null) {
    bedingung.domainType = regel.drittanbieter ? "thirdParty" : "firstParty";
  }
  let aktion;
  if (regel.ausnahme && typen.includes("document")) {
    aktion = "allowAllRequests";
    bedingung.resourceTypes = ["main_frame", "sub_frame"];
  } else {
    aktion = regel.ausnahme ? "allow" : "block";
    const positiv = ohneDoppelte(typen.map((t) => RESSOURCE_ZU_DNR[t]));
    const negativ = ohneDoppelte(ausgeschlosseneTypen.map((t) => RESSOURCE_ZU_DNR[t]));
    if (positiv.length > 0) {
      const uebrig = positiv.filter((t) => !negativ.includes(t));
      if (uebrig.length === 0) return verworfen({ grund: "typenLeer" });
      bedingung.resourceTypes = uebrig;
    } else {
      if (aktion === "block" && regel.alleTypen && blocktNavigation) {
        const alle = ALLE_RESSOURCEN.filter((r) => !negativ.includes(r));
        if (alle.length === 0) return verworfen({ grund: "typenLeer" });
        bedingung.resourceTypes = alle;
      } else {
        const ausgeschlossen = aktion === "block" ? ohneDoppelte(["main_frame", ...negativ]) : negativ;
        if (ausgeschlossen.length > 0) bedingung.excludedResourceTypes = ausgeschlossen;
      }
    }
  }
  if (!bedingungGrenztEin(bedingung)) return verworfen({ grund: "leereBedingung" });
  let priority = regel.ausnahme ? 3 : regel.wichtig ? 2 : 1;
  let aktionsObjekt = { type: aktion };
  if (regel.attrappe !== null) {
    if (regel.ausnahme) return verworfen({ grund: "redirectAnAusnahme" });
    const datei = ATTRAPPEN[regel.attrappe];
    if (datei === void 0) return verworfen({ grund: "redirectUnbekannt", option: regel.attrappe });
    aktionsObjekt = { type: "redirect", redirect: { extensionPath: ATTRAPPEN_ORDNER + datei } };
    priority = 3;
  }
  let klasse;
  if (regel.ausnahme || regel.attrappe !== null) klasse = 1;
  else if (bedingung.requestDomains) {
    const nurHost = !bedingung.initiatorDomains && !bedingung.excludedInitiatorDomains && !bedingung.domainType && !bedingung.resourceTypes && (bedingung.excludedResourceTypes ?? []).length === 1;
    klasse = nurHost ? 2 : 3;
  } else klasse = 4;
  return { ok: true, klasse, regel: { priority, action: aktionsObjekt, condition: bedingung } };
}
function bedingungGrenztEin(b) {
  if (b.urlFilter || b.regexFilter) return true;
  if (b.requestDomains?.length || b.initiatorDomains?.length) return true;
  if (b.resourceTypes?.length && b.domainType) return true;
  return false;
}
function pruefeNetzregel(regel) {
  const ergebnis = uebersetzeNetzregel(regel);
  return ergebnis.ok ? null : ergebnis.verwerfung;
}
function zuDnr(regeln, optionen) {
  const regexBudget = optionen.regexBudget ?? REGEX_BUDGET_STANDARD;
  const hostsJeRegel = optionen.hostsJeRegel ?? HOSTS_JE_REGEL;
  const einzelnBis = optionen.einzelnBis ?? EINZELN_BIS;
  const verworfen2 = {};
  const einheiten = [];
  const gruppen = /* @__PURE__ */ new Map();
  const gesehen = /* @__PURE__ */ new Set();
  for (const regel of regeln) {
    if (regel.typ !== "netz") continue;
    const ergebnis = uebersetzeNetzregel(regel, optionen.blocktNavigation === true);
    if (!ergebnis.ok) {
      zaehle(verworfen2, ergebnis.verwerfung);
      continue;
    }
    const { condition } = ergebnis.regel;
    const schluessel = JSON.stringify([ergebnis.regel.priority, ergebnis.regel.action, condition]);
    if (gesehen.has(schluessel)) {
      zaehle(verworfen2, { grund: "doppelt" });
      continue;
    }
    gesehen.add(schluessel);
    if (condition.requestDomains && condition.requestDomains.length === 1) {
      const { requestDomains, ...rest } = condition;
      const gruppenSchluessel = JSON.stringify([ergebnis.klasse, ergebnis.regel.priority, ergebnis.regel.action, rest]);
      const gruppe = gruppen.get(gruppenSchluessel);
      if (gruppe) {
        gruppe.hosts.push(requestDomains[0]);
        continue;
      }
      const neu = { klasse: ergebnis.klasse, regel: ergebnis.regel, hosts: [requestDomains[0]] };
      gruppen.set(gruppenSchluessel, neu);
      einheiten.push(neu);
      continue;
    }
    einheiten.push({ klasse: ergebnis.klasse, regel: ergebnis.regel, hosts: [] });
  }
  einheiten.sort((a, b) => a.klasse - b.klasse);
  const rules = [];
  const klassen = { 1: 0, 2: 0, 3: 0, 4: 0 };
  let quellregeln = 0;
  let regexAnzahl = 0;
  let id = optionen.startId;
  const nimm = (klasse, regel, zeilen) => {
    if (rules.length >= optionen.budget) {
      for (let i = 0; i < zeilen; i += 1) zaehle(verworfen2, { grund: "budget" });
      return;
    }
    if (regel.condition.regexFilter !== void 0) {
      if (regexAnzahl >= regexBudget) {
        zaehle(verworfen2, { grund: "regexBudget" });
        return;
      }
      regexAnzahl += 1;
    }
    rules.push({ id, ...regel });
    klassen[klasse] += 1;
    quellregeln += zeilen;
    id += 1;
  };
  for (const einheit of einheiten) {
    if (einheit.hosts.length === 0) {
      nimm(einheit.klasse, einheit.regel, 1);
      continue;
    }
    if (einheit.hosts.length <= einzelnBis) {
      for (const host of einheit.hosts) {
        nimm(
          einheit.klasse,
          { ...einheit.regel, condition: { ...einheit.regel.condition, requestDomains: [host] } },
          1
        );
      }
      continue;
    }
    for (let i = 0; i < einheit.hosts.length; i += hostsJeRegel) {
      const hosts2 = einheit.hosts.slice(i, i + hostsJeRegel);
      nimm(
        einheit.klasse,
        { ...einheit.regel, condition: { ...einheit.regel.condition, requestDomains: hosts2 } },
        hosts2.length
      );
    }
  }
  return { rules, verworfen: verworfen2, klassen, quellregeln };
}

// src/engine/kosmetik.ts
var PSEUDOKLASSEN = /* @__PURE__ */ new Set([
  "not",
  "has",
  "is",
  "where",
  "nth-child",
  "nth-last-child",
  "nth-of-type",
  "nth-last-of-type",
  "first-child",
  "last-child",
  "only-child",
  "first-of-type",
  "last-of-type",
  "only-of-type",
  "empty",
  "root"
]);
var ERLAUBT_AUSSEN = /^[A-Za-z0-9_\-.#[\]="':*~^$|>+ ,()\\\u00a0-\uffff]$/;
var IDENT_ANFANG = /^-?[A-Za-z_\\\u00a0-\uffff]/;
function grundFuerSelektor(regel) {
  return regel.prozedural ? "erweiterteKosmetik" : "selektorUngueltig";
}
function selektorGueltig(selektor) {
  if (selektor.length === 0 || selektor.length > 1e3) return false;
  if (/[\x00-\x1f\x7f-\x9f]/.test(selektor)) return false;
  if (/(^|[^\\])(\\\\)*\\$/.test(selektor)) return false;
  let anfuehrung = null;
  let runde = 0;
  let eckige = 0;
  let letztesZeichen = "";
  for (let i = 0; i < selektor.length; i += 1) {
    const z = selektor[i];
    if (z === "\\") {
      i += 1;
      letztesZeichen = "a";
      continue;
    }
    if (anfuehrung !== null) {
      if (z === anfuehrung) anfuehrung = null;
      letztesZeichen = z;
      continue;
    }
    if (!ERLAUBT_AUSSEN.test(z)) return false;
    if (z === '"' || z === "'") {
      anfuehrung = z;
    } else if (z === "(") {
      runde += 1;
      if (selektor[i + 1] === ")") return false;
    } else if (z === ")") {
      runde -= 1;
      if (runde < 0) return false;
    } else if (z === "[") {
      eckige += 1;
      if (eckige > 1) return false;
    } else if (z === "]") {
      eckige -= 1;
      if (eckige < 0) return false;
    } else if ((z === "." || z === "#") && eckige === 0) {
      const rest = selektor.slice(i + 1, i + 3);
      if (!IDENT_ANFANG.test(rest)) return false;
    } else if (z === ":" && eckige === 0) {
      if (selektor[i + 1] === ":") return false;
      const treffer = /^[a-zA-Z-]+/.exec(selektor.slice(i + 1));
      if (!treffer) return false;
      if (!PSEUDOKLASSEN.has(treffer[0].toLowerCase())) return false;
    } else if (z === "," && runde === 0 && letztesZeichen === ",") {
      return false;
    }
    letztesZeichen = z;
  }
  if (anfuehrung !== null || runde !== 0 || eckige !== 0) return false;
  const geputzt = selektor.trim();
  if (geputzt.startsWith(",") || geputzt.endsWith(",")) return false;
  return true;
}
var HOST = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/;
function hostGueltig(host) {
  return HOST.test(host);
}

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
    const behandle2 = (n) => {
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
        if (knotenRe.test(n.nodeName)) behandle2(n);
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
          if (knotenRe.test(n.nodeName)) behandle2(n);
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
      const pruefe2 = () => {
        const doc = w.document;
        const skript = doc ? doc.currentScript : null;
        const text = skript && typeof skript.textContent === "string" ? skript.textContent : "";
        if (skript && passt(text, muster)) abbruch();
      };
      fallen(pfad, (aktuell) => {
        pruefe2();
        return aktuell;
      }, (v) => {
        pruefe2();
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
            const anfrage2 = eingabe;
            adresse = typeof anfrage2.url === "string" ? anfrage2.url : alsText(eingabe);
            if (typeof anfrage2.method === "string") methode = anfrage2.method;
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
      const kette = methode.split(".");
      const name = kette.pop();
      let traeger = w;
      for (const glied of kette) traeger = traeger == null ? void 0 : traeger[glied];
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
var BEKANNTE_SCRIPTLETS = [
  "abort-on-property-read",
  "abort-on-property-write",
  "abort-current-script",
  "set-constant",
  "no-setTimeout-if",
  "no-setInterval-if",
  "json-prune",
  "prevent-addEventListener",
  "nowebrtc",
  "noeval",
  "nobab",
  "nofab",
  "abort-on-stack-trace",
  "no-xhr-if",
  "no-fetch-if",
  "remove-class",
  "trusted-replace-fetch-response",
  "trusted-replace-xhr-response",
  "json-prune-fetch-response",
  "json-prune-xhr-response",
  "trusted-prevent-dom-bypass",
  "nano-setTimeout-booster",
  "remove-node-text",
  "trusted-replace-node-text"
];

// src/engine/scriptlets.ts
var BEKANNT = BEKANNTE_SCRIPTLETS;
var KUERZEL = {
  aopr: "abort-on-property-read",
  aopw: "abort-on-property-write",
  acs: "abort-current-script",
  acis: "abort-current-script",
  "abort-current-inline-script": "abort-current-script",
  set: "set-constant",
  nostif: "no-setTimeout-if",
  "setTimeout-defuser": "no-setTimeout-if",
  nosiif: "no-setInterval-if",
  "setInterval-defuser": "no-setInterval-if",
  aeld: "prevent-addEventListener",
  "addEventListener-defuser": "prevent-addEventListener",
  "silent-noeval": "noeval",
  "noeval-if": "noeval",
  aost: "abort-on-stack-trace",
  "prevent-xhr": "no-xhr-if",
  "prevent-fetch": "no-fetch-if",
  rc: "remove-class",
  "bab-defuser": "nobab",
  "nano-stb": "nano-setTimeout-booster",
  rmnt: "remove-node-text",
  rpnt: "trusted-replace-node-text",
  "trusted-rpnt": "trusted-replace-node-text",
  "replace-node-text": "trusted-replace-node-text"
};
function scriptletName(name) {
  const kern = name.trim().replace(/\.js$/, "");
  if (BEKANNT.includes(kern)) return kern;
  return KUERZEL[kern] ?? null;
}

// src/engine/eigene.ts
function eigeneRegeln(text) {
  const regeln = [];
  const fehler = [];
  const zeilen = text.split("\n");
  for (let i = 0; i < zeilen.length; i += 1) {
    const zeile = zeilen[i];
    const nummer = i + 1;
    const regel = parseZeile(zeile);
    if (regel === null) continue;
    if (regel.typ === "unbekannt") {
      fehler.push({ zeile: nummer, grund: regel.grund, text: zeile });
      continue;
    }
    if (regel.typ === "netz") {
      const verwerfung = pruefeNetzregel(regel);
      if (verwerfung) {
        fehler.push({ zeile: nummer, grund: verwerfung.grund, option: verwerfung.option, text: zeile });
        continue;
      }
    } else if (regel.typ === "kosmetik") {
      if (!selektorGueltig(regel.selektor)) {
        fehler.push({ zeile: nummer, grund: grundFuerSelektor(regel), text: zeile });
        continue;
      }
      if (![...regel.domains, ...regel.ausgeschlosseneDomains].every(hostGueltig)) {
        fehler.push({ zeile: nummer, grund: "domainUngueltig", text: zeile });
        continue;
      }
    } else if (regel.typ === "scriptlet") {
      if (!regel.ausnahme && scriptletName(regel.name) === null) {
        fehler.push({ zeile: nummer, grund: "scriptletUnbekannt", text: zeile });
        continue;
      }
      if (regel.domains.length === 0) {
        fehler.push({ zeile: nummer, grund: "scriptletOhneDomain", text: zeile });
        continue;
      }
      if (![...regel.domains, ...regel.ausgeschlosseneDomains].every(hostGueltig)) {
        fehler.push({ zeile: nummer, grund: "domainUngueltig", text: zeile });
        continue;
      }
    }
    regeln.push(regel);
  }
  return { regeln, fehler };
}

// src/hintergrund/ausnahmen.ts
function hostAus(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return u.hostname.toLowerCase();
  } catch {
    return null;
  }
}
function hostKette(host) {
  const teile = host.split(".").filter(Boolean);
  const kette = [];
  for (let i = 0; i < teile.length - 1; i++) kette.push(teile.slice(i).join("."));
  if (kette.length === 0 && host) kette.push(host);
  return kette;
}
function siteErlaubt(sites, host) {
  return hostKette(host).some((h) => sites[h]?.erlaubt === true);
}
function ausnahmeRegel(host, id) {
  return {
    id,
    priority: PRIORITAET_AUSNAHME,
    action: { type: "allowAllRequests" },
    condition: {
      requestDomains: [host],
      resourceTypes: ["main_frame", "sub_frame"]
    }
  };
}
function baueAusnahmen(sites) {
  const hosts2 = Object.keys(sites).filter((h) => sites[h]?.erlaubt === true).sort();
  const regeln = [];
  for (const host of hosts2) {
    const id = ID_AUSNAHME_VON + regeln.length;
    if (id > ID_AUSNAHME_BIS) break;
    regeln.push(ausnahmeRegel(host, id));
  }
  return regeln;
}
function ausschlussMuster(sites) {
  const muster = [];
  for (const host of Object.keys(sites).sort()) {
    if (sites[host]?.erlaubt !== true) continue;
    muster.push(`*://${host}/*`, `*://*.${host}/*`);
  }
  return muster;
}

// src/hintergrund/regeln.ts
var listenMerker = null;
var cssMerker = /* @__PURE__ */ new Map();
async function holePaketText(pfad) {
  try {
    const antwort = await fetch(api.runtime.getURL(pfad));
    if (!antwort.ok) return null;
    return await antwort.text();
  } catch {
    return null;
  }
}
async function holePaketJson(pfad) {
  const text = await holePaketText(pfad);
  if (text === null) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}
function paketDateiVorhanden(pfad) {
  let merker = cssMerker.get(pfad);
  if (!merker) {
    merker = fetch(api.runtime.getURL(pfad), { method: "HEAD" }).then((r) => r.ok).catch(() => false);
    cssMerker.set(pfad, merker);
  }
  return merker;
}
function listenInfo() {
  if (!listenMerker) listenMerker = ladeListenInfo();
  return listenMerker;
}
async function ladeListenInfo() {
  const [quellen, bericht] = await Promise.all([
    holePaketJson("listen/quellen.json"),
    holePaketJson("listen/bericht.json")
  ]);
  const basis = Array.isArray(quellen) && quellen.length > 0 ? quellen : LISTEN_VORGABE;
  const manifest = api.runtime.getManifest();
  const imManifest = new Set((manifest.declarative_net_request?.rule_resources ?? []).map((r) => r.id));
  return basis.filter((q) => imManifest.has(q.id)).map((q) => {
    const vorgabe = LISTEN_VORGABE.find((v) => v.id === q.id);
    return {
      id: q.id,
      name: String(q.name ?? q.id),
      premium: Boolean(q.premium ?? vorgabe?.premium ?? false),
      standard: Boolean(q.standard ?? vorgabe?.standard ?? false),
      regeln: typeof bericht?.[q.id]?.dnr === "number" ? bericht[q.id].dnr : null,
      sprache: q.sprache ?? vorgabe?.sprache
    };
  });
}
function regionalFuerSprache(sprache2, listen) {
  const grund = sprache2.toLowerCase().split("-")[0] ?? "";
  if (!grund) return null;
  return listen.find((l) => l.sprache === grund)?.id ?? null;
}
async function waehleRegionaleListe() {
  const { einstellungen } = await liesLokal("einstellungen");
  if (Object.keys(einstellungen.listen).length > 0) return null;
  let sprache2 = "";
  try {
    sprache2 = api.i18n?.getUILanguage?.() ?? "";
  } catch {
    return null;
  }
  const passend = regionalFuerSprache(sprache2, await listenInfo());
  if (!passend) return null;
  await schreibeLokal({ einstellungen: { ...einstellungen, listen: { [passend]: true } } });
  return passend;
}
function aktiveListenIds(einstellungen, lizenz, listen) {
  if (!einstellungen.aktiv) return [];
  return listen.filter((l) => {
    const gewollt = einstellungen.listen[l.id] ?? l.standard;
    return gewollt && (!l.premium || lizenz.premium);
  }).map((l) => l.id);
}
async function aktiveListen() {
  const [{ einstellungen, lizenz }, listen] = await Promise.all([liesLokal("einstellungen", "lizenz"), listenInfo()]);
  return aktiveListenIds(einstellungen, lizenzWirksam(lizenz, Date.now()), listen);
}
async function schalteRulesets() {
  const dnr = api.declarativeNetRequest;
  if (!dnr) return;
  const listen = await listenInfo();
  const soll = new Set(await aktiveListen());
  let aktuell = [];
  try {
    aktuell = await dnr.getEnabledRulesets();
  } catch {
    aktuell = [];
  }
  const ein = listen.map((l) => l.id).filter((id) => soll.has(id) && !aktuell.includes(id));
  const aus = aktuell.filter((id) => !soll.has(id) && id !== "eigenschutz");
  let fehler = null;
  if (aus.length) {
    try {
      await dnr.updateEnabledRulesets({ disableRulesetIds: aus });
    } catch (e) {
      console.warn("[AdSilence] Ruleset ausschalten", e);
    }
  }
  let frei = Number.POSITIVE_INFINITY;
  if (typeof dnr.getAvailableStaticRuleCount === "function") {
    try {
      frei = await dnr.getAvailableStaticRuleCount();
    } catch {
      frei = Number.POSITIVE_INFINITY;
    }
  }
  for (const id of ein) {
    const bedarf = listen.find((l) => l.id === id)?.regeln ?? 0;
    if (bedarf > frei) {
      fehler = id;
      continue;
    }
    try {
      await dnr.updateEnabledRulesets({ enableRulesetIds: [id] });
      frei -= bedarf;
    } catch (e) {
      console.warn("[AdSilence] Ruleset einschalten", id, e);
      fehler = id;
    }
  }
  await schreibeSitzung({ listenFehler: fehler });
}
function eigeneDnr(text) {
  if (!text.trim()) return { rules: [], anzahl: 0, fehler: [] };
  try {
    const gelesen = eigeneRegeln(text);
    const { rules, quellregeln } = zuDnr(gelesen.regeln, { startId: ID_EIGENE_VON, budget: BUDGET_EIGENE });
    return { rules, anzahl: quellregeln, fehler: gelesen.fehler.map((f) => `${f.zeile}: ${f.grund}`) };
  } catch (e) {
    return { rules: [], anzahl: 0, fehler: [`0: ${e instanceof Error ? e.message : String(e)}`] };
  }
}
async function aktualisiereDynamischeRegeln() {
  const dnr = api.declarativeNetRequest;
  const { sites, eigeneRegeln: text } = await liesLokal("sites", "eigeneRegeln");
  const eigene = eigeneDnr(text);
  if (!dnr) return { anzahl: eigene.anzahl, fehler: eigene.fehler };
  const neu = [...baueAusnahmen(sites), ...eigene.rules];
  try {
    const alt = await dnr.getDynamicRules();
    const weg = alt.filter((r) => r.id < ID_LISTENPFLEGE_VON).map((r) => r.id);
    await dnr.updateDynamicRules({ removeRuleIds: weg, addRules: neu });
  } catch (e) {
    console.warn("[AdSilence] dynamische Regeln", e);
    eigene.fehler.push(`0: ${e instanceof Error ? e.message : String(e)}`);
  }
  return { anzahl: eigene.anzahl, fehler: eigene.fehler };
}
async function aktualisiereGenerischesCss() {
  const scripting = api.scripting;
  if (!scripting || typeof scripting.registerContentScripts !== "function") return;
  const [{ einstellungen, sites }, listen, aktiv] = await Promise.all([liesLokal("einstellungen", "sites"), listenInfo(), aktiveListen()]);
  const aktivSet = new Set(aktiv);
  const ausschluss = ausschlussMuster(sites);
  let vorhanden = /* @__PURE__ */ new Set();
  try {
    const alle = await scripting.getRegisteredContentScripts();
    vorhanden = new Set(alle.map((s) => s.id).filter((id) => id.startsWith(INHALT_CSS_ID)));
  } catch {
    vorhanden = /* @__PURE__ */ new Set();
  }
  const soll = [];
  if (einstellungen.aktiv) {
    for (const liste of listen) {
      if (!aktivSet.has(liste.id)) continue;
      const pfad = `kosmetik/${liste.id}.generisch.css`;
      if (!await paketDateiVorhanden(pfad)) continue;
      soll.push({
        id: `${INHALT_CSS_ID}-${liste.id}`,
        matches: ["<all_urls>"],
        // Leer heisst leer: Beim Aktualisieren bleibt ein weggelassenes Feld
        // sonst auf dem alten Wert stehen.
        excludeMatches: ausschluss,
        css: [pfad],
        runAt: "document_start",
        allFrames: true,
        persistAcrossSessions: true
      });
    }
  }
  const sollIds = new Set(soll.map((s) => s.id));
  const weg = [...vorhanden].filter((id) => !sollIds.has(id));
  if (weg.length) {
    try {
      await scripting.unregisterContentScripts({ ids: weg });
    } catch (e) {
      console.warn("[AdSilence] CSS abmelden", e);
    }
  }
  const neu = soll.filter((s) => !vorhanden.has(s.id));
  const aendern = soll.filter((s) => vorhanden.has(s.id));
  try {
    if (aendern.length) await scripting.updateContentScripts(aendern);
    if (neu.length) await scripting.registerContentScripts(neu);
  } catch (e) {
    console.warn("[AdSilence] CSS registrieren", e);
  }
}

// src/hintergrund/badge.ts
async function badgeAktualisieren() {
  const { einstellungen } = await liesLokal("einstellungen");
  const an = einstellungen.aktiv && einstellungen.zaehlerBadge;
  const dnr = api.declarativeNetRequest;
  if (dnr && typeof dnr.setExtensionActionOptions === "function") {
    try {
      await dnr.setExtensionActionOptions({ displayActionCountAsBadgeText: an });
    } catch {
    }
  }
  const action = api.action;
  if (!action) return;
  try {
    await action.setBadgeBackgroundColor({ color: BADGE_FARBE });
    if (!an) await action.setBadgeText({ text: "" });
  } catch {
  }
}
var PLATZHALTER = "<<declarativeNetRequestActionCount>>";
async function vomBadge(tabId) {
  const action = api.action;
  if (!action || typeof action.getBadgeText !== "function") return null;
  try {
    const text = await action.getBadgeText({ tabId });
    if (text === PLATZHALTER) return "amSymbol";
    const zahl = parseInt(text, 10);
    return Number.isFinite(zahl) ? zahl : null;
  } catch {
    return null;
  }
}
function lesbaresMuster(bedingung) {
  const domains = bedingung.requestDomains;
  if (domains && domains.length === 1) return domains[0];
  const muster = bedingung.urlFilter ?? bedingung.regexFilter ?? "";
  if (muster) {
    const host = /^\|\|([A-Za-z0-9._*-]+)/.exec(muster);
    if (host) return host[1].replace(/\.$/, "");
    return muster.length > 40 ? `${muster.slice(0, 40)}…` : muster;
  }
  if (domains && domains.length > 1) return SAMMELREGEL;
  return "?";
}
var regelMerker = /* @__PURE__ */ new Map();
function regelnDerListe(listenId) {
  let merker = regelMerker.get(listenId);
  if (!merker) {
    merker = (async () => {
      const karte3 = /* @__PURE__ */ new Map();
      const regeln = await holePaketJson(`rules/${listenId}.json`);
      if (!Array.isArray(regeln)) return karte3;
      for (const regel of regeln) karte3.set(regel.id, lesbaresMuster(regel.condition));
      return karte3;
    })();
    regelMerker.set(listenId, merker);
  }
  return merker;
}
async function trefferImTab(tabId) {
  const dnr = api.declarativeNetRequest;
  if (!dnr || typeof dnr.getMatchedRules !== "function") return null;
  try {
    const { rulesMatchedInfo } = await dnr.getMatchedRules({ tabId });
    const jeListe = /* @__PURE__ */ new Map();
    for (const treffer of rulesMatchedInfo) {
      const liste = treffer.rule.rulesetId;
      const regeln = jeListe.get(liste) ?? /* @__PURE__ */ new Map();
      regeln.set(treffer.rule.ruleId, (regeln.get(treffer.rule.ruleId) ?? 0) + 1);
      jeListe.set(liste, regeln);
    }
    const ergebnis = [];
    for (const [listenId, regeln] of jeListe) {
      const namen = await regelnDerListe(listenId);
      const zusammen = /* @__PURE__ */ new Map();
      for (const [regelId, anzahl] of regeln) {
        const was = namen.get(regelId) ?? `#${regelId}`;
        zusammen.set(was, (zusammen.get(was) ?? 0) + anzahl);
      }
      ergebnis.push({
        id: listenId,
        anzahl: [...regeln.values()].reduce((a, b) => a + b, 0),
        regeln: [...zusammen].map(([was, anzahl]) => ({ was, anzahl })).sort((a, b) => b.anzahl - a.anzahl)
      });
    }
    ergebnis.sort((a, b) => b.anzahl - a.anzahl);
    return { gesamt: rulesMatchedInfo.length, jeListe: ergebnis };
  } catch {
    return null;
  }
}

// src/hintergrund/fingerabdruck.ts
var laufend = null;
var ohneSitzungsspeicher = null;
function neuesToken() {
  const c = globalThis.crypto;
  if (c && typeof c.randomUUID === "function") return c.randomUUID();
  const bytes = new Uint8Array(16);
  c.getRandomValues(bytes);
  let hex = "";
  for (const b of bytes) hex += b.toString(16).padStart(2, "0");
  return hex;
}
async function ermittle() {
  const { fingerabdruckToken } = await liesSitzung("fingerabdruckToken");
  if (fingerabdruckToken) return fingerabdruckToken;
  if (!api.storage.session) {
    ohneSitzungsspeicher ??= neuesToken();
    return ohneSitzungsspeicher;
  }
  const token = neuesToken();
  await schreibeSitzung({ fingerabdruckToken: token });
  return token;
}
function sitzungsToken() {
  if (!laufend) {
    laufend = ermittle().finally(() => {
      laufend = null;
    });
  }
  return laufend;
}
async function ableiten(token, top) {
  const bytes = new TextEncoder().encode(`${token}|${top}`);
  const digest = await globalThis.crypto.subtle.digest("SHA-256", bytes);
  let hex = "";
  for (const b of new Uint8Array(digest)) hex += b.toString(16).padStart(2, "0");
  return hex;
}
async function tokenFuerSeite(top) {
  return ableiten(await sitzungsToken(), top.toLowerCase());
}

// src/hintergrund/kosmetik.ts
var SITZUNG_SCHLUESSEL = "kosmetikKarte";
var karte = null;
function kosmetikNeuLaden() {
  karte = null;
}
function schluesselVon(listen) {
  return [...listen].sort().join(",");
}
async function ausSitzung(listen) {
  if (!api.storage.session) return null;
  try {
    const roh = await api.storage.session.get(SITZUNG_SCHLUESSEL);
    const alt = roh[SITZUNG_SCHLUESSEL];
    if (alt && Array.isArray(alt.listen) && schluesselVon(alt.listen) === schluesselVon(listen)) return alt;
  } catch {
  }
  return null;
}
async function inSitzung(k) {
  if (!api.storage.session) return;
  try {
    await api.storage.session.set({ [SITZUNG_SCHLUESSEL]: k });
  } catch {
  }
}
function fuege(ziel, quelle) {
  if (!quelle) return;
  for (const host of Object.keys(quelle)) {
    const liste = quelle[host];
    if (!Array.isArray(liste) || liste.length === 0) continue;
    const h = host.toLowerCase();
    (ziel[h] ??= []).push(...liste);
  }
}
async function baueKarte() {
  const listen = await aktiveListen();
  const gemerkt = await ausSitzung(listen);
  if (gemerkt) return gemerkt;
  const k = { listen, spezifisch: {}, ausnahmen: {}, prozedural: {} };
  const [dateien, textdateien] = await Promise.all([
    Promise.all(listen.map((id) => holePaketJson(`kosmetik/${id}.json`))),
    Promise.all(listen.map((id) => holePaketJson(`prozedural/${id}.json`)))
  ]);
  for (const datei of dateien) {
    if (!datei) continue;
    fuege(k.spezifisch, datei.spezifisch);
    fuege(k.ausnahmen, datei.ausnahmen);
  }
  for (const datei of textdateien) {
    if (!datei) continue;
    for (const host of Object.keys(datei)) {
      const liste = datei[host];
      if (!Array.isArray(liste) || liste.length === 0) continue;
      (k.prozedural[host.toLowerCase()] ??= []).push(...liste);
    }
  }
  void inSitzung(k);
  return k;
}
function holeKarte() {
  if (!karte) {
    karte = baueKarte().catch((e) => {
      karte = null;
      throw e;
    });
  }
  return karte;
}
function selektorenAus(k, host) {
  const kette = hostKette(host);
  const gesperrt = /* @__PURE__ */ new Set();
  for (const h of kette) for (const s of k.ausnahmen[h] ?? []) gesperrt.add(s);
  const gesehen = /* @__PURE__ */ new Set();
  const ergebnis = [];
  for (const h of kette) {
    for (const s of k.spezifisch[h] ?? []) {
      if (gesperrt.has(s) || gesehen.has(s)) continue;
      gesehen.add(s);
      ergebnis.push(s);
    }
  }
  return ergebnis;
}
function textregelnAus(k, host) {
  const gesehen = /* @__PURE__ */ new Set();
  const ergebnis = [];
  for (const h of hostKette(host)) {
    for (const t of k.prozedural[h] ?? []) {
      const schluessel = `${t.wahl} ${t.text}`;
      if (gesehen.has(schluessel)) continue;
      gesehen.add(schluessel);
      ergebnis.push(t);
    }
  }
  return ergebnis;
}
var generischTexte = /* @__PURE__ */ new Map();
async function generischesCss(gewuenscht) {
  let aktiv;
  try {
    aktiv = await aktiveListen();
  } catch {
    return "";
  }
  const erlaubt = new Set(aktiv);
  const teile = [];
  for (const id of Array.isArray(gewuenscht) ? gewuenscht : []) {
    if (typeof id !== "string" || !erlaubt.has(id)) continue;
    let text = generischTexte.get(id);
    if (!text) {
      text = holePaketText(`kosmetik/${id}.generisch.css`).then((t2) => t2 ?? "");
      generischTexte.set(id, text);
    }
    const t = await text;
    if (t) teile.push(t);
  }
  return teile.join("\n");
}
function istZahlungsrahmen(host) {
  if (!host) return false;
  const kette = hostKette(host);
  return ZAHLUNGSHOSTS.some((z) => kette.includes(z));
}
async function fingerabdruckFuer(einstellungen, lizenz, sites, host, top) {
  const premium = lizenzWirksam(lizenz, Date.now()).premium;
  const an = premium && einstellungen.aktiv && einstellungen.fingerabdruck && !siteErlaubt(sites, top) && !siteErlaubt(sites, host);
  if (!an) return { an: false, token: null };
  if (istZahlungsrahmen(host)) return { an: false, token: null };
  let token = null;
  try {
    token = await tokenFuerSeite(top);
  } catch {
    token = null;
  }
  return { an: true, token };
}
async function kosmetikFuer(host, top = host) {
  const { einstellungen, sites, lizenz } = await liesLokal("einstellungen", "sites", "lizenz");
  const fingerabdruck = await fingerabdruckFuer(einstellungen, lizenz, sites, host, top);
  if (!einstellungen.aktiv || siteErlaubt(sites, host)) {
    return { selektoren: [], textregeln: [], aus: true, listen: [], fingerabdruck };
  }
  let listen = [];
  try {
    listen = await aktiveListen();
  } catch {
    listen = [];
  }
  try {
    const k = await holeKarte();
    return { selektoren: selektorenAus(k, host), textregeln: textregelnAus(k, host), aus: false, listen, fingerabdruck };
  } catch {
    return { selektoren: [], textregeln: [], aus: false, listen, fingerabdruck };
  }
}

// src/hintergrund/popup.ts
var hosts = null;
function popupsNeuLaden() {
  hosts = null;
}
async function baueHosts() {
  const menge = /* @__PURE__ */ new Set();
  const ausnahmen = /* @__PURE__ */ new Set();
  for (const id of await aktiveListen()) {
    const liste = await holePaketJson(`popup/${id}.json`);
    if (!liste) continue;
    for (const h of liste.hosts ?? []) menge.add(h);
    for (const h of liste.ausnahmen ?? []) ausnahmen.add(h);
  }
  for (const h of ausnahmen) menge.delete(h);
  return menge;
}
function holeHosts() {
  hosts ??= baueHosts().catch(() => /* @__PURE__ */ new Set());
  return hosts;
}
async function istPopupZiel(url) {
  const host = hostAus(url);
  if (host === null) return false;
  const menge = await holeHosts();
  if (menge.size === 0) return false;
  for (const teil of hostKette(host)) if (menge.has(teil)) return true;
  return false;
}
var beobachtet = /* @__PURE__ */ new Map();
async function darfSchliessen(quelleTabId) {
  const { einstellungen, sites } = await liesLokal("einstellungen", "sites");
  if (!einstellungen.aktiv) return false;
  try {
    const quelle = await api.tabs.get(quelleTabId);
    const host = hostAus(quelle.url ?? quelle.pendingUrl);
    if (host !== null && siteErlaubt(sites, host)) return false;
  } catch {
  }
  return true;
}
async function schliesse(tabId, quelleTabId, url) {
  if (!await istPopupZiel(url)) return;
  if (!await darfSchliessen(quelleTabId)) return;
  beobachtet.delete(tabId);
  try {
    await api.tabs.remove(tabId);
  } catch {
  }
}
function registrierePopupWaechter() {
  const nav = api.webNavigation;
  if (!nav || !nav.onCreatedNavigationTarget) return;
  const merke = (tabId, quelle) => {
    beobachtet.set(tabId, quelle);
    const frist = setTimeout(() => beobachtet.delete(tabId), 1e4);
    frist.unref?.();
  };
  nav.onCreatedNavigationTarget.addListener((d) => {
    merke(d.tabId, d.sourceTabId);
    void schliesse(d.tabId, d.sourceTabId, d.url);
  });
  nav.onCommitted.addListener((d) => {
    if (d.frameId !== 0) return;
    const quelle = beobachtet.get(d.tabId);
    if (quelle === void 0) return;
    void schliesse(d.tabId, quelle, d.url);
  });
  api.tabs.onRemoved.addListener((tabId) => beobachtet.delete(tabId));
}

// src/hintergrund/scriptlets.ts
var karte2 = null;
function scriptletsNeuLaden() {
  karte2 = null;
}
async function baueKarte2() {
  const listen = await aktiveListen();
  const k = {};
  const dateien = await Promise.all(listen.map((id) => holePaketJson(`scriptlets/${id}.json`)));
  for (const datei of dateien) {
    if (!datei || typeof datei !== "object") continue;
    for (const host of Object.keys(datei)) {
      const eintraege = datei[host];
      if (!Array.isArray(eintraege)) continue;
      (k[host.toLowerCase()] ??= []).push(...eintraege.filter((e) => e && typeof e.name === "string"));
    }
  }
  return k;
}
function holeKarte2() {
  if (!karte2) {
    karte2 = baueKarte2().catch((e) => {
      karte2 = null;
      throw e;
    });
  }
  return karte2;
}
function eintraegeAus(k, host) {
  const gesehen = /* @__PURE__ */ new Set();
  const ergebnis = [];
  for (const h of hostKette(host)) {
    for (const e of k[h] ?? []) {
      const schluessel = `${e.name} ${(e.args ?? []).join(" ")}`;
      if (gesehen.has(schluessel)) continue;
      gesehen.add(schluessel);
      ergebnis.push({ name: e.name, args: Array.isArray(e.args) ? e.args.map(String) : [] });
    }
  }
  return ergebnis;
}
async function scriptletsFuer(host) {
  const { einstellungen, sites } = await liesLokal("einstellungen", "sites");
  if (!einstellungen.aktiv || siteErlaubt(sites, host)) return [];
  try {
    return eintraegeAus(await holeKarte2(), host);
  } catch {
    return [];
  }
}
var registriert = false;
async function aktualisiereScriptletSkripte() {
  const scripting = api.scripting;
  if (!scripting || typeof scripting.registerContentScripts !== "function") return;
  const [{ einstellungen, sites }, aktiv] = await Promise.all([
    liesLokal("einstellungen", "sites"),
    aktiveListen()
  ]);
  const ausschluss = ausschlussMuster(sites);
  let vorhanden = /* @__PURE__ */ new Set();
  try {
    const alle = await scripting.getRegisteredContentScripts();
    vorhanden = new Set(alle.map((s) => s.id).filter((id) => id.startsWith(INHALT_SCRIPTLET_ID)));
  } catch {
    vorhanden = /* @__PURE__ */ new Set();
  }
  const vorhandeneDateien = /* @__PURE__ */ new Set();
  if (einstellungen.aktiv) {
    await Promise.all(
      aktiv.map(async (id) => {
        if (await paketDateiVorhanden(`scriptlets/${id}.js`)) vorhandeneDateien.add(id);
      })
    );
  }
  const soll = [];
  if (einstellungen.aktiv) {
    for (const id of aktiv) {
      const pfad = `scriptlets/${id}.js`;
      if (!vorhandeneDateien.has(id)) continue;
      soll.push({
        id: `${INHALT_SCRIPTLET_ID}-${id}`,
        matches: ["<all_urls>"],
        // Leer heisst leer: Ein weggelassenes Feld bliebe beim Aktualisieren
        // auf dem alten Wert stehen.
        excludeMatches: ausschluss,
        js: [pfad],
        world: "MAIN",
        runAt: "document_start",
        allFrames: true,
        persistAcrossSessions: true
      });
    }
  }
  const sollIds = new Set(soll.map((s) => s.id));
  const weg = [...vorhanden].filter((id) => !sollIds.has(id));
  if (weg.length) {
    try {
      await scripting.unregisterContentScripts({ ids: weg });
    } catch (e) {
      console.warn("[AdSilence] Scriptlets abmelden", e);
    }
  }
  const neu = soll.filter((s) => !vorhanden.has(s.id));
  const aendern = soll.filter((s) => vorhanden.has(s.id));
  try {
    if (aendern.length) await scripting.updateContentScripts(aendern);
    if (neu.length) await scripting.registerContentScripts(neu);
    registriert = soll.length > 0;
  } catch (e) {
    registriert = false;
    console.warn("[AdSilence] Scriptlets registrieren", e);
  }
}
async function beiNavigation(details) {
  if (registriert) return;
  const host = hostAus(details.url);
  if (!host) return;
  const eintraege = await scriptletsFuer(host);
  if (eintraege.length === 0) return;
  const scripting = api.scripting;
  if (!scripting) return;
  try {
    await scripting.executeScript({
      target: { tabId: details.tabId, frameIds: [details.frameId] },
      world: "MAIN",
      injectImmediately: true,
      func: scriptletLoader,
      args: [eintraege]
    });
  } catch {
  }
}
function registriereScriptlets() {
  const nav = api.webNavigation;
  if (!nav) return;
  try {
    nav.onCommitted.addListener(
      (details) => {
        void beiNavigation(details);
      },
      { url: [{ schemes: ["http", "https"] }] }
    );
  } catch (e) {
    console.warn("[AdSilence] Scriptlets", e);
  }
}

// src/hintergrund/anwenden.ts
var laufend2 = null;
var nochmal = false;
function allesAnwenden() {
  if (laufend2) {
    nochmal = true;
    return laufend2;
  }
  laufend2 = (async () => {
    try {
      do {
        nochmal = false;
        kosmetikNeuLaden();
        scriptletsNeuLaden();
        popupsNeuLaden();
        await aktualisiereScriptletSkripte();
        await schalteRulesets();
        await aktualisiereGenerischesCss();
        await badgeAktualisieren();
      } while (nochmal);
    } finally {
      laufend2 = null;
    }
  })();
  return laufend2;
}

// src/hintergrund/fehlercodes.ts
var CODES_TRENNEN = /* @__PURE__ */ new Set([
  "TOKEN_REUSE_DETECTED",
  "INVALID_REFRESH_TOKEN",
  "REFRESH_TOKEN_EXPIRED",
  "TOKEN_STALE",
  "USER_GONE"
]);
var CODES_SPAETER = /* @__PURE__ */ new Set(["SITE_LOCKED", "MAINTENANCE", "RATE_LIMITED"]);
function folgeFuer(code, status) {
  if (code && CODES_TRENNEN.has(code)) return "trennen";
  if (code === "ACCOUNT_BLOCKED") return "gesperrt";
  if (code && CODES_SPAETER.has(code)) return "spaeter";
  if (status === 0 || status === 429 || status >= 500) return "spaeter";
  return "fehler";
}

// src/hintergrund/lizenz.ts
async function aktuelleLizenz() {
  const { lizenz } = await liesLokal("lizenz");
  return lizenzWirksam(lizenz, Date.now());
}
var laufendePruefung = null;
function lizenzPruefen(anlass) {
  if (!laufendePruefung) {
    laufendePruefung = pruefe(anlass).finally(() => {
      laufendePruefung = null;
    });
  }
  return laufendePruefung;
}
async function pruefe(anlass) {
  const jetzt = Date.now();
  const { konto, lizenz: alt } = await liesLokal("konto", "lizenz");
  const vorher = lizenzWirksam(alt, jetzt).premium;
  if (!konto) {
    const frei = freiLizenz(jetzt);
    if (!alt || alt.premium) {
      await schreibeLokal({ lizenz: frei });
      if (vorher) await allesAnwenden();
    }
    return frei;
  }
  try {
    const a = await anfrageMitKonto("/api/adsilence/lizenz");
    const neu = {
      tarif: a.premium ? "premium" : "frei",
      premium: Boolean(a.premium),
      planKeys: Array.isArray(a.planKeys) ? a.planKeys : [],
      gueltigBis: a.gueltigBis ?? null,
      endetZumTermin: Boolean(a.endetZumTermin),
      hinweis: a.hinweis ?? null,
      geprueftAm: jetzt
    };
    await schreibeLokal({ lizenz: neu });
    if (neu.premium !== vorher) await allesAnwenden();
    return neu;
  } catch (e) {
    console.info("[AdSilence] Lizenzpruefung", anlass, e instanceof Error ? e.message : e);
    const { lizenz } = await liesLokal("lizenz");
    const wirksam = lizenzWirksam(lizenz, Date.now());
    if (wirksam.premium !== vorher) await allesAnwenden();
    return wirksam;
  }
}
var kaufLaeuft = false;
function kaufRueckkehrPollen() {
  if (kaufLaeuft) return;
  kaufLaeuft = true;
  const start = Date.now();
  const tick = async () => {
    let fertig = false;
    try {
      const l = await lizenzPruefen("kauf");
      fertig = l.premium;
    } catch {
      fertig = false;
    }
    if (fertig || Date.now() - start > KAUF_MAX_MS) {
      kaufLaeuft = false;
      return;
    }
    setTimeout(() => void tick(), KAUF_TAKT_MS);
  };
  void tick();
}
function registriereKaufRueckkehr() {
  const nav = api.webNavigation;
  if (!nav) return;
  try {
    nav.onCommitted.addListener(
      (details) => {
        if (details.frameId === 0) kaufRueckkehrPollen();
      },
      { url: [{ urlPrefix: `${API_BASIS}/erweiterung/fertig` }] }
    );
  } catch (e) {
    console.warn("[AdSilence] Kaufrueckkehr", e);
  }
}

// src/hintergrund/konto.ts
var ApiFehler = class extends Error {
  code;
  status;
  constructor(code, message, status) {
    super(message);
    this.name = "ApiFehler";
    this.code = code;
    this.status = status;
  }
};
async function sprache() {
  const vomBrowser = () => {
    try {
      return api.i18n.getUILanguage();
    } catch {
      return "en";
    }
  };
  try {
    const { einstellungen } = await liesLokal("einstellungen");
    return einstellungen.sprache || vomBrowser();
  } catch {
    return vomBrowser();
  }
}
async function anfrage(pfad, optionen = {}) {
  const kopf = { "Accept-Language": await sprache() };
  if (optionen.body !== void 0) kopf["Content-Type"] = "application/json";
  if (optionen.token) kopf.Authorization = `Bearer ${optionen.token}`;
  let antwort;
  try {
    antwort = await fetch(`${API_BASIS}${pfad}`, {
      method: optionen.method ?? (optionen.body !== void 0 ? "POST" : "GET"),
      headers: kopf,
      credentials: "omit",
      body: optionen.body !== void 0 ? JSON.stringify(optionen.body) : void 0
    });
  } catch (e) {
    throw new ApiFehler("NETZ", e instanceof Error ? e.message : String(e), 0);
  }
  const roh = await antwort.text();
  let daten = null;
  try {
    daten = roh ? JSON.parse(roh) : null;
  } catch {
    daten = null;
  }
  if (!antwort.ok) {
    const fehler = daten?.error;
    const code = fehler?.code ?? (antwort.status === 429 ? "RATE_LIMITED" : "UNBEKANNT");
    throw new ApiFehler(code, fehler?.message ?? `HTTP ${antwort.status}`, antwort.status);
  }
  return daten;
}
var ersatzKette = Promise.resolve();
function mitLock(fn) {
  const locks = globalThis.navigator?.locks;
  if (locks && typeof locks.request === "function") return locks.request(LOCK_SITZUNG, fn);
  const naechste = ersatzKette.then(fn, fn);
  ersatzKette = naechste.catch(() => void 0);
  return naechste;
}
function gueltig(sitzung, jetzt) {
  return sitzung && sitzung.laeuftAb - TOKEN_PUFFER_MS > jetzt ? sitzung.accessToken : null;
}
async function uebernehmeSitzung(s, seit) {
  const jetzt = Date.now();
  const konto = {
    refreshToken: s.refreshToken,
    refreshLaeuftAb: jetzt + s.refreshExpiresIn * 1e3,
    email: s.user.email,
    name: s.user.name ?? null,
    seit
  };
  await schreibeSitzung({ sitzung: { accessToken: s.accessToken, laeuftAb: jetzt + s.expiresIn * 1e3 } });
  await schreibeLokal({ konto, kontoHinweis: null });
}
async function verarbeiteKontoFehler(f) {
  const folge = folgeFuer(f.code, f.status);
  if (folge === "trennen") {
    await schreibeSitzung({ sitzung: null });
    await schreibeLokal({ konto: null, kontoHinweis: "neuVerbinden", lizenz: freiLizenz(Date.now()) });
    await allesAnwenden();
  } else if (folge === "gesperrt") {
    await schreibeSitzung({ sitzung: null });
    await schreibeLokal({ kontoHinweis: "gesperrt", lizenz: freiLizenz(Date.now()) });
    await allesAnwenden();
  }
  return folge;
}
async function holeZugang(erzwingen = false) {
  const jetzt = Date.now();
  if (!erzwingen) {
    const { sitzung } = await liesSitzung("sitzung");
    const token = gueltig(sitzung, jetzt);
    if (token) return token;
  }
  const { konto } = await liesLokal("konto");
  if (!konto) return null;
  return mitLock(async () => {
    if (!erzwingen) {
      const { sitzung } = await liesSitzung("sitzung");
      const token = gueltig(sitzung, Date.now());
      if (token) return token;
    }
    const { konto: aktuell } = await liesLokal("konto");
    if (!aktuell) return null;
    try {
      const s = await anfrage("/api/adsilence/geraete/auffrischen", {
        body: { refreshToken: aktuell.refreshToken }
      });
      await uebernehmeSitzung(s, aktuell.seit);
      return s.accessToken;
    } catch (f) {
      if (f instanceof ApiFehler) await verarbeiteKontoFehler(f);
      throw f;
    }
  });
}
async function anfrageMitKonto(pfad, optionen = {}, wiederholt = false) {
  const token = await holeZugang(wiederholt);
  if (!token) throw new ApiFehler("NICHT_VERBUNDEN", "", 0);
  try {
    return await anfrage(pfad, { ...optionen, token });
  } catch (f) {
    if (!(f instanceof ApiFehler)) throw f;
    const folge = await verarbeiteKontoFehler(f);
    if (f.status === 401 && folge === "fehler" && !wiederholt) return anfrageMitKonto(pfad, optionen, true);
    throw f;
  }
}
function geraeteName() {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const browser = BROWSER === "firefox" ? "Firefox" : BROWSER === "safari" ? "Safari" : /Edg\//.test(ua) ? "Edge" : /OPR\//.test(ua) ? "Opera" : /Vivaldi/.test(ua) ? "Vivaldi" : "Chrome";
  const system = /Mac OS X|Macintosh/.test(ua) ? "macOS" : /Windows/.test(ua) ? "Windows" : /Android/.test(ua) ? "Android" : /iPhone|iPad/.test(ua) ? "iOS" : /CrOS/.test(ua) ? "ChromeOS" : /Linux/.test(ua) ? "Linux" : "";
  return (system ? `${browser}, ${system}` : browser).slice(0, 80);
}
var abholenLaeuft = false;
async function verbindungStarten() {
  const a = await anfrage("/api/adsilence/verbindung", {
    body: { browser: BROWSER, geraet: geraeteName() }
  });
  const jetzt = Date.now();
  const laeuftAbIn = typeof a.laeuftAbIn === "number" ? a.laeuftAbIn * 1e3 : VERBINDUNG_MAX_MS;
  const offen = {
    code: a.code,
    abholGeheimnis: a.abholGeheimnis,
    verbindenUrl: a.verbindenUrl,
    seit: jetzt,
    laeuftAb: jetzt + Math.min(laeuftAbIn, VERBINDUNG_MAX_MS)
  };
  await schreibeLokal({ verbindungOffen: offen, kontoHinweis: null });
  await schreibeSitzung({ verbindungFehler: null });
  try {
    await api.tabs.create({ url: a.verbindenUrl });
  } catch (e) {
    console.warn("[AdSilence] Tab oeffnen", e);
  }
  try {
    await api.alarms.create(ALARM_VERBINDUNG, { periodInMinutes: 0.5 });
  } catch {
  }
  void verbindungFortsetzen();
  return { code: a.code, verbindenUrl: a.verbindenUrl };
}
async function verbindungBeenden(fehler) {
  await schreibeLokal({ verbindungOffen: null });
  await schreibeSitzung({ verbindungFehler: fehler });
  try {
    await api.alarms.clear(ALARM_VERBINDUNG);
  } catch {
  }
}
async function verbindungAbholen() {
  const { verbindungOffen: offen } = await liesLokal("verbindungOffen");
  if (!offen) return "ende";
  if (Date.now() > offen.laeuftAb) {
    await verbindungBeenden("VERBINDUNG_ABGELAUFEN");
    return "ende";
  }
  try {
    const a = await anfrage("/api/adsilence/verbindung/abholen", {
      body: { code: offen.code, abholGeheimnis: offen.abholGeheimnis }
    });
    if (a.zustand !== "fertig") return "wartet";
    await uebernehmeSitzung(a, Date.now());
    await verbindungBeenden(null);
    await lizenzPruefen("verbindung");
    return "fertig";
  } catch (f) {
    if (f instanceof ApiFehler && (f.status === 404 || f.status === 409 || f.status === 410 || f.status === 423)) {
      await verbindungBeenden(f.code);
      return "ende";
    }
    return "wartet";
  }
}
async function verbindungFortsetzen() {
  if (abholenLaeuft) return;
  const { verbindungOffen } = await liesLokal("verbindungOffen");
  if (!verbindungOffen) return;
  abholenLaeuft = true;
  try {
    for (; ; ) {
      const ergebnis = await verbindungAbholen();
      if (ergebnis !== "wartet") return;
      await new Promise((r) => setTimeout(r, VERBINDUNG_TAKT_MS));
    }
  } finally {
    abholenLaeuft = false;
  }
}
async function kontoTrennen() {
  const { konto } = await liesLokal("konto");
  if (konto) {
    try {
      await anfrage("/api/adsilence/geraete/abmelden", { body: { refreshToken: konto.refreshToken } });
    } catch {
    }
  }
  await schreibeSitzung({ sitzung: null, verbindungFehler: null });
  await schreibeLokal({ konto: null, kontoHinweis: null, lizenz: freiLizenz(Date.now()), verbindungOffen: null, abgleich: { version: 0, aktualisiertAm: null } });
  await allesAnwenden();
}
async function checkoutUrl(interval) {
  const a = await anfrageMitKonto("/api/billing/checkout", {
    body: {
      plan: TARIF_KEY,
      interval,
      zustimmung: true,
      successPath: "/erweiterung/fertig",
      cancelPath: "/erweiterung/abgebrochen"
    }
  });
  return a.url;
}
async function tarifeHolen() {
  let token = null;
  try {
    token = await holeZugang();
  } catch {
    token = null;
  }
  return anfrage("/api/plans", token ? { token } : {});
}
async function meldungSenden(vorschau, kommentar) {
  return anfrage("/api/adsilence/meldung", {
    body: kommentar ? { ...vorschau, kommentar } : vorschau
  });
}

// src/hintergrund/alarme.ts
async function alarmeEinrichten() {
  const alarms = api.alarms;
  if (!alarms) return;
  try {
    const alt = await alarms.get(ALARM_LIZENZ);
    if (!alt) await alarms.create(ALARM_LIZENZ, { periodInMinutes: LIZENZ_TAKT_MIN, delayInMinutes: 1 });
    const altePflege = await alarms.get(ALARM_LISTENPFLEGE);
    if (!altePflege) await alarms.create(ALARM_LISTENPFLEGE, { periodInMinutes: LISTENPFLEGE_TAKT_MIN, delayInMinutes: 5 });
  } catch (e) {
    console.warn("[AdSilence] Alarm", e);
  }
}
function registriereAlarme() {
  const alarms = api.alarms;
  if (!alarms) return;
  alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === ALARM_LIZENZ) void lizenzPruefen("alarm");
    if (alarm.name === ALARM_LISTENPFLEGE) void pflegeListen().catch(() => {
    });
    else if (alarm.name === ALARM_VERBINDUNG) void verbindungFortsetzen();
  });
}

// src/hintergrund/pruefung.ts
function istObjekt(x) {
  return typeof x === "object" && x !== null && !Array.isArray(x);
}
var istString = (x) => typeof x === "string";
var istBoolean = (x) => typeof x === "boolean";
var istZahl = (x) => typeof x === "number" && Number.isFinite(x);
var istStringListe = (x) => Array.isArray(x) && x.every(istString);
var BROWSER2 = ["chromium", "firefox", "safari"];
var INTERVALLE = ["monthly", "yearly"];
function istHost(x) {
  return istString(x) && x.length > 0 && x.length <= 253 && /^[a-z0-9.-]+$/.test(x) && !x.startsWith(".") && !x.endsWith(".");
}
function pruefeNachricht(roh) {
  if (!istObjekt(roh) || !istString(roh.typ)) return null;
  const n = roh;
  switch (n.typ) {
    case "zustand":
      return n.tabId === void 0 || istZahl(n.tabId) ? { typ: "zustand", tabId: n.tabId } : null;
    case "aktiv.setzen":
      return istBoolean(n.aktiv) ? { typ: "aktiv.setzen", aktiv: n.aktiv } : null;
    case "site.setzen":
      return istHost(n.host) && istBoolean(n.erlaubt) ? { typ: "site.setzen", host: n.host, erlaubt: n.erlaubt } : null;
    case "liste.setzen":
      return istString(n.id) && istBoolean(n.aktiv) ? { typ: "liste.setzen", id: n.id, aktiv: n.aktiv } : null;
    case "konto.verbinden":
    case "konto.trennen":
    case "lizenz.pruefen":
    case "abgleich.jetzt":
      return { typ: n.typ };
    case "premium.kaufen":
      if (!istString(n.interval) || !INTERVALLE.includes(n.interval)) return null;
      if (n.zustimmung !== void 0 && !istBoolean(n.zustimmung)) return null;
      return { typ: "premium.kaufen", interval: n.interval, zustimmung: n.zustimmung };
    // Ohne Feld, also nichts zu pruefen - der Fall steht hier, damit eine
    // neue Nachricht nicht stillschweigend durchfaellt.
    case "tarife.holen":
      return { typ: "tarife.holen" };
    case "meldung.vorschau":
      return istZahl(n.tabId) ? { typ: "meldung.vorschau", tabId: n.tabId } : null;
    case "meldung.senden": {
      if (!istString(n.seite) || n.seite.length > MELDUNG_MAX_SEITE) return null;
      if (!istString(n.browser) || !BROWSER2.includes(n.browser)) return null;
      if (!istString(n.version) || n.version.length > 40) return null;
      if (!istStringListe(n.listen) || n.listen.length > MELDUNG_MAX_LISTEN) return null;
      if (!istStringListe(n.regeln) || n.regeln.length > MELDUNG_MAX_REGELN) return null;
      if (n.regeln.some((r) => r.length > MELDUNG_MAX_REGEL_LAENGE)) return null;
      if (n.kommentar !== void 0 && (!istString(n.kommentar) || n.kommentar.length > MELDUNG_MAX_KOMMENTAR)) return null;
      return {
        typ: "meldung.senden",
        seite: n.seite,
        browser: n.browser,
        version: n.version,
        listen: n.listen,
        regeln: n.regeln,
        kommentar: n.kommentar
      };
    }
    case "regeln.eigene.setzen":
      return istString(n.text) && n.text.length <= 2e5 ? { typ: "regeln.eigene.setzen", text: n.text } : null;
    case "kosmetik":
      return istHost(n.host) || n.host === "" ? { typ: "kosmetik", host: n.host } : null;
    case "kosmetik.generisch":
      return istStringListe(n.listen) && n.listen.length <= MELDUNG_MAX_LISTEN && n.listen.every((id) => /^[a-z0-9-]{1,40}$/.test(id)) ? { typ: "kosmetik.generisch", listen: n.listen } : null;
    case "cookies.antwort":
      return { typ: "cookies.antwort" };
    case "listen.pflegen":
      return { typ: "listen.pflegen" };
    case "verwechslung.pruefen":
      return istHost(n.host) ? { typ: "verwechslung.pruefen", host: n.host } : null;
    default:
      return null;
  }
}
function seiteOhneQuery(url) {
  try {
    const u = new URL(url);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return `${u.origin}${u.pathname}`.slice(0, MELDUNG_MAX_SEITE);
  } catch {
    return null;
  }
}

// src/hintergrund/abgleich.ts
var MAX_BYTES = 64 * 1024;
async function eigenerStand() {
  const { einstellungen, sites, eigeneRegeln: eigeneRegeln2 } = await liesLokal("einstellungen", "sites", "eigeneRegeln");
  return { listen: einstellungen.listen, sites, eigeneRegeln: eigeneRegeln2 };
}
async function uebernehme(roh) {
  if (!istObjekt(roh)) return;
  const { einstellungen } = await liesLokal("einstellungen");
  const neu = {};
  if (istObjekt(roh.listen)) {
    const listen = {};
    for (const [id, wert] of Object.entries(roh.listen)) if (typeof wert === "boolean") listen[id] = wert;
    neu.einstellungen = { ...einstellungen, listen };
  }
  if (istObjekt(roh.sites)) {
    const sites = {};
    for (const [host, wert] of Object.entries(roh.sites)) {
      if (istHost(host) && istObjekt(wert) && typeof wert.erlaubt === "boolean") {
        sites[host] = { erlaubt: wert.erlaubt, seit: typeof wert.seit === "number" ? wert.seit : Date.now() };
      }
    }
    neu.sites = sites;
  }
  if (istString(roh.eigeneRegeln)) neu.eigeneRegeln = roh.eigeneRegeln;
  await schreibeLokal(neu);
}
async function abgleichJetzt() {
  const lizenz = await aktuelleLizenz();
  if (!lizenz.premium) throw new ApiFehler("LIZENZ_ERFORDERLICH", "", 403);
  const { abgleich } = await liesLokal("abgleich");
  const server = await anfrageMitKonto("/api/adsilence/abgleich");
  let version = typeof server.version === "number" ? server.version : 0;
  if (server.stand && version > abgleich.version) await uebernehme(server.stand);
  const stand = await eigenerStand();
  if (JSON.stringify(stand).length > MAX_BYTES) throw new ApiFehler("ABGLEICH_ZU_GROSS", "", 0);
  let antwort;
  try {
    antwort = await anfrageMitKonto("/api/adsilence/abgleich", { method: "PUT", body: { stand, version: version + 1 } });
  } catch (f) {
    if (!(f instanceof ApiFehler) || f.code !== "ABGLEICH_VERALTET") throw f;
    const erneut = await anfrageMitKonto("/api/adsilence/abgleich");
    version = typeof erneut.version === "number" ? erneut.version : version;
    if (erneut.stand) await uebernehme(erneut.stand);
    antwort = { version, aktualisiertAm: erneut.aktualisiertAm };
  }
  await schreibeLokal({ abgleich: { version: antwort.version, aktualisiertAm: antwort.aktualisiertAm } });
  await aktualisiereDynamischeRegeln();
  await allesAnwenden();
  return { aktualisiertAm: antwort.aktualisiertAm };
}

// src/gemeinsam/phishing.ts
var BASIS = 36;
var TMIN = 1;
var TMAX = 26;
var SKEW = 38;
var DAMPF = 700;
var START_BIAS = 72;
var START_N = 128;
var TRENNER = 45;
function ziffernwert(zeichen) {
  if (zeichen - 48 < 10) return zeichen - 22;
  if (zeichen - 65 < 26) return zeichen - 65;
  if (zeichen - 97 < 26) return zeichen - 97;
  return BASIS;
}
function anpassen(delta, anzahl, ersteRunde) {
  let d = ersteRunde ? Math.floor(delta / DAMPF) : delta >> 1;
  d += Math.floor(d / anzahl);
  let k = 0;
  while (d > (BASIS - TMIN) * TMAX >> 1) {
    d = Math.floor(d / (BASIS - TMIN));
    k += BASIS;
  }
  return k + Math.floor((BASIS - TMIN + 1) * d / (d + SKEW));
}
function entschluessleLabel(label) {
  if (!/^xn--/i.test(label)) return label;
  const rest = label.slice(4);
  let n = START_N;
  let i = 0;
  let bias = START_BIAS;
  const trennerAn = rest.lastIndexOf(String.fromCharCode(TRENNER));
  const grund = [];
  if (trennerAn > 0) {
    for (let j = 0; j < trennerAn; j++) {
      const c = rest.charCodeAt(j);
      if (c >= 128) return label;
      grund.push(c);
    }
  }
  let index = trennerAn > 0 ? trennerAn + 1 : 0;
  while (index < rest.length) {
    const alt = i;
    let gewicht = 1;
    for (let k = BASIS; ; k += BASIS) {
      if (index >= rest.length) return label;
      const ziffer = ziffernwert(rest.charCodeAt(index++));
      if (ziffer >= BASIS) return label;
      if (ziffer > Math.floor((2147483647 - i) / gewicht)) return label;
      i += ziffer * gewicht;
      const t = k <= bias ? TMIN : k >= bias + TMAX ? TMAX : k - bias;
      if (ziffer < t) break;
      if (gewicht > Math.floor(2147483647 / (BASIS - t))) return label;
      gewicht *= BASIS - t;
    }
    const laenge = grund.length + 1;
    bias = anpassen(i - alt, laenge, alt === 0);
    if (Math.floor(i / laenge) > 2147483647 - n) return label;
    n += Math.floor(i / laenge);
    i %= laenge;
    grund.splice(i++, 0, n);
  }
  try {
    return String.fromCodePoint(...grund);
  } catch {
    return label;
  }
}
function entschluesseleHost(host) {
  if (!/xn--/i.test(host)) return host;
  return host.split(".").map(entschluessleLabel).join(".");
}
var SKELETT = {
  // Lateinisch, gleiche Form
  l: "l",
  I: "l",
  "1": "l",
  "|": "l",
  "!": "l",
  O: "o",
  "0": "o",
  // Kyrillisch
  а: "a",
  в: "b",
  с: "c",
  е: "e",
  о: "o",
  р: "p",
  х: "x",
  у: "y",
  ѕ: "s",
  і: "l",
  ј: "j",
  "ԁ": "d",
  һ: "h",
  "ԛ": "q",
  "ԝ": "w",
  м: "m",
  т: "t",
  н: "h",
  к: "k",
  з: "e",
  ч: "y",
  А: "a",
  В: "b",
  Е: "e",
  К: "k",
  М: "m",
  Н: "h",
  О: "o",
  Р: "p",
  С: "c",
  Т: "t",
  Х: "x",
  У: "y",
  Ѕ: "s",
  І: "l",
  Ј: "j",
  // Griechisch
  ο: "o",
  ρ: "p",
  α: "a",
  ε: "e",
  ν: "v",
  τ: "t",
  υ: "u",
  κ: "k",
  ι: "l",
  η: "n",
  μ: "m",
  σ: "o",
  ς: "c",
  χ: "x",
  γ: "y",
  ω: "w",
  Α: "a",
  Β: "b",
  Ε: "e",
  Ζ: "z",
  Η: "h",
  Ι: "l",
  Κ: "k",
  Μ: "m",
  Ν: "n",
  Ο: "o",
  Ρ: "p",
  Τ: "t",
  Υ: "y",
  Χ: "x",
  // Armenisch
  օ: "o",
  ս: "u",
  գ: "q",
  ո: "n",
  հ: "h",
  ա: "w",
  մ: "d",
  տ: "un",
  ք: "p",
  ի: "h",
  // Cherokee: eine ganze Schrift aus lateinisch aussehenden Zeichen
  Ꭺ: "a",
  Ꮃ: "w",
  Ꮖ: "l",
  Ꮟ: "b",
  Ꭼ: "e",
  Ꮋ: "h",
  Ꭻ: "j",
  Ꮶ: "k",
  Ꮇ: "m",
  Ꮎ: "z",
  Ꮪ: "v",
  Ꮯ: "c",
  Ꮲ: "p",
  Ꮢ: "r",
  Ꮪ2: "s",
  // Sonderformen, die NFKD stehen laesst
  ı: "l",
  "ȷ": "j",
  ǀ: "l",
  ǃ: "l",
  ɑ: "a",
  ɡ: "g",
  ɩ: "l",
  ɪ: "l",
  ʟ: "l",
  "ᴠ": "v",
  "ᴡ": "w",
  "ᴏ": "o",
  "": "",
  "‐": "-",
  "‑": "-",
  "‒": "-",
  "–": "-",
  "—": "-",
  "−": "-",
  "․": ".",
  "。": ".",
  "｡": "."
};
function skelett(text) {
  const zerlegt = text.normalize("NFKD").replace(new RegExp("\\p{Mn}+", "gu"), "");
  let raus = "";
  for (const zeichen of zerlegt) raus += SKELETT[zeichen] ?? zeichen.toLowerCase();
  return raus.replace(/rn/g, "m").replace(/vv/g, "w").replace(/cl/g, "d");
}
function mischtSchriften(label) {
  const ohneZiffern = label.replace(/[\d\-_.]/gu, "");
  if (!ohneZiffern) return false;
  const lateinisch = new RegExp("\\p{Script=Latin}", "u").test(ohneZiffern);
  if (!lateinisch) return false;
  return /[^\p{Script=Latin}\p{Script=Common}\p{Script=Inherited}]/u.test(ohneZiffern);
}
var ZWEITEILIGE_ENDUNGEN = /* @__PURE__ */ new Set([
  "co.uk",
  "org.uk",
  "me.uk",
  "ac.uk",
  "gov.uk",
  "com.au",
  "net.au",
  "org.au",
  "com.br",
  "com.mx",
  "com.ar",
  "com.tr",
  "co.jp",
  "ne.jp",
  "or.jp",
  "co.kr",
  "co.nz",
  "co.za",
  "co.in",
  "com.cn",
  "com.sg",
  "com.hk",
  "com.tw",
  "com.pl",
  "com.es",
  "com.pt",
  "com.ua"
]);
function registrierbar(host) {
  const teile = host.toLowerCase().replace(/\.$/, "").split(".");
  if (teile.length <= 2) return teile.join(".");
  const letzteZwei = teile.slice(-2).join(".");
  return ZWEITEILIGE_ENDUNGEN.has(letzteZwei) ? teile.slice(-3).join(".") : letzteZwei;
}
function gehoertZu(host, domain) {
  return host === domain || host.endsWith(`.${domain}`);
}
function abstand(a, b, grenze = 2) {
  if (Math.abs(a.length - b.length) > grenze) return grenze + 1;
  let vorige = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const aktuelle = [i];
    let kleinste = i;
    for (let j = 1; j <= b.length; j++) {
      const kosten = a[i - 1] === b[j - 1] ? 0 : 1;
      const wert = Math.min(aktuelle[j - 1] + 1, vorige[j] + 1, vorige[j - 1] + kosten);
      aktuelle.push(wert);
      if (wert < kleinste) kleinste = wert;
    }
    if (kleinste > grenze) return grenze + 1;
    vorige = aktuelle;
  }
  return vorige[b.length];
}
function fuehrtMarke(hostSkelett, name) {
  for (const label of hostSkelett.split(".")) {
    if (label === name) return true;
    if (label.startsWith(name) && /^[^a-z0-9]/.test(label.slice(name.length))) return true;
    const teile = label.split("-");
    if (teile.length === 2 && teile[1] === name) return true;
  }
  return false;
}
function pruefeHost(host, marken2) {
  const roh = host.replace(/\.$/, "");
  if (!roh || !roh.includes(".")) return null;
  const lesbar = entschluesseleHost(roh);
  const klein = lesbar.toLowerCase();
  for (const marke of marken2) {
    if (marke.domains.some((d) => gehoertZu(klein, d))) return null;
  }
  const domain = registrierbar(klein);
  const domainSkelett = skelett(lesbar.slice(lesbar.length - domain.length));
  const hostSkelett = skelett(lesbar);
  const gemischt = lesbar.split(".").some(mischtSchriften);
  for (const marke of marken2) {
    for (const echt of marke.domains) {
      const echtSkelett = skelett(echt);
      const echtName = echt.split(".")[0];
      if (domainSkelett === echtSkelett) {
        return { host: roh, lesbar: lesbar === roh ? null : lesbar, marke: marke.name, echt, grund: gemischt ? "punycode" : "homoglyph" };
      }
      if (gemischt && domainSkelett.includes(echtName)) {
        return { host: roh, lesbar: lesbar === roh ? null : lesbar, marke: marke.name, echt, grund: "punycode" };
      }
      if (echtName.length >= 5 && fuehrtMarke(hostSkelett, echtName)) {
        return { host: roh, lesbar: lesbar === roh ? null : lesbar, marke: marke.name, echt, grund: "markeAlsTeil" };
      }
      const endung = echt.slice(echtName.length);
      if (echtName.length >= 6 && domain.endsWith(endung)) {
        const name = domain.slice(0, domain.length - endung.length);
        if (name !== echtName && abstand(skelett(name), echtName, 1) === 1) {
          return { host: roh, lesbar: lesbar === roh ? null : lesbar, marke: marke.name, echt, grund: "einZeichen" };
        }
      }
    }
  }
  return null;
}

// src/oberflaeche/i18n-kern.ts
function fuellePlatzhalter(text, werte) {
  if (!werte) return text;
  return text.replace(/\{([a-zA-Z0-9_]+)\}/g, (ganz, name) => {
    const wert = werte[name];
    return wert === void 0 ? ganz : String(wert);
  });
}
function uebersetze(kataloge, sprache2, rueckfall, schluessel, werte) {
  const text = kataloge[sprache2]?.[schluessel] ?? kataloge[rueckfall]?.[schluessel] ?? schluessel;
  return fuellePlatzhalter(text, werte);
}

// src/hintergrund/texte.ts
var RUECKFALL = "en";
var geladen = /* @__PURE__ */ new Map();
function ladeKatalog(code) {
  let merker = geladen.get(code);
  if (!merker) {
    merker = holePaketJson(`i18n/${code}.json`);
    geladen.set(code, merker);
  }
  return merker;
}
async function hintergrundText() {
  const { einstellungen } = await liesLokal("einstellungen");
  const vomBrowser = () => {
    try {
      return (api.i18n?.getUILanguage?.() ?? RUECKFALL).toLowerCase().split("-")[0] ?? RUECKFALL;
    } catch {
      return RUECKFALL;
    }
  };
  const gewuenscht = einstellungen.sprache?.toLowerCase().split("-")[0] || null;
  const gewaehlt = gewuenscht ? await ladeKatalog(gewuenscht) : null;
  const code = gewaehlt && gewuenscht ? gewuenscht : vomBrowser();
  const [katalog, rueckfall] = await Promise.all([ladeKatalog(code), code === RUECKFALL ? Promise.resolve(null) : ladeKatalog(RUECKFALL)]);
  const kataloge = {};
  if (katalog) kataloge[code] = katalog;
  if (rueckfall) kataloge[RUECKFALL] = rueckfall;
  return (schluessel, werte) => uebersetze(kataloge, code, RUECKFALL, schluessel, werte);
}

// src/hintergrund/verwechslung.ts
var marken = null;
function ladeMarken() {
  if (!marken) {
    marken = holePaketJson("phishing/marken.json").then(
      (liste) => Array.isArray(liste) ? liste.filter((m) => m && typeof m.name === "string" && Array.isArray(m.domains)) : []
    );
  }
  return marken;
}
async function cookieAntwort() {
  const { einstellungen, lizenz } = await liesLokal("einstellungen", "lizenz");
  if (!einstellungen.aktiv) return null;
  if (einstellungen.cookieAntwort === "aus") return null;
  if (!lizenzWirksam(lizenz, Date.now()).premium) return null;
  return einstellungen.cookieAntwort;
}
async function warnerAktiv() {
  const { einstellungen, lizenz } = await liesLokal("einstellungen", "lizenz");
  if (!einstellungen.aktiv || !einstellungen.warnung) return false;
  return lizenzWirksam(lizenz, Date.now()).premium;
}
async function verdachtFuer(host) {
  if (!host || !await warnerAktiv()) return null;
  const { sites } = await liesLokal("sites");
  if (siteErlaubt(sites, host)) return null;
  return pruefeHost(host, await ladeMarken());
}
async function warnungFuer(host) {
  const verdacht = await verdachtFuer(host);
  if (!verdacht) return { verdacht: null, texte: null };
  return { verdacht, texte: await texteFuer(verdacht) };
}
async function texteFuer(verdacht) {
  const t = await hintergrundText();
  return {
    titel: t("warnung.titel"),
    satz: fuellePlatzhalter(t("warnung.satz"), { marke: verdacht.marke }),
    aufgerufen: t("warnung.aufgerufen"),
    echte: t("warnung.echte"),
    weg: t("warnung.weg"),
    bleiben: t("warnung.bleiben")
  };
}

// src/hintergrund/nachrichten.ts
function ausEigenerOberflaeche(sender) {
  if (sender.id && sender.id !== api.runtime.id) return false;
  const url = sender.url ?? "";
  return url.startsWith(api.runtime.getURL(""));
}
async function tabZustand(tabId, sites) {
  let tab;
  try {
    tab = tabId !== void 0 ? await api.tabs.get(tabId) : (await api.tabs.query({ active: true, currentWindow: true }))[0];
  } catch {
    tab = void 0;
  }
  const host = hostAus(tab?.url);
  if (!tab || !host) return null;
  if (tab.id === void 0) {
    return { host, erlaubt: siteErlaubt(sites, host), blockiert: null, jeListe: [] };
  }
  const treffer = await trefferImTab(tab.id);
  return {
    host,
    erlaubt: siteErlaubt(sites, host),
    blockiert: treffer ? treffer.gesamt : await vomBadge(tab.id),
    jeListe: treffer?.jeListe ?? []
  };
}
async function zustand(tabId) {
  const [lokal, sitzung, listen] = await Promise.all([
    liesLokal("einstellungen", "sites", "konto", "kontoHinweis", "lizenz", "verbindungOffen"),
    liesSitzung("listenFehler", "verbindungFehler"),
    listenInfo()
  ]);
  const jetzt = Date.now();
  if (lokal.konto && !lizenzFrisch(lokal.lizenz, jetzt)) void lizenzPruefen("popup");
  const offen = lokal.verbindungOffen && lokal.verbindungOffen.laeuftAb > jetzt ? lokal.verbindungOffen : null;
  return {
    tab: await tabZustand(tabId, lokal.sites),
    aktiv: lokal.einstellungen.aktiv,
    listen: listen.map((l) => ({
      sprache: l.sprache,
      id: l.id,
      name: l.name,
      aktiv: lokal.einstellungen.listen[l.id] ?? l.standard,
      regeln: l.regeln,
      premium: l.premium,
      standard: l.standard
    })),
    konto: {
      verbunden: lokal.konto !== null,
      email: lokal.konto?.email,
      name: lokal.konto?.name ?? void 0,
      hinweis: lokal.kontoHinweis
    },
    lizenz: lizenzWirksam(lokal.lizenz, jetzt),
    verbindung: offen ? { code: offen.code, verbindenUrl: offen.verbindenUrl, laeuftAb: offen.laeuftAb } : null,
    version: VERSION,
    browser: BROWSER,
    einstellungen: lokal.einstellungen,
    listenFehler: sitzung.listenFehler,
    verbindungFehler: sitzung.verbindungFehler
  };
}
async function meldungVorschau(tabId) {
  let tab;
  try {
    tab = await api.tabs.get(tabId);
  } catch {
    tab = void 0;
  }
  const seite = tab?.url ? seiteOhneQuery(tab.url) : null;
  if (!seite) throw new ApiFehler("KEINE_SEITE", "", 0);
  const host = hostAus(tab?.url);
  const [listen, kosmetik, scriptlets] = await Promise.all([aktiveListen(), kosmetikFuer(host), scriptletsFuer(host)]);
  const regeln = [
    ...kosmetik.selektoren.map((s) => `##${s}`),
    ...scriptlets.map((e) => `##+js(${[e.name, ...e.args].join(", ")})`)
  ].slice(0, MELDUNG_MAX_REGELN).map((r) => r.slice(0, MELDUNG_MAX_REGEL_LAENGE));
  return { seite, browser: BROWSER, version: VERSION, listen: bereicheVon(listen), regeln };
}
async function behandle(n, sender) {
  if (n.typ === "kosmetik") return kosmetikFuer(n.host, hostAus(sender.tab?.url) ?? n.host);
  if (n.typ === "kosmetik.generisch") return { css: await generischesCss(n.listen) };
  if (n.typ === "verwechslung.pruefen") return warnungFuer(n.host);
  if (n.typ === "cookies.antwort") return { antwort: await cookieAntwort() };
  if (!ausEigenerOberflaeche(sender)) throw new ApiFehler("NICHT_ERLAUBT", "", 0);
  switch (n.typ) {
    case "zustand":
      return zustand(n.tabId);
    case "aktiv.setzen": {
      const { einstellungen } = await liesLokal("einstellungen");
      await schreibeLokal({ einstellungen: { ...einstellungen, aktiv: n.aktiv } });
      await allesAnwenden();
      return {};
    }
    case "site.setzen": {
      const { sites } = await liesLokal("sites");
      const neu = { ...sites };
      if (n.erlaubt) neu[n.host] = { erlaubt: true, seit: Date.now() };
      else delete neu[n.host];
      await schreibeLokal({ sites: neu });
      await aktualisiereDynamischeRegeln();
      await allesAnwenden();
      return {};
    }
    case "liste.setzen": {
      const listen = await listenInfo();
      const liste = listen.find((l) => l.id === n.id);
      if (!liste) throw new ApiFehler("LISTE_UNBEKANNT", "", 0);
      if (n.aktiv && liste.premium && !(await aktuelleLizenz()).premium) throw new ApiFehler("LIZENZ_ERFORDERLICH", "", 403);
      const { einstellungen } = await liesLokal("einstellungen");
      await schreibeLokal({ einstellungen: { ...einstellungen, listen: { ...einstellungen.listen, [n.id]: n.aktiv } } });
      await allesAnwenden();
      return {};
    }
    case "konto.verbinden":
      return verbindungStarten();
    case "konto.trennen":
      await kontoTrennen();
      return {};
    case "lizenz.pruefen":
      return { lizenz: await lizenzPruefen("oberflaeche") };
    case "premium.kaufen": {
      if (n.zustimmung === false) throw new ApiFehler("ZUSTIMMUNG_FEHLT", "", 0);
      const url = await checkoutUrl(n.interval);
      try {
        await api.tabs.create({ url });
      } catch {
      }
      return { url };
    }
    case "tarife.holen":
      return tarifeHolen();
    case "meldung.vorschau":
      return meldungVorschau(n.tabId);
    case "meldung.senden": {
      const seite = seiteOhneQuery(n.seite);
      if (!seite) throw new ApiFehler("KEINE_SEITE", "", 0);
      return meldungSenden({ seite, browser: n.browser, version: n.version, listen: n.listen, regeln: n.regeln }, n.kommentar);
    }
    case "regeln.eigene.setzen": {
      await schreibeLokal({ eigeneRegeln: n.text });
      const { anzahl, fehler } = await aktualisiereDynamischeRegeln();
      return { anzahl, fehler };
    }
    case "abgleich.jetzt":
      return abgleichJetzt();
    case "listen.pflegen": {
      const ergebnis = await pflegeListen();
      return { ergebnis };
    }
  }
}
function registriereNachrichten() {
  api.runtime.onMessage.addListener((roh, sender, sendResponse) => {
    const n = pruefeNachricht(roh);
    if (!n) {
      sendResponse({ ok: false, code: "NACHRICHT_UNGUELTIG" });
      return false;
    }
    behandle(n, sender).then(
      (daten) => sendResponse(n.typ === "kosmetik" || n.typ === "kosmetik.generisch" ? daten : { ok: true, ...daten }),
      (e) => {
        const code = e instanceof ApiFehler ? e.code : "INTERN";
        if (!(e instanceof ApiFehler)) console.warn("[AdSilence] Nachricht", n.typ, e);
        if (n.typ === "kosmetik") sendResponse({ selektoren: [], textregeln: [], aus: false, listen: [], fingerabdruck: { an: true, token: null } });
        else if (n.typ === "kosmetik.generisch") sendResponse({ css: "" });
        else sendResponse({ ok: false, code, grund: e instanceof Error ? e.message : void 0 });
      }
    );
    return true;
  });
}

// src/hintergrund/index.ts
registriereNachrichten();
registriereAlarme();
registriereScriptlets();
registrierePopupWaechter();
registriereKaufRueckkehr();
api.runtime.onInstalled.addListener((details) => {
  void einrichten(details.reason);
});
var onStartup = api.runtime.onStartup;
if (onStartup) {
  onStartup.addListener(() => {
    void einrichten("startup");
  });
}
void verbindungFortsetzen();
void sitzungsToken().catch(() => {
});
async function einrichten(anlass) {
  try {
    await migriereSpeicher();
    await alarmeEinrichten();
    await waehleRegionaleListe();
    await allesAnwenden();
    await aktualisiereDynamischeRegeln();
    void lizenzPruefen(anlass);
    void pflegeNachholen().catch(() => {
    });
  } catch (e) {
    console.error("[AdSilence] Einrichten", anlass, e);
  }
}
