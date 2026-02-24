# Sistema de Gestión de Contenido SEO

Este documento explica el nuevo sistema de gestión de productos con URLs semánticas implementado en el sitio.

## 📁 Estructura de Archivos

```
src/
├── content/
│   └── products/
│       └── padres/
│           ├── reloj-smartwatch-deportivo.md
│           ├── kit-cerveza-artesanal.json
│           ├── gadget-organizador-escritorio.md
│           └── set-utensilios-barbacoa.json
├── schemas/
│   └── product.schema.ts          # Schema Zod para validación
├── config/
│   └── seo-categories.ts          # 20 categorías SEO configuradas
├── utils/
│   └── productLoader.ts           # Cargador y validador de productos
├── data/
│   └── initProducts.ts            # Inicialización de productos
└── pages/
    ├── ProductPage.tsx            # Página individual de producto
    └── SEOCategoryPage.tsx        # Página de categoría SEO
```

## 🎯 URLs Semánticas

El sistema implementa URLs SEO-friendly siguiendo el patrón:

```
midominio.com/padres/[categoria-seo]/[slug-producto]
```

### Ejemplos de URLs:

- `/padres/padres-deportistas/reloj-smartwatch-deportivo`
- `/padres/padres-cerveceros/kit-cerveza-artesanal`
- `/padres/gadgets-padres/gadget-organizador-escritorio`
- `/padres/padres-cocinitas/set-utensilios-barbacoa`

## 📝 Categorías SEO Configuradas

El sistema incluye 20 categorías SEO optimizadas para padres:

1. **Regalos originales** - `regalos-originales`
2. **Padre que tiene todo** - `padre-que-tiene-todo`
3. **Regalos personalizados** - `regalos-personalizados`
4. **Padres primerizos** - `padres-primerizos`
5. **Padres de 50 años** - `padres-50-anos`
6. **Padres de 60 años** - `padres-60-anos`
7. **Regalos Navidad** - `regalos-navidad`
8. **Padres jubilados** - `padres-jubilados`
9. **Padres deportistas** - `padres-deportistas`
10. **Kits de regalo hombres** - `kits-regalo-hombres`
11. **Padres frikis** - `padres-frikis`
12. **Experiencias** - `experiencias`
13. **Mejores regalos** - `mejores-regalos`
14. **Padres elegantes** - `padres-elegantes`
15. **Padres cerveceros** - `padres-cerveceros`
16. **Gadgets** - `gadgets-padres`
17. **Padres cocinitas** - `padres-cocinitas`
18. **Regalos baratos** - `regalos-baratos`
19. **Última hora** - `ultima-hora`
20. **Manualidades DIY** - `manualidades-diy`

## ✍️ Crear un Nuevo Producto

### Opción 1: Archivo Markdown (.md)

Crea un archivo en `src/content/products/padres/nombre-producto.md`:

```markdown
---
id: 1007
slug: nombre-del-producto
title: Título del Producto Increíble
price: 49.99
oldPrice: 79.99
discount: "-38%"
category: "Regalos para Padres"
categoryId: 2
subcategory: "Deportista"
seoCategory: "padres-deportistas"
image: "https://ejemplo.com/imagen.jpg"
url: "https://www.amazon.es/dp/XXXXX?tag=tusitioweb-21"
tag: "POPULAR"
featured: true
metaTitle: "Título SEO del Producto"
metaDescription: "Descripción meta para SEO"
keywords:
  - palabra clave 1
  - palabra clave 2
  - palabra clave 3
createdAt: "2026-02-17T12:00:00Z"
---

Aquí va la descripción completa del producto en **Markdown**.

## Características

- Característica 1
- Característica 2
- Característica 3

## ¿Por qué comprarlo?

Explicación detallada...
```

### Opción 2: Archivo JSON (.json)

Crea un archivo en `src/content/products/padres/nombre-producto.json`:

