import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO_CATEGORIES_PADRES, SEO_CATEGORIES_NINOS, SEOCategory } from '../config/seo-categories';

interface SEOCategoriesNavProps {
  darkMode?: boolean;
  currentCategory?: string;
  parentCategory?: 'padres' | 'ninos'; // Nueva prop para seleccionar qué categorías mostrar
}

/**
 * Componente de navegación para categorías SEO
 * Muestra las categorías optimizadas de forma atractiva para padres o niños
 */
const SEOCategoriesNav: React.FC<SEOCategoriesNavProps> = ({ 
  darkMode = false,
  currentCategory,
  parentCategory = 'padres'
}) => {
  const navigate = useNavigate();

  // Seleccionar categorías según parent
  const seoCategories: SEOCategory[] = parentCategory === 'ninos' ? SEO_CATEGORIES_NINOS : SEO_CATEGORIES_PADRES;

  // Iconos para cada tipo de categoría
  const getIcon = (categoryId: string): string => {
    const iconMap: Record<string, string> = {
      // Padres
      'padres-originales': 'auto_awesome',
      'padre-que-tiene-todo': 'workspace_premium',
      'regalos-personalizados': 'edit',
      'padres-primerizos': 'child_care',
      'padres-50-anos': 'celebration',
      'padres-60-anos': 'cake',
      'regalos-navidad': 'ac_unit',
      'padres-jubilados': 'beach_access',
      'padres-deportistas': 'sports_soccer',
      'kits-regalo-hombres': 'redeem',
      'padres-frikis': 'videogame_asset',
      'experiencias': 'hiking',
      'mejores-regalos': 'star',
      'padres-elegantes': 'diamond',
      'padres-cerveceros': 'sports_bar',
      'gadgets-padres': 'devices',
      'padres-cocinitas': 'restaurant',
      'regalos-baratos': 'savings',
      'ultima-hora': 'schedule',
      'manualidades-diy': 'handyman',
      // Niños
      'ninos-mejores-regalos': 'child_care',
      'ninos-10-anos': 'cake',
      'juguetes-educativos': 'school',
      'ninos-regalos-originales': 'redeem',
      'ninos-5-anos': 'looks_5',
      'ninos-8-anos': 'looks',
      'juguetes-construccion': 'construction',
      'ninos-comunion': 'church',
      'juegos-mesa-ninos': 'casino',
      'ninos-dinosaurios': 'cruelty_free',
      'robots-ninos': 'smart_toy',
      'ninos-deportivo': 'sports_soccer',
      'ciencia-ninos': 'science',
      'ninos-reyes': 'star',
      'ninos-exterior': 'park',
      'ninos-12-anos': 'cake',
      'tecnologico-ninos': 'devices',
      'stem-ninos': 'calculate',
      'creativos-ninos': 'palette',
      'disfraces-ninos': 'theater_comedy',
      'baratos-cumpleanos-ninos': 'savings',
    };
    return iconMap[categoryId] || 'category';
  };

  return (
    <div className={`py-8 ${darkMode ? 'bg-background-dark' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6">
          <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Explora por Categoría
          </h2>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            Encuentra el regalo perfecto navegando por nuestras categorías especializadas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {seoCategories.map((category) => {
            const isActive = currentCategory === category.slug;
            
            return (
              <button
                key={category.id}
                onClick={() => navigate(`/${parentCategory}/${category.slug}`)}
                className={`
                  flex flex-col items-center gap-3 p-4 rounded-xl transition-all
                  hover:scale-[1.02] active:scale-95
                  ${isActive 
                    ? 'bg-primary text-background-dark shadow-lg' 
                    : darkMode 
                      ? 'bg-white/5 hover:bg-white/10 text-white' 
                      : 'bg-gray-50 hover:bg-gray-100 text-slate-900'
                  }
                `}
              >
                <span className="material-symbols-outlined text-3xl">
                  {getIcon(category.id)}
                </span>
                <span className="text-sm font-semibold text-center leading-tight">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Búsqueda rápida */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Buscar categoría..."
              className={`
                w-full px-4 py-3 rounded-full border-2 
                ${darkMode 
                  ? 'bg-white/5 border-white/10 text-white placeholder-gray-500' 
                  : 'bg-white border-gray-200 text-slate-900 placeholder-gray-400'
                }
                focus:border-primary focus:outline-none
              `}
              onChange={(e) => {
                const term = e.target.value.toLowerCase();
                if (!term) return;
                
                // Buscar categoría que coincida
                const found = seoCategories.find(cat => 
                  cat.name.toLowerCase().includes(term) ||
                  cat.slug.includes(term)
                );
                
                if (found) {
                  navigate(`/${parentCategory}/${found.slug}`);
                  e.target.value = '';
                }
              }}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">
              search
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOCategoriesNav;
