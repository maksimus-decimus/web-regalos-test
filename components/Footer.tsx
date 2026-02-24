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
        <footer className={`mt-auto border-t py-10 px-6 w-full ${
            darkMode 
                ? 'border-[#28392e] bg-surface-dark' 
                : 'border-gray-200 bg-gray-50'
        }`}>
            <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col gap-4">
                    <div className={`flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        <span className="material-symbols-outlined text-primary">redeem</span>
                        <span className="font-bold">Regalos 2025</span>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                        La mejor plataforma para encontrar el regalo perfecto en 2025. Curado por expertos y potenciado por IA.
                    </p>
                </div>
                
                <div className="flex flex-col gap-2">
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Comprar</h4>
                    <button onClick={() => onCategorySelect(2)} className={`text-left text-sm transition-colors ${
                        darkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'
                    }`}>Para Papá</button>
                    <button onClick={() => onCategorySelect(3)} className={`text-left text-sm transition-colors ${
                        darkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'
                    }`}>Para Mamá</button>
                    <button onClick={() => onCategorySelect(4)} className={`text-left text-sm transition-colors ${
                        darkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'
                    }`}>Niños (Aventura)</button>
                    <button onClick={() => onCategorySelect(5)} className={`text-left text-sm transition-colors ${
                        darkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'
                    }`}>Niñas (Fantasía)</button>
                    <button onClick={() => onCategorySelect(6)} className={`text-left text-sm transition-colors ${
                        darkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'
                    }`}>Tecnología</button>
                </div>
                
                <div className="flex flex-col gap-2">
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Soporte</h4>
                    <a href="#" onClick={handleStaticLink} className={`text-sm transition-colors ${
                        darkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'
                    }`}>Centro de Ayuda</a>
                    <a href="#" onClick={handleStaticLink} className={`text-sm transition-colors ${
                        darkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'
                    }`}>Devoluciones</a>
                    <a href="#" onClick={handleStaticLink} className={`text-sm transition-colors ${
                        darkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'
                    }`}>Envíos</a>
                </div>
                
                <div className="flex flex-col gap-2">
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Suscríbete</h4>
                    <p className={`text-sm mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>Recibe las mejores ofertas y tendencias.</p>
                    <div className="flex gap-2">
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`flex-1 border-none rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-primary focus:outline-none ${
                                darkMode 
                                    ? 'bg-[#28392e] text-white placeholder-gray-500' 
                                    : 'bg-white text-gray-900 placeholder-gray-400 border border-gray-300'
                            }`}
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
            
            <div className={`mx-auto max-w-[1280px] mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-xs ${
                darkMode 
                    ? 'border-[#28392e] text-gray-600' 
                    : 'border-gray-200 text-gray-500'
            }`}>
                <p>© 2025 Regalos Inc. Todos los derechos reservados.</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="#" onClick={handleStaticLink} className={`transition-colors ${
                        darkMode ? 'hover:text-gray-400' : 'hover:text-gray-700'
                    }`}>Privacidad</a>
                    <a href="#" onClick={handleStaticLink} className={`transition-colors ${
                        darkMode ? 'hover:text-gray-400' : 'hover:text-gray-700'
                    }`}>Términos</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;