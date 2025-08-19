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
              Somos una firma de abogados creada para anticipar y resolver los retos legales de un mundo en constante cambio. Nuestros socios suman décadas de experiencia nacional e internacional, combinando un profundo conocimiento de diversas industrias con un enfoque innovador que integra tecnología, sostenibilidad y ética empresarial.
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
              Nuestra diferencia radica en la cercanía, la prevención como estrategia y el uso de herramientas LegalTech que elevan la eficiencia, reducen riesgos y generan valor real para nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
