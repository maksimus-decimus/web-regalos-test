const fs = require('fs');
const path = require('path');

/**
 * Script de migración automática de productos
 * Lee los JSONs de productos_afiliados._fotos y los convierte al nuevo formato SEO
 */

// Función para crear slug SEO-friendly
function createSlug(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
    .replace(/[^a-z0-9\s-]/g, '') // Eliminar caracteres especiales
    .trim()
    .replace(/\s+/g, '-') // Espacios a guiones
    .replace(/-+/g, '-') // Múltiples guiones a uno
    .substring(0, 60); // Limitar longitud
}

// Categorización automática basada en keywords del título
function categorizarProducto(titulo, descripcion) {
  const texto = `${titulo} ${descripcion.join(' ')}`.toLowerCase();
  
  // Mapeo de keywords a categorías SEO
  const categorias = {
    'padres-deportistas': ['deportivo', 'fitness', 'deporte', 'running', 'gimnasio', 'entrenamiento', 'ejercicio'],
    'padres-cerveceros': ['cerveza', 'beer', 'brew', 'cervecero', 'lúpulo'],
    'gadgets-padres': ['gadget', 'tecnología', 'usb', 'bluetooth', 'wireless', 'smart', 'digital', 'electrónico'],
    'padres-cocinitas': ['cocina', 'chef', 'cuchillo', 'sartén', 'barbacoa', 'bbq', 'grill', 'cocinar'],
    'regalos-personalizados': ['personalizado', 'grabado', 'nombre', 'dedicatoria', 'custom'],
    'padres-elegantes': ['elegante', 'corbata', 'gemelos', 'reloj', 'traje', 'formal', 'clásico'],
    'padres-frikis': ['gaming', 'videojuego', 'star wars', 'marvel', 'friki', 'geek', 'colección'],
    'regalos-baratos': [], // Se asignará por precio
    'mejores-regalos': [], // Categoría por defecto
  };
  
  // Buscar coincidencias
  for (const [categoria, keywords] of Object.entries(categorias)) {
    if (keywords.some(kw => texto.includes(kw))) {
      return categoria;
    }
  }
  
  return 'mejores-regalos'; // Por defecto
}

// Limpiar precio
function limpiarPrecio(precioStr) {
  const match = precioStr.match(/[\d,\.]+/);
  if (match) {
    return parseFloat(match[0].replace(',', '.'));
  }
  return 0;
}

