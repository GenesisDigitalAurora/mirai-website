import Image from 'next/image';

interface CardServiceProps {
  iconPath: string;
  title: string;
  subtitle?: string;
  content: string;
  buttonText?: string;
  titleColor?: string;
  onViewMore?: () => void;
}

export default function CardService({ iconPath, title, subtitle, content, buttonText = "Ver más", titleColor = "#40B637", onViewMore }: CardServiceProps) {
  // Función para procesar el título y aplicar bold a las partes en **texto**
  const processTitle = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // Texto en bold (peso 900)
        const boldText = part.slice(2, -2);
        return (
          <span key={index} style={{ fontWeight: 900 }}>
            {boldText}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="bg-white border border-gray-400 rounded-lg p-8 text-center h-full flex flex-col max-w-sm mx-auto">
      {/* Icono */}
      <div className="flex justify-center mb-6">
        <Image
          src={iconPath}
          alt="Service Icon"
          width={80}
          height={80}
          className="w-20 h-20 opacity-60"
        />
      </div>

      {/* Título */}
      <h3 
        className="mb-2"
        style={{
          fontFamily: 'Mulish',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '120%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: titleColor
        }}
      >
        {processTitle(title)}
      </h3>

      {/* Subtítulo */}
      {subtitle && (
        <div 
          className="mb-6"
          style={{
            fontFamily: 'Mulish',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '120%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: titleColor
          }}
        >
          {subtitle}
        </div>
      )}

      {/* Contenido */}
      <div 
        className="flex-grow mb-6"
        style={{
          fontFamily: 'Mulish',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '150%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#000000'
        }}
      >
        {content}
      </div>

      {/* Botón Ver más */}
      <div className="mt-auto">
        <button 
          onClick={onViewMore}
          className="px-6 py-2 border-2 rounded-md transition-colors duration-200"
          style={{
            borderColor: titleColor,
            color: titleColor,
            fontFamily: 'Mulish',
            fontWeight: 500,
            fontSize: '14px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = titleColor;
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = titleColor;
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
