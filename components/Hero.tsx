import React from 'react';

interface HeroProps {
    darkMode?: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode = false }) => {
    return (
        <section className={`relative overflow-hidden rounded-3xl p-8 md:p-12 mb-8 ${
            darkMode 
                ? 'bg-gradient-to-br from-[#0b1f14] via-[#0f2818] to-[#0b1f14]'
                : 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-2 border-green-100'
        }`}>
            {/* Efectos de fondo */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            </div>
            
            {/* Contenido */}
            <div className="relative z-10 max-w-3xl">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-sm ${
                    darkMode 
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'bg-primary/30 text-green-800 border border-primary/50'
                }`}>
                    <span className="material-symbols-outlined text-lg">auto_awesome</span>
                    Colección 2026
                </div>
                
                <h1 className={`text-4xl md:text-6xl font-black tracking-tight mb-4 leading-tight ${
                    darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                    El Regalo Perfecto{' '}
                    <span className="text-primary bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
                        Está Aquí
                    </span>
                </h1>
                
                <p className={`text-lg md:text-xl mb-8 leading-relaxed max-w-2xl ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                    Descubre ideas únicas y originales para cada ocasión. Más de 1000 regalos cuidadosamente seleccionados para las personas que más quieres.
                </p>
                
                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => {
                            const categoriesSection = document.getElementById('categories-section');
                            categoriesSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`flex items-center gap-2 px-6 py-3 font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg ${
                            darkMode
                                ? 'bg-primary text-black hover:bg-white'
                                : 'bg-primary text-black hover:bg-green-600 shadow-primary/30'
                        }`}
                    >
                        Explorar Categorías
                        <span className="material-symbols-outlined">arrow_downward</span>
                    </button>
                    
                    <button
                        onClick={() => {
                            const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
                            searchInput?.focus();
                        }}
                        className={`flex items-center gap-2 px-6 py-3 font-bold rounded-full transition-all backdrop-blur-sm ${
                            darkMode
                                ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                                : 'bg-gray-900/10 text-gray-900 hover:bg-gray-900/20 border border-gray-300'
                        }`}
                    >
                        <span className="material-symbols-outlined">search</span>
                        Buscar Regalo
                    </button>
                </div>
                
                {/* Stats */}
                <div className={`flex flex-wrap gap-8 mt-8 pt-8 border-t ${
                    darkMode ? 'border-white/10' : 'border-gray-300'
                }`}>
                    <div>
                        <div className="text-3xl font-bold text-primary">1000+</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Regalos únicos</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary">20+</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Categorías</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary">4.8★</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Valoración media</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;