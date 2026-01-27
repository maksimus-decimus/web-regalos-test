import React, { useState } from 'react';
import { Category, Product } from '../types';
import { getHeroBackgroundImage, getProductImage } from '../utils/images';

interface CategoryPageProps {
    category: Category;
    products: Product[];
    onBack: () => void;
    favoriteIds: number[];
    onToggleFavorite: (id: number) => void;
    onOpenProduct?: (product: Product) => void;
    darkMode?: boolean;
}

const CategoryPage: React.FC<CategoryPageProps> = ({
    category,
    products,
    onBack,
    favoriteIds,
    onToggleFavorite,
    onOpenProduct,
    darkMode = false
}) => {
    const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    // Config for categories that use the Sectioned Layout
    const getLayoutConfig = (id: number) => {
        // Usar el darkMode prop en lugar de hardcodear true
        const isDark = darkMode;

        switch (id) {
            case 2: // Padres
                return {
                    darkMode: isDark,
                    heroImage: getHeroBackgroundImage(id),
                    accentColor: 'text-primary',
                    buttonColor: 'bg-primary text-background-dark hover:bg-white',
                    bgColor: isDark ? 'bg-background-dark' : 'bg-white',
                    textColor: isDark ? 'text-white' : 'text-slate-900',
                    sections: [
                        { title: "Gadgets para Papá", subcategory: "Gadgets", icon: "devices" },
                        { title: "Experiencias Inolvidables", subcategory: "Experiencias", icon: "local_activity" },
                        { title: "Ropa y Accesorios", subcategory: "Estilo", icon: "styler" }
                    ]
                };
            case 3: // Madres
                return {
                    darkMode: isDark,
                    heroImage: getHeroBackgroundImage(id),
                    accentColor: isDark ? 'text-rose-400' : 'text-rose-600',
                    buttonColor: 'bg-rose-500 text-white hover:bg-rose-400',
                    bgColor: isDark ? 'bg-[#1f0a10]' : 'bg-white',
                    textColor: isDark ? 'text-white' : 'text-slate-900',
                    sections: [
                        { title: "Cuidado Personal y Belleza", subcategory: "Belleza", icon: "spa" },
                        { title: "Hogar y Decoración", subcategory: "Hogar", icon: "home" },
                        { title: "Moda y Accesorios", subcategory: "Moda", icon: "styler" },
                        { title: "Experiencias Relajantes", subcategory: "Experiencias", icon: "diamond" }
                    ]
                };
            case 4: // Niños
                return {
                    darkMode: isDark,
                    heroImage: getHeroBackgroundImage(id),
                    accentColor: isDark ? 'text-blue-400' : 'text-blue-600',
                    buttonColor: 'bg-blue-500 text-white hover:bg-blue-400',
                    bgColor: isDark ? 'bg-[#0f172a]' : 'bg-white',
                    textColor: isDark ? 'text-white' : 'text-slate-900',
                    sections: [
                        { title: "Aventura y Acción", subcategory: "Acción", icon: "rocket_launch" },
                        { title: "Construcción y LEGO", subcategory: "Construcción", icon: "construction" },
                        { title: "Vehículos y RC", subcategory: "Vehículos", icon: "directions_car" }
                    ]
                };
            case 5: // Niñas
                return {
                    darkMode: isDark,
                    heroImage: getHeroBackgroundImage(id),
                    accentColor: isDark ? 'text-pink-400' : 'text-pink-600',
                    buttonColor: 'bg-pink-500 text-white hover:bg-pink-400',
                    bgColor: isDark ? 'bg-[#290d23]' : 'bg-white',
                    textColor: isDark ? 'text-white' : 'text-slate-900',
                    sections: [
                        { title: "Creatividad y Arte", subcategory: "Creatividad", icon: "palette" },
                        { title: "Mundo de Fantasía", subcategory: "Fantasía", icon: "auto_awesome" },
                        { title: "Muñecas y Juegos", subcategory: "Muñecas", icon: "toys" }
                    ]
                };
            case 6: // Tecnología
                return {
                    darkMode: isDark,
                    heroImage: getHeroBackgroundImage(id),
                    accentColor: isDark ? 'text-cyan-400' : 'text-cyan-600',
                    buttonColor: 'bg-cyan-500 text-black hover:bg-cyan-400',
                    bgColor: isDark ? 'bg-slate-900' : 'bg-white',
                    textColor: isDark ? 'text-white' : 'text-slate-900',
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

    // Render helper for favorite button
    const FavoriteButton = ({ productId, colorClass = "" }: { productId: number, colorClass?: string }) => {
        const isFav = favoriteIds.includes(productId);
        return (
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(productId);
                }}
                className={`absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-sm transition-colors ${isFav
                        ? 'bg-red-500 text-white'
                        : (colorClass || 'bg-black/40 text-white hover:bg-white hover:text-black')
                    }`}
                aria-label={isFav ? "Quitar de favoritos" : "Añadir a favoritos"}
            >
                <span className={`material-symbols-outlined text-[18px] ${isFav ? 'fill-current' : ''}`}>
                    favorite
                </span>
            </button>
        );
    };

    // Render Product Card (reusable component)
    const ProductCard = ({
        product,
        isDarkMode = false,
        buttonColor = '',
        textColor = '',
        accentColor = ''
    }: {
        product: Product;
        isDarkMode?: boolean;
        buttonColor?: string;
        textColor?: string;
        accentColor?: string;
    }) => {
        return (
            <div
                onClick={() => onOpenProduct?.(product)}
                className={`group flex flex-col gap-4 rounded-2xl p-4 transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer border border-transparent 
                    ${isDarkMode ? 'bg-[#1e293b] hover:bg-[#334155] hover:border-white/10' : 'bg-white hover:border-black/5 hover:bg-gray-50'}`}
                role="article"
            >
                <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl ${isDarkMode ? 'bg-black/20' : 'bg-gray-100'}`}>
                    {product.tag && (
                        <span className={`absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-bold rounded-full ${buttonColor}`}>
                            {product.tag}
                        </span>
                    )}
                    <FavoriteButton
                        productId={product.id}
                        colorClass={isDarkMode ? 'bg-black/40 text-white hover:bg-white hover:text-black' : 'bg-white/80 text-black hover:bg-black hover:text-white'}
                    />
                    <div
                        className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url("${getProductImage(product)}")` }}
                        role="img"
                        aria-label={`Imagen de ${product.title}`}
                    >
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className={`${textColor} text-lg font-bold truncate transition-colors`}>
                        {product.title}
                    </h3>
                    <p className="opacity-60 text-sm line-clamp-2">{product.category}</p>
                    {product.description && (
                        <p className="opacity-60 text-sm line-clamp-2">{product.description}</p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex flex-col">
                            {product.oldPrice && (
                                <span className="opacity-40 text-xs line-through">
                                    €{product.oldPrice.toFixed(2)}
                                </span>
                            )}
                            <span className={`${textColor} text-xl font-bold`}>
                                €{product.price.toFixed(2)}
                            </span>
                        </div>
                    </div>
                    {product.url && (
                        <a
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mt-1 inline-flex items-center gap-1 text-sm font-bold ${accentColor} hover:underline`}
                            aria-label={`Ver ${product.title} en Amazon`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            Ver en Amazon
                            <span className="material-symbols-outlined text-base">open_in_new</span>
                        </a>
                    )}
                </div>
            </div>
        );
    };

    // If it's a category with a custom landing page layout
    if (config) {
        // Render Subcategory View if active
        if (activeSubcategory) {
            const subcategoryProducts = products.filter(p => p.subcategory === activeSubcategory);

            return (
                <div className={`flex flex-1 flex-col items-center w-full px-4 md:px-10 pb-20 min-h-screen transition-colors duration-300 ${config.bgColor} ${config.textColor}`}>
                    <div className="flex flex-col max-w-[1200px] w-full flex-1 gap-8 pt-6">
                        <nav aria-label="Navegación" className="flex flex-wrap gap-2 px-4">
                            <button onClick={onBack} className="opacity-60 hover:opacity-100 transition-opacity text-sm font-medium leading-normal">
                                Inicio
                            </button>
                            <span className="opacity-40 text-sm font-medium leading-normal">/</span>
                            <span className="opacity-60 text-sm font-medium leading-normal">Regalos 2025</span>
                            <span className="opacity-40 text-sm font-medium leading-normal">/</span>
                            <button
                                onClick={() => setActiveSubcategory(null)}
                                className="opacity-60 hover:opacity-100 transition-opacity text-sm font-medium leading-normal"
                            >
                                {category.title}
                            </button>
                            <span className="opacity-40 text-sm font-medium leading-normal">/</span>
                            <span className={`${config.accentColor} text-sm font-medium leading-normal`}>
                                {activeSubcategory}
                            </span>
                        </nav>

                        <div className="px-4">
                            <div className="flex items-center gap-4 mb-4">
                                <button
                                    onClick={() => setActiveSubcategory(null)}
                                    className={`flex items-center justify-center size-10 rounded-full ${config.darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/5 hover:bg-black/10'} transition-colors`}
                                    aria-label="Volver a categorías"
                                >
                                    <span className="material-symbols-outlined">arrow_back</span>
                                </button>
                                <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                                    {activeSubcategory}
                                </h1>
                            </div>
                            <p className="opacity-60 text-lg max-w-2xl">
                                Explora nuestra colección completa de {activeSubcategory.toLowerCase()}, seleccionada especialmente para esta temporada.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                            {subcategoryProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    isDarkMode={config.darkMode}
                                    buttonColor={config.buttonColor}
                                    textColor={config.textColor}
                                    accentColor={config.accentColor}
                                />
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
            <div className={`flex flex-1 flex-col items-center w-full px-4 md:px-10 pb-20 transition-colors duration-300 ${config.bgColor} ${config.textColor}`}>
                <div className="flex flex-col max-w-[1200px] w-full flex-1 gap-8 pt-6">
                    {/* Breadcrumbs */}
                    <nav aria-label="Navegación" className="flex flex-wrap gap-2 px-4">
                        <button onClick={onBack} className="opacity-60 hover:opacity-100 transition-opacity text-sm font-medium leading-normal">
                            Inicio
                        </button>
                        <span className="opacity-40 text-sm font-medium leading-normal">/</span>
                        <span className="opacity-60 text-sm font-medium leading-normal">Regalos 2025</span>
                        <span className="opacity-40 text-sm font-medium leading-normal">/</span>
                        <span className={`${config.accentColor} text-sm font-medium leading-normal`}>
                            {category.title}
                        </span>
                    </nav>

                    {/* Hero Section */}
                    <div className="px-4">
                        <div
                            className="relative w-full rounded-3xl overflow-hidden min-h-[400px] flex items-end p-8 md:p-12 bg-cover bg-center group shadow-2xl"
                            style={{ backgroundImage: `url(${config.heroImage})` }}
                            role="banner"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0"></div>
                            <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md w-fit border border-white/20 shadow-sm">
                                    <span className="material-symbols-outlined text-sm">verified</span>
                                    Edición 2025
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
                                        aria-label="Explorar productos"
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
                            <section key={idx} className="flex flex-col gap-6 px-4 mt-8" id={`section-${idx}`}>
                                <div className={`flex items-end justify-between border-b pb-4 ${config.darkMode ? 'border-white/10' : 'border-black/10'}`}>
                                    <div className="flex flex-col gap-1">
                                        <div className={`flex items-center gap-2 ${config.accentColor} font-bold uppercase tracking-wider text-xs`}>
                                            <span className="material-symbols-outlined text-sm">{section.icon}</span>
                                            {section.subcategory}
                                        </div>
                                        <h2 className={`${config.textColor} text-3xl font-bold tracking-tight`}>
                                            {section.title}
                                        </h2>
                                    </div>
                                    {sectionProducts.length > 3 && (
                                        <button
                                            onClick={() => setActiveSubcategory(section.subcategory)}
                                            className="hidden md:flex items-center gap-1 opacity-60 hover:opacity-100 transition-all text-sm font-medium group"
                                            aria-label={`Ver todos los productos de ${section.subcategory}`}
                                        >
                                            Ver todos
                                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                                                arrow_forward
                                            </span>
                                        </button>
                                    )}
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {sectionProducts.map(product => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            isDarkMode={config.darkMode}
                                            buttonColor={config.buttonColor}
                                            textColor={config.textColor}
                                            accentColor={config.accentColor}
                                        />
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
                            {products
                                .filter(p => !p.subcategory || p.subcategory === 'Interes')
                                .slice(0, 6)
                                .map(product => (
                                    <div
                                        key={product.id}
                                        onClick={() => onOpenProduct?.(product)}
                                        className={`flex flex-col gap-2 p-2 rounded-xl transition-colors cursor-pointer group ${config.darkMode ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}
                                        role="article"
                                    >
                                        <div
                                            className={`aspect-square rounded-lg bg-cover bg-center relative ${config.darkMode ? 'bg-white/5' : 'bg-black/5'}`}
                                            style={{ backgroundImage: `url("${getProductImage(product)}")` }}
                                            role="img"
                                            aria-label={`Imagen de ${product.title}`}
                                        >
                                        </div>
                                        <p className={`${config.textColor} text-sm font-medium leading-tight truncate`}>
                                            {product.title}
                                        </p>
                                        <p className="opacity-60 text-xs">€{product.price.toFixed(2)}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </div>
            </div>
        );
    }

    // Default Layout (Generic Fallback)
    return (
        <div className={`flex-1 px-6 lg:px-12 py-8 max-w-[1440px] mx-auto w-full transition-colors duration-300 ${darkMode ? 'bg-background-dark' : 'bg-white'}`}>
            {/* Breadcrumbs */}
            <div className="mb-8 flex flex-wrap gap-2 text-sm font-medium">
                <button onClick={onBack} className="text-gray-500 hover:text-primary transition-colors">
                    Inicio
                </button>
                <span className="text-gray-600">/</span>
                <span className="text-gray-500">2025</span>
                <span className="text-gray-600">/</span>
                <span className="text-gray-500">{category.title}</span>
            </div>

            {/* Page Heading */}
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                    <h1 className={`text-4xl md:text-5xl font-black tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {category.title}
                    </h1>
                    <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Explora nuestra selección especial de {category.title.toLowerCase()}.
                    </p>
                </div>
                {/* Mobile Filters */}
                <div className="md:hidden w-full relative">
                    <button
                        onClick={() => setShowMobileFilters(!showMobileFilters)}
                        className="w-full flex items-center justify-between bg-[#1A2C20] px-4 py-3 rounded-xl text-white font-medium active:scale-95 transition-transform"
                        aria-expanded={showMobileFilters}
                        aria-label="Mostrar filtros"
                    >
                        <span>Filtros y Ordenar</span>
                        <span className="material-symbols-outlined">
                            {showMobileFilters ? 'close' : 'tune'}
                        </span>
                    </button>
                    {/* Mobile Filters Dropdown */}
                    {showMobileFilters && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1A2C20] border border-gray-700 rounded-xl p-4 z-20 shadow-2xl animate-fade-in-up">
                            <div className="flex flex-col gap-4">
                                <h3 className="font-bold text-white border-b border-gray-700 pb-2">Mostrar</h3>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="rounded border-gray-500 bg-transparent text-primary focus:ring-primary"
                                    />
                                    <span className="text-white">Todos los productos</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-500 bg-transparent text-primary focus:ring-primary"
                                    />
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
                    <div className="flex flex-col gap-4">
                        <h3 className={`font-bold text-lg border-b pb-2 ${darkMode ? 'text-white border-gray-800' : 'text-slate-900 border-gray-200'}`}>
                            Tipo de Producto
                        </h3>
                        <div className="flex flex-col gap-3">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input
                                        defaultChecked
                                        className="peer h-5 w-5 appearance-none rounded-md border border-gray-500 bg-transparent checked:border-primary checked:bg-primary transition-all"
                                        type="checkbox"
                                    />
                                    <span className="material-symbols-outlined absolute left-0 top-0 text-black opacity-0 peer-checked:opacity-100 text-[18px] pointer-events-none">
                                        check
                                    </span>
                                </div>
                                <span className={`group-hover:text-primary transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                                    Todos
                                </span>
                            </label>
                        </div>
                    </div>
                </aside>

                {/* Product Grid Area */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map(product => (
                            <div
                                key={product.id}
                                onClick={() => onOpenProduct?.(product)}
                                className={`group relative flex flex-col rounded-2xl p-4 transition-all hover:-translate-y-1 hover:shadow-xl border border-transparent hover:border-primary/50 ${darkMode ? 'bg-[#1A2C20] hover:shadow-primary/5' : 'bg-white'
                                    }`}
                                role="article"
                            >
                                <div className={`relative aspect-square w-full overflow-hidden rounded-xl mb-4 ${darkMode ? 'bg-[#111813]' : 'bg-gray-100'}`}>
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
                                        src={getProductImage(product)}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex flex-col flex-1 gap-2">
                                    <h3 className={`text-lg font-bold group-hover:text-primary transition-colors ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                        {product.title}
                                    </h3>
                                    <p className={`text-sm line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {product.category}
                                    </p>
                                    {product.description && (
                                        <p className="text-sm text-gray-400 line-clamp-2">
                                            {product.description}
                                        </p>
                                    )}
                                    <div className="mt-auto flex items-center justify-between pt-4">
                                        <div className="flex flex-col">
                                            {product.oldPrice && (
                                                <span className="text-xs text-gray-500 line-through">
                                                    €{product.oldPrice.toFixed(2)}
                                                </span>
                                            )}
                                            <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                                €{product.price.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                    {product.url && (
                                        <a
                                            href={product.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
                                            aria-label={`Ver ${product.title} en Amazon`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Ver en Amazon
                                            <span className="material-symbols-outlined text-base">open_in_new</span>
                                        </a>
                                    )}
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