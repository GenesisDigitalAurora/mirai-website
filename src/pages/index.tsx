import { useState } from 'react';
import Header from '@/components/Header';
import SEOMetadata from '@/components/SEOMetadata';
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

// Importar datos
import servicesData from '@/data/services.json';
import teamData from '@/data/team.json';

// Función para mapear nombres de servicios entre team.json y services.json
const createServiceMapping = () => {
  const practiceMapping: { [key: string]: string } = {
    // Mapeos exactos que coinciden
    "Contractual": "Contractual",
    "Derecho Corporativo": "Derecho Corporativo",
    "Derecho Familiar": "Derecho Familiar",
    "Derecho Patrimonial": "Derecho Patrimonial",
    "Derecho Inmobiliario": "Derecho Inmobiliario",
    "Derecho Agrario": "Derecho Agrario",
    "Derecho Migratorio": "Derecho Migratorio",
    "Derecho Fiscal": "Derecho Fiscal",
    "Propiedad Intelectual": "Propiedad Intelectual",
    "Corresponsalías": "Corresponsalías",
    "Derecho Ambiental": "Derecho Ambiental",
    "Traducciones Legales": "Traducciones Legales",
    
    // Mapeos que requieren transformación
    "ASG / ESG (Ambiental, Social y de Gobernanza)": "ASG / ESG",
    "Derecho Bancario, Bursátil y Financiero": "Derecho Bancario, Bursátil y Financiero",
    "Ética y Compliance": "Ética y Compliance",
    "Life Sciences y Derecho Regulatorio": "Life Science & Derecho Regulatorio",
    "Derechos del Consumidor (PROFECO y CONDUSEF)": "Derechos del Consumidor",
    "Derecho Administrativo y Constitucional": "Derecho Administrativo y Constitucional",
    "Entretenimiento, deportes e industrias creativas": "Entretenimiento, Deportes e Industrias Creativas",
    "Litigio Civil y Mercantil": "Litigio y Consultoría en Materia Civil y Mercantil",
    "Derecho Laboral": "Derecho Laboral",
    "Comercio Exterior": "Comercio Exterior",
    "Fintech": "Fintech",
    
    // Mapeos adicionales encontrados en los perfiles
    "Fintech, LegalTech y RegTech": "LegalTech",
    "Financiamientos": "Derecho Bancario, Bursátil y Financiero",
    "Derechos del Consumidor (PROFECO) / CONDUSEF": "Derechos del Consumidor",
    "Contratación Civil y Mercantil": "Contractual",
    "Derecho Civil y Mercantil": "Litigio y Consultoría en Materia Civil y Mercantil",
    "Litigio Civil Estratégico": "Litigio y Consultoría en Materia Civil y Mercantil",
    "Regulación y Cumplimiento": "Ética y Compliance"
  };

  const industryMapping: { [key: string]: string } = {
    // Mapeos exactos
    "Automotriz": "Automotriz",
    "Agroindustria": "Agroindustria",
    "FMCG": "FMCG",
    "Farmacéutica": "Farmacéutica",
    "Energía": "Energía",
    "Seguros": "Seguros",
    "Tecnología": "Tecnología",
    "Turismo": "Turismo",
    
    // Mapeos que requieren transformación
    "Alimentos y Bebidas": "Alimentos y Bebidas",
    "Real Estate y Desarrollo Inmobiliario": "Real Estate",
    "Fintech, Bancario y Financiero": "Fintech y Bancos",
    "Seguros y Servicios Financieros": "Seguros",
    "Tecnología y Plataformas Digitales": "Tecnología",
    "Consumo y Bienes de Consumo Empacados (FMCG)": "FMCG",
    "Farmacéutica y Ciencias de la Salud": "Farmacéutica",
    "Turismo y Hospitalidad": "Turismo",
    "Agroindustria y Recursos Naturales": "Agroindustria",
    "Infraestructura y Energía": "Energía",
    "Automotriz y Manufactura Avanzada": "Automotriz",
    "Automotriz y Manufactura": "Automotriz",
    
    // Mapeos adicionales
    "Consumo y Bienes de Consumo_Empacados (FMCG)": "FMCG",
    "ONGs, Fundaciones y Sector Cultural": "ONGs",
    "Empresas familiares y patrimoniales": "Real Estate", // Mejor mapeo disponible
    "Consumo y Servicios al Cliente": "FMCG",
    "Financiera y Banca": "Fintech y Bancos",
    "Telecomunicaciones y Tecnología": "Tecnología",
    "Consumo, Farmacéutica y Salud": "Farmacéutica",
    "Inmobiliario e Infraestructura": "Real Estate",
    "Servicios Financieros y Banca": "Fintech y Bancos"
  };

  return { practiceMapping, industryMapping };
};

const { practiceMapping, industryMapping } = createServiceMapping();

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

  // Función para navegar desde servicio a miembro del equipo
  const handlePartnerClick = (partnerName: string) => {
    // Buscar el miembro por nombre
    const member = teamData.teamMembers.find(m => m.name === partnerName);
    if (member) {
      // Cerrar modal de servicio
      setIsServiceModalOpen(false);
      setSelectedService(null);
      
      // Abrir modal de miembro
      setTimeout(() => {
        setSelectedMember(member);
        setIsTeamModalOpen(true);
      }, 200); // Pequeño delay para una transición suave
    }
  };

  // Función para navegar desde miembro a servicio
  const handleServiceClick = (serviceName: string, category: 'practicas' | 'industrias') => {
    // Usar el mapeo para encontrar el nombre correcto
    let mappedServiceName = serviceName;
    if (category === 'practicas' && practiceMapping[serviceName]) {
      mappedServiceName = practiceMapping[serviceName];
    } else if (category === 'industrias' && industryMapping[serviceName]) {
      mappedServiceName = industryMapping[serviceName];
    }
    
    // Buscar el servicio por título mapeado
    const targetServices = category === 'practicas' ? servicesData.practicas : servicesData.industrias;
    const service = targetServices.find(s => {
      const cleanTitle = s.title.replace(/\*\*/g, '');
      return cleanTitle === mappedServiceName;
    });
    
    if (service) {
      // Cerrar modal de miembro
      setIsTeamModalOpen(false);
      setSelectedMember(null);
      
      // Abrir modal de servicio
      setTimeout(() => {
        setSelectedService({ ...service, category });
        setIsServiceModalOpen(true);
      }, 200); // Pequeño delay para una transición suave
    } else {
      // Log para debugging - servicios que no se pudieron mapear
      console.warn(`No se pudo encontrar el servicio: "${serviceName}" -> "${mappedServiceName}" en categoría "${category}"`);
    }
  };
  return (
    <>
      <SEOMetadata
        title="MIRAI - Firma de Abogados en México | Asesoría Legal Especializada"
        description="MIRAI es una firma de abogados líder en México, especializada en derecho corporativo, comercio exterior, propiedad intelectual y más. Asesoría legal personalizada para empresas e individuos."
        url="https://mirai.legal"
        keywords="abogados México, firma legal, derecho corporativo, comercio exterior, propiedad intelectual, asesoría legal, bufete abogados, legal México, MIRAI abogados"
      />

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
        onPartnerClick={handlePartnerClick}
      />

      {/* Team Detail Modal - Global */}
      <TeamDetailModal
        isOpen={isTeamModalOpen}
        onClose={handleCloseTeamModal}
        member={selectedMember}
        onServiceClick={handleServiceClick}
      />
    </>
  );
}