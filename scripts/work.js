const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.project');
const search = document.getElementById('searchInput');

function applyFilter() {
  const active = document.querySelector('.chip.active')?.dataset.filter || 'all';
  const term = (search?.value || '').toLowerCase();

  cards.forEach(card => {
    const tags = (card.dataset.tags || '').toLowerCase();
    const text = card.innerText.toLowerCase();
    const byTag = (active === 'all') || tags.split(/\s+/).includes(active);
    const bySearch = !term || text.includes(term);
    card.style.display = (byTag && bySearch) ? '' : 'none';
  });
}

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(x => { x.classList.remove('active'); x.setAttribute('aria-pressed', 'false'); });
    chip.classList.add('active'); chip.setAttribute('aria-pressed', 'true');
    applyFilter();
  });
});

if (search) search.addEventListener('input', applyFilter);


/* =========================
   Modals (open/close + scroll)
   ========================= */
const openBtns  = document.querySelectorAll('[data-open]');
const closeBtns = document.querySelectorAll('[data-close]');
const backdrop  = document.getElementById('modal-backdrop');

function getFocusable(el) {
  return el.querySelectorAll('a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])');
}

function openModal(target) {
  // Cerrar otros por si acaso
  document.querySelectorAll('.modal.show').forEach(m => m.classList.remove('show'));

  target.classList.add('show');
  backdrop?.classList.add('show');
  document.body.classList.add('modal-open');

  // Accesibilidad / foco
  const focusables = getFocusable(target);
  (focusables[0] || target).focus();

  // Trap de foco sencillo
  function trap(e) {
    if (e.key !== 'Tab') return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  target.__trapHandler = trap;
  target.addEventListener('keydown', trap);
}

function closeAll() {
  document.querySelectorAll('.modal.show').forEach(m => {
    m.classList.remove('show');
    if (m.__trapHandler) m.removeEventListener('keydown', m.__trapHandler);
  });
  backdrop?.classList.remove('show');
  document.body.classList.remove('modal-open');
}

openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const sel = btn.getAttribute('data-open');
    const modal = document.querySelector(sel);
    if (modal) openModal(modal);
  });
});

closeBtns.forEach(btn => btn.addEventListener('click', closeAll));
if (backdrop) backdrop.addEventListener('click', closeAll);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });

/* Optional: close on click outside modal content (but inside modal) */
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    // si se hace click en el borde vacío del modal (no en .content ni en header) cerramos
    const isInsideContent = e.target.closest('.content') || e.target.closest('.head');
    if (!isInsideContent) closeAll();
  });
});
