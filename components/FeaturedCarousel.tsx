import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface FeaturedCarouselProps {
    products: Product[];
    favoriteIds: number[];
    onToggleFavorite: (id: number) => void;
    onProductClick: (product: Product) => void;
    darkMode?: boolean;
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({
    products,
    favoriteIds,
    onToggleFavorite,
    onProductClick,
    darkMode = false,
}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!containerRef.current) return;
        
        const scrollAmount = 400; // Cantidad de píxeles a desplazar
        const newPosition = direction === 'left' 
            ? scrollPosition - scrollAmount 
            : scrollPosition + scrollAmount;
        
        containerRef.current.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
        
        setScrollPosition(newPosition);
    };

    if (products.length === 0) return null;

    return (
        <section className="mb-12 relative">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className={`text-3xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                        🔥 Los Más Vendidos
                    </h2>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                        Productos más populares de nuestra comunidad
                    </p>
                </div>
                
                {/* Botones de navegación */}
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className={`p-3 rounded-full border-2 transition-all shadow-md hover:shadow-lg ${
                            darkMode 
                                ? 'bg-[#1A2C20] border-[#28392e] hover:border-primary hover:bg-primary/20' 
                                : 'bg-white border-gray-200 hover:border-primary hover:bg-primary/10'
                        }`}
                        aria-label="Anterior"
                    >
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className={`p-3 rounded-full border-2 transition-all shadow-md hover:shadow-lg ${
                            darkMode 
                                ? 'bg-[#1A2C20] border-[#28392e] hover:border-primary hover:bg-primary/20' 
                                : 'bg-white border-gray-200 hover:border-primary hover:bg-primary/10'
                        }`}
                        aria-label="Siguiente"
                    >
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>

            {/* Carrusel de productos */}
            <div className="relative">
                <div
                    ref={containerRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products.map((product, index) => (
                        <div 
                            key={product.id} 
                            className="flex-shrink-0 w-64 relative"
                        >
                            {/* Badge de posición TOP */}
                            {index < 3 && (
                                <div className="absolute -top-2 -left-2 z-20">
                                    <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">local_fire_department</span>
                                        TOP {index + 1}
                                    </span>
                                </div>
                            )}
                            
                            <ProductCard
                                product={product}
                                isFavorite={favoriteIds.includes(product.id)}
                                onToggleFavorite={() => onToggleFavorite(product.id)}
                                onOpen={() => onProductClick(product)}
                                darkMode={darkMode}
                            />
                        </div>
                    ))}
                </div>
                
                {/* Gradiente de fade en los bordes */}
                <div className={`absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r pointer-events-none ${
                    darkMode ? 'from-background-dark' : 'from-gray-50'
                } to-transparent`}></div>
                <div className={`absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l pointer-events-none ${
                    darkMode ? 'from-background-dark' : 'from-gray-50'
                } to-transparent`}></div>
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default FeaturedCarousel;
