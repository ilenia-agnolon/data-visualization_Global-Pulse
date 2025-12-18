// src/data/counters.js
// Dataset "real-time style": i contatori crescono in base a ratePerSecond.
// Nota: sono stime medie (non sensori live), ma numericamente coerenti e tracciabili.

// Helper: secondi in un anno (approssimazione non bisestile)
const SECONDS_PER_YEAR = 365 * 24 * 60 * 60;

// === Assunzioni globali (documentate) ===
// Popolazione mondiale ~8.1B (ordine di grandezza 2024-2025, coerente con UN/OWID)
const WORLD_POP = 8.1e9;

// Media fisiologica (range realistici):
// - HR medio ~70 bpm (riposo + attività, media "molto grezza")
// - Respiri ~16/min (media adulti; globale = stima)
const AVG_HEART_BPM = 70;
const AVG_BREATHS_PER_MIN = 16;

// Energia alimentare: ~2.300 kcal/giorno pro-capite (ordine di grandezza FAO/consumi medi)
// (Qui serve solo per avere un contatore plausibile; non è "BMR")
const AVG_KCAL_PER_PERSON_PER_DAY = 2300;

// === Derivazioni utili ===
const heartbeatsPerSecond = (WORLD_POP * AVG_HEART_BPM) / 60; // battiti/sec
const breathsPerSecond = (WORLD_POP * AVG_BREATHS_PER_MIN) / 60; // respiri/sec
const kcalPerSecond = (WORLD_POP * AVG_KCAL_PER_PERSON_PER_DAY) / 86400; // kcal/sec

// Dati demografici: ordini di grandezza coerenti con Our World in Data (births/deaths annuali recenti)
// Converto: eventi/anno -> eventi/sec.
const BIRTHS_PER_YEAR = 132e6; // ~132M nascite/anno
const DEATHS_PER_YEAR = 62e6; // ~62M morti/anno
const birthsPerSecond = BIRTHS_PER_YEAR / SECONDS_PER_YEAR;
const deathsPerSecond = DEATHS_PER_YEAR / SECONDS_PER_YEAR;

// CO2 (fossile+cemento) ~37.4 GtCO2/anno (ordine di grandezza Global Carbon Budget / WMO)
const CO2_TONNES_PER_YEAR = 37.4e9; // tonnellate/anno
const co2TonnesPerSecond = CO2_TONNES_PER_YEAR / SECONDS_PER_YEAR;

// Plastica ~400 Mt/anno (ordine di grandezza PlasticsEurope, anni recenti)
const PLASTIC_TONNES_PER_YEAR = 400e6; // tonnellate/anno
const plasticTonnesPerSecond = PLASTIC_TONNES_PER_YEAR / SECONDS_PER_YEAR;

// Google Search: Alphabet ha indicato ~5 trilioni di ricerche/anno (ordine di grandezza, riportato da Reuters)
const SEARCHES_PER_YEAR = 5e12;
const searchesPerSecond = SEARCHES_PER_YEAR / SECONDS_PER_YEAR;

// Email: stima storicamente citata ~347B email/giorno (ordine di grandezza “Email Statistics Report” + fonti secondarie)
// Conversione in /sec: 347e9 / 86400 ≈ 4.02M/sec.
const EMAILS_PER_DAY = 347e9;
const emailsPerSecond = EMAILS_PER_DAY / 86400;

// Fulmini: valore “da divulgazione” spesso citato ~44 fulmini/sec (NASA Earth Observatory / fonti meteo)
const lightningPerSecond = 44;

// Bitcoin: dopo halving 2024 -> 3.125 BTC/blocco * ~144 blocchi/giorno ≈ 450 BTC/giorno
const BTC_PER_DAY = 450;
const btcPerSecond = BTC_PER_DAY / 86400;