```json
{
  "id": 1007,
  "slug": "nombre-del-producto",
  "title": "Título del Producto Increíble",
  "description": "Descripción completa del producto...",
  "price": 49.99,
  "oldPrice": 79.99,
  "discount": "-38%",
  "category": "Regalos para Padres",
  "categoryId": 2,
  "subcategory": "Deportista",
  "seoCategory": "padres-deportistas",
  "image": "https://ejemplo.com/imagen.jpg",
  "url": "https://www.amazon.es/dp/XXXXX?tag=tusitioweb-21",
  "tag": "POPULAR",
  "featured": true,
  "metaTitle": "Título SEO del Producto",
  "metaDescription": "Descripción meta para SEO",
  "keywords": ["palabra1", "palabra2", "palabra3"],
  "createdAt": "2026-02-17T12:00:00Z"
}
```

## 🔍 Validación con Zod

Todos los productos se validan automáticamente usando Zod. Los campos requeridos son:

### Obligatorios:
- `id` (número positivo)
- `slug` (string, formato slug válido)
- `title` (3-200 caracteres)
- `price` (número >= 0)
- `category` (string)
- `categoryId` (número positivo)
- `seoCategory` (debe coincidir con una categoría SEO configurada)
- `image` (URL válida)
- `url` (URL de Amazon válida)

### Opcionales:
- `description`
- `oldPrice`
- `discount`
- `subcategory`
- `tag`
- `featured`
- `metaTitle`
- `metaDescription`
- `keywords`
- `createdAt`
- `updatedAt`

## 🚀 Uso del Sistema

### Cargar Productos

```typescript
import { initializeProducts } from './src/data/initProducts';

// Al iniciar la aplicación
initializeProducts();
```

### Obtener Productos

```typescript
import { ProductLoader } from './src/utils/productLoader';

// Obtener todos los productos
const allProducts = ProductLoader.getAllProducts();

// Obtener por categoría
const padresProducts = ProductLoader.getProductsByCategory(2);

// Obtener por categoría SEO
const deportistaProducts = ProductLoader.getProductsBySEOCategory('padres-deportistas');

// Obtener producto específico
const product = ProductLoader.getProduct(2, 'reloj-smartwatch-deportivo');
```

### Hook React

```typescript
import { useProducts } from './src/utils/productLoader';

function MyComponent() {
  const { products, getProduct, getProductsBySEOCategory } = useProducts();
  
  // Usar productos...
}
```

## 📊 Análisis de Competencia (SEMrush)

Para optimizar el posicionamiento:

1. **Identifica dónde coloca enlaces la competencia**
   - Analiza sitios competidores con SEMrush
   - Identifica oportunidades de backlinks
   - Replica estrategias exitosas

2. **Optimización On-Page**
   - Cada producto tiene sus propios meta tags
   - URLs semánticas para mejor indexación
   - Schema markup para productos (próximamente)

3. **Keywords**
   - Usa el campo `keywords` para cada producto
   - Investiga términos de búsqueda con SEMrush
   - Actualiza basándote en tendencias

## 🔧 Próximos Pasos

1. **Migrar productos existentes** de `constants.ts` al nuevo sistema
2. **Implementar carga dinámica** desde archivos Markdown/JSON
3. **Añadir Schema.org markup** para mejor SEO
4. **Implementar sitemap.xml** dinámico
5. **Añadir breadcrumbs estructurados**
6. **Crear páginas de categoría** optimizadas

## 📈 Beneficios SEO

- ✅ URLs semánticas y descriptivas
- ✅ Estructura de contenido validada
- ✅ Meta tags personalizados por producto
- ✅ Keywords específicos por producto
- ✅ Categorización granular
- ✅ Breadcrumbs optimizados
- ✅ Fácil gestión de contenido

## 🤝 Contribuir

Para añadir nuevos productos o categorías:

1. Crea el archivo Markdown o JSON en la carpeta correspondiente
2. Asegúrate de que cumple con el schema de validación
3. Prueba localmente que la URL funciona correctamente
4. Actualiza este README si añades nuevas categorías SEO

---

**Última actualización**: 17 de febrero de 2026
