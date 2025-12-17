import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import ProductCard from './components/ProductCard';
import CategoryPage from './components/CategoryPage';
import WishlistPage from './components/WishlistPage';
import Footer from './components/Footer';
import { CATEGORIES, PRODUCTS } from './constants';
import { Category } from './types';

const App: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [showOffers, setShowOffers] = useState(false);
    const [showWishlist, setShowWishlist] = useState(false);
    
    // Global Favorites State
    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

    const handleToggleFavorite = (id: number) => {
        setFavoriteIds(prev => 
            prev.includes(id) 
                ? prev.filter(favId => favId !== id) 
                : [...prev, id]
        );
    };

    // Navigation Handlers
    const resetViews = () => {
        setSelectedCategory(null);
        setShowOffers(false);
        setShowWishlist(false);
        window.scrollTo(0, 0);
    };

    const handleSearchChange = (term: string) => {
        setSearchTerm(term);
        if (term.trim() !== '') {
            resetViews();
        }
    };

    const handleGoHome = () => {
        setSearchTerm('');
        resetViews();
    };

    const handleSelectCategory = (category: Category) => {
        setSearchTerm('');
        resetViews(); // Reset others first
        setSelectedCategory(category);
    };

    const handleShowOffers = () => {
        setSearchTerm('');
        resetViews(); // Reset others first
        setShowOffers(true);
    };

    const handleShowWishlist = () => {
        setSearchTerm('');
        resetViews(); // Reset others first
        setShowWishlist(true);
    };

    const handleScrollToCategories = () => {
        handleGoHome();
        setTimeout(() => {
            const element = document.getElementById('categories-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const handleCategorySelectById = (id: number) => {
        const category = CATEGORIES.find(c => c.id === id);
        if (category) {
            handleSelectCategory(category);
        }
    };

    // Main Content Logic
    const homeProducts = useMemo(() => {
        // 1. Search Mode
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            return PRODUCTS.filter(p => 
                p.title.toLowerCase().includes(lowerTerm) || 
                p.category.toLowerCase().includes(lowerTerm) ||
                (p.subcategory && p.subcategory.toLowerCase().includes(lowerTerm))
            );
        }

        // 2. Offers Mode
        if (showOffers) {
            return PRODUCTS.filter(p => p.discount || p.oldPrice);
        }

        // 3. Default Home Mode (Generic Interest)
        return PRODUCTS.filter(p => !p.categoryId || p.subcategory === 'Interes').slice(0, 10);
    }, [searchTerm, showOffers]);

    const categoryProducts = useMemo(() => {
        if (!selectedCategory) return [];
        return PRODUCTS.filter(p => p.categoryId === selectedCategory.id);
    }, [selectedCategory]);

    // Section Title Logic
    const getSectionTitle = () => {
        if (searchTerm) return `Resultados para "${searchTerm}"`;
        if (showOffers) return "Mejores Ofertas y Descuentos";
        return "Te puede interesar...";
    };

    return (
        <>
            <Header 
                searchTerm={searchTerm} 
                onSearchChange={handleSearchChange} 
                onGoHome={handleGoHome}
                onShowOffers={handleShowOffers}
                onShowCategories={handleScrollToCategories}
                onShowWishlist={handleShowWishlist}
                wishlistCount={favoriteIds.length}
            />
            
            {showWishlist ? (
                <WishlistPage 
                    products={PRODUCTS}
                    favoriteIds={favoriteIds}
                    onToggleFavorite={handleToggleFavorite}
                    onBack={handleGoHome}
                />
            ) : selectedCategory ? (
                <CategoryPage 
                    category={selectedCategory} 
                    products={categoryProducts} 
                    favoriteIds={favoriteIds}
                    onToggleFavorite={handleToggleFavorite}
                    onBack={handleGoHome}
                />
            ) : (
                <main className="flex-1 w-full max-w-[1280px] mx-auto px-6 py-8 flex flex-col gap-12">
                    
                    {/* Hero Section - Only show on pure home */}
                    {!searchTerm && !showOffers && <Hero />}
                    
                    {/* Categories Grid - Only show if not searching/offers */}
                    {!searchTerm && !showOffers && (
                        <section id="categories-section">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-white">Explora Categorías</h2>
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

                    {/* Products Section (Search Results, Offers, or Interests) */}
                    <section className="py-6 min-h-[50vh]">
                        <h2 className="text-2xl font-bold text-white mb-2">
                            {getSectionTitle()}
                        </h2>
                        
                        {!searchTerm && !showOffers && (
                            <p className="text-gray-400 mb-6 text-sm">
                                Basado en tendencias globales y tus preferencias.
                            </p>
                        )}
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                            {homeProducts.map(product => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product}
                                    isFavorite={favoriteIds.includes(product.id)}
                                    onToggleFavorite={() => handleToggleFavorite(product.id)}
                                />
                            ))}
                        </div>
                        
                        {homeProducts.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                                <span className="material-symbols-outlined text-6xl mb-4 opacity-50">search_off</span>
                                <h3 className="text-xl font-bold mb-2">No encontramos resultados</h3>
                                <p className="text-sm">Intenta con otros términos o explora nuestras categorías.</p>
                                <button 
                                    onClick={handleGoHome}
                                    className="mt-6 px-6 py-2 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors"
                                >
                                    Ver todo
                                </button>
                            </div>
                        )}
                    </section>
                </main>
            )}
            
            <Footer onCategorySelect={handleCategorySelectById} />
        </>
    );
};

export default App;