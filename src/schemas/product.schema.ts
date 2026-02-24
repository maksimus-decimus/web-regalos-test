import { z } from 'zod';

/**
 * Schema de validación para productos
 * Define la estructura y validaciones para cada producto
 */
export const ProductSchema = z.object({
  // Identificadores
  id: z.number().positive('El ID debe ser un número positivo'),
  slug: z.string().min(1, 'El slug es requerido').regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'El slug debe ser válido (solo minúsculas, números y guiones)'),
  
  // Información básica
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres').max(200, 'El título no puede exceder 200 caracteres'),
  description: z.string().optional(),
  
  // Precio
  price: z.number().nonnegative('El precio debe ser mayor o igual a 0'),
  oldPrice: z.number().optional(),
  discount: z.string().optional(),
  
  // Categorización
  category: z.string().min(1, 'La categoría es requerida'),
  categoryId: z.number().positive('El categoryId debe ser un número positivo'),
  subcategory: z.string().optional(),
  seoCategory: z.string().min(1, 'La categoría SEO es requerida'),
  
  // Media
  image: z.string().min(1, 'La imagen es requerida').refine(
    (val) => val.startsWith('http://') || val.startsWith('https://') || val.startsWith('/'),
    'La imagen debe ser una URL válida o una ruta válida'
  ),
  
  // Enlace afiliado
  url: z.string().url('La URL de Amazon debe ser válida'),
  
  // Etiquetas y destacados
  tag: z.string().optional(),
  featured: z.boolean().default(false),
  
  // Metadatos SEO
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  
  // Fechas
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

export type Product = z.infer<typeof ProductSchema>;

/**
 * Schema para archivos Markdown de productos
 */
export const ProductMarkdownSchema = z.object({
  frontmatter: ProductSchema.omit({ id: true }).extend({
    id: z.number().optional(), // ID opcional en markdown, se generará si no existe
  }),
  content: z.string(), // Contenido markdown del producto
});

export type ProductMarkdown = z.infer<typeof ProductMarkdownSchema>;
