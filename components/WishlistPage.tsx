import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface WishlistPageProps {
    products: Product[];
    favoriteIds: number[];
    onToggleFavorite: (id: number) => void;
    onBack: () => void;
    onOpenProduct?: (product: Product) => void;
    darkMode?: boolean;
}

const WishlistPage: React.FC<WishlistPageProps> = ({ products, favoriteIds, onToggleFavorite, onBack, onOpenProduct, darkMode = false }) => {
    // Filter products that are in the favorites list
    const wishlistProducts = products.filter(p => favoriteIds.includes(p.id));

    return (
        <div className="flex-1 px-6 lg:px-12 py-8 max-w-[1440px] mx-auto w-full min-h-screen">
            {/* Breadcrumbs */}
            <div className="mb-8 flex flex-wrap gap-2 text-sm font-medium">
                <button onClick={onBack} className="text-gray-500 hover:text-primary transition-colors">Inicio</button>
                <span className="text-gray-600">/</span>
                <span className="text-primary">Mi Lista de Deseados</span>
            </div>

            {/* Header */}
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                    <h1 className={`text-4xl md:text-5xl font-black tracking-tight mb-4 flex items-center gap-3 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                        <span className="material-symbols-outlined text-4xl md:text-5xl text-red-500 fill-current">favorite</span>
                        Tus Favoritos
                    </h1>
                    <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Aquí guardamos todo lo que te encanta para que no lo pierdas de vista.
                    </p>
                </div>
                <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {wishlistProducts.length} {wishlistProducts.length === 1 ? 'producto guardado' : 'productos guardados'}
                </div>
            </div>

            {/* Content */}
            {wishlistProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {wishlistProducts.map(product => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            isFavorite={true}
                            onToggleFavorite={() => onToggleFavorite(product.id)}
                            onOpen={onOpenProduct ? () => onOpenProduct(product) : undefined}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in-up">
                    <div className={`h-24 w-24 rounded-full flex items-center justify-center mb-6 ${
                        darkMode ? 'bg-surface-dark' : 'bg-gray-100'
                    }`}>
                        <span className="material-symbols-outlined text-5xl text-gray-600">favorite_border</span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Tu lista está vacía</h3>
                    <p className={`max-w-md mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Aún no has guardado nada. Explora nuestras categorías y dale al corazón en los productos que te gusten.
                    </p>
                    <button 
                        onClick={onBack}
                        className="px-8 py-3 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors shadow-lg shadow-primary/20"
                    >
                        Explorar Regalos
                    </button>
                </div>
            )}
        </div>
    );
};

export default WishlistPage;