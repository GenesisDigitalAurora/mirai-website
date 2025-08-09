import Head from 'next/head';
import Header from '@/components/Header';
import VideoBanner from '@/components/VideoBanner';
import IntroSection from '@/components/IntroSection';
import StatsSection from '@/components/StatsSection';
import AboutUsSection from '@/components/AboutUsSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>MIRAI - Página Principal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="MIRAI -  Firma de abogados en México" />
        <meta property="og:title" content="MIRAI - Firma de abogados en México" />
        <meta property="og:description" content="MIRAI -  Firma de abogados en México" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mirai.com" />
      </Head>

      <div className="min-h-screen bg-white" style={{ fontFamily: 'Mulish, sans-serif' }}>
        {/* Header */}
        <Header />

        {/* Video Banner - 80% height */}
        <main className="relative pt-16 md:pt-17">
          <AnimatedSection animation="fade" duration={1000}>
            <VideoBanner />
          </AnimatedSection>
        </main>

        {/* Introduction Section */}
        <AnimatedSection animation="fadeUp" delay={100}>
          <IntroSection />
        </AnimatedSection>

        {/* Statistics Section */}
        <AnimatedSection animation="fadeUp" delay={150}>
          <StatsSection />
        </AnimatedSection>

        {/* About Us Section */}
        <section id="quienes-somos">
          <AnimatedSection animation="fadeUp" delay={100}>
            <AboutUsSection />
          </AnimatedSection>
        </section>

        {/* Services Section */}
        <section id="practicas">
          <AnimatedSection animation="fadeUp" delay={100}>
            <ServicesSection />
          </AnimatedSection>
        </section>

        {/* Team Section */}
        <section id="equipo">
          <AnimatedSection animation="fadeUp" delay={100}>
            <TeamSection />
          </AnimatedSection>
        </section>

        {/* News Section */}
        <section id="noticias">
          <AnimatedSection animation="fadeUp" delay={100}>
            <NewsSection />
          </AnimatedSection>
        </section>

        {/* Contact Section */}
        <section id="contacto">
          <AnimatedSection animation="fadeUp" delay={100}>
            <ContactSection />
          </AnimatedSection>
        </section>

        {/* Location Section */}
        <AnimatedSection animation="fadeUp" delay={100}>
          <LocationSection />
        </AnimatedSection>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </>
  );
}