export default function TraduccionesLegalesDetail() {
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
          Precisión sin compromisos. Sabemos que en el ámbito legal global, la traducción no es solo un puente lingüístico, sino un pilar de seguridad jurídica.
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
              Dominio legal y lingüístico
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
                Nuestros traductores no solo son bilingües; son expertos con formación legal que entienden la terminología, los matices y el impacto jurídico de cada frase, tanto en inglés como en español.
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
              Servicios profesionales de traducción y certificación por perito
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
                Traducimos con precisión documentos legales complejos del inglés al español y viceversa. Ofrecemos servicios de traducción y certificación por perito oficial en ambos idiomas.
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
              Certeza en transacciones globales
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
                Te proporcionamos la confianza necesaria para realizar transacciones internacionales, cerrar acuerdos y gestionar litigios a través de fronteras, sabiendo que tus comunicaciones legales son precisas y vinculantes.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
  