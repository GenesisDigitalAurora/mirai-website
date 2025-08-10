export default function FarmaceuticaDetail() {
    return (
        <div>
        <p 
          style={{
            fontFamily: 'Mulish',
            fontWeight: 400,
            fontSize: 'clamp(14px, 2.5vw, 16px)',
            lineHeight: '150%',
            color: '#1E1E1E',
            marginBottom: '1em'
          }}
        >
          El sector de ciencias de la salud es un motor de innovación y un pilar para el bienestar global, pero su entorno regulatorio es intrincado y altamente vigilado.
        </p>
      
        <ul 
          style={{
            fontFamily: 'Mulish',
            fontWeight: 700,
            fontSize: 'clamp(13px, 1.8vw, 14px)',
            lineHeight: '150%',
            color: '#1E1E1E',
            paddingLeft: '1.2em'
          }}
        >
          <li>Cumplimiento regulatorio integral</li>
          <li>Gestión estratégica ante COFEPRIS</li>
          <li>Protección de la innovación y reducción de riesgos</li>
        </ul>
      </div>
      
    );
  }
  