import Link from 'next/link';
import SEOMetadata from '@/components/SEOMetadata';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Custom404() {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const quickLinks = [
    { name: '¿Quiénes somos?', href: '/#quienes-somos', description: 'Conoce más sobre MIRAI' },
    { name: 'Prácticas', href: '/#practicas-tab', description: 'Nuestras áreas de especialización' },
    { name: 'Industrias', href: '/#industrias-tab', description: 'Sectores que atendemos' },
    { name: 'Equipo', href: '/#equipo', description: 'Conoce a nuestros abogados' },
    { name: 'Pro Bono', href: '/probono', description: 'Nuestro programa de responsabilidad social' },
    { name: 'Contacto', href: '/#contacto', description: 'Ponte en contacto con nosotros' }
  ];

  return (
    <>
      <SEOMetadata
        title="Página no encontrada - Error 404"
        description="La página que buscas no existe. Explora las secciones principales de MIRAI - Firma de abogados especializada en México."
        url="https://mirai.com/404"
        noIndex={true}
      />

      <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: 'Mulish, sans-serif' }}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Número Grande */}
            <div className="mb-8">
              <h1 
                className="text-8xl sm:text-9xl font-bold mb-4"
                style={{ 
                  color: '#921B95',
                  textShadow: '0 4px 8px rgba(146, 27, 149, 0.2)'
                }}
              >
                404
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-primary-400 to-secondary mx-auto rounded-full"></div>
            </div>

            {/* Mensaje Principal */}
            <div className="mb-12">
              <h2 
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: '#1E1E1E' }}
              >
                Página no encontrada
              </h2>
              <p 
                className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto leading-relaxed"
                style={{ color: '#666666' }}
              >
                Lo sentimos, la página que buscas no existe o ha sido movida. 
                Te invitamos a explorar las secciones principales de MIRAI.
              </p>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={goBack}
                className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                ← Regresar
              </button>
              <Link
                href="/"
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🏠 Ir al Inicio
              </Link>
            </div>

            {/* Enlaces Rápidos */}
            <div className="max-w-5xl mx-auto">
              <h3 
                className="text-2xl font-bold mb-8"
                style={{ color: '#1E1E1E' }}
              >
                Explora nuestras secciones
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="text-left">
                      <h4 
                        className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300"
                        style={{ color: '#1E1E1E' }}
                      >
                        {link.name}
                      </h4>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: '#666666' }}
                      >
                        {link.description}
                      </p>
                      <div className="mt-4 flex items-center text-primary font-medium text-sm">
                        <span>Explorar</span>
                        <svg 
                          className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mensaje de Contacto */}
            <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl border border-primary-100">
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: '#1E1E1E' }}
              >
                ¿Necesitas ayuda?
              </h3>
              <p 
                className="text-base mb-6 max-w-xl mx-auto"
                style={{ color: '#666666' }}
              >
                Si estás buscando algo específico o necesitas asesoría legal, 
                nuestro equipo está listo para ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contacto"
                  className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-600 transition-colors duration-300 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contactar
                </Link>
                <a
                  href="tel:+525555555555"
                  className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Llamar
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </>
  );
}

