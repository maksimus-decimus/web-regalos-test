import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
    isFavorite: boolean;
    onToggleFavorite: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isFavorite, onToggleFavorite }) => {
    
    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onToggleFavorite();
    };

    return (
        <div className="group flex flex-col gap-3 cursor-pointer">
            <div className="relative aspect-square w-full rounded-2xl bg-surface-dark overflow-hidden">
                <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={product.image}
                    alt={product.title}
                />
                
                {/* Badges */}
                {product.tag && (
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-white">
                        {product.tag}
                    </div>
                )}
                {product.discount && (
                    <div className="absolute top-3 left-3 bg-primary text-black px-2 py-1 rounded-lg text-xs font-bold">
                        {product.discount}
                    </div>
                )}

                {/* Favorite Button */}
                <button 
                    onClick={handleFavoriteClick}
                    className={`absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-sm transition-all hover:scale-110 ${
                        isFavorite 
                        ? 'bg-red-500 text-white' 
                        : 'bg-black/40 text-white hover:bg-white hover:text-black'
                    }`}
                >
                    <span className={`material-symbols-outlined text-[18px] ${isFavorite ? 'fill-current' : ''}`}>
                        favorite
                    </span>
                </button>
            </div>
            
            <div>
                <div className="flex justify-between items-start">
                    <h3 className="font-medium text-white group-hover:text-primary transition-colors line-clamp-1">
                        {product.title}
                    </h3>
                    <span className="font-bold text-white">${product.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-500 line-clamp-1">{product.category}</p>
                    {product.oldPrice && (
                        <span className="text-xs text-gray-600 line-through">${product.oldPrice.toFixed(2)}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;