export const dataCategories = [
  {
    id: "human_hyper_pulse",
    emoji: "🧬",
    title: { it: "Ritmi Umani", en: "Human Rhythms" },
    subtitle: {
      it: "Processi biologici e demografia (stime medie)",
      en: "Biology and demography (average estimates)",
    },
    info: {
      source:
        "Our World in Data (births/deaths) + stime fisiologiche medie (HR/respiri/kcal)",
      url: "https://ourworldindata.org/",
      note_it:
        "Non sono sensori live: sono tassi medi convertiti in /sec per visualizzare il flusso.",
      note_en:
        "Not live sensors: average rates converted to /sec to visualize the flow.",
    },
    items: [
      {
        id: "births_today",
        emoji: "👶",
        title: {
          it: "Nascite nel mondo oggi",
          en: "Births in the world today",
        },
        description: {
          it: "Nuove vite ogni secondo (media globale)",
          en: "New lives each second (global average)",
        },
        ratePerSecond: birthsPerSecond,
        unit: { it: "nascite/sec", en: "births/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.08 },
        info: {
          source: "Our World in Data (births per year)",
          url: "https://ourworldindata.org/births-and-deaths",
          note_it: "Conversione: nascite/anno → nascite/sec (media annuale).",
          note_en: "Conversion: births/year → births/sec (annual average).",
        },
      },
      {
        id: "deaths_today",
        emoji: "🕊️",
        title: { it: "Morti nel mondo oggi", en: "Deaths in the world today" },
        description: {
          it: "Vite che terminano ogni secondo (media globale)",
          en: "Lives ending each second (global average)",
        },
        ratePerSecond: deathsPerSecond,
        unit: { it: "morti/sec", en: "deaths/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.08 },
        info: {
          source: "Our World in Data (deaths per year)",
          url: "https://ourworldindata.org/births-and-deaths",
          note_it: "Conversione: morti/anno → morti/sec (media annuale).",
          note_en: "Conversion: deaths/year → deaths/sec (annual average).",
        },
      },
      {
        id: "breaths",
        emoji: "💨",
        title: { it: "Respiri globali", en: "Global breaths" },
        description: {
          it: "Respiri effettuati dall’umanità ogni secondo (stima)",
          en: "Breaths taken by humanity each second (estimate)",
        },
        ratePerSecond: breathsPerSecond,
        unit: { it: "respiri/sec", en: "breaths/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.06 },
        info: {
          source: "Stima fisiologica: respiri/minuto medi × popolazione",
          url: "https://www.who.int/",
          note_it:
            "Usa una media (es. ~16 respiri/min) e una popolazione globale ~8.1B: è un ordine di grandezza.",
          note_en:
            "Uses an average (e.g., ~16 breaths/min) and ~8.1B population: order-of-magnitude.",
        },
      },
      {
        id: "heartbeats",
        emoji: "❤️",
        title: { it: "Battiti cardiaci globali", en: "Global heartbeats" },
        description: {
          it: "Cuori che battono in tutto il mondo (stima)",
          en: "Hearts beating worldwide (estimate)",
        },
        ratePerSecond: heartbeatsPerSecond,
        unit: { it: "battiti/sec", en: "beats/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.06 },
        info: {
          source: "Stima fisiologica: bpm medi × popolazione",
          url: "https://www.who.int/",
          note_it:
            "Media grezza (es. ~70 bpm) × popolazione globale: utile per visualizzare il ritmo.",
          note_en:
            "Rough mean (e.g., ~70 bpm) × global population: useful to visualize rhythm.",
        },
      },
      {
        id: "calories_consumed",
        emoji: "🍽️",
        title: { it: "Calorie consumate oggi", en: "Calories consumed today" },
        description: {
          it: "Energia alimentare totale (stima media globale)",
          en: "Total dietary energy (global average estimate)",
        },
        ratePerSecond: kcalPerSecond,
        unit: { it: "kcal/sec", en: "kcal/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.04 },
        info: {
          source: "Ordine di grandezza: kcal/giorno pro-capite × popolazione",
          url: "https://www.fao.org/",
          note_it:
            "È una stima basata su consumo energetico medio giornaliero pro-capite; non è un dato live.",
          note_en:
            "Estimate from average daily per-capita energy intake; not live data.",
        },
      },
    ],
  },

  {
    id: "planet_flow",
    emoji: "🌍",
    title: { it: "Dinamiche Planetarie", en: "Planetary Dynamics" },
    subtitle: {
      it: "Fenomeni naturali (stime medie globali)",
      en: "Natural phenomena (global average estimates)",
    },
    info: {
      source: "NASA/UCAR (ciclo dell’acqua) + divulgazione meteo (fulmini)",
      url: "https://earthobservatory.nasa.gov/",
      note_it:
        "Sono medie globali e conversioni fisiche; servono a rendere visibile il flusso.",
      note_en:
        "Global averages and physical conversions; meant to visualize flow.",
    },
    items: [
      {
        id: "lightning",
        emoji: "⚡",
        title: { it: "Fulmini globali", en: "Global lightning" },
        description: {
          it: "Scariche elettriche nel mondo (media)",
          en: "Lightning flashes worldwide (average)",
        },
        ratePerSecond: lightningPerSecond,
        unit: { it: "eventi/sec", en: "events/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.25 },
        info: {
          source: "NASA Earth Observatory (valore divulgativo spesso citato)",
          url: "https://earthobservatory.nasa.gov/",
          note_it: "Media globale indicativa (non misura istante per istante).",
          note_en: "Indicative global mean (not instant measurement).",
        },
      },
      {
        id: "plastic_produced",
        emoji: "♻️",
        title: { it: "Plastica prodotta oggi", en: "Plastic produced today" },
        description: {
          it: "Produzione globale di plastica (ordine di grandezza)",
          en: "Global plastic production (order of magnitude)",
        },
        ratePerSecond: plasticTonnesPerSecond,
        unit: { it: "ton/sec", en: "ton/s" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.12 },
        info: {
          source: "PlasticsEurope (produzione annua, convertita in /sec)",
          url: "https://plasticseurope.org/",
          note_it:
            "Conversione: tonnellate/anno → tonnellate/sec (media annuale).",
          note_en: "Conversion: tonnes/year → tonnes/sec (annual average).",
        },
      },
    ],
  },

  {
    id: "planetary_loss",
    emoji: "🧊",
    title: { it: "Cambiamenti Planetari", en: "Planetary Changes" },
    subtitle: {
      it: "Emissioni e pressione ambientale (stime)",
      en: "Emissions and environmental pressure (estimates)",
    },
    info: {
      source: "Global Carbon Budget / WMO (CO₂)",
      url: "https://globalcarbonproject.org/",
      note_it: "CO₂ qui è una media annuale trasformata in flusso per secondo.",
      note_en: "CO₂ here is an annual mean turned into a per-second flow.",
    },
    items: [
      {
        id: "co2_emitted",
        emoji: "🌫️",
        title: { it: "CO₂ emessa oggi", en: "CO₂ emitted today" },
        description: {
          it: "Anidride carbonica (fossile + cemento) in media",
          en: "Carbon dioxide (fossil + cement) average",
        },
        ratePerSecond: co2TonnesPerSecond,
        unit: { it: "ton/sec", en: "ton/s" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.05 },
        info: {
          source: "Global Carbon Budget / WMO (ordine di grandezza annuo)",
          url: "https://public.wmo.int/",
          note_it:
            "Conversione: GtCO₂/anno → ton/sec. Non include tutte le componenti (es. land-use) se non specificate nella fonte.",
          note_en:
            "Conversion: GtCO₂/year → ton/s. May not include all components (e.g., land-use) depending on source definition.",
        },
      },
    ],
  },

  {
    id: "digital_firehose",
    emoji: "💻",
    title: { it: "Flussi Digitali", en: "Digital Flows" },
    subtitle: {
      it: "Attività online (stime aggregate)",
      en: "Online activity (aggregate estimates)",
    },
    info: {
      source: "Alphabet/Reuters (search) + report email (stime di settore)",
      url: "https://www.reuters.com/",
      note_it:
        "Questi valori sono i più sensibili all’ora del giorno: sono medie globali.",
      note_en: "These vary strongly by time-of-day: they are global averages.",
    },
    items: [
      {
        id: "search_queries",
        emoji: "🔍",
        title: { it: "Ricerche online oggi", en: "Online searches today" },
        description: {
          it: "Query sui motori di ricerca (media)",
          en: "Search engine queries (average)",
        },
        ratePerSecond: searchesPerSecond,
        unit: { it: "ricerche/sec", en: "searches/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.18 },
        info: {
          source: "Alphabet (ordine di grandezza annuo, riportato da Reuters)",
          url: "https://www.reuters.com/",
          note_it: "Conversione: ricerche/anno → ricerche/sec (media).",
          note_en: "Conversion: searches/year → searches/sec (average).",
        },
      },
      {
        id: "emails_sent",
        emoji: "📧",
        title: { it: "Email inviate oggi", en: "Emails sent today" },
        description: {
          it: "Email spedite globalmente (stima media)",
          en: "Emails sent globally (average estimate)",
        },
        ratePerSecond: emailsPerSecond,
        unit: { it: "email/sec", en: "emails/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.22 },
        info: {
          source:
            "Stime di settore (ordine di grandezza ~centinaia di miliardi/giorno)",
          url: "https://www.radicati.com/",
          note_it:
            "Conversione: email/giorno → email/sec. Valore medio, non un contatore pubblico live.",
          note_en:
            "Conversion: emails/day → emails/sec. Mean value, not a public live counter.",
        },
      },
    ],
  },

  {
    id: "transport_mobility",
    emoji: "🚦",
    title: { it: "Trasporti & Mobilità", en: "Transport & Mobility" },
    subtitle: {
      it: "Spostamenti globali (stime)",
      en: "Global movement (estimates)",
    },
    info: {
      source:
        "Flight tracking/industry stats (ordine di grandezza voli/giorno)",
      url: "https://www.flightaware.com/",
      note_it:
        "Voli/giorno varia per stagione e trend. Qui è una media per visualizzare il flusso.",
      note_en:
        "Flights/day varies by season and trends. This is a mean to visualize flow.",
    },
    items: [
      {
        id: "flights_takeoff",
        emoji: "🛫",
        title: { it: "Aerei decollati oggi", en: "Flights departed today" },
        description: {
          it: "Voli commerciali partiti nel mondo (media)",
          en: "Commercial flights departed (average)",
        },
        // ~100k/giorno -> ~1.16/sec
        ratePerSecond: 100000 / 86400,
        unit: { it: "voli/sec", en: "flights/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.25 },
        info: {
          source: "FlightAware / industria (ordine di grandezza)",
          url: "https://www.flightaware.com/",
          note_it: "Conversione: voli/giorno → voli/sec (media).",
          note_en: "Conversion: flights/day → flights/sec (average).",
        },
      },
    ],
  },

  {
    id: "economy_society",
    emoji: "💸",
    title: { it: "Economia & Società", en: "Economy & Society" },
    subtitle: {
      it: "Indicatori misurabili o derivabili (stime)",
      en: "Measurable/derivable indicators (estimates)",
    },
    info: {
      source: "Bitcoin protocol (emissione) + conversioni temporali",
      url: "https://en.bitcoin.it/wiki/Mining",
      note_it:
        "Bitcoin è derivabile esattamente dal protocollo (reward × blocchi/giorno), salvo variazioni operative.",
      note_en:
        "Bitcoin issuance is derivable from protocol (reward × blocks/day), barring operational variance.",
    },
    items: [
      {
        id: "bitcoin_mined_today",
        emoji: "₿",
        title: { it: "Bitcoin minati oggi", en: "Bitcoin mined today" },
        description: {
          it: "Nuovi BTC generati dalla blockchain (media)",
          en: "New BTC generated by the blockchain (average)",
        },
        ratePerSecond: btcPerSecond,
        unit: { it: "BTC/sec", en: "BTC/sec" },
        display: { decimals: 5, compact: true },
        dynamics: { jitterPct: 0.03 },
        info: {
          source: "Protocollo Bitcoin (3.125 BTC/blocco post-halving 2024)",
          url: "https://en.bitcoin.it/wiki/Block_reward",
          note_it:
            "Stima: ~144 blocchi/giorno × reward. Il timing reale varia leggermente con hashrate/difficulty.",
          note_en:
            "Estimate: ~144 blocks/day × reward. Real timing varies slightly with hashrate/difficulty.",
        },
      },
    ],
  },
];
