
import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';

interface ShopProps {
  onAddToCart: () => void;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Kit de Cristales de Intuición',
    price: 45,
    category: 'Cristales',
    image: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    name: 'Vela de Soja de Ritual',
    price: 28,
    category: 'Velas',
    image: 'https://images.unsplash.com/photo-1603006375271-7f3b904bb108?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '3',
    name: 'Aceite de Aura Sanadora',
    price: 32,
    category: 'Esencias',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '4',
    name: 'Atado de Salvia Sagrada',
    price: 18,
    category: 'Sahumerios',
    image: 'https://images.unsplash.com/photo-1602166669083-d34e60803c00?auto=format&fit=crop&q=80&w=400',
  },
];

const Shop: React.FC<ShopProps> = ({ onAddToCart }) => {
  return (
    <section id="shop" className="py-24 bg-soft-lilac/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-4">Botica</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900">Esenciales para el Alma</h3>
          </div>
          <button className="text-sm uppercase tracking-widest font-semibold border-b-2 border-gold pb-1 hover:text-gold transition-colors">
            Ver Colección Completa
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-white soft-shadow">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                  <button className="p-3 bg-white rounded-full text-gray-800 hover:bg-gold hover:text-white transition-colors">
                    <Eye size={20} />
                  </button>
                  <button 
                    onClick={onAddToCart}
                    className="p-3 bg-white rounded-full text-gray-800 hover:bg-gold hover:text-white transition-colors"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                   <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-gray-600">
                     {product.category}
                   </span>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-serif mb-1 group-hover:text-gold transition-colors">{product.name}</h4>
                <p className="text-gray-500 font-light">${product.price}.00</p>
                <button 
                  onClick={onAddToCart}
                  className="mt-4 px-6 py-2 border border-gray-200 rounded-full text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-all duration-300 md:opacity-0 group-hover:opacity-100"
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
