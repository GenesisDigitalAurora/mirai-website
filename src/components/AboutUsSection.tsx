export default function AboutUsSection() {
  return (
    <section 
      className="py-16 px-4"
      style={{ 
        backgroundColor: '#EBEBEB80' // Fondo gris claro con transparencia
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Encabezado */}
          <h2 
            className="mb-4"
            style={{
              fontFamily: 'Mulish',
              fontWeight: 700,
              fontSize: 'clamp(24px, 4vw, 32px)', // Responsive
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#921B95'
            }}
          >
            ¿Quiénes somos?
          </h2>

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

          {/* Contenido */}
          <div className="max-w-6xl mx-auto">
            <p 
              className="mb-6"
              style={{
                fontFamily: 'Mulish',
                fontWeight: 400,
                fontSize: 'clamp(16px, 2.5vw, 18px)', // Responsive
                lineHeight: '150%', // Aumenté un poco para mejor legibilidad
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#000000'
              }}
            >
              Mirai Abogados es un despacho jurídico innovador que combina experiencia legal con tecnología de vanguardia para ofrecer soluciones integrales y personalizadas. Con un enfoque en el cumplimiento normativo, sostenibilidad y ética, acompañamos a nuestros clientes en sectores como fintech, energía, agroindustria y más, brindando certeza jurídica y estrategias que impulsan el crecimiento sostenible en un entorno global.
            </p>

            <p 
              style={{
                fontFamily: 'Mulish',
                fontWeight: 400,
                fontSize: 'clamp(16px, 2.5vw, 18px)', // Responsive
                lineHeight: '150%', // Aumenté un poco para mejor legibilidad
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#000000'
              }}
            >
              Nuestra misión es transformar la práctica legal mediante servicios proactivos y especializados, desde la estructuración de negocios hasta la defensa en controversias. En Mirai, integramos herramientas LegalTech y RegTech para optimizar procesos, garantizando eficiencia, transparencia y resultados que generan valor para empresas, ONGs e industrias creativas en México y el mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
