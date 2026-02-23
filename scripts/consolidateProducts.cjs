const fs = require('fs');
const path = require('path');

// Consolidar productos por categoría
const categories = ['padres', 'madres', 'ninas'];

categories.forEach(cat => {
  const dir = path.join('src/content/products', cat);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  
  const products = files.map(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf-8');
    return JSON.parse(content);
  });
  
  const outputPath = `src/data/productos-${cat}.json`;
  fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));
  
  console.log(`✅ ${cat}: ${products.length} productos → ${outputPath}`);
});

console.log('\n✅ Consolidación completa');
