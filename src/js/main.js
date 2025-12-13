/* ============================================
   VISITOR ANALYTICS
   ============================================ */

// Registrar visita
function trackVisit() {
    const now = new Date();
    const visitData = {
        timestamp: now.toISOString(),
        date: now.toLocaleString('es-ES'),
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        viewport: `${window.innerWidth}x${window.innerHeight}`
    };
    
    // Contador total de visitas
    let totalVisits = parseInt(localStorage.getItem('totalVisits') || '0');
    totalVisits++;
    localStorage.setItem('totalVisits', totalVisits.toString());
    
    // Guardar historial de visitas
    const visitHistory = JSON.parse(localStorage.getItem('visitHistory') || '[]');
    visitHistory.push(visitData);
    localStorage.setItem('visitHistory', JSON.stringify(visitHistory));
    
    // Visitantes únicos (por navegador)
    if (!localStorage.getItem('firstVisit')) {
        localStorage.setItem('firstVisit', now.toISOString());
        localStorage.setItem('isUniqueVisitor', 'true');
    }
    
    // Última visita
    localStorage.setItem('lastVisit', now.toISOString());
}

// Exportar analytics a CSV
window.exportAnalytics = function() {
    const totalVisits = localStorage.getItem('totalVisits') || '0';
    const firstVisit = localStorage.getItem('firstVisit') || 'N/A';
    const lastVisit = localStorage.getItem('lastVisit') || 'N/A';
    const visitHistory = JSON.parse(localStorage.getItem('visitHistory') || '[]');
    
    let csvContent = "\uFEFF"; // BOM para UTF-8
    csvContent += "ESTADÍSTICAS DE VISITAS\n\n";
    csvContent += `Total de Visitas,${totalVisits}\n`;
    csvContent += `Primera Visita,${firstVisit}\n`;
    csvContent += `Última Visita,${lastVisit}\n`;
    csvContent += `Visitante Único,${localStorage.getItem('isUniqueVisitor') === 'true' ? 'Sí' : 'No'}\n`;
    csvContent += "\n\nHISTORIAL DE VISITAS\n\n";
    csvContent += "Fecha y Hora,Resolución de Pantalla,Tamaño de Ventana,Idioma\n";
    
    visitHistory.forEach(visit => {
        csvContent += `${visit.date},${visit.screenResolution},${visit.viewport},${visit.language}\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    
    link.setAttribute("href", url);
    link.setAttribute("download", `analytics_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('✅ Archivo de analytics descargado');
};

// Mostrar estadísticas
window.showAnalytics = function() {
    const totalVisits = localStorage.getItem('totalVisits') || '0';
    const firstVisit = localStorage.getItem('firstVisit');
    const lastVisit = localStorage.getItem('lastVisit');
    const visitHistory = JSON.parse(localStorage.getItem('visitHistory') || '[]');
    
    console.log('=== 📊 ESTADÍSTICAS DE VISITAS ===\n');
    console.log(`📈 Total de visitas: ${totalVisits}`);
    console.log(`🆕 Primera visita: ${firstVisit ? new Date(firstVisit).toLocaleString('es-ES') : 'N/A'}`);
    console.log(`🕐 Última visita: ${lastVisit ? new Date(lastVisit).toLocaleString('es-ES') : 'N/A'}`);
    console.log(`👤 Visitante único: ${localStorage.getItem('isUniqueVisitor') === 'true' ? 'Sí' : 'No'}`);
    console.log(`📝 Registros en historial: ${visitHistory.length}`);
    console.log('\n💾 Para descargar reporte completo: exportAnalytics()');
};

// Registrar visita al cargar la página
trackVisit();

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
function initMusic(e) {
    // No iniciar música si es click en botón de música, botón de explorar, o dentro de la galería
    if (e.target.closest('#musicToggle') || 
        e.target.closest('#openGalleryBtn') ||
        e.target.closest('#galleryModal')) {
        return;
    }
    
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
    
    // Mostrar modal y preloader
    galleryModal.style.display = 'flex';
    const galleryPreloader = document.getElementById('galleryPreloader');
    galleryPreloader.classList.remove('hidden');
    
    currentIndex = 0;
    
    // Precargar imágenes principales
    const imagesToPreload = [];
    for (let i = 0; i < Math.min(3, galleryItems.length); i++) {
        const img = galleryItems[i].querySelector('img');
        if (img) {
            imagesToPreload.push(img.src);
        }
    }
    
    // Cargar imágenes
    let loadedImages = 0;
    const totalToLoad = imagesToPreload.length;
    
    const hidePreloaderAndShow = () => {
        setTimeout(() => {
            galleryPreloader.classList.add('hidden');
            goToIndex(0);
            
            // Animaciones GSAP después de cargar
            gsap.fromTo('.gallery-modal-content', 
                { scale: 0.8, opacity: 0 }, 
                { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.2)" }
            );
        }, 300);
    };
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.onload = () => {
            loadedImages++;
            if (loadedImages >= totalToLoad) {
                hidePreloaderAndShow();
            }
        };
        img.onerror = () => {
            loadedImages++;
            if (loadedImages >= totalToLoad) {
                hidePreloaderAndShow();
            }
        };
        img.src = src;
    });
    
    // Fallback: ocultar preloader después de 2 segundos si algo falla
    setTimeout(() => {
        if (!galleryPreloader.classList.contains('hidden')) {
            hidePreloaderAndShow();
        }
    }, 2000);
    
    // Animación de apertura del modal (inmediata)
    gsap.fromTo(galleryModal, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3, ease: "power2.out" }
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
   LIKE FUNCTIONALITY WITH EXCEL EXPORT
   ============================================ */

// Nombres de las fotos para el registro
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

// Inicializar likes desde localStorage
const likes = JSON.parse(localStorage.getItem('galleryLikes')) || {};

// Guardar historial de likes con timestamp
function saveLikeHistory(photoIndex, photoName, action) {
    const history = JSON.parse(localStorage.getItem('likesHistory')) || [];
    const timestamp = new Date().toISOString();
    const date = new Date().toLocaleString('es-ES');
    
    history.push({
        photoIndex: photoIndex,
        photoName: photoName,
        action: action, // 'like' o 'unlike'
        timestamp: timestamp,
        date: date
    });
    localStorage.setItem('likesHistory', JSON.stringify(history));
    
    // Nota: GitHub Pages no soporta PHP, los datos se guardan solo en localStorage
    // Usa exportLikesToCSV() para descargar el archivo Excel
}

// Función para exportar likes a CSV (compatible con Excel)
function exportLikesToCSV() {
    // Preparar datos de resumen con codificación UTF-8 BOM para Excel
    let csvContent = "\uFEFF"; // BOM para que Excel reconozca UTF-8
    csvContent += "RESUMEN DE LIKES POR FOTO\n\n";
    csvContent += "Foto,Total de Likes\n";
    
    photoNames.forEach((name, index) => {
        const count = likes[index] || 0;
        csvContent += `${name},${count}\n`;
    });
    
    // Agregar historial detallado
    csvContent += "\n\nHISTORIAL DETALLADO DE LIKES\n\n";
    csvContent += "Foto,Accion,Fecha y Hora\n";
    
    const history = JSON.parse(localStorage.getItem('likesHistory')) || [];
    history.forEach(entry => {
        csvContent += `${entry.photoName},${entry.action},${entry.date}\n`;
    });
    
    // Crear Blob con codificación UTF-8
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    
    link.setAttribute("href", url);
    link.setAttribute("download", `likes_galeria_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('✅ Archivo CSV descargado. Total de likes registrados:', history.length);
    console.log('📊 Para ver estadísticas actuales, ejecuta: showLikesStats()');
}

// Hacer la función disponible globalmente
window.exportLikesToCSV = exportLikesToCSV;

// Actualizar estado visual de los botones
function updateLikeButtons() {
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach((btn, index) => {
        const isLiked = localStorage.getItem(`liked-${index}`) === 'true';
        if (isLiked) {
            btn.classList.add('liked');
        }
    });
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
    const photoName = photoNames[index];
    
    const isLiked = likeBtn.classList.contains('liked');
    
    if (isLiked) {
        // Unlike
        likeBtn.classList.remove('liked');
        likes[index] = Math.max(0, (likes[index] || 0) - 1);
        localStorage.setItem(`liked-${index}`, 'false');
        saveLikeHistory(index, photoName, 'unlike');
    } else {
        // Like
        likeBtn.classList.add('liked');
        likes[index] = (likes[index] || 0) + 1;
        localStorage.setItem(`liked-${index}`, 'true');
        saveLikeHistory(index, photoName, 'like');
    }
    
    localStorage.setItem('galleryLikes', JSON.stringify(likes));
});

// Inicializar likes cuando se carga la página
updateLikeButtons();

// Función para mostrar estadísticas en consola
window.showLikesStats = function() {
    console.log('=== 📊 ESTADÍSTICAS DE LIKES ===\n');
    let totalLikes = 0;
    photoNames.forEach((name, index) => {
        const count = likes[index] || 0;
        totalLikes += count;
        console.log(`${name}: ${count} likes`);
    });
    console.log(`\n📈 Total de likes: ${totalLikes}`);
    
    const history = JSON.parse(localStorage.getItem('likesHistory')) || [];
    console.log(`📝 Registros en historial: ${history.length}`);
    console.log('\n💾 Para descargar archivo Excel, ejecuta: exportLikesToCSV()');
};

console.log('🎨 Sistema de likes iniciado');
console.log('📋 Comandos disponibles:');
console.log('   showLikesStats() - Ver estadísticas de likes');
console.log('   exportLikesToCSV() - Descargar archivo Excel de likes');
console.log('   showAnalytics() - Ver estadísticas de visitas');
console.log('   exportAnalytics() - Descargar reporte de visitas');
console.log('\n💡 Los datos se guardan en el navegador (localStorage)');

