export default function EntretenimientoDetail() {
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
          Protección y valoración de talento y contenidos. Reconocemos el inmenso valor del talento y la creatividad en los sectores de entretenimiento, deportes e industrias creativas.
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
              Gestión legal Integral de derechos y contratos
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
                Asesoramos de manera exhaustiva a artistas, deportistas, casas productoras, editoriales, influencers y jugadores de la arena creativa y deportiva en la gestión legal de sus derechos y contratos.
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
              Protección y explotación de activos clave
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
                Nos especializamos en la protección, explotación y defensa legal de los activos más valiosos en estas industrias.
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
              Transformación del talento en valor económico
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
                Nuestra misión es transformar el talento creativo y deportivo en un valor económico sostenible y seguro.
              </p>
            </div>
          </div>
        </div>
      </div>
       
    );
  }
  