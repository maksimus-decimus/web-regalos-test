import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="group flex flex-col gap-3">
            <div className="relative aspect-square w-full rounded-2xl bg-surface-dark overflow-hidden">
                <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={product.image}
                    alt={product.title}
                />
                <button
                    onClick={() => onAddToCart(product)}
                    className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-primary text-black flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 shadow-lg cursor-pointer"
                    aria-label={`Add ${product.title} to cart`}
                >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                </button>
                
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
            </div>
            
            <div>
                <div className="flex justify-between items-start">
                    <h3 className="font-medium text-white group-hover:text-primary transition-colors line-clamp-1">
                        {product.title}
                    </h3>
                    <span className="font-bold text-white">${product.price}</span>
                </div>
                <p className="text-sm text-gray-500 line-clamp-1">{product.category}</p>
            </div>
        </div>
    );
};

export default ProductCard;