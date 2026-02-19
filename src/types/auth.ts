export interface UserProfile {
    id: string;
    email: string;
    name?: string;
    role: 'admin' | 'user';
}

export interface AuthState {
    profile: UserProfile | null;
    token: string | null;
}

export interface User {
    id: string;
    email: string;
    token: string;
}

export interface AuthContextType {
    user: UserProfile | null;
    token: string | null;
    login: (user: UserProfile, token: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}