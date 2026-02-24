# AI Coding Agent Instructions - Ink_Volution

## Project Overview
**Ink_Volution** is a static portfolio website for digital designer Julio Guadarrama. It features:
- Video background rotation system with 3 looping videos
- Full-screen immersive gallery modal with likes system
- Client-side analytics and localStorage-based data persistence
- Optional EmailJS integration for like notifications
- Pure static deployment (GitHub Pages compatible, no backend required)

## Architecture & Key Components

### 1. Dual Structure Pattern
The project maintains **two parallel structures** (legacy pattern):
- `src/` - Primary development files (index.html, css/, js/, assets/)
- Root level - Legacy files (index.html, js/main.js, styles/main.css)

**Always edit `src/` files**. Root files may be outdated copies.

### 2. Video Background System (`src/js/main.js` lines 110-150)
Three background videos rotate every 15 seconds with crossfade transitions:
```javascript
// Videos are preloaded intelligently:
// - Video 1 loads on page load
// - Video 2 preloads after Video 1 is ready
// - Video 3 preloads on-demand before transition
```
**Pattern**: Uses `opacity` transitions and `readyState` checks, not display toggling. Always maintain the preload chain to prevent stuttering.

### 3. Gallery Modal Architecture
**Two distinct modes** controlled by CSS classes:
- **Grid Mode** (default): All images visible in 3-column grid, fullscreen white background
- **Slideshow Mode** (unused/hidden): Single image navigation with keyboard controls

The gallery uses `.gallery-modal.fullscreen-mode` class to invert colors (white→black backgrounds, black→white text). When adding gallery features, respect these two visual modes.

### 4. LocalStorage Data Persistence (`src/js/main.js`)
**Three independent tracking systems** - all browser-based, no server required:

#### Visitor Analytics (lines 1-90)
```javascript
localStorage: 'totalVisits', 'visitHistory', 'firstVisit', 'lastVisit'
// Commands: showAnalytics(), exportAnalytics()
```

#### Likes System (lines 550-680)
```javascript
localStorage: 'gallery_likes' (array), 'gallery_likes_history' (detailed log)
// Commands: showLikesStats(), exportLikesToCSV()
// Each like stores: photoIndex, photoName, action (like/unlike), timestamp
```

**Important**: Likes persist per browser/device. The "total likes" count is local, not global.

#### EmailJS Integration (lines 690-730, optional)
Disabled by default (`enabled: false`). When enabled, sends email on each like. Configuration in `EMAILJS_SETUP.md`. Never commit actual API keys.

### 5. CSS Organization (`src/css/main.css`)
**Modular section structure** with clear comment headers:
```css
/* VARIABLES Y CONFIGURACIÓN */ - CSS custom properties
/* ANIMACIONES KEYFRAMES */ - @keyframes definitions
/* LAYOUT PRINCIPAL */ - Fixed positioning elements
/* MODAL GALERÍA */ - Gallery-specific styles
/* MEDIA QUERIES */ - Mobile(≤768px), Tablet(769-1024px), Desktop(1025-1919px), 4K(≥1920px)
```

**Pattern**: CSS uses `position: fixed` extensively for hero text, logo, buttons. Adjust `bottom`, `top` values carefully to avoid mobile overlap.

**Responsive breakpoints**: Mobile-first approach. Desktop styles are default, mobile styles override in media queries.

## Development Workflows

### Local Development
```bash
# Start local server (Python method - works on all platforms)
npm run start
# Opens on http://localhost:8000

# Or use Node.js http-server
npm run serve
```

**No build process** - edit and refresh browser. Files are served directly from `src/`.

### Video Optimization
FFmpeg is bundled in `tools/ffmpeg/`. To optimize videos:
```bash
npm run optimize-video
# Processes src/assets/videos/bg_vid.mp4 → bg_vid.optim.mp4
# Settings: H.264, CRF 28, preset veryfast, faststart flag
```

