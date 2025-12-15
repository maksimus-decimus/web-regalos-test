import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { CATEGORIES, PRODUCTS } from './constants';
import { Product } from './types';

const App: React.FC = () => {
    const [cartCount, setCartCount] = useState(2); // Initial mocked count from design
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddToCart = (product: Product) => {
        setCartCount(prev => prev + 1);
        console.log(`Added ${product.title} to cart`);
    };

    const filteredProducts = useMemo(() => {
        if (!searchTerm) return PRODUCTS;
        const lowerTerm = searchTerm.toLowerCase();
        return PRODUCTS.filter(p => 
            p.title.toLowerCase().includes(lowerTerm) || 
            p.category.toLowerCase().includes(lowerTerm)
        );
    }, [searchTerm]);

    return (
        <>
            <Header 
                cartCount={cartCount} 
                searchTerm={searchTerm} 
                onSearchChange={setSearchTerm} 
            />
            
            <main className="flex-1 w-full max-w-[1280px] mx-auto px-6 py-8 flex flex-col gap-12">
                
                {/* Hero Section */}
                <Hero />
                
                {/* Categories Grid - Only show if not searching (or if we want to search categories too, but let's hide to focus search results) */}
                {searchTerm === '' && (
                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-white">Explora Categorías</h2>
                            <a href="#" className="text-sm font-medium text-primary hover:text-white transition-colors flex items-center gap-1">
                                Ver todas
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {CATEGORIES.map(cat => (
                                <CategoryCard key={cat.id} category={cat} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Products Section */}
                <section className="py-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                        {searchTerm ? `Resultados para "${searchTerm}"` : "Te puede interesar..."}
                    </h2>
                    {!searchTerm && (
                        <p className="text-gray-400 mb-6 text-sm">
                            Basado en tus últimas búsquedas de tecnología y hogar.
                        </p>
                    )}
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {filteredProducts.map(product => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                onAddToCart={handleAddToCart} 
                            />
                        ))}
                    </div>
                    
                    {filteredProducts.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            <span className="material-symbols-outlined text-4xl mb-2">sentiment_dissatisfied</span>
                            <p>No se encontraron productos.</p>
                        </div>
                    )}
                </section>

            </main>
            
            <Footer />
        </>
    );
};

export default App;