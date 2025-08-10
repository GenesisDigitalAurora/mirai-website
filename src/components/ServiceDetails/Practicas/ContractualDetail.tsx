export default function ContractualDetail() {
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
        Diseño, negociación y gestión de contratos comerciales. Brindamos asesoría especializada para estructurar acuerdos que protejan los intereses de nuestros clientes y minimicen riesgos legales.
      </p>

      {/* Grid de tres columnas para los servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        
        {/* Columna 1: Contratos Comerciales */}
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
            Contratos Comerciales
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
              Contratos de compraventa, distribución y franquicia.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Acuerdos de servicios y outsourcing.
            </p>
            <p>
              Contratos de joint venture y alianzas estratégicas.
            </p>
          </div>
        </div>

        {/* Columna 2: Negociación y Estructuración */}
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
            Negociación y Estructuración
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
              Asesoría en negociación de términos y condiciones.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Estructuración de garantías y seguros.
            </p>
            <p>
              Cláusulas de resolución de controversias.
            </p>
          </div>
        </div>

        {/* Columna 3: Cumplimiento y Gestión */}
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
            Cumplimiento y Gestión
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
              Supervisión del cumplimiento contractual.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Modificaciones y adendas contractuales.
            </p>
            <p>
              Resolución de incumplimientos y controversias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
