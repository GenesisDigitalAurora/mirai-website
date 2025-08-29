import Header from '@/components/Header';
import SEOMetadata from '@/components/SEOMetadata';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import AnimatedSection from '@/components/AnimatedSection';

export default function LoginPage() {
  return (
    <>
      <SEOMetadata
        title="Inicio de Sesión - MIRAI Abogados"
        description="Acceso seguro para clientes y socios de MIRAI. Plataforma exclusiva para consultar expedientes, documentos y servicios legales personalizados."
        url="https://mirai.legal/login"
        keywords="login MIRAI, acceso clientes, portal clientes abogados, acceso seguro, MIRAI plataforma"
        noIndex={true}
      />

      <div className="min-h-screen bg-white" style={{ fontFamily: 'Mulish, sans-serif' }}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative pt-16 md:pt-17">
          <AnimatedSection animation="fadeUp" duration={800}>
            <LoginForm />
          </AnimatedSection>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
