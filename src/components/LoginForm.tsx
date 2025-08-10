import { useState } from 'react';
import Image from 'next/image';

export default function LoginForm() {
  const [activeTab, setActiveTab] = useState<'clientes' | 'socios'>('clientes');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se manejaría la lógica de autenticación
    console.log('Login attempt:', { type: activeTab, ...formData });
  };

  return (
    <section className="flex items-center justify-center">
      <div className="w-full mx-auto">
        <div className="bg-white overflow-hidden flex min-h-[600px]">
          
          {/* Lado Izquierdo - Imagen */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <Image
              src="/MIRAI_AccessUsers.webp"
              alt="Acceso de usuarios MIRAI"
              fill
              className="object-cover"
              style={{
                backgroundPosition: 'bottom center',
              }}
              priority
            />
          </div>

          {/* Lado Derecho - Formulario */}
          <div className="w-full lg:w-1/2 flex flex-col text-center center justify-center p-8 lg:p-12">

            {/* Título */}
            <div className="text-center mb-8">
              <h1 
                style={{
                  fontFamily: 'Mulish',
                  fontWeight: 700,
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  lineHeight: '120%',
                  color: '#921B95',
                  marginBottom: '8px'
                }}
              >
                Bienvenido
              </h1>
              <p 
                style={{
                  fontFamily: 'Mulish',
                  fontWeight: 400,
                  fontSize: 'clamp(16px, 2.5vw, 18px)',
                  lineHeight: '140%',
                  color: '#666666'
                }}
              >
                Accede a tu cuenta para continuar
              </p>
            </div>

            {/* Tabs */}
            <div className="mb-8">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('clientes')}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-all duration-300 ${
                    activeTab === 'clientes'
                      ? 'border-b-2 border-purple-600 text-purple-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  style={{
                    fontFamily: 'Mulish',
                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                    fontWeight: activeTab === 'clientes' ? 600 : 400
                  }}
                >
                  Clientes
                </button>
                <button
                  onClick={() => setActiveTab('socios')}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-all duration-300 ${
                    activeTab === 'socios'
                      ? 'border-b-2 border-purple-600 text-purple-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  style={{
                    fontFamily: 'Mulish',
                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                    fontWeight: activeTab === 'socios' ? 600 : 400
                  }}
                >
                  Socios
                </button>
              </div>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Campo Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="w-full px-4 py-4 bg-gray-100 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  style={{
                    fontFamily: 'Mulish',
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    fontWeight: 400
                  }}
                />
              </div>

              {/* Campo Password */}
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                  className="w-full px-4 py-4 bg-gray-100 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 pr-12"
                  style={{
                    fontFamily: 'Mulish',
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    fontWeight: 400
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500 hover:text-green-600 transition-colors duration-200"
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                    </svg>
                  )}
                </button>
              </div>

              {/* Recordar contraseña */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                  />
                  <span 
                    className="ml-2 text-sm text-gray-600"
                    style={{
                      fontFamily: 'Mulish',
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      fontWeight: 400
                    }}
                  >
                    Recordar contraseña
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm text-purple-600 hover:text-purple-700 transition-colors duration-200"
                  style={{
                    fontFamily: 'Mulish',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 500
                  }}
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              {/* Botón Enviar */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
                style={{
                  fontFamily: 'Mulish',
                  fontSize: 'clamp(16px, 2.5vw, 18px)',
                  fontWeight: 600
                }}
              >
                {activeTab === 'clientes' ? 'Acceder como Cliente' : 'Acceder como Socio'}
              </button>

            </form>

            {/* Divider */}
            <div className="mt-8 text-center">
              <p 
                className="text-gray-500"
                style={{
                  fontFamily: 'Mulish',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 400
                }}
              >
                ¿Necesitas acceso? 
                <button 
                  className="ml-1 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
                  style={{
                    fontFamily: 'Mulish',
                    fontWeight: 500
                  }}
                >
                  Contacta a tu asesor
                </button>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