**Pattern**: Keep videos under 10MB. Use `movflags +faststart` for web streaming.

### Testing Likes/Analytics
Open browser console (F12) and use global functions:
```javascript
showLikesStats()        // Display current likes data
exportLikesToCSV()      // Download likes CSV file
showAnalytics()         // Display visitor analytics
exportAnalytics()       // Download analytics CSV
```

## Project-Specific Conventions

### Naming Patterns
- **CSS Classes**: BEM-inspired but loose - `.gallery-modal`, `.gallery-item-image`, `.like-btn`
- **JavaScript**: camelCase functions - `goToIndex()`, `preloadImage()`, `sendLikeNotification()`
- **Files**: lowercase with hyphens - `main.css`, `bg_vid.mp4`

### Animation Strategy
**GSAP for page load only** (not for interactions):
```javascript
// Initial entrance animations in DOMContentLoaded
// Letters animate with stagger, then remain static
// No continuous animations - respects prefers-reduced-motion
```

**CSS transitions** handle all hover effects, modal openings, video fades. Duration: `0.3s ease` or `0.5s cubic-bezier(0.4, 0, 0.2, 1)`.

### Color Inversion Pattern
Gallery modal inverts colors based on fullscreen state:
```css
.gallery-modal { background: white; } /* Default grid mode */
.gallery-modal.fullscreen-mode { background: black; } /* Fullscreen mode */
```
**When adding UI elements** in gallery, always provide both light and dark variants.

### Data Export Format
All CSV exports use UTF-8 BOM (`\uFEFF`) for Excel compatibility and Spanish date format (`toLocaleString('es-ES')`). Maintain this pattern for new exports.

## Critical Integration Points

### Gallery Image Loading
Images use lazy loading pattern with placeholder states:
```javascript
// 1. Add .loading class to container (shows spinner)
// 2. Create new Image(), set src
// 3. On load: remove .loading, add .loaded (triggers fadeInScale animation)
```

**When adding images**: Update HTML `<div class="gallery-item">` blocks and ensure `data-src` attributes are set.

### Music System
Background audio is controlled by `.music-toggle` button:
- Attempts autoplay on load (usually blocked by browsers)
- Falls back to user-initiated playback on first click
- State persists in `isPlaying` variable

**Pattern**: Never force autoplay. Always provide user control.

## Common Pitfalls

1. **Editing wrong files**: Always work in `src/`, not root-level duplicates
2. **Breaking video preload chain**: Maintain sequential preloading (video1 → video2 → video3)
3. **Forgetting mobile styles**: Test on ≤768px - fixed elements often overlap
4. **localStorage limits**: Browser limit is ~5-10MB. Likes/analytics are small but monitor growth
5. **EmailJS in commits**: Never commit real API keys. Keep `enabled: false` in version control

## Key Files Reference

| File | Purpose | Edit When |
|------|---------|-----------|
| `src/index.html` | Main HTML structure | Adding sections, gallery images, metadata |
| `src/css/main.css` | All styles (1200+ lines) | Any visual changes, responsive fixes |
| `src/js/main.js` | All JavaScript (900+ lines) | Interactions, analytics, video logic |
| `LIKES_SYSTEM.md` | Likes feature documentation | Understanding data flow |
| `EMAILJS_SETUP.md` | EmailJS integration guide | Configuring notifications |
| `package.json` | npm scripts | Adding build commands |

## Testing Checklist
- [ ] Test on mobile (≤768px) - check fixed element positions
- [ ] Verify video transitions are smooth (3 videos rotate correctly)
- [ ] Open gallery modal - grid should show all images
- [ ] Test like button - check browser console for localStorage updates
- [ ] Run `showLikesStats()` in console - verify data structure
- [ ] Check `prefers-reduced-motion` - animations should disable

---

**Last Updated**: Generated for Ink_Volution portfolio website (Spanish/ES locale, GitHub Pages deployment)
