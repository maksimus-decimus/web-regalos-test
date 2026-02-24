# 🚀 Inicio Rápido - Sistema SEO

## ⚡ En 5 minutos

### 1. Inicia el servidor
```bash
npm run dev
```

### 2. Prueba las URLs SEO

Abre tu navegador en:
- http://localhost:5173/padres/padres-deportistas/reloj-smartwatch-deportivo
- http://localhost:5173/padres/padres-cerveceros/kit-cerveza-artesanal

### 3. Añade tu primer producto

Crea `src/content/products/padres/mi-producto.json`:

```json
{
  "id": 2000,
  "slug": "mi-primer-producto",
  "title": "Mi Primer Producto Increíble",
  "description": "Una descripción atractiva del producto",
  "price": 39.99,
  "category": "Regalos para Padres",
  "categoryId": 2,
  "seoCategory": "mejores-regalos",
  "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  "url": "https://www.amazon.es/dp/REEMPLAZA?tag=tu-tag-21",
  "featured": true
}
```

### 4. Registra el producto

Edita `src/data/initProducts.ts` y añade tu producto al array `SAMPLE_PRODUCTS`.

### 5. Valida

```bash
npm run validate src/content/products/padres/mi-producto.json
```

### 6. Reinicia el servidor

```bash
# Ctrl+C para detener
npm run dev
```

### 7. Visita tu producto

http://localhost:5173/padres/mejores-regalos/mi-primer-producto

---

## 📋 Categorías SEO Disponibles

Usa cualquiera de estas en el campo `seoCategory`:

| Categoría | Slug |
|-----------|------|
| Regalos originales | `regalos-originales` |
| Padre que tiene todo | `padre-que-tiene-todo` |
| Personalizados | `regalos-personalizados` |
| Padres primerizos | `padres-primerizos` |
| 50 años | `padres-50-anos` |
| 60 años | `padres-60-anos` |
| Navidad | `regalos-navidad` |
| Jubilados | `padres-jubilados` |
| Deportistas | `padres-deportistas` |
| Kits regalo | `kits-regalo-hombres` |
| Frikis | `padres-frikis` |
| Experiencias | `experiencias` |
| Mejores regalos | `mejores-regalos` |
| Elegantes | `padres-elegantes` |
| Cerveceros | `padres-cerveceros` |
| Gadgets | `gadgets-padres` |
| Cocinitas | `padres-cocinitas` |
| Baratos | `regalos-baratos` |
| Última hora | `ultima-hora` |
| DIY | `manualidades-diy` |

---

## 🎯 Campos Obligatorios

Estos campos son **requeridos** en cada producto:

```json
{
  "id": 1234,                    // Número único
  "slug": "nombre-producto",     // Solo minúsculas y guiones
  "title": "Título del Producto",
  "price": 49.99,
  "category": "Regalos para Padres",
  "categoryId": 2,
  "seoCategory": "mejores-regalos",  // Debe existir en la lista
  "image": "https://...",        // URL completa
  "url": "https://amazon.es/..."  // URL de afiliado
}
```

---

## ✨ Campos Opcionales (Recomendados para SEO)

```json
{
  "description": "Descripción larga del producto",
  "oldPrice": 79.99,
  "discount": "-38%",
  "subcategory": "Deportista",
  "tag": "POPULAR",
  "featured": true,
  "metaTitle": "Título SEO",
  "metaDescription": "Descripción meta para Google",
  "keywords": ["palabra1", "palabra2"]
}
```

---

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Validar un producto
npm run validate src/content/products/padres/producto.json

# Build para producción
npm run build
```

---

## 📚 Documentación Completa

- **Sistema completo**: [SEO-SYSTEM-README.md](./SEO-SYSTEM-README.md)
- **Migración**: [MIGRATION-GUIDE.md](./MIGRATION-GUIDE.md)
- **Resumen**: [IMPLEMENTACION-RESUMEN.md](./IMPLEMENTACION-RESUMEN.md)

---

## 🎓 Ejemplos

Revisa estos archivos para ver productos completos:

- `src/content/products/padres/reloj-smartwatch-deportivo.md` (Markdown)
- `src/content/products/padres/kit-cerveza-artesanal.json` (JSON)

---

## 🆘 Problema: "Producto no se muestra"

1. ¿Registraste el producto en `src/data/initProducts.ts`?
2. ¿El slug es válido? (minúsculas, sin espacios)
3. ¿La categoría SEO existe?
4. ¿Reiniciaste el servidor después de añadirlo?

---

**¡Listo para empezar! 🚀**
