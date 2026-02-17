#!/usr/bin/env node

/**
 * Script de utilidad para validar productos antes de añadirlos
 * Uso: node validateProduct.js <archivo.json|archivo.md>
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Función simple de validación (sin Zod para Node puro)
function validateProduct(data, filename) {
  const errors = [];
  const warnings = [];

  // Validaciones obligatorias
  if (!data.id || typeof data.id !== 'number' || data.id <= 0) {
    errors.push('❌ id: debe ser un número positivo');
  }

  if (!data.slug || typeof data.slug !== 'string') {
    errors.push('❌ slug: es requerido');
  } else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.slug)) {
    errors.push('❌ slug: debe ser válido (solo minúsculas, números y guiones)');
  }

  if (!data.title || typeof data.title !== 'string') {
    errors.push('❌ title: es requerido');
  } else if (data.title.length < 3) {
    errors.push('❌ title: debe tener al menos 3 caracteres');
  } else if (data.title.length > 200) {
    errors.push('❌ title: no puede exceder 200 caracteres');
  }

  if (typeof data.price !== 'number' || data.price < 0) {
    errors.push('❌ price: debe ser un número mayor o igual a 0');
  }

  if (!data.category || typeof data.category !== 'string') {
    errors.push('❌ category: es requerido');
  }

  if (!data.categoryId || typeof data.categoryId !== 'number' || data.categoryId <= 0) {
    errors.push('❌ categoryId: debe ser un número positivo');
  }

  if (!data.seoCategory || typeof data.seoCategory !== 'string') {
    errors.push('❌ seoCategory: es requerido');
  }

  if (!data.image || typeof data.image !== 'string') {
    errors.push('❌ image: es requerido');
  } else if (!data.image.startsWith('http')) {
    errors.push('❌ image: debe ser una URL válida');
  }

  if (!data.url || typeof data.url !== 'string') {
    errors.push('❌ url: es requerido');
  } else if (!data.url.startsWith('http')) {
    errors.push('❌ url: debe ser una URL válida');
  }

  // Advertencias (campos opcionales pero recomendados)
  if (!data.description) {
    warnings.push('⚠️  description: recomendado para SEO');
  }

  if (!data.metaTitle) {
    warnings.push('⚠️  metaTitle: recomendado para SEO');
  }

  if (!data.metaDescription) {
    warnings.push('⚠️  metaDescription: recomendado para SEO');
  }

  if (!data.keywords || !Array.isArray(data.keywords) || data.keywords.length === 0) {
    warnings.push('⚠️  keywords: recomendado para SEO');
  }

  // Mostrar resultados
  console.log('\n' + '='.repeat(50));
  console.log(`Validando: ${filename}`);
  console.log('='.repeat(50) + '\n');

  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ ¡Producto válido! Sin errores ni advertencias.\n');
    return true;
  }

  if (errors.length > 0) {
    console.log('ERRORES CRÍTICOS:\n');
    errors.forEach(err => console.log(err));
    console.log('');
  }

  if (warnings.length > 0) {
    console.log('ADVERTENCIAS:\n');
    warnings.forEach(warn => console.log(warn));
    console.log('');
  }

  if (errors.length > 0) {
    console.log('❌ El producto NO puede usarse. Corrige los errores.\n');
    return false;
  } else {
    console.log('✅ El producto puede usarse, pero considera las advertencias.\n');
    return true;
  }
}

// Procesar argumentos
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(`
Uso: node validateProduct.js <archivo.json|archivo.md>

Ejemplos:
  node validateProduct.js src/content/products/padres/mi-producto.json
  node validateProduct.js src/content/products/padres/mi-producto.md
  `);
  process.exit(1);
}

const filePath = args[0];

if (!fs.existsSync(filePath)) {
  console.error(`\n❌ Error: El archivo "${filePath}" no existe.\n`);
  process.exit(1);
}

// Leer y parsear el archivo
try {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);
  let productData;

  if (filePath.endsWith('.json')) {
    productData = JSON.parse(fileContent);
  } else if (filePath.endsWith('.md')) {
    const parsed = matter(fileContent);
    productData = parsed.data;
  } else {
    console.error('\n❌ Error: Solo se admiten archivos .json o .md\n');
    process.exit(1);
  }

  const isValid = validateProduct(productData, filename);
  process.exit(isValid ? 0 : 1);

} catch (error) {
  console.error('\n❌ Error al procesar el archivo:', error.message, '\n');
  process.exit(1);
}
