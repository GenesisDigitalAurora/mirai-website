import { useState, useEffect, useRef } from 'react';

interface StatItem {
  number: number;
  label: string;
  prefix?: string;
}

interface CounterProps {
  end: number;
  prefix?: string;
  duration?: number;
}

// Hook para animación de contador
function useCountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Usar una función de easing más suave y natural
      const easeOutQuint = 1 - Math.pow(1 - progress, 2.5);
      let currentCount = Math.ceil(easeOutQuint * end);
      
      // Asegurar que llegue al número final sin pausa
      if (progress >= 0.9 || currentCount >= end) {
        currentCount = end;
      }
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return { count, elementRef };
}

// Componente de contador individual
function Counter({ end, prefix = '', duration = 2000 }: CounterProps) {
  const { count, elementRef } = useCountUp({ end, duration });

  return (
    <div ref={elementRef}>
      <span
        style={{
          fontFamily: 'Mulish',
          fontWeight: 900,
          fontSize: 'clamp(50px, 8vw, 75px)', // Responsive
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#40B637'
        }}
      >
        {prefix}{count.toLocaleString()}
      </span>
    </div>
  );
}

export default function StatsSection() {
  const stats: StatItem[] = [
    { number: 10, label: 'Años de experiencia', prefix: '+' },
    { number: 20, label: 'Soluciones', prefix: '+' },
    { number: 100, label: 'Casos de éxito', prefix: '+' },
    { number: 20, label: 'Asociados' }
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Grid de estadísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Separador vertical para desktop (excepto el último) */}
              <div className="relative">
                {/* Número animado */}
                <div className="mb-4">
                  <Counter 
                    end={stat.number} 
                    prefix={stat.prefix} 
                    duration={1800 + index * 100} // Duración más rápida y ligeramente diferente para cada uno
                  />
                </div>
                
                {/* Título */}
                <h3
                  style={{
                    fontFamily: 'Mulish',
                    fontWeight: 400,
                    fontSize: 'clamp(18px, 3vw, 24px)', // Responsive
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: '#1E1E1E'
                  }}
                >
                  {stat.label}
                </h3>

                {/* Separador vertical para desktop */}
                {index < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-px h-24 bg-gray-300"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
