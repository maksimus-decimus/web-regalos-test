import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SEO_CATEGORIES_PADRES } from '../config/seo-categories';
import { PRODUCTS } from '../../constants';
import { useTheme } from '../../ThemeContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';

/**
 * Página que muestra las categorías SEO de una categoría principal
 * Ejemplo: /padres muestra los productos en carruseles organizados por categoría SEO
 */
const CategoryListPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();
  const [selectedSeoCategory, setSelectedSeoCategory] = useState<string | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  // Por ahora solo soportamos "padres" con categorías SEO
  const seoCategoriesAvailable = category === 'padres';
  const seoCategories = seoCategoriesAvailable ? SEO_CATEGORIES_PADRES : [];

  // Obtener productos de la categoría (categoryId: 2 para Padres)
  const categoryProducts = useMemo(() => {
    if (category === 'padres') {
      return PRODUCTS.filter(p => p.categoryId === 2);
    }
    return [];
  }, [category]);

  // Agrupar productos por seoCategory
  const productsBySeoCategory = useMemo(() => {
    const grouped: Record<string, typeof PRODUCTS> = {};
    categoryProducts.forEach(product => {
      if (product.seoCategory) {
        if (!grouped[product.seoCategory]) {
          grouped[product.seoCategory] = [];
        }
        grouped[product.seoCategory].push(product);
      }
    });
    return grouped;
  }, [categoryProducts]);

  // Filtrar categorías SEO que tienen productos
  const categoriesWithProducts = useMemo(() => {
    return seoCategories.filter(cat => 
      productsBySeoCategory[cat.slug]?.length > 0
    );
  }, [productsBySeoCategory, seoCategories]);

  const handleToggleFavorite = (id: number) => {
    setFavoriteIds(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const handleProductClick = (product: typeof PRODUCTS[0]) => {
    // Navegar a la página del producto usando slug
    if (product.seoCategory) {
      // Crear slug simple a partir del ID si no tiene uno
      const productSlug = `producto-${product.id}`;
      navigate(`/${category}/${product.seoCategory}/${productSlug}`);
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  if (!seoCategoriesAvailable) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Categoría no disponible
          </h1>
          <p className="text-gray-600 mb-6">
            Las subcategorías SEO solo están disponibles para "padres" por ahora.
          </p>
          <button
            onClick={handleGoHome}
            className="bg-primary text-black px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-background-dark text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header 
        searchTerm=""
        onSearchChange={() => {}}
        onGoHome={handleGoHome}
        onShowOffers={() => {}}
        onShowCategories={() => {}}
        onShowWishlist={() => {}}
        wishlistCount={0}
        onOpenAuth={() => {}}
        onToggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />

      <main className="container mx-auto px-4 py-12 mt-20">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleGoHome}
            className="inline-flex items-center text-gray-600 hover:text-primary mb-6 transition-colors"
          >
            <span className="material-symbols-outlined mr-2">arrow_back</span>
            Volver al inicio
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 capitalize">
            Regalos para {category}
          </h1>
          <p className="text-gray-600 text-lg">
            Explora nuestra colección organizada en {categoriesWithProducts.length} categorías
          </p>
        </div>

        {/* Sistema de Carruseles con Sidebar */}
        <div className="flex gap-6">
          {/* Sidebar de filtros - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0 bg-white rounded-2xl p-4 h-fit sticky top-24 shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900">
              <span className="material-symbols-outlined">tune</span>
              Categorías
            </h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setSelectedSeoCategory(null)}
                className={`text-left px-4 py-2 rounded-lg transition-all ${
                  selectedSeoCategory === null
                    ? 'text-primary bg-primary/10 font-bold'
                    : 'opacity-60 hover:opacity-100 hover:bg-gray-100'
                }`}
              >
                Ver todas
              </button>
              {categoriesWithProducts.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedSeoCategory(cat.slug)}
                  className={`text-left px-4 py-2 rounded-lg transition-all text-sm ${
                    selectedSeoCategory === cat.slug
                      ? 'text-primary bg-primary/10 font-bold'
                      : 'opacity-60 hover:opacity-100 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      {cat.icon || 'category'}
                    </span>
                    <span className="line-clamp-2">{cat.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* Contenido principal con carruseles */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Filtro móvil */}
            <div className="lg:hidden">
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-gray-200 shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined">tune</span>
                  <span className="font-medium">
                    {selectedSeoCategory 
                      ? categoriesWithProducts.find(c => c.slug === selectedSeoCategory)?.name
                      : 'Ver todas las categorías'
                    }
                  </span>
                </span>
                <span className="material-symbols-outlined">
                  {showMobileFilters ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              
              {showMobileFilters && (
                <div className="mt-2 p-4 rounded-xl bg-white border border-gray-200">
                  <button
                    onClick={() => {
                      setSelectedSeoCategory(null);
                      setShowMobileFilters(false);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg mb-2 transition-all ${
                      selectedSeoCategory === null 
                        ? 'text-primary bg-primary/10 font-bold'
                        : 'opacity-60 hover:bg-gray-100'
                    }`}
                  >
                    Ver todas
                  </button>
                  {categoriesWithProducts.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedSeoCategory(cat.slug);
                        setShowMobileFilters(false);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg mb-2 transition-all text-sm ${
                        selectedSeoCategory === cat.slug
                          ? 'text-primary bg-primary/10 font-bold'
                          : 'opacity-60 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">
                          {cat.icon || 'category'}
                        </span>
                        <span>{cat.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Carruseles por categoría */}
            {categoriesWithProducts
              .filter(cat => selectedSeoCategory === null || cat.slug === selectedSeoCategory)
              .map(cat => {
                const categoryProducts = productsBySeoCategory[cat.slug] || [];
                if (categoryProducts.length === 0) return null;

                return (
                  <section key={cat.id} className="flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b pb-3 border-gray-200">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                          <span className="material-symbols-outlined text-sm">
                            {cat.icon || 'category'}
                          </span>
                          Categoría
                        </div>
                        <h2 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight">
                          {cat.name}
                        </h2>
                        {cat.metaDescription && (
                          <p className="opacity-60 text-sm mt-1">
                            {cat.metaDescription}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                          {categoryProducts.length} productos
                        </span>
                        <button
                          onClick={() => navigate(`/${category}/${cat.slug}`)}
                          className="flex items-center gap-1 px-3 md:px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-black transition-all font-medium text-sm group"
                          aria-label={`Ver todos los productos de ${cat.name}`}
                        >
                          <span className="hidden sm:inline">Ver más</span>
                          <span className="sm:hidden">Ver</span>
                          <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Carrusel horizontal scrollable */}
                    <div className="relative group/carousel">
                      <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                        <div className="flex gap-4" style={{ minWidth: 'min-content' }}>
                          {categoryProducts.map(product => (
                            <div key={product.id} className="w-[280px] flex-shrink-0">
                              <ProductCard
                                product={product}
                                isFavorite={favoriteIds.includes(product.id)}
                                onToggleFavorite={() => handleToggleFavorite(product.id)}
                                onOpen={() => handleProductClick(product)}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                );
              })}

            {/* Mensaje si no hay productos */}
            {categoriesWithProducts.length === 0 && (
              <div className="text-center py-20 opacity-60">
                <span className="material-symbols-outlined text-5xl mb-4 text-gray-400">inventory_2</span>
                <p className="text-lg text-gray-600">No hay productos disponibles en esta categoría.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer onCategorySelect={() => {}} />
    </div>
  );
};

export default CategoryListPage;
