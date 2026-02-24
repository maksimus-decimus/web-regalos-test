const fs = require('fs');

const categories = ['padres', 'madres', 'ninas'];
let totalFeatured = 0;
let totalProducts = 0;

categories.forEach(cat => {
  const filePath = `src/data/productos-${cat}.json`;
  const products = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const featured = products.filter(p => p.featured);
  
  console.log(`${cat.padEnd(10)}: ${featured.length}/${products.length} destacados`);
  totalFeatured += featured.length;
  totalProducts += products.length;
});

console.log(`${'='.repeat(40)}`);
console.log(`Total: ${totalFeatured}/${totalProducts} productos destacados`);
console.log(`Porcentaje: ${((totalFeatured/totalProducts)*100).toFixed(1)}%`);
