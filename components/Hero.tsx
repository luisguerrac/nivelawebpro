
import React from 'react';
import { motion } from 'framer-motion';
import { AppLinkButton } from './Button';
import { Camera, Sparkles, Calculator, BookOpen, Check, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="hero hero-grid">
      {/* Background Blobs */}
      <div className="blob" style={{backgroundColor: '#93c5fd', width: '500px', height: '500px', borderRadius: '50%', top: 0, left: '-16rem'}}></div>
      <div className="blob" style={{backgroundColor: '#d8b4fe', width: '500px', height: '500px', borderRadius: '50%', bottom: '-8rem', right: '-8rem'}}></div>

      <div className="container" style={{position: 'relative', zIndex: 10}}>
        <div className="hero-flex">
          
          {/* Left Side: Text Content */}
          <div className="hero-text">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="hero-badge"
            >
              <Sparkles size={14} style={{marginRight: '0.5rem'}} />
              Revolucionando el Ingreso Universitario
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-h1"
            >
              Asegura tu vacante con <span className="gradient-text">IA Generativa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-p"
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            >
              NIVELAPP es tu tutor personal 24/7. Resuelve ejercicios con una foto, domina temas complejos en minutos y prepárate para los exámenes más difíciles de LATAM.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-actions"
            >
              <AppLinkButton 
                style={{fontSize: '1.25rem', padding: '1.25rem 2.5rem', boxShadow: '0 25px 50px -12px rgba(14, 165, 233, 0.4)'}} 
                text="Probar Gratis Ahora" 
              />
              <button 
                onClick={() => document.getElementById('use-cases')?.scrollIntoView({behavior: 'smooth'})}
                className="btn btn-secondary"
                style={{fontSize: '1.125rem', padding: '1.25rem 2.5rem'}}
              >
                <Play size={20} fill="currentColor" style={{marginRight: '0.75rem'}} />
                Cómo Funciona
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem'}}
            >
              <div style={{display: 'flex', marginLeft: '0.75rem'}}>
                {[1,2,3,4].map(i => (
                  <img key={i} style={{width: '2.5rem', height: '2.5rem', borderRadius: '50%', border: '2px solid white', marginLeft: '-0.75rem'}} src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                ))}
                <div style={{width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: '#0f172a', border: '2px solid white', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', marginLeft: '-0.75rem'}}>+2k</div>
              </div>
              <p style={{fontSize: '0.875rem', color: '#64748b', fontWeight: 500}}>Únete a más de <span style={{color: '#0f172a', fontWeight: 'bold'}}>2,000 estudiantes</span> preparándose hoy.</p>
            </motion.div>
          </div>

          {/* Right Side: Dynamic Visualization */}
          <div className="hero-visual perspective">
            <motion.div
              initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="phone-wrapper animate-float"
            >
              <div className="phone-content">
                <div style={{height: '1.75rem', backgroundColor: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div style={{width: '4rem', height: '1rem', backgroundColor: '#1e293b', borderRadius: '9999px'}}></div>
                </div>
                
                <div style={{padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem', backgroundColor: '#f8fafc'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: '0.75rem', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase'}}>NivelApp AI</span>
                    <Sparkles size={16} color="#eab308" />
                  </div>

                  <div style={{background: 'white', padding: '1rem', borderRadius: '1rem', boxShadow: 'var(--shadow-soft)', border: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                      <div style={{width: '2rem', height: '2rem', borderRadius: '0.5rem', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7'}}>
                        <Camera size={16} />
                      </div>
                      <span style={{fontSize: '0.875rem', fontWeight: 'bold', color: '#1e293b'}}>Escaneando ejercicio...</span>
                    </div>
                    <div style={{height: '8rem', background: '#f1f5f9', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #cbd5e1'}}>
                      <Calculator size={32} color="#94a3b8" />
                    </div>
                  </div>

                  <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
                    <div style={{display: 'flex', gap: '0.5rem'}}>
                       <div style={{width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'white', fontWeight: 'bold'}}>AI</div>
                       <div style={{background: '#0284c7', color: 'white', padding: '0.75rem', borderRadius: '1rem', borderTopLeftRadius: 0, fontSize: '0.75rem', fontWeight: 500, maxWidth: '85%', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}>
                         Detecto una integral por partes. ¿Quieres la resolución paso a paso?
                       </div>
                    </div>
                    <div style={{background: 'white', padding: '1rem', borderRadius: '1rem', boxShadow: 'var(--shadow-soft)', border: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                       <p style={{fontSize: '10px', fontWeight: 'bold', color: '#0ea5e9'}}>PASO 1</p>
                       <p style={{fontSize: '0.75rem', color: '#334155', lineHeight: 1.25}}>Identificamos u = ln(x) y dv = x dx...</p>
                       <div style={{height: '0.25rem', width: '100%', background: '#f1f5f9', borderRadius: '9999px', overflow: 'hidden'}}>
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{height: '100%', background: '#0ea5e9'}}
                          />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Orbiting Elements */}
            <div className="floating-card animate-float-delayed" style={{top: '-2.5rem', right: '-2.5rem'}}>
               <div style={{width: '2.5rem', height: '2.5rem', background: '#fff7ed', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea580c'}}>
                  <BookOpen size={24} />
               </div>
               <div>
                  <p style={{fontSize: '0.75rem', fontWeight: 900, color: '#0f172a'}}>PDF Resumido</p>
                  <p style={{fontSize: '10px', color: '#64748b'}}>24 páginas → 2 min</p>
               </div>
            </div>

            <div className="floating-card animate-float" style={{bottom: '2.5rem', left: '-4rem'}}>
               <div style={{width: '2.5rem', height: '2.5rem', background: '#f0fdf4', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a'}}>
                  <Check size={24} />
               </div>
               <div>
                  <p style={{fontSize: '0.75rem', fontWeight: 900, color: '#0f172a'}}>Examen Listo</p>
                  <p style={{fontSize: '10px', color: '#64748b'}}>Nivel: Avanzado</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
