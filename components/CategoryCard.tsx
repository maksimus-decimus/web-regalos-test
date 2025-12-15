import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
    category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
    return (
        <a href={`#category-${category.id}`} className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-surface-dark transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
            <div className="absolute inset-0 grid grid-cols-3 h-full gap-[2px]">
                {/* Main Large Image */}
                <div
                    className="col-span-2 h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${category.images[0]}')` }}
                    role="img"
                    aria-label={category.title}
                />
                
                {/* Side Stacked Images */}
                <div className="col-span-1 flex flex-col h-full gap-[2px]">
                    <div
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${category.images[1]}')` }}
                        role="img"
                        aria-label={`${category.title} detail 1`}
                    />
                    <div
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${category.images[2]}')` }}
                        role="img"
                        aria-label={`${category.title} detail 2`}
                    />
                </div>
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Text Content */}
            <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-1">{category.subtitle}</p>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
            </div>
        </a>
    );
};

export default CategoryCard;