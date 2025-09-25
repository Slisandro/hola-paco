import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Definimos el tipo de nuestro contexto
interface AuthContextType {
    isSignedIn: boolean | null;
    isFirstLaunch: boolean | null;
}

// Creamos el contexto. El valor inicial es null.
const AuthContext = createContext<AuthContextType | null>(null);

// Un hook personalizado para usar el contexto fácilmente
export const useAuth = () => {
    return useContext(AuthContext);
};

// El componente proveedor que envolverá nuestra app
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [authStatus, setAuthStatus] = useState<AuthContextType>({
        isSignedIn: null,
        isFirstLaunch: null,
    });

    useEffect(() => {
        const checkState = async () => {
            try {
                const seenOnboarding = await AsyncStorage.getItem("seenOnboarding");
                const authToken = await AsyncStorage.getItem("authToken");
                setAuthStatus({
                    isSignedIn: true,
                    isFirstLaunch: true,
                });
            } catch (error) {
                console.error("Error checking auth state:", error);
                setAuthStatus({
                    isSignedIn: false,
                    isFirstLaunch: false,
                });
            }
        };
        checkState();
    }, []);

    return (
        <AuthContext.Provider value={authStatus}>
            {children}
        </AuthContext.Provider>
    );
}
