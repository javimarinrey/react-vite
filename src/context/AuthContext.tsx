import {createContext, useContext, useState, type ReactNode} from 'react';
import type {AuthContextType, UserProfile} from "../types/auth.ts";



const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<{
    user: UserProfile | null;
    token: string | null;
  }>(() => {
    const savedUser = localStorage.getItem('user_profile');
    const savedToken = localStorage.getItem('auth_token');

    return {
      user: savedUser ? JSON.parse(savedUser) : null,
      token: savedToken || null,
    };
  });

  const login = (user: UserProfile, token: string) => {
    localStorage.setItem('user_profile', JSON.stringify(user));
    localStorage.setItem('auth_token', token);
    setAuthState({ user, token });
  };

  const logout = () => {
    localStorage.removeItem('user_profile');
    localStorage.removeItem('auth_token');
    setAuthState({ user: null, token: null });
  };

  return (
      <AuthContext.Provider
          value={{
            user: authState.user,
            token: authState.token,
            isAuthenticated: !!authState.token,
            login,
            logout
          }}
      >
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