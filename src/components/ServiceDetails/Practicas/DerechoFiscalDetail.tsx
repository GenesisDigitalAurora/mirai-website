export default function DerechoFiscalDetail() {
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
        Asesoría integral en obligaciones fiscales, planeación tributaria y litigios fiscales. Optimizamos la carga fiscal de nuestros clientes mientras aseguramos el cumplimiento normativo.
      </p>

      {/* Grid de tres columnas para los servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        
        {/* Columna 1: Planeación Fiscal */}
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
            Planeación Fiscal
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
              Estrategias de optimización fiscal y estructuración tributaria.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Aprovechamiento de incentivos y estímulos fiscales.
            </p>
            <p>
              Planeación de inversiones y restructuraciones corporativas.
            </p>
          </div>
        </div>

        {/* Columna 2: Cumplimiento Tributario */}
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
            Cumplimiento Tributario
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
              Asesoría en obligaciones fiscales federales, estatales y municipales.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Implementación de políticas de precios de transferencia.
            </p>
            <p>
              Auditorías fiscales preventivas y correctivas.
            </p>
          </div>
        </div>

        {/* Columna 3: Litigios Fiscales */}
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
            Litigios Fiscales
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
              Defensa en procedimientos fiscales y controversias.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Recursos administrativos y juicios de nulidad.
            </p>
            <p>
              Negociación de convenios de pago y facilidades administrativas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
