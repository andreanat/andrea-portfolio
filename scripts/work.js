
// filters, search, and modal behavior
(function(){
  const chips = document.querySelectorAll('.chip');
  const cards = [...document.querySelectorAll('.card')];
  const search = document.getElementById('search');

  function apply(){
    const active = document.querySelector('.chip.active')?.dataset.filter || 'all';
    const q = (search?.value || '').toLowerCase().trim();
    cards.forEach(card => {
      const tags = (card.dataset.tags || '').toLowerCase();
      const text = card.textContent.toLowerCase();
      const tagMatch = active==='all' ? true : tags.includes(active);
      const qMatch = q ? text.includes(q) : true;
      card.style.display = (tagMatch && qMatch) ? '' : 'none';
    });
  }

  chips.forEach(ch => ch.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    ch.classList.add('active');
    chips.forEach(c => c.setAttribute('aria-selected', c===ch ? 'true':'false'));
    apply();
  }));
  search && search.addEventListener('input', apply);

  // Modal
  const backdrop = document.getElementById('backdrop');
  function openModal(id){
    const dlg = document.getElementById('modal-'+id);
    if(!dlg) return;
    dlg.classList.add('show');
    backdrop.classList.add('show');
  }
  function closeAll(){
    document.querySelectorAll('.modal').forEach(m=>m.classList.remove('show'));
    backdrop.classList.remove('show');
  }
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.modal));
  });
  document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', closeAll));
  backdrop && backdrop.addEventListener('click', closeAll);
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeAll(); });
})();
