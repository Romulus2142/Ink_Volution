/* ============================================
   ANIMACIONES GSAP
   ============================================ */

// Animaciones de entrada inicial: se mueven al cargar y quedan estáticos
document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const targets = ['.logo-container', '#flow-text', '.subtitle-text', '.explore-btn', '.bottom-text'];

    if (prefersReduced) {
        gsap.set(targets, { clearProps: 'all', opacity: 1, y: 0 });
        return;
    }

    gsap.set(targets, { opacity: 0, y: 20 });

    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: 'power3.out' } });
        tl.to('.logo-container', { opacity: 1, y: 0 })
            .to('#flow-text', { opacity: 1, y: 0 }, '-=0.4')
      .to('.subtitle-text', { opacity: 1, y: 0 }, '-=0.35')
      .to('.explore-btn', { opacity: 1, y: 0 }, '-=0.3')
      .to('.bottom-text', { opacity: 1, y: 0 }, '-=0.35');
});

/* ============================================
   MODAL GALERÍA
   ============================================ */

const galleryModal = document.getElementById('galleryModal');
const openGalleryBtn = document.getElementById('openGalleryBtn');
const closeGalleryBtn = document.getElementById('closeGalleryBtn');

// Variables del carrusel
let currentSlide = 0;
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.gallery-item');
const totalSlides = items.length;
const dotsContainer = document.querySelector('.carousel-dots');

// Crear puntos indicadores
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.carousel-dot');

// Función para ir a un slide específico
function goToSlide(index) {
    currentSlide = index;
    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    // Actualizar dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// Navegación con botones
document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
});

document.querySelector('.carousel-next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (galleryModal.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(currentSlide);
        } else if (e.key === 'ArrowRight') {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        }
    }
});

// Abrir modal
openGalleryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    galleryModal.style.display = 'flex';
    currentSlide = 0;
    goToSlide(0);
    
    // Animación de apertura con GSAP
    gsap.fromTo(galleryModal, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    
    gsap.fromTo('.gallery-modal-content', 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.2)", delay: 0.1 }
    );
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
});

// Cerrar modal
const closeModal = () => {
    gsap.to(galleryModal, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
};

closeGalleryBtn.addEventListener('click', closeModal);

// Cerrar al hacer clic fuera del contenido
galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
        closeModal();
    }
});

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && galleryModal.style.display === 'flex') {
        closeModal();
    }
});

