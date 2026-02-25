import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductLoader } from '../utils/productLoader';
import { getSEOCategoryBySlug, SEO_CATEGORIES_PADRES, SEO_CATEGORIES_NINOS } from '../config/seo-categories';
import { useTheme } from '../../ThemeContext';
import ProductCard from '../../components/ProductCard';
import { PRODUCTS } from '../../constants';
import { getProductImage } from '../../utils/images';

const SEOCategoryPage: React.FC = () => {
  const { category, seoCategory } = useParams<{
    category: string;
    seoCategory: string;
  }>();
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();

  // Obtener información de la categoría SEO
  const seoCategoryInfo = seoCategory ? getSEOCategoryBySlug(seoCategory) : null;
  
  // Obtener productos de esta categoría (desde ProductLoader y constants.ts)
  const products = React.useMemo(() => {
    if (!seoCategory) return [];
    
    // Productos del ProductLoader
    const loaderProducts = ProductLoader.getProductsBySEOCategory(seoCategory);
    
    // Productos de constants.ts filtrados por seoCategory
    const constantsProducts = PRODUCTS.filter(p => p.seoCategory === seoCategory);
    
    // Combinar ambas fuentes (evitar duplicados por ID)
    const allProducts = [...loaderProducts];
    constantsProducts.forEach(cp => {
      if (!allProducts.some(p => p.id === cp.id)) {
        allProducts.push(cp as any); // Type assertion necesaria por diferencias menores en tipos
      }
    });
    
    return allProducts;
  }, [seoCategory]);

  // Si no se encuentra la categoría, mostrar 404
  if (!seoCategoryInfo) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-background-dark text-white' : 'bg-white text-slate-900'}`}>
        <div className="text-center max-w-md px-6">
          <span className="material-symbols-outlined text-6xl mb-4 opacity-50">category</span>
          <h1 className="text-3xl font-bold mb-4">Categoría no encontrada</h1>
          <p className="text-gray-500 mb-6">
            La categoría que buscas no existe.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  // JSON-LD structured data para SEO
  const jsonLd = seoCategoryInfo ? {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: seoCategoryInfo.metaTitle || seoCategoryInfo.name,
    description: seoCategoryInfo.metaDescription || '',
    url: `https://tudominio.com/${category}/${seoCategory}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.title,
          image: getProductImage(product),
          description: product.description || product.title,
          offers: {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: product.url,
          },
        },
      })),
    },
  } : null;

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-background-dark text-white' : 'bg-white text-slate-900'} transition-colors`}>
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-8 flex flex-wrap gap-2 text-sm font-medium">
          <button onClick={() => navigate('/')} className="text-gray-500 hover:text-primary transition-colors">
            Inicio
          </button>
          <span className="text-gray-400">/</span>
          <button onClick={() => navigate(`/${category}`)} className="text-gray-500 hover:text-primary transition-colors">
            {category}
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-primary">{seoCategoryInfo.name}</span>
        </nav>

        {/* Header de la categoría */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {seoCategoryInfo.name}
          </h1>
          {seoCategoryInfo.metaDescription && (
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {seoCategoryInfo.metaDescription}
            </p>
          )}
        </div>

        {/* Grid de productos */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={false}
                onToggleFavorite={() => {}}
                onOpen={() => navigate(`/${category}/${seoCategory}/${product.slug}`)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl mb-4 opacity-50">inventory_2</span>
            <h3 className="text-2xl font-bold mb-2">Próximamente</h3>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Estamos preparando productos increíbles para esta categoría.
            </p>
          </div>
        )}

        {/* Navegación a otras categorías */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10">
          <h2 className="text-2xl font-bold mb-6">Explora otras categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(category === 'ninos' ? SEO_CATEGORIES_NINOS : SEO_CATEGORIES_PADRES).filter(cat => cat.slug !== seoCategory)
              .slice(0, 6)
              .map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => navigate(`/${category}/${cat.slug}`)}
                  className={`text-left p-4 rounded-xl transition-colors ${
                    darkMode 
                      ? 'bg-white/5 hover:bg-white/10' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <h3 className="font-bold mb-1">{cat.name}</h3>
                  {cat.metaDescription && (
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {cat.metaDescription.substring(0, 80)}...
                    </p>
                  )}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOCategoryPage;
