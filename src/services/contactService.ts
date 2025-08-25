/**
 * Servicio para manejar las llamadas al API de contacto
 */

import { CONTACT_API_URL, API_TIMEOUT, API_RETRY_ATTEMPTS } from '../config/api';

// Tipos de datos
export interface ContactFormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  contactId?: string;
  emailSent?: boolean;
  emailProvider?: string;
  timestamp?: string;
  requestId?: string;
}

export interface ContactError {
  error: string;
  message: string;
  details?: string[];
  timestamp?: string;
  requestId?: string;
}

export interface ApiResponse {
  success: boolean;
  data?: ContactResponse;
  error?: ContactError;
  statusCode?: number;
}

/**
 * Valida los datos del formulario antes de enviar
 */
function validateFormData(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Validar nombre
  if (!data.nombre || data.nombre.trim().length < 2) {
    errors.push('El nombre debe tener al menos 2 caracteres');
  }

  // Validar apellido
  if (!data.apellido || data.apellido.trim().length < 2) {
    errors.push('El apellido debe tener al menos 2 caracteres');
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('El correo electrónico debe tener un formato válido');
  }

  // Validar teléfono (opcional pero si se proporciona debe ser válido)
  if (data.telefono && data.telefono.trim().length > 0) {
    const phoneRegex = /^[\+]?[1-9][\d]{7,15}$/;
    const cleanPhone = data.telefono.replace(/[\s\-\(\)]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      errors.push('El teléfono debe tener un formato válido (mínimo 8 dígitos)');
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Realiza una llamada HTTP con retry automático
 */
async function fetchWithRetry(
  url: string, 
  options: RequestInit, 
  retries: number = API_RETRY_ATTEMPTS
): Promise<Response> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    if (retries > 0 && (error as Error).name !== 'AbortError') {
      console.warn(`Error en llamada al API, reintentando... (${retries} intentos restantes)`);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Esperar 1 segundo
      return fetchWithRetry(url, options, retries - 1);
    }
    throw error;
  }
}

/**
 * Envía los datos del formulario de contacto al API
 */
export async function submitContactForm(formData: ContactFormData): Promise<ApiResponse> {
  try {
    // Validar datos antes de enviar
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      return {
        success: false,
        error: {
          error: 'Validation Error',
          message: 'Por favor, verifica los datos ingresados',
          details: validation.errors
        },
        statusCode: 400
      };
    }

    // Limpiar y preparar datos
    const cleanData = {
      nombre: formData.nombre.trim(),
      apellido: formData.apellido.trim(),
      email: formData.email.trim().toLowerCase(),
      telefono: formData.telefono.replace(/[\s\-\(\)]/g, '')
    };

    console.log(`🚀 Enviando formulario de contacto a: ${CONTACT_API_URL}`);

    // Realizar llamada al API
    const response = await fetchWithRetry(CONTACT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(cleanData)
    });

    const responseData = await response.json();

    if (response.ok) {
      console.log('✅ Formulario enviado exitosamente:', responseData);
      return {
        success: true,
        data: responseData,
        statusCode: response.status
      };
    } else {
      console.error('❌ Error del servidor:', responseData);
      return {
        success: false,
        error: responseData,
        statusCode: response.status
      };
    }

  } catch (error) {
    console.error('❌ Error al enviar formulario:', error);

    // Manejar diferentes tipos de errores
    let errorMessage = 'Error de conexión. Por favor, inténtalo nuevamente.';
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        errorMessage = 'La solicitud ha tardado mucho tiempo. Por favor, verifica tu conexión e inténtalo nuevamente.';
      } else if (error.message.includes('fetch')) {
        errorMessage = 'No se pudo conectar con el servidor. Por favor, verifica tu conexión a internet.';
      }
    }

    return {
      success: false,
      error: {
        error: 'Network Error',
        message: errorMessage,
        details: [error instanceof Error ? error.message : 'Error desconocido']
      },
      statusCode: 0
    };
  }
}

/**
 * Formatea los errores para mostrar al usuario
 */
export function formatErrorMessage(error: ContactError): string {
  if (error.details && error.details.length > 0) {
    return error.details.join(', ');
  }
  return error.message || 'Ha ocurrido un error inesperado';
}

/**
 * Verifica si el API está disponible
 */
export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetch(CONTACT_API_URL, {
      method: 'OPTIONS',
      headers: {
        'Origin': window.location.origin
      }
    });
    return response.ok || response.status === 404; // 404 es OK para OPTIONS
  } catch (error) {
    console.warn('API no disponible:', error);
    return false;
  }
}
