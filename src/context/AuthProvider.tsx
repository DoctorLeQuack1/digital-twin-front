// context/AuthProvider.tsx
import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { auth_user } from '../api/auth_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    let authUser = null;

    useEffect(() => {
        const checkAuth = async () => {
            authUser = await auth_user();
        };
        checkAuth();
    }, []);
    const [isAuth, setIsAuth] = useState<boolean | null>(authUser);


    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
};