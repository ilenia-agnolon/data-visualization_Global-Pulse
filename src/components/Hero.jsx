//React hooks import
import { useEffect, useState } from "react";

import { useLanguage } from "../i18n/LanguageContext";

//css
import "./Hero.css";

export function Hero() {
  const { lang, setLang } = useLanguage();

  //Live clock: keeps updating every second
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  // Seconds since today's midnight
  const secondsToday =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  // Human-friendly time label (HH:MM:SS) for the text
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  const timeLabel = `${hh}:${mm}:${ss}`;

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
          ? "Una raccolta di fenomeni e stime che scorrono: conteggi 'di oggi' calcolati dalla mezzanotte fino a ora."
          : "A collection of phenomena and estimates that keep flowing: 'today' totals computed from midnight up to now."}
      </h2>

      <div className="hero-live-row">
        {/* live dot */}
        <span className="hero-live-dot" />
        <span className="hero-live-label">
          {lang === "it"
            ? "Aggiornamento continuo (oggi)"
            : "Continuous update (today)"}
        </span>
      </div>

      {/************************ SOURCES ************************/}
      <section className="hero-data-notes">
        <p className="hero-data-notes-title">
          {lang === "it"
            ? "Da dove arrivano questi numeri?"
            : "Where do these numbers come from?"}
        </p>

        {/* accurate explanation: estimates + per-second rate + projection from midnight */}
        <p className="hero-data-notes-text">
          {lang === "it" ? (
            <>
              <span className="hero-note-line">
                I valori mostrati sono stime basate su medie e ordini di
                grandezza: non sono dati live.
              </span>

              <span className="hero-note-gap" />

              <span className="hero-note-line">
                Ogni contatore usa un tasso medio “per secondo” e lo accumula
                nel tempo.
              </span>
              <span className="hero-note-line">
                Parte da 00:00 e cresce fino a ora{" "}
                {/* Human-friendly time label (HH:MM:SS) */}
                <span className="hero-live-time">({timeLabel})</span>, cioè
                circa{" "}
                <span className="hero-live-time" id="seconds">
                  {secondsToday.toLocaleString("it-IT")}
                </span>{" "}
                secondi dall’inizio di oggi.
              </span>
            </>
          ) : (
            <>
              <span className="hero-note-line">
                The values shown are estimates based on averages and orders of
                magnitude: they are not live feeds.
              </span>

              <span className="hero-note-gap" />

              <span className="hero-note-line">
                Each counter uses an average “per-second” rate and accumulates
                it over time.
              </span>
              <span className="hero-note-line">
                It starts at 00:00 and grows up to now{" "}
                {/* Human-friendly time label (HH:MM:SS) */}
                <span className="hero-live-time">({timeLabel})</span>, i.e.
                about
                <span className="hero-live-time" id="seconds">
                  {secondsToday.toLocaleString("en-US")}
                </span>{" "}
                seconds since today began.
              </span>
            </>
          )}
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
