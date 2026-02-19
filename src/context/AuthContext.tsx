import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  user: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Inicializamos buscando si ya hay un token (para que no se desloguee al refrescar)
  const [user, setUser] = useState<string | null>(localStorage.getItem('token'));

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setUser(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto fácilmente
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe usarse dentro de un AuthProvider');
  return context;
};