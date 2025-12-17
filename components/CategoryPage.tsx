import React, { useState } from 'react';
import { Category, Product } from '../types';

interface CategoryPageProps {
    category: Category;
    products: Product[];
    onBack: () => void;
    favoriteIds: number[];
    onToggleFavorite: (id: number) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, products, onBack, favoriteIds, onToggleFavorite }) => {
    const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    
    // Config for categories that use the Sectioned Layout (Fathers: 2, Mothers: 3, Kids: 4, Girls: 5, Tech: 6)
    const getLayoutConfig = (id: number) => {
        switch(id) {
            case 2: // Padres
                return {
                    darkMode: true,
                    heroImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(16, 34, 22, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4YvcYpX4LUzDdnGuQCKXT9ThzgCBWUKi3IdwS2GRa-zHicSyY-on5V9I4e4PSAIFLQ8qBcg7wUuksyCMrMZt5Xc0TGP76o1ktS4XWka6NlqF6VWEJTTTOSG8O30JFwKAsHHCn6ZSzZOWBqkHKBTGzDG9A3nP9tOcNuQv7BOIV0yQmvfBmlKuAkRK5vwUgXN4PNo8F1IDFu2_uV5ZpPQxxJlp6Lt1fb34Ww7gHe3WKJgbiXHBAzQBRj5jm_bKmGyzk_HQWRRbgZiI")',
                    accentColor: 'text-primary',
                    buttonColor: 'bg-primary text-background-dark hover:bg-white',
                    bgColor: 'bg-background-light dark:bg-background-dark',
                    textColor: 'text-slate-900 dark:text-white',
                    sections: [
                        { title: "Gadgets para Papá", subcategory: "Gadgets", icon: "devices" },
                        { title: "Experiencias Inolvidables", subcategory: "Experiencias", icon: "local_activity" },
                        { title: "Ropa y Accesorios", subcategory: "Estilo", icon: "styler" }
                    ]
                };
            case 3: // Madres - Updated to Dark Mode style
                return {
                    darkMode: true,
                    heroImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(31, 10, 16, 0.95)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdsWLUGiicHou6i2n9VVGWZ4MksCA_ZYppDi1TN8-BKz8HvW5vCGlzjzBzzuzy0Wbt1TIT5liebR6bhBqT6-HLllg7Iz6jCyebx0o1IaIZ0OIyouFGXMjOFLZ6KcpS0Gpz1rG1BAKPCmqnqOuo4vfKkOOyS4PBRGjrpLNU-pzWwJpOrpRtpqMl6oj9AU7hhf3GVuyoif-b3X17u4b9KBhM6pR07ib51PEHOFCoIgLl4vx-9lLadiwIKQvbR6ZIWmNgJN5ZloGlW7s")',
                    accentColor: 'text-rose-400',
                    buttonColor: 'bg-rose-500 text-white hover:bg-rose-400',
                    bgColor: 'bg-[#1f0a10]', // Deep Dark Rose/Burgundy
                    textColor: 'text-white',
                    sections: [
                        { title: "Cuidado Personal y Belleza", subcategory: "Belleza", icon: "spa" },
                        { title: "Hogar y Decoración", subcategory: "Hogar", icon: "home" },
                        { title: "Moda y Accesorios", subcategory: "Moda", icon: "styler" },
                        { title: "Experiencias Relajantes", subcategory: "Experiencias", icon: "diamond" }
                    ]
                };
            case 4: // Niños - Updated to Dark Mode style
                return {
                    darkMode: true,
                    heroImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(15, 23, 42, 0.95)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7vwjQS3xo75FXODFG97dxwgq8GzUrOVRKj1K3CRKFG5Had7Ml5TQDCBCVoFy74_dTzmY5vIAU-rAK3mQ9H92JpEPB9jp2CI-UcBGgd9E9FTdoHkVSMpH0syUvHeFFm1xXE_EuK5hdQqvtBYsZ68lG_FQciJNJbI0lINjG_MFjcqN8Fd_Gu2RcmsPSn2d7P048qQpwo74ew9fUR9o0olivEu2pavfNMxVVHlyCa1yNru_yQV0K9ECaDnf2NECffSj9pWwZRS9U8SM")',
                    accentColor: 'text-blue-400',
                    buttonColor: 'bg-blue-500 text-white hover:bg-blue-400',
                    bgColor: 'bg-[#0f172a]', // Slate 900
                    textColor: 'text-white',
                    sections: [
                        { title: "Aventura y Acción", subcategory: "Acción", icon: "rocket_launch" },
                        { title: "Construcción y LEGO", subcategory: "Construcción", icon: "construction" },
                        { title: "Vehículos y RC", subcategory: "Vehículos", icon: "directions_car" }
                    ]
                };
            case 5: // Niñas - Updated to Dark Mode style
                return {
                    darkMode: true,
                    heroImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(38, 10, 30, 0.95)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDr010zdWNBFi_Gfr76vUna1x-tcNqpVYrN9t0-OMTSpIGpBOVb3BeJvC5WEtAecFMSOJCa-bj5H0J7YQSVAKCJQSJfGDG9nC-OcoiKPL2Vl8LHbFflzztxtQnJNiXao2nFeDa2Zxp7gPzE_YOuHCWvRDAs7Yi2QJDktJJ_imbmZHJiZr8ytCkxqRaRdduZDIz0W-rhwRYYfiqBojDCt-XsZAiswAMqEo3-BmZAs4boB8F6z9n-2OcLhidtpqp8WSnFmCYda_qUPdg")',
                    accentColor: 'text-pink-400',
                    buttonColor: 'bg-pink-500 text-white hover:bg-pink-400',
                    bgColor: 'bg-[#290d23]', // Deep Purple/Dark Pink
                    textColor: 'text-white',
                    sections: [
                        { title: "Creatividad y Arte", subcategory: "Creatividad", icon: "palette" },
                        { title: "Mundo de Fantasía", subcategory: "Fantasía", icon: "auto_awesome" },
                        { title: "Muñecas y Juegos", subcategory: "Muñecas", icon: "toys" }
                    ]
                };
            case 6: // Tecnología
                return {
                    darkMode: true,
                    heroImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #0f172a 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCygOsmWJjMJPfHGfuZP64fV3PnkcvaotFyxYX2iEuarAQpCqyRiLRNCbRMMgGlhIWXDK3xVqvDllaBYGySnIIHAh9Mo6IXiKH-UaEgGT8Wcq9EG48eyOEB1oolyVZXU50mdSifW_IEBQzwAbnHNrtJ9s8O6WPDRlYlb7hsf04FcuLatr5Ie-5-ra2tZeGruLMCSbHZV51RoNdzs_Dcqfeuu3Y6cpXZt0QIp9jjN03wHYja3jNYi9uZLBW3OsW75vWF7oeZWp_DNjk")',
                    accentColor: 'text-cyan-400',
                    buttonColor: 'bg-cyan-500 text-black hover:bg-cyan-400',
                    bgColor: 'bg-slate-900',
                    textColor: 'text-white',
                    sections: [
                        { title: "Smart Home", subcategory: "Smart Home", icon: "smart_toy" },
                        { title: "Gaming Setup", subcategory: "Gaming", icon: "sports_esports" },
                        { title: "Movilidad Eléctrica", subcategory: "Movilidad", icon: "electric_scooter" }
                    ]
                };
            default:
                return null;
        }
    };

    const config = getLayoutConfig(category.id);

    // Render helper for favorite button logic with props
    const FavoriteButton = ({ productId, colorClass = "" }: { productId: number, colorClass?: string }) => {
        const isFav = favoriteIds.includes(productId);
        return (
            <button 
                onClick={(e) => { e.stopPropagation(); onToggleFavorite(productId); }}
                className={`absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-sm transition-colors ${
                    isFav 
                    ? 'bg-red-500 text-white' 
                    : (colorClass || 'bg-black/40 text-white hover:bg-white hover:text-black')
                }`}
            >
                <span className={`material-symbols-outlined text-[18px] ${isFav ? 'fill-current' : ''}`}>favorite</span>
            </button>
        );
    };

    // If it's a category with a custom landing page layout
    if (config) {
        
        // Render Subcategory View if active
        if (activeSubcategory) {
            const subcategoryProducts = products.filter(p => p.subcategory === activeSubcategory);
            
            return (
                <div className={`flex flex-1 flex-col items-center w-full px-4 md:px-10 pb-20 min-h-screen ${config.bgColor} ${config.textColor}`}>
                    <div className="flex flex-col max-w-[1200px] w-full flex-1 gap-8 pt-6">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 px-4">
                            <button onClick={onBack} className="opacity-60 hover:opacity-100 transition-opacity text-sm font-medium leading-normal">Inicio</button>
                            <span className="opacity-40 text-sm font-medium leading-normal">/</span>
                            <span className="opacity-60 text-sm font-medium leading-normal">Regalos 2025</span>
                            <span className="opacity-40 text-sm font-medium leading-normal">/</span>
                            <button onClick={() => setActiveSubcategory(null)} className={`opacity-60 hover:opacity-100 transition-opacity text-sm font-medium leading-normal hover:${config.accentColor.split(' ')[0]}`}>{category.title}</button>
                            <span className="opacity-40 text-sm font-medium leading-normal">/</span>
                            <span className={`${config.accentColor} text-sm font-medium leading-normal`}>{activeSubcategory}</span>
                        </nav>
                        
                        <div className="px-4">
                            <div className="flex items-center gap-4 mb-4">
                                <button onClick={() => setActiveSubcategory(null)} className={`flex items-center justify-center size-10 rounded-full ${config.darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/5 hover:bg-black/10'} transition-colors`}>
                                    <span className="material-symbols-outlined">arrow_back</span>
                                </button>
                                <h1 className="text-3xl md:text-4xl font-black tracking-tight">{activeSubcategory}</h1>
                            </div>
                            <p className="opacity-60 text-lg max-w-2xl">Explora nuestra colección completa de {activeSubcategory.toLowerCase()}, seleccionada especialmente para esta temporada.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                            {subcategoryProducts.map(product => (
                                <div key={product.id} className={`group flex flex-col gap-4 rounded-2xl p-4 transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer border border-transparent 
                                    ${config.darkMode ? 'bg-[#1e293b] hover:bg-[#334155] hover:border-white/10' : 'bg-white hover:border-black/5 hover:bg-gray-50'}`}>
                                    <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl ${config.darkMode ? 'bg-black/20' : 'bg-gray-100'}`}>
                                        {product.tag && (
                                            <span className={`absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-bold rounded-full ${config.buttonColor}`}>
                                                {product.tag}
                                            </span>
                                        )}
                                        <FavoriteButton productId={product.id} colorClass={config.darkMode ? 'bg-black/40 text-white hover:bg-white hover:text-black' : 'bg-white/80 text-black hover:bg-black hover:text-white'} />
                                        <div 
                                            className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" 
                                            style={{backgroundImage: `url("${product.image}")`}}>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className={`${config.textColor} text-lg font-bold truncate transition-colors`}>{product.title}</h3>
                                        <p className="opacity-60 text-sm line-clamp-2">{product.category}</p>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex flex-col">
                                                {product.oldPrice && <span className="opacity-40 text-xs line-through">€{product.oldPrice.toFixed(2)}</span>}
                                                <span className={`${config.textColor} text-xl font-bold`}>€{product.price.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {subcategoryProducts.length === 0 && (
                                <div className="col-span-full py-20 text-center opacity-60">
                                    <span className="material-symbols-outlined text-4xl mb-2">sentiment_dissatisfied</span>
                                    <p>No hay productos disponibles en esta categoría por el momento.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        }

        // Render Main Landing Page
        return (
            <div className={`flex flex-1 flex-col items-center w-full px-4 md:px-10 pb-20 ${config.bgColor} ${config.textColor}`}>
                <div className="flex flex-col max-w-[1200px] w-full flex-1 gap-8 pt-6">
                    {/* Breadcrumbs */}
                    <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 px-4">
                        <button onClick={onBack} className="opacity-60 hover:opacity-100 transition-opacity text-sm font-medium leading-normal">Inicio</button>
                        <span className="opacity-40 text-sm font-medium leading-normal">/</span>
                        <span className="opacity-60 text-sm font-medium leading-normal">Regalos 2025</span>
                        <span className="opacity-40 text-sm font-medium leading-normal">/</span>
                        <span className={`${config.accentColor} text-sm font-medium leading-normal`}>{category.title}</span>
                    </nav>

                    {/* Hero Section */}
                    <div className="px-4">
                        <div className="relative w-full rounded-3xl overflow-hidden min-h-[400px] flex items-end p-8 md:p-12 bg-cover bg-center group shadow-2xl" 
                            style={{backgroundImage: config.heroImage}}>
                            <div className="relative z-10 flex flex-col gap-4 max-w-2xl animate-fade-in-up">
                                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md w-fit border border-white/20 shadow-sm`}>
                                    <span className="material-symbols-outlined text-sm">verified</span> Edición 2025
                                </span>
                                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-md">
                                    {category.title}
                                </h1>
                                <p className="text-gray-100 text-lg md:text-xl font-normal max-w-lg leading-relaxed drop-shadow-sm">
                                    {category.id === 2 && "Encuentra el detalle perfecto para celebrar su día. Una selección curada de tecnología, experiencias únicas y estilo atemporal."}
                                    {category.id === 3 && "Ideas únicas para el 2025 para celebrar a mamá con algo tan especial como ella."}
                                    {category.id === 4 && "Diversión sin límites para los pequeños aventureros. Juguetes que inspiran y divierten."}
                                    {category.id === 5 && "Un mundo de fantasía y creatividad. Encuentra el regalo mágico que está esperando."}
                                    {category.id === 6 && "El futuro hoy. Descubre la última tecnología que transformará tu vida."}
                                </p>
                                <div className="flex gap-4 mt-2">
                                    <button 
                                        onClick={() => {
                                            const firstSection = document.querySelector('section');
                                            firstSection?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className={`flex items-center justify-center gap-2 rounded-full h-12 px-8 ${config.buttonColor} text-base font-bold transition-transform active:scale-95 shadow-lg`}
                                    >
                                        Explorar Guía
                                        <span className="material-symbols-outlined">arrow_downward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Sections */}
                    {config.sections.map((section, idx) => {
                        const sectionProducts = products.filter(p => p.subcategory === section.subcategory);
                        if (sectionProducts.length === 0) return null;

                        return (
                            <section key={idx} className="flex flex-col gap-6 px-4 mt-8">
                                <div className={`flex items-end justify-between border-b pb-4 ${config.darkMode ? 'border-white/10' : 'border-black/10'}`}>
                                    <div className="flex flex-col gap-1">
                                        <div className={`flex items-center gap-2 ${config.accentColor} font-bold uppercase tracking-wider text-xs`}>
                                            <span className="material-symbols-outlined text-sm">{section.icon}</span> {section.subcategory}
                                        </div>
                                        <h2 className={`${config.textColor} text-3xl font-bold tracking-tight`}>{section.title}</h2>
                                    </div>
                                    <button 
                                        onClick={() => setActiveSubcategory(section.subcategory)}
                                        className={`hidden md:flex items-center gap-1 opacity-60 hover:opacity-100 hover:${config.accentColor} transition-all text-sm font-medium group`}
                                    >
                                        Ver todos
                                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {sectionProducts.slice(0, 3).map(product => (
                                        <div key={product.id} className={`group flex flex-col gap-4 rounded-2xl p-4 transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer border border-transparent 
                                            ${config.darkMode ? 'bg-[#1e293b] hover:bg-[#334155] hover:border-white/10' : 'bg-white hover:border-black/5 hover:bg-gray-50'}`}>
                                            <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl ${config.darkMode ? 'bg-black/20' : 'bg-gray-100'}`}>
                                                {product.tag && (
                                                    <span className={`absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-bold rounded-full ${config.buttonColor}`}>
                                                        {product.tag}
                                                    </span>
                                                )}
                                                <FavoriteButton productId={product.id} colorClass={config.darkMode ? 'bg-black/40 text-white hover:bg-white hover:text-black' : 'bg-white/80 text-black hover:bg-black hover:text-white'} />
                                                <div 
                                                    className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" 
                                                    style={{backgroundImage: `url("${product.image}")`}}>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h3 className={`${config.textColor} text-lg font-bold truncate transition-colors`}>{product.title}</h3>
                                                <p className="opacity-60 text-sm line-clamp-2">{product.category}</p>
                                                <div className="flex items-center justify-between mt-2">
                                                    <div className="flex flex-col">
                                                        {product.oldPrice && <span className="opacity-40 text-xs line-through">€{product.oldPrice.toFixed(2)}</span>}
                                                        <span className={`${config.textColor} text-xl font-bold`}>€{product.price.toFixed(2)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        );
                    })}

                    {/* Algorithmic Footer Section */}
                    <section className={`mt-12 px-4 pt-10 border-t ${config.darkMode ? 'border-white/10' : 'border-black/10'}`}>
                        <h2 className={`${config.textColor} text-2xl font-bold mb-6 flex items-center gap-2`}>
                            <span className={`material-symbols-outlined ${config.accentColor}`}>auto_awesome</span> 
                            Te puede interesar...
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {/* Generic Interest Items */}
                            {products.filter(p => !p.subcategory || p.subcategory === 'Interes').slice(0, 6).map(product => (
                                <div key={product.id} className={`flex flex-col gap-2 p-2 rounded-xl transition-colors cursor-pointer group ${config.darkMode ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}>
                                    <div 
                                        className={`aspect-square rounded-lg bg-cover bg-center relative ${config.darkMode ? 'bg-white/5' : 'bg-black/5'}`}
                                        style={{backgroundImage: `url("${product.image}")`}}>
                                    </div>
                                    <p className={`${config.textColor} text-sm font-medium leading-tight truncate`}>{product.title}</p>
                                    <p className="opacity-60 text-xs">€{product.price.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        );
    }

    // Default Layout (Generic Fallback)
    return (
        <div className="flex-1 px-6 lg:px-12 py-8 max-w-[1440px] mx-auto w-full">
            {/* Breadcrumbs */}
            <div className="mb-8 flex flex-wrap gap-2 text-sm font-medium">
                <button onClick={onBack} className="text-gray-500 hover:text-primary transition-colors">Inicio</button>
                <span className="text-gray-600">/</span>
                <span className="text-gray-500">2025</span>
                <span className="text-gray-600">/</span>
                <span className="text-gray-500">{category.title}</span>
            </div>

            {/* Page Heading */}
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
                        {category.title}
                    </h1>
                    <p className="text-lg text-gray-400">
                        Explora nuestra selección especial de {category.title.toLowerCase()}.
                    </p>
                </div>
                {/* Quick Sort for Mobile - Now Functional */}
                <div className="md:hidden w-full relative">
                    <button 
                        onClick={() => setShowMobileFilters(!showMobileFilters)}
                        className="w-full flex items-center justify-between bg-[#1A2C20] px-4 py-3 rounded-xl text-white font-medium active:scale-95 transition-transform"
                    >
                        <span>Filtros y Ordenar</span>
                        <span className="material-symbols-outlined">{showMobileFilters ? 'close' : 'tune'}</span>
                    </button>
                    {/* Mobile Filters Dropdown */}
                    {showMobileFilters && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1A2C20] border border-gray-700 rounded-xl p-4 z-20 shadow-2xl animate-fade-in-up">
                             <div className="flex flex-col gap-4">
                                <h3 className="font-bold text-white border-b border-gray-700 pb-2">Mostrar</h3>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" defaultChecked className="rounded border-gray-500 bg-transparent text-primary focus:ring-primary" />
                                    <span className="text-white">Todos los productos</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" className="rounded border-gray-500 bg-transparent text-primary focus:ring-primary" />
                                    <span className="text-gray-400">Solo Ofertas</span>
                                </label>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Layout: Sidebar + Grid */}
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Sidebar Filters (Desktop) */}
                <aside className="hidden lg:flex w-64 flex-col gap-8 shrink-0">
                    {/* Filter Group: Categories */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">Tipo de Producto</h3>
                        <div className="flex flex-col gap-3">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input defaultChecked className="peer h-5 w-5 appearance-none rounded-md border border-gray-500 bg-transparent checked:border-primary checked:bg-primary transition-all" type="checkbox"/>
                                    <span className="material-symbols-outlined absolute left-0 top-0 text-black opacity-0 peer-checked:opacity-100 text-[18px] pointer-events-none">check</span>
                                </div>
                                <span className="text-gray-500 dark:text-gray-300 group-hover:text-primary transition-colors">Todos</span>
                            </label>
                        </div>
                    </div>
                </aside>

                {/* Product Grid Area */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map(product => (
                            <div key={product.id} className="group relative flex flex-col rounded-2xl bg-white dark:bg-[#1A2C20] p-4 transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-primary/5 border border-transparent hover:border-primary/50">
                                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-[#111813] mb-4">
                                    {product.tag && (
                                        <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-background-dark">
                                            {product.tag}
                                        </span>
                                    )}
                                    {product.discount && (
                                        <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
                                            {product.discount}
                                        </span>
                                    )}
                                    <FavoriteButton productId={product.id} />
                                    <img 
                                        alt={product.title} 
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                        src={product.image}
                                    />
                                </div>
                                <div className="flex flex-col flex-1 gap-2">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{product.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{product.category}</p>
                                    <div className="mt-auto flex items-center justify-between pt-4">
                                        <div className="flex flex-col">
                                            {product.oldPrice && <span className="text-xs text-gray-500 line-through">€{product.oldPrice.toFixed(2)}</span>}
                                            <span className="text-xl font-bold text-slate-900 dark:text-white">€{product.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;