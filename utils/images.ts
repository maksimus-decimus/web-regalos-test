import { Category, Product } from '../types';

// Mapea categorías a prefijos de archivo en public/images
const categoryPrefixById: Record<number, string> = {
    2: 'hombre',
    3: 'mujer',
    4: 'nino',
    5: 'nina',
    6: 'tecnologia',
};

export const getCategoryImageSet = (category: Category): [string, string, string] => {
    const prefix = categoryPrefixById[category.id] || 'tecnologia';
    return [
        `/images/${prefix}1.jpg`,
        `/images/${prefix}2.jpg`,
        `/images/${prefix}3.jpg`,
    ];
};

export const getHeroBackgroundImage = (categoryId: number): string => {
    const prefix = categoryPrefixById[categoryId] || 'tecnologia';
    const url = `/images/${prefix}1.jpg`;
    // Gradientes aproximados por categoría para mantener estilo
    switch (categoryId) {
        case 2: // Padres
            return `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(16, 34, 22, 0.9) 100%), url("${url}")`;
        case 3: // Madres
            return `linear-gradient(rgba(0,0,0,0.2), rgba(31, 10, 16, 0.95)), url("${url}")`;
        case 4: // Niños
            return `linear-gradient(rgba(0,0,0,0.2), rgba(15, 23, 42, 0.95)), url("${url}")`;
        case 5: // Niñas
            return `linear-gradient(rgba(0,0,0,0.2), rgba(38, 10, 30, 0.95)), url("${url}")`;
        case 6: // Tecnología
            return `linear-gradient(to bottom, rgba(0,0,0,0) 0%, #0f172a 100%), url("${url}")`;
        default:
            return `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url("${url}")`;
    }
};

// Resolver de imagen para productos: intenta locales por categoría; fallback a la remota original
export const getProductImage = (product: Product): string => {
    // Si el producto tiene una imagen específica (de productos_afiliados o images/productos), usarla directamente
    if (product.image && (
        product.image.startsWith('/productos_afiliados/') || 
        product.image.startsWith('productos_afiliados/') || 
        product.image.startsWith('/images/productos/') ||
        product.image.startsWith('http')
    )) {
        return product.image;
    }

    // Casos especiales por nombre
    const title = product.title.toLowerCase();
    if (title.includes('billetera') || title.includes('cartera')) {
        return '/images/cartera.jpg';
    }

    // Por categoría padre (categoryId)
    if (product.categoryId) {
        const prefix = categoryPrefixById[product.categoryId];
        if (prefix) {
            const idx = (product.id % 3) + 1; // distribuye 1..3
            return `/images/${prefix}${idx}.jpg`;
        }
    }

    // Fallback: intenta por categoría textual
    const cat = (product.category || '').toLowerCase();
    if (cat.includes('tecnolog') || cat.includes('gaming') || cat.includes('smart')) return '/images/tecnologia1.jpg';
    if (cat.includes('mujer') || cat.includes('ella')) return '/images/mujer1.jpg';
    if (cat.includes('niño') || cat.includes('nino')) return '/images/nino1.jpg';
    if (cat.includes('niña') || cat.includes('nina')) return '/images/nina1.jpg';
    if (cat.includes('padre') || cat.includes('hombre')) return '/images/hombre1.jpg';

    // Último recurso: usa la imagen original
    return product.image;
};
