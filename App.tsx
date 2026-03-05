import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import WishlistPage from './components/WishlistPage';
import CategoryPage from './components/CategoryPage';
import ProductQuickView from './components/ProductQuickView';
import { PRODUCTS, CATEGORIES } from './constants';
import { Category, Product } from './types';

const App: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [showOffers, setShowOffers] = useState(false);
    const [showWishlist, setShowWishlist] = useState(false);
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
    const [darkMode, setDarkMode] = useState(true);

    const handleToggleFavorite = (id: number) => {
        setFavoriteIds(prev =>
            prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
        );
    };

    const resetViews = () => {
        setSearchTerm('');
        setSelectedCategory(null);
        setShowOffers(false);
        setShowWishlist(false);
    };

    const handleSearchChange = (term: string) => {
        setSearchTerm(term);
        setSelectedCategory(null);
        setShowOffers(false);
        setShowWishlist(false);
    };

    const handleGoHome = () => {
        resetViews();
    };

    const handleSelectCategory = (category: Category) => {
        setSelectedCategory(category);
        setSearchTerm('');
        setShowOffers(false);
        setShowWishlist(false);
    };

    const handleShowOffers = () => {
        setShowOffers(!showOffers);
        setSearchTerm('');
        setSelectedCategory(null);
        setShowWishlist(false);
    };

    const handleShowWishlist = () => {
        setShowWishlist(!showWishlist);
        setSearchTerm('');
        setSelectedCategory(null);
        setShowOffers(false);
    };

    const handleCategorySelectById = (id: number) => {
        const category = CATEGORIES.find(c => c.id === id);
        if (category) {
            handleSelectCategory(category);
        }
    };

    // Get filtered products for home view
    const homeProducts = searchTerm.trim() === ''
        ? PRODUCTS.slice(0, 10)
        : PRODUCTS.filter(p =>
            p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.category.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const categoryProducts = selectedCategory
        ? PRODUCTS.filter(p => p.categoryId === selectedCategory.id)
        : [];

    const getSectionTitle = () => {
        if (searchTerm) return `Resultados para "${searchTerm}"`;
        if (showOffers) return 'Ofertas Especiales';
        return 'Productos Destacados';
    };

    return (
        <>
            <Header 
                searchTerm={searchTerm} 
                onSearchChange={handleSearchChange} 
                onGoHome={handleGoHome}
                onShowOffers={handleShowOffers}
                onShowCategories={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                    setShowOffers(false);
                    setShowWishlist(false);
                }}
                onShowWishlist={handleShowWishlist}
                wishlistCount={favoriteIds.length}
                onOpenAuth={() => {}}
                darkMode={darkMode}
                onToggleDarkMode={() => setDarkMode(!darkMode)}
            />
            
            {showWishlist ? (
                <WishlistPage 
                    products={PRODUCTS}
                    favoriteIds={favoriteIds}
                    onToggleFavorite={handleToggleFavorite}
                    onBack={handleGoHome}
                    onOpenProduct={(product: Product) => setQuickViewProduct(product)}
                />
            ) : selectedCategory ? (
                <CategoryPage 
                    category={selectedCategory} 
                    products={categoryProducts} 
                    favoriteIds={favoriteIds}
                    onToggleFavorite={handleToggleFavorite}
                    onBack={handleGoHome}
                    onOpenProduct={(product: Product) => setQuickViewProduct(product)}
                />
            ) : (
                <main className="flex-1 w-full max-w-[1280px] mx-auto px-6 py-8">
                    {/* Hero Section */}
                    {!searchTerm && !showOffers && <Hero />}
                    
                    {/* Categories Grid */}
                    {!searchTerm && !showOffers && (
                        <section id="categories-section" className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">Explora por categoría</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {CATEGORIES.slice(0, 6).map(category => (
                                    <button
                                        key={category.id}
                                        onClick={() => handleSelectCategory(category)}
                                        className="p-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-shadow text-left"
                                    >
                                        <h3 className="text-white font-bold text-lg">{category.title}</h3>
                                        <p className="text-blue-100 text-sm mt-2">{category.subtitle}</p>
                                    </button>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Products Section */}
                    <section className="py-6">
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
                                    onOpen={() => setQuickViewProduct(product)}
                                />
                            ))}
                        </div>
                        {homeProducts.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                                <div className="text-6xl mb-4 opacity-50">🔍</div>
                                <h3 className="text-xl font-bold mb-2 text-white">No encontramos resultados</h3>
                                <p className="text-sm">Intenta con otros términos o explora nuestras categorías.</p>
                                <button 
                                    onClick={handleGoHome}
                                    className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
                                >
                                    Ver todo
                                </button>
                            </div>
                        )}
                    </section>
                </main>
            )}
            
            {quickViewProduct && (
                <ProductQuickView 
                    product={quickViewProduct}
                    onClose={() => setQuickViewProduct(null)}
                />
            )}

            <Footer onCategorySelect={handleCategorySelectById} />
        </>
    );
};

export default App;