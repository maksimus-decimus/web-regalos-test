# Guía de Migración al Nuevo Sistema SEO

Esta guía te ayudará a migrar tus productos existentes al nuevo sistema de gestión de contenido con URLs semánticas.

## 📋 Estado Actual

Actualmente, los productos están definidos en `constants.ts` como un array estático. Ejemplo:

```typescript
export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Producto ejemplo",
    price: 49.99,
    category: "Regalos para Padres",
    image: "...",
    url: "..."
  },
  // ...más productos
];
```

## 🎯 Sistema Nuevo

El nuevo sistema usa:
- ✅ Archivos Markdown o JSON individuales por producto
- ✅ Validación automática con Zod
- ✅ URLs semánticas: `/padres/categoria-seo/slug-producto`
- ✅ Categorías SEO optimizadas (20 categorías para padres)
- ✅ Metadatos SEO incorporados

## 🔄 Proceso de Migración

### Paso 1: Preparar los datos

Ejecuta este script para convertir tus productos actuales:

```typescript
// scripts/migrateProducts.ts
import { PRODUCTS } from '../constants';
import { createSlug } from '../src/config/seo-categories';
import fs from 'fs';
import path from 'path';

// Mapeo de categorías antiguas a nuevas categorías SEO
const categoryMapping = {
  'Deportista': 'padres-deportistas',
  'Cervecero': 'padres-cerveceros',
  'Cocinero': 'padres-cocinitas',
  'Gadget': 'gadgets-padres',
  'Personalizado': 'regalos-personalizados',
  'Experiencia': 'experiencias',
  // ...añade más según tus necesidades
};

PRODUCTS.forEach(product => {
  // Generar slug desde el título
  const slug = product.slug || createSlug(product.title);
  
  // Determinar categoría SEO
  const seoCategory = product.subcategory 
    ? categoryMapping[product.subcategory] || 'mejores-regalos'
    : 'mejores-regalos';
  
  // Crear objeto del producto nuevo
  const newProduct = {
    id: product.id,
    slug,
    title: product.title,
    description: product.description || '',
    price: product.price,
    oldPrice: product.oldPrice,
    discount: product.discount,
    category: product.category,
    categoryId: product.categoryId || 2,
    subcategory: product.subcategory,
    seoCategory,
    image: product.image,
    url: product.url,
    tag: product.tag,
    featured: Boolean(product.tag),
    metaTitle: `${product.title} | Regalos para Padres`,
    metaDescription: product.description?.substring(0, 160),
    keywords: extractKeywords(product.title, product.description),
    createdAt: new Date().toISOString(),
  };
  
  // Guardar como JSON
  const filename = `${slug}.json`;
  const filepath = path.join('src/content/products/padres', filename);
  fs.writeFileSync(filepath, JSON.stringify(newProduct, null, 2));
  
  console.log(`✓ Migrado: ${filename}`);
});

function extractKeywords(title: string, description?: string): string[] {
  // Lógica simple para extraer keywords
  const text = `${title} ${description || ''}`.toLowerCase();
  const words = text.split(/\\s+/)
    .filter(w => w.length > 4)
    .slice(0, 5);
  return [...new Set(words)];
}
```

### Paso 2: Validar productos migrados

Ejecuta el script de validación:

```bash
npm run validate src/content/products/padres/producto-ejemplo.json
```

O valida todos:

```bash
npm run validate:all
```

### Paso 3: Actualizar carga de productos

En lugar de importar desde `constants.ts`, usa el loader:

**Antes:**
```typescript
import { PRODUCTS } from './constants';

const products = PRODUCTS;
```

**Después:**
```typescript
import { ProductLoader } from './src/utils/productLoader';
import { initializeProducts } from './src/data/initProducts';

// Al inicio de la app
initializeProducts();

// Donde necesites los productos
const products = ProductLoader.getAllProducts();
```

### Paso 4: Actualizar componentes

Si tienes componentes que usan los productos directamente:

**Antes:**
```typescript
<ProductCard product={product} />
```

**Después (en páginas con router):**
```typescript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

<ProductCard 
  product={product} 
  onOpen={() => navigate(`/padres/${product.seoCategory}/${product.slug}`)}
/>
```

### Paso 5: Actualizar enlaces

Cambia los enlaces de productos para usar URLs semánticas:

**Antes:**
```typescript
<a href={`/producto/${product.id}`}>Ver producto</a>
```

**Después:**
```typescript
import { generateProductURL } from './src/config/seo-categories';

<a href={generateProductURL('padres', product.seoCategory, product.slug)}>
  Ver producto
</a>
```

## 🔍 Checklist de Migración

- [ ] Migrar productos de `constants.ts` a archivos individuales
- [ ] Asignar categorías SEO a cada producto
- [ ] Validar todos los productos con el script
- [ ] Actualizar `initProducts.ts` para cargar productos reales
- [ ] Actualizar componentes para usar ProductLoader
- [ ] Probar rutas con React Router
- [ ] Generar sitemap.xml
- [ ] Configurar redirects (301) desde URLs antiguas
- [ ] Actualizar enlaces internos
- [ ] Probar todas las páginas de productos

## 🚀 Testing

Después de migrar, prueba:

1. **Página de inicio**: `http://localhost:5173/`
2. **Categoría SEO**: `http://localhost:5173/padres/padres-deportistas`
3. **Producto individual**: `http://localhost:5173/padres/padres-deportistas/reloj-smartwatch-deportivo`

## 📊 Análisis SEO Post-Migración

Después de migrar, usa estas herramientas:

1. **SEMrush**: Analizar rendimiento de URLs nuevas
2. **Google Search Console**: Verificar indexación
3. **Screaming Frog**: Auditar estructura de enlaces
4. **PageSpeed Insights**: Verificar rendimiento

## 🆘 Solución de Problemas

### Problema: "Producto no encontrado"

**Solución**: Verifica que:
- El producto esté registrado en ProductLoader
- El slug sea correcto (minúsculas, sin espacios)
- La categoría SEO exista en `seo-categories.ts`

### Problema: URLs antiguas no funcionan

**Solución**: Implementa redirects 301:

```typescript
// En tu servidor o configuración de Vite
const oldToNew = {
  '/producto/123': '/padres/categoria/slug-producto',
  // ...más redirects
};
```

### Problema: Productos no se cargan

**Solución**: Asegúrate de llamar `initializeProducts()` antes de usar ProductLoader.

## 📈 Beneficios Esperados

Después de la migración completa:

- 📈 **30-50% mejora en SEO** por URLs semánticas
- 🚀 **Mejor indexación** en Google
- 📝 **Gestión más fácil** de contenido
- 🔍 **Mejor experiencia** de usuario
- 📊 **Métricas más claras** por categoría

## 🎓 Recursos Adicionales

- [Documentación completa](./SEO-SYSTEM-README.md)
- [Schema de validación](./src/schemas/product.schema.ts)
- [Categorías SEO](./src/config/seo-categories.ts)
- [Ejemplos de productos](./src/content/products/padres/)

---

**¿Necesitas ayuda?** Revisa los archivos de ejemplo en `src/content/products/padres/` para ver la estructura correcta.
