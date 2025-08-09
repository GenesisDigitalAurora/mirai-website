import { useState, useEffect } from 'react';
import CardService from './CardService';
import AnimatedSection from './AnimatedSection';
import servicesData from '@/data/services.json';

type ServiceType = 'practicas' | 'industrias';

interface ServiceData {
  iconPath: string;
  title: string;
  subtitle?: string;
  content: string;
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<ServiceType>('practicas');

  // Escuchar cambios en el hash de la URL para cambiar la pestaña
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#practicas-tab') {
        setActiveTab('practicas');
      } else if (hash === '#industrias-tab') {
        setActiveTab('industrias');
      }
    };

    // Verificar el hash inicial
    handleHashChange();

    // Escuchar cambios en el hash
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Mostrar todas las cards disponibles
  const currentServices = servicesData[activeTab] as ServiceData[];
  
  // Color dinámico según la tab activa
  const titleColor = activeTab === 'practicas' ? '#40B637' : '#921B95';

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título Principal */}
        <h2 
          className="mb-12 text-center"
          style={{
            fontFamily: 'Mulish',
            fontWeight: 700,
            fontSize: 'clamp(24px, 4vw, 32px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#921B95'
          }}
        >
          Conoce nuestras soluciones
        </h2>

        {/* Sistema de Tabs */}
        <div className="mb-12">
          {/* Botones de tabs */}
          <div className="flex justify-center items-center mb-4">
            <button
              onClick={() => setActiveTab('practicas')}
              className="px-8 py-4 mx-4 relative"
              style={{
                fontFamily: 'Mulish',
                fontWeight: 700,
                fontSize: 'clamp(20px, 3vw, 32px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: activeTab === 'practicas' ? '#40B637' : '#000000',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Prácticas
            </button>

            <button
              onClick={() => setActiveTab('industrias')}
              className="px-8 py-4 mx-4 relative"
              style={{
                fontFamily: 'Mulish',
                fontWeight: 700,
                fontSize: 'clamp(20px, 3vw, 32px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: activeTab === 'industrias' ? '#921B95' : '#000000',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Industrias
            </button>
          </div>

          {/* Línea indicadora debajo de los tabs */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <hr className="w-full border-t-2 border-gray-200" />
              <div 
                className="absolute top-0 h-0.5 transition-all duration-300"
                style={{
                  backgroundColor: activeTab === 'practicas' ? '#40B637' : '#921B95',
                  left: activeTab === 'practicas' ? '0%' : '50%',
                  width: '50%'
                }}
              />
            </div>
          </div>
        </div>

        {/* Grid de Cards con Animaciones por Fila */}
        <div className="space-y-6">
          {Array.from({ length: Math.ceil(currentServices.length / 4) }).map((_, rowIndex) => {
            const rowServices = currentServices.slice(rowIndex * 4, (rowIndex + 1) * 4);
            
            return (
              <AnimatedSection 
                key={`${activeTab}-row-${rowIndex}`}
                animation="fadeUp" 
                delay={rowIndex * 200}
                duration={600}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {rowServices.map((service, cardIndex) => (
                    <CardService
                      key={`${activeTab}-${rowIndex * 4 + cardIndex}`}
                      iconPath={service.iconPath}
                      title={service.title}
                      subtitle={service.subtitle}
                      content={service.content}
                      titleColor={titleColor}
                    />
                  ))}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
