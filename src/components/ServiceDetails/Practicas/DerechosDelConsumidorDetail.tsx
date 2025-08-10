export default function DerechosDelConsumidorDetail() {
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
                Confianza y cumplimiento con clientes consumidores y usuarios financieros. Reconocemos que una relación sólida y transparente con los consumidores y usuarios de servicios financieros es fundamental para la reputación y el éxito a largo plazo de cualquier negocio.
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
                    Acompañamiento en cumplimiento y buenas prácticas comerciales
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
                    Cumplimiento integral de la Ley Federal de Protección al Consumidor (LFPC) y su normativa complementaria. Para el sector financiero, brindamos asesoría en el cumplimiento de la ley de protección y defensa al usuario de servicios financieros.
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
                    Diseño de documentación legal estratégica y transparente
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
                    Diseñamos y revisamos toda la documentación legal crucial para la interacción con tus consumidores y usuarios financieros. Esto abarca la redacción de contratos de adhesión, términos y condiciones para sitios web y plataformas digitales, políticas de garantía claras y justas.
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
                    Representación efectiva ante PROFECO y CONDUSEF, y prevención de conflictos
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
                    Cuando surgen controversias, representamos a nuestros clientes ante la PROFECO y la CONDUSEF en todas las instancias. También asistimos a nuestros clientes en litigios donde se ejerzan acciones colectivas y/o derivadas de responsabilidad de producto (product liability).
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
                En Mirai Abogados, estamos listos para ser tu socio estratégico en la construcción de relaciones sólidas y de confianza con tus consumidores y usuarios financieros. ¿Cómo podemos ayudarte a proteger tu negocio y fortalecer tu reputación en el mercado hoy mismo?
            </p>
        </div>
    );
  }
  