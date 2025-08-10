import { useState, useEffect, useRef } from 'react';
import CardService from './CardService';
import servicesData from '@/data/services.json';

type ServiceType = 'practicas' | 'industrias';

interface ServiceData {
  iconPath: string;
  title: string;
  subtitle?: string;
  content: string;
  detailedContent?: string;
  partners?: string[];
  category?: 'practicas' | 'industrias';
}

interface ServicesSectionMobileProps {
  onViewMore: (service: ServiceData) => void;
}

export default function ServicesSectionMobile({ onViewMore }: ServicesSectionMobileProps) {
  const [activeTab, setActiveTab] = useState<ServiceType>('practicas');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Escuchar cambios en el hash de la URL para cambiar la pestaña
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#practicas-tab') {
        setActiveTab('practicas');
        setCurrentIndex(0);
      } else if (hash === '#industrias-tab') {
        setActiveTab('industrias');
        setCurrentIndex(0);
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

  // Reset current index when changing tabs
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const currentServices = servicesData[activeTab] as ServiceData[];
  const totalSlides = currentServices.length;

  // Pausar autoplay cuando el usuario interactúa
  const pauseAutoplay = () => {
    setIsAutoplayPaused(true);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    
    // Reanudar después de 8 segundos de inactividad
    setTimeout(() => {
      setIsAutoplayPaused(false);
    }, 8000);
  };

  // Autoplay functionality
  useEffect(() => {
    if (isAutoplayPaused || totalSlides === 0) return;

    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % totalSlides;
          return nextIndex;
        });
      }, 4000); // Cambiar cada 4 segundos
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    startAutoplay();

    return () => {
      stopAutoplay();
    };
  }, [totalSlides, isAutoplayPaused]);

  // Color dinámico según la tab activa
  const titleColor = activeTab === 'practicas' ? '#40B637' : '#921B95';

  // Función para manejar la apertura del modal
  const handleViewMoreClick = (service: ServiceData) => {
    onViewMore({
      ...service,
      category: activeTab as 'practicas' | 'industrias'
    });
  };

  // Navigation functions
  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      pauseAutoplay();
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    pauseAutoplay();
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    pauseAutoplay();
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      pauseAutoplay();
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    } else if (isRightSwipe) {
      pauseAutoplay();
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  return (
    <section className="bg-white py-16 px-4 block md:hidden">
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
              onClick={() => {
                pauseAutoplay();
                setActiveTab('practicas');
              }}
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
              onClick={() => {
                pauseAutoplay();
                setActiveTab('industrias');
              }}
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

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center border border-gray-200 transition-all duration-200 hover:shadow-xl"
            style={{
              color: titleColor,
              marginLeft: '-20px'
            }}
            disabled={currentIndex === 0}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M15 18L9 12L15 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center border border-gray-200 transition-all duration-200 hover:shadow-xl"
            style={{
              color: titleColor,
              marginRight: '-20px'
            }}
            disabled={currentIndex === totalSlides - 1}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M9 18L15 12L9 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Slider Wrapper */}
          <div 
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {currentServices.map((service, index) => (
                <div key={`${activeTab}-${index}`} className="w-full flex-shrink-0 px-4">
                  <CardService
                    iconPath={service.iconPath}
                    title={service.title}
                    subtitle={service.subtitle}
                    content={service.content}
                    titleColor={titleColor}
                    onViewMore={() => handleViewMoreClick(service)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {currentServices.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="w-2 h-2 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: index === currentIndex ? titleColor : '#D1D5DB'
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <div 
            className="text-center mt-4"
            style={{
              fontFamily: 'Mulish',
              fontWeight: 500,
              fontSize: '14px',
              color: '#6B7280'
            }}
          >
            {currentIndex + 1} de {totalSlides}
          </div>
        </div>
      </div>
    </section>
  );
}
