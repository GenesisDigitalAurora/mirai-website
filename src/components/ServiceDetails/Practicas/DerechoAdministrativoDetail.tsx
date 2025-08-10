export default function DerechoAdministrativoDetail() {
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
                Defensa y estrategia frente a la autoridad. Somos especialistas en la interacción entre particulares, empresas y el Estado.
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
                    Representación integral ante autoridades administrativas
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
                    Acompañamos en procesos judiciales más complejos, incluyendo juicios de nulidad, juicios de amparo, la interposición de recursos administrativos previos a la vía judicial, y la asesoría en licitaciones públicas.
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
                    Estrategias de defensa constitucional y contenciosa
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
                    Nuestro objetivo primordial es diseñar e implementar estrategias jurídicas proactivas que mitiguen riesgos derivados de la actuación de la autoridad.
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
                    Mitigación de riesgos y garantía de derechos
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
                    Incluye la gestión de permisos, licencias y autorizaciones, hasta la atención de requerimientos, inspecciones, procedimientos administrativos sancionadores.
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
                En Mirai Abogados, estamos listos para ser tu socio estratégico en la defensa de tus derechos ante la autoridad. ¿Cómo podemos ayudarte a enfrentar tus desafíos legales con confianza y claridad hoy?
            </p>
        </div>
    );
  }
  