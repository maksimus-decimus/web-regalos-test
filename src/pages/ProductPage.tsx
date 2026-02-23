import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductLoader } from '../utils/productLoader';
import { getSEOCategoryBySlug } from '../config/seo-categories';
import { PRODUCTS } from '../../constants';
import { getProductImage } from '../../utils/images';
import { useTheme } from '../../ThemeContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProductPage: React.FC = () => {
  const { category, seoCategory, productSlug } = useParams<{
    category: string;
    seoCategory: string;
    productSlug: string;
  }>();
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();

  // Obtener información de la categoría SEO
  const seoCategoryInfo = seoCategory ? getSEOCategoryBySlug(seoCategory) : null;
  
  // Buscar el producto
  const product = React.useMemo(() => {
    if (!seoCategoryInfo || !productSlug) return null;
    
    // Si el slug tiene formato "producto-{id}", extraer el ID
    const idMatch = productSlug.match(/^producto-(\d+)$/);
    if (idMatch) {
      const productId = parseInt(idMatch[1], 10);
      // Buscar en constants.ts primero
      const foundProduct = PRODUCTS.find(p => p.id === productId);
      if (foundProduct) return foundProduct;
    }
    
    // Buscar por slug en ProductLoader (productos cargados desde JSON)
    const allProducts = ProductLoader.getAllProducts();
    return allProducts.find(p => p.slug === productSlug && p.seoCategory === seoCategory);
  }, [seoCategory, productSlug, seoCategoryInfo]);

  // Si no se encuentra el producto, mostrar 404
  if (!product) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-background-dark text-white' : 'bg-white text-slate-900'}`}>
        <div className="text-center max-w-md px-6">
          <span className="material-symbols-outlined text-6xl mb-4 opacity-50">search_off</span>
          <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
          <p className="text-gray-500 mb-6">
            El producto que buscas no existe o ha sido eliminado.
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

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-background-dark text-white' : 'bg-gray-50 text-slate-900'} transition-colors`}>
      <Header 
        searchTerm=""
        onSearchChange={() => {}}
        onGoHome={() => navigate('/')}
        onShowOffers={() => navigate('/')}
        onShowCategories={() => navigate('/')}
        onShowWishlist={() => navigate('/')}
        wishlistCount={0}
        onOpenAuth={() => {}}
        onToggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 mt-20">
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
          <span className="text-gray-500">{seoCategoryInfo?.name}</span>
          <span className="text-gray-400">/</span>
          <span className="text-primary">{product.title}</span>
        </nav>

        {/* Producto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Imagen del producto */}
          <div className="relative">
            <div className="sticky top-24">
              {/* Imagen clickeable que lleva a Amazon */}
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block relative group"
              >
                <div className={`aspect-square rounded-2xl overflow-hidden ${darkMode ? 'bg-white/5' : 'bg-gray-100'} transition-transform group-hover:scale-[1.02]`}>
                  <img
                    src={getProductImage(product)}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay al hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg">
                      Ver en Amazon
                      <span className="material-symbols-outlined">open_in_new</span>
                    </span>
                  </div>
                </div>
              </a>
              {product.tag && (
                <div className="absolute top-4 left-4 bg-primary text-background-dark px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {product.tag}
                </div>
              )}
              {product.discount && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  -{product.discount}%
                </div>
              )}
            </div>
          </div>

          {/* Información del producto */}
          <div className="flex flex-col gap-6">
            {/* Categoría */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                {seoCategoryInfo?.name}
              </span>
              {product.subcategory && (
                <span className="inline-block px-3 py-1 bg-gray-500/10 text-gray-500 text-sm font-semibold rounded-full">
                  {product.subcategory}
                </span>
              )}
            </div>

            {/* Título */}
            <h1 className="text-4xl font-bold leading-tight">
              {product.title}
            </h1>

            {/* Precio */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold">
                €{product.price.toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="text-xl text-gray-500 line-through">
                  €{product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Descripción */}
            {product.description && (
              <div className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {product.description}
              </div>
            )}

            {/* CTA */}
            <div className="flex gap-4 mt-4">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background-dark font-bold rounded-full hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
              >
                Ver en Amazon
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
              <button
                className={`p-4 rounded-full border-2 ${darkMode ? 'border-white/20 hover:border-primary' : 'border-gray-200 hover:border-primary'} transition-colors`}
                aria-label="Añadir a favoritos"
              >
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>

            {/* Info adicional */}
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-white/5' : 'bg-gray-50'} space-y-3`}>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">local_shipping</span>
                <span className="text-sm">Envío rápido disponible en Amazon</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span className="text-sm">Producto verificado por Amazon</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">payments</span>
                <span className="text-sm">Pago seguro con Amazon</span>
              </div>
            </div>

            {/* Keywords SEO */}
            {'keywords' in product && product.keywords && Array.isArray(product.keywords) && product.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-white/10">
                {(product.keywords as string[]).map((keyword: string, index: number) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-600'}`}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Productos relacionados */}
        <div className="mt-20 pb-12">
          <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {PRODUCTS
              .filter(p => 
                p.categoryId === product.categoryId && 
                p.id !== product.id &&
                p.seoCategory === product.seoCategory
              )
              .slice(0, 4)
              .map(relatedProduct => (
                <a
                  key={relatedProduct.id}
                  href={`/${category}/${relatedProduct.seoCategory}/producto-${relatedProduct.id}`}
                  className={`group rounded-xl overflow-hidden ${darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-white hover:shadow-lg'} transition-all`}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={getProductImage(relatedProduct)}
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium line-clamp-2 mb-2">
                      {relatedProduct.title}
                    </p>
                    <p className="text-lg font-bold text-primary">
                      €{relatedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
      
      <Footer onCategorySelect={() => {}} />
    </div>
  );
};

export default ProductPage;
