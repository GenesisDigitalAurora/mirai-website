export default function FintechDetail() {
  return (
    <div>
      <p 
        style={{
          fontFamily: 'Mulish',
          fontWeight: 400,
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          lineHeight: '150%',
          color: '#1E1E1E',
          marginBottom: '2em'
        }}
      >
        Asesoría especializada para empresas de tecnología financiera, incluyendo cumplimiento regulatorio, licencias y soluciones innovadoras en servicios financieros digitales.
      </p>

      {/* Grid de tres columnas para los servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        
        {/* Columna 1: Licencias y Autorizaciones */}
        <div>
          <h3 
            style={{
              fontFamily: 'Mulish',
              fontWeight: 700,
              fontSize: 'clamp(14px, 2vw, 16px)',
              lineHeight: '130%',
              color: '#921B95',
              marginBottom: '0.75em'
            }}
          >
            Licencias y Autorizaciones
          </h3>
          <div 
            style={{
              fontFamily: 'Mulish',
              fontWeight: 400,
              fontSize: 'clamp(13px, 1.8vw, 14px)',
              lineHeight: '150%',
              color: '#1E1E1E',
              textAlign: 'left'
            }}
          >
            <p style={{ marginBottom: '0.8em' }}>
              Obtención de licencias IFPE (Instituciones de Fondos de Pago Electrónico).
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Autorizaciones para instituciones de tecnología financiera.
            </p>
            <p>
              Cumplimiento de la Ley Fintech y regulaciones CNBV.
            </p>
          </div>
        </div>

        {/* Columna 2: Productos Digitales */}
        <div>
          <h3 
            style={{
              fontFamily: 'Mulish',
              fontWeight: 700,
              fontSize: 'clamp(14px, 2vw, 16px)',
              lineHeight: '130%',
              color: '#921B95',
              marginBottom: '0.75em'
            }}
          >
            Productos Digitales
          </h3>
          <div 
            style={{
              fontFamily: 'Mulish',
              fontWeight: 400,
              fontSize: 'clamp(13px, 1.8vw, 14px)',
              lineHeight: '150%',
              color: '#1E1E1E',
              textAlign: 'left'
            }}
          >
            <p style={{ marginBottom: '0.8em' }}>
              Desarrollo legal de wallets digitales y criptomonedas.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Plataformas de crowdfunding y préstamos P2P.
            </p>
            <p>
              Sistemas de pago móvil y transferencias digitales.
            </p>
          </div>
        </div>

        {/* Columna 3: Compliance y Ciberseguridad */}
        <div>
          <h3 
            style={{
              fontFamily: 'Mulish',
              fontWeight: 700,
              fontSize: 'clamp(14px, 2vw, 16px)',
              lineHeight: '130%',
              color: '#921B95',
              marginBottom: '0.75em'
            }}
          >
            Compliance y Ciberseguridad
          </h3>
          <div 
            style={{
              fontFamily: 'Mulish',
              fontWeight: 400,
              fontSize: 'clamp(13px, 1.8vw, 14px)',
              lineHeight: '150%',
              color: '#1E1E1E',
              textAlign: 'left'
            }}
          >
            <p style={{ marginBottom: '0.8em' }}>
              Implementación de políticas de protección de datos.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Cumplimiento de normativas AML/KYC.
            </p>
            <p>
              Auditorías de ciberseguridad y gestión de riesgos tecnológicos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
