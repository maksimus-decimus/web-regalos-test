import React from 'react';
import { Product } from '../types';
import { getProductImage } from '../utils/images';

interface ProductCardProps {
    product: Product;
    isFavorite: boolean;
    onToggleFavorite: () => void;
    onOpen?: () => void;
    darkMode?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isFavorite, onToggleFavorite, onOpen, darkMode = false }) => {
    
    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onToggleFavorite();
    };

    return (
        <div 
            className={`group flex flex-col gap-3 cursor-pointer border rounded-2xl p-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50 hover:scale-[1.02] ${
                darkMode 
                    ? 'bg-surface-dark border-[#28392e]' 
                    : 'bg-white border-gray-200'
            }`}
            onClick={onOpen}
        >
            {/* Contenedor de imagen */}
            <div className={`relative aspect-square w-full rounded-xl overflow-hidden ${
                darkMode 
                    ? 'bg-gradient-to-br from-[#1A2C20] to-[#0f2818]' 
                    : 'bg-gradient-to-br from-gray-50 to-gray-100'
            }`}>
                <img
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
                    src={getProductImage(product)}
                    alt={product.title}
                    loading="lazy"
                />
                
                {/* Badge destacado */}
                {product.tag && (
                    <div className="absolute top-2 left-2 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                        {product.tag}
                    </div>
                )}
                
                {/* Badge de descuento */}
                {product.discount && (
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        -{product.discount}%
                    </div>
                )}

                {/* Botón de favoritos */}
                <button 
                    onClick={handleFavoriteClick}
                    className={`absolute bottom-2 right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-all hover:scale-110 active:scale-95 ${
                        isFavorite 
                            ? 'bg-red-500 text-white shadow-lg shadow-red-500/50' 
                            : darkMode
                                ? 'bg-[#1A2C20]/90 text-gray-300 hover:bg-[#1A2C20] hover:shadow-lg'
                                : 'bg-white/90 text-gray-700 hover:bg-white hover:shadow-lg'
                    }`}
                >
                    <span className={`material-symbols-outlined text-[18px] ${isFavorite ? 'fill-current' : ''}`}>
                        favorite
                    </span>
                </button>
                
                {/* Overlay de hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Contenido del producto */}
            <div className="flex-1 flex flex-col">
                {/* Categoría con estilo destacado */}
                <div className="mb-2">
                    <span className="inline-block px-2 py-1 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-xs font-semibold rounded-lg">
                        {product.category}
                    </span>
                </div>
                
                {/* Título del producto */}
                <h3 className={`font-bold text-sm group-hover:text-primary transition-colors line-clamp-2 mb-auto ${
                    darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                    {product.title}
                </h3>
                
                {/* Precio destacado */}
                <div className="flex items-baseline gap-2 mt-3">
                    <span className={`text-2xl font-black group-hover:text-primary transition-colors ${
                        darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                        €{product.price.toFixed(2)}
                    </span>
                    {product.oldPrice && (
                        <span className="text-xs text-gray-400 line-through">
                            €{product.oldPrice.toFixed(2)}
                        </span>
                    )}
                </div>
                
                {/* Descripción */}
                {product.description && (
                    <p className={`text-sm line-clamp-2 mb-3 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        {product.description}
                    </p>
                )}
                                
                {/* Enlace a Amazon */}
                {product.url && (
                    <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-2 inline-flex items-center justify-center gap-2 w-full py-2 font-medium rounded-lg hover:bg-primary hover:text-white transition-colors text-sm ${
                            darkMode 
                                ? 'bg-[#1A2C20] text-white' 
                                : 'bg-gray-100 text-slate-900'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span>Comprar en Amazon</span>
                        <span className="material-symbols-outlined text-base">open_in_new</span>
                    </a>
                )}
                
                {/* Botón de acción si no hay URL */}
                {!product.url && (
                    <button className={`mt-2 w-full py-2 font-medium rounded-lg hover:bg-primary hover:text-white transition-colors text-sm ${
                        darkMode 
                            ? 'bg-[#1A2C20] text-white' 
                            : 'bg-gray-100 text-slate-900'
                    }`}>
                        Ver detalles
                    </button>
                )}
            </div>
            
            {/* Efecto de borde en hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl pointer-events-none transition-colors"></div>
        </div>
    );
};

export default ProductCard;