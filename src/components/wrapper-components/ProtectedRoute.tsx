// components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useAuth } from '../../context/AuthProvider';


interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuth } = useAuth();

    if (!isAuth) {
      return <Navigate to="/login" replace />;
    }
  
    return <>{children}</>;
  };