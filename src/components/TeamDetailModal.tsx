import { useEffect } from 'react';
import Image from 'next/image';

interface TeamDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: {
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
  } | null;
}

export default function TeamDetailModal({ isOpen, onClose, member }: TeamDetailModalProps) {
  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !member) return null;

  // Color del header - siempre morado para miembros del equipo
  const headerColor = '#921B95';
  const footerColor = '#921B95';

  // Texto por defecto para el footer
  const defaultFooterText = "En MIRAI Abogados, nuestro equipo está <strong>comprometido con la excelencia</strong> y listo para brindarte el mejor servicio legal. <strong>¿Te gustaría trabajar directamente con este profesional?</strong>";
  
  // Usar el texto personalizado o el por defecto
  const footerText = member.footerText || defaultFooterText;

  return (
    <>
      {/* Overlay de fondo */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose} 
        style={{backgroundColor: 'rgba(0, 0, 0, 0.8)', top: '0px', left: '0px', right: '0px', bottom: '0px'}}
      >
        {/* Modal Container */}
        <div 
          className="relative bg-white rounded-2xl shadow-2xl max-h-[95vh] overflow-hidden transition-all duration-300 ease-out flex team-modal-container"
          style={{
            width: '100%',
            maxWidth: '1400px',
            minWidth: 'min(1000px, 95vw)',
            minHeight: '600px',
            animation: isOpen ? 'modalEnter 0.3s ease-out' : 'modalExit 0.2s ease-in',
            transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
            opacity: isOpen ? 1 : 0
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón cerrar - Absoluto en la esquina superior derecha */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer z-10"
            aria-label="Cerrar modal"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <Image
              src="/close_btn.svg"
              alt="Cerrar"
              width={26}
              height={26}
              className="w-26 h-26"
            />
          </button>

          {/* COLUMNA 1: Foto - Solo visible en desktop */}
          <div 
            className="flex-shrink-0 relative team-photo-column hidden md:block"
            style={{
              width: '40%',
              animation: isOpen ? 'slideInLeft 0.4s ease-out 0.1s both' : 'none'
            }}
          >
            <Image
              src={member.photo}
              alt={member.name}
              width={400}
              height={600}
              className="object-cover team-photo"
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderTopLeftRadius: '1rem',
                borderBottomLeftRadius: '1rem'
              }}
            />
          </div>

          {/* COLUMNA 2: Contenido (Header + Body + Footer) */}
          <div 
            className="flex-1 flex flex-col team-content-column"
            style={{
              animation: isOpen ? 'slideInRight 0.4s ease-out 0.2s both' : 'none'
            }}
          >
            {/* Header de la segunda columna */}
            <div 
              className="relative px-4 py-6 md:px-10 md:py-8"
              style={{
                backgroundColor: headerColor,
                flexShrink: 0
              }}
            >
              {/* Nombre */}
              <h1 
                className="mb-2 text-white text-lg md:text-2xl lg:text-3xl"
                style={{
                  fontFamily: 'Mulish',
                  fontWeight: 900,
                  lineHeight: '120%',
                  letterSpacing: '0%',
                  marginTop: '0'
                }}
              >
                {member.name}
              </h1>

              {/* Posición */}
              <p 
                className="text-white opacity-90 mb-4 text-sm md:text-base lg:text-lg"
                style={{
                  fontFamily: 'Mulish',
                  fontWeight: 600,
                  lineHeight: '130%',
                  letterSpacing: '0%'
                }}
              >
                {member.position} 
                {member.email && (
                  <span>&nbsp;●&nbsp;
                    {member.email}
                  </span>
                )}
                {member.phone && (
                  <span>&nbsp;●&nbsp;
                    {member.phone}
                  </span>
                )}
              </p>
            </div>

            {/* Body de la segunda columna */}
            <div 
              className="bg-white overflow-y-auto flex-1 px-4 py-6 md:px-10 md:py-8"
            >
              {/* Biografía */}
              {member.bio && (
                <div className="mb-8">
                  <h2 
                    className="mb-4 text-base md:text-lg lg:text-xl"
                    style={{
                      fontFamily: 'Mulish',
                      fontWeight: 700,
                      lineHeight: '130%',
                      color: '#921B95'
                    }}
                  >
                    BIOGRAFÍA
                  </h2>
                  <p 
                    className="text-sm md:text-base"
                    style={{
                      fontFamily: 'Mulish',
                      fontWeight: 400,
                      lineHeight: '150%',
                      color: '#1E1E1E',
                      textAlign: 'justify'
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              )}

              {/* Hitos Profesionales */}
              {member.hitosProf && member.hitosProf.length > 0 && (
                <div className="mb-8">
                  <h2 
                    className="mb-4 text-base md:text-lg lg:text-xl"
                    style={{
                      fontFamily: 'Mulish',
                      fontWeight: 700,
                      lineHeight: '130%',
                      color: '#921B95'
                    }}
                  >
                    HITOS PROFESIONALES
                  </h2>
                  <ul className="space-y-3">
                    {member.hitosProf.map((hito, index) => (
                      <li 
                        key={index}
                        className="flex items-start text-sm md:text-base"
                        style={{
                          fontFamily: 'Mulish',
                          fontWeight: 400,
                          lineHeight: '150%',
                          color: '#1E1E1E'
                        }}
                      >
                        <span 
                          className="inline-block w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                          style={{ backgroundColor: '#921B95' }}
                        ></span>
                        {hito}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Prácticas */}
              {member.practicas && member.practicas.length > 0 && (
                <div className="mb-8">
                  <h2 
                    className="mb-4 text-base md:text-lg lg:text-xl"
                    style={{
                      fontFamily: 'Mulish',
                      fontWeight: 700,
                      lineHeight: '130%',
                      color: '#921B95'
                    }}
                  >
                    PRÁCTICAS
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {member.practicas.map((practica, index) => (
                      <span 
                        key={index}
                        className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 border border-green-200 text-xs md:text-sm"
                        style={{
                          fontFamily: 'Mulish',
                          fontWeight: 500,
                          lineHeight: '120%'
                        }}
                      >
                        {practica}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Industrias */}
              {member.industrias && member.industrias.length > 0 && (
                <div className="mb-8">
                  <h2 
                    className="mb-4 text-base md:text-lg lg:text-xl"
                    style={{
                      fontFamily: 'Mulish',
                      fontWeight: 700,
                      lineHeight: '130%',
                      color: '#921B95'
                    }}
                  >
                    INDUSTRIAS
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {member.industrias.map((industria, index) => (
                      <span 
                        key={index}
                        className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200 text-xs md:text-sm"
                        style={{
                          fontFamily: 'Mulish',
                          fontWeight: 500,
                          lineHeight: '120%'
                        }}
                      >
                        {industria}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer de la segunda columna */}
            <div 
              className="flex items-center gap-6 p-0 flex-shrink-0"
              style={{
                backgroundColor: footerColor
              }}
            >
              {/* Imagen representativa - Solo visible en desktop */}
              <div className="flex-shrink-0 hidden md:block">
                <div className="flex items-center justify-center text-white font-bold text-xl">
                  <Image
                    src="/MIRAI_DetailcardImage.webp"
                    alt="MIRAI Logo"
                    width={383}
                    height={117}
                  />
                </div>
              </div>

              {/* Texto del footer */}
              <div className="flex-1 p-4 md:p-0 box-border">
                <p 
                  className="text-white text-sm md:text-base"
                  style={{
                    fontFamily: 'Mulish',
                    fontWeight: 600,
                    lineHeight: '140%'
                  }}
                  dangerouslySetInnerHTML={{ __html: footerText }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos y animaciones */}
      <style jsx>{`
        @keyframes modalEnter {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(30px);
          }
          50% {
            opacity: 0.8;
            transform: scale(0.98) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes modalExit {
          0% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          100% {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
        }
        
        @keyframes slideInTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInBody {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInBottom {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @media (max-width: 1024px) {
          /* En pantallas menores a 1024px, cambiar a diseño vertical */
          .team-modal-container {
            flex-direction: column !important;
            max-width: 95vw !important;
            max-height: 95vh !important;
          }
          
          .team-photo-column {
            width: 100% !important;
            height: 40vh !important;
            max-height: 40vh !important;
          }
          
          .team-content-column {
            width: 100% !important;
            height: 55vh !important;
            max-height: 55vh !important;
          }
          
          .team-photo {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            border-radius: 1rem 1rem 0 0 !important;
            border-top-left-radius: 1rem !important;
            border-top-right-radius: 1rem !important;
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
          }
        }
        
        @media (max-width: 768px) {
          .team-modal-container {
            max-width: 98vw !important;
            max-height: 98vh !important;
            min-width: unset !important;
          }
          
          .team-photo-column {
            height: 35vh !important;
            max-height: 35vh !important;
          }
          
          .team-content-column {
            height: 60vh !important;
            max-height: 60vh !important;
          }
          
          .team-photo {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            border-radius: 1rem 1rem 0 0 !important;
          }
          
          /* Tipografía más pequeña para móviles */
          h1 {
            font-size: 18px !important;
          }
          
          h2 {
            font-size: 16px !important;
          }
          
          h3 {
            font-size: 14px !important;
          }
          
          p, li {
            font-size: 14px !important;
          }
          
          @keyframes modalEnter {
            0% {
              opacity: 0;
              transform: scale(0.95) translateY(50px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        }
      `}</style>
    </>
  );
}
