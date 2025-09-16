
(function(){
  const form = document.getElementById('contactForm');
  const status = document.getElementById('status');
  if(!form) return;
  form.addEventListener('submit', function(e){
    status.textContent = 'Sending…';
  });
})();
