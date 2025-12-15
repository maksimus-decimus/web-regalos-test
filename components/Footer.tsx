import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-[#28392e] bg-surface-dark py-10 px-6">
      <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white">
            <span className="material-symbols-outlined text-primary">redeem</span>
            <span className="font-bold">Regalos 2025</span>
          </div>
          <p className="text-sm text-gray-500">
            La mejor plataforma para encontrar el regalo perfecto en 2025. Curado por expertos y potenciado por IA.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-white mb-2">Comprar</h4>
          {['Para Él', 'Para Ella', 'Niños y Bebés', 'Tecnología'].map((link) => (
            <a key={link} className="text-sm text-gray-400 hover:text-primary transition-colors" href="#">
              {link}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-white mb-2">Soporte</h4>
          {['Centro de Ayuda', 'Devoluciones', 'Envíos'].map((link) => (
            <a key={link} className="text-sm text-gray-400 hover:text-primary transition-colors" href="#">
              {link}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-white mb-2">Suscríbete</h4>
          <p className="text-sm text-gray-500 mb-2">Recibe las mejores ofertas y tendencias.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              className="flex-1 bg-[#28392e] border-none rounded-lg text-sm text-white px-3 py-2 focus:ring-1 focus:ring-primary outline-none transition-shadow"
              placeholder="Tu email"
              type="email"
            />
            <button className="bg-primary text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">
              Ok
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] mt-10 border-t border-[#28392e] pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
        <p>© 2025 Regalos Inc. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a className="hover:text-gray-400 transition-colors" href="#">Privacidad</a>
          <a className="hover:text-gray-400 transition-colors" href="#">Términos</a>
        </div>
      </div>
    </footer>
  );
};