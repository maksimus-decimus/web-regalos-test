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
        <aside className="w-72 bg-[#1a2620] rounded-xl p-6 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined">tune</span>
                    Filtros
                </h3>
                <button
                    onClick={onClearFilters}
                    className="text-xs text-primary hover:text-white transition-colors"
                >
                    Limpiar
                </button>
            </div>

            <div className="text-sm text-gray-400 mb-6">
                {totalResults} resultados encontrados
            </div>

            {/* Precio */}
            <div className="mb-8">
                <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">attach_money</span>
                    Rango de Precio
                </h4>
                <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Min:</span>
                        <span className="text-white font-medium">€{priceRange[0]}</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="20000"
                        step="100"
                        value={priceRange[0]}
                        onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
                        className="w-full accent-primary"
                    />
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Max:</span>
                        <span className="text-white font-medium">€{priceRange[1]}</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="20000"
                        step="100"
                        value={priceRange[1]}
                        onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
                        className="w-full accent-primary"
                    />
                </div>
            </div>

            {/* Destinatario */}
            <div className="mb-8">
                <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">person</span>
                    Destinatario
                </h4>
                <div className="space-y-2">
                    {recipients.map(recipient => (
                        <button
                            key={recipient.id}
                            onClick={() => onRecipientChange(
                                selectedRecipient === recipient.id ? null : recipient.id
                            )}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                                selectedRecipient === recipient.id
                                    ? 'bg-primary/20 text-primary border border-primary/30'
                                    : 'bg-[#28392e] text-gray-300 hover:bg-[#344a3b]'
                            }`}
                        >
                            <span className="text-xl">{recipient.icon}</span>
                            <span className="text-sm font-medium">{recipient.label}</span>
                            {selectedRecipient === recipient.id && (
                                <span className="material-symbols-outlined text-[18px] ml-auto">check</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Categorías */}
            <div>
                <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">category</span>
                    Categorías
                </h4>
                <div className="space-y-2">
                    {categories.map(category => (
                        <label
                            key={category.id}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#28392e] hover:bg-[#344a3b] transition-colors cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(category.id)}
                                onChange={() => onCategoryToggle(category.id)}
                                className="w-4 h-4 accent-primary cursor-pointer"
                            />
                            <span className="text-sm text-gray-300 flex-1">{category.title}</span>
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default FilterSidebar;
