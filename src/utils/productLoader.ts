import { Product } from '../../types';

/**
 * Clase Singleton para cargar y gestionar productos desde archivos JSON
 */
class ProductLoaderClass {
  private products: Product[] = [];
  private loaded: boolean = false;

  /**
   * Verifica si los productos ya fueron cargados
   */
  isLoaded(): boolean {
    return this.loaded;
  }

  /**
   * Marca los productos como cargados
   */
  setLoaded(): void {
    this.loaded = true;
  }

  /**
   * Carga un producto desde JSON y lo convierte al formato Product
   */
  loadFromJSON(jsonProduct: any): Product {
    return {
      id: jsonProduct.id,
      categoryId: jsonProduct.categoryId,
      title: jsonProduct.title,
      price: jsonProduct.price,
      category: jsonProduct.category,
      subcategory: jsonProduct.subcategory || '',
      seoCategory: jsonProduct.seoCategory || '',
      image: jsonProduct.image,
      url: jsonProduct.url,
      description: jsonProduct.description || '',
      featured: jsonProduct.featured || false,
    };
  }

  /**
   * Registra un producto en el loader
   */
  registerProduct(product: Product): void {
    // Evitar duplicados
    if (!this.products.find(p => p.id === product.id)) {
      this.products.push(product);
    }
  }

  /**
   * Obtiene todos los productos registrados
   */
  getAllProducts(): Product[] {
    return [...this.products];
  }

  /**
   * Obtiene productos filtrados por categoría SEO
   */
  getProductsBySEOCategory(seoCategory: string): Product[] {
    return this.products.filter(p => p.seoCategory === seoCategory);
  }

  /**
   * Obtiene productos filtrados por categoryId
   */
  getProductsByCategoryId(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  /**
   * Busca un producto por ID
   */
  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  /**
   * Limpia todos los productos (útil para testing)
   */
  clear(): void {
    this.products = [];
    this.loaded = false;
  }
}

// Exportar instancia singleton
export const ProductLoader = new ProductLoaderClass();
