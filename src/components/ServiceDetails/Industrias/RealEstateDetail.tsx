export default function RealEstateDetail() {
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
          Somos tu aliado estratégico para la certeza jurídica en el sector inmobiliario.
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
          <li>Adquisición de inmuebles</li>
          <li>Gestión regulatoria y permisos</li>
          <li>Due diligence exhaustiva</li>
          <li>Régimen en condominio y propiedad</li>
        </ul>
      </div>
      
    );
  }
  