import { useState, useRef, useEffect } from 'react';
import CardMember from './CardMember';
import teamData from '@/data/team.json';

interface TeamMember {
  id: number;
  photo: string;
  name: string;
  position: string;
  email?: string;
  phone?: string;
  bio?: string;
  hitosProf?: string[];
  practicas?: string[];
  industrias?: string[];
  footerText?: string;
}

interface TeamSectionMobileProps {
  onViewMember?: (member: TeamMember) => void;
}

export default function TeamSectionMobile({ onViewMember }: TeamSectionMobileProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Mostrar solo las primeras 12 personas (como en desktop)
  const teamMembers = teamData.teamMembers.slice(0, 12) as TeamMember[];
  const totalSlides = teamMembers.length;

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
          className="mb-4 text-center"
          style={{
            fontFamily: 'Mulish',
            fontWeight: 700,
            fontSize: 'clamp(24px, 4vw, 32px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#921B95'
          }}
        >
          Equipo
        </h2>

        {/* Línea horizontal verde */}
        <div className="flex justify-center mb-8">
          <hr 
            className="border-0"
            style={{
              width: '80px',
              height: '3px',
              backgroundColor: '#40B637',
              borderRadius: '2px'
            }}
          />
        </div>

        {/* Texto Descriptivo */}
        <div className="mb-12">
          <p 
            className="text-center max-w-4xl mx-auto"
            style={{
              fontFamily: 'Mulish',
              fontWeight: 400,
              fontSize: 'clamp(16px, 2.5vw, 18px)',
              lineHeight: '150%',
              letterSpacing: '0%',
              color: '#000000'
            }}
          >
            En Mirai Abogados, contamos con un equipo de profesionales altamente capacitados y comprometidos con la excelencia en el servicio legal. Nuestros miembros combinan una vasta experiencia en diversas áreas del derecho con un enfoque innovador que integra herramientas digitales para ofrecer soluciones preventivas y personalizadas. Liderados por socios expertos, nos dedicamos a proteger los intereses de nuestros clientes en un entorno jurídico complejo y en constante evolución.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center border border-gray-200 transition-all duration-200 hover:shadow-xl"
            style={{
              color: '#40B637',
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
              color: '#40B637',
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
              {teamMembers.map((member) => (
                <div key={member.id} className="w-full flex-shrink-0 px-4">
                  <CardMember
                    photo={member.photo}
                    name={member.name}
                    position={member.position}
                    onClick={() => onViewMember?.(member)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="w-2 h-2 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: index === currentIndex ? '#40B637' : '#D1D5DB'
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
