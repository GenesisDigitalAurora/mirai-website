import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  isActive: boolean;
  hasLink?: boolean;
  linkUrl?: string;
}

export default function ProcessSlider() {
  const [currentStep, setCurrentStep] = useState(0);
  const [fadeClass, setFadeClass] = useState('opacity-100');

  const steps: ProcessStep[] = [
    {
      id: 1,
      title: 'Solicitud',
      description: 'Si estás interesado, solo llena un formato breve de aplicación.',
      icon: '/probono/001.svg',
      isActive: true,
      hasLink: true,
      linkUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdsHd_NbDQ7xwVsH2taAruQcbMOCdXEAJ4GXKTQObqhhEG-Pw/viewform'
    },
    {
      id: 2,
      title: 'Revisión inicial',
      description: 'Un colaborador de nuestro equipo se pondrá en contacto contigo para conocer más detalles sobre el proyecto y los retos legales que enfrentas.',
      icon: '/probono/002.svg',
      isActive: false
    },
    {
      id: 3,
      title: 'Evaluación',
      description: 'Tu caso será presentado a nuestro comité, quien definirá la viabilidad del apoyo y hará las recomendaciones necesarias.',
      icon: '/probono/003.svg',
      isActive: false
    },
    {
      id: 4,
      title: 'Asignación',
      description: 'Una vez aprobado, un abogado o equipo será designado para acompañar tu caso según sus necesidades legales.',
      icon: '/probono/004.svg',
      isActive: false
    },
    {
      id: 5,
      title: 'Cobertura de costos',
      description: 'Los honorarios de los abogados son absorbidos por la firma. Los gastos externos (protocolización de documentos, traslados u otros costos asociados) deberán ser cubiertos por el beneficiario.',
      icon: '/probono/005.svg',
      isActive: false
    }
  ];

  // Auto-advance slider every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('opacity-0');
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setFadeClass('opacity-400');
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, [steps.length]);

  const handleStepClick = (index: number) => {
    if (index !== currentStep) {
      setFadeClass('opacity-0');
      setTimeout(() => {
        setCurrentStep(index);
        setFadeClass('opacity-400');
      }, 400);
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 
          className="text-center mb-4"
          style={{
            fontFamily: 'Mulish, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(24px, 4vw, 32px)',
            lineHeight: '100%',
            color: '#921B95'
          }}
        >
          ¿Cómo funciona?
        </h2>

        {/* Línea verde */}
        <div className="flex justify-center mb-12">
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

        {/* Progress Steps */}
        <div className="flex justify-center items-center mb-12 px-4">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                {/* Step Circle */}
                <button
                  onClick={() => handleStepClick(index)}
                  className={`flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentStep
                      ? 'w-16 h-16 md:w-20 md:h-20'
                      : 'w-12 h-12 md:w-16 md:h-16'
                  }`}
                  style={{
                    backgroundColor: index === currentStep ? '#921B95' : '#40B637',
                    color: '#ffffff',
                    fontFamily: 'Mulish, sans-serif',
                    fontWeight: 700,
                    fontSize: index === currentStep ? '24px' : '18px'
                  }}
                >
                  {step.id}
                </button>

                {/* Connector Line - Solo mostrar en desktop */}
                {index < steps.length - 1 && (
                  <div 
                    className="hidden md:block w-8 md:w-16 h-0.5 mx-2"
                    style={{ backgroundColor: '#CCCCCC' }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Icon and Title */}
          <div 
            className={`transition-opacity duration-300 ${fadeClass} flex gap-4 items-center mb-6`}
          >
            <div className="mb-6">
              <Image
                src={currentStepData.icon}
                alt={currentStepData.title}
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
            
            <h3
              className="mb-4"
              style={{
                fontFamily: 'Mulish, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(20px, 4vw, 28px)',
                lineHeight: '120%',
                color: '#40B637'
              }}
            >
              {currentStepData.title}
            </h3>
          </div>

          {/* Description */}
          <div 
            className={`transition-opacity duration-300 ${fadeClass} mb-8`}
          >
            <p
              className="max-w-2xl"
              style={{
                fontFamily: 'Mulish, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(16px, 3vw, 18px)',
                lineHeight: '140%',
                color: '#333333'
              }}
            >
              {currentStepData.description}
            </p>
          </div>

          {/* Link Button (only for step 1) */}
          {currentStepData.hasLink && (
            <div className={`transition-opacity duration-300 ${fadeClass}`}>
              <a
                href={currentStepData.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: 'Mulish, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  color: '#921B95',
                  textDecoration: 'none'
                }}
              >
                <span>Ir al formulario</span>
                <Image
                  src="/probono/ArrowLink.svg"
                  alt="Ir al formulario"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
