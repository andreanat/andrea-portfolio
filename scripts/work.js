// Filters
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.project');
const search = document.getElementById('searchInput');

function applyFilter() {
  const active = document.querySelector('.chip.active')?.dataset.filter || 'all';
  const term = (search?.value || '').toLowerCase();
  cards.forEach(c => {
    const tags = c.dataset.tags || '';
    const text = c.innerText.toLowerCase();
    const byTag = (active === 'all') || tags.includes(active);
    const bySearch = !term || text.includes(term);
    c.style.display = (byTag && bySearch) ? '' : 'none';
  });
}
chips.forEach(ch => ch.addEventListener('click', () => {
  chips.forEach(x => x.classList.remove('active'));
  ch.classList.add('active');
  applyFilter();
}));
search && search.addEventListener('input', applyFilter);

// Modals
const openBtns = document.querySelectorAll('[data-open]');
const closeBtns = document.querySelectorAll('[data-close]');
const backdrop = document.getElementById('modal-backdrop');

openBtns.forEach(b => b.addEventListener('click', () => {
  const target = document.querySelector(b.getAttribute('data-open'));
  target?.classList.add('show');
  backdrop?.classList.add('show');
  target?.querySelector('.close')?.focus();
}));
function closeAll(){
  document.querySelectorAll('.modal.show').forEach(m => m.classList.remove('show'));
  backdrop?.classList.remove('show');
}
closeBtns.forEach(b => b.addEventListener('click', closeAll));
backdrop?.addEventListener('click', closeAll);
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeAll(); });