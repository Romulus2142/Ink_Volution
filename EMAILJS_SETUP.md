# Configuración de Notificaciones de Likes por Email

## Pasos para configurar EmailJS

### 1. Crear cuenta en EmailJS
1. Ve a https://www.emailjs.com/
2. Regístrate con tu correo (puedes usar julio.guadarrama10@gmail.com)
3. Verifica tu email

### 2. Configurar servicio de Gmail
1. En el dashboard, ve a "Email Services"
2. Click en "Add New Service"
3. Selecciona "Gmail"
4. Autoriza tu cuenta de Gmail (julio.guadarrama10@gmail.com)
5. Guarda el **Service ID** (ejemplo: service_abc123)

### 3. Crear plantilla de email
1. Ve a "Email Templates"
2. Click en "Create New Template"
3. Usa esta plantilla:

```
Asunto: 🎨 Nuevo Like en Orbita Gallery

Hola Julio,

¡Alguien dio like a una de tus obras!

📸 Obra: {{photo_name}}
📍 Posición: #{{photo_index}}
📅 Fecha y hora: {{timestamp}}
💙 Total de likes en esta foto: {{total_likes}}

🖥️ Información del usuario:
{{user_agent}}

---
Notificación automática de Orbita Gallery
```

4. En "Settings" de la plantilla:
   - To Email: julio.guadarrama10@gmail.com
   - From Name: Orbita Gallery
   - Reply To: noreply@orbitagallery.com (o tu email)

5. Guarda el **Template ID** (ejemplo: template_xyz789)

### 4. Obtener Public Key
1. Ve a "Account" en el menú
2. Copia tu **Public Key** (ejemplo: 1a2b3c4d5e6f7g8h9i)

### 5. Actualizar el código
Abre `src/js/main.js` y busca la sección `EMAILJS_CONFIG`:

```javascript
const EMAILJS_CONFIG = {
    publicKey: 'TU_PUBLIC_KEY_AQUI',      // Pega tu Public Key
    serviceId: 'TU_SERVICE_ID_AQUI',       // Pega tu Service ID
    templateId: 'TU_TEMPLATE_ID_AQUI',     // Pega tu Template ID
    enabled: true  // Cambiar a true para activar
};
```

### 6. Probar
1. Guarda los cambios
2. Haz commit y push
3. Abre tu galería en GitHub Pages
4. Dale like a una foto
5. Revisa tu correo julio.guadarrama10@gmail.com

## Límites del Plan Gratuito
- 200 emails por mes
- Suficiente para monitorear likes sin problema

## Troubleshooting

### No llegan emails
- Verifica que `enabled: true` en el código
- Revisa la consola del navegador (F12) para ver errores
- Verifica que el Service ID, Template ID y Public Key sean correctos
- Revisa la carpeta de spam en tu email

### Error 401
- El Public Key no es correcto
- Regenera el Public Key en EmailJS

### Error 404
- El Service ID o Template ID no son correctos
- Verifica que copiaste los IDs correctos

## Desactivar notificaciones
Si quieres desactivar temporalmente las notificaciones, cambia en `main.js`:
```javascript
enabled: false
```

## Notas
- Las notificaciones solo se envían cuando se da like (no cuando se quita)
- Cada like generará un email
- El sistema es gratuito hasta 200 emails/mes
