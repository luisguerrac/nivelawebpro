
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mateo L.",
    role: "Ingresó a Ing. Sistemas",
    content: "La función de tomar foto a los ejercicios me salvó. Tenía guías viejas sin respuestas, y la IA me explicó cómo resolver cada una paso a paso.",
    image: "https://picsum.photos/seed/mateo/100/100"
  },
  {
    name: "Sofía R.",
    role: "Ingresó a Medicina",
    content: "Subí mis PDFs de biología y NIVELAPP me creó un plan de estudio con flashcards automáticas. Estudiar anatomía fue mucho más fácil así.",
    image: "https://picsum.photos/seed/sofia/100/100"
  },
  {
    name: "Andrés C.",
    role: "Ingresó a Arquitectura",
    content: "Me encantó tener un Tutor IA en cada lección. Si no entendía algo del texto, le preguntaba ahí mismo y me daba ejemplos extra.",
    image: "https://picsum.photos/seed/andres/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" style={{padding: '6rem 0', backgroundColor: 'white', borderTop: '1px solid #f1f5f9'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{fontSize: '1.875rem', fontWeight: 800, color: '#0f172a'}}>
            Estudiantes que Lograron su Ingreso
          </h2>
          <p style={{marginTop: '1rem', fontSize: '1.25rem', color: '#64748b'}}>
            Historias reales de éxito usando la tecnología de NIVELAPP.
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          {testimonials.map((t, i) => (
            <div key={i} style={{backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid #f1f5f9', position: 'relative', transition: 'box-shadow 0.3s'}}>
              <div style={{display: 'flex', marginBottom: '1.5rem'}}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} color="#facc15" fill="#facc15" />
                ))}
              </div>
              <p style={{color: '#334155', marginBottom: '2rem', fontStyle: 'italic', lineHeight: 1.625}}>"{t.content}"</p>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={t.image} alt={t.name} style={{height: '3rem', width: '3rem', borderRadius: '50%', boxShadow: '0 0 0 2px #bae6fd'}} />
                <div style={{marginLeft: '1rem'}}>
                  <h4 style={{color: '#0f172a', fontWeight: 'bold'}}>{t.name}</h4>
                  <p style={{color: '#0284c7', fontSize: '0.875rem', fontWeight: 600}}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
