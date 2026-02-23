import React, { useState } from 'react';

interface FooterProps {
    onCategorySelect: (id: number) => void;
    darkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ onCategorySelect, darkMode }) => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (email.includes('@')) {
            setSubscribed(true);
            setTimeout(() => {
                setSubscribed(false);
                setEmail('');
            }, 3000);
        }
    };

    const handleStaticLink = (e: React.MouseEvent) => {
        e.preventDefault();
        alert("Esta sección estará disponible muy pronto.");
    };

    return (
        <footer className="mt-auto border-t border-[#28392e] bg-surface-dark py-10 px-6 w-full">
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
                    <button onClick={() => onCategorySelect(2)} className="text-left text-sm text-gray-400 hover:text-primary transition-colors">Para Papá</button>
                    <button onClick={() => onCategorySelect(3)} className="text-left text-sm text-gray-400 hover:text-primary transition-colors">Para Mamá</button>
                    <button onClick={() => onCategorySelect(4)} className="text-left text-sm text-gray-400 hover:text-primary transition-colors">Niños (Aventura)</button>
                    <button onClick={() => onCategorySelect(5)} className="text-left text-sm text-gray-400 hover:text-primary transition-colors">Niñas (Fantasía)</button>
                    <button onClick={() => onCategorySelect(6)} className="text-left text-sm text-gray-400 hover:text-primary transition-colors">Tecnología</button>
                </div>
                
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-white mb-2">Soporte</h4>
                    <a href="#" onClick={handleStaticLink} className="text-sm text-gray-400 hover:text-primary transition-colors">Centro de Ayuda</a>
                    <a href="#" onClick={handleStaticLink} className="text-sm text-gray-400 hover:text-primary transition-colors">Devoluciones</a>
                    <a href="#" onClick={handleStaticLink} className="text-sm text-gray-400 hover:text-primary transition-colors">Envíos</a>
                </div>
                
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-white mb-2">Suscríbete</h4>
                    <p className="text-sm text-gray-500 mb-2">Recibe las mejores ofertas y tendencias.</p>
                    <div className="flex gap-2">
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-[#28392e] border-none rounded-lg text-sm text-white px-3 py-2 focus:ring-1 focus:ring-primary focus:outline-none" 
                            placeholder="Tu email" 
                        />
                        <button 
                            onClick={handleSubscribe}
                            className="bg-primary text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors"
                        >
                            {subscribed ? 'Listo!' : 'Ok'}
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="mx-auto max-w-[1280px] mt-10 border-t border-[#28392e] pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                <p>© 2025 Regalos Inc. Todos los derechos reservados.</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="#" onClick={handleStaticLink} className="hover:text-gray-400">Privacidad</a>
                    <a href="#" onClick={handleStaticLink} className="hover:text-gray-400">Términos</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;