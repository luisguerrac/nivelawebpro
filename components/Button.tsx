
import React from 'react';
import { APP_URL } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  onClick,
  href,
  style
}) => {
  const variantClass = `btn-${variant}`;
  const Component = href ? 'a' : 'button';
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    // @ts-ignore
    <Component 
      className={`btn ${variantClass} ${className}`} 
      style={style}
      {...props}
    >
      {children}
      {(variant === 'primary' || variant === 'dark') && <ArrowRight style={{marginLeft: '0.5rem'}} size={20} />}
    </Component>
  );
};

export const AppLinkButton: React.FC<{className?: string, text?: string, variant?: any, style?: React.CSSProperties}> = ({ 
  className = "", 
  text = "Entrar a NIVELAPP", 
  variant = "primary",
  style
}) => (
  <Button href={APP_URL} variant={variant} className={className} style={style}>
    {text}
  </Button>
);
