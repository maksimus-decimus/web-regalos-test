import React from 'react';
import { Category, Product } from '../types';

interface CategoryPageProps {
    category: Category;
    products: Product[];
    onAddToCart: (product: Product) => void;
    onBack: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, products, onAddToCart, onBack }) => {
    
    // Mothers Layout (ID 3)
    if (category.id === 3) {
        const sections = [
            { title: "Cuidado Personal y Belleza", subcategory: "Belleza" },
            { title: "Hogar y Decoración", subcategory: "Hogar" },
            { title: "Moda y Accesorios", subcategory: "Moda" }
        ];
        
        const experienceProducts = products.filter(p => p.subcategory === "Experiencias");

        return (
            <div className="w-full flex flex-1 justify-center py-5 text-[#181113] dark:text-white">
                <div className="flex flex-col max-w-[1200px] flex-1 px-4 lg:px-8">
                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap gap-2 py-4 px-2">
                        <button onClick={onBack} className="text-[#89616f] dark:text-[#bca4ad] text-sm font-medium leading-normal hover:underline">Inicio</button>
                        <span className="text-[#89616f] dark:text-[#bca4ad] text-sm font-medium leading-normal">/</span>
                        <span className="text-[#89616f] dark:text-[#bca4ad] text-sm font-medium leading-normal">Regalos 2025</span>
                        <span className="text-[#89616f] dark:text-[#bca4ad] text-sm font-medium leading-normal">/</span>
                        <span className="text-[#181113] dark:text-white text-sm font-medium leading-normal">{category.title}</span>
                    </div>

                    {/* Hero Section */}
                    <div className="mb-12">
                        <div className="w-full">
                            <div className="flex min-h-[400px] lg:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-3xl items-start justify-end px-8 pb-12 lg:px-16 lg:pb-16 shadow-lg overflow-hidden relative group" 
                                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdsWLUGiicHou6i2n9VVGWZ4MksCA_ZYppDi1TN8-BKz8HvW5vCGlzjzBzzuzy0Wbt1TIT5liebR6bhBqT6-HLllg7Iz6jCyebx0o1IaIZ0OIyouFGXMjOFLZ6KcpS0Gpz1rG1BAKPCmqnqOuo4vfKkOOyS4PBRGjrpLNU-pzWwJpOrpRtpqMl6oj9AU7hhf3GVuyoif-b3X17u4b9KBhM6pR07ib51PEHOFCoIgLl4vx-9lLadiwIKQvbR6ZIWmNgJN5ZloGlW7s")'}}>
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="relative z-10 flex flex-col gap-3 text-left max-w-2xl">
                                    <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-sm">
                                        Regalos para Madres
                                    </h1>
                                    <h2 className="text-white/90 text-lg lg:text-xl font-normal leading-relaxed drop-shadow-sm max-w-lg">
                                        Ideas únicas para el 2025 para celebrar a mamá con algo tan especial como ella.
                                    </h2>
                                </div>
                                <button className="relative z-10 flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[#ee2b6c] hover:bg-[#d61e5b] transition-all transform hover:scale-105 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/40">
                                    <span className="truncate">Ver Guía de Regalos</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Standard Sections */}
                    {sections.map((section, idx) => {
                        const sectionProducts = products.filter(p => p.subcategory === section.subcategory);
                        return (
                            <section key={idx} className="mb-12">
                                <div className="flex items-center justify-between px-2 pb-6">
                                    <h2 className="text-[#181113] dark:text-white text-[24px] font-bold leading-tight tracking-[-0.015em]">{section.title}</h2>
                                    <a href="#" className="text-[#ee2b6c] font-medium hover:underline flex items-center gap-1">
                                        Ver todo <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </a>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {sectionProducts.map(product => (
                                        <div key={product.id} className="group flex flex-col gap-4 p-4 rounded-3xl bg-white dark:bg-[#2a171d] hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-800">
                                            <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl relative">
                                                <div 
                                                    className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-110 transition-transform duration-500" 
                                                    style={{backgroundImage: `url("${product.image}")`}}>
                                                </div>
                                                {product.tag && (
                                                    <div className="absolute top-3 left-3 bg-[#ee2b6c] text-white text-xs font-bold px-3 py-1 rounded-full">{product.tag}</div>
                                                )}
                                                <button className="absolute top-3 right-3 bg-white/90 dark:bg-black/60 p-2 rounded-full cursor-pointer hover:bg-[#ee2b6c] hover:text-white transition-colors">
                                                    <span className="material-symbols-outlined text-lg">favorite</span>
                                                </button>
                                            </div>
                                            <div>
                                                <p className="text-[#181113] dark:text-white text-lg font-bold leading-normal mb-1">{product.title}</p>
                                                <div className="flex items-center justify-between">
                                                    <p className="text-[#181113] dark:text-white text-lg font-semibold">${product.price.toFixed(2)}</p>
                                                    <button 
                                                        onClick={() => onAddToCart(product)}
                                                        className="text-[#ee2b6c] text-sm font-bold px-4 py-2 bg-[#ee2b6c]/10 rounded-full hover:bg-[#ee2b6c] hover:text-white transition-colors"
                                                    >
                                                        Añadir
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Insert Banner after "Hogar" section */}
                                {section.subcategory === "Hogar" && (
                                    <div className="w-full bg-[#fceef3] dark:bg-[#3f2129] rounded-3xl p-8 lg:p-12 my-12 flex flex-col md:flex-row items-center justify-between gap-8">
                                        <div className="flex flex-col gap-4 md:w-1/2">
                                            <span className="text-[#ee2b6c] font-bold tracking-wide uppercase text-sm">Oferta Especial</span>
                                            <h3 className="text-3xl md:text-4xl font-black text-[#181113] dark:text-white">Envío Gratuito en Regalos para Mamá</h3>
                                            <p className="text-lg text-[#89616f] dark:text-[#bca4ad]">En todas las órdenes superiores a $150. Sorpréndela sin costos extra.</p>
                                            <button className="w-fit mt-2 bg-[#181113] dark:bg-white text-white dark:text-[#181113] px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
                                                Comprar Ahora
                                            </button>
                                        </div>
                                        <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-center bg-cover rounded-2xl shadow-lg rotate-3 hover:rotate-0 transition-transform duration-500" 
                                            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqhhOQt8ulK3-HnzKc7X-wjZSAABjf4m_WACi7qzx2tWkRrNrqeN8VzVc_gNOba_fIj9oNkgsn8u6cZwkxPHq_ZQ3kMVaLHBDQk5S-Ti6QauknvMvpMfIvceZ3Vf5tmujeLKfM4IfU8jQsvHml9zGcdohVnd4dZ9m3jygQiiRAv1I-hTnhJ_NrVjsU8887JuBHUe-LJZQ0Tb7VqStxOQb6UvPNzQNNDoKJKeTkg70nGmkwonHYABkkN10c2Qyds2iihd6khH5mF7k")'}}>
                                        </div>
                                    </div>
                                )}
                            </section>
                        );
                    })}

                    {/* Experiences Section */}
                    {experienceProducts.length > 0 && (
                        <section className="mb-20">
                            <div className="flex items-center justify-between px-2 pb-6">
                                <h2 className="text-[#181113] dark:text-white text-[24px] font-bold leading-tight tracking-[-0.015em]">Experiencias Relajantes</h2>
                                <a href="#" className="text-[#ee2b6c] font-medium hover:underline flex items-center gap-1">
                                    Ver todo <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {experienceProducts.map(product => (
                                    <div key={product.id} className="relative group rounded-3xl overflow-hidden min-h-[300px] flex items-end">
                                        <div 
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                                            style={{backgroundImage: `url("${product.image}")`}}>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                        <div className="relative z-10 p-6 w-full">
                                            <h3 className="text-white text-xl font-bold mb-1">{product.title}</h3>
                                            <p className="text-gray-200 text-sm mb-4">{product.category}</p>
                                            <button onClick={() => onAddToCart(product)} className="w-full bg-white/20 backdrop-blur-md text-white border border-white/40 rounded-full py-2 hover:bg-white hover:text-black transition-all font-medium">
                                                Reservar (${product.price})
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        );
    }

    // Default Layout (Fathers / Others)
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
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                        {category.id === 2 ? "Gadgets para Papá" : category.title}
                    </h1>
                    <p className="text-lg text-gray-400">
                        {category.id === 2 
                            ? "Desde herramientas inteligentes hasta lo último en audio. Encuentra la tecnología perfecta para sorprenderlo este año."
                            : `Explora nuestra selección especial de ${category.title.toLowerCase()}.`}
                    </p>
                </div>
                {/* Quick Sort for Mobile */}
                <div className="md:hidden w-full">
                    <button className="w-full flex items-center justify-between bg-[#1A2C20] px-4 py-3 rounded-xl text-white font-medium">
                        <span>Filtros y Ordenar</span>
                        <span className="material-symbols-outlined">tune</span>
                    </button>
                </div>
            </div>

            {/* Layout: Sidebar + Grid */}
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Sidebar Filters (Desktop) */}
                <aside className="hidden lg:flex w-64 flex-col gap-8 shrink-0">
                    {/* Filter Group: Categories */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg text-white border-b border-gray-800 pb-2">Tipo de Gadget</h3>
                        <div className="flex flex-col gap-3">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input defaultChecked className="peer h-5 w-5 appearance-none rounded-md border border-gray-500 bg-transparent checked:border-primary checked:bg-primary transition-all" type="checkbox"/>
                                    <span className="material-symbols-outlined absolute left-0 top-0 text-black opacity-0 peer-checked:opacity-100 text-[18px] pointer-events-none">check</span>
                                </div>
                                <span className="text-gray-300 group-hover:text-primary transition-colors">Todos</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input className="peer h-5 w-5 appearance-none rounded-md border border-gray-500 bg-transparent checked:border-primary checked:bg-primary transition-all" type="checkbox"/>
                                    <span className="material-symbols-outlined absolute left-0 top-0 text-black opacity-0 peer-checked:opacity-100 text-[18px] pointer-events-none">check</span>
                                </div>
                                <span className="text-gray-300 group-hover:text-primary transition-colors">Wearables</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input className="peer h-5 w-5 appearance-none rounded-md border border-gray-500 bg-transparent checked:border-primary checked:bg-primary transition-all" type="checkbox"/>
                                    <span className="material-symbols-outlined absolute left-0 top-0 text-black opacity-0 peer-checked:opacity-100 text-[18px] pointer-events-none">check</span>
                                </div>
                                <span className="text-gray-300 group-hover:text-primary transition-colors">Herramientas Smart</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input className="peer h-5 w-5 appearance-none rounded-md border border-gray-500 bg-transparent checked:border-primary checked:bg-primary transition-all" type="checkbox"/>
                                    <span className="material-symbols-outlined absolute left-0 top-0 text-black opacity-0 peer-checked:opacity-100 text-[18px] pointer-events-none">check</span>
                                </div>
                                <span className="text-gray-300 group-hover:text-primary transition-colors">Audio & Música</span>
                            </label>
                        </div>
                    </div>
                    {/* Filter Group: Price */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg text-white border-b border-gray-800 pb-2">Precio</h3>
                        <div className="flex flex-col gap-4 px-1">
                            <div className="relative h-1 w-full rounded-full bg-gray-700">
                                <div className="absolute left-0 top-0 h-full w-2/3 rounded-full bg-primary"></div>
                                <div className="absolute right-[33%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                            </div>
                            <div className="flex justify-between text-sm font-medium text-gray-400">
                                <span>$0</span>
                                <span>$500+</span>
                            </div>
                        </div>
                    </div>
                    {/* Banner Ad */}
                    <div className="mt-4 overflow-hidden rounded-xl relative bg-gradient-to-br from-[#1A2C20] to-[#0d1610] border border-gray-800 p-6 flex flex-col gap-3">
                        <span className="text-primary text-xs font-bold tracking-wider uppercase">Oferta Especial</span>
                        <h4 className="text-white font-bold text-xl leading-tight">Envío gratis en gadgets seleccionados</h4>
                        <p className="text-gray-400 text-sm">Solo por tiempo limitado para el día del padre.</p>
                    </div>
                </aside>

                {/* Product Grid Area */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Chips / Sorting Row */}
                    <div className="flex flex-wrap items-center gap-3">
                        <button className="flex h-9 items-center gap-2 rounded-full bg-primary px-4 text-sm font-bold text-background-dark shadow-lg shadow-primary/20 hover:bg-white transition-colors">
                            <span>Todos</span>
                        </button>
                        <button className="flex h-9 items-center gap-2 rounded-full bg-[#1A2C20] border border-transparent px-4 text-sm font-medium text-gray-300 hover:bg-[#243A2B] transition-colors">
                            <span>Más Vendidos</span>
                        </button>
                        <button className="flex h-9 items-center gap-2 rounded-full bg-[#1A2C20] border border-transparent px-4 text-sm font-medium text-gray-300 hover:bg-[#243A2B] transition-colors">
                            <span>Novedades</span>
                        </button>
                        <button className="flex h-9 items-center gap-2 rounded-full bg-[#1A2C20] border border-transparent px-4 text-sm font-medium text-gray-300 hover:bg-[#243A2B] transition-colors ml-auto">
                            <span>Ordenar: Relevancia</span>
                            <span className="material-symbols-outlined text-[18px]">expand_more</span>
                        </button>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map(product => (
                            <div key={product.id} className="group relative flex flex-col rounded-2xl bg-[#1A2C20] p-4 transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-primary/5 border border-transparent hover:border-primary/50">
                                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#111813] mb-4">
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
                                    <button className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-primary hover:text-background-dark">
                                        <span className="material-symbols-outlined text-[18px]">favorite</span>
                                    </button>
                                    <img 
                                        alt={product.title} 
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                        src={product.image}
                                    />
                                </div>
                                <div className="flex flex-col flex-1 gap-2">
                                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{product.title}</h3>
                                    <p className="text-sm text-gray-400 line-clamp-2">{product.category}</p>
                                    <div className="mt-auto flex items-center justify-between pt-4">
                                        <div className="flex flex-col">
                                            {product.oldPrice && <span className="text-xs text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>}
                                            <span className="text-xl font-bold text-white">${product.price.toFixed(2)}</span>
                                        </div>
                                        <button 
                                            onClick={() => onAddToCart(product)}
                                            className="rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-background-dark transition-colors"
                                        >
                                            Añadir
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="mt-8 flex justify-center">
                        <button className="flex items-center gap-2 rounded-full border border-gray-700 bg-transparent px-8 py-3 text-sm font-bold text-white hover:bg-[#1A2C20] transition-colors">
                            Ver más productos
                            <span className="material-symbols-outlined">arrow_downward</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Recommendations Section */}
            <div className="mt-20 border-t border-[#28392e] pt-12">
                <h2 className="text-2xl font-bold text-white mb-8">Te puede interesar...</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <a className="group relative flex h-48 flex-col justify-end overflow-hidden rounded-2xl bg-[#1A2C20] p-4 text-white" href="#">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img alt="Grill" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2nAP_KiKqP3HufQuf25PgyZptfevLDf8GHWmrGaP3WOK01MZCsSMw47wM82pudy9y262LZwCAZwvK7CNkbxVkWB4N2OLuG-o8CqkjlKrmm7w7JEM4A2EkIKDRK8o5Or0zHLmbmMusl7PWIWD5tQGRpgPfiStW7WRn-GFP4il2p77iUMbf-285Ki1YFCo4GBAL9RLpYYSL2Do70TxdymS7H3yOX6vJgMyyzp_uH9Y3XHO95QRFVtGc51sFT2YGofe7rRjGIfGeYz0"/>
                        <div className="relative z-20">
                            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">Outdoor</span>
                            <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">Parrillada Master</h3>
                        </div>
                    </a>
                    <a className="group relative flex h-48 flex-col justify-end overflow-hidden rounded-2xl bg-[#1A2C20] p-4 text-white" href="#">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img alt="VR" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1rtjMdd4hKqtK7fTktshHSrCwXB9PVXf3G4TAfAQTnBXF7K-XaSH9-Sp1VBHGtZQ7T29Fxe_g3DAAhOp3AL1oCkModWE5mim9jUlIoOLC756gp7nWb6JRx2Y5TtGuAlNydtL_zQF7gZgqsxbp9fqRHaY4E3EayiV2ElHoFUIJfRqvRs5sv6BMk1ScN9j-GuqtlFQ2tpbLqjiy0v0EcbX13sdHUJeYo89lvboBfOBLlT5DZjDpJAqe80kf67Ur28VNmYrHSspoaU4"/>
                        <div className="relative z-20">
                            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">Entretenimiento</span>
                            <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">Realidad Virtual</h3>
                        </div>
                    </a>
                    <a className="group relative flex h-48 flex-col justify-end overflow-hidden rounded-2xl bg-[#1A2C20] p-4 text-white" href="#">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img alt="Car" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXPuRqiWf6fsHK9iXxkt4Cf1LaNbd5boyHkzIhkR-7dDAN64kY1MEBopGvjqPNm55e-qXTE88xIYdEYGT7Zx2e8920lpMB7IItH2BTyICuwftPPYsIM2TJ7AwEkSKFZy1HwGCs7AvmesjwCIIFJiIJryjmXmHjtjB7x1R9W9-mZjxW2iRLlHpYx2jF3ckW4l7Rq0xd2jWd2bRutuwXicJ7OGic4w4LDHCPfiWuue_i5sYkozUSl8ypotQE4dYiSv-7gN7bnx2SQdY"/>
                        <div className="relative z-20">
                            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">Accesorios</span>
                            <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">Para el Auto</h3>
                        </div>
                    </a>
                    <a className="group relative flex h-48 flex-col justify-end overflow-hidden rounded-2xl bg-[#1A2C20] p-4 text-white" href="#">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img alt="Desk" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgoh3f4E6ovAmsg7NcFZTNdWf0PAd_Lv1e34a8huUrgmnYI189T51s3q_eNnL9Yf09UxiUSZzFFmnERjinwnOeU6BLl5hmfJgAqM30MdWl7pyhOg8WY9YbwAzJhuH14FSQlcnWv1vMonkpuwrt8bK-bqWpc0n1m-hgiE9iwhgE-r0BGj1R9uB_yflvPBwfdhwhe7CfiYNEKa7vUcwbLIFKLSnUKlrOXf3n1mTQKSUhuip1bFJb4ngqLf3JcNozGLBu3jCzQ9MpE3A"/>
                        <div className="relative z-20">
                            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">Estilo</span>
                            <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">Home Office</h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;