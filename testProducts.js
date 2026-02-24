// Script para verificar que los productos se están cargando
console.log('=== VERIFICANDO CARGA DE PRODUCTOS ===');

// Importar los datos directamente
import productosPadres from './src/data/productos-padres.json';
import productosMadres from './src/data/productos-madres.json';
import productosNinas from './src/data/productos-ninas.json';

const allProducts = [
  ...productosPadres,
  ...productosMadres,
  ...productosNinas,
];

console.log(`Total productos: ${allProducts.length}`);
console.log(`  - Padres: ${productosPadres.length}`);
console.log(`  - Madres: ${productosMadres.length}`);
console.log(`  - Niñas: ${productosNinas.length}`);

const featured = allProducts.filter(p => p.featured);
console.log(`\nProductos destacados: ${featured.length}`);

const padresFeatured = productosPadres.filter(p => p.featured);
console.log(`\nPadres destacados: ${padresFeatured.length}`);
console.log('Primeros 3 productos de padres:');
productosPadres.slice(0, 3).forEach(p => {
  console.log(`  - ${p.title.substring(0, 50)}... (featured: ${p.featured})`);
});

// Verificar si ProductLoader funciona
import { ProductLoader } from './src/utils/productLoader';
setTimeout(() => {
  const loaded = ProductLoader.getAllProducts();
  console.log(`\n✅ ProductLoader tiene ${loaded.length} productos cargados`);
  
  if (loaded.length === 0) {
    console.error('❌ ERROR: ProductLoader no tiene productos!');
  }
}, 1000);
