import { useState } from 'react';
import CardService from './CardService';
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

  // Mostrar solo las primeras 8 cards (2 filas de 4)
  const currentServices = (servicesData[activeTab] as ServiceData[]).slice(0, 8);
  
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

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentServices.map((service, index) => (
            <CardService
              key={`${activeTab}-${index}`}
              iconPath={service.iconPath}
              title={service.title}
              subtitle={service.subtitle}
              content={service.content}
              titleColor={titleColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
