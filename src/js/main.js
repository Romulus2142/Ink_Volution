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
    
    // Registrar visita
    trackVisit();
});

/* ============================================
   ANALYTICS - TRACKING DE VISITAS
   ============================================ */

function generateVisitorId() {
    // Generar ID único basado en navegador y características
    const nav = navigator;
    const screen = window.screen;
    const guid = nav.mimeTypes.length + '' + nav.userAgent.replace(/\D+/g, '') + 
                 screen.height + screen.width + screen.pixelDepth;
    return 'visitor_' + btoa(guid).substring(0, 20);
}

function trackVisit() {
    const visitorId = generateVisitorId();
    const visitData = {
        visitorId: visitorId,
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        referrer: document.referrer || 'Direct',
        userAgent: navigator.userAgent,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language
    };
    
    // Guardar en localStorage
    let analytics = JSON.parse(localStorage.getItem('siteAnalytics')) || {
        totalVisits: 0,
        uniqueVisitors: new Set(),
        visitHistory: []
    };
    
    // Convertir Set a Array si es necesario
    if (analytics.uniqueVisitors instanceof Set === false) {
        analytics.uniqueVisitors = new Set(analytics.uniqueVisitors || []);
    }
    
    // Registrar visita
    analytics.totalVisits++;
    analytics.uniqueVisitors.add(visitorId);
    analytics.lastVisit = visitData.timestamp;
    
    // Guardar historial (máximo 100 visitas)
    analytics.visitHistory = analytics.visitHistory || [];
    analytics.visitHistory.unshift(visitData);
    if (analytics.visitHistory.length > 100) {
        analytics.visitHistory = analytics.visitHistory.slice(0, 100);
    }
    
    // Convertir Set a Array para localStorage
    const analyticsToSave = {
        ...analytics,
        uniqueVisitors: Array.from(analytics.uniqueVisitors)
    };
    
    localStorage.setItem('siteAnalytics', JSON.stringify(analyticsToSave));
    
    // Log discreto en consola (solo visible si se busca)
    // console.log(`📈 Visita registrada - Total: ${analytics.totalVisits}, Únicos: ${analytics.uniqueVisitors.size}`);
}

function getAnalytics() {
    const analytics = JSON.parse(localStorage.getItem('siteAnalytics')) || {
        totalVisits: 0,
        uniqueVisitors: [],
        visitHistory: []
    };
    
    return {
        totalVisits: analytics.totalVisits,
        uniqueVisitors: analytics.uniqueVisitors.length,
        lastVisit: analytics.lastVisit,
        visitHistory: analytics.visitHistory
    };
}

