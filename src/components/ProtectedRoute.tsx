// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
  }
  
  export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem('JWT');



  console.log(`Your auth token is: ${token}`);
  if (!token) {
    return <Navigate to="/404" replace />;
  }

  return children;
};

