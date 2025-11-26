/* ============================================
   ANIMACIONES GSAP
   ============================================ */

// Animación removida

/* ============================================
   MODAL GALERÍA
   ============================================ */

const galleryModal = document.getElementById('galleryModal');
const openGalleryBtn = document.getElementById('openGalleryBtn');
const closeGalleryBtn = document.getElementById('closeGalleryBtn');

// Abrir modal
openGalleryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    galleryModal.style.display = 'flex';
    
    // Animación de apertura con GSAP
    gsap.fromTo(galleryModal, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    
    gsap.fromTo('.gallery-modal-content', 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.2)", delay: 0.1 }
    );
    
    // Animar cada item de la galería
    gsap.fromTo('.gallery-item', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.2 }
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

