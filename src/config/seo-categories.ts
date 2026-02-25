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
 * Categorías SEO para Niños
 * URLs: midominio.com/ninos/[slug-categoria]
 */
export const SEO_CATEGORIES_NINOS: SEOCategory[] = [
  {
    id: 'ninos-mejores-regalos',
    name: 'Regalos para Niños',
    slug: 'mejores-regalos-ninos',
    parent: 'ninos',
    icon: 'child_care',
    metaTitle: 'Los Mejores Regalos para Niños 2026 | Top Selección',
    metaDescription: 'Selección de los mejores regalos para niños. Ideas probadas que gustarán a cualquier niño.',
    keywords: ['regalos niños', 'regalos niño', 'regalo infantil'],
  },
  {
    id: 'ninos-10-anos',
    name: 'Regalos para niños de 10 años',
    slug: 'ninos-10-anos',
    parent: 'ninos',
    icon: 'cake',
    metaTitle: 'Regalos para Niños de 10 Años | Ideas Perfectas 2026',
    metaDescription: 'Los mejores regalos para niños de 10 años. Juguetes y gadgets perfectos para esta edad.',
    keywords: ['regalo niño 10 años', 'juguetes 10 años', 'regalos diez años'],
  },
  {
    id: 'juguetes-educativos',
    name: 'Juguetes educativos para niños',
    slug: 'juguetes-educativos',
    parent: 'ninos',
    icon: 'school',
    metaTitle: 'Juguetes Educativos para Niños | Aprende Jugando 2026',
    metaDescription: 'Los mejores juguetes educativos para niños. Aprenden mientras se divierten.',
    keywords: ['juguetes educativos', 'aprendizaje niños', 'juguetes didácticos'],
  },
  {
    id: 'ninos-regalos-originales',
    name: 'Regalos originales para niños',
    slug: 'regalos-originales-ninos',
    parent: 'ninos',
    icon: 'redeem',
    metaTitle: 'Regalos Originales para Niños | Ideas Únicas 2026',
    metaDescription: 'Descubre regalos originales y únicos para niños. Ideas sorprendentes que no encontrarás en cualquier tienda.',
    keywords: ['regalos originales niños', 'regalo único niño', 'ideas originales infantil'],
  },
  {
    id: 'ninos-5-anos',
    name: 'Qué regalar a un niño de 5 años',
    slug: 'ninos-5-anos',
    parent: 'ninos',
    icon: 'looks_5',
    metaTitle: '¿Qué Regalar a un Niño de 5 Años? | Ideas 2026',
    metaDescription: 'Los mejores regalos para niños de 5 años. Juguetes divertidos y educativos para esta etapa.',
    keywords: ['regalo niño 5 años', 'juguetes 5 años', 'regalos cinco años'],
  },
  {
    id: 'ninos-8-anos',
    name: 'Regalos para niños de 8 años',
    slug: 'ninos-8-anos',
    parent: 'ninos',
    icon: 'looks_8',
    metaTitle: 'Regalos para Niños de 8 Años | Selección 2026',
    metaDescription: 'Ideas de regalos perfectas para niños de 8 años. Juguetes, juegos y actividades para su edad.',
    keywords: ['regalo niño 8 años', 'juguetes 8 años', 'regalos ocho años'],
  },
  {
    id: 'juguetes-construccion',
    name: 'Juguetes de construcción para niños',
    slug: 'juguetes-construccion',
    parent: 'ninos',
    icon: 'construction',
    metaTitle: 'Juguetes de Construcción para Niños | LEGO y Más 2026',
    metaDescription: 'Los mejores juguetes de construcción para niños. Bloques, LEGO y magnéticos que desarrollan la creatividad.',
    keywords: ['juguetes construccion', 'bloques niños', 'lego regalo'],
  },
  {
    id: 'ninos-comunion',
    name: 'Regalos para niños comunión',
    slug: 'comunion',
    parent: 'ninos',
    icon: 'church',
    metaTitle: 'Regalos para Primera Comunión | Ideas Especiales 2026',
    metaDescription: 'Regalos perfectos para la Primera Comunión de un niño. Ideas especiales y significativas.',
    keywords: ['regalo comunion niño', 'primera comunion', 'regalo especial niño ciudad'],
  },
  {
    id: 'juegos-mesa-ninos',
    name: 'Juegos de mesa para niños 6 años',
    slug: 'juegos-mesa',
    parent: 'ninos',
    icon: 'casino',
    metaTitle: 'Juegos de Mesa para Niños de 6 Años | Top 2026',
    metaDescription: 'Los mejores juegos de mesa para niños de 6 años. Diversión en familia y en grupo.',
    keywords: ['juegos de mesa niños', 'juego mesa 6 años', 'juego familiar infantil'],
  },
  {
    id: 'ninos-dinosaurios',
    name: 'Regalos para niños que aman los dinosaurios',
    slug: 'dinosaurios',
    parent: 'ninos',
    icon: 'cruelty_free',
    metaTitle: 'Regalos de Dinosaurios para Niños | Ideas 2026',
    metaDescription: 'Regalos perfectos para niños amantes de los dinosaurios. Juguetes, libros y actividades temáticas.',
    keywords: ['regalo dinosaurios niño', 'juguetes dinosaurio', 'niño dinosaurios'],
  },
  {
    id: 'robots-ninos',
    name: 'Robots para niños regalar',
    slug: 'robots',
    parent: 'ninos',
    icon: 'smart_toy',
    metaTitle: 'Robots para Niños | Los Mejores para Regalar 2026',
    metaDescription: 'Los mejores robots educativos y de juguete para niños. Aprenden programación y robótica jugando.',
    keywords: ['robots niños', 'robot educativo', 'regalo robot infantil'],
  },
  {
    id: 'ninos-deportivo',
    name: 'Regalos deportivos para niños',
    slug: 'deportivo',
    parent: 'ninos',
    icon: 'sports_soccer',
    metaTitle: 'Regalos Deportivos para Niños | Activos y Sanos 2026',
    metaDescription: 'Regalos deportivos para niños activos. Bicicletas, patinetes y material deportivo.',
    keywords: ['regalos deportivos ninos', 'bicicleta niño', 'deporte infantil'],
  },
  {
    id: 'ciencia-ninos',
    name: 'Kits de ciencia para niños',
    slug: 'ciencia',
    parent: 'ninos',
    icon: 'science',
    metaTitle: 'Kits de Ciencia para Niños | Experimentos 2026',
    metaDescription: 'Los mejores kits de ciencia y experimentos para niños curiosos. Aprenden ciencia de forma divertida.',
    keywords: ['kit ciencia niños', 'experimentos niño', 'regalos científicos infantil'],
  },
  {
    id: 'ninos-reyes',
    name: 'Regalos de Reyes para niños',
    slug: 'reyes',
    parent: 'ninos',
    icon: 'star',
    metaTitle: 'Regalos de Reyes Magos para Niños 2026',
    metaDescription: 'Los mejores regalos de Reyes Magos para niños. Ideas mágicas para el 6 de enero.',
    keywords: ['reyes magos niños', '6 enero regalo niño', 'regalos reyes infantil'],
  },
  {
    id: 'ninos-exterior',
    name: 'Juguetes para exterior niños',
    slug: 'exterior',
    parent: 'ninos',
    icon: 'park',
    metaTitle: 'Juguetes para Exterior para Niños | Aire Libre 2026',
    metaDescription: 'Los mejores juguetes para exterior para niños. Actividades y juegos al aire libre.',
    keywords: ['juguetes exterior niños', 'juegos aire libre niño', 'bicicleta patinete'],
  },
  {
    id: 'ninos-12-anos',
    name: 'Regalos para niños de 12 años',
    slug: 'ninos-12-anos',
    parent: 'ninos',
    icon: 'cake',
    metaTitle: 'Regalos para Niños de 12 Años | Ideas 2026',
    metaDescription: 'Los mejores regalos para niños de 12 años. Tecnología, gadgets y juguetes para preadolescentes.',
    keywords: ['regalo niño 12 años', 'juguetes 12 años', 'preadolescente regalo'],
  },
  {
    id: 'tecnologico-ninos',
    name: 'Regalos tecnológicos para niños',
    slug: 'tecnologico',
    parent: 'ninos',
    icon: 'devices',
    metaTitle: 'Regalos Tecnológicos para Niños | Gadgets 2026',
    metaDescription: 'Los mejores regalos tecnológicos para niños. Cámaras, tablets y gadgets educativos.',
    keywords: ['regalos tecnologicos niños', 'gadgets niño', 'tecnologia infantil'],
  },
  {
    id: 'stem-ninos',
    name: 'Juguetes STEM España',
    slug: 'stem',
    parent: 'ninos',
    icon: 'calculate',
    metaTitle: 'Juguetes STEM para Niños España | Ciencia y Tecnología 2026',
    metaDescription: 'Los mejores juguetes STEM para niños en España. Ciencia, tecnología, ingeniería y matemáticas jugando.',
    keywords: ['juguetes stem españa', 'stem niños', 'regalo stem infantil'],
  },
  {
    id: 'creativos-ninos',
    name: 'Regalos para niños creativos',
    slug: 'creativos',
    parent: 'ninos',
    icon: 'palette',
    metaTitle: 'Regalos para Niños Creativos | Arte y Manualidades 2026',
    metaDescription: 'Regalos perfectos para niños creativos. Kits de arte, costura, pintura y manualidades.',
    keywords: ['regalos niños creativos', 'manualidades niño', 'arte infantil'],
  },
  {
    id: 'disfraces-ninos',
    name: 'Disfraces originales para niños',
    slug: 'disfraces',
    parent: 'ninos',
    icon: 'theater_comedy',
    metaTitle: 'Disfraces Originales para Niños | Ideas 2026',
    metaDescription: 'Los disfraces más originales para niños. Superhéroes, animales y fantasía para Carnaval y Halloween.',
    keywords: ['disfraces originales niños', 'disfraz niño', 'halloween carnaval infantil'],
  },
  {
    id: 'baratos-cumpleanos-ninos',
    name: 'Regalos baratos para cumpleaños niños',
    slug: 'baratos-cumpleanos',
    parent: 'ninos',
    icon: 'savings',
    metaTitle: 'Regalos Baratos para Cumpleaños de Niños | Económicos 2026',
    metaDescription: 'Regalos económicos pero geniales para cumpleaños de niños. Ideas con precio reducido.',
    keywords: ['regalos baratos cumpleanos niño', 'regalo economico niño', 'barato cumpleaños infantil'],
  },
];

/**
 * Mapa de categorías por slug para búsqueda rápida
 */
export const SEO_CATEGORIES_MAP = new Map<string, SEOCategory>([
  ...SEO_CATEGORIES_PADRES.map(cat => [cat.slug, cat] as [string, SEOCategory]),
  ...SEO_CATEGORIES_NINOS.map(cat => [cat.slug, cat] as [string, SEOCategory]),
]);

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
  return [...SEO_CATEGORIES_PADRES, ...SEO_CATEGORIES_NINOS].map(cat => cat.slug);
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
