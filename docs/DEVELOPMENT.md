# Documentación - flow creative

## Guía de Desarrollo

### Estructura del Proyecto

```
src/
├── index.html          # Página principal
├── css/
│   ├── main.css       # Estilos principales
│   ├── variables.css  # Variables CSS (futuro)
│   └── responsive.css # Media queries (futuro)
├── js/
│   ├── main.js        # Animaciones GSAP
│   ├── utils.js       # Utilidades (futuro)
│   └── config.js      # Configuración (futuro)
└── assets/
    ├── images/        # Imágenes PNG, JPG, SVG
    ├── videos/        # Videos MP4
    └── fonts/         # Fuentes locales (futuro)
```

## Convenciones de Código

### HTML
- Usar clases descriptivas: `.btn-primary`, `.hero-section`
- Mantener estructura semántica
- Comentar secciones principales

### CSS
- Usar variables CSS para colores y fuentes
- Ordenar propiedades: posición → tamaño → estilos → interacción
- Mobile-first approach
- Grouping by media queries

### JavaScript
- Camel case para variables y funciones
- Comentar código complejo
- Modularidad

## Optimizaciones

### Rendimiento
- Usar videos optimizados (< 10MB)
- Comprimir imágenes
- Lazy loading en futuras expansiones

### SEO
- Meta tags actualizados
- Semantic HTML
- Structured data (futuro)

## Próximas Mejoras

- [ ] Separar CSS en módulos
- [ ] Agregar página de contacto
- [ ] Portafolio de proyectos
- [ ] Blog o artículos
- [ ] Formulario de contacto
- [ ] Dark mode
- [ ] Animaciones avanzadas
