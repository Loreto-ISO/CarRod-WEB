// Año automático en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// Reseñas: arreglo simple por ahora.
// Cuando tengas backend, esto se reemplaza por un fetch() a tu API
// (por ejemplo: fetch('/api/resenas').then(r => r.json()).then(pintarResenas))
// que traiga las reseñas guardadas en la base de datos.
const resenas = [
  {
    texto: 'Instalaron el cargador en un día y quedó todo certificado, sin problemas.',
    nombre: 'Cliente residencial, La Florida'
  },
  {
    texto: 'Coordinamos la instalación en el condominio y fueron súper claros con los plazos.',
    nombre: 'Administración de condominio'
  },
  {
    texto: 'Resolvieron un problema eléctrico que otro contratista no pudo dejar bien.',
    nombre: 'Cliente residencial, Puente Alto'
  }
];

function pintarResenas(lista){
  const track = document.getElementById('reviewsTrack');
  track.innerHTML = lista.map(r => `
    <article class="review-card">
      <p>"${r.texto}"</p>
      <p class="review-name">${r.nombre}</p>
    </article>
  `).join('');
}

pintarResenas(resenas);
