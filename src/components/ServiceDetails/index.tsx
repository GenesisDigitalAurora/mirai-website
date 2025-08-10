import dynamic from 'next/dynamic';

// Componentes de Prácticas
const ASGDetail = dynamic(() => import('./Practicas/ASGDetail'), {
  loading: () => <div>Cargando...</div>
});

const DerechoBancarioDetail = dynamic(() => import('./Practicas/DerechoBancarioDetail'), {
  loading: () => <div>Cargando...</div>
});

const ComercioExteriorDetail = dynamic(() => import('./Practicas/ComercioExteriorDetail'), {
  loading: () => <div>Cargando...</div>
});

const LifeScienceDetail = dynamic(() => import('./Practicas/LifeScienceDetail'), {
  loading: () => <div>Cargando...</div>
});

const ContractualDetail = dynamic(() => import('./Practicas/ContractualDetail'), {
  loading: () => <div>Cargando...</div>
});

const DerechoLaboralDetail = dynamic(() => import('./Practicas/DerechoLaboralDetail'), {
  loading: () => <div>Cargando...</div>
});

const DerechoMigratorioDetail = dynamic(() => import('./Practicas/DerechoMigratorioDetail'), {
  loading: () => <div>Cargando...</div>
});

const DerechoCorporativoDetail = dynamic(() => import('./Practicas/DerechoCorporativoDetail'), {
  loading: () => <div>Cargando...</div>
});

const DerechoFiscalDetail = dynamic(() => import('./Practicas/DerechoFiscalDetail'), {
  loading: () => <div>Cargando...</div>
});

const FintechDetail = dynamic(() => import('./Practicas/FintechDetail'), {
  loading: () => <div>Cargando...</div>
});

const PropiedadIntelectualDetail = dynamic(() => import('./Practicas/PropiedadIntelectualDetail'), {
  loading: () => <div>Cargando...</div>
});

const LegalTechDetail = dynamic(() => import('./Practicas/LegalTechDetail'), {
  loading: () => <div>Cargando...</div>
});

const LitigioCivilMercantilDetail = dynamic(() => import('./Practicas/LItigioCivilMercantilDetail'), {
  loading: () => <div>Cargando...</div>
});

const DerechosDelConsumidorDetail = dynamic(() => import('./Practicas/DerechosDelConsumidorDetail'), {
  loading: () => <div>Cargando...</div>
});

const DerechoPatrimonialDetail = dynamic(() => import('./Practicas/DerechoPatrimonialDetail'), {
  loading: () => <div>Cargando...</div>
});

const DerechoAdministrativoDetail = dynamic(() => import('./Practicas/DerechoAdministrativoDetail'), {
  loading: () => <div>Cargando...</div>
});

const DerechoFamiliarDetail = dynamic(() => import('./Practicas/DerechoFamiliarDetail'), {
  loading: () => <div>Cargando...</div>
});

const EntretenimientoDetail = dynamic(() => import('./Practicas/EntretenimientoDetail'), {
  loading: () => <div>Cargando...</div>
});

const CorresponsaliasDetail = dynamic(() => import('./Practicas/CorresponsaliasDetail'), {
  loading: () => <div>Cargando...</div>
});

const DerechoAgrarioDetail = dynamic(() => import('./Practicas/DerechoAgrarioDetail'), {
  loading: () => <div>Cargando...</div>
});

const EticaComplianceDetail = dynamic(() => import('./Practicas/EticaComplianceDetail'), {
  loading: () => <div>Cargando...</div>
});

const TraduccionesLegalesDetail = dynamic(() => import('./Practicas/TraduccionesLegalesDetail'), {
  loading: () => <div>Cargando...</div>
});

const DerechoAmbientalDetail = dynamic(() => import('./Practicas/DerechoAmbientalDetail'), {
  loading: () => <div>Cargando...</div>
});

const DerechoInmobiliarioDetail = dynamic(() => import('./Practicas/DerechoInmobiliarioDetail'), {
  loading: () => <div>Cargando...</div>
});

const AgroindustriaDetail = dynamic(() => import('./Industrias/AgroindustriaDetail'), {
  loading: () => <div>Cargando...</div>
});

const AutomotrizDetail = dynamic(() => import('./Industrias/AutomotrizDetail'), {
  loading: () => <div>Cargando...</div>
});

