import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import AnimatedSection from '@/components/AnimatedSection';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Inicio de Sesión - MIRAI Abogados</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Acceso para clientes y socios de MIRAI Abogados" />
        <meta property="og:title" content="Inicio de Sesión - MIRAI Abogados" />
        <meta property="og:description" content="Acceso para clientes y socios de MIRAI Abogados" />
        <meta property="og:type" content="website" />
      </Head>

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
