import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
  easing?: 'default' | 'fast';
}

export default function AnimatedSection({ 
  children, 
  animation = 'fadeUp', 
  delay = 0,
  duration = 800,
  className = '',
  easing = 'default'
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const getAnimationStyles = () => {
    const timingFunction = easing === 'fast' 
      ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' // easeOutQuad - más rápido
      : 'cubic-bezier(0.4, 0, 0.2, 1)'; // easeOutCubic - por defecto
    
    const baseStyles = {
      transition: `all ${duration}ms ${timingFunction}`,
      transitionDelay: `${delay}ms`
    };

    if (!isVisible) {
      switch (animation) {
        case 'fadeUp':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateY(50px)'
          };
        case 'fadeDown':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateY(-50px)'
          };
        case 'fadeLeft':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateX(50px)'
          };
        case 'fadeRight':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateX(-50px)'
          };
        case 'fade':
          return {
            ...baseStyles,
            opacity: 0
          };
        default:
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateY(50px)'
          };
      }
    } else {
      return {
        ...baseStyles,
        opacity: 1,
        transform: 'translateY(0) translateX(0)'
      };
    }
  };

  return (
    <div 
      ref={ref} 
      style={getAnimationStyles()}
      className={className}
    >
      {children}
    </div>
  );
}
