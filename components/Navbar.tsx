
import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Heart } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Tienda', href: '#shop' },
    { name: 'Testimonios', href: '#testimonials' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-rose-quartz/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Heart className="text-gold w-6 h-6 fill-gold/20" />
            <span className="text-2xl font-serif font-bold tracking-widest text-gray-800">HEARTRISE</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="relative p-2 text-gray-600 hover:text-gold transition-colors">
              <ShoppingBag size={22} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-quartz text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button className="relative p-2 text-gray-600">
              <ShoppingBag size={22} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-quartz text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gold transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-rose-quartz/20 animate-fade-in-down">
          <div className="px-2 pt-2 pb-6 space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-serif tracking-wide py-2 hover:text-gold"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
