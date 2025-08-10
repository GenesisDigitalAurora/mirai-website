export default function DerechoPatrimonialDetail() {
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
                Prevención, protección y transmisión estratégica de bienes y derechos. Entendemos la importancia de salvaguardar y organizar tu patrimonio personal, familiar o empresarial para asegurar su continuidad y trascendencia.
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
                    Estructuración integral del patrimonio
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
                    Soluciones jurídicas a la medida que permiten proteger y transferir tu patrimonio de la manera más eficiente y segura.
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
                    Instrumentos de planificación sucesoria y patrimonial
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
                    Redacción y formalización de testamentos claros y precisos, la constitución de fideicomisos, donaciones estratégicas y la gestión eficiente de sucesiones.
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
                    Continuidad y armonía generacional
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
                    Con nuestra asesoría, tu patrimonio estará protegido, y su transferencia se realizará de manera fluida y consensuada, evitando conflictos futuros.
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
                En Mirai Abogados, estamos listos para ser tu socio estratégico en la protección estratégica de tu patrimonio. ¿Cómo podemos ayudarte a fortalecer y asegurar tu legado hoy?
            </p>
        </div>
    );
  }
  