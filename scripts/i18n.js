
// i18n dictionary and helpers
window.__messages = {
  "en": {
    "brand.name": "Andrea Muñoz",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.resume": "Resume",
    "footer.rights": "© 2025 Andrea Muñoz — Portfolio.",
    "home.metaTitle": "Portfolio — Bilingual Communications & Public Service",
    "home.title": "Portfolio",
    "home.subtitle": "Bilingual Communications & Public Service",
    "home.workTitle": "Work",
    "home.workDesc": "Press, policy, social & writing samples",
    "home.aboutTitle": "About",
    "home.aboutDesc": "Background, strengths, tools",
    "home.contactTitle": "Contact",
    "home.contactDesc": "Email, LinkedIn, message form",
    "home.resumeTitle": "Resume",
    "home.resumeDesc": "View / download PDF",
    "work.metaTitle": "Work — Samples & Case Notes",
    "work.title": "Selected Work",
    "work.subtitle": "Press notes, policy threads, speeches, and more.",
    "filters.all": "All",
    "work.details": "Details",
    "project.context": "Context & Goal",
    "project.challenges": "Challenges",
    "project.strategy": "Strategy & Execution",
    "project.outcomes": "Outcomes",
    "project.media": "Related Media Hits",
    "about.metaTitle": "About — Who I am & strengths",
    "about.title": "About me",
    "about.subtitle": "Bilingual comms, public service focus, measurable impact.",
    "about.bio1": "I craft clear, accurate, and accessible messages for public audiences in English and Spanish.",
    "about.bio2": "Strengths include crisis comms, policy storytelling, earned media, and content ops.",
    "about.point1": "Bilingual (EN/ES) press notes & briefs",
    "about.point2": "Crisis comms basics & rapid research",
    "about.point3": "Policy comms & media coordination",
    "about.point4": "Analytics mindset & accessibility",
    "about.kpi1": "Bilingual outputs",
    "about.kpi2": "Inclusive by default",
    "about.kpi3": "Templates & kits",
    "contact.metaTitle": "Contact — Get in touch",
    "contact.title": "Contact",
    "contact.subtitle": "Email, LinkedIn, or message form.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Send",
    "contact.shortcuts": "Or email andrea@example.com or find me on LinkedIn.",
    "resume.metaTitle": "Resume — PDF",
    "resume.title": "Resume",
    "resume.subtitle": "View or download the PDF.",
    "resume.download": "Download Resume (PDF)"
  },
  "es": {
    "brand.name": "Andrea Muñoz",
    "nav.work": "Trabajo",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.resume": "CV",
    "footer.rights": "© 2025 Andrea Muñoz — Portafolio.",
    "home.metaTitle": "Portafolio — Comunicación Bilingüe & Servicio Público",
    "home.title": "Portafolio",
    "home.subtitle": "Comunicación Bilingüe & Servicio Público",
    "home.workTitle": "Trabajo",
    "home.workDesc": "Prensa, policy, social y redacción",
    "home.aboutTitle": "Sobre mí",
    "home.aboutDesc": "Perfil, fortalezas y herramientas",
    "home.contactTitle": "Contacto",
    "home.contactDesc": "Email, LinkedIn y formulario",
    "home.resumeTitle": "CV",
    "home.resumeDesc": "Ver / descargar PDF",
    "work.metaTitle": "Trabajo — Muestras y casos",
    "work.title": "Trabajo seleccionado",
    "work.subtitle": "Notas de prensa, hilos de policy, discursos y más.",
    "filters.all": "Todo",
    "work.details": "Detalles",
    "project.context": "Contexto y objetivo",
    "project.challenges": "Retos",
    "project.strategy": "Estrategia y ejecución",
    "project.outcomes": "Resultados",
    "project.media": "Cobertura relacionada",
    "about.metaTitle": "Sobre mí — Quién soy y fortalezas",
    "about.title": "Sobre mí",
    "about.subtitle": "Comms bilingüe, foco público, impacto medible.",
    "about.bio1": "Creo mensajes claros, precisos y accesibles para audiencias públicas en inglés y español.",
    "about.bio2": "Fortalezas: crisis comms, policy storytelling, earned media y operaciones de contenido.",
    "about.point1": "Notas y briefs (ES/EN)",
    "about.point2": "Crisis comms básico e investigación rápida",
    "about.point3": "Policy comms y coordinación con medios",
    "about.point4": "Mentalidad analítica y accesibilidad",
    "about.kpi1": "Entregables bilingües",
    "about.kpi2": "Inclusivo por defecto",
    "about.kpi3": "Plantillas y kits",
    "contact.metaTitle": "Contacto — Escríbeme",
    "contact.title": "Contacto",
    "contact.subtitle": "Email, LinkedIn o formulario.",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.message": "Mensaje",
    "contact.submit": "Enviar",
    "contact.shortcuts": "O escribe a andrea@example.com o encuéntrame en LinkedIn.",
    "resume.metaTitle": "CV — PDF",
    "resume.title": "CV",
    "resume.subtitle": "Ver o descargar el PDF.",
    "resume.download": "Descargar CV (PDF)"
  }
};

(function(){
  function setLanguage(lang) {
    const dict = window.__messages[lang] || window.__messages['en'];
    // toggle html lang
    document.documentElement.setAttribute('lang', lang);
    // persist
    try { localStorage.setItem('lang', lang); } catch(e){}
    // update texts
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const key = node.getAttribute('data-i18n');
      const val = dict[key];
      if (!val) return;
      if ('placeholder' in node) node.placeholder = val;
      if (node.tagName === 'TITLE' || node.tagName === 'META') {
        if (node.tagName === 'TITLE') node.textContent = val;
      } else {
        node.textContent = val;
      }
    });
    // nav state
    const enBtn = document.getElementById('lang-en');
    const esBtn = document.getElementById('lang-es');
    if (enBtn && esBtn) {
      enBtn.classList.toggle('active', lang==='en');
      esBtn.classList.toggle('active', lang==='es');
      enBtn.setAttribute('aria-pressed', lang==='en');
      esBtn.setAttribute('aria-pressed', lang==='es');
    }
  }
  window.setLanguage = setLanguage;
})();
