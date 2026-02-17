import matter from 'gray-matter';
import { ProductSchema, type Product } from '../schemas/product.schema';
import { createSlug } from '../config/seo-categories';

/**
 * Loader de productos desde archivos Markdown
 * Parsea el frontmatter YAML y valida con Zod
 */
export class ProductLoader {
  private static products: Map<string, Product> = new Map();
  private static loaded = false;

  /**
   * Cargar un producto desde contenido Markdown
   */
  static loadFromMarkdown(content: string, filePath: string): Product {
    try {
      const { data, content: description } = matter(content);
      
      // Generar slug si no existe
      if (!data.slug && data.title) {
        data.slug = createSlug(data.title);
      }

      // Usar la descripción del contenido si no hay descripción en frontmatter
      if (!data.description && description.trim()) {
        data.description = description.trim();
      }

      // Validar con Zod
      const product = ProductSchema.parse(data);
      
      return product;
    } catch (error) {
      console.error(`Error al cargar producto desde ${filePath}:`, error);
      throw error;
    }
  }

  /**
   * Cargar un producto desde JSON
   */
  static loadFromJSON(jsonData: any): Product {
    try {
      // Generar slug si no existe
      if (!jsonData.slug && jsonData.title) {
        jsonData.slug = createSlug(jsonData.title);
      }

      // Validar con Zod
      const product = ProductSchema.parse(jsonData);
      
      return product;
    } catch (error) {
      console.error('Error al cargar producto desde JSON:', error);
      throw error;
    }
  }

  /**
   * Registrar un producto en el cache
   */
  static registerProduct(product: Product): void {
    const key = `${product.categoryId}-${product.slug}`;
    this.products.set(key, product);
  }

  /**
   * Obtener producto por slug y categoría
   */
  static getProduct(categoryId: number, slug: string): Product | undefined {
    const key = `${categoryId}-${slug}`;
    return this.products.get(key);
  }

  /**
   * Obtener todos los productos
   */
  static getAllProducts(): Product[] {
    return Array.from(this.products.values());
  }

  /**
   * Obtener productos por categoría
   */
  static getProductsByCategory(categoryId: number): Product[] {
    return this.getAllProducts().filter(p => p.categoryId === categoryId);
  }

  /**
   * Obtener productos por categoría SEO
   */
  static getProductsBySEOCategory(seoCategory: string): Product[] {
    return this.getAllProducts().filter(p => p.seoCategory === seoCategory);
  }

  /**
   * Limpiar cache
   */
  static clear(): void {
    this.products.clear();
    this.loaded = false;
  }

  /**
   * Verificar si los productos ya fueron cargados
   */
  static isLoaded(): boolean {
    return this.loaded;
  }

  /**
   * Marcar como cargado
   */
  static setLoaded(): void {
    this.loaded = true;
  }
}

/**
 * Hook para usar productos en React
 */
export const useProducts = () => {
  return {
    products: ProductLoader.getAllProducts(),
    getProduct: (categoryId: number, slug: string) => 
      ProductLoader.getProduct(categoryId, slug),
    getProductsByCategory: (categoryId: number) => 
      ProductLoader.getProductsByCategory(categoryId),
    getProductsBySEOCategory: (seoCategory: string) => 
      ProductLoader.getProductsBySEOCategory(seoCategory),
  };
};

/**
 * Función helper para validar un producto sin cargarlo
 */
export const validateProduct = (data: any): { valid: boolean; errors?: any } => {
  try {
    ProductSchema.parse(data);
    return { valid: true };
  } catch (error) {
    return { valid: false, errors: error };
  }
};
