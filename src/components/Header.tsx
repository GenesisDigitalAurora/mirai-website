import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80; // Altura aproximada del header fijo
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    // Cerrar menú móvil si está abierto
    setIsMobileMenuOpen(false);
  };

  // Enlaces de navegación izquierda
  const leftNavLinks = [
    { name: '¿Quiénes somos?', href: '#quienes-somos' },
    { name: 'Prácticas', href: '#practicas' },
    { name: 'Industrias', href: '#practicas' } // Industrias también va a Prácticas/Servicios
  ];

  // Enlaces de navegación derecha
  const rightNavLinks = [
    { name: 'Equipo', href: '#equipo' },
    { name: 'Noticias', href: '#noticias' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg"
      style={{ fontFamily: 'Mulish, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between py-4">
          {/* Navegación Izquierda */}
          <nav className="flex items-center space-x-8">
            {leftNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-white hover:text-primary-200 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Logo Centrado */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/MIRAI_MainLogo.svg"
                alt="MIRAI Logo"
                width={140}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navegación Derecha */}
          <nav className="flex items-center space-x-8">
            {rightNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-white hover:text-primary-200 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/MIRAI_MainLogo.svg"
                alt="MIRAI Logo"
                width={120}
                height={28}
                className="h-7 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-200 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir menú principal</span>
            {!isMobileMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-primary-400 bg-primary-600">
              {/* Enlaces de navegación izquierda en mobile */}
              <div className="mb-4">
                <p className="text-primary-200 text-xs font-semibold uppercase tracking-wide mb-2 px-3">
                  Empresa
                </p>
                {leftNavLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary-200 hover:bg-primary-700 transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Enlaces de navegación derecha en mobile */}
              <div>
                <p className="text-primary-200 text-xs font-semibold uppercase tracking-wide mb-2 px-3">
                  Recursos
                </p>
                {rightNavLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary-200 hover:bg-primary-700 transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}