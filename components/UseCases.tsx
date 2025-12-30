
import React from 'react';
import { CheckCircle } from 'lucide-react';

const cases = [
  {
    title: "Escaneo de Ejercicios: La IA explica lo que ve",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80", 
    points: [
      "Toma una foto de cualquier ejercicio matemático o científico", 
      "La IA analiza la imagen y detecta los enunciados automáticamente", 
      "Recibe una explicación paso a paso de la resolución"
    ],
    color: "#0284c7"
  },
  {
    title: "De PDF a Flashcards Interactivas",
    image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80",
    points: [
      "Sube tus guías de estudio o libros en formato PDF", 
      "NIVELAPP extrae los conceptos clave y crea tarjetas de memoria", 
      "Estudia de forma eficiente con repetición espaciada"
    ],
    color: "#7c3aed"
  },
  {
    title: "Comprensión Literaria y Evaluación Online",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    points: [
      "Resúmenes inteligentes de textos literarios complejos", 
      "Evaluaciones en línea automáticas al finalizar cada lectura", 
      "Estudiantes felices y preparados para el éxito académico"
    ],
    color: "#16a34a"
  }
];

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="use-cases">
      <div className="container">
        <div style={{marginBottom: '4rem'}}>
          <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem'}}>
            Adaptado a tu Carrera
          </h2>
          <div style={{height: '0.25rem', width: '5rem', backgroundColor: '#0284c7', borderRadius: '9999px'}}></div>
          <p style={{marginTop: '1rem', fontSize: '1.25rem', color: '#475569'}}>
            No importa qué estudies, las herramientas de PDF y Foto de NIVELAPP se adaptan a ti.
          </p>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '6rem'}}>
          {cases.map((item, index) => (
            <div key={index} className={`use-case-row ${index % 2 === 1 ? 'use-case-row-reverse' : ''}`}>
              {/* Image Side */}
              <div className="use-case-img-container">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="use-case-img"
                />
              </div>

              {/* Content Side */}
              <div className="use-case-content">
                <h3 style={{fontSize: '1.875rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.25}}>{item.title}</h3>
                <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
                  {item.points.map((point, i) => (
                    <li key={i} style={{display: 'flex', alignItems: 'flex-start'}}>
                      <CheckCircle size={24} color={item.color} style={{marginRight: '0.75rem', marginTop: '0.25rem', flexShrink: 0}} />
                      <span style={{fontSize: '1.125rem', color: '#334155', lineHeight: 1.625}}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
