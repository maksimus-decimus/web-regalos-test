import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductSection } from './components/ProductSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full max-w-[1280px] mx-auto px-6 py-8 flex flex-col gap-12">
        <Hero />
        <CategoryGrid />
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;