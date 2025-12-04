/* ============================================
   ANIMACIONES GSAP
   ============================================ */

// Animaciones de entrada inicial: se mueven al cargar y quedan estáticos
document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Crear letras de "Daily Sketch"
    const flowText = document.getElementById('flow-text');
    const text = 'Daily Sketch';
    const letters = text.split('').map((char, index) => {
        const span = document.createElement('span');
        if (char === 'D' || char === 'S') {
            span.classList.add('color-text');
        }
        span.textContent = char;
        span.style.display = 'inline-block';
        flowText.appendChild(span);
        return span;
    });

    const targets = ['.logo-container', '.subtitle-text', '.explore-btn', '.bottom-text'];

    if (prefersReduced) {
        gsap.set([...targets, ...letters], { clearProps: 'all', opacity: 1, x: 0 });
        return;
    }

    // Configurar estado inicial
    gsap.set(targets, { opacity: 0, y: 220 });
    gsap.set(letters, { opacity: 0, x: 220 });

    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: 'power3.out' } });
    
    tl.to('.logo-container', { opacity: 1, y: 0 })
      .to(letters, { 
          opacity: 1, 
          x: 0, 
          stagger: 0.05,
          duration: 0.6,
          ease: 'power2.out'
      }, '-=0.4')
      .to('.subtitle-text', { opacity: 1, y: 0 }, '-=0.2')
      .to('.explore-btn', { opacity: 1, y: 0 }, '-=0.3')
      .to('.bottom-text', { opacity: 1, y: 0 }, '-=0.35');
});

/* ============================================
   MODAL GALERÍA
   ============================================ */

const galleryModal = document.getElementById('galleryModal');
const openGalleryBtn = document.getElementById('openGalleryBtn');
const closeGalleryBtn = document.getElementById('closeGalleryBtn');
const galleryGrid = document.querySelector('.gallery-grid');
const galleryItems = document.querySelectorAll('.gallery-item');
const arrowLeft = document.getElementById('galleryArrowLeft');
const arrowRight = document.getElementById('galleryArrowRight');

let currentIndex = 0;

// Función para ir a un índice específico
function goToIndex(index) {
    if (index < 0) index = 0;
    if (index >= galleryItems.length) index = galleryItems.length - 1;
    
    currentIndex = index;
    const offset = -currentIndex * 100;
    galleryGrid.style.transform = `translateX(${offset}%)`;
}

// Navegación con flechas
arrowLeft.addEventListener('click', () => {
    goToIndex(currentIndex - 1);
});

arrowRight.addEventListener('click', () => {
    goToIndex(currentIndex + 1);
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (galleryModal.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            goToIndex(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
            goToIndex(currentIndex + 1);
        }
    }
});

// Abrir modal
openGalleryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    galleryModal.style.display = 'flex';
    currentIndex = 0;
    goToIndex(0);
    
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

