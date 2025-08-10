export default function DerechoLaboralDetail() {
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
        Gestión de relaciones laborales, cumplimiento IMSS/INFONAVIT y litigios. Estrategias para reducir riesgos y mejorar el clima laboral en las organizaciones.
      </p>

      {/* Grid de tres columnas para los servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        
        {/* Columna 1: Relaciones Laborales */}
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
            Relaciones Laborales
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
              Elaboración de contratos individuales y colectivos de trabajo.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Asesoría en restructuraciones y despidos.
            </p>
            <p>
              Políticas de recursos humanos y reglamentos internos.
            </p>
          </div>
        </div>

        {/* Columna 2: Cumplimiento Regulatorio */}
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
            Cumplimiento Regulatorio
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
              Gestión ante IMSS, INFONAVIT y autoridades laborales.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Auditorías laborales y corrección de irregularidades.
            </p>
            <p>
              Implementación de sistemas de seguridad e higiene.
            </p>
          </div>
        </div>

        {/* Columna 3: Litigios y Controversias */}
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
            Litigios y Controversias
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
              Defensa en tribunales laborales y juntas de conciliación.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Estrategias de prevención de conflictos laborales.
            </p>
            <p>
              Mediación y arbitraje en disputas laborales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
