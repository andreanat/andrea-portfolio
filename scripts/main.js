(function(){
  const stored = (function(){ try { return localStorage.getItem('lang'); } catch(e){ return null; }})();
  const initial = stored || 'en';   // EN por defecto
  setLanguage(initial);

  const enBtn = document.getElementById('lang-en');
  const esBtn = document.getElementById('lang-es');
  enBtn && enBtn.addEventListener('click', ()=> setLanguage('en'));
  esBtn && esBtn.addEventListener('click', ()=> setLanguage('es'));
})();
