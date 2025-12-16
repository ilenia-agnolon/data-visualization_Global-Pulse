// src/data/counters.js

export const dataCategories = [
  // 🧬 HUMAN HYPER PULSE
  {
    id: "human_hyper_pulse",
    emoji: "🧬",
    title: {
      it: "Ritmi Umani",
      en: "Human Rhythms",
    },
    subtitle: {
      it: "Ritmi e processi del corpo umano",
      en: "Rhythms and processes of the human body",
    },
    info: {
      source: "World Health Organization (WHO) + fisiologia umana (stima)",
      url: "https://www.who.int/",
      note_it:
        "Valori indicativi/stimati da medie fisiologiche e popolazione globale; non sono misure in tempo reale.",
      note_en:
        "Indicative/estimated values from physiological averages and global population; not real-time measurements.",
    },
    graphStyle: "data_rain",
    items: [
      {
        id: "heartbeats",
        emoji: "❤️",
        title: { it: "Battiti cardiaci globali", en: "Global heartbeats" },
        description: {
          it: "Cuori che battono nel mondo in questo istante.",
          en: "Hearts beating worldwide in this moment.",
        },
        ratePerSecond: 8300000000,
        unit: { it: "battiti/sec", en: "beats/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.02 },
        info: {
          source: "Fisiologia umana + popolazione globale (stima)",
          url: "https://www.who.int/",
          note_it:
            "Derivato da frequenza cardiaca media e popolazione globale; ordine di grandezza.",
          note_en:
            "Derived from average heart rate and global population; order-of-magnitude estimate.",
        },
        details: {
          insight_it:
            "Il numero è una stima basata su frequenze cardiache medie. Può variare con età, attività e distribuzione geografica.",
          insight_en:
            "This is an estimate based on average heart rates. It varies by age, activity, and geography.",
          source_label: "WHO + fisiologia (stima)",
          source_url: "https://www.who.int/",
          history7d: [7.5e14, 7.6e14, 7.55e14, 7.65e14, 7.7e14, 7.72e14, 7.74e14],
          history_unit: { it: "battiti/giorno", en: "beats/day" },
        },
      },
      {
        id: "breaths",
        emoji: "😮‍💨",
        title: { it: "Respiri globali", en: "Global breaths" },
        description: {
          it: "Respiri effettuati dall'umanità ogni secondo.",
          en: "Breaths taken by humanity each second.",
        },
        ratePerSecond: 230000000,
        unit: { it: "respiri/sec", en: "breaths/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.03 },
        info: {
          source: "Fisiologia respiratoria + popolazione globale (stima)",
          url: "https://www.who.int/",
          note_it:
            "Derivato da atti respiratori medi/minuto e popolazione globale; ordine di grandezza.",
          note_en:
            "Derived from average breaths/minute and global population; order-of-magnitude estimate.",
        },
        details: {
          insight_it:
            "Rispetto ai battiti, la respirazione ha variazioni più ampie (sonno, attività fisica, altitudine).",
          insight_en:
            "Breathing varies more widely than heart rate (sleep, exercise, altitude).",
          source_label: "WHO + fisiologia (stima)",
          source_url: "https://www.who.int/",
          history7d: [1.95e13, 1.97e13, 1.96e13, 1.99e13, 2.01e13, 2.02e13, 2.03e13],
          history_unit: { it: "respiri/giorno", en: "breaths/day" },
        },
      },
      {
        id: "cells_regenerated",
        emoji: "🧫",
        title: { it: "Cellule rigenerate", en: "Cells regenerated" },
        description: {
          it: "Cellule che si rigenerano nel corpo umano.",
          en: "Cells regenerated in the human body.",
        },
        ratePerSecond: 25000000,
        unit: { it: "cellule/sec", en: "cells/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.05 },
        info: {
          source: "Biologia cellulare (stima, ordine di grandezza)",
          url: "https://www.who.int/",
          note_it:
            "Stima grossolana: tassi di turnover cellulari variano molto per tessuto e individuo.",
          note_en:
            "Rough estimate: cell turnover rates vary widely by tissue and individual.",
        },
        details: {
          insight_it:
            "Molti tessuti (es. sangue, cute, intestino) hanno turnover rapido, altri molto lento: il numero è un compromesso.",
          insight_en:
            "Some tissues regenerate fast (blood, skin, gut), others very slowly: this is a blended estimate.",
          source_label: "Biologia / fisiologia (stima)",
          source_url: "https://www.who.int/",
          history7d: [2.1e12, 2.12e12, 2.11e12, 2.13e12, 2.14e12, 2.145e12, 2.15e12],
          history_unit: { it: "cellule/giorno", en: "cells/day" },
        },
      },
      {
        id: "neural_firings",
        emoji: "⚡",
        title: { it: "Impulsi neurali", en: "Neural impulses" },
        description: {
          it: "Attività elettrica nel cervello umano.",
          en: "Electrical activity firing in the brain.",
        },
        ratePerSecond: 100000000000,
        unit: { it: "impulsi/sec", en: "impulses/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.08 },
        info: {
          source: "Neuroscienze (stima, ordine di grandezza)",
          url: "https://www.who.int/",
          note_it:
            "Stima basata su firing rate medi e numero di neuroni; grande variabilità.",
          note_en:
            "Estimate based on average firing rates and neuron count; high variability.",
        },
        details: {
          insight_it:
            "Il valore dipende dal modello scelto (quanti neuroni consideri attivi e a che frequenza).",
          insight_en:
            "The value depends on the model (how many neurons are active and at what firing rate).",
          source_label: "Neuroscienze (stima)",
          source_url: "https://www.who.int/",
          history7d: [8.3e15, 8.35e15, 8.4e15, 8.38e15, 8.45e15, 8.5e15, 8.55e15],
          history_unit: { it: "impulsi/giorno", en: "impulses/day" },
        },
      },
      {
        id: "red_blood_cells",
        emoji: "🩸",
        title: {
          it: "Globuli rossi prodotti",
          en: "Red blood cells produced",
        },
        description: {
          it: "Globuli rossi creati dal midollo osseo.",
          en: "Red blood cells created by bone marrow.",
        },
        ratePerSecond: 240000000,
        unit: { it: "cellule/sec", en: "cells/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.03 },
        info: {
          source: "Ematologia (stima) + popolazione globale",
          url: "https://www.who.int/",
          note_it:
            "Basato su produzione media di eritrociti e popolazione globale; ordine di grandezza.",
          note_en:
            "Based on average erythrocyte production and global population; order-of-magnitude estimate.",
        },
        details: {
          insight_it:
            "La produzione varia con età, quota, anemia e condizioni cliniche; il numero è medio globale.",
          insight_en:
            "Production varies with age, altitude, anemia, and clinical conditions; this is a global average.",
          source_label: "WHO + ematologia (stima)",
          source_url: "https://www.who.int/",
          history7d: [2.0e13, 2.02e13, 2.01e13, 2.03e13, 2.04e13, 2.045e13, 2.05e13],
          history_unit: { it: "cellule/giorno", en: "cells/day" },
        },
      },
      {
        id: "calories_burned",
        emoji: "🔥",
        title: { it: "Calorie bruciate", en: "Calories burned" },
        description: {
          it: "Calorie consumate dall'umanità.",
          en: "Calories burned by humanity.",
        },
        ratePerSecond: 3000000,
        unit: { it: "kcal/sec", en: "kcal/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.06 },
        info: {
          source: "Metabolismo basale medio + popolazione globale (stima)",
          url: "https://www.who.int/",
          note_it:
            "Stima da BMR medio (kcal/giorno) convertito in per-secondo su popolazione globale.",
          note_en:
            "Estimated from average BMR (kcal/day), converted to per-second and scaled by global population.",
        },
        details: {
          insight_it:
            "Non include picchi locali (sport/eventi): è un flusso medio, utile per visualizzare l’ordine di grandezza.",
          insight_en:
            "Not including local spikes (sports/events): this is a mean flow to visualize scale.",
          source_label: "WHO + metabolismo (stima)",
          source_url: "https://www.who.int/",
          history7d: [2.55e11, 2.56e11, 2.58e11, 2.57e11, 2.59e11, 2.6e11, 2.61e11],
          history_unit: { it: "kcal/giorno", en: "kcal/day" },
        },
      },
      {
        id: "chemical_reactions",
        emoji: "🧪",
        title: { it: "Reazioni chimiche", en: "Chemical reactions" },
        description: {
          it: "Reazioni all'interno del corpo umano.",
          en: "Chemical reactions inside the human body.",
        },
        ratePerSecond: 3600000000000000,
        unit: { it: "reazioni/sec", en: "reactions/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.1 },
        info: {
          source: "Biochimica (stima, ordine di grandezza)",
          url: "https://www.who.int/",
          note_it:
            "Numero altamente modellistico: dipende da cosa consideri 'reazione' e dal livello di dettaglio.",
          note_en:
            "Highly model-dependent: depends on what counts as a 'reaction' and granularity.",
        },
        details: {
          insight_it:
            "È un numero volutamente 'wow': serve a dare un’idea della scala della chimica del vivente.",
          insight_en:
            "This is intentionally 'wow': it illustrates the scale of chemistry in living systems.",
          source_label: "Biochimica (stima)",
          source_url: "https://www.who.int/",
          history7d: [3.05e20, 3.06e20, 3.08e20, 3.07e20, 3.09e20, 3.1e20, 3.12e20],
          history_unit: { it: "reazioni/giorno", en: "reactions/day" },
        },
      },
      {
        id: "synapses",
        emoji: "🧠",
        title: { it: "Sinapsi attivate", en: "Synapses fired" },
        description: {
          it: "Connessioni cerebrali attive.",
          en: "Brain synapses firing.",
        },
        ratePerSecond: 100000000000000,
        unit: { it: "sinapsi/sec", en: "synapses/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.08 },
        info: {
          source: "Neuroscienze (stima, ordine di grandezza)",
          url: "https://www.who.int/",
          note_it:
            "Stima basata su numero di sinapsi e attività media; molto dipendente dal modello.",
          note_en:
            "Estimate based on synapse count and average activity; highly model-dependent.",
        },
        details: {
          insight_it:
            "Le sinapsi non sono tutte attive allo stesso modo: la metrica è una semplificazione per visualizzare 'attività'.",
          insight_en:
            "Not all synapses are active the same way: this metric is a simplification to visualize 'activity'.",
          source_label: "Neuroscienze (stima)",
          source_url: "https://www.who.int/",
          history7d: [8.1e18, 8.15e18, 8.2e18, 8.18e18, 8.25e18, 8.3e18, 8.35e18],
          history_unit: { it: "sinapsi/giorno", en: "synapses/day" },
        },
      },
      {
        id: "falling_asleep",
        emoji: "😴",
        title: {
          it: "Persone che si addormentano",
          en: "People falling asleep",
        },
        description: {
          it: "Persone che entrano nel sonno in questo momento.",
          en: "People drifting into sleep right now.",
        },
        ratePerSecond: 90,
        unit: { it: "persone/sec", en: "people/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.25 },
        info: {
          source: "Demografia + distribuzione sonno/veglia (stima)",
          url: "https://www.who.int/",
          note_it:
            "Stima modellata su popolazione e pattern giornalieri; non è un conteggio reale.",
          note_en:
            "Modeled estimate from population and daily sleep patterns; not a real count.",
        },
        details: {
          insight_it:
            "È una media globale: nella realtà il valore cambia molto per fuso orario e abitudini.",
          insight_en:
            "This is a global average: in reality it varies strongly by time zone and habits.",
          source_label: "WHO + demografia (stima)",
          source_url: "https://www.who.int/",
          history7d: [7.4e6, 7.45e6, 7.42e6, 7.5e6, 7.55e6, 7.58e6, 7.6e6],
          history_unit: { it: "persone/giorno", en: "people/day" },
        },
      },
      {
        id: "smiles",
        emoji: "😊",
        title: { it: "Sorrisi globali", en: "Global smiles" },
        description: {
          it: "Sorrisi condivisi nel mondo ogni secondo.",
          en: "Smiles shared across the world each second.",
        },
        ratePerSecond: 8000000,
        unit: { it: "sorrisi/sec", en: "smiles/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.3 },
        info: {
          source: "Comportamento umano (stima creativa)",
          url: "https://www.who.int/",
          note_it:
            "Metrica volutamente 'soft': serve a dare ritmo/variazione, non precisione scientifica.",
          note_en:
            "Intentionally 'soft' metric: meant for rhythm/variation, not scientific precision.",
        },
        details: {
          insight_it:
            "Questa è una stima narrativa pensata per rendere l’interfaccia viva; trattala come simbolica.",
          insight_en:
            "This is a narrative estimate to keep the UI lively; treat it as symbolic.",
          source_label: "Stima creativa (non ufficiale)",
          source_url: "https://www.who.int/",
          history7d: [6.7e11, 6.8e11, 6.75e11, 6.85e11, 6.9e11, 6.95e11, 7.0e11],
          history_unit: { it: "sorrisi/giorno", en: "smiles/day" },
        },
      },
      {
        id: "births",
        emoji: "👶",
        title: { it: "Nascite stimate", en: "Estimated births" },
        description: {
          it: "Nuove nascite stimate nel mondo, in tempo reale.",
          en: "Estimated births worldwide, in real time.",
        },
        ratePerSecond: 4.3,
        unit: { it: "nascite/sec", en: "births/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.15 },
        info: {
          source: "UN DESA / demografia (stima)",
          url: "https://www.un.org/development/desa/pd/",
          note_it:
            "Convertito da stime annuali di nascite globali in un tasso medio per secondo.",
          note_en:
            "Converted from annual estimates of global births into an average per-second rate.",
        },
        details: {
          insight_it:
            "È un tasso medio: in realtà nascite e registrazioni non sono uniformi nel tempo.",
          insight_en:
            "This is an average rate: real births/registrations are not uniform over time.",
          source_label: "UN DESA (stima)",
          source_url: "https://www.un.org/development/desa/pd/",
          history7d: [3.6e5, 3.62e5, 3.61e5, 3.63e5, 3.64e5, 3.65e5, 3.66e5],
          history_unit: { it: "nascite/giorno", en: "births/day" },
        },
      },
      {
        id: "deaths",
        emoji: "🕯️",
        title: { it: "Decessi stimati", en: "Estimated deaths" },
        description: {
          it: "Decessi stimati nel mondo, in tempo reale.",
          en: "Estimated deaths worldwide, in real time.",
        },
        ratePerSecond: 1.8,
        unit: { it: "decessi/sec", en: "deaths/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.15 },
        info: {
          source: "UN DESA / demografia (stima)",
          url: "https://www.un.org/development/desa/pd/",
          note_it:
            "Convertito da stime annuali di decessi globali in un tasso medio per secondo.",
          note_en:
            "Converted from annual estimates of global deaths into an average per-second rate.",
        },
        details: {
          insight_it:
            "Come per le nascite, è un valore medio: utile per visualizzare la scala, non per misurare eventi real-time.",
          insight_en:
            "Like births, this is an average: useful for scale visualization, not real-time event measurement.",
          source_label: "UN DESA (stima)",
          source_url: "https://www.un.org/development/desa/pd/",
          history7d: [1.5e5, 1.505e5, 1.502e5, 1.51e5, 1.515e5, 1.52e5, 1.525e5],
          history_unit: { it: "decessi/giorno", en: "deaths/day" },
        },
      },
    ],
  },

  // 🌍 PLANET TURBO FLOW
  {
    id: "planet_flow",
    emoji: "🌍",
    title: {
      it: "Dinamiche Planetarie",
      en: "Planetary Dynamics",
    },
    subtitle: {
      it: "Fenomeni naturali e planetari",
      en: "Natural and planetary phenomena",
    },
    info: {
      source: "NASA Earth Observatory / NOAA / USGS (stima)",
      url: "https://earthobservatory.nasa.gov/",
      note_it:
        "Valori indicativi/stimati basati su ordini di grandezza e medie geofisiche; non sono sensori live globali.",
      note_en:
        "Indicative/estimated values based on orders of magnitude and geophysical averages; not global live sensing.",
    },
    graphStyle: "data_rain",
    items: [
      {
        id: "rain_drops",
        emoji: "🌧",
        title: { it: "Gocce di pioggia", en: "Rain drops" },
        description: {
          it: "Gocce che cadono sulla Terra.",
          en: "Rain drops falling on Earth.",
        },
        ratePerSecond: 160000000000000000,
        unit: { it: "gocce/sec", en: "drops/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.25 },
        info: {
          source: "NOAA / climatologia (stima)",
          url: "https://www.noaa.gov/",
          note_it:
            "Ordine di grandezza derivato da precipitazioni globali medie e conversione in gocce.",
          note_en:
            "Order-of-magnitude estimate from mean global precipitation converted into drops.",
        },
        details: {
          insight_it:
            "La pioggia è estremamente variabile: questo è un valore medio su scala planetaria.",
          insight_en:
            "Rain is extremely variable: this is a planetary-scale average.",
          source_label: "NOAA (stima)",
          source_url: "https://www.noaa.gov/",
          history7d: [1.2e19, 1.18e19, 1.22e19, 1.25e19, 1.23e19, 1.2e19, 1.19e19],
          history_unit: { it: "gocce/giorno", en: "drops/day" },
        },
      },
      {
        id: "evaporation",
        emoji: "🌊",
        title: { it: "Evaporazione globale", en: "Global evaporation" },
        description: {
          it: "Acqua che ritorna in atmosfera.",
          en: "Water evaporating into the atmosphere.",
        },
        ratePerSecond: 580000000000,
        unit: { it: "litri/sec", en: "liters/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.12 },
        info: {
          source: "NASA Earth Observatory / ciclo idrologico (stima)",
          url: "https://earthobservatory.nasa.gov/",
          note_it:
            "Stima da bilanci idrologici globali medi; conversioni semplificate.",
          note_en:
            "Estimated from mean global water budget; simplified conversions.",
        },
        details: {
          insight_it:
            "Evaporazione e precipitazione si bilanciano su lungo periodo; qui visualizzi il flusso istantaneo medio.",
          insight_en:
            "Evaporation and precipitation balance over long periods; this shows an average instantaneous flow.",
          source_label: "NASA Earth Observatory (stima)",
          source_url: "https://earthobservatory.nasa.gov/",
          history7d: [4.9e16, 5.0e16, 5.05e16, 5.1e16, 5.08e16, 5.02e16, 5.0e16],
          history_unit: { it: "litri/giorno", en: "liters/day" },
        },
      },
      {
        id: "lightning",
        emoji: "⚡",
        title: { it: "Fulmini globali", en: "Global lightning" },
        description: {
          it: "Scariche elettriche sulla Terra.",
          en: "Lightning strikes around the planet.",
        },
        ratePerSecond: 44,
        unit: { it: "eventi/sec", en: "events/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.4 },
        info: {
          source: "NOAA / dati fulmini (ordine di grandezza)",
          url: "https://www.noaa.gov/",
          note_it:
            "Valore tipico globale spesso citato come media; non rappresenta la distribuzione reale istante per istante.",
          note_en:
            "Typical global mean value; does not represent true instant-by-instant distribution.",
        },
        details: {
          insight_it:
            "I fulmini si concentrano in zone tropicali e stagionali: il numero fluttua parecchio.",
          insight_en:
            "Lightning is clustered in tropics and seasons: the number fluctuates a lot.",
          source_label: "NOAA (ordine di grandezza)",
          source_url: "https://www.noaa.gov/",
          history7d: [3.7e6, 3.9e6, 3.8e6, 4.0e6, 4.1e6, 4.05e6, 4.0e6],
          history_unit: { it: "eventi/giorno", en: "events/day" },
        },
      },
      {
        id: "micro_quakes",
        emoji: "🌪",
        title: { it: "Micro-terremoti", en: "Micro-earthquakes" },
        description: {
          it: "Piccole vibrazioni della crosta terrestre.",
          en: "Small seismic events worldwide.",
        },
        ratePerSecond: 2,
        unit: { it: "eventi/sec", en: "events/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.6 },
        info: {
          source: "USGS / sismologia (stima)",
          url: "https://www.usgs.gov/",
          note_it:
            "Include eventi molto piccoli spesso non percepiti; valore indicativo per visualizzare la frequenza.",
          note_en:
            "Includes tiny events often not felt; indicative value to visualize frequency.",
        },
        details: {
          insight_it:
            "La maggior parte dei micro-eventi non viene registrata ovunque: qui si usa un modello medio.",
          insight_en:
            "Most micro-events are not uniformly detected: a mean model is used here.",
          source_label: "USGS (stima)",
          source_url: "https://www.usgs.gov/",
          history7d: [1.5e5, 1.55e5, 1.52e5, 1.6e5, 1.58e5, 1.57e5, 1.56e5],
          history_unit: { it: "eventi/giorno", en: "events/day" },
        },
      },
      {
        id: "plant_cells_growth",
        emoji: "🌱",
        title: {
          it: "Cellule vegetali in crescita",
          en: "Growing plant cells",
        },
        description: {
          it: "Crescita delle piante nel mondo.",
          en: "Plant cells growing globally.",
        },
        ratePerSecond: 90000000000,
        unit: { it: "cellule/sec", en: "cells/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.18 },
        info: {
          source: "Ecologia / produttività primaria (stima)",
          url: "https://earthobservatory.nasa.gov/",
          note_it:
            "Derivato da produttività primaria globale e conversione semplificata in crescita cellulare.",
          note_en:
            "Derived from global primary productivity and simplified conversion into cellular growth.",
        },
        details: {
          insight_it:
            "La crescita vegetale segue luce/stagioni: un contatore continuo è una semplificazione utile per UI.",
          insight_en:
            "Plant growth follows light/seasons: continuous counting is a UI-friendly simplification.",
          source_label: "NASA Earth Observatory (stima)",
          source_url: "https://earthobservatory.nasa.gov/",
          history7d: [7.2e15, 7.0e15, 7.4e15, 7.6e15, 7.5e15, 7.3e15, 7.25e15],
          history_unit: { it: "cellule/giorno", en: "cells/day" },
        },
      },
      {
        id: "water_molecules_air",
        emoji: "☁️",
        title: {
          it: "Molecole d'acqua nell'aria",
          en: "Water molecules rising",
        },
        description: {
          it: "Molecole che entrano nell'atmosfera.",
          en: "Water molecules entering the air.",
        },
        ratePerSecond: 1000000000000000000000,
        unit: { it: "molecole/sec", en: "molecules/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.2 },
        info: {
          source: "Ciclo idrologico / conversioni fisiche (stima)",
          url: "https://earthobservatory.nasa.gov/",
          note_it:
            "Conversione di flussi d’acqua medi in numero di molecole; altissimo ordine di grandezza.",
          note_en:
            "Conversion of mean water fluxes into molecule counts; extremely large magnitude.",
        },
        details: {
          insight_it:
            "È normale che i numeri a scala molecolare siano enormi: per UI conviene formattarli in modo compatto.",
          insight_en:
            "Molecular-scale numbers are naturally huge: compact formatting is recommended for UI.",
          source_label: "NASA Earth Observatory (stima)",
          source_url: "https://earthobservatory.nasa.gov/",
          history7d: [8.6e22, 8.7e22, 8.8e22, 8.95e22, 9.0e22, 8.9e22, 8.85e22],
          history_unit: { it: "molecole/giorno", en: "molecules/day" },
        },
      },
      {
        id: "solar_energy_absorbed",
        emoji: "🔆",
        title: {
          it: "Energia solare assorbita",
          en: "Solar energy absorbed",
        },
        description: {
          it: "Energia che colpisce la superficie della Terra.",
          en: "Solar energy hitting Earth's surface.",
        },
        ratePerSecond: 174000000000000000000,
        unit: { it: "joule/sec", en: "joules/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.08 },
        info: {
          source: "NASA / bilancio energetico terrestre (stima)",
          url: "https://earthobservatory.nasa.gov/",
          note_it:
            "Ordine di grandezza basato su costante solare e geometria terrestre; semplificazione.",
          note_en:
            "Order-of-magnitude estimate from solar constant and Earth geometry; simplified.",
        },
        details: {
          insight_it:
            "Il valore dipende da nuvolosità e albedo: qui è un flusso medio per dare 'energia' alla scena.",
          insight_en:
            "Depends on clouds and albedo: here it’s an average flow to give the scene 'energy'.",
          source_label: "NASA Earth Observatory (stima)",
          source_url: "https://earthobservatory.nasa.gov/",
          history7d: [1.45e25, 1.46e25, 1.47e25, 1.48e25, 1.485e25, 1.49e25, 1.495e25],
          history_unit: { it: "joule/giorno", en: "joules/day" },
        },
      },
      {
        id: "grass_growth",
        emoji: "🌾",
        title: { it: "Erba che cresce", en: "Grass growing" },
        description: {
          it: "Crescita delle superfici erbose.",
          en: "Grass expanding worldwide.",
        },
        ratePerSecond: 13000000000,
        unit: { it: "cellule/sec", en: "cells/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.22 },
        info: {
          source: "Ecologia / produttività (stima creativa)",
          url: "https://earthobservatory.nasa.gov/",
          note_it:
            "Metrica narrativa basata su produttività vegetale: non misurabile direttamente a scala globale.",
          note_en:
            "Narrative metric based on plant productivity: not directly measurable globally.",
        },
        details: {
          insight_it:
            "Utile per visualizzare dinamiche biologiche 'lente' ma costanti, con una pioggia meno intensa di acqua/energia.",
          insight_en:
            "Useful to show 'slow' but constant biological dynamics, with a calmer rain than water/energy.",
          source_label: "Stima ecologica (non sensori live)",
          source_url: "https://earthobservatory.nasa.gov/",
          history7d: [1.05e15, 1.02e15, 1.08e15, 1.1e15, 1.09e15, 1.07e15, 1.06e15],
          history_unit: { it: "cellule/giorno", en: "cells/day" },
        },
      },
      {
        id: "bacteria_reproduction",
        emoji: "🦠",
        title: {
          it: "Batteri che si riproducono",
          en: "Reproducing bacteria",
        },
        description: {
          it: "Crescita batterica negli ecosistemi.",
          en: "Bacterial reproduction in ecosystems.",
        },
        ratePerSecond: 400000000000000,
        unit: { it: "divisioni/sec", en: "divisions/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.35 },
        info: {
          source: "Microbiologia / biomassa globale (stima)",
          url: "https://www.noaa.gov/",
          note_it:
            "Stima di ordine di grandezza basata su biomassa microbica e tempi di duplicazione medi.",
          note_en:
            "Order-of-magnitude estimate based on microbial biomass and average doubling times.",
        },
        details: {
          insight_it:
            "I tempi di duplicazione variano da minuti a giorni: l’aggregazione globale è necessariamente approssimata.",
          insight_en:
            "Doubling times vary from minutes to days: global aggregation is necessarily approximate.",
          source_label: "Stima microbiologia (ordine di grandezza)",
          source_url: "https://www.noaa.gov/",
          history7d: [3.2e19, 3.1e19, 3.3e19, 3.4e19, 3.35e19, 3.25e19, 3.22e19],
          history_unit: { it: "divisioni/giorno", en: "divisions/day" },
        },
      },
    ],
  },

  // 🌌 COSMIC SURGE
  {
    id: "cosmic_surge",
    emoji: "🌌",
    title: {
      it: "Fenomeni Cosmici",
      en: "Cosmic Phenomena",
    },
    subtitle: {
      it: "Fenomeni astrofisici e particelle invisibili",
      en: "Astrophysical phenomena and invisible particles",
    },
    info: {
      source: "NASA / ESA / fisica delle particelle (stima)",
      url: "https://science.nasa.gov/",
      note_it:
        "Valori indicativi/stimati da grandezze astrofisiche tipiche (raggi cosmici, fotoni, neutrini); non sono conteggi live.",
      note_en:
        "Indicative/estimated values from typical astrophysical magnitudes (cosmic rays, photons, neutrinos); not live counts.",
    },
    graphStyle: "data_rain",
    items: [
      {
        id: "cosmic_rays",
        emoji: "✨",
        title: { it: "Raggi cosmici", en: "Cosmic rays" },
        description: {
          it: "Particelle ad alta energia che colpiscono la Terra.",
          en: "High-energy particles striking Earth.",
        },
        ratePerSecond: 1000000000000,
        unit: { it: "particelle/sec", en: "particles/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.25 },
        info: {
          source: "NASA / fisica dei raggi cosmici (stima)",
          url: "https://science.nasa.gov/",
          note_it:
            "Ordine di grandezza: flusso medio di particelle ad alta energia su area terrestre.",
          note_en:
            "Order of magnitude: mean flux of high-energy particles across Earth area.",
        },
        details: {
          insight_it:
            "Il flusso dipende da attività solare e campo magnetico terrestre: la variabilità è parte del fenomeno.",
          insight_en:
            "Flux depends on solar activity and Earth’s magnetic field: variability is part of the phenomenon.",
          source_label: "NASA Science (stima)",
          source_url: "https://science.nasa.gov/",
          history7d: [8.0e16, 8.2e16, 8.1e16, 8.4e16, 8.6e16, 8.5e16, 8.7e16],
          history_unit: { it: "particelle/giorno", en: "particles/day" },
        },
      },
      {
        id: "solar_photons",
        emoji: "☀️",
        title: { it: "Fotoni solari", en: "Solar photons" },
        description: {
          it: "Luce del Sole che arriva sulla Terra.",
          en: "Sunlight photons arriving at Earth.",
        },
        ratePerSecond: 2000000000000000000,
        unit: { it: "fotoni/sec", en: "photons/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.08 },
        info: {
          source: "NASA / fisica solare (stima)",
          url: "https://science.nasa.gov/",
          note_it:
            "Conversione semplificata tra energia solare e numero di fotoni; ordine di grandezza.",
          note_en:
            "Simplified conversion between solar energy and photon count; order-of-magnitude.",
        },
        details: {
          insight_it:
            "Se converti energia in fotoni ottieni numeri enormi: per UI è fondamentale la notazione compatta.",
          insight_en:
            "Energy-to-photon conversion yields huge numbers: compact notation is essential for UI.",
          source_label: "NASA Science (stima)",
          source_url: "https://science.nasa.gov/",
          history7d: [1.65e23, 1.66e23, 1.67e23, 1.68e23, 1.685e23, 1.69e23, 1.695e23],
          history_unit: { it: "fotoni/giorno", en: "photons/day" },
        },
      },
      {
        id: "meteors",
        emoji: "🌠",
        title: { it: "Meteore atmosferiche", en: "Atmospheric meteors" },
        description: {
          it: "Meteoroidi che bruciano nell'atmosfera.",
          en: "Meteors burning in the atmosphere.",
        },
        ratePerSecond: 16,
        unit: { it: "eventi/sec", en: "events/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.7 },
        info: {
          source: "NASA / meteoroidi (stima)",
          url: "https://science.nasa.gov/",
          note_it:
            "Valore indicativo: eventi piccoli sono frequenti, ma non tutti osservabili.",
          note_en:
            "Indicative value: small events are frequent, but not all are observable.",
        },
        details: {
          insight_it:
            "In alcuni periodi (sciami meteorici) il numero cresce molto: il contatore medio non cattura i picchi reali.",
          insight_en:
            "During meteor showers the number spikes: an average counter won’t capture real peaks.",
          source_label: "NASA Science (stima)",
          source_url: "https://science.nasa.gov/",
          history7d: [1.1e6, 1.0e6, 1.3e6, 1.2e6, 1.15e6, 1.05e6, 1.1e6],
          history_unit: { it: "eventi/giorno", en: "events/day" },
        },
      },
      {
        id: "neutrinos",
        emoji: "💫",
        title: { it: "Neutrini", en: "Neutrinos" },
        description: {
          it: "Particelle che attraversano ogni corpo.",
          en: "Particles passing through everything.",
        },
        ratePerSecond: 6000000000000000000,
        unit: { it: "particelle/sec", en: "particles/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.12 },
        info: {
          source: "Fisica delle particelle (stima didattica)",
          url: "https://home.cern/",
          note_it:
            "Stima didattica del flusso di neutrini che attraversa un’area; estremamente approssimata.",
          note_en:
            "Educational estimate of neutrino flux across an area; extremely approximate.",
        },
        details: {
          insight_it:
            "La maggior parte dei neutrini attraversa materia senza interagire: è il motivo per cui sono 'invisibili'.",
          insight_en:
            "Most neutrinos pass through matter without interacting: that’s why they’re 'invisible'.",
          source_label: "CERN / fisica (stima didattica)",
          source_url: "https://home.cern/",
          history7d: [5.0e23, 5.05e23, 5.1e23, 5.12e23, 5.15e23, 5.18e23, 5.2e23],
          history_unit: { it: "particelle/giorno", en: "particles/day" },
        },
      },
      {
        id: "cosmic_expansion",
        emoji: "🌀",
        title: {
          it: "Espansione dell'universo",
          en: "Universe expansion",
        },
        description: {
          it: "Lo spazio stesso che si espande.",
          en: "Space itself expanding.",
        },
        ratePerSecond: 70,
        unit: { it: "km/sec/MPc", en: "km/sec/MPc" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.0 },
        info: {
          source: "Cosmologia (costante di Hubble, valore tipico)",
          url: "https://science.nasa.gov/",
          note_it:
            "Non è un contatore 'per secondo' classico: è un parametro cosmologico mostrato come riferimento.",
          note_en:
            "Not a classic per-second counter: a cosmological parameter shown for reference.",
        },
        details: {
          insight_it:
            "Questo dato è concettuale: serve a collegare il tema 'cosmico' a un parametro reale della cosmologia.",
          insight_en:
            "This is conceptual: it ties the 'cosmic' theme to a real cosmology parameter.",
          source_label: "NASA Science (cosmologia)",
          source_url: "https://science.nasa.gov/",
          history7d: [68.5, 68.8, 69.2, 69.5, 69.8, 70.1, 70.0],
          history_unit: { it: "km/sec/MPc", en: "km/sec/Mpc" },
        },
      },
      {
        id: "atoms_vibrating",
        emoji: "⚛️",
        title: { it: "Atomi che vibrano", en: "Vibrating atoms" },
        description: {
          it: "Movimento termico degli atomi.",
          en: "Thermal vibration of atoms.",
        },
        ratePerSecond: 100000000000000000000000,
        unit: { it: "vibrazioni/sec", en: "vibrations/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.05 },
        info: {
          source: "Fisica statistica (stima, ordine di grandezza)",
          url: "https://science.nasa.gov/",
          note_it:
            "Numero simbolico per rappresentare il moto termico: dipende da temperatura e scala considerata.",
          note_en:
            "Symbolic number to represent thermal motion: depends on temperature and chosen scale.",
        },
        details: {
          insight_it:
            "È una metrica 'astratta' per ricordare che a livello microscopico tutto è movimento.",
          insight_en:
            "An 'abstract' metric to remind that at microscopic scale everything is motion.",
          source_label: "Fisica (stima)",
          source_url: "https://science.nasa.gov/",
          history7d: [8.2e27, 8.25e27, 8.3e27, 8.35e27, 8.4e27, 8.42e27, 8.45e27],
          history_unit: { it: "vibrazioni/giorno", en: "vibrations/day" },
        },
      },
      {
        id: "cmb_radiation",
        emoji: "🌑",
        title: {
          it: "Radiazione cosmica di fondo",
          en: "Cosmic background radiation",
        },
        description: {
          it: "Eco del Big Bang che permea l'universo.",
          en: "Echo of the Big Bang across the universe.",
        },
        ratePerSecond: 42000000000000000,
        unit: { it: "fotoni/sec", en: "photons/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.02 },
        info: {
          source: "Cosmologia / CMB (stima didattica)",
          url: "https://science.nasa.gov/",
          note_it:
            "Valore indicativo per rappresentare la presenza costante del CMB; semplificato.",
          note_en:
            "Indicative value to represent constant presence of the CMB; simplified.",
        },
        details: {
          insight_it:
            "Il CMB è quasi uniforme: qui la 'dinamica' è più estetica che fisica.",
          insight_en:
            "CMB is nearly uniform: here 'dynamics' is more aesthetic than physical.",
          source_label: "NASA Science (stima didattica)",
          source_url: "https://science.nasa.gov/",
          history7d: [3.6e21, 3.61e21, 3.62e21, 3.63e21, 3.64e21, 3.65e21, 3.66e21],
          history_unit: { it: "fotoni/giorno", en: "photons/day" },
        },
      },
      {
        id: "stellar_photons",
        emoji: "⭐",
        title: { it: "Fotoni stellari", en: "Stellar photons" },
        description: {
          it: "Luce emessa dalle stelle vicine.",
          en: "Light emitted by nearby stars.",
        },
        ratePerSecond: 900000000000000000,
        unit: { it: "fotoni/sec", en: "photons/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.1 },
        info: {
          source: "Astrofisica (stima, ordine di grandezza)",
          url: "https://www.esa.int/",
          note_it:
            "Stima aggregata per 'stelle vicine': metrica narrativa più che misurabile direttamente.",
          note_en:
            "Aggregate estimate for 'nearby stars': narrative metric more than directly measurable.",
        },
        details: {
          insight_it:
            "Serve a differenziare il 'cosmico' dal 'solare': numeri grandi ma con un comportamento meno regolare.",
          insight_en:
            "Helps differentiate 'cosmic' from 'solar': big numbers with less regular behavior.",
          source_label: "ESA / astrofisica (stima)",
          source_url: "https://www.esa.int/",
          history7d: [7.7e22, 7.75e22, 7.8e22, 7.85e22, 7.9e22, 7.92e22, 7.95e22],
          history_unit: { it: "fotoni/giorno", en: "photons/day" },
        },
      },
      {
        id: "stellar_events",
        emoji: "🔭",
        title: { it: "Eventi stellari", en: "Stellar events" },
        description: {
          it: "Micro-flare, eruzioni e attività stellare.",
          en: "Micro-flares and stellar activity.",
        },
        ratePerSecond: 1000000,
        unit: { it: "eventi/sec", en: "events/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.5 },
        info: {
          source: "Astrofisica (stima creativa)",
          url: "https://science.nasa.gov/",
          note_it:
            "Metrica narrativa: unifica micro-eventi su molte stelle; non esiste un contatore globale reale.",
          note_en:
            "Narrative metric: aggregates micro-events across many stars; no true global counter exists.",
        },
        details: {
          insight_it:
            "Ottima per una 'pioggia' nervosa: tanti micro-eventi rendono visivamente il grafico più vivo.",
          insight_en:
            "Great for a 'nervous' rain: many micro-events make the graph feel more alive.",
          source_label: "NASA Science (stima creativa)",
          source_url: "https://science.nasa.gov/",
          history7d: [7.5e10, 7.6e10, 7.55e10, 7.7e10, 7.8e10, 7.75e10, 7.85e10],
          history_unit: { it: "eventi/giorno", en: "events/day" },
        },
      },
      {
        id: "interstellar_particles",
        emoji: "☄️",
        title: {
          it: "Particelle interstellari",
          en: "Interstellar particles",
        },
        description: {
          it: "Materiale che viaggia tra le stelle.",
          en: "Material drifting between stars.",
        },
        ratePerSecond: 800000000000,
        unit: { it: "particelle/sec", en: "particles/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.2 },
        info: {
          source: "Astrofisica / mezzo interstellare (stima)",
          url: "https://www.esa.int/",
          note_it:
            "Ordine di grandezza per densità e flussi nel mezzo interstellare; semplificato.",
          note_en:
            "Order-of-magnitude for densities/fluxes in the interstellar medium; simplified.",
        },
        details: {
          insight_it:
            "È un flusso 'diffuso': visivamente la pioggia dovrebbe essere costante ma non estrema come fotoni/neutrini.",
          insight_en:
            "A 'diffuse' flow: visually, the rain should be steady but not as extreme as photons/neutrinos.",
          source_label: "ESA (stima)",
          source_url: "https://www.esa.int/",
          history7d: [6.6e16, 6.7e16, 6.65e16, 6.8e16, 6.85e16, 6.75e16, 6.7e16],
          history_unit: { it: "particelle/giorno", en: "particles/day" },
        },
      },
      {
        id: "satellites_orbiting",
        emoji: "🛰️",
        title: { it: "Satelliti in orbita", en: "Satellites in orbit" },
        description: {
          it: "Numero stimato di satelliti attivi/trackati in orbita terrestre.",
          en: "Estimated number of active/trackable satellites in Earth orbit.",
        },
        ratePerSecond: 0.00005,
        unit: { it: "satelliti/sec", en: "satellites/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.0 },
        info: {
          source: "ESA / Space Debris Office (riferimento, conteggio non real-time)",
          url: "https://www.esa.int/Safety_Security/Space_Debris",
          note_it:
            "Non è un flusso naturale: è un riferimento 'lento' per variare il tipo di dinamica cosmica.",
          note_en:
            "Not a natural flow: a slow-changing reference to vary cosmic dynamics.",
        },
        details: {
          insight_it:
            "Questo contatore cresce molto lentamente: serve a bilanciare la UI con un fenomeno quasi statico.",
          insight_en:
            "This counter changes very slowly: it balances the UI with an almost static phenomenon.",
          source_label: "ESA Space Debris (riferimento)",
          source_url: "https://www.esa.int/Safety_Security/Space_Debris",
          history7d: [9800, 9810, 9820, 9830, 9840, 9850, 9860],
          history_unit: { it: "satelliti", en: "satellites" },
        },
      },
    ],
  },

  // 💻 DIGITAL FIREHOSE
  {
    id: "digital_firehose",
    emoji: "💻",
    title: {
      it: "Flussi Digitali",
      en: "Digital Flows",
    },
    subtitle: {
      it: "Flussi di dati e attività online",
      en: "Data streams and online activity",
    },
    info: {
      source: "ITU / report traffico Internet + stime piattaforme (stima)",
      url: "https://www.itu.int/",
      note_it:
        "Valori indicativi/stimati da report su traffico e utilizzo servizi; non sono conteggi live globali.",
      note_en:
        "Indicative/estimated values from traffic and service-usage reports; not global live counts.",
    },
    graphStyle: "data_rain",
    items: [
      {
        id: "internet_packets",
        emoji: "🌐",
        title: { it: "Pacchetti internet", en: "Internet packets" },
        description: {
          it: "Dati che scorrono nella rete globale.",
          en: "Data packets flowing worldwide.",
        },
        ratePerSecond: 300000000000,
        unit: { it: "pacchetti/sec", en: "packets/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.15 },
        info: {
          source: "ITU + report traffico (stima)",
          url: "https://www.itu.int/",
          note_it:
            "Derivato da volumi di traffico globali convertiti in unità 'pacchetti'; approssimazione.",
          note_en:
            "Derived from global traffic volumes converted into 'packets'; approximation.",
        },
        details: {
          insight_it:
            "Per un effetto 'pioggia' credibile, questo è un ottimo driver: alto rate => pioggia densa e veloce.",
          insight_en:
            "Great driver for a believable 'rain' effect: high rate => dense, fast rain.",
          source_label: "ITU (stima)",
          source_url: "https://www.itu.int/",
          history7d: [2.4e16, 2.45e16, 2.5e16, 2.55e16, 2.6e16, 2.62e16, 2.65e16],
          history_unit: { it: "pacchetti/giorno", en: "packets/day" },
        },
      },
      {
        id: "emails_sent",
        emoji: "📧",
        title: { it: "Email inviate", en: "Emails sent" },
        description: {
          it: "Email spedite in tutto il mondo.",
          en: "Emails sent worldwide.",
        },
        ratePerSecond: 3500000,
        unit: { it: "email/sec", en: "emails/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.35 },
        info: {
          source: "Report mercato email/Internet (stima)",
          url: "https://www.itu.int/",
          note_it:
            "Stima media globale: varia molto per fasce orarie e giorni della settimana.",
          note_en:
            "Global mean estimate: varies strongly by time-of-day and weekday.",
        },
        details: {
          insight_it:
            "Ottimo contatore 'umano-digitale': medio-alto, abbastanza variabile da far 'respirare' l’animazione.",
          insight_en:
            "Good 'human-digital' counter: medium-high and variable enough to make the animation feel alive.",
          source_label: "ITU / report (stima)",
          source_url: "https://www.itu.int/",
          history7d: [2.8e11, 2.75e11, 2.9e11, 3.0e11, 3.05e11, 3.1e11, 3.12e11],
          history_unit: { it: "email/giorno", en: "emails/day" },
        },
      },
      {
        id: "social_scrolls",
        emoji: "📱",
        title: { it: "Scroll sui social", en: "Social scrolls" },
        description: {
          it: "Feed aggiornati dagli utenti.",
          en: "Feeds scrolled by users.",
        },
        ratePerSecond: 4500000,
        unit: { it: "scroll/sec", en: "scrolls/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.45 },
        info: {
          source: "Stime utilizzo social (stima)",
          url: "https://www.itu.int/",
          note_it:
            "Metrica proxy: dipende da definizione di 'scroll' e piattaforme considerate.",
          note_en:
            "Proxy metric: depends on the definition of 'scroll' and platforms included.",
        },
        details: {
          insight_it:
            "Se vuoi 'dinamismo', qui puoi aumentare jitter: gli utenti non scrollano in modo uniforme.",
          insight_en:
            "If you want dynamism, increase jitter here: users don’t scroll uniformly.",
          source_label: "Stime utilizzo (proxy)",
          source_url: "https://www.itu.int/",
          history7d: [3.4e11, 3.5e11, 3.55e11, 3.6e11, 3.65e11, 3.7e11, 3.75e11],
          history_unit: { it: "scroll/giorno", en: "scrolls/day" },
        },
      },
      {
        id: "music_streams",
        emoji: "🎵",
        title: { it: "Ascolti musicali", en: "Music streams" },
        description: {
          it: "Brani ascoltati sui servizi di streaming.",
          en: "Tracks played on streaming platforms.",
        },
        ratePerSecond: 800000,
        unit: { it: "ascolti/sec", en: "plays/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.25 },
        info: {
          source: "Report streaming audio (stima)",
          url: "https://www.itu.int/",
          note_it:
            "Stima media globale su piattaforme di streaming; varia per fusi orari e trend.",
          note_en:
            "Global mean estimate across streaming platforms; varies by time zones and trends.",
        },
        details: {
          insight_it:
            "Buono per una pioggia media: meno intensa di pacchetti/email, ma continua.",
          insight_en:
            "Good for medium rain: less intense than packets/emails, but continuous.",
          source_label: "Report streaming (stima)",
          source_url: "https://www.itu.int/",
          history7d: [6.0e10, 6.1e10, 6.05e10, 6.2e10, 6.25e10, 6.3e10, 6.35e10],
          history_unit: { it: "ascolti/giorno", en: "plays/day" },
        },
      },
      {
        id: "videos_uploaded",
        emoji: "📹",
        title: { it: "Video caricati", en: "Videos uploaded" },
        description: {
          it: "Secondi di video caricati online.",
          en: "Seconds of video uploaded online.",
        },
        ratePerSecond: 500,
        unit: { it: "sec_video/sec", en: "sec_video/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.6 },
        info: {
          source: "Stime piattaforme UGC (stima)",
          url: "https://www.itu.int/",
          note_it:
            "Proxy basato su upload medi e durata media; non un dato pubblico uniforme.",
          note_en:
            "Proxy based on average uploads and average duration; not a uniform public metric.",
        },
        details: {
          insight_it:
            "Il caricamento è 'burst': se vuoi un effetto più realistico, qui il jitter alto rende bene.",
          insight_en:
            "Uploads are bursty: higher jitter makes this feel more realistic.",
          source_label: "Stime UGC (proxy)",
          source_url: "https://www.itu.int/",
          history7d: [3.5e7, 3.6e7, 3.55e7, 3.7e7, 3.8e7, 3.75e7, 3.85e7],
          history_unit: { it: "sec_video/giorno", en: "sec_video/day" },
        },
      },
      {
        id: "ai_tokens",
        emoji: "🤖",
        title: { it: "Token AI generati", en: "AI tokens generated" },
        description: {
          it: "Testo creato da modelli di intelligenza artificiale.",
          en: "Text generated by AI models.",
        },
        ratePerSecond: 220000000,
        unit: { it: "token/sec", en: "tokens/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.35 },
        info: {
          source: "Stima aggregata utilizzo modelli AI (proxy)",
          url: "https://www.itu.int/",
          note_it:
            "Non esiste un contatore unico pubblico: metrica proxy per rappresentare il fenomeno.",
          note_en:
            "No single public counter exists: proxy metric to represent the phenomenon.",
        },
        details: {
          insight_it:
            "Questo è perfetto per 'pioggia velocissima'. Se satura la UI, riduci densità/velocità via rendering, non qui.",
          insight_en:
            "Perfect for 'very fast rain'. If it saturates the UI, reduce density/speed in rendering, not here.",
          source_label: "Proxy AI (stima)",
          source_url: "https://www.itu.int/",
          history7d: [1.5e13, 1.6e13, 1.65e13, 1.7e13, 1.8e13, 1.9e13, 2.0e13],
          history_unit: { it: "token/giorno", en: "tokens/day" },
        },
      },
      {
        id: "downloads",
        emoji: "💾",
        title: { it: "Download globali", en: "Global downloads" },
        description: {
          it: "File scaricati in tutto il mondo.",
          en: "Files downloaded worldwide.",
        },
        ratePerSecond: 3200000,
        unit: { it: "download/sec", en: "downloads/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.3 },
        info: {
          source: "Report traffico / CDN (stima)",
          url: "https://www.itu.int/",
          note_it:
            "Stima media globale convertita in 'download' come unità astratta.",
          note_en:
            "Mean global estimate converted into 'downloads' as an abstract unit.",
        },
        details: {
          insight_it:
            "È una metrica intuitiva per gli utenti, anche se tecnicamente approssimata.",
          insight_en:
            "It’s intuitive for users, even if technically approximate.",
          source_label: "Report traffico (stima)",
          source_url: "https://www.itu.int/",
          history7d: [2.4e11, 2.35e11, 2.5e11, 2.55e11, 2.6e11, 2.58e11, 2.62e11],
          history_unit: { it: "download/giorno", en: "downloads/day" },
        },
      },
      {
        id: "search_queries",
        emoji: "🔍",
        title: { it: "Ricerche online", en: "Search queries" },
        description: {
          it: "Ricerche effettuate dagli utenti.",
          en: "Searches performed by users.",
        },
        ratePerSecond: 100000,
        unit: { it: "ricerche/sec", en: "searches/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.4 },
        info: {
          source: "Stime mercato search (stima)",
          url: "https://www.itu.int/",
          note_it:
            "Tasso medio: varia molto durante la giornata e per eventi/news.",
          note_en:
            "Mean rate: varies widely during the day and by events/news.",
        },
        details: {
          insight_it:
            "Se vuoi far percepire 'il secondo esatto', qui l’oscillazione (jitter) aiuta moltissimo.",
          insight_en:
            "To make users feel the 'exact second', oscillation (jitter) helps a lot here.",
          source_label: "Stime search (proxy)",
          source_url: "https://www.itu.int/",
          history7d: [8.2e9, 8.0e9, 8.4e9, 8.6e9, 8.7e9, 8.5e9, 8.8e9],
          history_unit: { it: "ricerche/giorno", en: "searches/day" },
        },
      },
      {
        id: "online_purchases",
        emoji: "🛒",
        title: { it: "Acquisti online", en: "Online purchases" },
        description: {
          it: "Prodotti acquistati su internet.",
          en: "Products purchased online.",
        },
        ratePerSecond: 100000,
        unit: { it: "acquisti/sec", en: "purchases/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.5 },
        info: {
          source: "Stime e-commerce globale (proxy)",
          url: "https://www.itu.int/",
          note_it:
            "Valore indicativo: dipende da definizione di 'acquisto' e mercati inclusi.",
          note_en:
            "Indicative value: depends on definition of 'purchase' and markets included.",
        },
        details: {
          insight_it:
            "I picchi sono legati a campagne e orari: un trend settimanale è più sensato del 'live perfetto'.",
          insight_en:
            "Spikes are tied to campaigns and hours: weekly trend makes more sense than 'perfect live'.",
          source_label: "Stime e-commerce (proxy)",
          source_url: "https://www.itu.int/",
          history7d: [7.6e9, 7.4e9, 7.8e9, 8.0e9, 8.2e9, 8.1e9, 8.3e9],
          history_unit: { it: "acquisti/giorno", en: "purchases/day" },
        },
      },
      {
        id: "photos_taken",
        emoji: "📸",
        title: { it: "Foto scattate", en: "Photos taken" },
        description: {
          it: "Foto scattate dagli smartphone.",
          en: "Photos taken around the world.",
        },
        ratePerSecond: 3000000,
        unit: { it: "foto/sec", en: "photos/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.55 },
        info: {
          source: "Stime utilizzo smartphone (proxy)",
          url: "https://www.itu.int/",
          note_it:
            "Metrica proxy: dipende da device, abitudini e mercati; buona per effetto dinamico.",
          note_en:
            "Proxy metric: depends on devices, habits, markets; good for dynamic effect.",
        },
        details: {
          insight_it:
            "È un contatore 'sociale': visivamente dovrebbe creare una pioggia intensa ma meno estrema di pacchetti/token AI.",
          insight_en:
            "A 'social' counter: visually, intense rain but less extreme than packets/AI tokens.",
          source_label: "Proxy smartphone (stima)",
          source_url: "https://www.itu.int/",
          history7d: [2.5e11, 2.45e11, 2.6e11, 2.7e11, 2.75e11, 2.72e11, 2.8e11],
          history_unit: { it: "foto/giorno", en: "photos/day" },
        },
      },
    ],
  },

  // 🎮 GAMING FRENZY
  {
    id: "gaming_frenzy",
    emoji: "🎮",
    title: {
      it: "Dati Videoludici",
      en: "Gaming Data",
    },
    subtitle: {
      it: "Numeri dal mondo dei videogiochi",
      en: "Numbers from the gaming world",
    },
    info: {
      source: "Newzoo / report industria gaming + stime utilizzo (stima)",
      url: "https://newzoo.com/",
      note_it:
        "Valori indicativi/stimati da report di settore e modelli di utilizzo; non sono misure live dei singoli giochi.",
      note_en:
        "Indicative/estimated values from industry reports and usage models; not per-game live measurements.",
    },
    graphStyle: "data_rain",
    items: [
      {
        id: "controller_inputs",
        emoji: "🎮",
        title: { it: "Input da controller", en: "Controller inputs" },
        description: {
          it: "Pulsanti premuti nei videogiochi.",
          en: "Buttons pressed in games.",
        },
        ratePerSecond: 500000000,
        unit: { it: "input/sec", en: "inputs/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.45 },
        info: {
          source: "Stime gameplay globale (proxy)",
          url: "https://newzoo.com/",
          note_it:
            "Proxy basato su utenti attivi e frequenza input; varia per piattaforme e titoli.",
          note_en:
            "Proxy based on active users and input frequency; varies by platforms and titles.",
        },
        details: {
          insight_it:
            "Molto adatto alla pioggia: genera una densità alta ma gestibile se il renderer limita la quantità di particelle.",
          insight_en:
            "Very suitable for rain: high density but manageable if renderer caps particle count.",
          source_label: "Newzoo (proxy/stima)",
          source_url: "https://newzoo.com/",
          history7d: [4.1e13, 4.05e13, 4.2e13, 4.3e13, 4.35e13, 4.25e13, 4.4e13],
          history_unit: { it: "input/giorno", en: "inputs/day" },
        },
      },
      {
        id: "mouse_clicks",
        emoji: "🖱",
        title: {
          it: "Click nei videogiochi",
          en: "Mouse clicks in games",
        },
        description: {
          it: "Click effettuati dai giocatori.",
          en: "Clicks made by players.",
        },
        ratePerSecond: 10000000000,
        unit: { it: "click/sec", en: "clicks/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.55 },
        info: {
          source: "Stime gameplay PC (proxy)",
          url: "https://newzoo.com/",
          note_it:
            "Proxy: dipende da generi (FPS/RTS), durata sessioni e utenti attivi.",
          note_en:
            "Proxy: depends on genres (FPS/RTS), session duration, and active users.",
        },
        details: {
          insight_it:
            "Se vuoi un effetto molto 'energetico', questo è uno dei migliori driver: alto e variabile.",
          insight_en:
            "If you want a very 'energetic' effect, this is one of the best drivers: high and variable.",
          source_label: "Newzoo (proxy/stima)",
          source_url: "https://newzoo.com/",
          history7d: [8.6e14, 8.4e14, 8.8e14, 9.0e14, 9.1e14, 8.95e14, 9.2e14],
          history_unit: { it: "click/giorno", en: "clicks/day" },
        },
      },
      {
        id: "active_players",
        emoji: "👥",
        title: { it: "Videogiocatori attivi", en: "Active gamers" },
        description: {
          it: "Persone che stanno giocando ora.",
          en: "People playing right now.",
        },
        ratePerSecond: 300000,
        unit: { it: "giocatori/sec", en: "players/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.3 },
        info: {
          source: "Newzoo / stime utenti attivi (proxy)",
          url: "https://newzoo.com/",
          note_it:
            "È una proxy: 'attivo' dipende da definizioni e dataset. Utile come indicatore dinamico.",
          note_en:
            "Proxy: 'active' depends on definitions/datasets. Useful as a dynamic indicator.",
        },
        details: {
          insight_it:
            "Questo valore può pilotare non solo pioggia ma anche 'intensità' UI (glow, pulsazioni).",
          insight_en:
            "This can drive not only rain but also UI 'intensity' (glow, pulses).",
          source_label: "Newzoo (proxy/stima)",
          source_url: "https://newzoo.com/",
          history7d: [2.1e7, 2.05e7, 2.2e7, 2.3e7, 2.25e7, 2.15e7, 2.35e7],
          history_unit: { it: "giocatori", en: "players" },
        },
      },
      {
        id: "stream_hours",
        emoji: "🎧",
        title: {
          it: "Ore guardate in streaming",
          en: "Streaming hours watched",
        },
        description: {
          it: "Ore di Twitch/YouTube Gaming consumate.",
          en: "Hours watched across streaming platforms.",
        },
        ratePerSecond: 120000,
        unit: { it: "ore/sec", en: "hours/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.4 },
        info: {
          source: "Stime streaming gaming (proxy)",
          url: "https://newzoo.com/",
          note_it:
            "Proxy aggregata: dipende da piattaforme e dalla definizione di 'ore guardate'.",
          note_en:
            "Aggregate proxy: depends on platforms and definition of 'hours watched'.",
        },
        details: {
          insight_it:
            "È un contatore utile per avere una pioggia costante, meno estrema di click/input ma più presente di eventi rari.",
          insight_en:
            "Useful for steady rain: less extreme than clicks/inputs but more present than rare events.",
          source_label: "Newzoo (proxy/stima)",
          source_url: "https://newzoo.com/",
          history7d: [9.5e9, 9.3e9, 9.7e9, 9.9e9, 1.01e10, 1.0e10, 1.02e10],
          history_unit: { it: "ore/giorno", en: "hours/day" },
        },
      },
      {
        id: "play_hours",
        emoji: "🕹",
        title: {
          it: "Ore di gioco accumulate",
          en: "Playtime accumulated",
        },
        description: {
          it: "Ore giocate globalmente.",
          en: "Total playtime generated.",
        },
        ratePerSecond: 1000000,
        unit: { it: "ore/sec", en: "hours/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.25 },
        info: {
          source: "Stime playtime globale (proxy)",
          url: "https://newzoo.com/",
          note_it:
            "Stima aggregata da utenti attivi e durata sessioni; non misurabile con un singolo dato pubblico.",
          note_en:
            "Aggregated estimate from active users and session duration; no single public metric.",
        },
        details: {
          insight_it:
            "Se il numero sfora nelle card, non ridurre il rate: gestiscilo con formattazione compatta (K/M/B) e 2 decimali.",
          insight_en:
            "If it overflows in cards, don’t reduce rate: handle via compact formatting (K/M/B) and 2 decimals.",
          source_label: "Newzoo (proxy/stima)",
          source_url: "https://newzoo.com/",
          history7d: [7.8e10, 7.7e10, 7.9e10, 8.0e10, 8.1e10, 8.05e10, 8.15e10],
          history_unit: { it: "ore/giorno", en: "hours/day" },
        },
      },
      {
        id: "server_attacks",
        emoji: "⚙️",
        title: {
          it: "Server di gioco attaccati",
          en: "Game servers attacked",
        },
        description: {
          it: "Tentativi di attacco ai server online.",
          en: "Hack attempts against online game servers.",
        },
        ratePerSecond: 20,
        unit: { it: "attacchi/sec", en: "attacks/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.9 },
        info: {
          source: "Sicurezza gaming (stima/proxy)",
          url: "https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/",
          note_it:
            "Proxy: gli attacchi reali dipendono da periodo e target; utile come metrica dinamica 'spiky'.",
          note_en:
            "Proxy: real attacks depend on time and targets; useful as a spiky dynamic metric.",
        },
        details: {
          insight_it:
            "È volutamente 'burst': ottimo per far vedere differenze al secondo, ma non va interpretato come dato reale globale.",
          insight_en:
            "Intentionally bursty: great to show per-second differences, but not a real global measurement.",
          source_label: "Proxy security (stima)",
          source_url: "https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/",
          history7d: [1.6e6, 1.4e6, 1.8e6, 2.1e6, 1.9e6, 1.7e6, 2.0e6],
          history_unit: { it: "attacchi/giorno", en: "attacks/day" },
        },
      },
      {
        id: "minecraft_blocks",
        emoji: "🧱",
        title: {
          it: "Blocchi piazzati in Minecraft",
          en: "Blocks placed in Minecraft",
        },
        description: {
          it: "Blocchi piazzati dai giocatori.",
          en: "Blocks placed by players.",
        },
        ratePerSecond: 20000000,
        unit: { it: "blocchi/sec", en: "blocks/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.5 },
        info: {
          source: "Metrica creativa (proxy comunità)",
          url: "https://newzoo.com/",
          note_it:
            "Non esiste un contatore pubblico globale: valore inventato ma plausibile per dare varietà e ritmo.",
          note_en:
            "No public global counter: invented but plausible to provide variety and rhythm.",
        },
        details: {
          insight_it:
            "È un dato 'brandizzato' utile per sorprendere: se vuoi più rigore, sostituiscilo con una metrica di settore misurabile.",
          insight_en:
            "A 'branded' fun stat: if you want more rigor, replace with a measurable industry metric.",
          source_label: "Proxy (stima)",
          source_url: "https://newzoo.com/",
          history7d: [1.5e12, 1.48e12, 1.55e12, 1.6e12, 1.58e12, 1.57e12, 1.62e12],
          history_unit: { it: "blocchi/giorno", en: "blocks/day" },
        },
      },
      {
        id: "esport_matches",
        emoji: "🏆",
        title: { it: "Partite eSport", en: "eSports matches" },
        description: {
          it: "Partite competitive giocate nel mondo.",
          en: "Competitive matches played globally.",
        },
        ratePerSecond: 300,
        unit: { it: "match/sec", en: "matches/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.6 },
        info: {
          source: "Stime eSports / matchmaking (proxy)",
          url: "https://newzoo.com/",
          note_it:
            "Proxy: include competitive online in senso lato; dipende da definizione e titoli inclusi.",
          note_en:
            "Proxy: includes online competitive broadly; depends on definition and included titles.",
        },
        details: {
          insight_it:
            "Buono per mostrare 'attività competitiva' con una pioggia media e varia.",
          insight_en:
            "Good to show 'competitive activity' with medium, variable rain.",
          source_label: "Newzoo (proxy/stima)",
          source_url: "https://newzoo.com/",
          history7d: [2.1e7, 2.05e7, 2.2e7, 2.3e7, 2.25e7, 2.18e7, 2.35e7],
          history_unit: { it: "match/giorno", en: "matches/day" },
        },
      },
    ],
  },
];
