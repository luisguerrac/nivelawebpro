
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { UseCases } from './components/UseCases';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AppLinkButton } from './components/Button';
import { Gift, Sparkles, AlertCircle, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BetaModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="modal-overlay"
  >
    <motion.div 
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="modal-container"
    >
      <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '0.625rem', background: 'linear-gradient(to right, #0ea5e9, #7c3aed)'}}></div>
      <button 
        onClick={onClose}
        className="modal-close"
      >
        <X size={20} />
      </button>
      
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        <div style={{width: '5rem', height: '5rem', backgroundColor: '#f0f9ff', color: '#0284c7', borderRadius: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', transform: 'rotate(3deg)'}}>
          <AlertCircle size={48} />
        </div>
        <h3 style={{fontSize: '1.875rem', fontWeight: 900, color: '#020617', marginBottom: '1rem', letterSpacing: '-0.025em'}}>Acceso Beta</h3>
        <p style={{color: '#475569', marginBottom: '2.5rem', fontSize: '1.125rem', lineHeight: 1.625}}>
          NIVELAPP está en fase de lanzamiento. Únete ahora para ser de los primeros en experimentar el poder de la <span style={{color: '#0284c7', fontWeight: 'bold', textDecoration: 'underline', textDecorationColor: '#bae6fd', textUnderlineOffset: '4px'}}>Educación con IA</span>.
        </p>
        <button 
          onClick={onClose}
          className="btn btn-dark"
          style={{width: '100%', padding: '1.25rem', borderRadius: '1rem', fontSize: '1.125rem', fontWeight: 900, boxShadow: '0 20px 25px -5px rgba(2, 6, 23, 0.2)'}}
        >
          Entendido, ¡Vamos!
          <ArrowRight size={20} style={{marginLeft: '0.75rem'}} />
        </button>
      </div>
    </motion.div>
  </motion.div>
);

const App: React.FC = () => {
  const [showBeta, setShowBeta] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBeta(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-app">
      <AnimatePresence>
        {showBeta && <BetaModal onClose={() => setShowBeta(false)} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        
        <Features />
        
        {/* Free Access Highlight */}
        <section className="free-highlight">
          <div style={{position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', maxWidth: '56rem', backgroundColor: 'rgba(14, 165, 233, 0.2)', filter: 'blur(150px)', zIndex: -10, borderRadius: '50%'}}></div>
          <div className="container" style={{maxWidth: '56rem'}}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backgroundColor: 'rgba(14, 165, 233, 0.1)', color: '#38bdf8', borderRadius: '1.5rem', marginBottom: '2rem', border: '1px solid rgba(14, 165, 233, 0.2)'}}
            >
              <Gift size={40} />
            </motion.div>
            <h2 style={{fontSize: '2.25rem', fontWeight: 900, color: 'white', marginBottom: '2rem', letterSpacing: '-0.05em'}}>
              Educación de Calidad, <span style={{color: '#0ea5e9'}}>Totalmente Gratis</span>
            </h2>
            <p style={{fontSize: '1.25rem', color: '#94a3b8', marginBottom: '3rem', lineHeight: 1.625}}>
              El acceso a la universidad debe ser un derecho, no un privilegio. Por eso, todas nuestras herramientas de IA son gratuitas. Sin tarjetas, sin suscripciones ocultas.
            </p>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#e2e8f0'}}>
                <div style={{width: '3rem', height: '3rem', borderRadius: '1rem', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #1e293b', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'}}>
                   <Sparkles size={24} color="#facc15" />
                </div>
                <div style={{textAlign: 'left'}}>
                  <p style={{fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b'}}>Inversión</p>
                  <p style={{fontSize: '1.25rem', fontWeight: 'bold'}}>$0.00 / mes</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#e2e8f0'}}>
                <div style={{width: '3rem', height: '3rem', borderRadius: '1rem', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #1e293b', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'}}>
                   <Sparkles size={24} color="#38bdf8" />
                </div>
                <div style={{textAlign: 'left'}}>
                  <p style={{fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b'}}>Acceso</p>
                  <p style={{fontSize: '1.25rem', fontWeight: 'bold'}}>Ilimitado</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky CTA for Mobile */}
        <div className="sticky-mobile-cta">
            <div style={{maxWidth: '28rem', margin: '0 auto', pointerEvents: 'auto'}}>
              <AppLinkButton 
                style={{width: '100%', borderRadius: '1rem', padding: '1.25rem', boxShadow: 'var(--shadow-brand)', fontWeight: 900, fontSize: '1.125rem', textTransform: 'uppercase', letterSpacing: '-0.025em'}} 
                text="Probar Gratis" 
              />
            </div>
        </div>

        <UseCases />
        
        {/* Giant Call to Action */}
        <section className="cta-section">
            <div style={{position: 'absolute', inset: 0, backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')", opacity: 0.1}}></div>
            <div className="container" style={{maxWidth: '64rem', position: 'relative', zIndex: 10}}>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{fontSize: '2.25rem', fontWeight: 900, color: 'white', marginBottom: '2rem', lineHeight: 1.1, letterSpacing: '-0.05em'}}
                >
                  ¿Listo para dominar tu examen de admisión?
                </motion.h2>
                <p style={{fontSize: '1.25rem', color: '#f0f9ff', marginBottom: '3.5rem', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', fontWeight: 500, opacity: 0.9, lineHeight: 1.625}}>
                  Únete a miles de estudiantes que ya están hackeando su aprendizaje con IA. El futuro de tu carrera empieza hoy.
                </p>
                <div style={{display: 'inline-block', padding: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '2.5rem', backdropFilter: 'blur(8px)'}}>
                   <AppLinkButton 
                     variant="dark"
                     style={{fontSize: '1.5rem', padding: '1.75rem 4rem', backgroundColor: '#020617', color: 'white', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', fontWeight: 900, letterSpacing: '-0.025em'}} 
                     text="Empezar Ahora - Es Gratis" 
                   />
                </div>
            </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
