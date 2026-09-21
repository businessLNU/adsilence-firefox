import { r as reactExports, l as leseSpeicher, b as beiSpeicherAenderung, t, j as jsxRuntimeExports, H as Hinweis, K as Knopf, f as formatiereDatum, a as Kreuz, s as sende, c as fehlerText, N as NachrichtFehler, E as Extern, o as oeffneTab, U as UMGEBUNG, P as PremiumWahl, S as Schalter, v as verfuegbareSprachen, d as schreibeSpeicher, e as formatiereZahl, g as Schloss, B as BROWSER, I as Info, L as LISTENPFLEGE_VERALTET_MS, h as schluesselAusId, i as hatText, p as preisseite, u as useSprache, n as nutzeZustand, M as Marke, k as paketUrl, m as Skeleton, q as starteOberflaeche, w as clientExports } from "./PremiumWahl.js";
const SPRACHEN = [
  { code: "en", name: "English", dir: "ltr" },
  { code: "zh", name: "中文", dir: "ltr" },
  { code: "es", name: "Español", dir: "ltr" },
  { code: "de", name: "Deutsch", dir: "ltr" },
  { code: "pt", name: "Português", dir: "ltr" },
  { code: "ru", name: "Русский", dir: "ltr" },
  { code: "fr", name: "Français", dir: "ltr" },
  { code: "ja", name: "日本語", dir: "ltr" },
  { code: "it", name: "Italiano", dir: "ltr" },
  { code: "ko", name: "한국어", dir: "ltr" },
  { code: "tr", name: "Türkçe", dir: "ltr" },
  { code: "fa", name: "فارسی", dir: "rtl" },
  { code: "nl", name: "Nederlands", dir: "ltr" },
  { code: "id", name: "Bahasa Indonesia", dir: "ltr" },
  { code: "pl", name: "Polski", dir: "ltr" },
  { code: "vi", name: "Tiếng Việt", dir: "ltr" },
  { code: "th", name: "ไทย", dir: "ltr" },
  { code: "sv", name: "Svenska", dir: "ltr" },
  { code: "hi", name: "हिन्दी", dir: "ltr" },
  { code: "ar", name: "العربية", dir: "rtl" }
];
function spracheName(code) {
  return SPRACHEN.find((s) => s.code === code)?.name ?? code;
}
function normalisiereHost(eingabe) {
  let h = eingabe.trim().toLowerCase();
  h = h.replace(/^[a-z]+:\/\//, "").replace(/[/?#].*$/, "").replace(/:\d+$/, "");
  if (h.startsWith("www.")) h = h.slice(4);
  if (!/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(h) && h !== "localhost") return null;
  return h;
}
function Ausnahmen() {
  const [sites, setSites] = reactExports.useState(null);
  const [eingabe, setEingabe] = reactExports.useState("");
  const [feldFehler, setFeldFehler] = reactExports.useState(null);
  const [fehler, setFehler] = reactExports.useState(null);
  const [wartend, setWartend] = reactExports.useState(null);
  const [offen, setOffen] = reactExports.useState(() => location.hash.replace(/^#/, "") === "ausnahmen");
  reactExports.useEffect(() => {
    let lebt = true;
    leseSpeicher("sites").then((s) => lebt && setSites(s.sites)).catch(() => lebt && setSites({}));
    const ab = beiSpeicherAenderung((a) => {
      if (a.sites !== void 0) setSites(a.sites ?? {});
    });
    return () => {
      lebt = false;
      ab();
    };
  }, []);
  async function setze(host, erlaubt) {
    setFehler(null);
    setWartend(host);
    try {
      await sende({ typ: "site.setzen", host, erlaubt });
    } catch (e) {
      setFehler(fehlerText(e instanceof NachrichtFehler ? e.code : void 0));
    } finally {
      setWartend(null);
    }
  }
  async function hinzufuegen(e) {
    e.preventDefault();
    const host = normalisiereHost(eingabe);
    if (!host) {
      setFeldFehler(t("optionen.ausnahmen.ungueltig"));
      return;
    }
    if (sites?.[host]?.erlaubt) {
      setFeldFehler(t("optionen.ausnahmen.schonDa"));
      return;
    }
    setFeldFehler(null);
    await setze(host, true);
    setEingabe("");
  }
  const eintraege = Object.entries(sites ?? {}).filter(([, s]) => s.erlaubt).sort((a, b) => b[1].seit - a[1].seit);
  const stand = eintraege.length === 0 ? t("optionen.ausnahmen.standKeine") : eintraege.length === 1 ? t("optionen.ausnahmen.standEine") : t("optionen.ausnahmen.stand", { anzahl: String(eintraege.length) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "aufklapper",
        "aria-expanded": offen,
        "aria-controls": "ausnahmen-inhalt",
        onClick: () => setOffen((o) => !o),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "wachsend", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "aufklapper__titel", id: "ausnahmen-titel", children: t("optionen.ausnahmen.titel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "aufklapper__stand", children: stand })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "aufklapper__pfeil", "aria-hidden": "true" })
        ]
      }
    ),
    offen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "ausnahmen-inhalt", className: "aufklapper__inhalt", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "klein schwach", children: t("optionen.ausnahmen.text") }),
      fehler ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "fehler", children: fehler }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "liste__zeile liste__zeile--eingabe", onSubmit: (e) => void hinzufuegen(e), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "ausnahme-host",
            className: "feld__eingabe wachsend",
            "aria-label": t("optionen.ausnahmen.host"),
            placeholder: t("optionen.ausnahmen.hostPlatzhalter"),
            "aria-describedby": feldFehler ? "ausnahme-host-fehler" : void 0,
            "aria-invalid": feldFehler ? true : void 0,
            value: eingabe,
            onChange: (e) => {
              setEingabe(e.target.value);
              if (feldFehler) setFeldFehler(null);
            },
            autoComplete: "off",
            spellCheck: false,
            inputMode: "url",
            dir: "ltr"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Knopf, { art: "primaer", klein: true, type: "submit", beschaeftigt: wartend !== null, children: t("gemeinsam.hinzufuegen") })
      ] }),
      feldFehler ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feld__fehler", id: "ausnahme-host-fehler", role: "alert", children: feldFehler }) : null,
      eintraege.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste stagger", children: eintraege.map(([host, s], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liste__zeile", style: { "--i": i }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wachsend", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__name mono", dir: "ltr", children: host }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__nebentext", children: t("optionen.ausnahmen.seit", { datum: formatiereDatum(s.seit) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Knopf, { art: "leise", klein: true, "aria-label": t("optionen.ausnahmen.entfernenVon", { host }), beschaeftigt: wartend === host, onClick: () => void setze(host, false), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Kreuz, { groesse: 16 }),
          t("gemeinsam.entfernen")
        ] })
      ] }, host)) }) : null
    ] }) : null
  ] });
}
function Konto({ zustand, neuLaden }) {
  const [fehler, setFehler] = reactExports.useState(null);
  const [laeuft, setLaeuft] = reactExports.useState(null);
  const [abgleich, setAbgleich] = reactExports.useState(null);
  const [offen, setOffen] = reactExports.useState(() => location.hash.replace(/^#/, "") === "konto");
  const { konto, lizenz, verbindung } = zustand;
  reactExports.useEffect(() => {
    let lebt = true;
    leseSpeicher("abgleich").then((s) => lebt && setAbgleich(s.abgleich)).catch(() => {
    });
    const ab = beiSpeicherAenderung((a) => {
      if (a.abgleich) setAbgleich(a.abgleich);
    });
    return () => {
      lebt = false;
      ab();
    };
  }, []);
  async function tu(name, arbeit) {
    setFehler(null);
    setLaeuft(name);
    try {
      await arbeit();
      await neuLaden();
    } catch (e) {
      setFehler(fehlerText(e instanceof NachrichtFehler ? e.code : void 0));
    } finally {
      setLaeuft(null);
    }
  }
  function zeile(inhalt) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "aufklapper",
          "aria-expanded": offen,
          "aria-controls": "konto-inhalt",
          onClick: () => setOffen((o) => !o),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "wachsend", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "aufklapper__titel", id: "konto-titel", children: t("optionen.konto.titel") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "aufklapper__stand", children: konto.verbunden ? konto.email : t("optionen.konto.nichtVerbunden") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "aufklapper__pfeil", "aria-hidden": "true" })
          ]
        }
      ),
      offen ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "konto-inhalt", className: "aufklapper__inhalt", children: inhalt }) : null
    ] });
  }
  if (!konto.verbunden) {
    return zeile(
      /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        konto.hinweis === "gesperrt" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "warn", children: t("gemeinsam.gesperrt") }) : null,
        konto.hinweis === "neuVerbinden" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "warn", children: t("gemeinsam.neuVerbinden") }) : null,
        zustand.verbindungFehler ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "fehler", children: fehlerText(zustand.verbindungFehler) }) : null,
        fehler ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "fehler", children: fehler }) : null,
        verbindung ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stapel", style: { maxWidth: 440 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "klein schwach", children: t("optionen.konto.code") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "code", "aria-live": "polite", children: verbindung.code }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "klein schwach", children: t("optionen.konto.codeText") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "neutral", children: t("optionen.konto.wartet") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reihe", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Knopf, { art: "primaer", className: "wachsend", onClick: () => void oeffneTab(verbindung.verbindenUrl), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Extern, { groesse: 16 }),
              t("optionen.konto.websiteOeffnen")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Knopf, { art: "leise", beschaeftigt: laeuft === "code", onClick: () => void tu("code", () => sende({ typ: "konto.verbinden" })), children: t("optionen.konto.neuerCode") })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reihe", style: { justifyContent: "flex-start" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Knopf, { art: "primaer", beschaeftigt: laeuft === "code", onClick: () => void tu("code", () => sende({ typ: "konto.verbinden" })), children: t("gemeinsam.kontoVerbinden") }) })
      ] })
    );
  }
  const bis = formatiereDatum(lizenz.gueltigBis);
  return zeile(
    /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      konto.hinweis === "gesperrt" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "warn", children: t("gemeinsam.gesperrt") }) : null,
      lizenz.hinweis === "zahlungOffen" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "warn", children: t("gemeinsam.zahlungOffen") }) : null,
      lizenz.hinweis === "angehalten" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "warn", children: t("gemeinsam.angehalten") }) : null,
      fehler ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "fehler", children: fehler }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "zwei-spalten", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stapel", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "paare", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: t("optionen.konto.email") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: konto.email }),
            konto.name ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: t("optionen.konto.name") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: konto.name })
            ] }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: t("optionen.konto.tarif") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: lizenz.premium ? t("gemeinsam.premium") : t("gemeinsam.frei") }),
            lizenz.premium && bis ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: t("optionen.konto.gueltigBis") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "zahl", children: bis })
            ] }) : null
          ] }),
          lizenz.premium ? /* @__PURE__ */ jsxRuntimeExports.jsx(Knopf, { art: "primaer", onClick: () => void oeffneTab(`${UMGEBUNG.apiBasis}/konto`), children: t("gemeinsam.premiumVerwalten") }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumWahl, { onFehler: (code) => setFehler(fehlerText(code)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stapel", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("optionen.konto.abgleich") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "klein schwach", children: t("optionen.konto.abgleichText") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reihe", style: { flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Knopf, { art: "sekundaer", klein: true, disabled: !lizenz.premium, beschaeftigt: laeuft === "abgleich", onClick: () => void tu("abgleich", () => sende({ typ: "abgleich.jetzt" })), children: t("optionen.konto.abgleichJetzt") }),
            abgleich?.aktualisiertAm ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "klein schwach zahl", children: t("optionen.konto.abgeglichen", { datum: formatiereDatum(abgleich.aktualisiertAm, "datumZeit") }) }) : null
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stapel", style: { gap: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Knopf, { art: "gefahr", beschaeftigt: laeuft === "trennen", onClick: () => void tu("trennen", () => sende({ typ: "konto.trennen" })), children: t("gemeinsam.trennen") }) }) })
    ] })
  );
}
const ZEIGE = 5;
function SprachListen({ listen }) {
  const [offen, setOffen] = reactExports.useState(false);
  const [suche, setSuche] = reactExports.useState("");
  const [alleZeigen, setAlleZeigen] = reactExports.useState(false);
  const [fehler, setFehler] = reactExports.useState(null);
  const [wartend, setWartend] = reactExports.useState(null);
  const [lokal, setLokal] = reactExports.useState({});
  const regional = listen.filter((l) => l.sprache);
  const anzahlAn = regional.filter((l) => lokal[l.id] ?? l.aktiv).length;
  async function schalte(l, an) {
    setFehler(null);
    setWartend(l.id);
    setLokal((a) => ({ ...a, [l.id]: an }));
    try {
      await sende({ typ: "liste.setzen", id: l.id, aktiv: an });
    } catch (e) {
      setLokal((a) => ({ ...a, [l.id]: !an }));
      setFehler(fehlerText(e instanceof NachrichtFehler ? e.code : void 0));
    } finally {
      setWartend(null);
    }
  }
  const gesucht = suche.trim().toLowerCase();
  const gefiltert = gesucht ? regional.filter(
    (l) => spracheName(l.sprache ?? "").toLowerCase().includes(gesucht) || l.name.toLowerCase().includes(gesucht)
  ) : regional;
  const gekuerzt = !gesucht && !alleZeigen && gefiltert.length > ZEIGE;
  const sichtbar = gekuerzt ? gefiltert.slice(0, ZEIGE) : gefiltert;
  if (regional.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "aufklapper",
        "aria-expanded": offen,
        "aria-controls": "sprachlisten",
        onClick: () => setOffen((o) => !o),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "wachsend", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "aufklapper__titel", children: t("optionen.listen.regionalTitel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "aufklapper__stand", children: t("optionen.listen.regionalStand", { anzahl: String(anzahlAn) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "aufklapper__pfeil", "aria-hidden": "true" })
        ]
      }
    ),
    offen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "sprachlisten", className: "aufklapper__inhalt", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "klein schwach", children: t("optionen.listen.regionalText") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "search",
          className: "feld__eingabe suchfeld suchfeld--breit",
          value: suche,
          onChange: (e) => setSuche(e.target.value),
          placeholder: t("optionen.listen.suche"),
          "aria-label": t("optionen.listen.suche")
        }
      ),
      fehler ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "fehler", children: fehler }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liste", children: [
        sichtbar.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__leer", children: t("optionen.listen.keinTreffer") }) : null,
        sichtbar.map((l) => {
          const an = lokal[l.id] ?? l.aktiv;
          const id = `liste-${l.id}`;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liste__zeile", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wachsend", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__name", id: `${id}-name`, lang: l.sprache, children: spracheName(l.sprache ?? "") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Schalter,
              {
                id,
                an,
                disabled: wartend === l.id,
                onWechsel: (neu) => void schalte(l, neu),
                "aria-labelledby": `${id}-name`
              }
            )
          ] }, l.id);
        })
      ] }),
      gekuerzt ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "knopf knopf--leise knopf--breit",
          onClick: () => setAlleZeigen(true),
          children: t("optionen.listen.mehr", { anzahl: String(gefiltert.length - ZEIGE) })
        }
      ) : null
    ] }) : null
  ] });
}
function Link({ href, children, onClick, ...rest }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href,
      rel: "noopener",
      onClick: (e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        e.preventDefault();
        void oeffneTab(href);
      },
      ...rest,
      children
    }
  );
}
const BROWSER_NAME = { chromium: "Chromium", firefox: "Firefox", safari: "Safari" };
function Ueber({ zustand }) {
  const [offen, setOffen] = reactExports.useState(() => location.hash.replace(/^#/, "") === "ueber");
  const basis = UMGEBUNG.apiBasis;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "aufklapper",
        "aria-expanded": offen,
        "aria-controls": "ueber-inhalt",
        onClick: () => setOffen((o) => !o),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "wachsend", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "aufklapper__titel", id: "ueber-titel", children: t("optionen.ueber.titel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "aufklapper__stand zahl", children: t("optionen.ueber.version", { version: zustand.version || UMGEBUNG.version }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "aufklapper__pfeil", "aria-hidden": "true" })
        ]
      }
    ),
    offen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "ueber-inhalt", className: "aufklapper__inhalt", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "paare", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: t("optionen.ueber.browser") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: BROWSER_NAME[zustand.browser] ?? zustand.browser })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "klein schwach", children: t("optionen.ueber.datenschutz") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reihe", style: { gap: 16 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: `${basis}/impressum`, children: t("optionen.ueber.impressum") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: `${basis}/datenschutz`, children: t("optionen.ueber.datenschutzLink") })
      ] })
    ] }) : null
  ] });
}
const THEMEN = ["system", "hell", "dunkel"];
const THEMA_TEXT = { system: "optionen.einstellungen.themaSystem", hell: "optionen.einstellungen.themaHell", dunkel: "optionen.einstellungen.themaDunkel" };
function Einstellungen({ zustand, neuLaden }) {
  const [e, setE] = reactExports.useState(null);
  const [fehler, setFehler] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let lebt = true;
    leseSpeicher("einstellungen").then((s) => lebt && setE(s.einstellungen)).catch(() => lebt && setFehler(fehlerText("HINTERGRUND_FEHLT")));
    const ab = beiSpeicherAenderung((a) => {
      if (a.einstellungen) setE(a.einstellungen);
    });
    return () => {
      lebt = false;
      ab();
    };
  }, []);
  async function aendere(teil) {
    setFehler(null);
    setE((alt) => alt ? { ...alt, ...teil } : alt);
    try {
      const { einstellungen } = await leseSpeicher("einstellungen");
      await schreibeSpeicher({ einstellungen: { ...einstellungen, ...teil } });
    } catch {
      setFehler(fehlerText("HINTERGRUND_FEHLT"));
    }
  }
  const sprachen = SPRACHEN.filter((s) => verfuegbareSprachen.includes(s.code));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bereich", "aria-labelledby": "einstellungen-titel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bereich__kopf", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "einstellungen-titel", children: t("optionen.einstellungen.titel") }) }),
    fehler ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "fehler", children: fehler }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liste", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liste__zeile", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wachsend", children: /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "liste__name", htmlFor: "sprache", children: t("optionen.einstellungen.sprache") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            id: "sprache",
            className: "feld__eingabe zeilenwahl",
            value: e?.sprache ?? "",
            disabled: !e,
            onChange: (ev) => void aendere({ sprache: ev.target.value || null }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("optionen.einstellungen.spracheSystem") }),
              sprachen.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.code, children: s.name }, s.code))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liste__zeile", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wachsend", children: /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "liste__name", htmlFor: "thema", children: t("optionen.einstellungen.thema") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            id: "thema",
            className: "feld__eingabe zeilenwahl",
            value: e?.thema ?? "system",
            disabled: !e,
            onChange: (ev) => void aendere({ thema: ev.target.value }),
            children: THEMEN.map((th) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: th, children: t(THEMA_TEXT[th]) }, th))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liste__zeile", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wachsend", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__name", id: "badge-name", children: t("optionen.einstellungen.badge") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__nebentext", children: t("optionen.einstellungen.badgeText") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Schalter,
          {
            id: "badge",
            an: e?.zaehlerBadge ?? true,
            disabled: !e,
            onWechsel: (an) => void aendere({ zaehlerBadge: an }),
            "aria-labelledby": "badge-name"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SprachListen, { listen: zustand.listen }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ausnahmen, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Konto, { zustand, neuLaden }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ueber, { zustand })
    ] })
  ] });
}
function istUeberfaellig(am, jetzt, grenzeMs) {
  if (!am) return true;
  const zeit = Date.parse(am);
  if (!Number.isFinite(zeit)) return true;
  return jetzt - zeit > grenzeMs;
}
function nameVon(l) {
  if (l.sprache) return spracheName(l.sprache);
  const k = `optionen.listen.${schluesselAusId(l.id)}.name`;
  return hatText(k) ? t(k) : l.id;
}
function textVon(l) {
  if (l.sprache) return "";
  const k = `optionen.listen.${schluesselAusId(l.id)}.text`;
  return hatText(k) ? t(k) : l.id;
}
const EINZELN = /* @__PURE__ */ new Set([]);
function SchalterAttrappe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "schalter schalter--attrappe", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "schalter__bahn", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "schalter__knopf" }) }) });
}
function kaufProps(gesperrt) {
  if (!gesperrt) return { className: "liste__zeile" };
  const oeffne = () => void oeffneTab(preisseite());
  return {
    className: "liste__zeile liste__zeile--kauf",
    role: "button",
    tabIndex: 0,
    onClick: oeffne,
    onKeyDown: (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      oeffne();
    }
  };
}
function Filterlisten({ zustand }) {
  const [fehler, setFehler] = reactExports.useState(null);
  const [wartend, setWartend] = reactExports.useState(null);
  const [lokal, setLokal] = reactExports.useState({});
  const premium = zustand.lizenz.premium;
  const grund = zustand.listen.filter((l) => !l.sprache && l.standard && !EINZELN.has(l.id));
  const einzeln = zustand.listen.filter((l) => !l.sprache && (!l.standard || EINZELN.has(l.id)));
  const grundAn = grund.length > 0 && grund.every((l) => lokal[l.id] ?? l.aktiv);
  const grundWartet = grund.some((l) => wartend === l.id);
  async function schalteGrund(an) {
    setFehler(null);
    setWartend(grund[0]?.id ?? null);
    setLokal((a) => ({ ...a, ...Object.fromEntries(grund.map((l) => [l.id, an])) }));
    try {
      for (const l of grund) await sende({ typ: "liste.setzen", id: l.id, aktiv: an });
    } catch (e2) {
      setLokal((a) => ({ ...a, ...Object.fromEntries(grund.map((l) => [l.id, !an])) }));
      setFehler(fehlerText(e2 instanceof NachrichtFehler ? e2.code : void 0));
    } finally {
      setWartend(null);
    }
  }
  const [e, setE] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let lebt = true;
    void leseSpeicher("einstellungen").then((sp) => lebt && setE(sp.einstellungen)).catch(() => lebt && setFehler(fehlerText("HINTERGRUND_FEHLT")));
    const ab = beiSpeicherAenderung((a) => {
      if (a.einstellungen) setE(a.einstellungen);
    });
    return () => {
      lebt = false;
      ab();
    };
  }, []);
  async function aendere(teil) {
    setFehler(null);
    setE((alt) => alt ? { ...alt, ...teil } : alt);
    try {
      const { einstellungen } = await leseSpeicher("einstellungen");
      await schreibeSpeicher({ einstellungen: { ...einstellungen, ...teil } });
    } catch {
      setFehler(fehlerText("HINTERGRUND_FEHLT"));
    }
  }
  const [stand, setStand] = reactExports.useState(null);
  reactExports.useEffect(() => {
    void leseSpeicher("listenPflegeStand").then((sp) => setStand(sp.listenPflegeStand ?? null));
    return beiSpeicherAenderung((a) => {
      if (a.listenPflegeStand !== void 0) setStand(a.listenPflegeStand ?? null);
    });
  }, []);
  const veraltet = stand !== null && istUeberfaellig(stand.am, Date.now(), LISTENPFLEGE_VERALTET_MS);
  const pflegeText = stand ? [
    t("optionen.einstellungen.pflegeText"),
    t("optionen.einstellungen.pflegeStand", {
      anzahl: formatiereZahl(stand.neu),
      datum: formatiereDatum(stand.am) ?? ""
    }),
    stand.uebergangen ? t("optionen.einstellungen.pflegeUebergangen", { anzahl: formatiereZahl(stand.uebergangen) }) : "",
    stand.fehlend?.length ? t("optionen.einstellungen.pflegeAbruf") : "",
    veraltet ? t("optionen.einstellungen.pflegeVeraltet") : ""
  ].filter(Boolean).join(" ") : t("optionen.einstellungen.pflegeText");
  async function schalte(l, an) {
    setFehler(null);
    setWartend(l.id);
    setLokal((a) => ({ ...a, [l.id]: an }));
    try {
      await sende({ typ: "liste.setzen", id: l.id, aktiv: an });
    } catch (e2) {
      setLokal((a) => ({ ...a, [l.id]: !an }));
      setFehler(fehlerText(e2 instanceof NachrichtFehler ? e2.code : void 0));
    } finally {
      setWartend(null);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bereich", "aria-labelledby": "listen-titel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bereich__kopf", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "listen-titel", children: t("optionen.listen.titel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("optionen.listen.text") })
    ] }),
    zustand.listenFehler ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "warn", children: fehlerText(zustand.listenFehler) }) : null,
    fehler ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "fehler", children: fehler }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liste stagger", children: [
      zustand.listen.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__leer", children: t("optionen.listen.leer") }) : null,
      grund.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liste__zeile", style: { "--i": 0 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wachsend", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__name", id: "liste-grund-name", children: t("optionen.listen.grund.name") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__nebentext", children: t("optionen.listen.grund.text") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Schalter,
          {
            id: "liste-grund",
            an: grundAn,
            disabled: grundWartet,
            onWechsel: (neu) => void schalteGrund(neu),
            "aria-labelledby": "liste-grund-name"
          }
        )
      ] }) : null,
      einzeln.map((l, i) => {
        const gesperrt = l.premium && !premium;
        const an = lokal[l.id] ?? l.aktiv;
        const id = `liste-${l.id}`;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...kaufProps(gesperrt), style: { "--i": i + 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wachsend", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__name", id: `${id}-name`, children: nameVon(l) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__nebentext", children: textVon(l) })
          ] }),
          gesperrt ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "liste__schloss", title: t("gemeinsam.premium"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Schloss, {}) }) : null,
          gesperrt ? /* @__PURE__ */ jsxRuntimeExports.jsx(SchalterAttrappe, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Schalter, { id, an, disabled: wartend === l.id, onWechsel: (neu) => void schalte(l, neu), "aria-labelledby": `${id}-name` })
        ] }, l.id);
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...kaufProps(!premium), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wachsend", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__name", id: "warnung-name", children: t("optionen.einstellungen.warnung") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__nebentext", children: t("optionen.einstellungen.warnungText") })
        ] }),
        !premium ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "liste__schloss", title: t("gemeinsam.premium"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Schloss, {}) }) : null,
        !premium ? /* @__PURE__ */ jsxRuntimeExports.jsx(SchalterAttrappe, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Schalter,
          {
            id: "warnung",
            an: e?.warnung ?? false,
            disabled: !e,
            onWechsel: (an) => void aendere({ warnung: an }),
            "aria-labelledby": "warnung-name"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...kaufProps(!premium), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wachsend", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__name", id: "pflege-name", children: t("optionen.einstellungen.pflege") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__nebentext", children: premium ? pflegeText : t("optionen.einstellungen.pflegeText") })
        ] }),
        !premium ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "liste__schloss", title: t("gemeinsam.premium"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Schloss, {}) }) : null,
        !premium ? /* @__PURE__ */ jsxRuntimeExports.jsx(SchalterAttrappe, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Schalter,
          {
            id: "listenPflege",
            an: e?.listenPflege ?? true,
            disabled: !e,
            onWechsel: (an) => void aendere({ listenPflege: an }),
            "aria-labelledby": "pflege-name"
          }
        )
      ] }),
      BROWSER !== "safari" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...kaufProps(!premium), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wachsend", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liste__name", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "fingerabdruck-name", children: t("optionen.einstellungen.fingerabdruck") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tipp", children: [
              premium ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "tipp__knopf",
                  "aria-label": t("optionen.einstellungen.fingerabdruckTippName"),
                  "aria-describedby": "fingerabdruck-tipp",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { groesse: 15 })
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tipp__knopf", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { groesse: 15 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tipp__text", role: "tooltip", id: "fingerabdruck-tipp", children: t("optionen.einstellungen.fingerabdruckTipp") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__nebentext", children: t("optionen.einstellungen.fingerabdruckText") })
        ] }),
        !premium ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "liste__schloss", title: t("gemeinsam.premium"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Schloss, {}) }) : null,
        !premium ? /* @__PURE__ */ jsxRuntimeExports.jsx(SchalterAttrappe, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Schalter,
          {
            id: "fingerabdruck",
            an: e?.fingerabdruck ?? false,
            disabled: !e,
            onWechsel: (an) => void aendere({ fingerabdruck: an }),
            "aria-labelledby": "fingerabdruck-name",
            "aria-describedby": "fingerabdruck-tipp"
          }
        )
      ] }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...kaufProps(!premium), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wachsend", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "liste__name", htmlFor: "cookieAntwort", children: t("optionen.einstellungen.cookies") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste__nebentext", children: t("optionen.einstellungen.cookiesText") })
        ] }),
        !premium ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "liste__schloss", title: t("gemeinsam.premium"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Schloss, {}) }) : null,
        !premium ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "feld__eingabe zeilenwahl zeilenwahl--attrappe", "aria-hidden": "true", children: t("optionen.einstellungen.cookiesAus") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            id: "cookieAntwort",
            className: "feld__eingabe zeilenwahl",
            value: e?.cookieAntwort ?? "aus",
            disabled: !e,
            onChange: (ev) => void aendere({ cookieAntwort: ev.target.value }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "aus", children: t("optionen.einstellungen.cookiesAus") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ablehnen", children: t("optionen.einstellungen.cookiesAblehnen") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "annehmen", children: t("optionen.einstellungen.cookiesAnnehmen") })
            ]
          }
        )
      ] })
    ] })
  ] });
}
const BEREICHE = ["filterlisten", "einstellungen"];
const UMLEITUNG = { konto: "einstellungen", ueber: "einstellungen", ausnahmen: "einstellungen" };
function bereichAusAnker() {
  const anker = location.hash.replace(/^#/, "");
  if (BEREICHE.includes(anker)) return anker;
  return UMLEITUNG[anker] ?? "filterlisten";
}
function App() {
  useSprache();
  const [bereich, setBereich] = reactExports.useState(bereichAusAnker);
  const [bildFehlt, setBildFehlt] = reactExports.useState(false);
  const { zustand, fehler, laedt, neuLaden } = nutzeZustand(void 0);
  reactExports.useEffect(() => {
    document.title = t("optionen.titel");
  });
  reactExports.useEffect(() => {
    const beiAnker = () => setBereich(bereichAusAnker());
    window.addEventListener("hashchange", beiAnker);
    return () => window.removeEventListener("hashchange", beiAnker);
  }, []);
  reactExports.useEffect(() => {
    const anker = location.hash.replace(/^#/, "");
    if (!UMLEITUNG[anker] || !zustand) return;
    document.getElementById(`${anker}-titel`)?.scrollIntoView({ block: "start" });
  }, [bereich, zustand]);
  function wechsle(zu) {
    if (zu === bereich) return;
    history.pushState(null, "", `#${zu}`);
    setBereich(zu);
  }
  let inhalt;
  if (laedt && !zustand) {
    inhalt = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bereich", "aria-busy": "true", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stapel", style: { gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 20, breite: "30%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 14, breite: "60%" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liste", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liste__zeile", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stapel wachsend", style: { gap: 6 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 14, breite: "35%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 12, breite: "55%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 26, breite: 44, rund: true })
      ] }, i)) })
    ] });
  } else if (fehler || !zustand) {
    inhalt = /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "fehler", children: fehlerText(fehler ?? void 0) });
  } else {
    switch (bereich) {
      case "filterlisten":
        inhalt = /* @__PURE__ */ jsxRuntimeExports.jsx(Filterlisten, { zustand });
        break;
      case "einstellungen":
        inhalt = /* @__PURE__ */ jsxRuntimeExports.jsx(Einstellungen, { zustand, neuLaden });
        break;
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seite", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "seite__kopf", children: [
      bildFehlt ? /* @__PURE__ */ jsxRuntimeExports.jsx(Marke, { groesse: 32 }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "seite__bild", src: paketUrl("icons/icon-48.png"), alt: "", onError: () => setBildFehlt(true) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t("extName") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "nav", "aria-label": t("optionen.nav.label"), children: BEREICHE.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "nav__eintrag drueckbar", "aria-current": b === bereich ? "page" : void 0, onClick: () => wechsle(b), children: t(`optionen.nav.${b}`) }, b)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: inhalt }, bereich)
  ] });
}
void starteOberflaeche().finally(() => {
  clientExports.createRoot(document.getElementById("wurzel")).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
  );
});
