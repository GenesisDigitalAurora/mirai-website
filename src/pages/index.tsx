import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import VideoBanner from '@/components/VideoBanner';
import IntroSection from '@/components/IntroSection';
import StatsSection from '@/components/StatsSection';
import AboutUsSection from '@/components/AboutUsSection';
import ServicesSection from '@/components/ServicesSection';
import ServicesSectionMobile from '@/components/ServicesSectionMobile';
import TeamSection from '@/components/TeamSection';
import TeamSectionMobile from '@/components/TeamSectionMobile';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServiceDetailModal from '@/components/ServiceDetailModal';
import TeamDetailModal from '@/components/TeamDetailModal';

// Interfaz para los datos del servicio
interface ServiceData {
  iconPath: string;
  title: string;
  subtitle?: string;
  content: string;
  detailedContent?: string;
  partners?: string[];
  category?: 'practicas' | 'industrias';
  footerText?: string;
}

// Interfaz para los datos del miembro del equipo
interface TeamMemberData {
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
}

export default function Home() {
  // Estado global del modal de servicios
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  // Estado global del modal de equipo
  const [selectedMember, setSelectedMember] = useState<TeamMemberData | null>(null);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  // Funciones para manejar el modal de servicios
  const handleViewMore = (service: ServiceData) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  const handleCloseServiceModal = () => {
    setIsServiceModalOpen(false);
    setSelectedService(null);
  };

  // Funciones para manejar el modal de equipo
  const handleViewMember = (member: TeamMemberData) => {
    setSelectedMember(member);
    setIsTeamModalOpen(true);
  };

  const handleCloseTeamModal = () => {
    setIsTeamModalOpen(false);
    setSelectedMember(null);
  };
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
            <div className="w-full">
              <VideoBanner />
            </div>
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
          {/* Desktop Version with Animation */}
          <AnimatedSection animation="fadeUp" delay={100}>
            <ServicesSection onViewMore={handleViewMore} />
          </AnimatedSection>
          
          {/* Mobile Version without Animation */}
          <ServicesSectionMobile onViewMore={handleViewMore} />
        </section>

        {/* Team Section */}
        <section id="equipo">
          {/* Desktop Version with Animation */}
          <AnimatedSection animation="fadeUp" delay={100}>
            <TeamSection onViewMember={handleViewMember} />
          </AnimatedSection>
          
          {/* Mobile Version without Animation */}
          <TeamSectionMobile onViewMember={handleViewMember} />
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

      {/* Service Detail Modal - Global */}
      <ServiceDetailModal
        isOpen={isServiceModalOpen}
        onClose={handleCloseServiceModal}
        service={selectedService}
      />

      {/* Team Detail Modal - Global */}
      <TeamDetailModal
        isOpen={isTeamModalOpen}
        onClose={handleCloseTeamModal}
        member={selectedMember}
      />
    </>
  );
}