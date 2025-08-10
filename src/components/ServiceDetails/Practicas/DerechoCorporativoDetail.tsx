export default function DerechoCorporativoDetail() {
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
        Asesoría integral en estructuración corporativa, fusiones y adquisiciones, y gobierno corporativo. Diseñamos soluciones estratégicas para optimizar la estructura legal de las empresas.
      </p>

      {/* Grid de tres columnas para los servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        
        {/* Columna 1: Estructuración Corporativa */}
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
            Estructuración Corporativa
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
              Constitución de sociedades y entidades corporativas.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Reorganizaciones y reestructuraciones societarias.
            </p>
            <p>
              Optimización de estructuras corporativas complejas.
            </p>
          </div>
        </div>

        {/* Columna 2: Fusiones y Adquisiciones */}
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
            Fusiones y Adquisiciones
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
              Due diligence legal y estructuración de transacciones.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Negociación y documentación de M&A.
            </p>
            <p>
              Asesoría en joint ventures y alianzas estratégicas.
            </p>
          </div>
        </div>

        {/* Columna 3: Gobierno Corporativo */}
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
            Gobierno Corporativo
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
              Implementación de mejores prácticas de gobierno corporativo.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Asesoría a consejos de administración y comités.
            </p>
            <p>
              Cumplimiento de obligaciones societarias y regulatorias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
