// providers/CombinedProviders.tsx
import { ReactNode } from 'react';
import { AuthProvider } from './AuthProvider';


export const CombinedProviders = ({ children }: { children: ReactNode }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};