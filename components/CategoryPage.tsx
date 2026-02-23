import React, { useState, useMemo } from 'react';
import { Category, Product } from '../types';
import { getHeroBackgroundImage, getProductImage } from '../utils/images';
import { SEO_CATEGORIES_PADRES } from '../src/config/seo-categories';

interface CategoryPageProps {
    category: Category;
    products: Product[];
    onBack: () => void;
    favoriteIds: number[];
    onToggleFavorite: (id: number) => void;
    onOpenProduct?: (product: Product) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ 
    category, 
    products, 
    onBack, 
    favoriteIds, 
    onToggleFavorite,
    onOpenProduct 
}) => {
    const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
<<<<<<< Updated upstream
    
=======
    const [selectedSeoCategory, setSelectedSeoCategory] = useState<string | null>(null);

    // Agrupar productos por seoCategory para Padres
    const productsBySeoCategory = useMemo(() => {
        if (category.id !== 2) return {}; // Solo para Padres por ahora
        
        const grouped: Record<string, Product[]> = {};
        products.forEach(product => {
            if (product.seoCategory) {
                if (!grouped[product.seoCategory]) {
                    grouped[product.seoCategory] = [];
                }
                grouped[product.seoCategory].push(product);
            }
        });
        return grouped;
    }, [products, category.id]);

    // Filtrar categorías SEO que tengan productos
    const categoriesWithProducts = useMemo(() => {
        if (category.id !== 2) return [];
        return SEO_CATEGORIES_PADRES.filter(cat => 
            productsBySeoCategory[cat.slug]?.length > 0
        );
    }, [productsBySeoCategory, category.id]);

>>>>>>> Stashed changes
    // Config for categories that use the Sectioned Layout
    const getLayoutConfig = (id: number) => {
        switch(id) {
            case 2: // Padres
                return {
                    darkMode: true,
                    heroImage: getHeroBackgroundImage(id),
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
            case 3: // Madres
                return {
                    darkMode: true,
                    heroImage: getHeroBackgroundImage(id),
                    accentColor: 'text-rose-400',
                    buttonColor: 'bg-rose-500 text-white hover:bg-rose-400',
                    bgColor: 'bg-[#1f0a10]',
                    textColor: 'text-white',
                    sections: [
                        { title: "Cuidado Personal y Belleza", subcategory: "Belleza", icon: "spa" },
                        { title: "Hogar y Decoración", subcategory: "Hogar", icon: "home" },
                        { title: "Moda y Accesorios", subcategory: "Moda", icon: "styler" },
                        { title: "Experiencias Relajantes", subcategory: "Experiencias", icon: "diamond" }
                    ]
                };
            case 4: // Niños
                return {
                    darkMode: true,
                    heroImage: getHeroBackgroundImage(id),
                    accentColor: 'text-blue-400',
                    buttonColor: 'bg-blue-500 text-white hover:bg-blue-400',
                    bgColor: 'bg-[#0f172a]',
                    textColor: 'text-white',
                    sections: [
                        { title: "Aventura y Acción", subcategory: "Acción", icon: "rocket_launch" },
                        { title: "Construcción y LEGO", subcategory: "Construcción", icon: "construction" },
                        { title: "Vehículos y RC", subcategory: "Vehículos", icon: "directions_car" }
                    ]
                };
            case 5: // Niñas
                return {
                    darkMode: true,
                    heroImage: getHeroBackgroundImage(id),
                    accentColor: 'text-pink-400',
                    buttonColor: 'bg-pink-500 text-white hover:bg-pink-400',
                    bgColor: 'bg-[#290d23]',
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
                    heroImage: getHeroBackgroundImage(id),
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

    // Render helper for favorite button
    const FavoriteButton = ({ productId, colorClass = "" }: { productId: number, colorClass?: string }) => {
        const isFav = favoriteIds.includes(productId);
        return (
            <button 
                onClick={(e) => { 
                    e.stopPropagation(); 
                    onToggleFavorite(productId); 
                }}
                className={`absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-sm transition-colors ${
                    isFav 
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
                        style={{backgroundImage: `url("${getProductImage(product)}")`}}
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
                <div className={`flex flex-1 flex-col items-center w-full px-4 md:px-10 pb-20 min-h-screen ${config.bgColor} ${config.textColor}`}>
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
                                    isFavorite={favoriteIds.includes(product.id)}
                                    onToggleFavorite={() => onToggleFavorite(product.id)}
                                    onOpen={() => onOpenProduct?.(product)}
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
            <div className={`flex flex-1 flex-col items-center w-full px-4 md:px-10 pb-20 ${config.bgColor} ${config.textColor}`}>
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
                            style={{backgroundImage: `url(${config.heroImage})`}}
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

<<<<<<< Updated upstream
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
=======
                    {/* Sistema de Carruseles con Sidebar para Padres */}
                    {category.id === 2 ? (
                        <div className="flex gap-6 px-4 mt-8">
                            {/* Sidebar de filtros */}
                            <aside className={`hidden lg:block w-64 flex-shrink-0 ${config.darkMode ? 'bg-white/5' : 'bg-gray-50'} rounded-2xl p-4 h-fit sticky top-4`}>
                                <h3 className={`${config.textColor} text-lg font-bold mb-4 flex items-center gap-2`}>
                                    <span className="material-symbols-outlined">tune</span>
                                    Categorías
                                </h3>
                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={() => setSelectedSeoCategory(null)}
                                        className={`text-left px-4 py-2 rounded-lg transition-all ${
                                            selectedSeoCategory === null
                                                ? `${config.accentColor} bg-primary/10 font-bold`
                                                : `opacity-60 hover:opacity-100 ${config.darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`
                                        }`}
                                    >
                                        Ver todas
                                    </button>
                                    {categoriesWithProducts.map(cat => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedSeoCategory(cat.slug)}
                                            className={`text-left px-4 py-2 rounded-lg transition-all text-sm ${
                                                selectedSeoCategory === cat.slug
                                                    ? `${config.accentColor} bg-primary/10 font-bold`
                                                    : `opacity-60 hover:opacity-100 ${config.darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`
                                            }`}
>>>>>>> Stashed changes
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-sm">
                                                    {cat.icon || 'category'}
                                                </span>
                                                <span className="line-clamp-2">{cat.name}</span>
                                            </div>
                                        </button>
<<<<<<< Updated upstream
                                    )}
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {sectionProducts.slice(0, 3).map(product => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            isDarkMode={config.darkMode}
                                            buttonColor={config.buttonColor}
                                            textColor={config.textColor}
                                            accentColor={config.accentColor}
                                        />
=======
>>>>>>> Stashed changes
                                    ))}
                                </div>
                            </aside>

                            {/* Contenido principal con carruseles */}
                            <div className="flex-1 flex flex-col gap-8">
                                {/* Filtro móvil */}
                                <div className="lg:hidden">
                                    <button
                                        onClick={() => setShowMobileFilters(!showMobileFilters)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl ${config.darkMode ? 'bg-white/5' : 'bg-gray-100'}`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className="material-symbols-outlined">tune</span>
                                            <span className="font-medium">
                                                {selectedSeoCategory 
                                                    ? categoriesWithProducts.find(c => c.slug === selectedSeoCategory)?.name
                                                    : 'Ver todas las categorías'
                                                }
                                            </span>
                                        </span>
                                        <span className="material-symbols-outlined">
                                            {showMobileFilters ? 'expand_less' : 'expand_more'}
                                        </span>
                                    </button>
                                    
                                    {showMobileFilters && (
                                        <div className={`mt-2 p-4 rounded-xl ${config.darkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                                            <button
                                                onClick={() => {
                                                    setSelectedSeoCategory(null);
                                                    setShowMobileFilters(false);
                                                }}
                                                className={`w-full text-left px-4 py-2 rounded-lg mb-2 transition-all ${
                                                    selectedSeoCategory === null 
                                                        ? `${config.accentColor} bg-primary/10 font-bold`
                                                        : `opacity-60 ${config.darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`
                                                }`}
                                            >
                                                Ver todas
                                            </button>
                                            {categoriesWithProducts.map(cat => (
                                                <button
                                                    key={cat.id}
                                                    onClick={() => {
                                                        setSelectedSeoCategory(cat.slug);
                                                        setShowMobileFilters(false);
                                                    }}
                                                    className={`w-full text-left px-4 py-2 rounded-lg mb-2 transition-all text-sm ${
                                                        selectedSeoCategory === cat.slug
                                                            ? `${config.accentColor} bg-primary/10 font-bold`
                                                            : `opacity-60 ${config.darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-sm">
                                                            {cat.icon || 'category'}
                                                        </span>
                                                        <span>{cat.name}</span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Carruseles por categoría */}
                                {categoriesWithProducts
                                    .filter(cat => selectedSeoCategory === null || cat.slug === selectedSeoCategory)
                                    .map(cat => {
                                        const categoryProducts = productsBySeoCategory[cat.slug] || [];
                                        if (categoryProducts.length === 0) return null;

                                        return (
                                            <section key={cat.id} className="flex flex-col gap-4">
                                                <div className={`flex items-center justify-between border-b pb-3 ${config.darkMode ? 'border-white/10' : 'border-black/10'}`}>
                                                    <div className="flex flex-col gap-1">
                                                        <div className={`flex items-center gap-2 ${config.accentColor} font-bold uppercase tracking-wider text-xs`}>
                                                            <span className="material-symbols-outlined text-sm">
                                                                {cat.icon || 'category'}
                                                            </span>
                                                            Categoría
                                                        </div>
                                                        <h2 className={`${config.textColor} text-2xl md:text-3xl font-bold tracking-tight`}>
                                                            {cat.name}
                                                        </h2>
                                                        {cat.metaDescription && (
                                                            <p className="opacity-60 text-sm mt-1">
                                                                {cat.metaDescription}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${config.darkMode ? 'bg-white/10' : 'bg-black/5'}`}>
                                                        {categoryProducts.length} productos
                                                    </span>
                                                </div>

                                                {/* Carrusel horizontal scrollable */}
                                                <div className="relative group/carousel">
                                                    <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                                                        <div className="flex gap-4" style={{ minWidth: 'min-content' }}>
                                                            {categoryProducts.map(product => (
                                                                <div key={product.id} className="w-[280px] flex-shrink-0">
                                                                    <ProductCard
                                                                        product={product}
                                                                        isFavorite={favoriteIds.includes(product.id)}
                                                                        onToggleFavorite={() => onToggleFavorite(product.id)}
                                                                        onOpen={() => onOpenProduct?.(product)}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        );
                                    })}

                                {/* Mensaje si no hay productos */}
                                {categoriesWithProducts.length === 0 && (
                                    <div className="text-center py-20 opacity-60">
                                        <span className="material-symbols-outlined text-5xl mb-4">inventory_2</span>
                                        <p className="text-lg">No hay productos disponibles en esta categoría.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Dynamic Sections para otras categorías */}
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
                                                    isFavorite={favoriteIds.includes(product.id)}
                                                    onToggleFavorite={() => onToggleFavorite(product.id)}
                                                    onOpen={() => onOpenProduct?.(product)}
                                                />
                                            ))}
                                        </div>
                                    </section>
                                );
                            })}
                        </>
                    )}

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
                                            style={{backgroundImage: `url("${getProductImage(product)}")`}}
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
        <div className="flex-1 px-6 lg:px-12 py-8 max-w-[1440px] mx-auto w-full">
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
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
                        {category.title}
                    </h1>
                    <p className="text-lg text-gray-400">
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
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
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
                                <span className="text-gray-500 dark:text-gray-300 group-hover:text-primary transition-colors">
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
                                className="group relative flex flex-col rounded-2xl bg-white dark:bg-[#1A2C20] p-4 transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-primary/5 border border-transparent hover:border-primary/50"
                                role="article"
                            >
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
                                        src={getProductImage(product)}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex flex-col flex-1 gap-2">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                        {product.category}
                                    </p>
                                    {product.description && (
                                        <p className="text-sm text-gray-400 dark:text-gray-400 line-clamp-2">
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
                                            <span className="text-xl font-bold text-slate-900 dark:text-white">
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