import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import VideoProbonoHeroBanner from '@/components/VideoProbonoHeroBanner';
import ProcessSlider from '@/components/ProcessSlider';
import ObjectiveSection from '@/components/ObjectiveSection';

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
        
        <Header />

        <VideoProbonoHeroBanner />

        <div className="max-w-6xl mx-auto px-4 md:px-0 py-20 space-y-6 text-black text-center leading-relaxed text-base md:text-lg">
          <p>
            Nuestro Programa <b style={{ color: '#921B95' }}>Compromiso Mirai</b> busca apoyar a Organizaciones de la Sociedad Civil, emprendedores sociales y proyectos con impacto positivo en México, brindándoles asesoría legal necesaria para que puedan enfocarse en cumplir su misión sin que los temas legales se conviertan en un obstáculo. <b>Creemos que el derecho es una herramienta para transformar la realidad y abrir oportunidades, hacemos esta labor sin fines de lucro</b>.
          </p>

          <p>
            En Mirai Abogados sabemos que detrás de cada proyecto hay personas con visión, esfuerzo y un deseo de generar un mejor futuro. Con nuestro <b style={{ color: '#921B95' }}>trabajo pro bono</b>, buscamos fortalecerlos, darles certeza jurídica y acompañarlos en la construcción de organizaciones sólidas, transparentes y sostenibles.
          </p>

          <p>
            De manera excepcional, y tras un análisis del caso, también podemos brindar asesoría a personas físicas que acrediten la falta de recursos económicos para acceder a servicios legales.
            </p>

        </div>

        {/* Process Slider */}
        <ProcessSlider />

        {/* Objective Section */}
        <ObjectiveSection />

        {/* Footer */}
        <Footer />

        {/* WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </>
  );
}
