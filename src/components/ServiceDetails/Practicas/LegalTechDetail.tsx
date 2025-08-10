export default function LegalTechDetail() {
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
        Innovación en servicios legales mediante tecnología. Desarrollo de soluciones digitales para automatización, gestión de compliance y transformación digital del sector legal.
      </p>

      {/* Grid de tres columnas para los servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        
        {/* Columna 1: Automatización Legal */}
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
            Automatización Legal
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
              Desarrollo de sistemas de gestión documental inteligente.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Automatización de procesos legales repetitivos.
            </p>
            <p>
              Implementación de chatbots legales y asistentes virtuales.
            </p>
          </div>
        </div>

        {/* Columna 2: Compliance Digital */}
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
            Compliance Digital
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
              Plataformas de monitoreo regulatorio automático.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Sistemas de alerta temprana de cambios normativos.
            </p>
            <p>
              Dashboards de cumplimiento en tiempo real.
            </p>
          </div>
        </div>

        {/* Columna 3: RegTech Solutions */}
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
            RegTech Solutions
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
              Desarrollo de herramientas de análisis regulatorio.
            </p>
            <p style={{ marginBottom: '0.8em' }}>
              Integración de APIs para reportes regulatorios.
            </p>
            <p>
              Consultoría en transformación digital legal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
