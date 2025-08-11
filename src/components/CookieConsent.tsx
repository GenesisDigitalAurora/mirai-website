import { useState, useEffect } from 'react';

interface CookieConsentProps {
  onAccept?: () => void;
  onReject?: () => void;
}

export default function CookieConsent({ onAccept, onReject }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha dado su consentimiento
    const cookieConsent = localStorage.getItem('mirai-cookie-consent');
    if (!cookieConsent) {
      // Mostrar el banner después de un pequeño delay para mejor UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setIsClosing(true);
    setTimeout(() => {
      localStorage.setItem('mirai-cookie-consent', 'accepted');
      setIsVisible(false);
      onAccept?.();
    }, 300);
  };

  const handleReject = () => {
    setIsClosing(true);
    setTimeout(() => {
      localStorage.setItem('mirai-cookie-consent', 'rejected');
      setIsVisible(false);
      onReject?.();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay para móviles */}
      <div 
        className="md:hidden fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div 
          className={`bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full transform transition-all duration-300 ${
            isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          <div className="text-center mb-6">
            <h3 
              className="text-lg mb-3"
              style={{
                fontFamily: 'Mulish',
                fontWeight: 700,
                color: '#921B95'
              }}
            >
              Uso de Cookies
            </h3>
          </div>

          <p 
            className="text-sm text-gray-700 mb-6 leading-relaxed text-left"
            style={{
              fontFamily: 'Mulish',
              fontWeight: 400,
              lineHeight: '150%'
            }}
          >
            Usamos cookies para ofrecerte la mejor experiencia posible en nuestro sitio web. 
            Esto incluye cookies necesarias para el funcionamiento del sitio y para gestionar 
            nuestros objetivos comerciales, así como otras utilizadas exclusivamente para 
            fines estadísticos anónimos y para una navegación más cómoda.
          </p>

          <p 
            className="text-xs text-gray-600 mb-6"
            style={{
              fontFamily: 'Mulish',
              fontWeight: 400,
              lineHeight: '140%'
            }}
          >
            Eres libre de decidir qué categorías deseas permitir. Dependiendo de las 
            configuraciones que elijas, es posible que algunas funciones del sitio web 
            no estén disponibles.
          </p>

          <div className="space-y-3">
            <button
              onClick={handleReject}
              className="w-full py-3 px-4 rounded-xl text-white font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: '#921B95',
                fontFamily: 'Mulish',
                fontWeight: 600
              }}
            >
              Rechazar cookies no esenciales
            </button>
            <button
              onClick={handleAccept}
              className="w-full py-3 px-4 rounded-xl text-white font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: '#40B637',
                fontFamily: 'Mulish',
                fontWeight: 600
              }}
            >
              Aceptar cookies
            </button>
          </div>
        </div>
      </div>

      {/* Banner para desktop */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 z-50 p-4">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 transform transition-all duration-300 ${
              isClosing ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
            }`}
          >
            <div className="flex items-center gap-6">
              {/* Contenido */}
              <div className="flex-1">
                <h3 
                  className="text-xl mb-3"
                  style={{
                    fontFamily: 'Mulish',
                    fontWeight: 700,
                    color: '#921B95'
                  }}
                >
                  Uso de Cookies
                </h3>
                <p 
                  className="text-sm text-gray-700 mb-4 leading-relaxed"
                  style={{
                    fontFamily: 'Mulish',
                    fontWeight: 400,
                    lineHeight: '150%'
                  }}
                >
                  Usamos cookies para ofrecerte la mejor experiencia posible en nuestro sitio web. 
                  Esto incluye cookies necesarias para el funcionamiento del sitio y para gestionar 
                  nuestros objetivos comerciales, así como otras utilizadas exclusivamente para 
                  fines estadísticos anónimos y para una navegación más cómoda. Eres libre de decidir 
                  qué categorías deseas permitir.
                </p>
                <p 
                  className="text-xs text-gray-600"
                  style={{
                    fontFamily: 'Mulish',
                    fontWeight: 400,
                    lineHeight: '140%'
                  }}
                >
                  Dependiendo de las configuraciones que elijas, es posible que algunas funciones 
                  del sitio web no estén disponibles.
                </p>
              </div>

              {/* Botones */}
              <div className="flex flex-col gap-3 flex-shrink-0">
                <button
                  onClick={handleReject}
                  className="px-6 py-3 rounded-xl text-white font-semibold transition-all duration-200 hover:opacity-90 whitespace-nowrap"
                  style={{
                    backgroundColor: '#921B95',
                    fontFamily: 'Mulish',
                    fontWeight: 600
                  }}
                >
                  Rechazar cookies no esenciales
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-3 rounded-xl text-white font-semibold transition-all duration-200 hover:opacity-90 whitespace-nowrap"
                  style={{
                    backgroundColor: '#40B637',
                    fontFamily: 'Mulish',
                    fontWeight: 600
                  }}
                >
                  Aceptar cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
