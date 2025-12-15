export interface Category {
  id: string;
  title: string;
  subtitle: string;
  images: [string, string, string]; // Main image, Top Right, Bottom Right
}

export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  isNew?: boolean;
  discount?: string;
}