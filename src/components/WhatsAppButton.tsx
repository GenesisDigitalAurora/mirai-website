import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function WhatsAppButton() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [typingAnimation, setTypingAnimation] = useState(false);

  // Mensaje predefinido para WhatsApp
  const phoneNumber = '+5215610552829';
  const message = encodeURIComponent(
    '¡Hola! Me gustaría solicitar una asesoría legal. ¿Podrían ayudarme con información sobre sus servicios?'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    let followTimer: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollPosition);
      
      // Detectar cuando el usuario está haciendo scroll
      setIsScrolling(true);

      // Limpiar los timers anteriores
      clearTimeout(scrollTimer);
      clearTimeout(followTimer);

      // Después de 200ms sin scroll, considerar que el usuario se detuvo
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
        setLastScrollPosition(currentScrollY);
        
        // Si el scroll fue muy largo (más de 300px), esperar 800ms antes de seguir
        if (scrollDifference > 300) {
          followTimer = setTimeout(() => {
            setLastScrollPosition(currentScrollY);
          }, 800);
        }
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
      clearTimeout(followTimer);
    };
  }, [lastScrollPosition]);

  const handleWhatsAppClick = () => {
    if (!isChatOpen) {
      setIsChatOpen(true);
      // Simular animación de escritura después de abrir
      setTimeout(() => {
        setTypingAnimation(true);
      }, 800);
      setTimeout(() => {
        setTypingAnimation(false);
      }, 2500);
    } else {
      // Si ya está abierto, ir directamente a WhatsApp
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
    setTypingAnimation(false);
  };

  return (
    <div
      className={`fixed z-50 transition-all duration-700 ease-out ${
        isScrolling 
          ? 'left-4 opacity-70' 
          : 'left-6 opacity-100'
      }`}
      style={{
        bottom: '24px',
        transform: 'translateY(0)',
        transitionDelay: isScrolling ? '0ms' : '500ms'
      }}
    >
      {/* Ventana de Chat - Solo visible cuando isChatOpen es true */}
      {isChatOpen && (
        <div 
          className={`absolute bottom-20 left-0 w-80 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 ${
            isChatOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ 
            animation: 'slideUpFade 0.3s ease-out',
            maxHeight: '400px'
          }}
        >
          {/* Header del Chat */}
          <div 
            className="flex items-center justify-between p-4 text-white"
            style={{ backgroundColor: '#128C7E' }}
          >
            <div className="flex items-center gap-3">
              {/* Avatar del equipo */}
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: '#075E54' }}
              >
                M
              </div>
              <div>
                <h4 
                  className="font-semibold text-sm"
                  style={{
                    fontFamily: 'Mulish',
                    fontSize: '14px',
                    fontWeight: 600
                  }}
                >
                  Equipo de MIRAI
                </h4>
                <p 
                  className="text-xs opacity-90"
                  style={{
                    fontFamily: 'Mulish',
                    fontSize: '11px'
                  }}
                >
                  En línea
                </p>
              </div>
            </div>
            
            {/* Botón cerrar */}
            <button
              onClick={handleChatClose}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors duration-200"
              aria-label="Cerrar chat"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Contenido del Chat */}
          <div className="p-4 space-y-3" style={{ minHeight: '200px', maxHeight: '280px' }}>
            {/* Mensaje de saludo */}
            <div className="flex items-start gap-2">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: '#075E54' }}
              >
                M
              </div>
              <div 
                className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-[85%]"
                style={{
                  animation: 'messageSlideIn 0.4s ease-out 0.6s both'
                }}
              >
                <p 
                  className="text-sm text-gray-800"
                  style={{
                    fontFamily: 'Mulish',
                    fontSize: '13px',
                    lineHeight: '1.4'
                  }}
                >
                  ¡Hola! 👋
                </p>
              </div>
            </div>

            {/* Mensaje principal */}
            <div className="flex items-start gap-2">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: '#075E54' }}
              >
                M
              </div>
              <div 
                className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-[85%]"
                style={{
                  animation: 'messageSlideIn 0.4s ease-out 1s both'
                }}
              >
                <p 
                  className="text-sm text-gray-800"
                  style={{
                    fontFamily: 'Mulish',
                    fontSize: '13px',
                    lineHeight: '1.4'
                  }}
                >
                  ¿Cómo te podemos ayudar?
                </p>
              </div>
            </div>

            {/* Animación de escritura */}
            {typingAnimation && (
              <div className="flex items-start gap-2">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: '#075E54' }}
                >
                  M
                </div>
                <div className="bg-gray-100 rounded-lg rounded-tl-none p-3">
                  <div className="flex space-x-1">
                    <div 
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    ></div>
                    <div 
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    ></div>
                    <div 
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer con botón de WhatsApp */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <button
              onClick={() => window.open(whatsappUrl, '_blank', 'noopener,noreferrer')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg"
              style={{
                backgroundColor: '#25D366',
                fontFamily: 'Mulish',
                fontSize: '14px'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.688"/>
              </svg>
              Escribenos por WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Botón de WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className={`relative group flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isScrolling ? 'scale-90' : 'scale-100 hover:scale-110'
        }`}
        style={{
          backgroundColor: '#25D366',
          width: '60px',
          height: '60px'
        }}
        aria-label="Contactar por WhatsApp"
      >
        {/* Imagen de WhatsApp */}
        <Image
          src="/whatsapp.webp"
          alt="WhatsApp"
          width={32}
          height={32}
          className="w-8 h-8"
        />

        {/* Efecto de pulso cuando está estático */}
        {!isScrolling && !isChatOpen && (
          <div 
            className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{ backgroundColor: '#25D366' }}
          />
        )}

        {/* Tooltip opcional - solo mostrar si el chat no está abierto */}
        {!isChatOpen && (
          <div 
            className={`absolute left-full ml-3 px-3 py-2 rounded-lg text-sm font-medium text-white whitespace-nowrap transition-all duration-300 ${
              isScrolling ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover:opacity-100'
            }`}
            style={{ backgroundColor: '#1f2937' }}
          >
            ¡Solicita tu asesoría!
            <div 
              className="absolute top-1/2 right-full transform -translate-y-1/2 w-0 h-0"
              style={{
                borderRight: '6px solid #1f2937',
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent'
              }}
            />
          </div>
        )}
      </button>

      {/* Animaciones CSS */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideUpFade {
          from {
            transform: translateY(20px) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes messageSlideIn {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        button {
          animation: slideInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
