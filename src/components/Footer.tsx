export default function Footer() {
  return (
    <footer>
      {/* Texto superior */}
      <div className="pt-30 py-6 px-4">
        <p
          style={{
            color: '#B3B3B3',
            textAlign: 'center',
            fontFamily: 'Mulish',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal'
          }}
        >
          Condiciones de uso. Aviso de Privacidad Integral. Aviso de uso de cookies.
        </p>
      </div>

      {/* Texto inferior con fondo morado */}
      <div 
        className="w-full py-4 px-4"
        style={{
          backgroundColor: '#921B95' // Purple background
        }}
      >
        <p
          style={{
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Mulish',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal'
          }}
        >
          ©2025 Asesores Legales Mirai, S.C. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
