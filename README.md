# Research Notes — Guide de déploiement & workflow hebdomadaire

## Structure du projet

```
macro-site/
├── index.html              ← Page d'accueil (liste des notes)
├── note.html               ← Template page note individuelle
├── about.html              ← Page à propos
├── assets/
│   ├── css/style.css       ← Tous les styles (ne pas modifier)
│   └── js/
│       ├── notes-registry.js   ← ⭐ FICHIER À MODIFIER CHAQUE SEMAINE
│       ├── main.js             ← Logique homepage (ne pas modifier)
│       └── note.js             ← Logique page note (ne pas modifier)
├── notes/
│   ├── 2026-W22.md         ← Contenu texte de chaque note (Markdown)
│   └── ...
└── files/
    ├── MacroNote_W22_2026.docx  ← Fichiers Word téléchargeables
    ├── MacroNote_W22_2026.pptx  ← Fichiers PPT téléchargeables
    └── ...
```

---

## Déploiement initial sur GitHub Pages (une seule fois, ~15 min)

### Étape 1 — Créer le dépôt GitHub

1. Va sur **github.com** → "New repository"
2. Nom du dépôt : `macro-notes` (ou `research-notes`)
3. Visibilité : **Public** (nécessaire pour GitHub Pages gratuit)
4. Clique "Create repository"

### Étape 2 — Uploader les fichiers

Dans ton terminal (ou Git Bash sur Windows) :

```bash
# Navigue vers le dossier du site
cd chemin/vers/macro-site

# Initialise Git
git init
git add .
git commit -m "Initial commit — Research Notes site"

# Connecte au dépôt GitHub (remplace TON-USERNAME)
git remote add origin https://github.com/TON-USERNAME/macro-notes.git
git branch -M main
git push -u origin main
```

### Étape 3 — Activer GitHub Pages

1. Sur GitHub, va dans **Settings** → **Pages**
2. Source : "Deploy from a branch"
3. Branch : **main** / **(root)**
4. Clique **Save**

⏳ Attends 1-2 minutes, puis ton site est accessible à :
**`https://TON-USERNAME.github.io/macro-notes`**

👉 C'est cette URL que tu mets sur ton CV.

---

## Workflow hebdomadaire (chaque vendredi, ~5 min)

### Ce que tu fais chaque semaine

**1. Rédige ta note Markdown**

Crée un fichier `notes/2026-W23.md` en copiant le template :

```markdown
> **Édition N°13 — Semaine 23 · 6 juin 2026**

## Abstract
[Ton résumé en 4-5 lignes]

## Key Takeaways
- Point 1
- Point 2
- Point 3
- Point 4

---

## Analyse

### 1. [Thème principal]
[Ton analyse]

### 2. [Implications marché]
[Ton analyse]

---

## Conclusion & Agenda
[Conclusion]

| Date | Événement | Importance |
|------|-----------|-----------|
| XX   | FOMC      | ★★★★★    |
```

**2. Ajoute ton Word et PPT dans `/files/`**

Renomme-les en : `MacroNote_W23_2026.docx` et `MacroNote_W23_2026.pptx`

**3. Mets à jour le registry**

Ouvre `assets/js/notes-registry.js` et ajoute en **haut** du tableau `NOTES` :

```javascript
{
  id:         "2026-W23",
  week:       "W23",
  date:       "6 juin 2026",
  title:      "Ton titre ici",
  subtitle:   "Ton sous-titre analytique",
  excerpt:    "Résumé de 2 lignes pour la homepage.",
  tags:       ["Fed", "Emploi"],       // parmi : BCE, Fed, PMI, Inflation, Taux, Emploi
  conviction: "Élevée",               // "Élevée", "Modérée", ou "Faible"
  edition:    "N°13 — Semaine 23",
  kpis: [
    { label: "NFP US",     value: "+243k" },
    { label: "Fed Funds",  value: "4,50%" },
    { label: "T-Note 10Y", value: "4,42%" },
  ],
  watchlist: [
    "CPI US — 11 juin",
    "FOMC — 18 juin",
  ],
  files: {
    word: "files/MacroNote_W23_2026.docx",
    ppt:  "files/MacroNote_W23_2026.pptx",
  },
  noteFile: "notes/2026-W23.md",
},
```

**4. Publie en 3 commandes**

```bash
git add .
git commit -m "W23 — NFP US et perspectives Fed"
git push
```

✅ Le site se met à jour automatiquement en ~60 secondes.

---

## Mettre à jour la sidebar (taux, inflation, agenda)

La sidebar de la homepage (taux directeurs, inflation, agenda) est dans `index.html`.
Cherche le bloc `<!-- SIDEBAR -->` et mets à jour les valeurs manuellement
chaque mois ou après une réunion de banque centrale.

---

## Résumé visuel du workflow

```
Vendredi soir (45 min total)
│
├── 30 min  Rédaction de la note (analyse macro)
│
├── 5 min   Créer notes/2026-WXX.md (copier-coller le template)
│
├── 2 min   Copier Word + PPT dans /files/
│
├── 2 min   Ajouter l'entrée dans notes-registry.js
│
└── 1 min   git add . && git commit -m "WXX" && git push
            → Site mis à jour automatiquement ✅
```

---

## Astuce entretien

Sur ton CV, tu peux écrire :

> **Macro Research Portfolio** — [github.com/TON-USERNAME/macro-notes](https://github.com)  
> Veille hebdomadaire publiée chaque vendredi : BCE, Fed, PMI, CPI.  
> Notes en format research sell-side avec analyse marché et implications taux.

En entretien, tu ouvres le site, tu navigues vers la dernière note,  
tu montres le Word et le PPT téléchargeables — impact immédiat.
