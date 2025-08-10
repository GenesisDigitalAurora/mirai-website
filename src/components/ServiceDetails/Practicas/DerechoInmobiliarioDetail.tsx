export default function DerechoInmobiliarioDetail() {
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
    Certeza y seguridad jurídica en negocios inmobiliario. Acompañamos a desarrolladores, inversionistas y operadores en cada etapa de sus proyectos.
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
        Acompañamiento integral en proyectos inmobiliarios
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
          Acompañamos a nuestros clientes desde la fase de factibilidad y de planeación inicial hasta la ejecución legal y comercialización de todo tipo de proyectos inmobiliarios.
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
        Gestión estratégica de terrenos, permisos y contratos
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
          Apoyo estratégico integral en la adquisición de terrenos, la realización de exhaustivos due diligence inmobiliarios que garanticen la viabilidad y ausencia de contingencias, la obtención de todos los permisos y licencias necesarios.
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
        Seguridad jurídica y cumplimiento regulatorio para el valor a largo plazo
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
          Aseguramos certeza jurídica y el estricto cumplimiento regulatorio para desarrolladores, inversionistas y operadores inmobiliarios.
        </p>
      </div>
    </div>
  </div>
</div>

    );
  }
  