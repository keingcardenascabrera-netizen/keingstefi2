
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1499209974431-9dac3adaf471?auto=format&fit=crop&q=80&w=2000" 
          alt="Cielo pacífico" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
          ¿Estás listo para despertar el <br /> <span className="italic text-rose-quartz">poder interior?</span>
        </h2>
        <p className="text-white/80 text-lg mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          El viaje hacia la sanación comienza con un solo paso hacia el amor propio. Únete a nuestra comunidad y comienza tu transformación hoy mismo.
        </p>
        <button className="px-12 py-5 bg-white text-gray-900 rounded-full hover:bg-rose-quartz transition-all duration-500 tracking-[0.2em] text-sm uppercase font-bold soft-shadow">
          Comienza tu Viaje
        </button>
      </div>
    </section>
  );
};

export default CTA;
