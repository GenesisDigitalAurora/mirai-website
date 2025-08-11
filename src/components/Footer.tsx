import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      {/* Texto superior */}
      <div className="pt-30 py-6 px-4">
        <div
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
          <Link 
            href="/avisos-legales" 
            className="hover:text-[#921B95] transition-colors duration-200 cursor-pointer"
          >
            Condiciones de uso
          </Link>
          {'. '}
          <Link 
            href="/avisos-legales" 
            className="hover:text-[#921B95] transition-colors duration-200 cursor-pointer"
          >
            Aviso de Privacidad Integral
          </Link>
          {'. '}
          <Link 
            href="/avisos-legales" 
            className="hover:text-[#921B95] transition-colors duration-200 cursor-pointer"
          >
            Aviso de uso de cookies
          </Link>
          {'.'}
        </div>
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
