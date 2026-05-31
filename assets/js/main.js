// main.js — homepage logic

const TAG_CLASSES = {
  BCE: 'tag-bce', Fed: 'tag-fed', PMI: 'tag-pmi',
  Inflation: 'tag-inflation', Taux: 'tag-taux', Emploi: 'tag-emploi'
};

const CONVICTION_DOT = {
  'Élevée':  'dot-high',
  'Modérée': 'dot-med',
  'Faible':  'dot-low',
};

function renderTagHTML(tags) {
  return tags.map(t =>
    `<span class="tag ${TAG_CLASSES[t] || 'tag-default'}">${t}</span>`
  ).join('');
}

function renderNoteRow(note, isFirst) {
  const dateParts = note.date.split(' ');
  const dateHTML = dateParts.length >= 3
    ? `${dateParts[0]} ${dateParts[1]}<br>${dateParts[2]}`
    : note.date;

  const latestBadge = isFirst ? '<span class="note-latest">Dernière</span>' : '';
  const dotClass = CONVICTION_DOT[note.conviction] || 'dot-med';

  return `
    <a class="note-row" href="note.html?id=${note.id}">
      <div class="note-meta-col">
        <div class="note-week">${note.week}</div>
        <div class="note-datestr">${dateHTML}</div>
      </div>
      <div class="note-body">
        <div class="note-row-title">${note.title}${latestBadge}</div>
        <div class="note-excerpt">${note.excerpt}</div>
        <div class="note-footer">
          <div class="tags">${renderTagHTML(note.tags)}</div>
          <div class="conviction">
            <span class="conviction-dot ${dotClass}"></span>
            Conviction ${note.conviction.toLowerCase()}
          </div>
        </div>
      </div>
      <div class="note-arrow">→</div>
    </a>
  `;
}

function renderNotes(filter = 'all') {
  const list = document.getElementById('notes-list');
  const filtered = filter === 'all'
    ? NOTES
    : NOTES.filter(n => n.tags.includes(filter));

  if (filtered.length === 0) {
    list.innerHTML = '<div class="loading">Aucune note pour ce filtre.</div>';
    return;
  }
  list.innerHTML = filtered.map((n, i) => renderNoteRow(n, i === 0 && filter === 'all')).join('');
}

function initStats() {
  document.getElementById('note-count').textContent = NOTES.length;
  if (NOTES.length > 0) {
    document.getElementById('latest-week').textContent = NOTES[0].week;
  }
}

function initFilters() {
  document.querySelectorAll('.pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderNotes(btn.dataset.filter);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initStats();
  renderNotes();
  initFilters();
});
