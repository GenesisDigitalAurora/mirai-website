import { useEffect } from 'react';
import Image from 'next/image';
import { getServiceDetailComponent } from './ServiceDetails';

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    iconPath: string;
    title: string;
    subtitle?: string;
    content: string;
    detailedContent?: string;
    partners?: string[];
    category?: 'practicas' | 'industrias';
    footerText?: string;
  } | null;
}

export default function ServiceDetailModal({ isOpen, onClose, service }: ServiceDetailModalProps) {
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

  if (!isOpen || !service) return null;

  // Color dinámico según la categoría
  const headerColor = service.category === 'practicas' ? '#40B637' : '#921B95';
  const footerColor = '#921B95'; // Siempre morado según especificación

  // Limpiar el título de markdown
  const cleanTitle = service.title.replace(/\*\*/g, '');

  // Texto por defecto para el footer
  const defaultFooterText = "En MIRAI Abogados, estamos listos para apoyarte en <strong>cualquier tema jurídico</strong> que necesites. <strong>¿Cómo podemos ayudarte a alcanzar tus objetivos legales?</strong>";
  
  // Usar el texto personalizado o el por defecto
  const footerText = service.footerText || defaultFooterText;

  return (
    <>
      {/* Overlay de fondo */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose} style={{backgroundColor: 'rgba(0, 0, 0, 0.8)', top: '0px', left: '0px', right: '0px', bottom: '0px'}}
      >
        {/* Modal Container */}
        <div 
          className="relative bg-white rounded-2xl shadow-2xl max-h-[95vh] overflow-hidden transition-all duration-300 ease-out"
          style={{
            width: '100%',
            maxWidth: '1200px',
            minWidth: 'min(900px, 95vw)',
            animation: isOpen ? 'modalEnter 0.3s ease-out' : 'modalExit 0.2s ease-in',
            transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
            opacity: isOpen ? 1 : 0
          }}
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Header */}
          <div 
            className="relative"
            style={{
              backgroundColor: headerColor,
              padding: '32px 40px',
              animation: isOpen ? 'slideInTop 0.4s ease-out 0.1s both' : 'none'
            }}
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer"
              aria-label="Cerrar modal"
            >
              <Image
                src="/close_btn.svg"
                alt="Cerrar"
                width={26}
                height={26}
                className="w-26 h-26"
              />
            </button>



            {/* Título */}
            <h1 
              className="mb-2 text-white"
              style={{
                fontFamily: 'Mulish',
                fontWeight: 900,
                fontSize: 'clamp(24px, 4vw, 32px)',
                lineHeight: '120%',
                letterSpacing: '0%',
                marginTop: '0'
              }}
            >
              {cleanTitle}
            </h1>

            {/* Subtítulo */}
            {service.subtitle && (
              <p 
                className="text-white opacity-90"
                style={{
                  fontFamily: 'Mulish',
                  fontWeight: 400,
                  fontSize: 'clamp(16px, 3vw, 18px)',
                  lineHeight: '130%',
                  letterSpacing: '0%'
                }}
              >
                {service.subtitle}
              </p>
            )}
          </div>

          {/* Body */}
          <div 
            className="bg-white overflow-y-auto py-10 px-30"
            style={{
              maxHeight: 'calc(70vh - 200px)', // Ajustar según header y footer
              animation: isOpen ? 'slideInBody 0.5s ease-out 0.2s both' : 'none'
            }}
          >
            {/* Descripción principal */}
            <div className="mb-8">
                              
                {/* Contenido detallado adicional */}
                {service.detailedContent && (() => {
                  // Si detailedContent es un nombre de componente, renderizar el componente
                  const DetailComponent = getServiceDetailComponent(service.detailedContent);
                  
                  if (DetailComponent) {
                    return <DetailComponent />;
                  }
                  
                  // Si no es un componente, renderizar como HTML (fallback)
                  return (
                    <div 
                      className="service-detailed-content"
                      style={{
                        fontFamily: 'Mulish',
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        lineHeight: '150%',
                        color: '#1E1E1E',
                        textAlign: 'justify'
                      }}
                      dangerouslySetInnerHTML={{ __html: service.detailedContent }}
                    />
                  );
                })()}
            </div>
          </div>
        {/* Sección de Socios */}
        <div className="p-5 bg-gray-100 flex items-center gap-2">
            
            <h3 
              style={{
                fontFamily: 'Mulish',
                fontWeight: 700,
                fontSize: 'clamp(16px, 3vw, 18px)',
                lineHeight: '130%',
                color: '#1E1E1E'
              }}
            >
              Socios:
            </h3>
            
            
            {service.partners && service.partners.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {service.partners.map((partner, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center justify-between px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
                    style={{
                      minWidth: '140px'
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: 'Mulish',
                        fontWeight: 500,
                        fontSize: 'clamp(13px, 2vw, 15px)',
                        lineHeight: '120%',
                        letterSpacing: '0%',
                        color: '#921B95'
                      }}
                    >
                      {partner}
                    </span>
                    <div className="ml-2 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                      <Image
                        src="/ArrowUpMembrers.svg"
                        alt="Ver perfil"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p 
                className="text-gray-500 italic"
                style={{
                  fontFamily: 'Mulish',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: '150%'
                }}
              >
                No hay socios asignados para este servicio.
              </p>
            )}
          </div>

          {/* Footer */}
          <div 
            className="flex items-center gap-6 p-0"
            style={{
              backgroundColor: footerColor,
              animation: isOpen ? 'slideInBottom 0.4s ease-out 0.3s both' : 'none'
            }}
          >
            {/* Imagen representativa */}
            <div className="flex-shrink-0">
              <div 
                className="flex items-center justify-center text-white font-bold text-xl "
              >
                <Image
                  src="/MIRAI_DetailcardImage.webp"
                  alt="MIRAI Logo"
                  width={383}
                  height={117}
                />
              </div>
            </div>

            {/* Texto del footer */}
            <div className="flex-1 p-0 box-border">
              <p 
                className="text-white"
                style={{
                  fontFamily: 'Mulish',
                  fontWeight: 600,
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: '140%'
                }}
                dangerouslySetInnerHTML={{ __html: footerText }}
              />
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
        
        /* Estilos para contenido HTML dentro del modal */
        .service-content h1,
        .service-content h2,
        .service-content h3,
        .service-content h4,
        .service-content h5,
        .service-content h6,
        .service-detailed-content h1,
        .service-detailed-content h2,
        .service-detailed-content h3,
        .service-detailed-content h4,
        .service-detailed-content h5,
        .service-detailed-content h6 {
          font-family: 'Mulish', sans-serif;
          font-weight: 700;
          color: #1E1E1E;
          margin: 1em 0 0.5em 0;
          line-height: 1.3;
        }
        
        .service-content h1,
        .service-detailed-content h1 {
          font-size: clamp(20px, 3vw, 24px);
          color: #921B95;
        }
        
        .service-content h2,
        .service-detailed-content h2 {
          font-size: clamp(18px, 2.5vw, 20px);
          color: #40B637;
        }
        
        .service-content h3,
        .service-detailed-content h3 {
          font-size: clamp(16px, 2vw, 18px);
        }
        
        .service-content p,
        .service-detailed-content p {
          margin: 0.75em 0;
          line-height: 1.6;
        }
        
        .service-content ul,
        .service-content ol,
        .service-detailed-content ul,
        .service-detailed-content ol {
          margin: 1em 0;
          padding-left: 1.5em;
        }
        
        .service-content li,
        .service-detailed-content li {
          margin: 0.5em 0;
          line-height: 1.5;
        }
        
        .service-content strong,
        .service-content b,
        .service-detailed-content strong,
        .service-detailed-content b {
          font-weight: 700;
          color: #921B95;
        }
        
        .service-content em,
        .service-content i,
        .service-detailed-content em,
        .service-detailed-content i {
          font-style: italic;
          color: #40B637;
        }
        
        .service-content a,
        .service-detailed-content a {
          color: #40B637;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        
        .service-content a:hover,
        .service-detailed-content a:hover {
          color: #921B95;
          text-decoration: underline;
        }
        
        .service-content blockquote,
        .service-detailed-content blockquote {
          border-left: 4px solid #40B637;
          padding-left: 1em;
          margin: 1em 0;
          font-style: italic;
          background: #f8f9fa;
          padding: 1em;
          border-radius: 4px;
        }
        
        @media (max-width: 768px) {
          .modal-container {
            height: 95vh !important;
            width: 95vw !important;
            max-width: none !important;
          }
          
          .modal-body {
            max-height: calc(95vh - 180px) !important;
            overflow-y: auto !important;
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
