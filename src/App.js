import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Comparison from './components/Comparison';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Hero />
          <ProductShowcase />
          <Features />
          <Comparison />
          <CTA />
          <Footer />
          <Cart />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
