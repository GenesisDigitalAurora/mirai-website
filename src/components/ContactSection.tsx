import { useContactForm } from '../hooks/useContactForm';
import { SuccessMessage, ErrorMessage, FieldError, LoadingSpinner } from './FormMessage';

export default function ContactSection() {
  const {
    formData,
    status,
    validation,
    updateField,
    handleFieldBlur,
    submitForm,
    clearMessages,
    canSubmit
  } = useContactForm();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateField(name as keyof typeof formData, value);
  };

  const handleFieldBlurEvent = (fieldName: keyof typeof formData) => {
    handleFieldBlur(fieldName);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
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

            {/* Mensajes de éxito y error */}
            {status.successMessage && (
              <SuccessMessage
                message={status.successMessage}
                isVisible={status.isSuccess}
                onClose={clearMessages}
                contactId={status.contactId}
              />
            )}

            {status.error && (
              <ErrorMessage
                message={status.error}
                isVisible={!!status.error}
                onClose={clearMessages}
              />
            )}

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="w-full" noValidate>
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
                    onBlur={() => handleFieldBlurEvent('nombre')}
                    placeholder="Nombre"
                    required
                    disabled={status.isLoading}
                    className={`w-full px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 transition-all ${
                      validation.nombre 
                        ? 'focus:ring-red-500 bg-red-50' 
                        : 'focus:ring-secondary bg-white'
                    } ${status.isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
                    style={{
                      fontFamily: 'Mulish',
                      fontSize: '16px',
                      color: '#000000'
                    }}
                  />
                  <FieldError error={validation.nombre || ''} isVisible={!!validation.nombre} />
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
                    onBlur={() => handleFieldBlurEvent('apellido')}
                    placeholder="Apellido"
                    required
                    disabled={status.isLoading}
                    className={`w-full px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 transition-all ${
                      validation.apellido 
                        ? 'focus:ring-red-500 bg-red-50' 
                        : 'focus:ring-secondary bg-white'
                    } ${status.isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
                    style={{
                      fontFamily: 'Mulish',
                      fontSize: '16px',
                      color: '#000000'
                    }}
                  />
                  <FieldError error={validation.apellido || ''} isVisible={!!validation.apellido} />
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
                    onBlur={() => handleFieldBlurEvent('email')}
                    placeholder="Email"
                    required
                    disabled={status.isLoading}
                    className={`w-full px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 transition-all ${
                      validation.email 
                        ? 'focus:ring-red-500 bg-red-50' 
                        : 'focus:ring-secondary bg-white'
                    } ${status.isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
                    style={{
                      fontFamily: 'Mulish',
                      fontSize: '16px',
                      color: '#000000'
                    }}
                  />
                  <FieldError error={validation.email || ''} isVisible={!!validation.email} />
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
                    onBlur={() => handleFieldBlurEvent('telefono')}
                    placeholder="Teléfono/Celular"
                    disabled={status.isLoading}
                    className={`w-full px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 transition-all ${
                      validation.telefono 
                        ? 'focus:ring-red-500 bg-red-50' 
                        : 'focus:ring-secondary bg-white'
                    } ${status.isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
                    style={{
                      fontFamily: 'Mulish',
                      fontSize: '16px',
                      color: '#000000'
                    }}
                  />
                  <FieldError error={validation.telefono || ''} isVisible={!!validation.telefono} />
                </div>
              </div>

              {/* Botón de Enviar */}
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  disabled={status.isLoading || !canSubmit}
                  className={`px-8 py-3 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary ${
                    status.isLoading || !canSubmit
                      ? 'opacity-60 cursor-not-allowed' 
                      : 'hover:scale-105 cursor-pointer'
                  }`}
                  style={{
                    backgroundColor: status.isLoading || !canSubmit ? '#9CA3AF' : '#40B637',
                    color: '#ffffff',
                    fontFamily: 'Mulish',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    border: 'none',
                    minWidth: '200px',
                    minHeight: '48px'
                  }}
                  onMouseEnter={(e) => {
                    if (!status.isLoading && canSubmit) {
                      e.currentTarget.style.backgroundColor = '#369529';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!status.isLoading && canSubmit) {
                      e.currentTarget.style.backgroundColor = '#40B637';
                    }
                  }}
                >
                  {status.isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <LoadingSpinner size="small" />
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    'Enviar'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
