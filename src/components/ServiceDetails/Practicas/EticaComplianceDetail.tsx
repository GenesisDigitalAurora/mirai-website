export default function EticaComplianceDetail() {
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
    Sostenibilidad y desarrollo con base legal, combinamos el conocimiento legal con una visión de desarrollo sostenible.
  </p>

  {/* Grid de tres columnas para los servicios */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
    
    {/* Columna 1 */}
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
        Regulación agraria y comercio internacional
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
          Asesoramos el uso y tenencia de la tierra, ejidos y bienes comunales, así como el acompañamiento en procesos de desincorporación de regímenes especiales, así como, en comercio internacional, procesos de exportación de productos agrícolas.
        </p>
      </div>
    </div>

    {/* Columna 2 */}
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
        Cumplimiento ambiental y derechos hídricos
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
          Gestión de permisos, estudios de impacto ambiental y licencias. Ofrecemos asesoría especializada en derechos de agua y concesiones y permisos de descarga, obtención de certificaciones de sustentabilidad.
        </p>
      </div>
    </div>

    {/* Columna 3 */}
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
        Protección y desarrollo sostenible
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
          Protegemos tus proyectos agrícolas y extractivos con una visión legal alineada al desarrollo sostenible y al entorno natural.
        </p>
      </div>
    </div>
  </div>
</div>


       
    );
  }
  