function exportAnalytics() {
    const analytics = getAnalytics();
    const data = {
        totalVisits: analytics.totalVisits,
        uniqueVisitors: analytics.uniqueVisitors,
        lastVisit: analytics.lastVisit,
        exportDate: new Date().toISOString(),
        visitHistory: analytics.visitHistory
    };
    
    const jsonContent = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `analytics_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    console.log('✅ Estadísticas de visitas exportadas');
}

function showAnalytics() {
    const analytics = getAnalytics();
    console.log('%c📊 Estadísticas del Sitio Web', 'color: #2563eb; font-size: 14px; font-weight: bold;');
    console.log('==========================================');
    console.log(`Total de visitas: ${analytics.totalVisits}`);
    console.log(`Visitantes únicos: ${analytics.uniqueVisitors}`);
    console.log(`Última visita: ${analytics.lastVisit ? new Date(analytics.lastVisit).toLocaleString('es-ES') : 'N/A'}`);
    console.log('==========================================');
    console.log('💡 Usa exportAnalytics() para descargar datos completos');
}

// Exponer funciones globales
window.showAnalytics = showAnalytics;
window.exportAnalytics = exportAnalytics;
window.getAnalytics = getAnalytics;

/* ============================================
   VIDEO BACKGROUND ROTATION
   ============================================ */

let currentVideoIndex = 0;
const videos = [
    document.getElementById('video-background-1'),
    document.getElementById('video-background-2'),
    document.getElementById('video-background-3')
];

// Precargar el siguiente video inteligentemente
function preloadNextVideo() {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    const nextVideo = videos[nextIndex];
    
    if (nextVideo.readyState < 3) {
        nextVideo.load();
    }
}

// Precargar segundo video después de que el primero esté listo
videos[0].addEventListener('canplaythrough', () => {
    setTimeout(() => {
        videos[1].load();
    }, 2000);
}, { once: true });

function rotateVideos() {
    const currentVideo = videos[currentVideoIndex];
    const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
    const nextVideo = videos[nextVideoIndex];
    
    // Asegurar que el siguiente video esté cargado
    if (nextVideo.readyState < 3) {
        nextVideo.load();
    }
    
    // Start playing next video and prepare it
    nextVideo.currentTime = 0;
    nextVideo.play().catch(err => {
        console.log('Error playing video:', err);
    });
    
    // Fade in next video (cross-fade)
    nextVideo.classList.add('active');
    
    // Wait for transition to complete, then fade out current video
    setTimeout(() => {
        currentVideo.classList.remove('active');
        currentVideo.pause();
        currentVideoIndex = nextVideoIndex;
        
        // Precargar el siguiente video
        preloadNextVideo();
    }, 2000);
}

// Rotate videos every 14 seconds
setInterval(rotateVideos, 14000);

/* ============================================
   CONTROL DE MÚSICA
   ============================================ */

const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
const musicStatus = document.querySelector('.music-status');
let isPlaying = false;

// Actualizar texto del estado
function updateMusicStatus(playing) {
    musicStatus.textContent = playing ? 'ON' : 'OFF';
}

// Intentar reproducir música al interactuar con la página
function initMusic() {
    backgroundMusic.volume = 0.3; // Volumen al 30%
    backgroundMusic.play()
        .then(() => {
            isPlaying = true;
            musicToggle.classList.add('playing');
            musicToggle.classList.remove('paused');
            updateMusicStatus(true);
        })
        .catch(err => {
            console.log('La reproducción automática fue bloqueada:', err);
            isPlaying = false;
            musicToggle.classList.remove('playing');
            musicToggle.classList.add('paused');
            updateMusicStatus(false);
        });
}

// Intentar iniciar música cuando el usuario interactúe
document.addEventListener('click', initMusic, { once: true });

// Toggle música al hacer click en el botón
musicToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevenir que active el initMusic
    
    if (isPlaying) {
        backgroundMusic.pause();
        isPlaying = false;
        musicToggle.classList.remove('playing');
        musicToggle.classList.add('paused');
        updateMusicStatus(false);
    } else {
        backgroundMusic.play()
            .then(() => {
                isPlaying = true;
                musicToggle.classList.add('playing');
                musicToggle.classList.remove('paused');
                updateMusicStatus(true);
            })
            .catch(err => console.log('Error al reproducir:', err));
    }
});

/* ============================================
   ANIMACIONES GSAP
   ============================================ */

// Animaciones de entrada inicial: se mueven al cargar y quedan estáticos
document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Crear letras de "Orbita Gallery"
    const flowText = document.getElementById('flow-text');
    const text = 'Orbita Gallery';
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
    
    // Cargar imagen actual y adyacentes si tienen lazy loading
    const currentItem = galleryItems[currentIndex];
    const prevItem = galleryItems[currentIndex - 1];
    const nextItem = galleryItems[currentIndex + 1];
    
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
    
    // Cargar primeras imágenes al abrir galería
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
   LIKE FUNCTIONALITY
   ============================================ */

// Inicializar likes desde localStorage
const likes = JSON.parse(localStorage.getItem('galleryLikes')) || {};

// Actualizar contadores de likes en todas las fotos
function updateLikeCounts() {
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach((btn, index) => {
        const isLiked = localStorage.getItem(`liked-${index}`) === 'true';
        
        if (isLiked) {
            btn.classList.add('liked');
        }
    });
}

// Obtener el nombre de la foto por índice
function getPhotoName(index) {
    const photoNames = [
        'Soulfire',
        'Tenazas Witchblade',
        'Batman 1989',
        'Catwoman Anne',
        'Magik',
        'A Vampire',
        'Batman',
        'Selina',
        'Angela Spica',
        'Mirada Aphrodite IX'
    ];
    return photoNames[index] || `Foto ${index + 1}`;
}

// Exportar datos de likes a CSV
function exportLikesToCSV() {
    const photoNames = [
        'Soulfire',
        'Tenazas Witchblade',
        'Batman 1989',
        'Catwoman Anne',
        'Magik',
        'A Vampire',
        'Batman',
        'Selina',
        'Angela Spica',
        'Mirada Aphrodite IX'
    ];
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Nombre de la Foto,Total de Likes,Fecha de Exportacion\n";
    
    const exportDate = new Date().toLocaleString('es-ES');
    
    photoNames.forEach((name, index) => {
        const count = likes[index] || 0;
        csvContent += `"${name}",${count},"${exportDate}"\n`;
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `likes_orbita_gallery_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Guardar datos en JSON local
function saveLikesToJSON() {
    const photoNames = [
        'Soulfire',
        'Tenazas Witchblade',
        'Batman 1989',
        'Catwoman Anne',
        'Magik',
        'A Vampire',
        'Batman',
        'Selina',
        'Angela Spica',
        'Mirada Aphrodite IX'
    ];
    
    const data = {
        lastUpdate: new Date().toISOString(),
        photos: photoNames.map((name, index) => ({
            id: index,
            name: name,
            likes: likes[index] || 0
        }))
    };
    
    // Crear y descargar archivo JSON
    const jsonContent = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'likes_data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    console.log('✅ Archivo JSON descargado. Reemplaza el archivo en src/data/likes_data.json');
}

// Manejar clicks en botones de like
document.addEventListener('click', (e) => {
    const likeBtn = e.target.closest('.like-btn');
    if (!likeBtn) return;
    
    e.stopPropagation();
    
    // Encontrar el índice de la foto
    const galleryItem = likeBtn.closest('.gallery-item');
    const allItems = Array.from(document.querySelectorAll('.gallery-item'));
    const index = allItems.indexOf(galleryItem);
    
    const isLiked = likeBtn.classList.contains('liked');
    
    if (isLiked) {
        // Unlike
        likeBtn.classList.remove('liked');
        likes[index] = Math.max(0, (likes[index] || 0) - 1);
        localStorage.setItem(`liked-${index}`, 'false');
    } else {
        // Like
        likeBtn.classList.add('liked');
        likes[index] = (likes[index] || 0) + 1;
        localStorage.setItem(`liked-${index}`, 'true');
        
        // Log del like para tracking
        console.log(`👍 Like en "${getPhotoName(index)}" - Total: ${likes[index]}`);
    }
    
    localStorage.setItem('galleryLikes', JSON.stringify(likes));
});

// Comando de consola para exportar likes
window.exportLikes = exportLikesToCSV;
window.saveJSON = saveLikesToJSON;

// Comando de consola para ver estadísticas
window.showLikeStats = function() {
    console.log('📊 Estadísticas de Likes - Orbita Gallery');
    console.log('==========================================');
    const photoNames = [
        'Soulfire', 'Tenazas Witchblade', 'Batman 1989', 'Catwoman Anne',
        'Magik', 'A Vampire', 'Batman', 'Selina', 'Angela Spica', 'Mirada Aphrodite IX'
    ];
    photoNames.forEach((name, index) => {
        console.log(`${name}: ${likes[index] || 0} likes`);
    });
    console.log('==========================================');
    console.log('💡 Usa exportLikes() para descargar CSV');
};

// Inicializar likes cuando se carga la página
updateLikeCounts();

// Mostrar instrucciones en consola
console.log('%c📊 Orbita Gallery - Sistema de Likes & Analytics', 'color: #dc2626; font-size: 14px; font-weight: bold;');
console.log('\n🎨 Comandos de Likes:');
console.log('  • showLikeStats() - Ver estadísticas de likes');
console.log('  • exportLikes() - Exportar likes a CSV');
console.log('  • saveJSON() - Descargar datos en formato JSON');
console.log('\n📊 Comandos de Analytics:');
console.log('  • showAnalytics() - Ver estadísticas de visitas');
console.log('  • exportAnalytics() - Exportar datos de visitas');
console.log('  • getAnalytics() - Obtener datos completos');
console.log('\n💡 Tip: Los archivos JSON se pueden abrir directamente en Excel');

