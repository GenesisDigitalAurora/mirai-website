import Image from 'next/image';

interface ContactInfo {
  icon: string;
  title: string;
  content: string;
  link?: string;
}

interface LocationInfo {
  city: string;
  address: string;
  mapEmbedUrl: string;
}

export default function LocationSection() {
  // Información de contacto general (teléfono y email)
  const contactData: ContactInfo[] = [
    {
      icon: '/MIRAI_Ubicacion_Chat.svg',
      title: 'Teléfono',
      content: '(+52) 55 55331523',
      link: 'tel:+525555331523'
    },
    {
      icon: '/MIRAI_Ubicacion_Arroba.svg',
      title: 'Email',
      content: 'contacto@mirai.legal',
      link: 'mailto:contacto@mirai.legal'
    }
  ];

  // Información de las oficinas
  const locations: LocationInfo[] = [
    {
      city: 'Ciudad de México',
      address: 'Córdoba 42, Piso 5, Suite B, Roma Norte, Cuauhtémoc, 06700, CDMX, México',
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6919167477394!2d-99.16101788509247!3d19.422546336863855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff30f804aab7%3A0x5f7606de9b487edc!2scondominio%20cordoba%2C%20C%C3%B3rdoba%2042%2C%20Roma%20Nte.%2C%20Cuauht%C3%A9moc%2C%2006700%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1691234567890!5m2!1sen!2smx"
    },
    {
      city: 'Monterrey',
      address: 'Lázaro Cárdenas 1007, Residencial Santa Barbara, CP. 66266, San Pedro Garza García, Monterrey, Nuevo León',
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.3425234567!2d-100.34487558507856!3d25.658194183710485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be0ee3b00d23%3A0x6920e2f37ee31498!2sAv%20L%C3%A1zaro%20C%C3%A1rdenas%20%231007%2C%20Residencial%20Santa%20Barbara%2C%2066266%20San%20Pedro%20Garza%20Garc%C3%ADa%2C%20N.L.!5e0!3m2!1sen!2smx!4v1691234567891!5m2!1sen!2smx"
    }
  ];

  return (
    <section className="bg-white">
      {/* Información de Contacto General */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white px-4 py-8 md:py-12">
          <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
            {contactData.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
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

      {/* Sección de Ubicaciones */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="space-y-4">
              {/* Información de la oficina */}
              <div className="text-center mb-6">
                <h3 
                  className="mb-3"
                  style={{
                    fontFamily: 'Mulish',
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 3vw, 24px)',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#921B95' // Purple
                  }}
                >
                  Oficina {location.city}
                </h3>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/MIRAI_Ubicacion_Location.svg"
                    alt="Location Icon"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <div className="h-16 flex items-center justify-center">
                  <p 
                    style={{
                      fontFamily: 'Mulish',
                      fontWeight: 400,
                      fontSize: 'clamp(14px, 2.5vw, 16px)',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      textAlign: 'center',
                      color: '#1E1E1E'
                    }}
                  >
                    {location.address}
                  </p>
                </div>
              </div>

              {/* Mapa */}
              <div className="w-full h-64 md:h-80">
                <iframe
                  src={location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Ubicación de MIRAI - ${location.city}`}
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

