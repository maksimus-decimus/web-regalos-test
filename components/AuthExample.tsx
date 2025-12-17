import { useState } from 'react';
import { signIn, signUp, signInWithGoogle, logOut } from '../authService';
import { useAuth } from '../AuthContext';

export default function AuthExample() {
  const { user, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      setError('');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      setError('');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      setError('');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (user) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Bienvenido, {user.email}</h2>
        <button onClick={handleLogOut}>Cerrar Sesión</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Autenticación</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <form onSubmit={handleSignIn} style={{ marginBottom: '20px' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <button type="submit" style={{ marginRight: '10px' }}>Iniciar Sesión</button>
        <button type="button" onClick={handleSignUp}>Registrarse</button>
      </form>

      <button onClick={handleGoogleSignIn} style={{ width: '100%', padding: '10px' }}>
        Iniciar con Google
      </button>
    </div>
  );
}
