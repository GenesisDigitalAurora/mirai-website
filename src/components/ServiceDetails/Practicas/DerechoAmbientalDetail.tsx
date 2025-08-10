export default function DerechoAmbientalDetail() {
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
          Gestión sostenible y cumplimiento estratégico. Comprendemos la creciente importancia de la correcta gestión ambiental y el cumplimiento normativo para la sostenibilidad y reputación de cualquier organización o proyecto.
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
              Apoyo estratégico en trámites y elaboración e implementación de políticas ambientales
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
                Asesoramos la identificación, evaluación y mitigación de impactos ambientales y riesgos derivados de sus negocios y operaciones, así como el cumplimiento normativo estricto: Desarrollo de auditorías legales en materia ambiental y regulatoria así como, planeación y gestión de procesos judiciales en materia ambiental, incluyendo juicios de nulidad, la interposición de recursos administrativos y juicios de amparo.
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
              Asesoría integral en gestión de impactos y cumplimiento
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
                Presentación y seguimiento para la obtención y mantenimiento de todo tipo de permisos, licencias y autorizaciones ambientales, incluyendo uso de suelo, impacto ambiental, cambio de uso de suelo en terrenos forestales, aprovechamiento y suministro de agua y gestión de descarga de aguas residuales, emisiones a la atmósfera, etc.
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
              Integración ambiental como ventaja competitiva
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
                Vamos más allá del cumplimiento. Promovemos activamente la integración de criterios ambientales en el modelo de negocio de nuestros clientes, no solo como una obligación, sino como una poderosa ventaja competitiva y un diferenciador de valor reputacional.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
  