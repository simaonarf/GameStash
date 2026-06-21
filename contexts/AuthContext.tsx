import * as SecureStore from "expo-secure-store";
import React, { createContext, useContext, useEffect, useState } from "react";
import UserRepository, { User } from "../src/database/UserRepository";

type AuthContextType = {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const SESSION_KEY = "session_user_id";
const userRepository = new UserRepository();

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        restoreSession();
    }, []);

    const restoreSession = async () => {
        try {
            const savedId = await SecureStore.getItemAsync(SESSION_KEY);
            if (savedId) {
                const allUsers = await userRepository.all();
                const found = allUsers.find((u) => u.id === Number(savedId));
                if (found) setUser(found);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        const authenticated = await userRepository.authenticate(email, password);

        if (!authenticated) {
            return { success: false, error: "Email ou senha incorretos." };
        }

        await SecureStore.setItemAsync(SESSION_KEY, String(authenticated.id));
        setUser(authenticated);
        return { success: true };
    };

    const logout = async () => {
        await SecureStore.deleteItemAsync(SESSION_KEY);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth deve ser usado dentro de AuthProvider");
    return context;
}