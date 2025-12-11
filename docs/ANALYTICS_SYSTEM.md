# Sistema de Analytics - Contador de Visitas

## 📊 ¿Qué se Rastrea?

El sistema registra automáticamente:
- **Total de visitas** - Cada vez que se carga la página
- **Visitantes únicos** - Identificados por un ID único de navegador
- **Fecha y hora** de cada visita
- **Página visitada** 
- **Origen** (referrer) - De dónde vino el visitante
- **Resolución de pantalla**
- **Idioma del navegador**
- **User Agent** (dispositivo/navegador)

## 🔍 Cómo Consultar las Estadísticas

### Desde la Consola del Navegador

Abre la consola (F12) y usa estos comandos:

```javascript
// Ver resumen de visitas
showAnalytics()

// Exportar datos completos a JSON
exportAnalytics()

// Obtener datos programáticamente
const stats = getAnalytics()
console.log(stats)
```

### Ejemplo de Salida

```
📊 Estadísticas del Sitio Web
==========================================
Total de visitas: 147
Visitantes únicos: 52
Última visita: 10/12/2025, 15:30:45
==========================================
💡 Usa exportAnalytics() para descargar datos completos
```

## 📁 Estructura de Datos

El archivo exportado incluye:

```json
{
  "totalVisits": 147,
  "uniqueVisitors": 52,
  "lastVisit": "2025-12-10T15:30:45.123Z",
  "exportDate": "2025-12-10T16:00:00.000Z",
  "visitHistory": [
    {
      "visitorId": "visitor_abc123xyz",
      "timestamp": "2025-12-10T15:30:45.123Z",
      "page": "/index.html",
      "referrer": "https://google.com",
      "userAgent": "Mozilla/5.0...",
      "screenResolution": "1920x1080",
      "language": "es-ES"
    }
    // ... últimas 100 visitas
  ]
}
```

## 📈 Importar en Excel

1. Ejecuta `exportAnalytics()` en la consola
2. Descarga el archivo JSON
3. En Excel: **Datos** → **Obtener datos** → **De archivo** → **De JSON**
4. Selecciona el archivo descargado
5. Excel creará tablas con toda la información

## 🔐 Privacidad

- Los datos se almacenan **localmente** en el navegador de cada visitante
- El ID de visitante es anónimo (basado en características del navegador)
- No se recopilan datos personales identificables
- Los datos NO se envían a ningún servidor automáticamente

## 💾 Almacenamiento

Los datos se guardan en:
- **localStorage del navegador** - Para tracking en tiempo real
- **Archivo JSON exportado** - Para análisis offline

### Límites:
- Historial: Últimas **100 visitas**
- Se pueden exportar en cualquier momento para archivar

## 🎯 Casos de Uso

### Ver estadísticas rápidas
```javascript
showAnalytics()
```

### Exportar datos mensuales
```javascript
exportAnalytics()  // Descarga analytics_2025-12-10.json
```

### Análisis personalizado
```javascript
const data = getAnalytics()
console.log('Tasa de retorno:', (data.totalVisits / data.uniqueVisitors).toFixed(2))
```

## ⚠️ Limitaciones

1. **Basado en navegador**: Cada navegador/dispositivo mantiene su propio contador
2. **No persiste entre dispositivos**: Un usuario con 2 navegadores cuenta como 2 visitantes únicos
3. **Se puede borrar**: Si el usuario limpia localStorage, se pierden los datos
4. **No es tracking profesional**: Para analytics avanzados, considera Google Analytics o similar

## 🔄 Sincronización (Opcional)

Para consolidar datos de todos los visitantes, necesitarías:
1. Un servidor backend (ver `save_likes.php` como referencia)
2. Modificar el código para enviar datos al servidor
3. Una base de datos para almacenar todas las visitas

## 📊 Métricas Disponibles

- ✅ Total de visitas
- ✅ Visitantes únicos
- ✅ Fecha/hora de visitas
- ✅ Páginas visitadas
- ✅ Fuente de tráfico (referrer)
- ✅ Resoluciones de pantalla
- ✅ Idiomas de navegador
- ✅ Dispositivos/navegadores usados

## 💡 Tips

- Ejecuta `exportAnalytics()` regularmente para respaldar datos
- Usa Excel para crear gráficos de tendencias
- Compara visitas vs likes para ver engagement
- Analiza las fuentes de tráfico más comunes
