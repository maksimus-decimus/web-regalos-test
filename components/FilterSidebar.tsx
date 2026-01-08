import React from 'react';
import { Category } from '../types';

interface FilterSidebarProps {
    priceRange: [number, number];
    onPriceRangeChange: (range: [number, number]) => void;
    selectedRecipient: string | null;
    onRecipientChange: (recipient: string | null) => void;
    selectedCategories: number[];
    onCategoryToggle: (categoryId: number) => void;
    categories: Category[];
    totalResults: number;
    onClearFilters: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
    priceRange,
    onPriceRangeChange,
    selectedRecipient,
    onRecipientChange,
    selectedCategories,
    onCategoryToggle,
    categories,
    totalResults,
    onClearFilters
}) => {
    const recipients = [
        { id: 'padres', label: 'Para Padres', icon: '' },
        { id: 'madres', label: 'Para Madres', icon: '' },
        { id: 'niños', label: 'Para Niños', icon: '' },
        { id: 'niñas', label: 'Para Niñas', icon: '' }
    ];

    return (
        <aside 
            className="w-72 rounded-xl p-6 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto"
            style={{ 
                backgroundColor: '#E8F9EE', // Versión muy clara de #0BDA51
                border: '1px solid #B0F0C2' // Borde verde claro
            }}
        >
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2" style={{ color: '#0A5C2D' }}>
                    <span className="material-symbols-outlined" style={{ color: '#0BDA51' }}>tune</span>
                    Filtros
                </h3>
                <button
                    onClick={onClearFilters}
                    style={{ 
                        color: '#0BDA51',
                        backgroundColor: 'white',
                        border: '1px solid #0BDA51'
                    }}
                    className="text-sm transition-colors px-3 py-1 rounded-lg hover:bg-[#0BDA51] hover:text-white font-medium"
                >
                    Limpiar
                </button>
            </div>

            <div 
                className="text-sm px-3 py-2 rounded-lg mb-6 font-medium"
                style={{ 
                    color: '#0A5C2D',
                    backgroundColor: 'white',
                    border: '1px solid #0BDA51'
                }}
            >
                {totalResults} resultados encontrados
            </div>

            {/* Precio */}
            <div className="mb-8">
                <h4 
                    className="text-sm font-semibold mb-4 flex items-center gap-2"
                    style={{ color: '#0A5C2D' }}
                >
                    <span className="material-symbols-outlined text-[18px]" style={{ color: '#0BDA51' }}>attach_money</span>
                    Rango de Precio
                </h4>
                <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                        <span style={{ color: '#0A5C2D' }}>Min:</span>
                        <span 
                            className="font-bold px-3 py-1 rounded-full"
                            style={{ 
                                color: '#0BDA51',
                                backgroundColor: 'white',
                                border: '1px solid #0BDA51'
                            }}
                        >
                            €{priceRange[0]}
                        </span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="20000"
                        step="100"
                        value={priceRange[0]}
                        onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
                        style={{
                            backgroundColor: '#B0F0C2',
                            '--thumb-color': '#0BDA51'
                        } as React.CSSProperties}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--thumb-color)] [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white"
                    />
                    <div className="flex items-center justify-between text-sm">
                        <span style={{ color: '#0A5C2D' }}>Max:</span>
                        <span 
                            className="font-bold px-3 py-1 rounded-full"
                            style={{ 
                                color: '#0BDA51',
                                backgroundColor: 'white',
                                border: '1px solid #0BDA51'
                            }}
                        >
                            €{priceRange[1]}
                        </span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="20000"
                        step="100"
                        value={priceRange[1]}
                        onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
                        style={{
                            backgroundColor: '#B0F0C2',
                            '--thumb-color': '#0BDA51'
                        } as React.CSSProperties}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--thumb-color)] [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white"
                    />
                </div>
            </div>

            {/* Destinatario */}
            <div className="mb-8">
                <h4 
                    className="text-sm font-semibold mb-4 flex items-center gap-2"
                    style={{ color: '#0A5C2D' }}
                >
                    <span className="material-symbols-outlined text-[18px]" style={{ color: '#0BDA51' }}>person</span>
                    Destinatario
                </h4>
                <div className="space-y-2">
                    {recipients.map(recipient => (
                        <button
                            key={recipient.id}
                            onClick={() => onRecipientChange(
                                selectedRecipient === recipient.id ? null : recipient.id
                            )}
                            style={selectedRecipient === recipient.id ? { 
                                backgroundColor: 'white',
                                color: '#0BDA51',
                                border: '2px solid #0BDA51'
                            } : { 
                                backgroundColor: '#D0F8DD',
                                color: '#0A5C2D',
                                border: '1px solid #0BDA51'
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors hover:bg-white hover:border-2 hover:border-[#0BDA51]"
                        >
                            <span className="text-xl">{recipient.icon}</span>
                            <span className="text-sm font-medium">{recipient.label}</span>
                            {selectedRecipient === recipient.id && (
                                <span 
                                    className="material-symbols-outlined text-[18px] ml-auto"
                                    style={{ color: '#0BDA51' }}
                                >
                                    check
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Categorías */}
            <div>
                <h4 
                    className="text-sm font-semibold mb-4 flex items-center gap-2"
                    style={{ color: '#0A5C2D' }}
                >
                    <span className="material-symbols-outlined text-[18px]" style={{ color: '#0BDA51' }}>category</span>
                    Categorías
                </h4>
                <div className="space-y-2">
                    {categories.map(category => (
                        <label
                            key={category.id}
                            style={selectedCategories.includes(category.id) ? { 
                                backgroundColor: 'white',
                                border: '2px solid #0BDA51'
                            } : { 
                                backgroundColor: '#D0F8DD',
                                border: '1px solid #0BDA51'
                            }}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors cursor-pointer hover:bg-white hover:border-2 hover:border-[#0BDA51]"
                        >
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(category.id)}
                                onChange={() => onCategoryToggle(category.id)}
                                style={{ accentColor: '#0BDA51' }}
                                className="w-4 h-4 cursor-pointer"
                            />
                            <span 
                                className="text-sm flex-1 font-medium"
                                style={{ color: selectedCategories.includes(category.id) ? '#0BDA51' : '#0A5C2D' }}
                            >
                                {category.title}
                            </span>
                            {selectedCategories.includes(category.id) && (
                                <span 
                                    className="material-symbols-outlined text-[18px]"
                                    style={{ color: '#0BDA51' }}
                                >
                                    check
                                </span>
                            )}
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default FilterSidebar;