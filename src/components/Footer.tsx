import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      {/* Redes Sociales */}
      <div className="pt-30 py-6 px-4">
        <div className="flex justify-center items-center gap-6">
          <Link 
            href="https://www.linkedin.com/company/miraiabogados/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <Image
              src="/linkedin-icon.svg"
              alt="LinkedIn MIRAI Abogados"
              width={50}
              height={50}
            />
          </Link>
          <Link 
            href="https://www.facebook.com/profile.php?id=61575805150590" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <Image
              src="/facebook-icon.svg"
              alt="Facebook MIRAI Abogados"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>

      {/* Enlaces legales */}
      <div className="pb-6 px-4">
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
            href="/avisos-legales#condiciones-uso" 
            className="hover:text-[#921B95] transition-colors duration-200 cursor-pointer underline decoration-1 underline-offset-2"
          >
            Condiciones de uso
          </Link>
          {'. '}
          <Link 
            href="/avisos-legales#aviso-privacidad" 
            className="hover:text-[#921B95] transition-colors duration-200 cursor-pointer underline decoration-1 underline-offset-2"
          >
            Aviso de Privacidad Integral
          </Link>
          {'. '}
          <Link 
            href="/avisos-legales#aviso-cookies" 
            className="hover:text-[#921B95] transition-colors duration-200 cursor-pointer underline decoration-1 underline-offset-2"
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
