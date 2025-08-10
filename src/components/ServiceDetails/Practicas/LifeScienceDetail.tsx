export default function LifeScienceDetail() {
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
          Consultoría y derecho regulatorio en materia sanitaria. Ofrecemos asesoría legal especializada y estratégica para empresas farmacéuticas, del sector salud, dispositivos médicos y la industria alimentaria.
        </p>
  
        {/* Grid de tres columnas para los servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          
          {/* Columna 1: Automatización Legal */}
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
              Navegación regulatoria integral
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
                Acompañamos a nuestros clientes en todas sus interacciones con autoridades regulatorias, como COFEPRIS, SENASICA, y otras instancias relevantes.
              </p>
            </div>
          </div>
  
          {/* Columna 2: Compliance Digital */}
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
              Gestión estratégica de registros y cumplimiento
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
                Proporcionamos soluciones completas para la gestión de registros sanitarios de productos farmacéuticos, dispositivos médicos, alimentos, bebidas, suplementos y cosméticos.
              </p>
            </div>
          </div>
  
          {/* Columna 3: RegTech Solutions */}
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
              Visión jurídica para la innovación y el acceso a mercados
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
                También acompañamos procesos de auditoría en el contexto de fusiones, adquisiciones y financiamiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  