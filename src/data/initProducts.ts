import { ProductLoader } from '../utils/productLoader';

// Productos de ejemplo hardcoded
// En producción, estos se cargarían desde los archivos Markdown/JSON
const SAMPLE_PRODUCTS = [
  {
    id: 1001,
    slug: 'reloj-smartwatch-deportivo',
    title: 'Reloj Smartwatch Deportivo con Monitor de Salud',
    description: 'El Smartwatch Deportivo perfecto para padres que aman mantenerse activos. Este reloj inteligente combina estilo, funcionalidad y tecnología.',
    price: 89.99,
    oldPrice: 129.99,
    discount: '-31%',
    category: 'Regalos para Padres',
    categoryId: 2,
    subcategory: 'Deportista',
    seoCategory: 'padres-deportistas',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600',
    url: 'https://www.amazon.es/dp/EJEMPLO123?tag=tusitioweb-21',
    tag: 'POPULAR',
    featured: true,
    metaTitle: 'Smartwatch Deportivo para Padre - Monitor Salud y Fitness',
    metaDescription: 'El regalo perfecto para padres activos. Smartwatch con monitor de frecuencia cardíaca, pasos, calorías y más.',
    keywords: ['smartwatch padre', 'reloj deportivo papá', 'monitor salud'],
    createdAt: new Date().toISOString(),
  },
  {
    id: 1002,
    slug: 'kit-cerveza-artesanal',
    title: 'Kit de Cervezas Artesanales del Mundo - Selección Premium',
    description: 'Colección exclusiva de 12 cervezas artesanales de diferentes países. El regalo perfecto para padres cerveceros que disfrutan explorando nuevos sabores.',
    price: 79.99,
    oldPrice: 99.99,
    discount: '-20%',
    category: 'Regalos para Padres',
    categoryId: 2,
    subcategory: 'Cervecero',
    seoCategory: 'padres-cerveceros',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600',
    url: 'https://www.amazon.es/dp/EJEMPLO456?tag=tusitioweb-21',
    tag: 'BESTSELLER',
    featured: true,
    metaTitle: 'Kit Cervezas Artesanales Premium - Regalo Padre Cervecero',
    metaDescription: 'Pack de 12 cervezas artesanales seleccionadas de todo el mundo. Incluye guía de cata.',
    keywords: ['kit cerveza artesanal', 'cervezas del mundo', 'regalo cervecero'],
    createdAt: new Date().toISOString(),
  },
  {
    id: 1003,
    slug: 'gadget-organizador-escritorio',
    title: 'Organizador de Escritorio Multifuncional con Carga Inalámbrica',
    description: 'Organización y tecnología en un solo producto. Este organizador de escritorio es el gadget ideal para padres que trabajan desde casa o en oficina.',
    price: 49.99,
    category: 'Regalos para Padres',
    categoryId: 2,
    subcategory: 'Gadget',
    seoCategory: 'gadgets-padres',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600',
    url: 'https://www.amazon.es/dp/EJEMPLO789?tag=tusitioweb-21',
    tag: 'NUEVO',
    featured: false,
    metaTitle: 'Organizador Escritorio con Carga Inalámbrica - Gadget Papá',
    metaDescription: 'Mantén el escritorio de papá organizado con este gadget multifuncional.',
    keywords: ['organizador escritorio', 'cargador inalámbrico', 'gadget oficina'],
    createdAt: new Date().toISOString(),
  },
  {
    id: 1004,
    slug: 'set-utensilios-barbacoa-profesional',
    title: 'Set de Utensilios para Barbacoa Profesional - 20 Piezas',
    description: 'Kit completo de utensilios premium para barbacoa. Incluye 20 piezas de acero inoxidable de alta calidad en maletín de aluminio.',
    price: 64.99,
    oldPrice: 89.99,
    discount: '-28%',
    category: 'Regalos para Padres',
    categoryId: 2,
    subcategory: 'Cocinero',
    seoCategory: 'padres-cocinitas',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
    url: 'https://www.amazon.es/dp/EJEMPLO321?tag=tusitioweb-21',
    tag: 'OFERTA',
    featured: true,
    metaTitle: 'Set Barbacoa Profesional 20 Piezas - Regalo Padre Cocinero',
    metaDescription: 'Kit completo para barbacoa con 20 utensilios profesionales.',
    keywords: ['set barbacoa', 'utensilios parrilla', 'regalo padre cocinero'],
    createdAt: new Date().toISOString(),
  },
  {
    id: 1005,
    slug: 'caja-regalo-personalizada-padre',
    title: 'Caja de Regalo Personalizada para Papá con Grabado',
    description: 'Caja de madera noble con grabado personalizado. Incluye espacio para accesorios, relojes y objetos valiosos.',
    price: 39.99,
    category: 'Regalos para Padres',
    categoryId: 2,
    subcategory: 'Personalizado',
    seoCategory: 'regalos-personalizados',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600',
    url: 'https://www.amazon.es/dp/EJEMPLO654?tag=tusitioweb-21',
    featured: true,
    metaTitle: 'Caja Regalo Personalizada con Grabado - Papa',
    metaDescription: 'Caja de madera noble con grabado personalizado para papá.',
    keywords: ['regalo personalizado', 'caja grabada', 'padre nombre'],
    createdAt: new Date().toISOString(),
  },
  {
    id: 1006,
    slug: 'libro-experiencias-padre-hijo',
    title: 'Libro de Experiencias: 60 Aventuras Padre e Hijo',
    description: 'Guía con 60 actividades y experiencias para compartir entre padre e hijo. Desde aventuras al aire libre hasta proyectos creativos.',
    price: 24.99,
    category: 'Regalos para Padres',
    categoryId: 2,
    subcategory: 'Experiencia',
    seoCategory: 'experiencias',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600',
    url: 'https://www.amazon.es/dp/EJEMPLO987?tag=tusitioweb-21',
    tag: 'EMOTIVO',
    featured: true,
    metaTitle: '60 Experiencias Padre e Hijo - Libro Actividades',
    metaDescription: 'Libro con 60 actividades y experiencias para compartir entre padre e hijo.',
    keywords: ['experiencias padre hijo', 'actividades papá', 'libro aventuras'],
    createdAt: new Date().toISOString(),
  },
];

/**
 * Inicializa el sistema de productos
 * Carga productos de ejemplo en el ProductLoader
 */
export const initializeProducts = () => {
  if (ProductLoader.isLoaded()) {
    console.log('Productos ya cargados');
    return;
  }

  console.log('Inicializando productos...');
  
  try {
    // Cargar productos de ejemplo
    SAMPLE_PRODUCTS.forEach(product => {
      const loadedProduct = ProductLoader.loadFromJSON(product);
      ProductLoader.registerProduct(loadedProduct);
    });

    ProductLoader.setLoaded();
    console.log(`✓ ${SAMPLE_PRODUCTS.length} productos cargados exitosamente`);
  } catch (error) {
    console.error('Error al inicializar productos:', error);
  }
};

// Exportar los productos para uso directo si es necesario
export { SAMPLE_PRODUCTS };
