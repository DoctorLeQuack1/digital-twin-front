import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useAuth } from '../../context/AuthProvider';
import { Spinner } from 'flowbite-react';

interface RedirectionRouteProps {
    children: ReactNode;
    redirectTo: string; // Nuevo argumento string
}

export const RedirectionRoute: React.FC<RedirectionRouteProps> = ({ children, redirectTo }) => {

    const { isAuth, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="smooth-loader">
                <Spinner aria-label="Default status example" />
            </div>
        );
    }

    if (isAuth) {
        return <Navigate to={redirectTo} replace />;
    }

    return children;
};