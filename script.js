// ---------- Año automático en el footer ---------- //
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Menú móvil ---------- //
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Cerrar el menú móvil al hacer clic en un enlace
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});


// ---------- Detectar scroll para achicar el header y el logo ---------- //
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    // Si bajamos más de 50px, agregamos la clase
    header.classList.add('scrolled');
  } else {
    // Si volvemos arriba, la quitamos
    header.classList.remove('scrolled');
  }
});


// ---------- Galería Dinámica de Proyectos ---------- //

// 1. Declaras tus datos (estado)
const proyectosData = [
  {
    id: 1,
    imagen: "assets/cargador-ev-domiciliario.jpg",
    titulo: "Tablero eléctrico industrial"
  },
  {
    id: 2,
    imagen: "assets/instalacion-residencial.jpg",
    titulo: "Tablero eléctrico y cargador EV residencial"
  },
  {
    id: 3,
    imagen: "assets/carga-flota-comercial.jpg",
    titulo: "Cargador EV comercial"
  }
];

// 2. Seleccionas el contenedor vacío
const galleryContainer = document.getElementById('gallery-container');

// 3. Haces el map y lo inyectas (con validación de seguridad)
if (galleryContainer) {
  galleryContainer.innerHTML = proyectosData.map(proyecto => `
    <figure class="project-item" onclick="openModal('${proyecto.imagen}', '${proyecto.titulo}')">
      <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="project-img" loading="lazy">
      <figcaption>${proyecto.titulo}</figcaption>
    </figure>
  `).join('');
}


// ---------- Lógica del Modal ---------- //
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("modalCaption");

// Función para abrir la imagen
function openModal(imgSrc, imgTitle) {
  if (modal) {
    modal.classList.add('show');
    modalImg.src = imgSrc;
    captionText.innerHTML = imgTitle;
  }
}

// Función para cerrar la imagen
function closeModal() {
  if (modal) {
    modal.classList.remove('show');
  }
}

// Accesibilidad: Cerrar modal presionando la tecla "Escape"
document.addEventListener('keydown', (e) => {
  if(e.key === "Escape") {
    closeModal();
  }
});
