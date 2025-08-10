export default function LitigioCivilMercantilDetail() {
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
          Solidez en transacciones y resolución de conflictos. Entendemos que el Derecho Civil y Mercantil son los cimientos de la mayoría de las interacciones personales y empresariales.
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
              Asesoría legal en contratos y obligaciones complejas
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
                Brindamos asesoría legal experta en la redacción, negociación y revisión de todo tipo de contratos, tanto civiles como mercantiles.
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
              Atención y resolución de controversias contractuales
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
                Atendemos y gestionamos controversias derivadas de incumplimientos contractuales, reclamaciones por daños y perjuicios, casos de responsabilidad civil (contractual y extracontractual), y disputas entre particulares o empresas.
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
              Representación judicial estratégica y orientada a resultados
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
                Cuando la vía extrajudicial no es suficiente, representamos a nuestros clientes en procedimientos judiciales ante juzgados y tribunales en materia civil y mercantil.
              </p>
            </div>
          </div>
        </div>
      
        <p 
          style={{
            fontFamily: 'Mulish',
            fontWeight: 400,
            fontSize: 'clamp(14px, 2.5vw, 16px)',
            lineHeight: '150%',
            color: '#1E1E1E',
            marginTop: '2em'
          }}
        >
          En Mirai Abogados, estamos listos para ser tu socio estratégico en la resolución efectiva de conflictos civiles y mercantiles. ¿Cómo podemos ayudarte a asegurar la validez y el cumplimiento de tus acuerdos hoy mismo?
        </p>
      </div>
      
    );
  }
  