
import React from 'react';
import { Sun, Moon, Wind, Compass } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Sesiones Energéticas',
    description: 'Equilibra tus chakras y restaura tu aura vital mediante prácticas guiadas de limpieza energética y Reiki.',
    icon: <Sun className="w-8 h-8 text-gold" strokeWidth={1.5} />,
  },
  {
    id: '2',
    title: 'Terapias Holísticas',
    description: 'Una mezcla de aromaterapia, sanación con cristales y baños de sonido para armonizar mente, cuerpo y espíritu.',
    icon: <Moon className="w-8 h-8 text-gold" strokeWidth={1.5} />,
  },
  {
    id: '3',
    title: 'Acompañamiento Espiritual',
    description: 'Sesiones individuales enfocadas en una vida consciente, hábitos de amor propio y despertar espiritual.',
    icon: <Compass className="w-8 h-8 text-gold" strokeWidth={1.5} />,
  },
  {
    id: '4',
    title: 'Meditaciones Guiadas',
    description: 'Experimenta la paz interior mediante técnicas de visualización diseñadas para reducir la ansiedad y fomentar el amor.',
    icon: <Wind className="w-8 h-8 text-gold" strokeWidth={1.5} />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-4">Servicios Sagrados</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900">Modalidades de Sanación</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-10 rounded-3xl soft-shadow border border-gray-50 hover:border-rose-quartz/30 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-beige group-hover:bg-rose-quartz/10 transition-colors duration-500">
                {service.icon}
              </div>
              <h4 className="text-2xl font-serif mb-4 text-gray-800">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
