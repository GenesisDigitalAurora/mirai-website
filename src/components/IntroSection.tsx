export default function IntroSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 
            className="mb-6 max-w-5xl mx-auto text-gray-600"
            style={{
              fontFamily: 'Mulish',
              fontWeight: 400,
              fontSize: 'clamp(24px, 4vw, 32px)', // Responsive font size
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center'
            }}
          >
            <span style={{ fontWeight: 900 }}>Somos la primer firma de abogados en México</span><br />
            que ayuda a sus clientes a 
            prevenir contingencias legales<br />
            acompañada de soluciones tecnológicas.
          </h2>
        </div>
      </div>
    </section>
  );
}
