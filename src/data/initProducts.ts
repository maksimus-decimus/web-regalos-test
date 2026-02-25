import { ProductLoader } from '../utils/productLoader';

// Importar productos migrados de Amazon
import productosPadres from './productos-padres.json';
import productosMadres from './productos-madres.json';
import productosNinas from './productos-ninas.json';
import productosNinos from './productos-ninos.json';

// Combinar todos los productos
const PRODUCTOS_AMAZON = [
  ...productosPadres,
  ...productosMadres,
  ...productosNinas,
  ...productosNinos,
];

/**
 * Inicializa el sistema de productos
 * Carga productos migrados de Amazon en el ProductLoader
 */
export const initializeProducts = () => {
  if (ProductLoader.isLoaded()) {
    console.log('⚠️ Productos ya cargados');
    return;
  }

  console.log('%c🔄 INICIANDO CARGA DE PRODUCTOS...', 'background: #007acc; color: white; font-size: 16px; padding: 5px 10px; border-radius: 5px;');
  console.log('📦 Total productos a cargar:', PRODUCTOS_AMAZON.length);
  
  try {
    // Cargar productos migrados de Amazon
    let loadedCount = 0;
    PRODUCTOS_AMAZON.forEach(product => {
      const loadedProduct = ProductLoader.loadFromJSON(product);
      ProductLoader.registerProduct(loadedProduct);
      loadedCount++;
    });

    ProductLoader.setLoaded();
    console.log('%c✅ PRODUCTOS CARGADOS EXITOSAMENTE', 'background: #4ade80; color: black; font-size: 16px; padding: 5px 10px; border-radius: 5px;');
    console.log(`   📊 Total: ${PRODUCTOS_AMAZON.length} productos`);
    console.log(`   👨 Padres: ${productosPadres.length} productos`);
    console.log(`   👩 Madres: ${productosMadres.length} productos`);
    console.log(`   👧 Niñas: ${productosNinas.length} productos`);
    console.log(`   👦 Niños: ${productosNinos.length} productos`);
    console.log(`   🎯 Registrados en ProductLoader: ${loadedCount}`);
  } catch (error) {
    console.log('%c❌ ERROR AL CARGAR PRODUCTOS', 'background: #ef4444; color: white; font-size: 16px; padding: 5px 10px; border-radius: 5px;');
    console.error(error);
  }
};

// Exportar los productos para uso directo si es necesario
export { PRODUCTOS_AMAZON };
