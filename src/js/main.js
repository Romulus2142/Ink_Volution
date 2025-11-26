/* ============================================
   ANIMACIONES GSAP
   ============================================ */

gsap.to("#flow-text", {
    opacity: 0.4,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

/* ============================================
   MENÚ FULLSCREEN
   ============================================ */

const menuToggle = document.getElementById('menu-toggle');
const menuOverlay = document.getElementById('menu-overlay');
const menuClose = document.getElementById('menu-close');
const menuLinks = document.querySelectorAll('.menu-section a');

// Abrir menú
menuToggle.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Cerrar menú
const closeMenu = () => {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
};

menuClose.addEventListener('click', closeMenu);

// Cerrar menú al hacer clic en un enlace
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Cerrar menú al presionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
        closeMenu();
    }
});

// Cerrar menú al hacer clic fuera del contenido (en el overlay)
menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        closeMenu();
    }
});
