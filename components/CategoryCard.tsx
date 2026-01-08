import React from 'react';
import { Category } from '../types';
import { getCategoryImageSet } from '../utils/images';

interface CategoryCardProps {
    category: Category;
    onClick: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
    const localImages = getCategoryImageSet(category);
    return (
        <button 
            onClick={() => onClick(category)} 
            className="group relative block w-full text-left aspect-[4/3] overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border-2 border-gray-300 hover:border-primary"
        >
            {/* Fondo de imágenes */}
            <div className="absolute inset-0 grid grid-cols-3 h-full gap-[2px]">
                {/* Main Large Image */}
                <div
                    className="col-span-2 h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${localImages[0]}')` }}
                    role="img"
                    aria-label={category.title}
                />
                
                {/* Side Stacked Images */}
                <div className="col-span-1 flex flex-col h-full gap-[2px]">
                    <div
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${localImages[1]}')` }}
                        role="img"
                        aria-label={`${category.title} detail 1`}
                    />
                    <div
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${localImages[2]}')` }}
                        role="img"
                        aria-label={`${category.title} detail 2`}
                    />
                </div>
            </div>
            
            {/* Overlay Gradient - Mejorado para más contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-95 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Borde interior para destacar */}
            <div className="absolute inset-0 border-2 border-white/10 group-hover:border-primary/30 rounded-2xl transition-colors"></div>
            
            {/* Glow effect en hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/5 to-transparent"></div>
            
            {/* Text Content - Mejorado para más legibilidad */}
            <div className="absolute bottom-0 left-0 p-6 z-10">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1 drop-shadow-lg">
                    {category.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    {category.title}
                </h3>
            </div>
            
            {/* Badge indicador */}
            <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white group-hover:bg-primary/80 transition-colors">
                    Ver más
                </span>
            </div>
            
            {/* Flecha indicadora */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <span className="material-symbols-outlined text-primary text-2xl bg-white/20 backdrop-blur-sm rounded-full p-1">
                    arrow_forward
                </span>
            </div>
        </button>
    );
};

export default CategoryCard;