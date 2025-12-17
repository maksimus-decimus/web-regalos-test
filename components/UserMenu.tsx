import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { logOut } from '../authService';

interface UserMenuProps {
  onOpenAuth: () => void;
}

export default function UserMenu({ onOpenAuth }: UserMenuProps) {
  const { user } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogOut = async () => {
    try {
      await logOut();
      setShowMenu(false);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  if (!user) {
    return (
      <button 
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#28392e] text-white hover:bg-[#344a3b] transition-colors"
        title="Iniciar Sesión"
        onClick={onOpenAuth}
      >
        <span className="material-symbols-outlined text-[20px]">account_circle</span>
      </button>
    );
  }

  return (
    <div className="relative">
      <button 
        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
        title={user.email || 'Usuario'}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="material-symbols-outlined text-[20px]">account_circle</span>
      </button>

      {showMenu && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowMenu(false)}
          />
          <div className="absolute right-0 mt-2 w-64 bg-[#1a2620] rounded-lg shadow-xl border border-[#28392e] overflow-hidden z-50">
            <div className="p-4 border-b border-[#28392e]">
              <p className="text-sm text-gray-400">Conectado como</p>
              <p className="text-white font-medium truncate">{user.email}</p>
            </div>
            <button
              onClick={handleLogOut}
              className="w-full px-4 py-3 text-left text-red-400 hover:bg-[#28392e] transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
              Cerrar Sesión
            </button>
          </div>
        </>
      )}
    </div>
  );
}
