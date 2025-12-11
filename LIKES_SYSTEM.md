# Sistema de Registro de Likes

Este proyecto incluye un sistema de registro de likes que guarda toda la información en el navegador y permite exportarla a Excel.

## ✅ Cómo Funciona

1. **Almacenamiento en Navegador**: Todos los likes se guardan automáticamente en localStorage del navegador
2. **Persistencia**: Los datos se mantienen incluso si cierras el navegador
3. **Exportación a Excel**: Puedes descargar un archivo CSV con todos los datos en cualquier momento

## 📊 Datos Registrados

### Información que se guarda:
- ✓ Total de likes por cada foto
- ✓ Historial completo de cada like/unlike
- ✓ Fecha y hora exacta de cada interacción
- ✓ Nombre de la foto
- ✓ Acción realizada (like/unlike)

## 🎯 Comandos Disponibles

Abre la consola del navegador (F12) y ejecuta:

### Ver Estadísticas
```javascript
showLikesStats()
```
Muestra:
- Total de likes por foto
- Número total de likes
- Cantidad de registros en el historial

### Descargar Archivo Excel
```javascript
exportLikesToCSV()
```
Descarga un archivo CSV que incluye:
- **Resumen**: Total de likes por foto
- **Historial Detallado**: Cada like con fecha/hora

## 📁 Formato del Archivo Exportado

El archivo descargado (`likes_galeria_YYYY-MM-DD.csv`) contiene:

```
RESUMEN DE LIKES POR FOTO

Foto,Total de Likes
Soulfire,5
Tenazas Witchblade,3
...

HISTORIAL DETALLADO DE LIKES

Foto,Accion,Fecha y Hora
Soulfire,like,10/12/2025 14:30:25
Soulfire,unlike,10/12/2025 14:31:10
...
```

## 💡 Notas Importantes

- **Basado en Navegador**: Los datos se guardan en localStorage (almacenamiento local del navegador)
- **Por Dispositivo**: Cada navegador/dispositivo tiene su propio registro
- **Exportación Manual**: Para tener un registro permanente, descarga el CSV periódicamente
- **Compatible con Excel**: El archivo se abre directamente en Microsoft Excel, Google Sheets, etc.

## 🔄 Compatibilidad

- ✅ Funciona con GitHub Pages (solo archivos estáticos)
- ✅ No requiere servidor PHP
- ✅ No requiere base de datos
- ✅ Funciona offline
- ✅ Compatible con todos los navegadores modernos

## 📝 Ejemplo de Uso

1. Los visitantes dan likes a las fotos
2. Cada like se registra automáticamente
3. En cualquier momento ejecutas `exportLikesToCSV()`
4. Se descarga un archivo Excel con todos los datos
5. Abres el archivo en Excel para analizar las estadísticas