const EnergiaDetail = dynamic(() => import('./Industrias/EnergiaDetail'), {
  loading: () => <div>Cargando...</div>
});

const FarmaceuticaDetail = dynamic(() => import('./Industrias/FarmaceuticaDetail'), {
  loading: () => <div>Cargando...</div>
});

const FintechBancosDetail = dynamic(() => import('./Industrias/FintechBancosDetail'), {
  loading: () => <div>Cargando...</div>
});

const FMCGDetail = dynamic(() => import('./Industrias/FMCGDetail'), {
  loading: () => <div>Cargando...</div>
});

const ONGsDetail = dynamic(() => import('./Industrias/ONGsDetail'), {
  loading: () => <div>Cargando...</div>
});

const RealEstateDetail = dynamic(() => import('./Industrias/RealEstateDetail'), {
  loading: () => <div>Cargando...</div>
});

const SegurosDetail = dynamic(() => import('./Industrias/SegurosDetail'), {
  loading: () => <div>Cargando...</div>
});

const TecnologiaDetail = dynamic(() => import('./Industrias/TecnologiaDetail'), {
  loading: () => <div>Cargando...</div>
});

const TurismoDetail = dynamic(() => import('./Industrias/TurismoDetail'), {
  loading: () => <div>Cargando...</div>
});

const AlimentosBebidasDetail = dynamic(() => import('./Industrias/AlimentosBebidasDetail'), {
  loading: () => <div>Cargando...</div>
});

// Componentes de Industrias (se irán agregando según se necesiten)

// Mapa de componentes disponibles
export const serviceDetailComponents = {
  // Prácticas
  'ASGDetail': ASGDetail,
  'DerechoBancarioDetail': DerechoBancarioDetail,
  'ComercioExteriorDetail': ComercioExteriorDetail,
  'LifeScienceDetail': LifeScienceDetail,
  'ContractualDetail': ContractualDetail,
  'DerechoLaboralDetail': DerechoLaboralDetail,
  'DerechoMigratorioDetail': DerechoMigratorioDetail,
  'DerechoCorporativoDetail': DerechoCorporativoDetail,
  'DerechoFiscalDetail': DerechoFiscalDetail,
  'FintechDetail': FintechDetail,
  'PropiedadIntelectualDetail': PropiedadIntelectualDetail,
  'LegalTechDetail': LegalTechDetail,
  'LitigioCivilMercantilDetail': LitigioCivilMercantilDetail,
  'DerechosDelConsumidorDetail': DerechosDelConsumidorDetail,
  'DerechoPatrimonialDetail': DerechoPatrimonialDetail,
  'DerechoAdministrativoDetail': DerechoAdministrativoDetail,
  'DerechoFamiliarDetail': DerechoFamiliarDetail,
  'EntretenimientoDetail': EntretenimientoDetail,
  'CorresponsaliasDetail': CorresponsaliasDetail,
  'DerechoAgrarioDetail': DerechoAgrarioDetail,
  'EticaComplianceDetail': EticaComplianceDetail,
  'TraduccionesLegalesDetail': TraduccionesLegalesDetail,
  'DerechoAmbientalDetail': DerechoAmbientalDetail,
  'DerechoInmobiliarioDetail': DerechoInmobiliarioDetail,
  'AgroindustriaDetail': AgroindustriaDetail,
  'AutomotrizDetail': AutomotrizDetail,
  'EnergiaDetail': EnergiaDetail,
  'FarmaceuticaDetail': FarmaceuticaDetail,
  'FintechBancosDetail': FintechBancosDetail,
  'FMCGDetail': FMCGDetail,
  'ONGsDetail': ONGsDetail,
  'RealEstateDetail': RealEstateDetail,
  'SegurosDetail': SegurosDetail,
  'TecnologiaDetail': TecnologiaDetail,
  'TurismoDetail': TurismoDetail,
  'AlimentosBebidasDetail': AlimentosBebidasDetail
} as const;

// Tipos para TypeScript
export type ServiceDetailComponentName = keyof typeof serviceDetailComponents;

// Función helper para obtener un componente por nombre
export function getServiceDetailComponent(componentName: string) {
  return serviceDetailComponents[componentName as ServiceDetailComponentName] || null;
}
