import { useLanguage } from "../i18n/LanguageContext";

//css
import "./Hero.css";

export function Hero() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="hero-container">
      {/* TOGGLE LANGUAGE */}
      <div className="hero-lang-toggle">
        <button
          className={lang === "it" ? "lang-btn lang-btn--active" : "lang-btn"}
          onClick={() => setLang("it")}
        >
          ITA
        </button>
        <button
          className={lang === "en" ? "lang-btn lang-btn--active" : "lang-btn"}
          onClick={() => setLang("en")}
        >
          ENG
        </button>
      </div>

      {/* TXT */}
      <h1 className="white-txt">
        {lang === "it" ? "Il mondo si muove." : "The world is moving."}
      </h1>
      <h1 className="orange-txt">
        {lang === "it"
          ? "Osserva i ritmi del mondo."
          : "Watch the world’s rhythms."}
      </h1>

      <h2 className="hero-subtitle">
        {lang === "it"
          ? "Una raccolta di fenomeni, stime e curiosità che scorrono senza sosta."
          : "A collection of phenomena, estimates and curiosities that never stop."}
      </h2>

      <div className="hero-live-row">
        {/* live dot */}
        <span className="hero-live-dot" />
        <span className="hero-live-label">
          {lang === "it" ? "Aggiornamento continuo" : "Continuous update"}
        </span>
      </div>

      {/************************ SOURCES ************************/}
      <section className="hero-data-notes">
        <p className="hero-data-notes-title">
          {lang === "it"
            ? "Da dove arrivano questi numeri?"
            : "Where do these numbers come from?"}
        </p>

        <p className="hero-data-notes-text">
          {lang === "it"
            ? "I valori mostrati sono stime basate su medie e ordini di grandezza. Non sono dati live, ma proiezioni continue su fonti ufficiali."
            : "The values shown are estimates based on averages and orders of magnitude. They are not live feeds, but continuously updated projections from official sources."}
        </p>

        <div className="hero-data-sources">
          <a
            href="https://www.who.int/"
            target="_blank"
            rel="noreferrer"
            className="hero-source-link"
          >
            OMS / WHO
          </a>
          <span className="hero-source-separator">→</span>

          <a
            href="https://earthobservatory.nasa.gov/"
            target="_blank"
            rel="noreferrer"
            className="hero-source-link"
          >
            NASA / Earth Observatory
          </a>
          <span className="hero-source-separator">→</span>

          <a
            href="https://www.itu.int/"
            target="_blank"
            rel="noreferrer"
            className="hero-source-link"
          >
            ITU &amp; Report Internet
          </a>
          <span className="hero-source-separator">→</span>

          <a
            href="https://newzoo.com/"
            target="_blank"
            rel="noreferrer"
            className="hero-source-link"
          >
            Newzoo (Gaming)
          </a>
        </div>
      </section>
    </div>
  );
}
