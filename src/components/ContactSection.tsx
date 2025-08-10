import { useState } from 'react';

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica de envío del formulario
  };

  return (
    <section className="bg-white py-8 md:pt-16 px-4">
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
          Contáctanos
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

        {/* Contenedor del Formulario con Background */}
        <div 
          className="relative rounded-lg overflow-hidden"
          style={{
            backgroundImage: 'url(/MIRAI_Contact_BG.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay para mejorar legibilidad */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Contenido del Formulario */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] px-6 md:px-12 pt-12 pb-8 md:pb-12">
            
            {/* Título del Formulario */}
            <div className="text-center mb-8">
              <h3 
                className="mb-2"
                style={{
                  fontFamily: 'Mulish',
                  fontWeight: 900,
                  fontSize: 'clamp(28px, 5vw, 36px)',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#ffffff'
                }}
              >
                Agenda tu asesoría
              </h3>

              {/* Línea verde debajo del título */}
              <div className="flex justify-center mb-6">
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

              {/* Subtítulo */}
              <p 
                style={{
                  fontFamily: 'Mulish',
                  fontWeight: 400,
                  fontSize: 'clamp(16px, 3vw, 18px)',
                  lineHeight: '120%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#ffffff'
                }}
              >
                Nuestros abogados están listos para ayudarte.
              </p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                
                {/* Nombre */}
                <div>
                  <label 
                    htmlFor="nombre"
                    className="block mb-2"
                    style={{
                      fontFamily: 'Mulish',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: '#ffffff'
                    }}
                  >
                    *Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Nombre"
                    required
                    className="w-full px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    style={{
                      fontFamily: 'Mulish',
                      fontSize: '16px',
                      backgroundColor: '#ffffff',
                      color: '#000000'
                    }}
                  />
                </div>

                {/* Apellido */}
                <div>
                  <label 
                    htmlFor="apellido"
                    className="block mb-2"
                    style={{
                      fontFamily: 'Mulish',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: '#ffffff'
                    }}
                  >
                    *Apellido
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    placeholder="Apellido"
                    required
                    className="w-full px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    style={{
                      fontFamily: 'Mulish',
                      fontSize: '16px',
                      backgroundColor: '#ffffff',
                      color: '#000000'
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label 
                    htmlFor="email"
                    className="block mb-2"
                    style={{
                      fontFamily: 'Mulish',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: '#ffffff'
                    }}
                  >
                    *Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    style={{
                      fontFamily: 'Mulish',
                      fontSize: '16px',
                      backgroundColor: '#ffffff',
                      color: '#000000'
                    }}
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label 
                    htmlFor="telefono"
                    className="block mb-2"
                    style={{
                      fontFamily: 'Mulish',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: '#ffffff'
                    }}
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="Teléfono/Celular"
                    className="w-full px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    style={{
                      fontFamily: 'Mulish',
                      fontSize: '16px',
                      backgroundColor: '#ffffff',
                      color: '#000000'
                    }}
                  />
                </div>
              </div>

              {/* Botón de Enviar */}
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary"
                  style={{
                    backgroundColor: '#40B637',
                    color: '#ffffff',
                    fontFamily: 'Mulish',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    border: 'none',
                    cursor: 'pointer',
                    minWidth: '200px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#369529';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#40B637';
                  }}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
