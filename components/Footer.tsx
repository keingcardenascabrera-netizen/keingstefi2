
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-rose-quartz/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="text-gold w-6 h-6 fill-gold/20" />
              <span className="text-2xl font-serif font-bold tracking-widest">HEARTRISE</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
              Sanando mentes, tocando almas y empoderando corazones desde 2024. Tu camino hacia la plenitud espiritual comienza aquí.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full border border-gray-100 hover:border-gold hover:text-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full border border-gray-100 hover:border-gold hover:text-gold transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full border border-gray-100 hover:border-gold hover:text-gold transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-gray-800">Explorar</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li><a href="#about" className="hover:text-gold transition-colors">Nuestra Esencia</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Servicios Sagrados</a></li>
              <li><a href="#shop" className="hover:text-gold transition-colors">Tienda Espiritual</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-gray-800">Soporte</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li><a href="#" className="hover:text-gold transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Envíos y Devoluciones</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Tarjetas de Regalo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-gray-800">Boletín del Santuario</h4>
            <p className="text-gray-500 text-sm mb-6 font-light">Únete a nuestro círculo para recibir actualizaciones del alma y consejos exclusivos de sanación.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full bg-gray-50 border-none rounded-full py-4 pl-6 pr-12 text-sm focus:ring-1 focus:ring-rose-quartz outline-none"
              />
              <button className="absolute right-2 top-2 p-2 bg-gray-900 text-white rounded-full hover:bg-gold transition-colors">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-50">
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            © 2024 HeartRise. <span className="mx-2 italic">Amarsé es Poder.</span> Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
