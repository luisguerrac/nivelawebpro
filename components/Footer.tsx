
import React from 'react';
import { Brain, Github, Twitter, Linkedin, Heart } from 'lucide-react';
import { AppLinkButton } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <div className="logo-icon">
                <Brain size={24} />
              </div>
              <span className="logo-text" style={{color: 'white'}}>
                NIVEL<span className="logo-accent">APP</span>
              </span>
            </div>
            <p className="footer-text">
              Empoderando a la próxima generación de profesionales con herramientas de IA de vanguardia. Educación libre, abierta y potente.
            </p>
            <div style={{display: 'flex', gap: '1.25rem'}}>
              {[Twitter, Github, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" style={{padding: '0.625rem', borderRadius: '50%', backgroundColor: '#1e293b', color: '#94a3b8', transition: 'all 0.3s', display: 'flex'}}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-h4">Plataforma</h4>
            <ul className="footer-ul">
              <li><a href="#features" className="footer-link">Características</a></li>
              <li><a href="#use-cases" className="footer-link">Casos de Uso</a></li>
              <li><a href="#" className="footer-link">Simulacros</a></li>
              <li><a href="#" className="footer-link">API para Colegios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-h4">Recursos</h4>
            <ul className="footer-ul">
              <li><a href="#" className="footer-link">Guía de Estudio</a></li>
              <li><a href="#" className="footer-link">Blog Académico</a></li>
              <li><a href="#" className="footer-link">Soporte 24/7</a></li>
              <li><a href="#" className="footer-link">Privacidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-h4">Tu Futuro</h4>
            <p className="footer-text">
              No dejes tu ingreso a la suerte. Obtén la ventaja competitiva que necesitas hoy.
            </p>
            <AppLinkButton style={{width: '100%', padding: '1rem', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(2, 132, 199, 0.2)'}} text="Entrar a la App" />
          </div>
        </div>

        <div style={{borderTop: '1px solid #1e293b', paddingTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#64748b', fontSize: '0.875rem'}}>
          <p style={{marginBottom: '1rem', fontWeight: 500, textAlign: 'center'}}>
            &copy; {new Date().getFullYear()} NIVELAPP. Hecho con <Heart size={14} color="#ef4444" fill="#ef4444" style={{display: 'inline'}} /> para estudiantes de LATAM.
          </p>
          <div style={{display: 'flex', gap: '2rem'}}>
            <a href="#" className="footer-link">Términos</a>
            <a href="#" className="footer-link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
