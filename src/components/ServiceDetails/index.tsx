import dynamic from 'next/dynamic';

// Componentes de Prácticas
const ASGDetail = dynamic(() => import('./Practicas/ASGDetail'), {
  loading: () => <div>Cargando...</div>
});

// Componentes de Industrias (se irán agregando según se necesiten)

// Mapa de componentes disponibles
export const serviceDetailComponents = {
  // Prácticas
  'ASGDetail': ASGDetail,
  
  // Industrias (para futuro uso)
  // 'AlimentosDetail': AlimentosDetail,
  // 'AutomotrizDetail': AutomotrizDetail,
} as const;

// Tipos para TypeScript
export type ServiceDetailComponentName = keyof typeof serviceDetailComponents;

// Función helper para obtener un componente por nombre
export function getServiceDetailComponent(componentName: string) {
  return serviceDetailComponents[componentName as ServiceDetailComponentName] || null;
}
