import React from 'react';
import UserMenu from './UserMenu';

interface HeaderProps {
    searchTerm: string;
    onSearchChange: (val: string) => void;
    onGoHome: () => void;
    onShowOffers: () => void;
    onShowCategories: () => void;
    onShowWishlist: () => void;
    wishlistCount: number;
    onOpenAuth: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
    searchTerm, 
    onSearchChange, 
    onGoHome, 
    onShowOffers, 
    onShowCategories,
    onShowWishlist,
    wishlistCount,
    onOpenAuth
}) => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#28392e] bg-background-dark/80 backdrop-blur-md px-6 py-4">
            <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6">
                {/* Logo */}
                <button onClick={onGoHome} className="flex items-center gap-3 text-white cursor-pointer select-none hover:opacity-80 transition-opacity">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <span className="material-symbols-outlined text-3xl">redeem</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight">Regaloteca</h2>
                </button>

                {/* Search Bar */}
                <div className="hidden md:flex flex-1 max-w-lg"> 
                    <label className="relative flex w-full items-center">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#9db9a6]">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="h-12 w-full rounded-full border-none bg-[#28392e] pl-12 pr-4 text-white placeholder-[#9db9a6] focus:ring-2 focus:ring-primary/50 transition-all focus:outline-none"
                            placeholder="Buscar el regalo perfecto..."
                        />
                    </label>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center gap-6">
                        <button onClick={onGoHome} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Inicio</button>
                        <button onClick={onShowCategories} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Categorías</button>
                        <button onClick={onShowOffers} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Ofertas</button>
                    </div>
                    <div className="flex gap-3">
                        <button 
                            onClick={onShowWishlist}
                            className="flex relative h-10 w-10 items-center justify-center rounded-full bg-[#28392e] text-white hover:bg-[#344a3b] transition-colors tooltip-trigger"
                            title="Lista de Deseados"
                        >
                            <span className="material-symbols-outlined text-[20px] text-red-400">favorite</span>
                            {wishlistCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                                    {wishlistCount}
                                </span>
                            )}
                        </button>
                        <UserMenu onOpenAuth={onOpenAuth} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;