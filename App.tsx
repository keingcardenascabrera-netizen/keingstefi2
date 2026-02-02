
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Shop from './components/Shop';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen spiritual-gradient text-gray-800 selection:bg-rose-quartz/30">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <About />
        <Services />
        <Shop onAddToCart={addToCart} />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
