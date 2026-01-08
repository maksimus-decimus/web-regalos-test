import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Encuentra la magia <span className="text-primary">del 2025.</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl">
                Explora nuestras colecciones curadas para cada persona especial en tu vida. Desde gadgets futuristas hasta clásicos atemporales.
            </p>
        </section>
    );
};

export default Hero;