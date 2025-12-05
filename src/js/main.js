/* ============================================
   PRELOADER
   ============================================ */

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const video1 = document.getElementById('video-background-1');
    
    // Wait for first video to be ready
    const hidePreloader = () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500);
    };
    
    if (video1.readyState >= 3) {
        hidePreloader();
    } else {
        video1.addEventListener('canplaythrough', hidePreloader, { once: true });
    }
});

/* ============================================
   VIDEO BACKGROUND ROTATION
   ============================================ */

let currentVideoIndex = 0;
const videos = [
    document.getElementById('video-background-1'),
    document.getElementById('video-background-2')
];

function rotateVideos() {
    const currentVideo = videos[currentVideoIndex];
    const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
    const nextVideo = videos[nextVideoIndex];
    
    // Start playing next video and prepare it
    nextVideo.currentTime = 0;
    nextVideo.play();
    
    // Fade in next video (cross-fade)
    nextVideo.classList.add('active');
    
    // Wait for transition to complete, then fade out current video
    setTimeout(() => {
        currentVideo.classList.remove('active');
        currentVideo.pause();
        currentVideoIndex = nextVideoIndex;
    }, 2000);
}
// Rotate videos every 15 seconds
setInterval(rotateVideos, 15000);

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
        // Add extra space after "Daily"
        if (char === ' ') {
            span.style.marginRight = '0.1em';
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
const thumbnails = document.querySelectorAll('.thumbnail');
const currentIndexEl = document.getElementById('currentIndex');
const totalImagesEl = document.getElementById('totalImages');

let currentIndex = 0;
const totalImages = galleryItems.length;

// Actualizar contador
totalImagesEl.textContent = totalImages;

// Función para ir a un índice específico
function goToIndex(index) {
    if (index < 0) index = 0;
    if (index >= galleryItems.length) index = galleryItems.length - 1;
    
    currentIndex = index;
    const offset = -currentIndex * 100;
    galleryGrid.style.transform = `translateX(${offset}%)`;
    
    // Actualizar contador
    currentIndexEl.textContent = currentIndex + 1;
    
    // Actualizar thumbnails activos
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === currentIndex);
    });
    
    // Precargar siguiente imagen
    preloadImage(currentIndex + 1);
}

// Precargar imágenes
function preloadImage(index) {
    if (index >= 0 && index < galleryItems.length) {
        const img = galleryItems[index].querySelector('img');
        if (img && !img.complete) {
            const preloadImg = new Image();
            preloadImg.src = img.src;
        }
    }
}

// Navegación con flechas
arrowLeft.addEventListener('click', () => {
    goToIndex(currentIndex - 1);
});

arrowRight.addEventListener('click', () => {
    goToIndex(currentIndex + 1);
});

// Navegación con thumbnails
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        goToIndex(index);
    });
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

// Touch/Swipe support
let touchStartX = 0;
let touchEndX = 0;

galleryGrid.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

galleryGrid.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left - next image
        goToIndex(currentIndex + 1);
    } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right - previous image
        goToIndex(currentIndex - 1);
    }
}

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

/* ============================================
   LIGHTBOX FULLSCREEN
   ============================================ */

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const zoomInBtn = document.getElementById('zoomIn');
const zoomOutBtn = document.getElementById('zoomOut');
const resetZoomBtn = document.getElementById('resetZoom');

let zoomLevel = 1;

// Abrir lightbox al hacer click en imagen
galleryItems.forEach(item => {
    const img = item.querySelector('.gallery-item-image img');
    img.addEventListener('click', () => {
        lightboxImage.src = img.src;
        lightbox.classList.add('active');
        zoomLevel = 1;
        lightboxImage.style.transform = `scale(${zoomLevel})`;
        document.body.style.overflow = 'hidden';
    });
});

// Cerrar lightbox
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
    zoomLevel = 1;
}

// Controles de zoom
zoomInBtn.addEventListener('click', () => {
    zoomLevel = Math.min(zoomLevel + 0.25, 3);
    lightboxImage.style.transform = `scale(${zoomLevel})`;
});

zoomOutBtn.addEventListener('click', () => {
    zoomLevel = Math.max(zoomLevel - 0.25, 0.5);
    lightboxImage.style.transform = `scale(${zoomLevel})`;
});

resetZoomBtn.addEventListener('click', () => {
    zoomLevel = 1;
    lightboxImage.style.transform = `scale(${zoomLevel})`;
});

// Click en imagen para toggle zoom
lightboxImage.addEventListener('click', () => {
    if (zoomLevel === 1) {
        zoomLevel = 2;
        lightboxImage.classList.add('zoomed');
    } else {
        zoomLevel = 1;
        lightboxImage.classList.remove('zoomed');
    }
    lightboxImage.style.transform = `scale(${zoomLevel})`;
});

/* ============================================
   LAZY LOADING
   ============================================ */

// Observador para lazy loading
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        }
    });
}, {
    rootMargin: '50px'
});

// Observar todas las imágenes con data-src
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

