import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import ProductCard from './components/ProductCard';
import CategoryPage from './components/CategoryPage';
import WishlistPage from './components/WishlistPage';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import FilterSidebar from './components/FilterSidebar';
import ProductQuickView from './components/ProductQuickView';
import { CATEGORIES, PRODUCTS } from './constants';
import { Category, Product } from './types';
import { useAuth } from './AuthContext';
import { getUserFavorites, addFavorite, removeFavorite } from './favoritesService';

const App: React.FC = () => {
    const { user } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [showOffers, setShowOffers] = useState(false);
    const [showWishlist, setShowWishlist] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
    
    // Filter States
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
    const [selectedRecipient, setSelectedRecipient] = useState<string | null>(null);
    const [selectedFilterCategories, setSelectedFilterCategories] = useState<number[]>([]);
    
    // Global Favorites State
    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

    // Cargar favoritos del usuario cuando inicie sesión
    useEffect(() => {
        const loadFavorites = async () => {
            if (user) {
                const favorites = await getUserFavorites(user.uid);
                setFavoriteIds(favorites);
            } else {
                // Limpiar favoritos cuando cierre sesión
                setFavoriteIds([]);
            }
        };
        
        loadFavorites();
    }, [user]);

    const handleToggleFavorite = async (id: number) => {
        const isCurrentlyFavorite = favoriteIds.includes(id);
        
        // Actualizar UI inmediatamente
        setFavoriteIds(prev => 
            isCurrentlyFavorite
                ? prev.filter(favId => favId !== id) 
                : [...prev, id]
        );

        // Sincronizar con Firebase si el usuario está autenticado
        if (user) {
            try {
                if (isCurrentlyFavorite) {
                    await removeFavorite(user.uid, id);
                } else {
                    await addFavorite(user.uid, id);
                }
            } catch (error) {
                // Revertir el cambio si hay error
                setFavoriteIds(prev => 
                    isCurrentlyFavorite
                        ? [...prev, id]
                        : prev.filter(favId => favId !== id)
                );
                console.error('Error al actualizar favoritos:', error);
            }
        }
    };

    // Navigation Handlers
    const resetViews = () => {
        setSelectedCategory(null);
        setShowOffers(false);
        setShowWishlist(false);
        setShowAllCategories(false);
        window.scrollTo(0, 0);
    };

    const handleSearchChange = (term: string) => {
        setSearchTerm(term);
        if (term.trim() !== '') {
            resetViews();
        }
        // Limpiar filtros también
        setPriceRange([0, 20000]);
        setSelectedRecipient(null);
        setSelectedFilterCategories([]);
    };

    const handleGoHome = () => {
        setSearchTerm('');
        // Limpiar filtros también
        setPriceRange([0, 20000]);
        setSelectedRecipient(null);
        setSelectedFilterCategories([]);
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
        setSearchTerm('');
        resetViews();
        setShowAllCategories(true);
    };

    const handleCategorySelectById = (id: number) => {
        const category = CATEGORIES.find(c => c.id === id);
        if (category) {
            handleSelectCategory(category);
        }
    };

    const handleCategoryToggle = (categoryId: number) => {
        setSelectedFilterCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const handleClearFilters = () => {
        setPriceRange([0, 20000]);
        setSelectedRecipient(null);
        setSelectedFilterCategories([]);
    };

    // Main Content Logic
    const homeProducts = useMemo(() => {
        // 1. Search Mode or All Categories Mode
        if (searchTerm || showAllCategories) {
            let results = PRODUCTS;
            
            // Si hay término de búsqueda, filtrar por él
            if (searchTerm) {
                const lowerTerm = searchTerm.toLowerCase();
                results = PRODUCTS.filter(p => 
                    p.title.toLowerCase().includes(lowerTerm) || 
                    p.category.toLowerCase().includes(lowerTerm) ||
                    (p.subcategory && p.subcategory.toLowerCase().includes(lowerTerm))
                );
            }

            // Aplicar filtros de precio
            results = results.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

            // Aplicar filtro de destinatario
            if (selectedRecipient) {
                const recipientMap: { [key: string]: number } = {
                    'padres': 2,
                    'madres': 3,
                    'niños': 4,
                    'niñas': 5
                };
                const categoryId = recipientMap[selectedRecipient];
                results = results.filter(p => p.categoryId === categoryId);
            }

            // Aplicar filtro de categorías
            if (selectedFilterCategories.length > 0) {
                results = results.filter(p => 
                    p.categoryId && selectedFilterCategories.includes(p.categoryId)
                );
            }

            return results;
        }

        // 2. Offers Mode
        if (showOffers) {
            return PRODUCTS.filter(p => p.discount || p.oldPrice);
        }

        // 3. Default Home Mode (Generic Interest)
        return PRODUCTS.filter(p => !p.categoryId || p.subcategory === 'Interes').slice(0, 10);
    }, [searchTerm, showOffers, showAllCategories, priceRange, selectedRecipient, selectedFilterCategories]);

    const categoryProducts = useMemo(() => {
        if (!selectedCategory) return [];
        return PRODUCTS.filter(p => p.categoryId === selectedCategory.id);
    }, [selectedCategory]);

    // Section Title Logic
    const getSectionTitle = () => {
        if (searchTerm) return `Resultados para "${searchTerm}"`;
        if (showOffers) return "Mejores Ofertas y Descuentos";
        if (showAllCategories) return "Explorar Todas las Categorías";
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
                onOpenAuth={() => setShowAuthModal(true)}
            />
            
            <AuthModal 
                isOpen={showAuthModal} 
                onClose={() => setShowAuthModal(false)} 
            />
            
            {showWishlist ? (
                <WishlistPage 
                    products={PRODUCTS}
                    favoriteIds={favoriteIds}
                    onToggleFavorite={handleToggleFavorite}
                    onBack={handleGoHome}
                    onOpenProduct={(product) => setQuickViewProduct(product)}
                />
            ) : selectedCategory ? (
                <CategoryPage 
                    category={selectedCategory} 
                    products={categoryProducts} 
                    favoriteIds={favoriteIds}
                    onToggleFavorite={handleToggleFavorite}
                    onBack={handleGoHome}
                    onOpenProduct={(product) => setQuickViewProduct(product)}
                />
            ) : (
                <main className="flex-1 w-full max-w-[1280px] mx-auto px-6 py-8">
                    
                    {/* Hero Section - Only show on pure home */}
                    {!searchTerm && !showOffers && !showAllCategories && <Hero />}
                    
                    {/* Layout con Sidebar para búsqueda o explorar categorías */}
                    <div className={(searchTerm || showAllCategories) ? "flex gap-6 mt-8" : "flex flex-col gap-12"}>
                        
                        {/* Sidebar de filtros - Mostrar cuando hay búsqueda o modo explorar categorías */}
                        {(searchTerm || showAllCategories) && (
                            <FilterSidebar
                                priceRange={priceRange}
                                onPriceRangeChange={setPriceRange}
                                selectedRecipient={selectedRecipient}
                                onRecipientChange={setSelectedRecipient}
                                selectedCategories={selectedFilterCategories}
                                onCategoryToggle={handleCategoryToggle}
                                categories={CATEGORIES}
                                totalResults={homeProducts.length}
                                onClearFilters={handleClearFilters}
                            />
                        )}
                        
                        {/* Contenido principal */}
                        <div className="flex-1">
                    
                            {/* Categories Grid - Only show if not searching/offers/all categories */}
                            {!searchTerm && !showOffers && !showAllCategories && (
                                <section id="categories-section" className="mb-12">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-2xl font-bold text-slate-900">Explora Categorías</h2>
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
                            <section className="py-6 min-h-[50vh] bg-gradient-to-b from-white to-gray-50/50 rounded-3xl p-6">
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                                    {getSectionTitle()}
                                </h2>
                                
                                {!searchTerm && !showOffers && !showAllCategories && (
                                    <p className="text-gray-600 mb-6 text-sm">
                                        Basado en tendencias globales y tus preferencias.
                                    </p>
                                )}
                                
                                {showAllCategories && (
                                    <p className="text-gray-600 mb-6 text-sm">
                                        Explora todos nuestros productos. Usa los filtros para encontrar exactamente lo que buscas.
                                    </p>
                                )}
                                
                                <div className={`grid ${(searchTerm || showAllCategories) ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'} gap-4`}>
                                    {homeProducts.map((product, index) => (
                                        <div key={product.id} className="relative">
                                            {/* Destacar los primeros productos en la sección "Te puede interesar" */}
                                            {index < 3 && !searchTerm && !showOffers && !showAllCategories && (
                                                <div className="absolute -top-2 -left-2 z-20">
                                                    <span className="px-3 py-1 bg-gradient-to-r from-primary to-green-400 text-white text-xs font-bold rounded-full shadow-lg">
                                                        ¡TOP {index + 1}!
                                                    </span>
                                                </div>
                                            )}
                                            
                                            <ProductCard 
                                                product={product}
                                                isFavorite={favoriteIds.includes(product.id)}
                                                onToggleFavorite={() => handleToggleFavorite(product.id)}
                                                onOpen={() => setQuickViewProduct(product)}
                                            />
                                        </div>
                                    ))}
                                </div>
                                
                                {homeProducts.length === 0 && (
                                    <div className="flex flex-col items-center justify-center py-20 text-gray-600">
                                        <span className="material-symbols-outlined text-6xl mb-4 opacity-50">search_off</span>
                                        <h3 className="text-xl font-bold mb-2 text-slate-900">No encontramos resultados</h3>
                                        <p className="text-sm">Intenta con otros términos o explora nuestras categorías.</p>
                                        <button 
                                            onClick={handleGoHome}
                                            className="mt-6 px-6 py-2 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors"
                                        >
                                            Ver todo
                                        </button>
                                    </div>
                                )}
                                
                                {/* Mostrar botón de "Ver más" si hay muchos productos */}
                                {homeProducts.length > 0 && !searchTerm && !showOffers && !showAllCategories && (
                                    <div className="mt-8 text-center">
                                        <button 
                                            onClick={handleScrollToCategories}
                                            className="px-8 py-3 bg-gradient-to-r from-primary to-green-400 text-black font-bold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <span className="flex items-center gap-2">
                                                Ver más productos
                                                <span className="material-symbols-outlined">arrow_forward</span>
                                            </span>
                                        </button>
                                    </div>
                                )}
                            </section>
                    
                        </div> {/* Cierre del contenido principal */}
                    </div> {/* Cierre del layout con sidebar */}
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