import { j as jsxRuntimeExports, r as reactExports, M as Marke, k as paketUrl, t, x as SymbolKnopf, Z as Zahnrad, y as oeffneOptionen, a as Kreuz, s as sende, N as NachrichtFehler, K as Knopf, H as Hinweis, c as fehlerText, m as Skeleton, i as hatText, z as MELDUNG_MAX_KOMMENTAR, P as PremiumWahl, e as formatiereZahl, S as Schalter, h as schluesselAusId, A as SAMMELREGEL, u as useSprache, n as nutzeZustand, C as aktiverTabId, D as LIZENZ_FRISCH_MS, q as starteOberflaeche, w as clientExports } from "./PremiumWahl.js";
function Karte({ eng, className, children, ...rest }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: ["karte", eng ? "karte--eng" : "", className ?? ""].join(" ").trim(), ...rest, children });
}
function Kopf({ premium = false }) {
  const [bildFehlt, setBildFehlt] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "kopf", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "kopf__marke", children: [
      bildFehlt ? /* @__PURE__ */ jsxRuntimeExports.jsx(Marke, { groesse: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "kopf__bild", src: paketUrl("icons/icon-32.png"), alt: "", onError: () => setBildFehlt(true) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("extName") }),
      premium ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "kopf__premium", children: t("gemeinsam.premium") }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SymbolKnopf, { beschriftung: t("popup.optionen"), onClick: () => void oeffneOptionen(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zahnrad, {}) })
  ] });
}
const AUSTRITT_MS = 140;
function Dialog({
  offen,
  onSchliessen,
  titel,
  schliessenText,
  children,
  fuss,
  className
}) {
  const ref = reactExports.useRef(null);
  const [sichtbar, setSichtbar] = reactExports.useState(false);
  const [imDom, setImDom] = reactExports.useState(offen);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (offen) {
      setImDom(true);
      const id = requestAnimationFrame(() => {
        if (el && !el.open) el.showModal();
        setSichtbar(true);
      });
      return () => cancelAnimationFrame(id);
    }
    setSichtbar(false);
    const t2 = setTimeout(() => {
      if (el?.open) el.close();
      setImDom(false);
    }, AUSTRITT_MS);
    return () => clearTimeout(t2);
  }, [offen]);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (offen && imDom && el && !el.open) el.showModal();
  }, [offen, imDom]);
  if (!imDom) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "dialog",
    {
      ref,
      className: ["dialog", className ?? ""].join(" ").trim(),
      "data-offen": sichtbar ? "1" : "0",
      "aria-labelledby": "dialog-titel",
      onCancel: (e) => {
        e.preventDefault();
        onSchliessen();
      },
      onClick: (e) => {
        if (e.target === ref.current) onSchliessen();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog__inhalt", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog__kopf", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "dialog-titel", children: titel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SymbolKnopf, { beschriftung: schliessenText, onClick: onSchliessen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Kreuz, {}) })
        ] }),
        children,
        fuss ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dialog__fuss", children: fuss }) : null
      ] })
    }
  );
}
function Huelle({ id, label, hinweis, fehler, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feld", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "feld__label", htmlFor: id, children: label }),
    children,
    hinweis ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feld__hinweis", id: `${id}-hinweis`, children: hinweis }) : null,
    fehler ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feld__fehler", id: `${id}-fehler`, role: "alert", children: fehler }) : null
  ] });
}
function beschreibung(id, hinweis, fehler) {
  const teile = [];
  if (hinweis) teile.push(`${id}-hinweis`);
  if (fehler) teile.push(`${id}-fehler`);
  return teile.length ? teile.join(" ") : void 0;
}
function Textfeld({ id, label, hinweis, fehler, className, ...rest }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Huelle, { id, label, hinweis, fehler, children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id, className: ["feld__eingabe", className ?? ""].join(" ").trim(), "aria-invalid": fehler ? "true" : void 0, "aria-describedby": beschreibung(id, hinweis, fehler), ...rest }) });
}
function MeldungDialog({ offen, tabId, onSchliessen }) {
  const [lage, setLage] = reactExports.useState({ art: "laedt" });
  const [kommentar, setKommentar] = reactExports.useState("");
  const [sendet, setSendet] = reactExports.useState(false);
  const [sendeFehler, setSendeFehler] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!offen) return;
    let lebt = true;
    setLage({ art: "laedt" });
    setKommentar("");
    setSendeFehler(null);
    if (tabId === void 0) {
      setLage({ art: "fehler", code: "KEINE_SEITE" });
      return;
    }
    sende({ typ: "meldung.vorschau", tabId }).then((daten) => lebt && setLage({ art: "vorschau", daten })).catch((e) => lebt && setLage({ art: "fehler", code: e instanceof NachrichtFehler ? e.code : "HINTERGRUND_FEHLT" }));
    return () => {
      lebt = false;
    };
  }, [offen, tabId]);
  async function senden() {
    if (lage.art !== "vorschau") return;
    setSendet(true);
    setSendeFehler(null);
    try {
      const { seite, browser, version, listen, regeln } = lage.daten;
      await sende({ typ: "meldung.senden", seite, browser, version, listen, regeln, ...kommentar.trim() ? { kommentar: kommentar.trim() } : {} });
      setLage({ art: "gesendet" });
    } catch (e) {
      setSendeFehler(e instanceof NachrichtFehler && e.code !== "HINTERGRUND_FEHLT" ? t("popup.meldung.fehler") : fehlerText(e instanceof NachrichtFehler ? e.code : void 0));
    } finally {
      setSendet(false);
    }
  }
  const fuss = lage.art === "gesendet" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Knopf, { art: "primaer", onClick: onSchliessen, children: t("gemeinsam.schliessen") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Knopf, { art: "leise", onClick: onSchliessen, children: t("gemeinsam.abbrechen") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Knopf, { art: "primaer", disabled: lage.art !== "vorschau", beschaeftigt: sendet, onClick: () => void senden(), children: t("popup.meldung.senden") })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { offen, onSchliessen, titel: t("popup.meldung.titel"), schliessenText: t("gemeinsam.schliessen"), fuss, children: lage.art === "gesendet" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "gut", children: t("popup.meldung.gesendet") }) : lage.art === "fehler" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "fehler", children: lage.code === "KEINE_SEITE" ? t("popup.meldung.keineSeite") : fehlerText(lage.code) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "klein schwach", children: t("popup.meldung.text") }),
    lage.art === "laedt" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stapel", "aria-busy": "true", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 14, breite: "80%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 14, breite: "40%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 14, breite: "55%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 14, breite: "65%" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "paare", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: t("popup.meldung.seite") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mono", children: lage.daten.seite }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: t("popup.meldung.browser") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: lage.daten.browser }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: t("popup.meldung.version") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "zahl", children: lage.daten.version }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: t("popup.meldung.listen") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: lage.daten.listen.filter((b) => hatText(`popup.meldung.bereich.${b}`)).map((b) => t(`popup.meldung.bereich.${b}`)).join(", ") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: t("popup.meldung.regeln") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("dd", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "klein schwach", children: t("popup.meldung.regelnAnzahl", { anzahl: lage.daten.regeln.length }) }),
        lage.daten.regeln.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mono klein", style: { margin: "4px 0 0", paddingInlineStart: 16 }, children: lage.daten.regeln.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: r }, i)) }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Textfeld,
      {
        id: "meldung-kommentar",
        label: t("popup.meldung.kommentar"),
        hinweis: t("popup.meldung.kommentarHinweis"),
        fehler: sendeFehler,
        value: kommentar,
        maxLength: MELDUNG_MAX_KOMMENTAR,
        rows: 3,
        style: { minHeight: 72, fontFamily: "inherit" },
        onChange: (e) => setKommentar(e.target.value),
        disabled: lage.art !== "vorschau"
      }
    )
  ] }) });
}
function KontoZeile({ email, onTrennen, beschaeftigt }) {
  if (!email) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "kontozeile", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "klein schwach abschneiden", children: t("popup.premium.verbundenAls", { email }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Knopf, { art: "leise", klein: true, beschaeftigt, onClick: onTrennen, children: t("gemeinsam.trennen") })
  ] });
}
function PremiumKarte({ zustand, onVerbinden, onTrennen, onFehler, beschaeftigt }) {
  const { konto, lizenz, verbindung } = zustand;
  if (konto.hinweis === "gesperrt") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Karte, { className: "stapel", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "warn", children: t("gemeinsam.gesperrt") }) });
  }
  if (!konto.verbunden) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Karte, { className: "stapel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "premium__titel", children: t("gemeinsam.premium") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "klein schwach", children: t("popup.premium.text") }),
      konto.hinweis === "neuVerbinden" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "warn", children: t("gemeinsam.neuVerbinden") }) : null,
      verbindung ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Hinweis, { art: "neutral", children: [
        t("optionen.konto.wartet"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mono", children: verbindung.code })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Knopf, { art: "primaer", breit: true, beschaeftigt, onClick: onVerbinden, children: t("gemeinsam.kontoVerbinden") })
    ] });
  }
  if (!lizenz.premium) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Karte, { className: "stapel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "premium__titel", children: t("gemeinsam.premium") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "klein schwach", children: t("popup.premium.text") }),
      lizenz.hinweis === "zahlungOffen" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "warn", children: t("gemeinsam.zahlungOffen") }) : null,
      lizenz.hinweis === "angehalten" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "warn", children: t("gemeinsam.angehalten") }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumWahl, { breit: true, onFehler }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KontoZeile, { email: konto.email, onTrennen, beschaeftigt })
    ] });
  }
  const warnung = lizenz.hinweis === "zahlungOffen" ? t("gemeinsam.zahlungOffen") : lizenz.hinweis === "angehalten" ? t("gemeinsam.angehalten") : null;
  if (!warnung) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Karte, { className: "stapel", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "warn", children: warnung }) });
}
function regelName(was) {
  return was === SAMMELREGEL ? t("popup.site.sammelregel") : was;
}
function listenName(id) {
  const schluessel = `optionen.listen.${schluesselAusId(id)}.name`;
  return hatText(schluessel) ? t(schluessel) : id;
}
function SiteKarte({
  tab,
  aktiv,
  onWechsel,
  beschaeftigt,
  premium = false
}) {
  const blockt = Boolean(tab) && aktiv && !tab.erlaubt;
  const [offen, setzeOffen] = reactExports.useState(false);
  const details = blockt ? tab?.jeListe ?? [] : [];
  let zaehler;
  if (!tab) zaehler = t("popup.site.keineSeite");
  else if (!aktiv) zaehler = t("popup.aktivAus");
  else if (tab.erlaubt) zaehler = t("popup.site.erlaubt");
  else if (tab.blockiert === "amSymbol") zaehler = null;
  else if (tab.blockiert === null) zaehler = t("popup.site.zaehlerFehlt");
  else if (tab.blockiert === 0) zaehler = t("popup.site.blockiertKeine");
  else if (tab.blockiert === 1) zaehler = t("popup.site.blockiertEine");
  else zaehler = t("popup.site.blockiert", { anzahl: formatiereZahl(tab.blockiert) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Karte, { className: premium ? "site site--premium" : "site", "aria-labelledby": "site-titel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "site__kopf", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "site__host", title: tab?.host ?? void 0, children: tab?.host ?? t("popup.site.keineSeite") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "site__zeile", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wachsend", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "site-titel", className: "schalterzeile__titel", children: t("popup.site.titel") }),
        zaehler === null ? null : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "site__zaehler zahl", "aria-live": "polite", children: [
          zaehler,
          details.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "site__mehr", "aria-expanded": offen, onClick: () => setzeOffen((o) => !o), children: offen ? t("popup.site.wenigerDetails") : t("popup.site.mehrDetails") })
          ] }) : null
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Schalter, { gross: true, an: blockt, disabled: !tab || !aktiv || beschaeftigt, onWechsel, "aria-labelledby": "site-titel" })
    ] }),
    offen && details.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "site__listen", children: details.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "site__listenkopf", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "wachsend abschneiden", children: listenName(d.id) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "zahl", children: formatiereZahl(d.anzahl) })
      ] }),
      d.regeln.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "site__regeln", children: [
        d.regeln.slice(0, 8).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "wachsend abschneiden", title: regelName(r.was), children: regelName(r.was) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "zahl", children: formatiereZahl(r.anzahl) })
        ] }, r.was)),
        d.regeln.length > 8 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "site__rest", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "wachsend", children: t("popup.site.weitere", { anzahl: formatiereZahl(d.regeln.length - 8) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "zahl", children: formatiereZahl(d.regeln.slice(8).reduce((s, r) => s + r.anzahl, 0)) })
        ] }) : null
      ] }) : null
    ] }, d.id)) }) : null
  ] });
}
function Skelett() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Karte, { className: "skelett-karte", "aria-busy": "true", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 18, breite: "55%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reihe", style: { justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stapel wachsend", style: { gap: 6 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 14, breite: "70%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 12, breite: "45%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 34, breite: 60, rund: true })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Karte, { eng: true, className: "reihe", style: { justifyContent: "space-between" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 14, breite: "40%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 26, breite: 44, rund: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Karte, { className: "skelett-karte", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 14, breite: "30%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 12, breite: "90%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { hoehe: 36 })
    ] })
  ] });
}
function App() {
  useSprache();
  const [tabId, setTabId] = reactExports.useState(null);
  const { zustand, fehler, laedt, setze, neuLaden } = nutzeZustand(tabId);
  const [aktionsFehler, setAktionsFehler] = reactExports.useState(null);
  const [beschaeftigt, setBeschaeftigt] = reactExports.useState(false);
  const [meldungOffen, setMeldungOffen] = reactExports.useState(false);
  const lizenzAngestossen = reactExports.useRef(false);
  reactExports.useEffect(() => {
    void aktiverTabId().then((id) => setTabId(id));
  }, []);
  reactExports.useEffect(() => {
    if (!zustand || lizenzAngestossen.current) return;
    lizenzAngestossen.current = true;
    if (zustand.konto.verbunden && Date.now() - zustand.lizenz.geprueftAm > LIZENZ_FRISCH_MS) {
      sende({ typ: "lizenz.pruefen" }).catch(() => {
      });
    }
  }, [zustand]);
  async function aktion(optimistisch, zurueck, senden) {
    setAktionsFehler(null);
    optimistisch();
    setBeschaeftigt(true);
    try {
      await senden();
    } catch (e) {
      zurueck();
      const f = e instanceof NachrichtFehler ? e : null;
      const satz = fehlerText(f?.code);
      setAktionsFehler(f?.grund ? `${satz} (${f.grund})` : satz);
    } finally {
      setBeschaeftigt(false);
    }
  }
  const siteSetzen = (blocken) => {
    const host = zustand?.tab?.host;
    if (!host) return;
    const erlaubt = !blocken;
    return aktion(
      () => setze((z) => ({ ...z, tab: z.tab ? { ...z.tab, erlaubt } : z.tab })),
      () => setze((z) => ({ ...z, tab: z.tab ? { ...z.tab, erlaubt: !erlaubt } : z.tab })),
      () => sende({ typ: "site.setzen", host, erlaubt })
    );
  };
  const verbinden = () => aktion(
    () => {
    },
    () => {
    },
    async () => {
      await sende({ typ: "konto.verbinden" });
      await neuLaden();
    }
  );
  const trennen = () => aktion(
    () => {
    },
    () => {
    },
    async () => {
      await sende({ typ: "konto.trennen" });
      await neuLaden();
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "popup", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Kopf, { premium: zustand?.lizenz.premium === true }),
    laedt && !zustand ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skelett, {}) : fehler || !zustand ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "fehler", children: fehlerText(fehler ?? void 0) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SiteKarte,
        {
          premium: zustand.lizenz.premium,
          tab: zustand.tab,
          aktiv: zustand.aktiv,
          onWechsel: (b) => void siteSetzen(b),
          beschaeftigt
        }
      ),
      zustand.listenFehler ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "warn", children: fehlerText(zustand.listenFehler) }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PremiumKarte,
        {
          zustand,
          onVerbinden: () => void verbinden(),
          onTrennen: () => void trennen(),
          onFehler: (code) => setAktionsFehler(fehlerText(code)),
          beschaeftigt
        }
      ),
      aktionsFehler ? /* @__PURE__ */ jsxRuntimeExports.jsx(Hinweis, { art: "fehler", children: aktionsFehler }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "fuss fuss--mittig", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Knopf, { art: "leise", klein: true, disabled: !zustand.tab, onClick: () => setMeldungOffen(true), children: t("popup.melden") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeldungDialog, { offen: meldungOffen, tabId: tabId ?? void 0, onSchliessen: () => setMeldungOffen(false) })
    ] })
  ] });
}
void starteOberflaeche().finally(() => {
  clientExports.createRoot(document.getElementById("wurzel")).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
  );
});
