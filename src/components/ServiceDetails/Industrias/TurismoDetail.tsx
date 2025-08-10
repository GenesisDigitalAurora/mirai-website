export default function TurismoDetail() {
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
          El sector turístico y de hospitalidad es clave para el desarrollo regional y la generación de experiencias, pero requiere un manejo experto de licencias, contratos y relaciones con consumidores.
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
          <li>Marco legal para operaciones turísticas</li>
          <li>Gestión de relaciones y protección al consumidor</li>
          <li>Operación regulada y experiencia garantizada</li>
        </ul>
      </div>
      
    );
  }
  