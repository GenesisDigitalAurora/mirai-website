import { useState, useEffect } from 'react';
import Image from 'next/image';
import newsData from '@/data/news.json';

interface NewsItem {
  id: number;
  category: string;
  date: string;
  title: string;
  content: string;
  image: string;
  pdfUrl: string;
}

export default function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const news = newsData as NewsItem[];

  // Carrusel automático cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === news.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 6 segundos entre cambios

    return () => clearInterval(interval);
  }, [news.length]);

  // Función para ir a una noticia específica
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Función para procesar texto con bold
  const processText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <span key={index} style={{ fontWeight: 700 }}>{part.slice(2, -2)}</span>;
      }
      return part;
    });
  };



  return (
    <section className="bg-white py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título Principal */}
        <h2 
          className="mb-4"
          style={{
            fontFamily: 'Mulish',
            fontWeight: 700,
            fontSize: 'clamp(24px, 4vw, 32px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#921B95' // Purple
          }}
        >
          Últimas noticias
        </h2>

        {/* Línea horizontal verde */}
        <div className="flex justify-center mb-8 md:mb-12">
          <hr 
            className="border-0"
            style={{
              width: '80px',
              height: '3px',
              backgroundColor: '#40B637', // Green
              borderRadius: '2px'
            }}
          />
        </div>

        {/* Contenedor del Carrusel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-900 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {news.map((item, index) => (
              <div key={item.id} className="w-full flex-shrink-0">
                {/* Grid de 2 columnas - Móvil: Imagen arriba, contenido abajo */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">

                  {/* Columna Derecha - Imagen (Móvil: aparece primero) */}
                  <div className="relative order-1 lg:order-2">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        priority={index === currentIndex}
                      />
                    </div>
                  </div>
                  
                  {/* Columna Izquierda - Contenido (Móvil: aparece segundo) */}
                  <div className="space-y-4 p-10 md:space-y-6 order-2 lg:order-1">
                    {/* Categoría y Fecha */}
                    <div
                      style={{
                        fontFamily: 'Mulish',
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 3vw, 16px)', // Responsive
                        lineHeight: '120%', // Improved for mobile
                        letterSpacing: '0%',
                        color: '#40B637' // Green for category
                      }}
                    >
                      <span style={{ fontWeight: 700 }}>{item.category}</span> {item.date}
                    </div>

                    {/* Título de la Noticia */}
                    <h3 
                      style={{
                        fontFamily: 'Mulish',
                        fontWeight: 700,
                        fontSize: 'clamp(20px, 5vw, 24px)', // Más responsive
                        lineHeight: '120%', // Improved for mobile
                        letterSpacing: '0%',
                        color: '#921B95' // Purple
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Contenido de la Noticia */}
                    <p 
                      className="text-left md:text-justify" // Texto izquierda en móvil, justificado en desktop
                      style={{
                        fontFamily: 'Mulish',
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 4vw, 18px)', // Más responsive
                        lineHeight: '150%', // Improved readability
                        letterSpacing: '0%',
                        color: '#000000' // Black
                      }}
                    >
                      {processText(item.content)}
                    </p>

                    {/* Botón Descargar PDF */}
                    <div className="pt-2 md:pt-4">
                      <a
                        href={item.pdfUrl}
                        download
                        className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 border-2 rounded-md transition-colors duration-200 w-full md:w-auto justify-center md:justify-start"
                        style={{
                          borderColor: '#40B637',
                          color: '#40B637',
                          fontFamily: 'Mulish',
                          fontWeight: 500,
                          fontSize: 'clamp(12px, 3vw, 14px)', // Responsive
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#40B637';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#40B637';
                        }}
                      >
                        Descargar PDF
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores (Bullets) */}
        <div className="flex justify-center pt-20 mt-6 md:mt-8 gap-1 md:gap-2">
          {news.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all duration-300 touch-manipulation relative" // Better mobile touch
              style={{
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                backgroundColor: index === currentIndex ? '#921B95' : '#CCCCCC',
                border: 'none',
                cursor: 'pointer',
                padding: '5px', // Área de toque invisible más grande para móviles
              }}
              aria-label={`Ir a noticia ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
