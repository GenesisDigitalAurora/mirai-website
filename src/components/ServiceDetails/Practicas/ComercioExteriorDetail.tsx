export default function ComercioExteriorDetail() {
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
        Asesoría integral en operaciones de comercio internacional, importación y exportación. Ayudamos a las empresas a navegar por las regulaciones aduaneras y comerciales para facilitar sus operaciones globales.
      </p>

      {/* Grid de tres columnas para los servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        
        {/* Columna 1: Regulaciones Aduaneras */}
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
            Regulaciones Aduaneras
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
              Asesoría en clasificación arancelaria y valoración en aduana.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Cumplimiento de normas oficiales mexicanas (NOMs).
            </p>
            <p>
              Gestión de permisos y autorizaciones de importación/exportación.
            </p>
          </div>
        </div>

        {/* Columna 2: Tratados Comerciales */}
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
            Tratados Comerciales
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
              Aprovechamiento de beneficios del T-MEC y otros tratados.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Certificación de origen y reglas de origen.
            </p>
            <p>
              Estrategias para optimización arancelaria.
            </p>
          </div>
        </div>

        {/* Columna 3: Cumplimiento y Litigios */}
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
            Cumplimiento y Litigios
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
              Defensa en procedimientos aduaneros y embargos.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Implementación de programas de cumplimiento.
            </p>
            <p>
              Auditorías preventivas y corrección de irregularidades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
