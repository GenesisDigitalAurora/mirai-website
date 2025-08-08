import Image from 'next/image';

interface ContactInfo {
  icon: string;
  title: string;
  content: string;
  link?: string;
}

export default function LocationSection() {
  const contactData: ContactInfo[] = [
    {
      icon: '/MIRAI_Ubicacion_Location.svg',
      title: 'Ubicación',
      content: 'Córdoba 42, Piso 5, Suite B, Roma Norte, Cuauhtémoc, 06700, CDMX, México',
      link: 'https://www.google.com/maps/place/condominio+cordoba,+C%C3%B3rdoba+42,+Roma+Nte.,+Cuauht%C3%A9moc,+06700+Ciudad+de+M%C3%A9xico,+CDMX/@19.4223463,-99.1610178,16z/data=!4m6!3m5!1s0x85d1ff30f804aab7:0x5f7606de9b487edc!8m2!3d19.4225813!4d-99.1591505!16s%2Fg%2F11mtdk0dfp?hl=en&entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      icon: '/MIRAI_Ubicacion_Chat.svg',
      title: 'Teléfono',
      content: '(+52) 56 1055 2829',
      link: 'tel:+525610552829'
    },
    {
      icon: '/MIRAI_Ubicacion_Arroba.svg',
      title: 'Email',
      content: 'contacto@mirai.legal',
      link: 'mailto:contacto@mirai.legal'
    }
  ];

  // URL del iframe de Google Maps (embebido)
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6919167477394!2d-99.16101788509247!3d19.422546336863855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff30f804aab7%3A0x5f7606de9b487edc!2scondominio%20cordoba%2C%20C%C3%B3rdoba%2042%2C%20Roma%20Nte.%2C%20Cuauht%C3%A9moc%2C%2006700%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1691234567890!5m2!1sen!2smx";

  return (
    <section className="bg-white">
      {/* Información de Contacto */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {contactData.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Icono */}
                <div className="flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={`${item.title} Icon`}
                    width={60}
                    height={60}
                    className="w-15 h-15"
                  />
                </div>

                {/* Contenido de texto */}
                <div className="flex-1">
                  {/* Título */}
                  <h3 
                    className="mb-3"
                    style={{
                      fontFamily: 'Mulish',
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 3vw, 20px)',
                      lineHeight: '120%',
                      letterSpacing: '0%',
                      textAlign: 'left',
                      color: '#40B637' // Green
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Contenido */}
                  <div 
                    style={{
                      fontFamily: 'Mulish',
                      fontWeight: 400,
                      fontSize: 'clamp(14px, 2.5vw, 16px)',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      textAlign: 'left',
                      color: '#1E1E1E' // Dark gray
                    }}
                  >
                    {item.link ? (
                      <a 
                        href={item.link}
                        target={item.title === 'Ubicación' ? '_blank' : undefined}
                        rel={item.title === 'Ubicación' ? 'noopener noreferrer' : undefined}
                        className="hover:text-secondary transition-colors duration-200"
                        style={{ 
                          textDecoration: 'none',
                          color: 'inherit'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#40B637';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#1E1E1E';
                        }}
                      >
                        {item.content}
                      </a>
                    ) : (
                      item.content
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mapa de Google Maps - Ancho completo */}
      <div className="w-full h-96 md:h-[500px]">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de MIRAI"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}

