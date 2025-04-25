import { createContext, useState, useContext, useEffect } from 'react';
import { auth_user } from '../api/auth_user';

// Define el tipo del contexto
interface AuthContextType {
    isAuth: boolean; // Cambia `{}` por `boolean` si `isAuth` es un valor booleano
    setIsAuth: (value: boolean) => void; // Tipo de la función para actualizar el estado
    isLoading: boolean; // Cambia `{}` por `boolean` si `isAuth` es un valor booleano
    setIsLoading: (value: boolean) => void; // Tipo de la función para actualizar el estado

}

// Crea el contexto con el tipo definido y un valor por defecto opcional
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor del contexto (ya está correctamente tipado)
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true); // Inicialmente en "carga" 

    // Simula una verificación inicial (ej: revisar un token en localStorage)
    useEffect(() => {
        const checkAuth = async () => {
            // ⏳ Retraso artificial de 1 segundo (ajustable)
            setIsAuth(await auth_user());
            setIsLoading(false); // Finaliza la carga
        };
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading, setIsLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar el contexto (evita repetir `useContext(AuthContext)` y la verificación de `undefined`)
const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de un AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };