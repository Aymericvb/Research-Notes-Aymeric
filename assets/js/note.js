// note.js — individual note page logic

const TAG_CLASSES = {
  BCE: 'tag-bce', Fed: 'tag-fed', PMI: 'tag-pmi',
  Inflation: 'tag-inflation', Taux: 'tag-taux', Emploi: 'tag-emploi'
};
const CONVICTION_DOT = {
  'Élevée':  'dot-high',
  'Modérée': 'dot-med',
  'Faible':  'dot-low',
};

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function renderDownloadBar(files) {
  const bar = document.getElementById('download-bar');
  if (!files || (!files.word && !files.ppt)) { bar.style.display = 'none'; return; }
  let html = '<span style="font-size:12px;color:var(--gray);align-self:center;margin-right:4px;">Télécharger :</span>';
  if (files.word) html += `<a class="download-btn" href="../${files.word}" download><span class="icon">⬇</span> Note Word</a>`;
  if (files.ppt)  html += `<a class="download-btn" href="../${files.ppt}"  download><span class="icon">⬇</span> Présentation PPT</a>`;
  bar.innerHTML = html;
}

function renderSidebar(note) {
  // KPIs
  if (note.kpis && note.kpis.length >= 3) {
    document.getElementById('kpi-cpi').textContent  = note.kpis[0].value;
    document.getElementById('kpi-bce').textContent  = note.kpis[1].value;
    document.getElementById('kpi-bund').textContent = note.kpis[2].value;
    // update labels
    const rows = document.querySelectorAll('.note-sidebar .sb-row span:first-child');
    if (rows.length >= 3) {
      rows[0].textContent = note.kpis[0].label;
      rows[1].textContent = note.kpis[1].label;
      rows[2].textContent = note.kpis[2].label;
    }
  }

  // Conviction
  const dotClass = CONVICTION_DOT[note.conviction] || 'dot-med';
  document.getElementById('sidebar-conviction').innerHTML =
    `<span class="conviction-dot ${dotClass}" style="width:8px;height:8px;border-radius:50%;display:inline-block;"></span>
     <span style="font-size:13px;color:var(--text);margin-left:6px;">${note.conviction}</span>`;

  // Watchlist
  const wl = document.getElementById('watchlist');
  if (note.watchlist && note.watchlist.length) {
    wl.innerHTML = note.watchlist.map(w =>
      `<div class="sb-event"><span class="sb-event-name">${w}</span></div>`
    ).join('');
  }
}

async function loadNote(note) {
  // Header
  document.title = `${note.title} — Research Notes`;
  document.getElementById('note-week').textContent    = note.week;
  document.getElementById('note-date').textContent    = note.date;
  document.getElementById('note-edition').textContent = note.edition;
  document.getElementById('note-title').textContent   = note.title;
  document.getElementById('note-subtitle').textContent= note.subtitle;

  // Tags
  const tagsEl = document.getElementById('note-tags');
  tagsEl.innerHTML = note.tags.map(t =>
    `<span class="tag ${TAG_CLASSES[t] || 'tag-default'}">${t}</span>`
  ).join('');

  // Conviction
  const dotClass = CONVICTION_DOT[note.conviction] || 'dot-med';
  document.getElementById('note-conviction').innerHTML =
    `<span class="conviction-dot ${dotClass}" style="width:7px;height:7px;border-radius:50%;display:inline-block;"></span>
     <span style="font-size:11px;color:var(--gray);margin-left:5px;">Conviction ${note.conviction.toLowerCase()}</span>`;

  renderDownloadBar(note.files);
  renderSidebar(note);

  // Load markdown content
  const contentEl = document.getElementById('note-content');
  try {
    const resp = await fetch(`../${note.noteFile}`);
    if (!resp.ok) throw new Error('not found');
    const md = await resp.text();
    contentEl.innerHTML = marked.parse(md);
  } catch {
    contentEl.innerHTML = `
      <h2>Abstract</h2>
      <p>${note.excerpt}</p>
      <hr>
      <p style="color:var(--gray);font-size:14px;font-style:italic;">
        Le contenu complet de cette note sera disponible après upload du fichier 
        <code>${note.noteFile}</code> dans le dépôt.
      </p>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const id = getParam('id');
  if (!id) { window.location.href = '../index.html'; return; }

  const note = NOTES.find(n => n.id === id);
  if (!note) {
    document.getElementById('note-content').innerHTML =
      '<p style="color:var(--gray)">Note introuvable.</p>';
    return;
  }
  loadNote(note);
});
