
import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Elena Vance',
    location: 'Sedona, AZ',
    text: "HeartRise cambió mi perspectiva sobre la sanación. Aprendí que mi poder no viene de la validación externa, sino del amor profundo que cultivo en mi interior. Las sesiones de energía son mágicas.",
  },
  {
    id: '2',
    name: 'Julian Rivers',
    location: 'Londres, UK',
    text: "Las terapias holísticas aquí son un respiro literal. Llegué con mucho estrés y me fui sintiéndome ligero, enraizado y verdaderamente alineado con mi propósito.",
  },
  {
    id: '3',
    name: 'Sophia Chen',
    location: 'California, US',
    text: "Productos hermosos y una guía aún más bella. El acompañamiento espiritual me ayudó a navegar una transición importante en mi vida con gracia y confianza.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-4">Transiciones</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900">Voces del Alma</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="relative p-10 bg-rose-quartz/5 rounded-[40px] flex flex-col items-center text-center">
              <Quote className="text-gold/20 w-12 h-12 absolute top-6 left-10" />
              <p className="text-gray-600 italic leading-relaxed mb-8 font-light z-10">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-serif text-xl text-gray-800">{t.name}</h4>
                <p className="text-xs uppercase tracking-widest text-gold font-bold">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
