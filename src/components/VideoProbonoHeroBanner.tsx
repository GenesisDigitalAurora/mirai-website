import { useEffect, useRef } from 'react';

export default function VideoProbonoHeroBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Asegurar que el video se reproduzca automáticamente
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Error al reproducir video automáticamente:', error);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-[50vh] md:h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline // Importante para móviles
        preload="metadata"
        style={{ zIndex: 1 }}
      >
        <source src="/Mirai_Probono_Video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Overlay oscuro para mejorar legibilidad */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 pointer-events-none"
        style={{ 
          zIndex: 2,
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}
      ></div>

      {/* Contenido de texto */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        style={{ zIndex: 3 }}
      >
        {/* Título principal */}
        <h1
          className="mb-4"
          style={{
            fontFamily: 'Mulish, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(32px, 8vw, 80px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#40B637', // Verde de la empresa
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          COMPROMISO MIRAI
        </h1>

        {/* Subtítulo */}
        <p
          style={{
            fontFamily: 'Mulish, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(18px, 4vw, 32px)',
            lineHeight: '120%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#ffffff',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
            maxWidth: '800px'
          }}
        >
          Apoyo Legal Sin Fines de Lucro
        </p>
      </div>
    </section>
  );
}
