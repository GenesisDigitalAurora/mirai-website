export default function PropiedadIntelectualDetail() {
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
        Protección integral de activos intelectuales, registro de marcas, patentes y derechos de autor. Estrategias para maximizar el valor comercial de la propiedad intelectual.
      </p>

      {/* Grid de tres columnas para los servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        
        {/* Columna 1: Registro y Protección */}
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
            Registro y Protección
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
              Registro de marcas, patentes y modelos de utilidad.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Protección de derechos de autor y software.
            </p>
            <p>
              Estrategias de protección nacional e internacional.
            </p>
          </div>
        </div>

        {/* Columna 2: Defensa y Litigios */}
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
            Defensa y Litigios
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
              Defensa contra infracciones y uso indebido.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Litigios por violación de propiedad intelectual.
            </p>
            <p>
              Procedimientos de oposición y nulidad.
            </p>
          </div>
        </div>

        {/* Columna 3: Comercialización */}
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
            Comercialización
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
              Contratos de licenciamiento y transferencia.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Valoración de activos intelectuales.
            </p>
            <p>
              Estrategias de monetización y franquicias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
