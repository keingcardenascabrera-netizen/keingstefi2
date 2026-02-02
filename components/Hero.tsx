
import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs for spiritual aura effect */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-rose-quartz/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-soft-lilac/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
            <Sparkles className="text-gold w-5 h-5" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gray-500">Amarsé es Poder</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-8 opacity-0 animate-[slideUp_1s_ease-out_0.2s_forwards]">
            Abraza tu <span className="italic text-gold">Esencia Divina</span> y Sana tu Interior
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light opacity-0 animate-[slideUp_1s_ease-out_0.4s_forwards]">
            Viaja a las profundidades de tu alma. A través del amor propio, la restauración energética y la consciencia, descubre el poder que reside en tu corazón.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[slideUp_1s_ease-out_0.6s_forwards]">
            <button className="px-10 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-gray-200/50 hover:shadow-gray-300/50 tracking-wider text-sm uppercase">
              Inicia tu Sanación
            </button>
            <button className="px-10 py-4 border border-rose-quartz text-gray-800 rounded-full hover:bg-rose-quartz/10 transition-all duration-300 tracking-wider text-sm uppercase font-medium">
              Explora tu Poder
            </button>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="mt-16 relative mx-auto max-w-5xl opacity-0 animate-[fadeIn_1.2s_ease-out_0.8s_forwards]">
           <div className="aspect-[16/7] rounded-3xl overflow-hidden soft-shadow border-4 border-white/50">
             <img 
               src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2000" 
               alt="Aura Espiritual" 
               className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-rose-quartz/20 to-transparent"></div>
           </div>
           
           {/* Decorative elements */}
           <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 p-6 bg-white rounded-2xl soft-shadow hidden sm:block">
             <p className="font-serif italic text-xl text-gray-700">"El verdadero poder nace del amor propio."</p>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
};

export default Hero;
