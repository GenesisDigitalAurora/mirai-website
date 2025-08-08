import Image from 'next/image';

interface CardMemberProps {
  photo: string;
  name: string;
  position: string;
  onClick?: () => void;
}

export default function CardMember({ photo, name, position, onClick }: CardMemberProps) {
  return (
    <div 
      className="relative bg-white rounded-lg overflow-hidden cursor-pointer group w-full"
      onClick={onClick}
    >
      {/* Contenedor de la foto con overflow hidden para el zoom */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={photo}
          alt={name}
          width={300}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-130"
          priority
        />
        
        {/* Overlay oscuro sutil en hover */}
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-all duration-300"></div>
      </div>

      {/* Información en la base de la card */}
      <div className="flex absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4" style={{ height: '20%' }}>
        <div className="text-white w-full">
          {/* Nombre */}
          <h3 
            className="text-lg font-bold mb-1"
            style={{
              fontFamily: 'Mulish',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '120%',
              letterSpacing: '0%'
            }}
          >
            {name}
          </h3>
          
          {/* Cargo */}
          <p 
            className="text-sm opacity-90 mb-3"
            style={{
              fontFamily: 'Mulish',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '120%',
              letterSpacing: '0%'
            }}
          >
            {position}
          </p>
        </div>

        {/* Botón con icono de flecha */}
        <div className="flex justify-end">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Image
              src="/icon_arrow.svg"
              alt="Ver más"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}
