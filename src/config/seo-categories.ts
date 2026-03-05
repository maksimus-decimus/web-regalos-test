import slugify from 'slugify';

export interface SEOCategory {
  id: string;
  name: string;
  slug: string;
  parent: 'padres' | 'madres' | 'ninos' | 'ninas' | 'tecnologia' | 'general';
  icon?: string; // Material Symbols icon name
  description?: string; // Descripción breve para cards
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

/**
 * Genera un slug SEO-friendly
 * Limpia caracteres especiales y mal codificados
 */
export const createSlug = (text: string): string => {
  // Primero intentar con slugify
  let slug = slugify(text, {
    lower: true,
    strict: true,
    locale: 'es',
    remove: /[*+~.()'"!:@]/g,
  });
  
  // Limpiar caracteres inválidos que slugify no pudo procesar
  // Esto elimina caracteres mal codificados UTF-8 como Ã, º, etc.
  slug = slug
    .normalize('NFD') // Normalizar para separar caracteres con acentos
    .replace(/[\u0300-\u036f]/g, '') // Eliminar marcas diacríticas
    .replace(/[^a-z0-9-]/g, '') // Eliminar cualquier cosa que no sea a-z, 0-9 o guión
    .replace(/-+/g, '-') // Reemplazar múltiples guiones con uno solo
    .replace(/^-|-$/g, ''); // Eliminar guiones al inicio y al final
  
  // Truncar si es muy largo (máximo 60 caracteres)
  if (slug.length > 60) {
    slug = slug.substring(0, 60).replace(/-[^-]*$/, ''); // Cortar en el último guión
  }
  
  return slug;
};

/**
 * Categorías SEO para Padres
 * Estas categorías se usarán en las URLs: midominio.com/padres/[slug-del-producto]
 */
export const SEO_CATEGORIES_PADRES: SEOCategory[] = [
  {
    id: 'padres-originales',
    name: 'Regalos para padres originales',
    slug: 'regalos-originales',
    parent: 'padres',
    icon: 'redeem',
    metaTitle: 'Regalos Originales para Padres 2026 | Ideas Únicas',
    metaDescription: 'Descubre regalos originales y únicos para padres. Ideas sorprendentes que no encontrarás en cualquier tienda.',
    keywords: ['regalos originales padres', 'ideas únicas papá', 'regalo especial padre'],
  },
  {
    id: 'padres-tiene-todo',
    name: 'Qué regalar a un padre que tiene de todo',
    slug: 'padre-que-tiene-todo',
    parent: 'padres',
    icon: 'psychology',
    metaTitle: '¿Qué Regalar a un Padre que Tiene de Todo? Ideas 2026',
    metaDescription: 'Encuentra el regalo perfecto para ese padre que parece tenerlo todo. Ideas innovadoras y sorprendentes.',
    keywords: ['padre tiene todo', 'regalo difícil papá', 'ideas complicadas'],
  },
  {
    id: 'padres-personalizados',
    name: 'Regalos personalizados para padres',
    slug: 'regalos-personalizados',
    parent: 'padres',
    icon: 'edit',
    metaTitle: 'Regalos Personalizados para Padres | Únicos y Emotivos',
    metaDescription: 'Regalos personalizados con nombres, dedicatorias y diseños exclusivos para papá.',
    keywords: ['regalos personalizados padres', 'regalo con nombre papá', 'personalizado padre'],
  },
  {
    id: 'padres-primerizos',
    name: 'Detalles para padres primerizos',
    slug: 'padres-primerizos',
    parent: 'padres',
    icon: 'child_care',
    metaTitle: 'Regalos para Padres Primerizos | Ideas Prácticas 2026',
    metaDescription: 'Los mejores regalos para papás primerizos. Ideas útiles y emotivas para esta nueva etapa.',
    keywords: ['padre primerizo regalo', 'nuevo papá', 'primer hijo'],
  },
  {
    id: 'padres-50-anos',
    name: 'Regalos para padres de 50 años',
    slug: 'padres-50-anos',
    parent: 'padres',
    icon: 'cake',
    metaTitle: 'Regalos para Padres de 50 Años | Ideas Especiales',
    metaDescription: 'Regalos perfectos para celebrar los 50 años de papá. Ideas elegantes y significativas.',
    keywords: ['50 años papá', 'cincuenta padre', 'regalos medio siglo'],
  },
  {
    id: 'padres-60-anos',
    name: 'Regalos para padres de 60 años',
    slug: 'padres-60-anos',
    parent: 'padres',
    icon: 'celebration',
    metaTitle: 'Regalos para Padres de 60 Años | Selección Premium',
    metaDescription: 'Ideas especiales para padres de 60 años. Regalos que apreciarán en esta etapa de la vida.',
    keywords: ['60 años papá', 'sesenta padre', 'regalos senior'],
  },
  {
    id: 'padres-navidad',
    name: 'Ideas regalo padre Navidad',
    slug: 'regalos-navidad',
    parent: 'padres',
    icon: 'gif',
    metaTitle: 'Ideas de Regalos de Navidad para Padres 2026',
    metaDescription: 'Los mejores regalos de Navidad para papá. Ideas festivas y especiales para estas fiestas.',
    keywords: ['Navidad padre', 'regalo papá Navidad', 'ideas festivas'],
  },
  {
    id: 'padres-jubilados',
    name: 'Regalos para padres jubilados',
    slug: 'padres-jubilados',
    parent: 'padres',    icon: 'chair',    metaTitle: 'Regalos para Padres Jubilados | Disfruta la Nueva Etapa',
    metaDescription: 'Regalos perfectos para padres jubilados. Ideas para disfrutar del tiempo libre.',
    keywords: ['padre jubilado', 'regalo jubilación papá', 'retiro padre'],
  },
  {
    id: 'padres-deportistas',
    name: 'Regalos para padres deportistas',
    slug: 'padres-deportistas',
    parent: 'padres',
    icon: 'fitness_center',
    metaTitle: 'Regalos para Padres Deportistas | Activos y Saludables',
    metaDescription: 'Regalos ideales para padres activos y deportistas. Equipamiento y accesorios para entrenar.',
    keywords: ['padre deportista', 'papá fitness', 'regalo deporte'],
  },
  {
    id: 'kits-hombres',
    name: 'Kits de regalo para hombres',
    slug: 'kits-regalo-hombres',
    parent: 'padres',
    icon: 'inventory_2',
    metaTitle: 'Kits de Regalo para Hombres | Sets Completos 2026',
    metaDescription: 'Kits y sets de regalo completos para hombres. Packs temáticos perfectamente curados.',
    keywords: ['kit regalo hombre', 'set papá', 'pack regalo'],
  },
  {
    id: 'padres-frikis',
    name: 'Regalos para padres frikis',
    slug: 'padres-frikis',
    parent: 'padres',
    icon: 'sports_esports',
    metaTitle: 'Regalos para Padres Frikis | Geek y Pop Culture',
    metaDescription: 'Regalos frikis para padres amantes de la cultura geek, videojuegos, películas y series.',
    keywords: ['padre friki', 'papá geek', 'regalo nerd'],
  },
  {
    id: 'experiencias-padre',
    name: 'Experiencias para regalar a un padre',
    slug: 'experiencias',
    parent: 'padres',
    icon: 'hiking',
    metaTitle: 'Experiencias para Regalar a un Padre | Momentos Únicos',
    metaDescription: 'Regala experiencias inolvidables a papá. Aventuras, talleres y momentos especiales.',
    keywords: ['experiencia padre', 'vivencia papá', 'regalo experiencial'],
  },
  {
    id: 'mejores-regalos-papa',
    name: 'Mejores regalos para papá',
    slug: 'mejores-regalos',
    parent: 'padres',
    icon: 'star',
    metaTitle: 'Los Mejores Regalos para Papá 2026 | Top Selección',
    metaDescription: 'Nuestra selección de los mejores regalos para papá. Ideas probadas y más populares.',
    keywords: ['mejores regalos padre', 'top papá', 'más vendidos'],
  },
  {
    id: 'padres-elegantes',
    name: 'Regalos para padres elegantes',
    slug: 'padres-elegantes',
    parent: 'padres',
    icon: 'checkroom',
    metaTitle: 'Regalos Elegantes para Padres | Sofisticación y Estilo',
    metaDescription: 'Regalos elegantes y sofisticados para padres con estilo. Selección premium y distinguida.',
    keywords: ['padre elegante', 'regalo sofisticado', 'papá con estilo'],
  },
  {
    id: 'padres-cerveceros',
    name: 'Regalos para padres cerveceros',
    slug: 'padres-cerveceros',
    parent: 'padres',
    icon: 'sports_bar',
    metaTitle: 'Regalos para Padres Cerveceros | Amantes de la Cerveza',
    metaDescription: 'Regalos perfectos para padres amantes de la cerveza. Accesorios y experiencias cerveceras.',
    keywords: ['padre cervecero', 'regalo cerveza', 'papá beer'],
  },
  {
    id: 'gadgets-padres',
    name: 'Gadgets para padres',
    slug: 'gadgets',
    parent: 'padres',
    icon: 'devices',
    metaTitle: 'Gadgets para Padres | Tecnología y Innovación 2026',
    metaDescription: 'Los mejores gadgets y dispositivos tecnológicos para padres. Innovación y funcionalidad.',
    keywords: ['gadget padre', 'dispositivo papá', 'tech regalo'],
  },
  {
    id: 'padres-cocinitas',
    name: 'Regalos para padres cocinitas',
    slug: 'padres-cocinitas',
    parent: 'padres',
    icon: 'restaurant',
    metaTitle: 'Regalos para Padres Cocinitas | Chef en Casa',
    metaDescription: 'Regalos ideales para padres amantes de la cocina. Utensilios, gadgets y accesorios culinarios.',
    keywords: ['padre cocinero', 'papá chef', 'regalo cocina'],
  },
  {
    id: 'padres-baratos',
    name: 'Regalos baratos para padres',
    slug: 'regalos-baratos',
    parent: 'padres',
    icon: 'savings',
    metaTitle: 'Regalos Baratos para Padres | Económicos pero Especiales',
    metaDescription: 'Regalos económicos pero con gran valor para papá. Buenas ideas sin gastar mucho.',
    keywords: ['regalo barato padre', 'económico papá', 'low cost'],
  },
  {
    id: 'padres-ultima-hora',
    name: 'Regalos de última hora para padres',
    slug: 'ultima-hora',
    parent: 'padres',
    icon: 'schedule',
    metaTitle: 'Regalos de Última Hora para Padres | Entrega Rápida',
    metaDescription: 'Regalos de última hora con entrega rápida para papá. Soluciones express que impresionan.',
    keywords: ['regalo urgente padre', 'última hora papá', 'entrega rápida'],
  },
  {
    id: 'padres-manualidades',
    name: 'Regalos para padres manualidades (DIY)',
    slug: 'manualidades-diy',
    parent: 'padres',
    icon: 'handyman',
    metaTitle: 'Regalos DIY para Padres | Manualidades Hechas a Mano',
    metaDescription: 'Ideas de regalos DIY y manualidades para crear tú mismo para papá. Regalos únicos hechos con amor.',
    keywords: ['DIY padre', 'manualidad papá', 'hecho a mano'],
  },
];

/**
 * Categorías SEO para Madres
 * Estas categorías se usarán en las URLs: midominio.com/madres/[slug-del-producto]
 */
export const SEO_CATEGORIES_MADRES: SEOCategory[] = [
  {
    id: 'madres-emocion-utilidad',
    name: 'Enfocado en emoción y utilidad',
    slug: 'emocion-utilidad',
    parent: 'madres',
    icon: 'favorite',
    metaTitle: 'Regalos para Mamá | Emoción y Utilidad 2026',
    metaDescription: 'Regalos que combinan lo emocional con lo práctico. Perfectos para mamá.',
    keywords: ['regalos mamá emocionales', 'regalo útil mamá', 'regalo práctico madre'],
  },
  {
    id: 'madres-originales',
    name: 'Regalos para madres originales',
    slug: 'regalos-originales',
    parent: 'madres',
    icon: 'redeem',
    metaTitle: 'Regalos Originales para Madres 2026 | Ideas Únicas',
    metaDescription: 'Descubre regalos originales y únicos para mamá. Ideas sorprendentes que no encontrarás en cualquier tienda.',
    keywords: ['regalos originales mamá', 'ideas únicas madre', 'regalo especial para mamá'],
  },
  {
    id: 'madres-dia-madre',
    name: 'Ideas regalo día de la madre España',
    slug: 'dia-madre-espana',
    parent: 'madres',
    icon: 'favorite',
    metaTitle: 'Regalos Día de la Madre España 2026 | Ideas Especiales',
    metaDescription: 'Las mejores ideas de regalo para el Día de la Madre. Celebra a mamá con algo especial.',
    keywords: ['día madre España', 'regalo día madre', 'regalos mamá mayo'],
  },
  {
    id: 'madres-cumpleanos',
    name: 'Qué regalar a una madre por su cumpleaños',
    slug: 'regalo-cumpleanos',
    parent: 'madres',
    icon: 'cake',
    metaTitle: 'Regalos para el Cumpleaños de Mamá | Ideas Perfectas',
    metaDescription: 'Encuentra el regalo ideal para el cumpleaños de tu madre. Ideas que la sorprenderán.',
    keywords: ['regalo cumpleaños mamá', 'cumpleaños madre', 'regalos especiales mamá'],
  },
  {
    id: 'madres-personalizados',
    name: 'Regalos personalizados para madres',
    slug: 'personalizados',
    parent: 'madres',
    icon: 'edit',
    metaTitle: 'Regalos Personalizados para Madres | Únicos y Emotivos',
    metaDescription: 'Regalos personalizados con nombres, dedicatorias y diseños exclusivos para mamá.',
    keywords: ['regalos personalizados mamá', 'regalo con nombre madre', 'personalizado mamá'],
  },
  {
    id: 'madres-primerizas',
    name: 'Detalles para madres primerizas',
    slug: 'primerizas',
    parent: 'madres',
    icon: 'child_care',
    metaTitle: 'Regalos para Madres Primerizas | Ideas Prácticas 2026',
    metaDescription: 'Los mejores regalos para mamás primerizas. Ideas útiles y emotivas para esta nueva etapa.',
    keywords: ['madre primeriza regalo', 'nueva mamá', 'primer hijo'],
  },
  {
    id: 'madres-50-anos',
    name: 'Regalos para madres de 50 años',
    slug: 'madres-50-anos',
    parent: 'madres',
    icon: 'celebration',
    metaTitle: 'Regalos para Madres de 50 Años | Ideas Especiales',
    metaDescription: 'Regalos perfectos para celebrar los 50 años de mamá. Ideas elegantes y significativas.',
    keywords: ['50 años mamá', 'cincuenta madre', 'regalos medio siglo'],
  },
  {
    id: 'madres-joyas',
    name: 'Joyas para regalar a una madre',
    slug: 'joyas',
    parent: 'madres',
    icon: 'diamond',
    metaTitle: 'Joyas para Regalar a Mamá | Elegancia y Belleza',
    metaDescription: 'Joyas elegantes y sofisticadas para mamá. Regalos que trascienden el tiempo.',
    keywords: ['joyas mamá', 'joyas madre', 'regalo joyas mamá'],
  },
  {
    id: 'madres-no-quieren-nada',
    name: 'Regalos para madres que no quieren nada',
    slug: 'que-no-quieren-nada',
    parent: 'madres',
    icon: 'psychology',
    metaTitle: 'Regalos para Madres que No Quieren Nada | Ideas 2026',
    metaDescription: 'Encuentra el regalo perfecto para esa madre que parece tenerlo todo. Ideas innovadoras.',
    keywords: ['madre tiene todo', 'regalo difícil mamá', 'ideas complicadas'],
  },
  {
    id: 'madres-cestas-regalo',
    name: 'Cestas de regalo para madres',
    slug: 'cestas-regalo',
    parent: 'madres',
    icon: 'shopping_basket',
    metaTitle: 'Cestas de Regalo para Madres | Packs Completos 2026',
    metaDescription: 'Cestas de regalo curadas perfectamente para mamá. Packs temáticos y elegantes.',
    keywords: ['cesta regalo mamá', 'canasta mamá', 'pack regalo madre'],
  },
  {
    id: 'madres-jovenes',
    name: 'Regalos para madres jóvenes',
    slug: 'madres-jovenes',
    parent: 'madres',
    icon: 'trending_up',
    metaTitle: 'Regalos para Madres Jóvenes | Modernos y Frescos 2026',
    metaDescription: 'Regalos modernos y frescos para mamás jóvenes. Ideas actuales y trendy.',
    keywords: ['madre joven regalo', 'mamá joven', 'regalos modernas'],
  },
  {
    id: 'madres-con-foto',
    name: 'Regalos con foto para madres',
    slug: 'con-foto',
    parent: 'madres',
    icon: 'photo_camera',
    metaTitle: 'Regalos Con Foto para Madres | Recuerdos Personalizados',
    metaDescription: 'Regalos personalizados con tus fotos favoritas. Recuerdos especiales para mamá.',
    keywords: ['regalo foto mamá', 'regalos personalizados foto', 'recuerdos madre'],
  },
  {
    id: 'madres-bienestar',
    name: 'Regalos de bienestar para madres',
    slug: 'bienestar',
    parent: 'madres',
    icon: 'spa',
    metaTitle: 'Regalos de Bienestar para Madres | Relax y Salud',
    metaDescription: 'Regalos para el bienestar y relajación de mamá. Cuida su salud y felicidad.',
    keywords: ['regalos bienestar mamá', 'regalo spa madre', 'relajación mamá'],
  },
  {
    id: 'madres-trabajadoras',
    name: 'Regalos para madres trabajadoras',
    slug: 'trabajadoras',
    parent: 'madres',
    icon: 'work',
    metaTitle: 'Regalos para Madres Trabajadoras | Apoyo y Equilibrio',
    metaDescription: 'Regalos prácticos para mamás que trabajan. Ideas que facilitan su día a día.',
    keywords: ['madre trabajadora regalo', 'mamá profesional', 'regalo mamá trabajadora'],
  },
  {
    id: 'madres-viajeras',
    name: 'Regalos para madres viajeras',
    slug: 'viajeras',
    parent: 'madres',
    icon: 'luggage',
    metaTitle: 'Regalos para Madres Viajeras | Aventuras y Comodidad',
    metaDescription: 'Regalos ideales para mamás aventureras. Accesorios y gadgets para viajar.',
    keywords: ['madre viajera regalo', 'mamá viajes', 'regalo viajera'],
  },
  {
    id: 'madres-kits-cuidado',
    name: 'Kits de cuidado personal para madres',
    slug: 'kits-cuidado-personal',
    parent: 'madres',
    icon: 'inventory_2',
    metaTitle: 'Kits de Cuidado Personal para Madres | Sets Completos',
    metaDescription: 'Kits de belleza y cuidado personal para mamá. Packs curados con los mejores productos.',
    keywords: ['kit cuidado mamá', 'set belleza madre', 'pack cuidado personal'],
  },
  {
    id: 'madres-70-anos',
    name: 'Regalos para madres de 70 años',
    slug: 'madres-70-anos',
    parent: 'madres',
    icon: 'celebration',
    metaTitle: 'Regalos para Madres de 70 Años | Selección Premium',
    metaDescription: 'Ideas especiales para mamás de 70 años. Regalos que apreciarán en esta etapa de la vida.',
    keywords: ['70 años mamá', 'mamá setenta', 'regalos senior'],
  },
  {
    id: 'madres-navidad',
    name: 'Mejores regalos para mamá Navidad',
    slug: 'navidad',
    parent: 'madres',
    icon: 'gif',
    metaTitle: 'Mejores Regalos para Mamá Navidad 2026',
    metaDescription: 'Los mejores regalos navideños para mamá. Ideas festivas y especiales para estas fiestas.',
    keywords: ['Navidad mamá', 'regalo mamá Navidad', 'ideas festivas madre'],
  },
  {
    id: 'madres-modernos',
    name: 'Regalos para madres modernos',
    slug: 'modernos',
    parent: 'madres',
    icon: 'auto_awesome',
    metaTitle: 'Regalos Modernos para Madres | Tecnología y Estilo 2026',
    metaDescription: 'Regalos modernos y tecnológicos para mamá. Ideas actuales que la sorprenderán.',
    keywords: ['regalos modernos mamá', 'madre tech', 'regalo actual'],
  },
  {
    id: 'madres-lectoras',
    name: 'Regalos para madres amantes de la lectura',
    slug: 'amantes-lectura',
    parent: 'madres',
    icon: 'menu_book',
    metaTitle: 'Regalos para Madres Amantes de la Lectura | Libros y Accesorios',
    metaDescription: 'Regalos ideales para mamás que disfrutan leyendo. Libros y accesorios para lectoras.',
    keywords: ['madre lectora regalo', 'mamá libros', 'regalo amante lectura'],
  },
  {
    id: 'madres-emotivos',
    name: 'Detalles emotivos para madres',
    slug: 'emotivos',
    parent: 'madres',
    icon: 'favorite',
    metaTitle: 'Detalles Emotivos para Madres | Regalos Sentimentales 2026',
    metaDescription: 'Detalles emotivos y sentimentales para mamá. Regalos que tocan el corazón.',
    keywords: ['detalles emotivos mamá', 'regalos sentimentales madre', 'regalo del corazón'],
  },
];

/**
 * Mapa de categorías por slug para búsqueda rápida
 */
export const SEO_CATEGORIES_MAP = new Map<string, SEOCategory>(
  [...SEO_CATEGORIES_PADRES, ...SEO_CATEGORIES_MADRES].map(cat => [cat.slug, cat])
);

/**
 * Obtener categoría SEO por slug
 */
export const getSEOCategoryBySlug = (slug: string): SEOCategory | undefined => {
  return SEO_CATEGORIES_MAP.get(slug);
};

/**
 * Obtener todos los slugs de categorías SEO
 */
export const getAllSEOCategorySlugs = (): string[] => {
  return [...SEO_CATEGORIES_PADRES.map(cat => cat.slug), ...SEO_CATEGORIES_MADRES.map(cat => cat.slug)];
};

/**
 * Generar URL semántica para un producto
 */
export const generateProductURL = (
  parentCategory: string,
  seoCategory: string,
  productSlug: string
): string => {
  return `/${parentCategory}/${seoCategory}/${productSlug}`;
};
