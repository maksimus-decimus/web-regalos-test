import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col gap-2 pt-4">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white animate-in slide-in-from-bottom-4 duration-700 fade-in">
        Encuentra la magia <span className="text-primary">del 2025.</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl animate-in slide-in-from-bottom-5 duration-700 delay-100 fade-in">
        Explora nuestras colecciones curadas para cada persona especial en tu vida. Desde gadgets futuristas hasta clásicos atemporales.
      </p>
    </section>
  );
};