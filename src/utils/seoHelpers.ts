import { ProductLoader } from '../utils/productLoader';
import { SEO_CATEGORIES_PADRES, SEO_CATEGORIES_NINOS, generateProductURL } from '../config/seo-categories';

/**
 * Genera un sitemap.xml para el sitio
 * Útil para SEO y para que Google indexe todas las páginas
 */
export const generateSitemap = (): string => {
  const baseUrl = 'https://tudominio.com'; // Cambiar por tu dominio
  const today = new Date().toISOString().split('T')[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Página principal -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Páginas de categorías principales -->
  <url>
    <loc>${baseUrl}/padres</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/ninos</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Páginas de categorías SEO - Padres -->
`;

  // Añadir categorías SEO de Padres
  SEO_CATEGORIES_PADRES.forEach(category => {
    sitemap += `  <url>
    <loc>${baseUrl}/${category.parent}/${category.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  sitemap += `
  <!-- Páginas de categorías SEO - Niños -->
`;

  // Añadir categorías SEO de Niños
  SEO_CATEGORIES_NINOS.forEach(category => {
    sitemap += `  <url>
    <loc>${baseUrl}/${category.parent}/${category.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  sitemap += `
  <!-- Páginas de productos -->
`;

  // Añadir productos
  const products = ProductLoader.getAllProducts();
  products.forEach(product => {
    // Determinar la categoría padre basándose en categoryId
    const parentCategory = product.categoryId === 4 ? 'ninos' : 'padres';
    const url = generateProductURL(parentCategory, product.seoCategory, product.slug);
    const lastmod = product.updatedAt || product.createdAt || today;
    
    sitemap += `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${lastmod.split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  sitemap += '</urlset>';

  return sitemap;
};

/**
 * Genera un archivo sitemap y lo descarga
 */
export const downloadSitemap = () => {
  const sitemap = generateSitemap();
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

/**
 * Genera robots.txt
 */
export const generateRobotsTxt = (): string => {
  const baseUrl = 'https://tudominio.com'; // Cambiar por tu dominio
  
  return `# robots.txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (opcional, para no sobrecargar el servidor)
Crawl-delay: 1`;
};

/**
 * Estadísticas del contenido para análisis
 */
export const getContentStats = () => {
  const products = ProductLoader.getAllProducts();
  
  const stats = {
    totalProducts: products.length,
    byCategory: {} as Record<string, number>,
    bySEOCategory: {} as Record<string, number>,
    featured: products.filter(p => p.featured).length,
    withDiscount: products.filter(p => p.discount).length,
    avgPrice: products.reduce((sum, p) => sum + p.price, 0) / products.length,
    priceRange: {
      min: Math.min(...products.map(p => p.price)),
      max: Math.max(...products.map(p => p.price)),
    },
  };

  // Contar por categoría
  products.forEach(product => {
    stats.byCategory[product.category] = (stats.byCategory[product.category] || 0) + 1;
    stats.bySEOCategory[product.seoCategory] = (stats.bySEOCategory[product.seoCategory] || 0) + 1;
  });

  return stats;
};

/**
 * Exporta todos los productos como JSON
 */
export const exportProductsAsJSON = (): void => {
  const products = ProductLoader.getAllProducts();
  const json = JSON.stringify(products, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'productos-export.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

/**
 * Valida que todas las URLs de productos sean únicas
 */
export const validateUniqueURLs = (): { valid: boolean; duplicates: string[] } => {
  const products = ProductLoader.getAllProducts();
  const urls = new Set<string>();
  const duplicates: string[] = [];

  products.forEach(product => {
    const url = generateProductURL('padres', product.seoCategory, product.slug);
    
    if (urls.has(url)) {
      duplicates.push(url);
    } else {
      urls.add(url);
    }
  });

  return {
    valid: duplicates.length === 0,
    duplicates,
  };
};
