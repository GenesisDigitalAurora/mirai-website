export default function DerechoFamiliarDetail() {
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
                Soluciones jurídicas con sensibilidad humana. Comprendemos que los asuntos de familia son profundamente personales y requieren no solo conocimiento legal, sino también una profunda sensibilidad humana.
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
                    Acompañamiento en procesos familiares críticos
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
                    Acompañamos en procesos de divorcio, custodia y convivencia, el establecimiento de pensión alimenticia, procedimientos de adopción, y la regulación de la patria potestad.
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
                    Mediación y diseño de acuerdos armónicos
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
                    Diseñamos convenios familiares detallados y personalizados.
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
                    Defensa judicial y búsqueda de soluciones duraderas
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
                    Defendemos vigorosamente los derechos familiares de nuestros clientes ante instancias judiciales.
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
  }
  