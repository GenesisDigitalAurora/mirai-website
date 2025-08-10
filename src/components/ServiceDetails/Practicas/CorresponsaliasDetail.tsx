export default function CorresponsaliasDetail() {
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
    Tu alcance legal sin fronteras. Entendemos que el mundo de los negocios no tiene límites geográficos. Para garantizarte un servicio legal de la más alta calidad y un alcance verdaderamente global, hemos establecido una red de corresponsalías estratégicas.
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
        Blindaje legal proactivo y regulatorio
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
          Manejamos tus casos eficientemente, ya sea que involucren diferentes estados en México o jurisdicciones internacionales.
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
        Eficiencia, claridad y estructuración de financiamientos para tu operación
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
          Tu punto de contacto sigue siendo Mirai Abogados. Nosotros nos encargamos de coordinar y supervisar todos los aspectos de tu asunto, asegurando un servicio coherente y sin interrupciones.
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
        Crecimiento estratégico y certeza jurídica
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
          Nuestros corresponsales son expertos en las leyes y prácticas específicas de sus respectivas jurisdicciones, brindando un conocimiento invaluable.
        </p>
      </div>
    </div>
  </div>
</div>

       
    );
  }
  