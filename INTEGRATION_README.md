# 📧 Integración API de Contacto - MIRAI

## 🎯 **Resumen**

El formulario de contacto de MIRAI ahora está completamente integrado con un servicio AWS Lambda que:

- ✅ Valida los datos del formulario
- ✅ Guarda contactos en DynamoDB
- ✅ Envía notificaciones por email vía AWS SES
- ✅ Maneja errores y estados de carga
- ✅ Funciona en desarrollo y producción

## 🌐 **URLs de los APIs**

### Desarrollo
```
POST https://pi8fxv2v48.execute-api.us-east-1.amazonaws.com/dev/contact
```

### Producción
```
POST https://eezrxweqo6.execute-api.us-east-1.amazonaws.com/prod/contact
```

## 📁 **Archivos Creados/Modificados**

### Nuevos Archivos:
- `src/config/api.ts` - Configuración de URLs por ambiente
- `src/services/contactService.ts` - Servicio para llamadas al API
- `src/hooks/useContactForm.ts` - Hook para manejo del formulario
- `src/components/FormMessage.tsx` - Componentes para mensajes

### Archivos Modificados:
- `src/components/ContactSection.tsx` - Integración completa

## 🔧 **Funcionalidades Implementadas**

### 1. **Validación Completa**
- Nombre: mínimo 2 caracteres (requerido)
- Apellido: mínimo 2 caracteres (requerido)
- Email: formato válido (requerido)
- Teléfono: formato válido (opcional)

### 2. **Manejo de Estados**
- ⏳ **Cargando**: Spinner + botón deshabilitado
- ✅ **Éxito**: Mensaje verde con ID de contacto
- ❌ **Error**: Mensaje rojo con detalles
- 🔄 **Reintentos**: Automático en fallos de red

### 3. **UX Mejorado**
- Validación en tiempo real (al perder foco)
- Indicadores visuales de errores
- Mensajes claros y útiles
- Auto-cierre de mensajes de éxito
- Prevención de doble envío

### 4. **Configuración por Ambiente**
- **Desarrollo**: Usa `/dev` endpoint
- **Producción**: Usa `/prod` endpoint
- Detección automática según `NODE_ENV`

## 📊 **Formato del API**

### Request:
```json
POST /contact
Content-Type: application/json

{
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juan@example.com",
  "telefono": "5551234567"
}
```

### Response Exitosa:
```json
{
  "success": true,
  "message": "Tus datos de contacto han sido recibidos exitosamente. Te contactaremos pronto.",
  "contactId": "bfa1245d-a969-4f65-b582-a006235127ee",
  "emailSent": true,
  "emailProvider": "AWS_SES",
  "timestamp": "2025-08-25T03:45:12.123Z",
  "requestId": "req_1756094712123_abc123"
}
```

### Response con Error:
```json
{
  "error": "Validation Error",
  "message": "Por favor, verifica los datos enviados",
  "details": [
    "El nombre debe tener al menos 2 caracteres",
    "El correo electrónico debe tener un formato válido"
  ],
  "timestamp": "2025-08-25T03:45:12.123Z",
  "requestId": "req_1756094712123_abc123"
}
```

## 🛠️ **Desarrollo Local**

### 1. **Instalar Dependencias**
```bash
npm install
```

### 2. **Ejecutar en Desarrollo**
```bash
npm run dev
```

El formulario automáticamente usará el endpoint de desarrollo.

### 3. **Build para Producción**
```bash
npm run build
```

El build automáticamente usará el endpoint de producción.

## 🔍 **Testing**

### Probar API de Desarrollo:
```bash
curl -X POST https://pi8fxv2v48.execute-api.us-east-1.amazonaws.com/dev/contact \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test","apellido":"Dev","email":"test@example.com","telefono":"5551234567"}'
```

### Probar API de Producción:
```bash
curl -X POST https://eezrxweqo6.execute-api.us-east-1.amazonaws.com/prod/contact \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test","apellido":"Prod","email":"test@example.com","telefono":"5551234567"}'
```

## 🚨 **Manejo de Errores**

### Tipos de Errores Manejados:
1. **Validación**: Datos incorrectos o faltantes
2. **Red**: Problemas de conectividad
3. **Timeout**: Solicitudes que tardan mucho
4. **Servidor**: Errores del API (500, etc.)
5. **Duplicados**: Emails repetidos en 24h

### Reintentos Automáticos:
- 2 intentos automáticos en errores de red
- Timeout de 10 segundos por solicitud
- Backoff de 1 segundo entre reintentos

## 📈 **Características de Producción**

### Escalabilidad:
- ✅ Lambda escalado automático
- ✅ DynamoDB con índices optimizados
- ✅ SES con alta disponibilidad
- ✅ API Gateway con caching

### Monitoreo:
- ✅ CloudWatch Logs automáticos
- ✅ Métricas de Lambda y API Gateway
- ✅ Alertas de errores configurables
- ✅ Trazabilidad con Request IDs

### Seguridad:
- ✅ CORS configurado correctamente
- ✅ HTTPS obligatorio
- ✅ Validación estricta de datos
- ✅ Rate limiting implícito

## 🎉 **¡Todo Listo!**

El formulario de contacto está completamente funcional y listo para producción. Los usuarios pueden:

1. Llenar el formulario con validación en tiempo real
2. Ver estados de carga durante el envío
3. Recibir confirmación de éxito o mensajes de error claros
4. Saber que sus datos se guardaron y se envió notificación

Los administradores recibirán emails automáticos en `contacto@gedx.com.mx` con toda la información del contacto.
