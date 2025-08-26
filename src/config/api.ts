/**
 * Configuración de API para el servicio de contacto
 */

// URLs del API según el entorno
const API_CONFIG = {
  development: {
    baseUrl: 'https://b6ktmutk57.execute-api.us-east-1.amazonaws.com/dev',
    endpoints: {
      contact: '/contact'
    }
  },
  production: {
    baseUrl: 'https://q28rf6zalk.execute-api.us-east-1.amazonaws.com/prod',
    endpoints: {
      contact: '/contact'
    }
  }
};

// Determinar el entorno actual
const isDevelopment = process.env.NODE_ENV === 'development';
const currentConfig = isDevelopment ? API_CONFIG.development : API_CONFIG.production;

// URL completa del endpoint de contacto
export const CONTACT_API_URL = `${currentConfig.baseUrl}${currentConfig.endpoints.contact}`;

// Configuración general
export const API_TIMEOUT = 10000; // 10 segundos
export const API_RETRY_ATTEMPTS = 2;

export default {
  CONTACT_API_URL,
  API_TIMEOUT,
  API_RETRY_ATTEMPTS,
  isDevelopment
};
