import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import ProductCard from './components/ProductCard';
import CategoryPage from './components/CategoryPage';
import Footer from './components/Footer';
import { CATEGORIES, PRODUCTS } from './constants';
import { Product, Category } from './types';

const App: React.FC = () => {
    const [cartCount, setCartCount] = useState(2); // Initial mocked count from design
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    const handleAddToCart = (product: Product) => {
        setCartCount(prev => prev + 1);
        console.log(`Added ${product.title} to cart`);
    };

    const handleGoHome = () => {
        setSelectedCategory(null);
        setSearchTerm('');
        window.scrollTo(0, 0);
    };

    const handleSelectCategory = (category: Category) => {
        setSelectedCategory(category);
        window.scrollTo(0, 0);
    };

    // Filter products for the main home page (exclude category specific if needed, or show all mixed)
    // For now, let's keep showing the mixed generic ones on Home, or all.
    // The design implies Home has "Te puede interesar" which is generic.
    // And Category Page has specific ones.
    const homeProducts = useMemo(() => {
        // If searching, search EVERYTHING
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            return PRODUCTS.filter(p => 
                p.title.toLowerCase().includes(lowerTerm) || 
                p.category.toLowerCase().includes(lowerTerm)
            );
        }
        // If not searching, just show the generic ones (those without categoryId or a specific set)
        // For simplicity, we show the first 5 generic ones as before
        return PRODUCTS.filter(p => !p.categoryId).slice(0, 5);
    }, [searchTerm]);

    const categoryProducts = useMemo(() => {
        if (!selectedCategory) return [];
        return PRODUCTS.filter(p => p.categoryId === selectedCategory.id);
    }, [selectedCategory]);

    return (
        <>
            <Header 
                cartCount={cartCount} 
                searchTerm={searchTerm} 
                onSearchChange={setSearchTerm} 
                onGoHome={handleGoHome}
            />
            
            {selectedCategory ? (
                <CategoryPage 
                    category={selectedCategory} 
                    products={categoryProducts} 
                    onAddToCart={handleAddToCart}
                    onBack={handleGoHome}
                />
            ) : (
                <main className="flex-1 w-full max-w-[1280px] mx-auto px-6 py-8 flex flex-col gap-12">
                    
                    {/* Hero Section */}
                    <Hero />
                    
                    {/* Categories Grid - Only show if not searching */}
                    {searchTerm === '' && (
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-white">Explora Categorías</h2>
                                <button className="text-sm font-medium text-primary hover:text-white transition-colors flex items-center gap-1">
                                    Ver todas
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {CATEGORIES.map(cat => (
                                    <CategoryCard 
                                        key={cat.id} 
                                        category={cat} 
                                        onClick={handleSelectCategory}
                                    />
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
                            {homeProducts.map(product => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                    onAddToCart={handleAddToCart} 
                                />
                            ))}
                        </div>
                        
                        {homeProducts.length === 0 && (
                            <div className="text-center py-12 text-gray-500">
                                <span className="material-symbols-outlined text-4xl mb-2">sentiment_dissatisfied</span>
                                <p>No se encontraron productos.</p>
                            </div>
                        )}
                    </section>
                </main>
            )}
            
            <Footer />
        </>
    );
};

export default App;