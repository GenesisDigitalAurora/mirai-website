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

export default function Home() {
  return (
    <>
      <Head>
        <title>MIRAI - Página Principal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="MIRAI - Sitio web oficial" />
        <meta property="og:title" content="MIRAI - Firma de abogados en México" />
        <meta property="og:description" content="MIRAI - Sitio web oficial" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mirai.com" />
      </Head>

      <div className="min-h-screen bg-white" style={{ fontFamily: 'Mulish, sans-serif' }}>
        {/* Header */}
        <Header />

        {/* Video Banner - 80% height */}
        <main className="relative pt-16 md:pt-20">
          <VideoBanner />
        </main>

        {/* Introduction Section */}
        <IntroSection />

        {/* Statistics Section */}
        <StatsSection />

        {/* About Us Section */}
        <AboutUsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Team Section */}
        <TeamSection />

        {/* News Section */}
        <NewsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Location Section */}
        <LocationSection />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}