
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Camera, Brain, Layers, GraduationCap, Zap } from 'lucide-react';

const features = [
  {
    icon: <FileText size={24} color="#0284c7" />,
    title: "Sube tu PDF y Estudia",
    description: "Carga libros o guías en PDF. NIVELAPP analiza el contenido y genera automáticamente un plan de estudio detallado para tu nivelación."
  },
  {
    icon: <Camera size={24} color="#7c3aed" />,
    title: "Foto-Solución con IA",
    description: "¿Trabado en un ejercicio? Toma una foto o sube la imagen. Nuestra IA te explica en tiempo real cómo resolverlo paso a paso."
  },
  {
    icon: <Layers size={24} color="#16a34a" />,
    title: "Ecosistema de Aprendizaje",
    description: "Cada lección incluye Flashcards para memorizar, Explicación textual detallada y un Examen de conocimientos."
  },
  {
    icon: <Brain size={24} color="#eab308" />,
    title: "Tutor IA en Cada Lección",
    description: "Nunca estudiarás solo. Un asistente virtual experto en el tema está disponible 24/7 en cada módulo para resolver tus dudas."
  },
  {
    icon: <GraduationCap size={24} color="#db2777" />,
    title: "Simulacros de Ingreso",
    description: "Entrena con exámenes tipo admisión de las mejores universidades. Mide tu tiempo y puntaje real antes del gran día."
  },
  {
    icon: <Zap size={24} color="#ea580c" />,
    title: "Nivelación Acelerada",
    description: "Detectamos tus vacíos académicos y adaptamos el contenido para que alcances el nivel universitario en tiempo récord."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-badge">Herramientas Poderosas</h2>
          <p className="section-h2">Todo lo que necesitas para Ingresar</p>
          <p style={{marginTop: '1rem', maxWidth: '42rem', fontSize: '1.25rem', color: '#64748b', marginLeft: 'auto', marginRight: 'auto'}}>
            NIVELAPP combina tecnología visual y textual para que aprendas más rápido.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="feature-card"
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.75rem'}}>
                {feature.title}
              </h3>
              <p style={{color: '#475569', lineHeight: 1.625}}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
