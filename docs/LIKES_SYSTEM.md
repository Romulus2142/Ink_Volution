# Sistema de Likes - Orbita Gallery

## 📊 Cómo Consultar las Estadísticas

### Opción 1: Desde la Consola del Navegador (Recomendado)

1. Abre la página de la galería
2. Presiona **F12** para abrir las herramientas de desarrollo
3. Ve a la pestaña **Console**
4. Usa estos comandos:

```javascript
// Ver estadísticas en consola
showLikeStats()

// Exportar a CSV (compatible con Excel)
exportLikes()

// Descargar datos en formato JSON
saveJSON()
```

### Opción 2: Archivo JSON Local

Los datos de likes se guardan en:
```
src/data/likes_data.json
```

**Para actualizar manualmente:**
1. En la consola del navegador ejecuta: `saveJSON()`
2. Descarga el archivo `likes_data.json`
3. Reemplázalo en la carpeta `src/data/`

**Para importar en Excel:**
1. Abre Excel
2. Ve a **Datos** → **Obtener datos** → **De archivo** → **De JSON**
3. Selecciona `likes_data.json`
4. Excel convertirá automáticamente los datos a tabla

### Opción 3: Exportación CSV

El comando `exportLikes()` descarga un archivo CSV con:
- Nombre de cada foto
- Total de likes
- Fecha y hora de exportación

Este archivo se abre directamente en Excel.

## 📁 Estructura de Datos

El archivo JSON tiene este formato:

```json
{
  "lastUpdate": "2025-12-10T15:30:00.000Z",
  "photos": [
    {
      "id": 0,
      "name": "Soulfire",
      "likes": 15
    },
    {
      "id": 1,
      "name": "Tenazas Witchblade",
      "likes": 23
    }
    // ... más fotos
  ]
}
```

## 🔄 Actualización Automática

Los likes se guardan automáticamente en el navegador del usuario (localStorage). Para exportar los datos actualizados:

1. Ejecuta `saveJSON()` en la consola
2. Descarga el archivo
3. Reemplázalo en `src/data/likes_data.json`

## 💡 Notas Importantes

- Los datos se guardan **localmente** en el navegador de cada visitante
- Cada navegador/dispositivo tiene su propio contador
- Para consolidar datos de múltiples usuarios, necesitarías un servidor backend (ver `save_likes.php` para implementación con PHP)

## 🎯 Próximos Pasos (Opcional)

Si quieres sincronización automática con servidor:

1. Configura un servidor con PHP
2. El archivo `save_likes.php` ya está listo para usar
3. Los datos se guardarán automáticamente en el servidor cada vez que alguien dé like
