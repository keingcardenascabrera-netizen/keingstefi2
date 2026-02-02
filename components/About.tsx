
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-4">Nuestra Esencia</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              Un Santuario para la <br /> Evolución Consciente
            </h3>
            <p className="text-gray-600 text-lg mb-6 font-light leading-relaxed">
              En HeartRise, creemos firmemente que "Amarse es Poder". Somos un espacio sagrado dedicado a quienes buscan una sanación espiritual profunda y elevar su frecuencia vibratoria.
            </p>
            <p className="text-gray-600 text-lg mb-8 font-light leading-relaxed">
              A través de la sabiduría ancestral y las terapias holísticas modernas, te guiamos para reconectar con tu intuición y disolver los bloqueos energéticos que limitan la expansión de tu alma.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-gold font-serif text-3xl mb-1">Alma</h4>
                <p className="text-sm text-gray-500">Sanación desde el núcleo</p>
              </div>
              <div>
                <h4 className="text-gold font-serif text-3xl mb-1">Fluir</h4>
                <p className="text-sm text-gray-500">Armonizando tu energía</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-rose-quartz translate-x-6 translate-y-6 rounded-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000" 
                alt="Meditación" 
                className="rounded-3xl soft-shadow w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
