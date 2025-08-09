export default function ASGDetail() {
  return (
    <div>
      <p 
        style={{
          fontFamily: 'Mulish',
          fontWeight: 400,
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          lineHeight: '150%',
          color: '#1E1E1E',
          marginBottom: '1.5em'
        }}
      >
        Organización y soluciones que impactan en la responsabilidad ambiental, social y ética de tu negocio; asesoramos en las verticales:
      </p>

      <ul 
        style={{
          fontFamily: 'Mulish',
          fontWeight: 400,
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          lineHeight: '150%',
          color: '#1E1E1E',
          paddingLeft: '1.5em',
          marginBottom: '2em',
          listStyle: 'disc'
        }}
      >
        <li style={{ marginBottom: '0.5em' }}>
          <strong style={{ fontWeight: 700 }}>Ambiental (Environmental)</strong>
        </li>
        <li style={{ marginBottom: '0.5em' }}>
          <strong style={{ fontWeight: 700 }}>Social (Social)</strong>
        </li>
        <li style={{ marginBottom: '0.5em' }}>
          <strong style={{ fontWeight: 700 }}>Gobernanza (Governance)</strong>
        </li>
      </ul>

      {/* Grid de tres columnas para los servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        
        {/* Columna 1: Integración efectiva de criterios ESG */}
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
            Integración efectiva de criterios ESG
          </h3>
          <p 
            style={{
              fontFamily: 'Mulish',
              fontWeight: 400,
              fontSize: 'clamp(13px, 1.8vw, 14px)',
              lineHeight: '150%',
              color: '#1E1E1E',
              textAlign: 'justify'
            }}
          >
            Esto abarca desde la operación diaria y el gobierno corporativo hasta la cultura organizacional.
          </p>
        </div>

        {/* Columna 2: Apoyo estratégico y desarrollo de capacidades */}
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
            Apoyo estratégico y desarrollo de capacidades
          </h3>
          <p 
            style={{
              fontFamily: 'Mulish',
              fontWeight: 400,
              fontSize: 'clamp(13px, 1.8vw, 14px)',
              lineHeight: '150%',
              color: '#1E1E1E',
              textAlign: 'justify'
            }}
          >
            Diseño e implementación de políticas ESG robustas. Capacitación de tus equipos.
          </p>
        </div>

        {/* Columna 3: Construcción de modelos de negocio sostenibles */}
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
            Construcción de modelos de negocio sostenibles
          </h3>
          <p 
            style={{
              fontFamily: 'Mulish',
              fontWeight: 400,
              fontSize: 'clamp(13px, 1.8vw, 14px)',
              lineHeight: '150%',
              color: '#1E1E1E',
              textAlign: 'justify'
            }}
          >
            Construir modelos de negocio que sean verdaderamente sostenibles, éticos y altamente competitivos alineados con estándares internacionales.
          </p>
        </div>
      </div>
    </div>
  );
}
