import React from 'react';
import { Product } from '../types';
import { getProductImage } from '../utils/images';

interface ProductQuickViewProps {
    product: Product;
    onClose: () => void;
}

const ProductQuickView: React.FC<ProductQuickViewProps> = ({ product, onClose }) => {
    const image = getProductImage(product);
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={onClose} />
            <div className="relative z-10 w-[95%] max-w-[720px] rounded-2xl overflow-hidden bg-[#0b0f0d] text-white shadow-2xl">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 aspect-square bg-center bg-cover" style={{ backgroundImage: `url('${image}')` }} />
                    <div className="md:w-1/2 p-6 flex flex-col gap-3">
                        <div className="flex items-start justify-between gap-3">
                            <h3 className="text-xl md:text-2xl font-bold leading-tight line-clamp-2">{product.title}</h3>
                            <button onClick={onClose} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Cerrar">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <p className="text-sm text-gray-400">{product.category}</p>
                        {product.description && (
                            <p className="text-sm text-gray-300 leading-relaxed line-clamp-4">{product.description}</p>
                        )}
                        <div className="mt-2 flex items-center gap-3">
                            {product.oldPrice && (
                                <span className="text-sm text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
                            )}
                            <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                        </div>
                        <div className="mt-4 flex gap-3">
                            {product.url && (
                                <a
                                    href={product.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-primary text-black font-bold hover:bg-white transition-colors"
                                    aria-label={`Abrir en Amazon: ${product.title}`}
                                >
                                    Ver en Amazon
                                    <span className="material-symbols-outlined">open_in_new</span>
                                </a>
                            )}
                            <button onClick={onClose} className="h-11 px-5 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-colors">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductQuickView;
