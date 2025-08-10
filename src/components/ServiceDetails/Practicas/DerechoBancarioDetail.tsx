export default function DerechoBancarioDetail() {
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
        Creación y gestión de productos financieros y soluciones de financiamiento y crédito. Contamos con alta especialización en materia financiera y bancaria, lo que nos permite ofrecer soluciones estratégicas e innovadoras a nuestros clientes.
      </p>

      {/* Grid de tres columnas para los servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        
        {/* Columna 1: Soluciones regulatorias y de productos financieros */}
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
            Soluciones regulatorias y de productos financieros
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
              Obtención de licencias para instituciones financieras.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Atención a requerimientos de autoridades, como la CNBV, BANXICO, CONDUSEF y CNSF.
            </p>
            <p>
              Asesoría legal especializada en optimización de sistemas de pago, incluyendo la gestión de registros para adquirentes y agregadores.
            </p>
          </div>
        </div>

        {/* Columna 2: Soluciones de financiamiento y crédito */}
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
            Soluciones de financiamiento y crédito
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
              Estructuración de financiamientos, como préstamos sindicados, financiamiento estructurado, factorajes y crédito individual.
            </p>
            <p>
              Diseño de productos crediticios, como tarjetas de crédito, crédito simple y crédito revolvente.
            </p>
          </div>
        </div>

        {/* Columna 3: Soluciones en prevención de lavado de dinero (PLD) */}
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
            Soluciones en prevención de lavado de dinero (PLD)
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
              Cumplimiento normativo en prevención de lavado de dinero.
            </p>
            <p>
              Asesoría integral a instituciones financieras, fortaleciendo tus controles internos y procedimientos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
