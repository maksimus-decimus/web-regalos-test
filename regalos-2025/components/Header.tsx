import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#28392e] bg-background-dark/80 backdrop-blur-md px-6 py-4">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3 text-white cursor-pointer hover:opacity-90 transition-opacity">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
            <span className="material-symbols-outlined text-3xl">redeem</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Regalos 2025</h2>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg">
          <label className="relative flex w-full items-center group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#9db9a6] group-focus-within:text-primary transition-colors">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="h-12 w-full rounded-full border-none bg-[#28392e] pl-12 pr-4 text-white placeholder-[#9db9a6] focus:ring-2 focus:ring-primary/50 transition-all outline-none"
              placeholder="Buscar el regalo perfecto..."
              type="text"
            />
          </label>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-6">
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#account">
              Mi Cuenta
            </a>
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#help">
              Ayuda
            </a>
          </div>
          <div className="flex gap-3">
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#28392e] text-white hover:bg-[#344a3b] transition-colors">
              <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-black">
                2
              </span>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#28392e] text-white hover:bg-[#344a3b] transition-colors">
              <span className="material-symbols-outlined text-[20px]">account_circle</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};