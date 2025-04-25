// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { ReactNode, useState, useEffect } from 'react';
import { auth_user } from '../api/auth_user';

interface ProtectedRouteProps {
    children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

    const [isAuth, setIsAuth] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            const result = await auth_user();
            setIsAuth(result);
        };
        checkAuth();
    }, []);

    // Mostrar una pantalla de carga opcional
    if (isAuth === null) {
        return <div>Cargando...</div>; // o spinner
    }

    if (!isAuth) {
        return <Navigate to="/404" replace />;
    }

    return children;
};

