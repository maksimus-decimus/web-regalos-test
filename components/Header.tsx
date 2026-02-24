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
    darkMode: boolean;
    onToggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
    searchTerm, 
    onSearchChange, 
    onGoHome, 
    onShowOffers, 
    onShowCategories,
    onShowWishlist,
    wishlistCount,
    onOpenAuth,
    darkMode,
    onToggleDarkMode
}) => {
    return (
        <header className={`sticky top-0 z-50 w-full border-b backdrop-blur-md px-6 py-4 ${
            darkMode 
                ? 'border-[#28392e] bg-background-dark/80' 
                : 'border-gray-200 bg-white/80'
        }`}>
            <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6">
                {/* Logo */}
                <button onClick={onGoHome} className={`flex items-center gap-3 cursor-pointer select-none hover:opacity-80 transition-opacity ${
                    darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <span className="material-symbols-outlined text-3xl">redeem</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight">Regaloteca</h2>
                </button>

                {/* Search Bar */}
                <div className="hidden md:flex flex-1 max-w-lg"> 
                    <label className="relative flex w-full items-center group">
                        <div className={`absolute inset-y-0 left-0 flex items-center pl-4 transition-colors ${
                            darkMode ? 'text-[#9db9a6] group-focus-within:text-primary' : 'text-gray-400 group-focus-within:text-primary'
                        }`}>
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <input
                            type="search"
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className={`h-12 w-full rounded-full border-2 pl-12 pr-4 transition-all focus:outline-none ${
                                darkMode 
                                    ? 'bg-[#28392e] text-white placeholder-[#9db9a6] border-transparent focus:border-primary/50 focus:bg-[#1f2e25]' 
                                    : 'bg-gray-50 text-gray-900 placeholder-gray-400 border-gray-200 focus:border-primary/50 focus:bg-white'
                            }`}
                            placeholder="¿Qué regalo estás buscando?"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => onSearchChange('')}
                                className={`absolute right-3 p-1 rounded-full transition-colors ${
                                    darkMode ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
                                }`}
                            >
                                <span className="material-symbols-outlined text-[20px]">close</span>
                            </button>
                        )}
                    </label>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center gap-6">
                        <button onClick={onGoHome} className={`text-sm font-medium transition-colors ${
                            darkMode ? 'text-gray-300 hover:text-primary' : 'text-gray-700 hover:text-primary'
                        }`}>Inicio</button>
                        <button onClick={onShowCategories} className={`text-sm font-medium transition-colors ${
                            darkMode ? 'text-gray-300 hover:text-primary' : 'text-gray-700 hover:text-primary'
                        }`}>Categorías</button>
                        <button onClick={onShowOffers} className={`text-sm font-medium transition-colors ${
                            darkMode ? 'text-gray-300 hover:text-primary' : 'text-gray-700 hover:text-primary'
                        }`}>Ofertas</button>
                    </div>
                    <div className="flex gap-3">
                        {/* Dark Mode Toggle */}
                        <button 
                            onClick={onToggleDarkMode}
                            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                                darkMode 
                                    ? 'bg-[#28392e] text-primary hover:bg-[#344a3b]' 
                                    : 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
                            }`}
                            title={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                            aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                {darkMode ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                        <button 
                            onClick={onShowWishlist}
                            className={`flex relative h-10 w-10 items-center justify-center rounded-full transition-colors tooltip-trigger ${
                                darkMode 
                                    ? 'bg-[#28392e] text-white hover:bg-[#344a3b]' 
                                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                            }`}
                            title="Lista de Deseados"
                        >
                            <span className="material-symbols-outlined text-[20px] text-red-400">favorite</span>
                            {wishlistCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                                    {wishlistCount}
                                </span>
                            )}
                        </button>
                        <UserMenu onOpenAuth={onOpenAuth} darkMode={darkMode} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;