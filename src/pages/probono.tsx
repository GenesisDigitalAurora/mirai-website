import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ProBono() {
  return (
    <>
      <Head>
        <title>Pro Bono - MIRAI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Programa Pro Bono de MIRAI - Apoyo legal para organizaciones sociales y proyectos de impacto positivo en México" />
        <meta property="og:title" content="Pro Bono - MIRAI" />
        <meta property="og:description" content="Programa Pro Bono de MIRAI - Apoyo legal para organizaciones sociales y proyectos de impacto positivo en México" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white" style={{ fontFamily: 'Mulish, sans-serif' }}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Título Principal */}
            <div className="text-center mb-12">
              <h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: '#921B95' }}
              >
                Nueva Sección
              </h1>
              
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
            </div>

            {/* Contenido Principal */}
            <div className="space-y-8">
              
              {/* Título Pro Bono */}
              <h2 
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#921B95' }}
              >
                Trabajo Pro Bono
              </h2>

              {/* Contenido Principal */}
              <div className="space-y-6 text-black leading-relaxed text-base md:text-lg">
                <p>
                  En Mirai Abogados creemos que el derecho es una herramienta para transformar la realidad y abrir oportunidades. Nuestro compromiso pro bono busca apoyar a Organizaciones de la Sociedad Civil, emprendedores sociales y proyectos con impacto positivo en México, brindándoles la asesoría legal necesaria para que puedan enfocarse en cumplir su misión sin que los temas legales se conviertan en un obstáculo.
                </p>

                <p>
                  Sabemos que detrás de cada proyecto hay personas con visión, esfuerzo y un deseo de generar un mejor futuro. Con nuestro trabajo pro bono, buscamos fortalecerlos, darles certeza jurídica y acompañarlos en la construcción de organizaciones sólidas, transparentes y sostenibles.
                </p>

                <p>
                  De manera excepcional, y tras un análisis del caso, también podemos brindar asesoría a personas físicas que acrediten la falta de recursos económicos para acceder a servicios legales.
                </p>

                {/* Sección ¿Cómo funciona? */}
                <div className="mt-10">
                  <h3 
                    className="text-xl md:text-2xl font-bold mb-6"
                    style={{ color: '#921B95' }}
                  >
                    ¿Cómo funciona?
                  </h3>

                  {/* Lista numerada */}
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <span 
                        className="mr-4 mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: '#40B637' }}
                      >
                        1
                      </span>
                      <div>
                        <h4 className="font-bold text-lg mb-2" style={{ color: '#921B95' }}>
                          Solicitud:
                        </h4>
                        <p className="text-gray-700">
                          El interesado deberá el breve formato de aplicación, disponible más adelante.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <span 
                        className="mr-4 mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: '#40B637' }}
                      >
                        2
                      </span>
                      <div>
                        <h4 className="font-bold text-lg mb-2" style={{ color: '#921B95' }}>
                          Revisión inicial:
                        </h4>
                        <p className="text-gray-700">
                          Un miembro de nuestro equipo se pondrá en contacto para conocer más detalles sobre el proyecto y los retos legales que enfrenta.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <span 
                        className="mr-4 mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: '#40B637' }}
                      >
                        3
                      </span>
                      <div>
                        <h4 className="font-bold text-lg mb-2" style={{ color: '#921B95' }}>
                          Evaluación:
                        </h4>
                        <p className="text-gray-700">
                          El caso será presentado a nuestro comité pro bono, quien definirá la viabilidad del apoyo y hará las recomendaciones necesarias.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <span 
                        className="mr-4 mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: '#40B637' }}
                      >
                        4
                      </span>
                      <div>
                        <h4 className="font-bold text-lg mb-2" style={{ color: '#921B95' }}>
                          Asignación:
                        </h4>
                        <p className="text-gray-700">
                          Una vez aprobado, un abogado o equipo especializado de Mirai será designado para acompañar al beneficiario según sus necesidades legales.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <span 
                        className="mr-4 mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: '#40B637' }}
                      >
                        5
                      </span>
                      <div>
                        <h4 className="font-bold text-lg mb-2" style={{ color: '#921B95' }}>
                          Cobertura de costos:
                        </h4>
                        <p className="text-gray-700">
                          Los honorarios de los abogados son absorbidos por la firma. Los gastos externos (protocolización de documentos, traslados u otros costos asociados) deberán ser cubiertos por el beneficiario.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nuestro objetivo */}
                <div className="mt-12">
                  <h3 
                    className="text-xl md:text-2xl font-bold mb-6"
                    style={{ color: '#921B95' }}
                  >
                    Nuestro objetivo
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Queremos que más proyectos con impacto positivo crezcan con bases sólidas, protegiendo el esfuerzo de quienes los lideran y asegurando que su contribución a la sociedad se mantenga en el tiempo. El derecho no debe ser una barrera, sino un puente hacia el cambio.
                  </p>
                </div>
              </div>
            </div>

            {/* Información de contacto destacada */}
            <section className="mt-16">
              <div 
                className="p-6 md:p-8 rounded-lg text-center"
                style={{ backgroundColor: '#921B95' }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  ¿Interesado en nuestro programa Pro Bono?
                </h3>
                <p className="text-white mb-6 text-sm md:text-base">
                  Contáctanos para conocer más sobre cómo podemos apoyar tu proyecto de impacto social.
                </p>
                <a
                  href="mailto:contacto@mirai.legal"
                  className="inline-block bg-white text-[#921B95] px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm md:text-base"
                >
                  contacto@mirai.legal
                </a>
              </div>
            </section>

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