// Función principal de migración
async function migrarProductos() {
  const categoriasDir = path.join(__dirname, '..', 'productos_afiliados._fotos');
  const outputDir = path.join(__dirname, '..', 'src', 'content', 'products');
  const publicImagesDir = path.join(__dirname, '..', 'public', 'images', 'productos');
  
  // Crear directorios si no existen
  if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
  }
  
  const categorias = ['afiliados_padres', 'afiliados_madres', 'afiliados_niños', 'afiliados_niñas'];
  const mapeoCategoria = {
    'afiliados_padres': { id: 2, nombre: 'Regalos para Padres', carpeta: 'padres' },
    'afiliados_madres': { id: 3, nombre: 'Regalos para Madres', carpeta: 'madres' },
    'afiliados_niños': { id: 4, nombre: 'Regalos para Niños', carpeta: 'ninos' },
    'afiliados_niñas': { id: 5, nombre: 'Regalos para Niñas', carpeta: 'ninas' },
  };
  
  let totalProductos = 0;
  let idCounter = 2000; // Empezar desde 2000 para no chocar con productos de ejemplo
  
  for (const categoria of categorias) {
    const categoriaPath = path.join(categoriasDir, categoria);
    const categoriaInfo = mapeoCategoria[categoria];
    
    if (!fs.existsSync(categoriaPath)) {
      console.log(`⚠️  Categoría no encontrada: ${categoria}`);
      continue;
    }
    
    // Crear carpeta de salida para esta categoría
    const outputCategoriaDir = path.join(outputDir, categoriaInfo.carpeta);
    if (!fs.existsSync(outputCategoriaDir)) {
      fs.mkdirSync(outputCategoriaDir, { recursive: true });
    }
    
    // Leer todos los archivos JSON de productos
    const archivos = fs.readdirSync(categoriaPath);
    const productosJSON = archivos.filter(f => f.startsWith('producto_') && f.endsWith('.json'));
    
    console.log(`\n📦 Procesando ${productosJSON.length} productos de ${categoria}...\n`);
    
    for (const archivoJSON of productosJSON) {
      try {
        const jsonPath = path.join(categoriaPath, archivoJSON);
        const productoOriginal = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
        
        // Obtener ASIN
        const asin = productoOriginal.id_producto;
        const carpetaProducto = path.join(categoriaPath, `producto_${asin}`);
        
        // Verificar que existe carpeta con imágenes
        if (!fs.existsSync(carpetaProducto)) {
          console.log(`⚠️  Sin carpeta de imágenes: ${asin}`);
          continue;
        }
        
        const imagenes = fs.readdirSync(carpetaProducto).filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i));
        
        if (imagenes.length === 0) {
          console.log(`⚠️  Sin imágenes: ${asin}`);
          continue;
        }
        
        // Copiar primera imagen a public/
        const imagenPrincipal = imagenes[0];
        const sourcePath = path.join(carpetaProducto, imagenPrincipal);
        const ext = path.extname(imagenPrincipal);
        const nuevoNombreImagen = `${asin}${ext}`;
        const destPath = path.join(publicImagesDir, nuevoNombreImagen);
        
        fs.copyFileSync(sourcePath, destPath);
        
        // Crear slug
        const slug = createSlug(productoOriginal.titulo);
        
        // Determinar categoría SEO
        const seoCategory = categorizarProducto(
          productoOriginal.titulo,
          productoOriginal.descripcion || []
        );
        
        // Limpiar precio
        const precio = limpiarPrecio(productoOriginal.precio);
        
        // Crear descripción
        const descripcion = Array.isArray(productoOriginal.descripcion)
          ? productoOriginal.descripcion.join(' ')
          : productoOriginal.descripcion || '';
        
        // Crear producto en nuevo formato
        const nuevoProducto = {
          id: idCounter++,
          slug: slug,
          title: productoOriginal.titulo,
          description: descripcion.substring(0, 500),
          price: precio,
          category: categoriaInfo.nombre,
          categoryId: categoriaInfo.id,
          seoCategory: seoCategory,
          image: `/images/productos/${nuevoNombreImagen}`,
          url: productoOriginal.url,
          featured: parseFloat(productoOriginal.puntuacion?.replace(',', '.') || 0) >= 4.5,
          metaTitle: `${productoOriginal.titulo.substring(0, 60)} | ${categoriaInfo.nombre}`,
          metaDescription: descripcion.substring(0, 160),
          keywords: [
            ...productoOriginal.titulo.toLowerCase().split(' ').filter(w => w.length > 4).slice(0, 3),
            categoriaInfo.carpeta,
            'regalo',
            'amazon'
          ],
          createdAt: new Date().toISOString(),
        };
        
        // Agregar puntuación si existe
        if (productoOriginal.puntuacion) {
          nuevoProducto.tag = `⭐ ${productoOriginal.puntuacion}`;
        }
        
        // Guardar como JSON
        const outputFileName = `${slug}.json`;
        const outputPath = path.join(outputCategoriaDir, outputFileName);
        fs.writeFileSync(outputPath, JSON.stringify(nuevoProducto, null, 2));
        
        totalProductos++;
        console.log(`✅ ${asin} → ${outputFileName}`);
        
      } catch (error) {
        console.error(`❌ Error procesando ${archivoJSON}:`, error.message);
      }
    }
  }
  
  console.log(`\n🎉 Migración completada: ${totalProductos} productos procesados\n`);
  console.log(`📁 Productos guardados en: src/content/products/`);
  console.log(`🖼️  Imágenes copiadas a: public/images/productos/`);
  console.log(`\n⚠️  Siguiente paso: Actualiza src/data/initProducts.ts para cargar estos productos\n`);
}

// Ejecutar migración
migrarProductos().catch(console.error);
