/**
 * NOTES REGISTRY — notes-registry.js
 * ─────────────────────────────────────────────────────────────
 * C'est LE SEUL fichier que tu modifies chaque semaine.
 * Ajoute une entrée en haut du tableau NOTES pour publier une note.
 *
 * CHAMPS :
 *   id        — identifiant unique, format YYYY-WNN  (ex: "2026-W22")
 *   week      — numéro de semaine affiché            (ex: "W22")
 *   date      — date de publication                  (ex: "30 mai 2026")
 *   title     — titre principal de la note
 *   subtitle  — sous-titre / angle analytique
 *   excerpt   — résumé de 2 lignes (affiché sur la homepage)
 *   tags      — tableau de tags parmi : BCE, Fed, PMI, Inflation, Taux, Emploi
 *   conviction — "Élevée", "Modérée", ou "Faible"
 *   edition   — numéro d'édition                    (ex: "N°12 — Semaine 22")
 *   kpis      — 3 données clés affichées dans la sidebar de la note
 *   watchlist — points à surveiller la semaine suivante
 *   files     — chemins vers Word et PPT (dans /files/) — laisser vide si pas encore uploadés
 *   noteFile  — chemin vers le fichier Markdown de la note (dans /notes/)
 */

const NOTES = [

  {
    id:         "2026-W22",
    week:       "W22",
    date:       "30 mai 2026",
    title:      "Désinflation confirmée en zone euro",
    subtitle:   "Fenêtre ouverte pour la BCE en juillet — implications pour les marchés de taux",
    excerpt:    "CPI zone euro à 2,2% vs 2,3% attendu. La BCE dispose d'une fenêtre crédible pour une troisième baisse en juillet. Les swaps OIS à 6 mois repricent de -12 pb sur la semaine.",
    tags:       ["BCE", "Inflation", "Taux"],
    conviction: "Élevée",
    edition:    "N°12 — Semaine 22",
    kpis: [
      { label: "CPI ZE",    value: "2,2%" },
      { label: "BCE dépôt", value: "2,50%" },
      { label: "Bund 10Y",  value: "2,40%" },
    ],
    watchlist: [
      "CPI US — 11 juin",
      "FOMC — 18 juin",
      "PMI flash ZE — 23 juin",
    ],
    files: {
      word: "files/MacroNote_W22_2026.docx",
      ppt:  "files/MacroNote_W22_2026.pptx",
    },
    noteFile: "notes/2026-W22.md",
  },

  {
    id:         "2026-W21",
    week:       "W21",
    date:       "23 mai 2026",
    title:      "Fed on hold — Powell maintient le cap",
    subtitle:   "Malgré la pression politique, la Fed reste data-dependent. PMI composite US à 52,3.",
    excerpt:    "Minutes FOMC sans surprise. La résilience du cycle américain (PMI 52,3) conforte la Fed dans son attentisme. Le scénario \"higher for longer\" se renforce côté US.",
    tags:       ["Fed", "PMI"],
    conviction: "Élevée",
    edition:    "N°11 — Semaine 21",
    kpis: [
      { label: "Fed Funds", value: "4,50%" },
      { label: "PMI US",    value: "52,3" },
      { label: "T-Note 10Y",value: "4,42%" },
    ],
    watchlist: [
      "CPI zone euro flash — 30 mai",
      "PCE US — 31 mai",
      "Emploi US (NFP) — 6 juin",
    ],
    files: {
      word: "files/MacroNote_W21_2026.docx",
      ppt:  "files/MacroNote_W21_2026.pptx",
    },
    noteFile: "notes/2026-W21.md",
  },

  {
    id:         "2026-W20",
    week:       "W20",
    date:       "16 mai 2026",
    title:      "PMI manufacturier zone euro — contraction persistante",
    subtitle:   "Divergence Nord/Sud qui complique la politique monétaire unique de la BCE.",
    excerpt:    "PMI manufacturier France à 44,8, Allemagne à 46,2. L'Espagne et l'Italie résistent mieux. Divergence structurelle entre économies de la zone euro.",
    tags:       ["PMI", "BCE"],
    conviction: "Modérée",
    edition:    "N°10 — Semaine 20",
    kpis: [
      { label: "PMI FR",  value: "44,8" },
      { label: "PMI DE",  value: "46,2" },
      { label: "BCE",     value: "2,50%" },
    ],
    watchlist: [
      "Minutes FOMC — 21 mai",
      "CPI UK — 22 mai",
      "PMI composite ZE — 23 mai",
    ],
    files: {
      word: "files/MacroNote_W20_2026.docx",
      ppt:  "files/MacroNote_W20_2026.pptx",
    },
    noteFile: "notes/2026-W20.md",
  },

];
