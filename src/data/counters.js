// src/data/counters.js

export const dataCategories = [
  // 🧬 HUMAN HYPER PULSE
  {
    id: "human_hyper_pulse",
    emoji: "🧬",
    title: { it: "Ritmi Umani", en: "Human Rhythms" },
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
    items: [
      {
        id: "heartbeats",
        emoji: "❤️",
        title: { it: "Battiti cardiaci globali", en: "Global heartbeats" },
        description: {
          it: "Cuori che battono nel mondo in questo istante",
          en: "Hearts beating worldwide in this moment",
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
      },
      {
        id: "cells_regenerated",
        emoji: "🧫",
        title: { it: "Cellule rigenerate", en: "Cells regenerated" },
        description: {
          it: "Cellule che si rigenerano nel corpo umano",
          en: "Cells regenerated in the human body",
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
      },
      {
        id: "neural_firings",
        emoji: "⚡",
        title: { it: "Impulsi neurali", en: "Neural impulses" },
        description: {
          it: "Attività elettrica nel cervello umano",
          en: "Electrical activity firing in the brain",
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
      },
      {
        id: "red_blood_cells",
        emoji: "🩸",
        title: { it: "Globuli rossi prodotti", en: "Red blood cells produced" },
        description: {
          it: "Globuli rossi creati dal midollo osseo",
          en: "Red blood cells created by bone marrow",
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
      },
      {
        id: "calories_burned",
        emoji: "🔥",
        title: { it: "Calorie bruciate", en: "Calories burned" },
        description: {
          it: "Calorie consumate dall'umanità",
          en: "Calories burned by humanity",
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
      },
      {
        id: "chemical_reactions",
        emoji: "🧪",
        title: { it: "Reazioni chimiche", en: "Chemical reactions" },
        description: {
          it: "Reazioni all'interno del corpo umano",
          en: "Chemical reactions inside the human body",
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
      },
      {
        id: "synapses",
        emoji: "🧠",
        title: { it: "Sinapsi attivate", en: "Synapses fired" },
        description: {
          it: "Connessioni cerebrali attive",
          en: "Brain synapses firing",
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
      },
      {
        id: "falling_asleep",
        emoji: "😴",
        title: {
          it: "Persone che si addormentano",
          en: "People falling asleep",
        },
        description: {
          it: "Persone che entrano nel sonno in questo momento",
          en: "People drifting into sleep right now",
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
      },
      {
        id: "smiles",
        emoji: "😊",
        title: { it: "Sorrisi globali", en: "Global smiles" },
        description: {
          it: "Sorrisi condivisi nel mondo ogni secondo",
          en: "Smiles shared across the world each second",
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
      },
      {
        id: "births",
        emoji: "👶",
        title: { it: "Nascite stimate", en: "Estimated births" },
        description: {
          it: "Nuove nascite stimate nel mondo, in tempo reale",
          en: "Estimated births worldwide, in real time",
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
      },
      {
        id: "deaths",
        emoji: "🕯️",
        title: { it: "Decessi stimati", en: "Estimated deaths" },
        description: {
          it: "Decessi stimati nel mondo, in tempo reale",
          en: "Estimated deaths worldwide, in real time",
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
      },
    ],
  },

  // 🌍 PLANET TURBO FLOW
  {
    id: "planet_flow",
    emoji: "🌍",
    title: { it: "Dinamiche Planetarie", en: "Planetary Dynamics" },
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
    items: [
      {
        id: "rain_drops",
        emoji: "🌧",
        title: { it: "Gocce di pioggia", en: "Rain drops" },
        description: {
          it: "Gocce che cadono sulla Terra",
          en: "Rain drops falling on Earth",
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
      },
      {
        id: "evaporation",
        emoji: "🌊",
        title: { it: "Evaporazione globale", en: "Global evaporation" },
        description: {
          it: "Acqua che ritorna in atmosfera",
          en: "Water evaporating into the atmosphere",
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
      },
      {
        id: "lightning",
        emoji: "⚡",
        title: { it: "Fulmini globali", en: "Global lightning" },
        description: {
          it: "Scariche elettriche sulla Terra",
          en: "Lightning strikes around the planet",
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
      },
      {
        id: "micro_quakes",
        emoji: "🌪",
        title: { it: "Micro-terremoti", en: "Micro-earthquakes" },
        description: {
          it: "Piccole vibrazioni della crosta terrestre",
          en: "Small seismic events worldwide",
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
      },
      {
        id: "plant_cells_growth",
        emoji: "🌱",
        title: {
          it: "Cellule vegetali in crescita",
          en: "Growing plant cells",
        },
        description: {
          it: "Crescita delle piante nel mondo",
          en: "Plant cells growing globally",
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
      },
      {
        id: "water_molecules_air",
        emoji: "☁️",
        title: {
          it: "Molecole d'acqua nell'aria",
          en: "Water molecules rising",
        },
        description: {
          it: "Molecole che entrano nell'atmosfera",
          en: "Water molecules entering the air",
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
      },
      {
        id: "solar_energy_absorbed",
        emoji: "🔆",
        title: { it: "Energia solare assorbita", en: "Solar energy absorbed" },
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
      },
      {
        id: "grass_growth",
        emoji: "🌾",
        title: { it: "Erba che cresce", en: "Grass growing" },
        description: {
          it: "Crescita delle superfici erbose",
          en: "Grass expanding worldwide",
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
      },
      {
        id: "bacteria_reproduction",
        emoji: "🦠",
        title: { it: "Batteri che si riproducono", en: "Reproducing bacteria" },
        description: {
          it: "Crescita batterica negli ecosistemi",
          en: "Bacterial reproduction in ecosystems",
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
      },
    ],
  },

  // 🌌 COSMIC SURGE
  {
    id: "cosmic_surge",
    emoji: "🌌",
    title: { it: "Fenomeni Cosmici", en: "Cosmic Phenomena" },
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
    items: [
      {
        id: "cosmic_rays",
        emoji: "✨",
        title: { it: "Raggi cosmici", en: "Cosmic rays" },
        description: {
          it: "Particelle ad alta energia che colpiscono la Terra",
          en: "High-energy particles striking Earth",
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
      },
      {
        id: "solar_photons",
        emoji: "☀️",
        title: { it: "Fotoni solari", en: "Solar photons" },
        description: {
          it: "Luce del Sole che arriva sulla Terra",
          en: "Sunlight photons arriving at Earth",
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
      },
      {
        id: "meteors",
        emoji: "🌠",
        title: { it: "Meteore atmosferiche", en: "Atmospheric meteors" },
        description: {
          it: "Meteoroidi che bruciano nell'atmosfera",
          en: "Meteors burning in the atmosphere",
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
      },
      {
        id: "neutrinos",
        emoji: "💫",
        title: { it: "Neutrini", en: "Neutrinos" },
        description: {
          it: "Particelle che attraversano ogni corpo",
          en: "Particles passing through everything",
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
      },
      {
        id: "cosmic_expansion",
        emoji: "🌀",
        title: { it: "Espansione dell'universo", en: "Universe expansion" },
        description: {
          it: "Lo spazio stesso che si espande",
          en: "Space itself expanding",
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
      },
      {
        id: "atoms_vibrating",
        emoji: "⚛️",
        title: { it: "Atomi che vibrano", en: "Vibrating atoms" },
        description: {
          it: "Movimento termico degli atomi",
          en: "Thermal vibration of atoms",
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
      },
      {
        id: "cmb_radiation",
        emoji: "🌑",
        title: {
          it: "Radiazione cosmica di fondo",
          en: "Cosmic background radiation",
        },
        description: {
          it: "Eco del Big Bang che permea l'universo",
          en: "Echo of the Big Bang across the universe",
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
      },
      {
        id: "stellar_photons",
        emoji: "⭐",
        title: { it: "Fotoni stellari", en: "Stellar photons" },
        description: {
          it: "Luce emessa dalle stelle vicine",
          en: "Light emitted by nearby stars",
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
      },
      {
        id: "stellar_events",
        emoji: "🔭",
        title: { it: "Eventi stellari", en: "Stellar events" },
        description: {
          it: "Micro-flare, eruzioni e attività stellare",
          en: "Micro-flares and stellar activity",
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
      },
      {
        id: "interstellar_particles",
        emoji: "☄️",
        title: { it: "Particelle interstellari", en: "Interstellar particles" },
        description: {
          it: "Materiale che viaggia tra le stelle",
          en: "Material drifting between stars",
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
      },
      {
        id: "satellites_orbiting",
        emoji: "🛰️",
        title: { it: "Satelliti in orbita", en: "Satellites in orbit" },
        description: {
          it: "Numero stimato di satelliti attivi/trackati in orbita terrestre",
          en: "Estimated number of active/trackable satellites in Earth orbit",
        },
        ratePerSecond: 0.00005,
        unit: { it: "satelliti/sec", en: "satellites/sec" },
        display: { decimals: 2, compact: true },
        dynamics: { jitterPct: 0.0 },
        info: {
          source:
            "ESA / Space Debris Office (riferimento, conteggio non real-time)",
          url: "https://www.esa.int/Safety_Security/Space_Debris",
          note_it:
            "Non è un flusso naturale: è un riferimento 'lento' per variare il tipo di dinamica cosmica.",
          note_en:
            "Not a natural flow: a slow-changing reference to vary cosmic dynamics.",
        },
      },
    ],
  },

  // 💻 DIGITAL FIREHOSE
  {
    id: "digital_firehose",
    emoji: "💻",
    title: { it: "Flussi Digitali", en: "Digital Flows" },
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
    items: [
      {
        id: "internet_packets",
        emoji: "🌐",
        title: { it: "Pacchetti internet", en: "Internet packets" },
        description: {
          it: "Dati che scorrono nella rete globale",
          en: "Data packets flowing worldwide",
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
      },
      {
        id: "emails_sent",
        emoji: "📧",
        title: { it: "Email inviate", en: "Emails sent" },
        description: {
          it: "Email spedite in tutto il mondo",
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
      },
      {
        id: "social_scrolls",
        emoji: "📱",
        title: { it: "Scroll sui social", en: "Social scrolls" },
        description: {
          it: "Feed aggiornati dagli utenti",
          en: "Feeds scrolled by users",
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
      },
      {
        id: "music_streams",
        emoji: "🎵",
        title: { it: "Ascolti musicali", en: "Music streams" },
        description: {
          it: "Brani ascoltati sui servizi di streaming",
          en: "Tracks played on streaming platforms",
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
      },
      {
        id: "videos_uploaded",
        emoji: "📹",
        title: { it: "Video caricati", en: "Videos uploaded" },
        description: {
          it: "Secondi di video caricati online",
          en: "Seconds of video uploaded online",
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
      },
      {
        id: "ai_tokens",
        emoji: "🤖",
        title: { it: "Token AI generati", en: "AI tokens generated" },
        description: {
          it: "Testo creato da modelli di intelligenza artificiale",
          en: "Text generated by AI models",
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
      },
      {
        id: "downloads",
        emoji: "💾",
        title: { it: "Download globali", en: "Global downloads" },
        description: {
          it: "File scaricati in tutto il mondo",
          en: "Files downloaded worldwide",
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
      },
      {
        id: "search_queries_general",
        emoji: "🔍",
        title: { it: "Ricerche online", en: "Search queries" },
        description: {
          it: "Ricerche effettuate dagli utenti",
          en: "Searches performed by users",
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
      },
      {
        id: "online_purchases",
        emoji: "🛒",
        title: { it: "Acquisti online", en: "Online purchases" },
        description: {
          it: "Prodotti acquistati su internet",
          en: "Products purchased online",
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
      },
      {
        id: "photos_taken",
        emoji: "📸",
        title: { it: "Foto scattate", en: "Photos taken" },
        description: {
          it: "Foto scattate dagli smartphone",
          en: "Photos taken around the world",
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
      },
    ],
  },

  // 🎮 GAMING FRENZY
  {
    id: "gaming_frenzy",
    emoji: "🎮",
    title: { it: "Dati Videoludici", en: "Gaming Data" },
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
    items: [
      {
        id: "controller_inputs",
        emoji: "🎮",
        title: { it: "Input da controller", en: "Controller inputs" },
        description: {
          it: "Pulsanti premuti nei videogiochi",
          en: "Buttons pressed in games",
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
      },
      {
        id: "mouse_clicks",
        emoji: "🖱",
        title: { it: "Click nei videogiochi", en: "Mouse clicks in games" },
        description: {
          it: "Click effettuati dai giocatori",
          en: "Clicks made by players",
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
      },
      {
        id: "active_players",
        emoji: "👥",
        title: { it: "Videogiocatori attivi", en: "Active gamers" },
        description: {
          it: "Persone che stanno giocando ora",
          en: "People playing right now",
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
      },
      {
        id: "stream_hours",
        emoji: "🎧",
        title: {
          it: "Ore guardate in streaming",
          en: "Streaming hours watched",
        },
        description: {
          it: "Ore di Twitch/YouTube Gaming consumate",
          en: "Hours watched across streaming platforms",
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
      },
      {
        id: "play_hours",
        emoji: "🕹",
        title: { it: "Ore di gioco accumulate", en: "Playtime accumulated" },
        description: {
          it: "Ore giocate globalmente",
          en: "Total playtime generated",
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
      },
      {
        id: "server_attacks",
        emoji: "⚙️",
        title: { it: "Server di gioco attaccati", en: "Game servers attacked" },
        description: {
          it: "Tentativi di attacco ai server online",
          en: "Hack attempts against online game servers",
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
      },
      {
        id: "minecraft_blocks",
        emoji: "🧱",
        title: {
          it: "Blocchi piazzati in Minecraft",
          en: "Blocks placed in Minecraft",
        },
        description: {
          it: "Blocchi piazzati dai giocatori",
          en: "Blocks placed by players",
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
      },
      {
        id: "esport_matches",
        emoji: "🏆",
        title: { it: "Partite eSport", en: "eSports matches" },
        description: {
          it: "Partite competitive giocate nel mondo",
          en: "Competitive matches played globally",
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
      },
    ],
  },

  // 🧠 MIND & CONSCIOUSNESS
  {
    id: "mind_consciousness",
    emoji: "🧠",
    title: { it: "Coscienza & Mente", en: "Mind & Consciousness" },
    subtitle: {
      it: "Processi invisibili della mente umana",
      en: "Invisible processes of the human mind",
    },
    info: {
      source: "Cognitive science & psychology literature (estimate)",
      url: "https://www.ncbi.nlm.nih.gov/",
      note_it: "Stime basate su modelli cognitivi e popolazione globale.",
      note_en: "Estimates based on cognitive models and global population.",
    },
    items: [
      {
        sectionId: "mind_consciousness",
        id: "thoughts_generated",
        emoji: "💭",
        title: { it: "Pensieri generati", en: "Thoughts generated" },
        description: {
          it: "Pensieri prodotti dall’umanità ogni secondo",
          en: "Thoughts produced by humanity each second",
        },
        ratePerSecond: 150000000,
        unit: { it: "pensieri/sec", en: "thoughts/sec" },
        curiosity: {
          it: "Un cervello può generare migliaia di pensieri al giorno.",
          en: "A human brain can generate thousands of thoughts per day.",
        },
      },
      {
        sectionId: "mind_consciousness",
        id: "decisions_made",
        emoji: "⚖️",
        title: { it: "Decisioni prese", en: "Decisions made" },
        description: {
          it: "Decisioni coscienti prese in questo istante",
          en: "Conscious decisions made right now",
        },
        ratePerSecond: 50000000,
        unit: { it: "decisioni/sec", en: "decisions/sec" },
        curiosity: {
          it: "Molte decisioni sono prese in meno di 1 secondo.",
          en: "Many decisions are made in under one second.",
        },
      },
    ],
  },

  // 🌱 LIFE ON EARTH
  {
    id: "life_on_earth",
    emoji: "🌱",
    title: { it: "Vita sulla Terra", en: "Life on Earth" },
    subtitle: {
      it: "Processi biologici oltre l’essere umano",
      en: "Biological processes beyond humans",
    },
    info: {
      source: "FAO / global ecology models (estimate)",
      url: "https://www.fao.org/",
      note_it: "Stime ecologiche aggregate a scala planetaria.",
      note_en: "Aggregated ecological estimates at planetary scale.",
    },
    items: [
      {
        sectionId: "life_on_earth",
        id: "animals_born",
        emoji: "🐣",
        title: { it: "Animali nati", en: "Animals born" },
        description: {
          it: "Animali che nascono ogni secondo",
          en: "Animals born each second",
        },
        ratePerSecond: 4000,
        unit: { it: "animali/sec", en: "animals/sec" },
        curiosity: {
          it: "La maggior parte nasce senza essere mai osservata.",
          en: "Most animals are born without ever being observed.",
        },
      },
      {
        sectionId: "life_on_earth",
        id: "photosynthesis",
        emoji: "🌿",
        title: { it: "Fotosintesi globale", en: "Global photosynthesis" },
        description: {
          it: "Molecole trasformate dalla fotosintesi",
          en: "Molecules transformed by photosynthesis",
        },
        ratePerSecond: 1e15,
        unit: { it: "molecole/sec", en: "molecules/sec" },
        curiosity: {
          it: "È la base energetica di quasi tutta la vita.",
          en: "It is the energetic base of almost all life.",
        },
      },
      {
        sectionId: "life_on_earth",
        id: "plants_growing",
        emoji: "🌱",
        title: { it: "Piante che crescono", en: "Plants growing" },
        description: {
          it: "Piante che crescono nel mondo ogni secondo",
          en: "Plants growing worldwide each second",
        },
        ratePerSecond: 200000,
        unit: { it: "piante/sec", en: "plants/sec" },
        curiosity: {
          it: "La crescita vegetale è continua, anche di notte.",
          en: "Plant growth is continuous, even at night.",
        },
      },
      {
        sectionId: "life_on_earth",
        id: "oxygen_released",
        emoji: "🫁",
        title: { it: "Ossigeno rilasciato", en: "Oxygen released" },
        description: {
          it: "Ossigeno rilasciato dalle piante",
          en: "Oxygen released by plants",
        },
        ratePerSecond: 300000,
        unit: { it: "kg/sec", en: "kg/sec" },
        curiosity: {
          it: "La maggior parte dell’ossigeno viene dal fitoplancton.",
          en: "Most oxygen comes from phytoplankton.",
        },
      },
      {
        sectionId: "life_on_earth",
        id: "microorganisms_active",
        emoji: "🦠",
        title: { it: "Microrganismi attivi", en: "Active microorganisms" },
        description: {
          it: "Microrganismi attivi in suolo, acqua e aria",
          en: "Microorganisms active in soil, water and air",
        },
        ratePerSecond: 1000000000,
        unit: { it: "organismi/sec", en: "organisms/sec" },
        curiosity: {
          it: "I microbi sono la base invisibile degli ecosistemi.",
          en: "Microbes are the invisible base of ecosystems.",
        },
      },
    ],
  },

  // 🏙 CIVILIZATION & INFRASTRUCTURE
  {
    id: "civilization_infrastructure",
    emoji: "🏙",
    title: {
      it: "Civiltà & Infrastruttura",
      en: "Civilization & Infrastructure",
    },
    subtitle: {
      it: "Attività quotidiane su scala globale",
      en: "Everyday activities at global scale",
    },
    info: {
      source: "UN / World Bank / infrastrutture urbane (stima)",
      url: "https://www.worldbank.org/",
      note_it: "Ordini di grandezza basati su popolazione urbana globale",
      note_en: "Orders of magnitude based on global urban population",
    },
    items: [
      {
        sectionId: "civilization_infrastructure",
        id: "elevators_moving",
        emoji: "🛗",
        title: { it: "Ascensori in movimento", en: "Elevators moving" },
        description: {
          it: "Ascensori attivi nel mondo ora",
          en: "Elevators moving worldwide right now",
        },
        ratePerSecond: 50000,
        unit: { it: "ascensori/sec", en: "elevators/sec" },
      },
      {
        sectionId: "civilization_infrastructure",
        id: "cars_at_lights",
        emoji: "🚦",
        title: { it: "Auto ai semafori", en: "Cars at traffic lights" },
        description: {
          it: "Auto ferme ai semafori in questo momento",
          en: "Cars stopped at traffic lights right now",
        },
        ratePerSecond: 200000,
        unit: { it: "auto/sec", en: "cars/sec" },
      },
      {
        sectionId: "civilization_infrastructure",
        id: "drinking_water",
        emoji: "🚰",
        title: {
          it: "Acqua potabile consumata",
          en: "Drinking water consumed",
        },
        description: {
          it: "Consumo globale di acqua potabile",
          en: "Global drinking water consumption",
        },
        ratePerSecond: 3000000,
        unit: { it: "litri/sec", en: "liters/sec" },
      },
      {
        sectionId: "civilization_infrastructure",
        id: "people_in_queue",
        emoji: "🧍",
        title: { it: "Persone in coda", en: "People in queues" },
        description: {
          it: "Persone in fila da qualche parte nel mondo",
          en: "People waiting in queues somewhere in the world",
        },
        ratePerSecond: 80000,
        unit: { it: "persone/sec", en: "people/sec" },
      },
      {
        sectionId: "civilization_infrastructure",
        id: "toilet_flushes",
        emoji: "🚽",
        title: { it: "WC tirati", en: "Toilet flushes" },
        description: {
          it: "Scarichi del WC ogni secondo",
          en: "Toilet flushes per second",
        },
        ratePerSecond: 250000,
        unit: { it: "scarichi/sec", en: "flushes/sec" },
      },
    ],
  },

  // 🌐 NETWORK & INFORMATION
  {
    id: "information_entropy",
    emoji: "🌐",
    title: { it: "Rete & Informazione", en: "Network & Information" },
    subtitle: {
      it: "Creazione, perdita ed entropia dei dati",
      en: "Creation, loss and entropy of data",
    },
    info: {
      source: "Digital studies / cybersecurity reports (stima)",
      url: "https://www.verizon.com/business/resources/reports/",
      note_it: "Stime basate su studi di sicurezza e utilizzo digitale.",
      note_en: "Estimates based on security and digital usage studies.",
    },
    items: [
      {
        sectionId: "information_entropy",
        id: "data_lost",
        emoji: "🗑",
        title: { it: "Dati persi", en: "Data lost" },
        description: {
          it: "Dati persi per sempre ogni secondo",
          en: "Data permanently lost each second",
        },
        ratePerSecond: 500000000,
        unit: { it: "byte/sec", en: "bytes/sec" },
      },
      {
        sectionId: "information_entropy",
        id: "passwords_forgotten",
        emoji: "🔑",
        title: { it: "Password dimenticate", en: "Passwords forgotten" },
        description: {
          it: "Password dimenticate dagli utenti",
          en: "Passwords forgotten by users",
        },
        ratePerSecond: 300,
        unit: { it: "password/sec", en: "passwords/sec" },
      },
      {
        sectionId: "information_entropy",
        id: "accounts_created",
        emoji: "👤",
        title: { it: "Account creati", en: "Accounts created" },
        description: {
          it: "Nuovi account creati nel mondo",
          en: "New accounts created worldwide",
        },
        ratePerSecond: 1200,
        unit: { it: "account/sec", en: "accounts/sec" },
      },
      {
        sectionId: "information_entropy",
        id: "bugs_introduced",
        emoji: "🐞",
        title: { it: "Bug introdotti", en: "Bugs introduced" },
        description: {
          it: "Nuovi bug introdotti nel codice",
          en: "New bugs introduced into code",
        },
        ratePerSecond: 200,
        unit: { it: "bug/sec", en: "bugs/sec" },
      },
      {
        sectionId: "information_entropy",
        id: "search_queries_general",
        emoji: "🔍",
        title: { it: "Ricerche online", en: "Online searches" },
        description: {
          it: "Ricerche effettuate sui motori di ricerca",
          en: "Search engine queries",
        },
        ratePerSecond: 100000,
        unit: { it: "ricerche/sec", en: "searches/sec" },
        curiosity: {
          it: "La maggior parte delle ricerche non viene mai ripetuta.",
          en: "Most searches are never repeated.",
        },
      },
      {
        sectionId: "information_entropy",
        id: "data_transferred",
        emoji: "📡",
        title: { it: "Dati trasferiti", en: "Data transferred" },
        description: {
          it: "Dati trasferiti attraverso internet",
          en: "Data transferred across the internet",
        },
        ratePerSecond: 30000000000,
        unit: { it: "byte/sec", en: "bytes/sec" },
        curiosity: {
          it: "Lo streaming video è la principale fonte di traffico.",
          en: "Video streaming is the main traffic source.",
        },
      },
    ],
  },

  // 🧊 PLANETARY CHANGES
  {
    sectionId: "planetary_loss",
    id: "planetary_loss",
    emoji: "🧊",
    title: { it: "Cambiamenti Planetari", en: "Planetary Changes" },
    subtitle: {
      it: "Perdite ambientali e contrasti globali",
      en: "Environmental losses and global contrasts",
    },
    info: {
      source: "IPCC / WWF / dati ambientali (stima)",
      url: "https://www.ipcc.ch/",
      note_it: "Valori medi giornalieri derivati da report climatici.",
      note_en: "Daily averages derived from climate reports.",
    },
    items: [
      {
        sectionId: "planetary_loss",
        id: "arctic_ice_lost",
        emoji: "🧊",
        title: { it: "Ghiaccio artico perso", en: "Arctic ice lost" },
        description: {
          it: "Ghiaccio artico perso oggi",
          en: "Arctic ice lost today",
        },
        ratePerSecond: 800,
        unit: { it: "ton/sec", en: "tons/sec" },
      },
      {
        sectionId: "planetary_loss",
        id: "forest_lost",
        emoji: "🔥",
        title: { it: "Foresta persa", en: "Forest lost" },
        description: {
          it: "Superficie forestale persa oggi",
          en: "Forest area lost today",
        },
        ratePerSecond: 0.4,
        unit: { it: "ettari/sec", en: "hectares/sec" },
      },
      {
        sectionId: "planetary_loss",
        id: "food_produced",
        emoji: "🌾",
        title: { it: "Cibo prodotto", en: "Food produced" },
        description: {
          it: "Cibo prodotto globalmente",
          en: "Food produced globally",
        },
        ratePerSecond: 80000,
        unit: { it: "kg/sec", en: "kg/sec" },
      },
      {
        sectionId: "planetary_loss",
        id: "food_wasted",
        emoji: "🗑",
        title: { it: "Cibo sprecato", en: "Food wasted" },
        description: {
          it: "Cibo sprecato globalmente",
          en: "Food wasted globally",
        },
        ratePerSecond: 30000,
        unit: { it: "kg/sec", en: "kg/sec" },
      },
      {
        sectionId: "planetary_loss",
        id: "sea_level_rise",
        emoji: "🌊",
        title: { it: "Livello del mare", en: "Sea level rise" },
        description: {
          it: "Aumento medio del livello del mare",
          en: "Average sea level rise",
        },
        ratePerSecond: 0.00001,
        unit: { it: "mm/sec", en: "mm/sec" },
        curiosity: {
          it: "L’aumento è lento ma cumulativo.",
          en: "The increase is slow but cumulative.",
        },
      },
      {
        sectionId: "planetary_loss",
        id: "species_extinction",
        emoji: "🦖",
        title: { it: "Specie estinte", en: "Species extinct" },
        description: {
          it: "Specie che scompaiono",
          en: "Species going extinct",
        },
        ratePerSecond: 0.02,
        unit: { it: "specie/sec", en: "species/sec" },
        curiosity: {
          it: "Il tasso è molto superiore a quello naturale.",
          en: "The rate is much higher than natural levels.",
        },
      },
      {
        sectionId: "planetary_loss",
        id: "co2_emitted",
        emoji: "🏭",
        title: { it: "CO₂ emessa", en: "CO₂ emitted" },
        description: {
          it: "Emissioni globali di CO₂",
          en: "Global CO₂ emissions",
        },
        ratePerSecond: 1200000,
        unit: { it: "kg/sec", en: "kg/sec" },
        curiosity: {
          it: "L’energia è la principale fonte di emissioni.",
          en: "Energy production is the main source.",
        },
      },
      {
        sectionId: "planetary_loss",
        id: "glaciers_melting",
        emoji: "❄️",
        title: { it: "Ghiacciai in fusione", en: "Glaciers melting" },
        description: {
          it: "Ghiaccio perso dai ghiacciai",
          en: "Ice lost from glaciers",
        },
        ratePerSecond: 500,
        unit: { it: "ton/sec", en: "tons/sec" },
        curiosity: {
          it: "Molti ghiacciai potrebbero scomparire.",
          en: "Many glaciers may disappear.",
        },
      },
      {
        sectionId: "planetary_loss",
        id: "heatwaves",
        emoji: "☀️",
        title: { it: "Ondate di calore", en: "Heatwaves" },
        description: {
          it: "Eventi di caldo estremo",
          en: "Extreme heat events",
        },
        ratePerSecond: 0.001,
        unit: { it: "eventi/sec", en: "events/sec" },
        curiosity: {
          it: "Sono sempre più frequenti e intense.",
          en: "They are becoming more frequent and intense.",
        },
      },
    ],
  },

  // 🚦 TRANSPORT & MOBILITY
  {
    id: "transport_mobility",
    emoji: "🚦",
    title: { it: "Trasporti & Mobilità", en: "Transport & Mobility" },
    subtitle: {
      it: "Spostamenti ed emissioni globali",
      en: "Global movement and emissions",
    },
    info: {
      source: "IEA / trasporti globali (stima)",
      url: "https://www.iea.org/",
      note_it:
        "Stime basate su consumi energetici medi per modalità di trasporto.",
      note_en:
        "Estimates based on average energy consumption per transport mode.",
    },
    items: [
      {
        sectionId: "transport_mobility",
        id: "car_km",
        emoji: "🚗",
        title: { it: "Km in auto", en: "Car kilometers" },
        description: {
          it: "Chilometri percorsi in auto",
          en: "Kilometers traveled by car",
        },
        ratePerSecond: 20000000,
        unit: { it: "km/sec", en: "km/sec" },
      },
      {
        sectionId: "transport_mobility",
        id: "bike_km",
        emoji: "🚲",
        title: { it: "Km in bici", en: "Bike kilometers" },
        description: {
          it: "Chilometri percorsi in bicicletta",
          en: "Kilometers traveled by bicycle",
        },
        ratePerSecond: 3000000,
        unit: { it: "km/sec", en: "km/sec" },
      },
      {
        sectionId: "transport_mobility",
        id: "walking_km",
        emoji: "🚶",
        title: { it: "Km a piedi", en: "Walking kilometers" },
        description: {
          it: "Chilometri percorsi a piedi",
          en: "Kilometers walked",
        },
        ratePerSecond: 5000000,
        unit: { it: "km/sec", en: "km/sec" },
      },
      {
        sectionId: "transport_mobility",
        id: "public_transport_co2",
        emoji: "🚌",
        title: { it: "CO₂ trasporto pubblico", en: "Public transport CO₂" },
        description: {
          it: "Emissioni di CO₂ da trasporto pubblico",
          en: "CO₂ emissions from public transport",
        },
        ratePerSecond: 8000,
        unit: { it: "kg/sec", en: "kg/sec" },
      },
      {
        sectionId: "transport_mobility",
        id: "trains_running",
        emoji: "🚆",
        title: { it: "Treni in movimento", en: "Trains running" },
        description: {
          it: "Treni in viaggio nel mondo",
          en: "Trains traveling worldwide",
        },
        ratePerSecond: 120,
        unit: { it: "treni/sec", en: "trains/sec" },
        curiosity: {
          it: "Il treno è uno dei mezzi più efficienti.",
          en: "Trains are among the most efficient transports.",
        },
      },
      {
        sectionId: "transport_mobility",
        id: "planes_flying",
        emoji: "✈️",
        title: { it: "Aerei in volo", en: "Planes flying" },
        description: {
          it: "Aerei attualmente in volo",
          en: "Planes currently flying",
        },
        ratePerSecond: 20,
        unit: { it: "aerei/sec", en: "planes/sec" },
        curiosity: {
          it: "In ogni momento ci sono migliaia di voli attivi.",
          en: "Thousands of flights are active at any time.",
        },
      },
      {
        sectionId: "transport_mobility",
        id: "ships_sailing",
        emoji: "🚢",
        title: { it: "Navi in navigazione", en: "Ships sailing" },
        description: {
          it: "Navi e barche in movimento",
          en: "Ships and boats in motion",
        },
        ratePerSecond: 5,
        unit: { it: "navi/sec", en: "ships/sec" },
        curiosity: {
          it: "La maggior parte delle merci viaggia via mare.",
          en: "Most goods travel by sea.",
        },
      },
    ],
  },
];
