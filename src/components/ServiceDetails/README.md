# Service Details Components

Este directorio contiene componentes especializados para mostrar el contenido detallado de cada servicio en el modal.

## Estructura

```
ServiceDetails/
├── index.tsx                    # Exportador principal y registro de componentes
├── Practicas/                   # Componentes de prácticas legales
│   └── ASGDetail.tsx           # Detalle de ASG/ESG
└── Industrias/                  # Componentes de industrias (futuro)
    └── [ComponenteDetail.tsx]   # Detalle de cada industria
```

## Cómo agregar un nuevo componente de detalle

### 1. Crear el componente

**Para Prácticas:**
```tsx
// src/components/ServiceDetails/Practicas/NuevoServicioDetail.tsx
export default function NuevoServicioDetail() {
  return (
    <div>
      {/* Tu contenido JSX aquí */}
      <h2 style={{ /* estilos */ }}>Título</h2>
      <p>Contenido...</p>
    </div>
  );
}
```

**Para Industrias:**
```tsx
// src/components/ServiceDetails/Industrias/NuevaIndustriaDetail.tsx
export default function NuevaIndustriaDetail() {
  return (
    <div>
      {/* Tu contenido JSX aquí */}
    </div>
  );
}
```

### 2. Registrar en el índice

Agregar la importación y registro en `src/components/ServiceDetails/index.tsx`:

```tsx
// Importar el nuevo componente
const NuevoServicioDetail = dynamic(() => import('./Practicas/NuevoServicioDetail'), {
  loading: () => <div>Cargando...</div>
});

// Agregarlo al mapa de componentes
export const serviceDetailComponents = {
  'ASGDetail': ASGDetail,
  'NuevoServicioDetail': NuevoServicioDetail, // <- Agregar aquí
  // ... otros componentes
} as const;
```

### 3. Actualizar el JSON

En `src/data/services.json`, agregar el nombre del componente en `detailedContent`:

```json
{
  "iconPath": "/icons/practicas/xxx.svg",
  "title": "**Nuevo Servicio**",
  "content": "Descripción básica...",
  "detailedContent": "NuevoServicioDetail",
  "partners": ["Socio 1", "Socio 2"]
}
```

## Estilos recomendados

Para mantener consistencia visual, usar estos estilos base:

```tsx
// Títulos H2
style={{
  fontFamily: 'Mulish',
  fontWeight: 700,
  fontSize: 'clamp(18px, 2.5vw, 20px)',
  lineHeight: '130%',
  color: '#40B637', // Verde para H2
  marginBottom: '1em'
}}

// Títulos H3
style={{
  fontFamily: 'Mulish',
  fontWeight: 700,
  fontSize: 'clamp(16px, 2vw, 18px)',
  lineHeight: '130%',
  color: '#1E1E1E', // Gris oscuro para H3
  marginTop: '1.5em',
  marginBottom: '0.75em'
}}

// Párrafos
style={{
  fontFamily: 'Mulish',
  fontWeight: 400,
  fontSize: 'clamp(14px, 2.5vw, 16px)',
  lineHeight: '150%',
  color: '#1E1E1E',
  marginBottom: '1em'
}}

// Texto enfatizado
<strong style={{ color: '#921B95', fontWeight: 700 }}>Texto importante</strong>
<em style={{ color: '#40B637', fontWeight: 500 }}>Texto enfatizado</em>

// Blockquotes
style={{
  borderLeft: '4px solid #40B637',
  padding: '1em',
  margin: '1.5em 0',
  fontStyle: 'italic',
  background: '#f8f9fa',
  borderRadius: '4px'
}}
```

## Ventajas del sistema

1. **Mantenimiento fácil**: Cada servicio tiene su propio archivo de componente
2. **Reutilización**: Los componentes pueden ser reutilizados en otras partes
3. **Performance**: Carga dinámica solo cuando se necesita (code splitting)
4. **Tipado**: TypeScript completo para todos los componentes
5. **Flexibilidad**: Contenido complejo con JSX vs HTML limitado
6. **Organización**: Estructura clara por tipo de servicio

## Fallback

Si `detailedContent` no coincide con ningún componente registrado, el sistema automáticamente intenta renderizarlo como HTML usando `dangerouslySetInnerHTML`.
