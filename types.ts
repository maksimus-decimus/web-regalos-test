export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    description?: string;
    url?: string;
    tag?: string;
    discount?: string;
    oldPrice?: number;
    categoryId?: number;
    subcategory?: string;
}

export interface Category {
    id: number;
    title: string;
    subtitle: string;
    images: [string, string, string]; // Expecting exactly 3 images for the grid layout
}