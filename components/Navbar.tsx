
import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { AppLinkButton } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'glass-nav navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="container nav-content">
        {/* Logo */}
        <div className="nav-logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="logo-icon">
            <Brain size={24} />
          </div>
          <span className="logo-text">
            NIVEL<span className="logo-accent">APP</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links-desktop">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <div style={{paddingLeft: '1rem'}}>
             <AppLinkButton style={{padding: '0.625rem 1.5rem', fontSize: '0.875rem'}} text="Iniciar App" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="mobile-menu-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mobile-dropdown">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="nav-link"
              style={{padding: '0.5rem 0', fontSize: '1.125rem', fontWeight: 'bold'}}
            >
              {link.name}
            </a>
          ))}
          <div style={{paddingTop: '1rem'}}>
            <AppLinkButton className="w-full" text="Iniciar App" style={{width: '100%'}} />
          </div>
        </div>
      )}
    </nav>
  );
};
