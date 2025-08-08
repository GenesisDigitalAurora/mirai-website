export default function AboutUsSection() {
  return (
    <section 
      className="py-16 px-4"
      style={{ 
        backgroundColor: '#EBEBEB80' // Fondo gris claro con transparencia
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Encabezado */}
          <h2 
            className="mb-4"
            style={{
              fontFamily: 'Mulish',
              fontWeight: 700,
              fontSize: 'clamp(24px, 4vw, 32px)', // Responsive
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#921B95'
            }}
          >
            ¿Quiénes somos?
          </h2>

          {/* Línea horizontal verde */}
          <div className="flex justify-center mb-8">
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
          <div className="max-w-6xl mx-auto">
            <p 
              className="mb-6"
              style={{
                fontFamily: 'Mulish',
                fontWeight: 400,
                fontSize: 'clamp(16px, 2.5vw, 18px)', // Responsive
                lineHeight: '150%', // Aumenté un poco para mejor legibilidad
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#000000'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet placerat elit, ut rhoncus nisl. Aenean vitae placerat augue, eget 
              tincidunt turpis. Cras elementum, urna id convallis commodo, magna nunc maximus urna, in porta leo quam ac ipsum. Proin sodales nisl sed 
              ante varius, ut fermentum mi condimentum.
            </p>

            <p 
              style={{
                fontFamily: 'Mulish',
                fontWeight: 400,
                fontSize: 'clamp(16px, 2.5vw, 18px)', // Responsive
                lineHeight: '150%', // Aumenté un poco para mejor legibilidad
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#000000'
              }}
            >
              Duis ullamcorper iaculis libero, in maximus sem scelerisque vel. Sed consequat lobortis malesuada. Sed pharetra scelerisque diam a varius. Sed 
              neque est, viverra non ultrices sed, suscipit in lectus. Cras pretium sagittis dui, vel consectetur libero tempor et. Nulla varius elit id risus 
              malesuada mollis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
