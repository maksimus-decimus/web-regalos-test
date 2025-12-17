import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="group flex flex-col gap-3">
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