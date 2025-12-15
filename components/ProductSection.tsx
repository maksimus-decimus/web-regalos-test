import React from 'react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 'p1',
    name: 'Sony Noise Cancelling',
    price: '$249',
    category: 'Audio de alta fidelidad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXldBulLBereMiPOpQAnLu-OAj6olyCFvVM7jcotBgwvXFS-HNRMSwEI8J6fEn-mIxwyWLe15AO64x1PLkI-HGOPAevvo5pMWwyg_EoRb5s8wLGoF9GfWO5cBInONlNIcblbEgxRk1usl550uQ_e8CNu_cS2rm3IKRkftX4qnKr4HJguPgwxPXsGUHS8F4K5UBmMk9FxtjvOubl5qFk6w9lfcG9zRGRpo0vdnSNMREOEd_fpWT4SxmlN4uGh-6Fg9cezH-DSsIjXo',
    isNew: true
  },
  {
    id: 'p2',
    name: 'Oculus Pro 2025',
    price: '$499',
    category: 'Realidad Virtual',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXCtUm34EVzf--NdEeWtXWM2Qx1X8jleHWZ_BwD0xj_9FCqt0mSdZEZGTZ6vJJnrKV49_br_O10P4F4ZvWSNZ5iFKAE_pE4QDiJoyxMpqxF1FPGiMxzTptrJaci1jJHlx2Xs249lFsYGzHr3VEX1RvdIqDgphAMmirg1sSQvMElW9vj2cBVQV9tMHDILnlnljm48VcQn8tZHyG0nYkqrGIElSqAioh7A2BXbn3jSBT5AWOp_gzDBzWP3XOoDW3OdOPm4R6KzBm7uU'
  },
  {
    id: 'p3',
    name: 'Apple Watch Series X',
    price: '$399',
    category: 'Wearables',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAeMsjYk2UAZ17SiCSr2YlLBqOxNuUqZoT7Vhh7em_zAM4sF9zC97rxXVeTUchEGzVAhOfSw4zXIf8NXjYa_Z_jQg4w86DNBWW1_QeKaRFLtvOzQBSi1dL2C2Qt8om21jj5YrM7znhPD0rNJObQmB6INA6R-YdmuHh8HebLeOfxcUC4EO1fpDrtU8TMX1xEA_VSyP3ASLeHib8iK-UvspjOuNgWjvJaRmK0gxEA-rcp8fcet4UP3iNON30jumn5mQ0Q23mdLu7sms'
  },
  {
    id: 'p4',
    name: 'Google Nest Audio',
    price: '$79',
    category: 'Hogar Inteligente',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC441lD7ahExAoWYqgXKVvGap75jNgW62OV9M5E2SFnkAyXzbDiaqMKKetk75Mkcilg-JP7hyifM__q8Wtpd3bTqd-Kx2KAzgMgsbzlYdsP8Y-EQyR4znlfbADzZfpWr2WOm7Cisok4VVfeHkJV_6kSRlElKdiWzvMqgCe1toF3e-lOkuD8__kjKBJeOjqsHKUmM8EagOb9A7DqE7fKhMW3InNY2BRKNnNDNnH7LMYv0-kotCLL5oHHuJzJ9S5L1Nd0IBISoVLQ3Kk',
    discount: '-20%'
  },
  {
    id: 'p5',
    name: 'Polaroid Now+',
    price: '$149',
    category: 'Fotografía',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_FKhR0cZ3xIvU7rWM9N-QWo6g1abXZMy4r3aTK6c6nKsgRCMuf1RWXwt7zsIALlK3iJXWQcoCHg16vIQMMfpOIeo10OL7_w6eP1UN6Y590tWYPEBk2DhbW5fE5GSYxEIer2aueLzLezpAzc4mw590E8hFZSFFnIpR0aelDgIsvjb8gI8lm61YrBbISvhsbMaDXNT4U7DKRsRQoPJhEnYSKqT04aaaq95KbP6QYJitEpz3RkIPgz3GnAzZcspswi7lKqimr21jhSs'
  }
];

export const ProductSection: React.FC = () => {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold text-white mb-2">Te puede interesar...</h2>
      <p className="text-gray-400 mb-6 text-sm">Basado en tus últimas búsquedas de tecnología y hogar.</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col gap-3 cursor-pointer">
            <div className="relative aspect-square w-full rounded-2xl bg-surface-dark overflow-hidden">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={product.image}
                alt={product.name}
              />
              <button className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-primary text-black flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 shadow-lg z-10">
                <span className="material-symbols-outlined text-[20px]">add</span>
              </button>
              
              {product.isNew && (
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-white">
                  Nuevo
                </div>
              )}
              
              {product.discount && (
                <div className="absolute top-3 left-3 bg-primary text-black px-2 py-1 rounded-lg text-xs font-bold">
                  {product.discount}
                </div>
              )}
            </div>
            
            <div>
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-medium text-white group-hover:text-primary transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <span className="font-bold text-white whitespace-nowrap">{product.price}</span>
              </div>
              <p className="text-sm text-gray-500 line-clamp-1">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};