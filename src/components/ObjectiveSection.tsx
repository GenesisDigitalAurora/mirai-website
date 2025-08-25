export default function ObjectiveSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 
          className="mb-4"
          style={{
            fontFamily: 'Mulish, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(24px, 4vw, 32px)',
            lineHeight: '100%',
            color: '#921B95'
          }}
        >
          Nuestro objetivo
        </h2>

        {/* Línea verde */}
        <div className="flex justify-center mb-12">
          <hr 
            className="border-0"
            style={{
              width: '80px',
              height: '3px',
              backgroundColor: '#40B637',
              borderRadius: '2px'
            }}
          />
        </div>

        {/* Contenido */}
        <div className="max-w-4xl mx-auto">
          <p
            className="leading-relaxed"
            style={{
              fontFamily: 'Mulish, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 3vw, 18px)',
              lineHeight: '140%',
              color: '#333333'
            }}
          >
            Queremos que más proyectos con impacto positivo crezcan con bases sólidas, protegiendo el esfuerzo de quienes los lideran y asegurando que su contribución a la sociedad se mantenga en el tiempo.{' '}
            <span style={{ color: '#921B95', fontWeight: 600 }}>
              El derecho no debe ser una barrera, sino un puente hacia el cambio.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
