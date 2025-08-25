/**
 * Hook personalizado para manejar el formulario de contacto
 */

import { useState, useCallback } from 'react';
import { 
  submitContactForm, 
  formatErrorMessage, 
  ContactFormData, 
  ContactResponse, 
  ContactError 
} from '../services/contactService';

export interface FormState {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
}

export interface FormStatus {
  isLoading: boolean;
  isSubmitted: boolean;
  isSuccess: boolean;
  error: string | null;
  successMessage: string | null;
  contactId: string | null;
}

export interface FormValidation {
  nombre: string | null;
  apellido: string | null;
  email: string | null;
  telefono: string | null;
}

const initialFormState: FormState = {
  nombre: '',
  apellido: '',
  email: '',
  telefono: ''
};

const initialFormStatus: FormStatus = {
  isLoading: false,
  isSubmitted: false,
  isSuccess: false,
  error: null,
  successMessage: null,
  contactId: null
};

const initialValidation: FormValidation = {
  nombre: null,
  apellido: null,
  email: null,
  telefono: null
};

export function useContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<FormStatus>(initialFormStatus);
  const [validation, setValidation] = useState<FormValidation>(initialValidation);

  // Actualizar un campo del formulario
  const updateField = useCallback((name: keyof FormState, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error de validación del campo cuando el usuario empiece a escribir
    if (validation[name]) {
      setValidation(prev => ({
        ...prev,
        [name]: null
      }));
    }

    // Limpiar error general si existe
    if (status.error) {
      setStatus(prev => ({
        ...prev,
        error: null
      }));
    }
  }, [validation, status.error]);

  // Validar un campo específico
  const validateField = useCallback((name: keyof FormState, value: string): string | null => {
    switch (name) {
      case 'nombre':
        if (!value || value.trim().length < 2) {
          return 'El nombre debe tener al menos 2 caracteres';
        }
        break;
      
      case 'apellido':
        if (!value || value.trim().length < 2) {
          return 'El apellido debe tener al menos 2 caracteres';
        }
        break;
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value)) {
          return 'El correo electrónico debe tener un formato válido';
        }
        break;
      
      case 'telefono':
        if (value && value.trim().length > 0) {
          const phoneRegex = /^[\+]?[1-9][\d]{7,15}$/;
          const cleanPhone = value.replace(/[\s\-\(\)]/g, '');
          if (!phoneRegex.test(cleanPhone)) {
            return 'El teléfono debe tener un formato válido';
          }
        }
        break;
    }
    return null;
  }, []);

  // Validar todo el formulario
  const validateForm = useCallback((): boolean => {
    const newValidation: FormValidation = {
      nombre: validateField('nombre', formData.nombre),
      apellido: validateField('apellido', formData.apellido),
      email: validateField('email', formData.email),
      telefono: validateField('telefono', formData.telefono)
    };

    setValidation(newValidation);

    return !Object.values(newValidation).some(error => error !== null);
  }, [formData, validateField]);

  // Manejar blur de un campo (validación en tiempo real)
  const handleFieldBlur = useCallback((name: keyof FormState) => {
    const error = validateField(name, formData[name]);
    setValidation(prev => ({
      ...prev,
      [name]: error
    }));
  }, [formData, validateField]);

  // Enviar formulario
  const submitForm = useCallback(async () => {
    // Resetear estado
    setStatus(prev => ({
      ...prev,
      isLoading: true,
      error: null,
      successMessage: null
    }));

    try {
      // Validar formulario
      if (!validateForm()) {
        setStatus(prev => ({
          ...prev,
          isLoading: false,
          error: 'Por favor, corrige los errores en el formulario'
        }));
        return;
      }

      // Enviar datos al API
      const response = await submitContactForm(formData as ContactFormData);

      if (response.success && response.data) {
        // Éxito
        setStatus({
          isLoading: false,
          isSubmitted: true,
          isSuccess: true,
          error: null,
          successMessage: response.data.message || '¡Gracias! Tu mensaje ha sido enviado exitosamente. Te contactaremos pronto.',
          contactId: response.data.contactId || null
        });

        // Resetear formulario después del éxito
        setFormData(initialFormState);
        setValidation(initialValidation);

      } else {
        // Error del API
        const errorMessage = response.error ? formatErrorMessage(response.error) : 'Error al enviar el formulario';
        setStatus(prev => ({
          ...prev,
          isLoading: false,
          error: errorMessage
        }));
      }

    } catch (error) {
      // Error de red o inesperado
      console.error('Error al enviar formulario:', error);
      setStatus(prev => ({
        ...prev,
        isLoading: false,
        error: 'Error de conexión. Por favor, verifica tu internet e inténtalo nuevamente.'
      }));
    }
  }, [formData, validateForm]);

  // Resetear formulario
  const resetForm = useCallback(() => {
    setFormData(initialFormState);
    setStatus(initialFormStatus);
    setValidation(initialValidation);
  }, []);

  // Limpiar mensajes
  const clearMessages = useCallback(() => {
    setStatus(prev => ({
      ...prev,
      error: null,
      successMessage: null
    }));
  }, []);

  return {
    // Estado del formulario
    formData,
    status,
    validation,
    
    // Acciones
    updateField,
    handleFieldBlur,
    submitForm,
    resetForm,
    clearMessages,
    
    // Helpers
    isFieldValid: (name: keyof FormState) => validation[name] === null,
    hasErrors: Object.values(validation).some(error => error !== null),
    canSubmit: !status.isLoading && Object.values(validation).every(error => error === null)
  };
}
