/**
 * Componentes para mostrar mensajes de éxito y error en el formulario
 */

import { useEffect, useState } from 'react';

interface MessageProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  isVisible: boolean;
  onClose?: () => void;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

export function FormMessage({ 
  message, 
  type, 
  isVisible, 
  onClose,
  autoClose = true,
  autoCloseDelay = 8000 
}: MessageProps) {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      
      if (autoClose && type === 'success') {
        const timer = setTimeout(() => {
          onClose?.();
        }, autoCloseDelay);
        
        return () => clearTimeout(timer);
      }
    } else {
      // Pequeño delay para la animación de salida
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, autoClose, autoCloseDelay, onClose, type]);

  if (!shouldRender) return null;

  const getMessageStyles = () => {
    const baseStyles = "p-4 rounded-lg border-l-4 mb-4 transition-all duration-300 ease-in-out";
    
    switch (type) {
      case 'success':
        return `${baseStyles} bg-green-50 border-green-400 text-green-800`;
      case 'error':
        return `${baseStyles} bg-red-50 border-red-400 text-red-800`;
      case 'warning':
        return `${baseStyles} bg-yellow-50 border-yellow-400 text-yellow-800`;
      case 'info':
        return `${baseStyles} bg-blue-50 border-blue-400 text-blue-800`;
      default:
        return `${baseStyles} bg-gray-50 border-gray-400 text-gray-800`;
    }
  };

  const getIconComponent = () => {
    const iconClass = "w-5 h-5 mr-3 flex-shrink-0";
    
    switch (type) {
      case 'success':
        return (
          <svg className={`${iconClass} text-green-500`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
        );
      case 'error':
        return (
          <svg className={`${iconClass} text-red-500`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
          </svg>
        );
      case 'warning':
        return (
          <svg className={`${iconClass} text-yellow-500`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
          </svg>
        );
      case 'info':
        return (
          <svg className={`${iconClass} text-blue-500`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`${getMessageStyles()} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start">
        {getIconComponent()}
        <div className="flex-1">
          <p 
            className="font-medium"
            style={{
              fontFamily: 'Mulish',
              fontSize: '15px',
              lineHeight: '1.4'
            }}
          >
            {message}
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-3 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Cerrar mensaje"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

// Componente específico para mensajes de éxito
export function SuccessMessage({ 
  message, 
  isVisible, 
  onClose,
  contactId 
}: { 
  message: string; 
  isVisible: boolean; 
  onClose?: () => void;
  contactId?: string | null;
}) {
  return (
    <FormMessage
      message={contactId ? `${message} (ID: ${contactId.slice(-8)})` : message}
      type="success"
      isVisible={isVisible}
      onClose={onClose}
      autoClose={true}
      autoCloseDelay={10000}
    />
  );
}

// Componente específico para mensajes de error
export function ErrorMessage({ 
  message, 
  isVisible, 
  onClose 
}: { 
  message: string; 
  isVisible: boolean; 
  onClose?: () => void;
}) {
  return (
    <FormMessage
      message={message}
      type="error"
      isVisible={isVisible}
      onClose={onClose}
      autoClose={false}
    />
  );
}

// Componente para mostrar errores de validación de campos
export function FieldError({ 
  error, 
  isVisible 
}: { 
  error: string; 
  isVisible: boolean;
}) {
  if (!isVisible || !error) return null;
  
  return (
    <div className="mt-1 text-red-600 text-sm flex items-center">
      <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
      </svg>
      <span 
        style={{
          fontFamily: 'Mulish',
          fontSize: '13px',
          fontWeight: 400
        }}
      >
        {error}
      </span>
    </div>
  );
}

// Componente de loading
export function LoadingSpinner({ size = 'medium' }: { size?: 'small' | 'medium' | 'large' }) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  return (
    <div className="flex justify-center items-center">
      <svg 
        className={`${sizeClasses[size]} animate-spin text-white`} 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}
