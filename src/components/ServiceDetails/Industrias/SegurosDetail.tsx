export default function SegurosDetail() {
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
          El sector de seguros y servicios financieros es un pilar de estabilidad económica, altamente regulado para proteger la confianza del público.
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
          <li>Regulación y gestión de riesgos financieros</li>
          <li>Interacción con reguladores y protección al cliente</li>
          <li>Eficiencia y claridad para operadores y clientes</li>
        </ul>
      </div>
      
    );
  }
  