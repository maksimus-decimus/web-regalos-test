import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './AuthContext';
<<<<<<< Updated upstream
=======
import ProductPage from './src/pages/ProductPage';
import SEOCategoryPage from './src/pages/SEOCategoryPage';
import CategoryListPage from './src/pages/CategoryListPage';
import { initializeProducts } from './src/data/initProducts';

// Inicializar productos al cargar la aplicación
initializeProducts();
>>>>>>> Stashed changes

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
<<<<<<< Updated upstream
      <App />
=======
      <BrowserRouter>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<App />} />
          
          {/* Rutas SEO para productos */}
          {/* Patrón: /padres/[categoria-seo]/[slug-producto] */}
          <Route path="/:category/:seoCategory/:productSlug" element={<ProductPage />} />
          
          {/* Rutas SEO para categorías */}
          {/* Patrón: /padres/[categoria-seo] */}
          <Route path="/:category/:seoCategory" element={<SEOCategoryPage />} />
          
          {/* Lista de categorías SEO */}
          {/* Patrón: /padres */}
          <Route path="/:category" element={<CategoryListPage />} />
        </Routes>
      </BrowserRouter>
>>>>>>> Stashed changes
    </AuthProvider>
  </React.StrictMode>
);