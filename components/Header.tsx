import React from 'react';

interface HeaderProps {
    searchTerm: string;
    onSearchChange: (val: string) => void;
    onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange, onGoHome }) => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#28392e] bg-background-dark/80 backdrop-blur-md px-6 py-4">
            <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6">
                {/* Logo */}
                <button onClick={onGoHome} className="flex items-center gap-3 text-white cursor-pointer select-none hover:opacity-80 transition-opacity">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <span className="material-symbols-outlined text-3xl">redeem</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight">Regalos 2025</h2>
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
                        <a href="#" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Categorías</a>
                        <a href="#" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Ofertas</a>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#28392e] text-white hover:bg-[#344a3b] transition-colors">
                            <span className="material-symbols-outlined text-[20px]">account_circle</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;