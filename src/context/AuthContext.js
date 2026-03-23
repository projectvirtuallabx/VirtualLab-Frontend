import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true); // ✅ Track loading state


    useEffect(() => {
        const storedUser = localStorage.getItem('virtualLabUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
           setAuthLoading(false); // ✅ Done loading after localStorage check
        
    }, []);

    const login = (userData) => {
        const userToStore = { email: userData.email, name: userData.name || 'User' };
        localStorage.setItem('virtualLabUser', JSON.stringify(userToStore));
        setUser(userToStore);
    };

    const logout = () => {
        localStorage.removeItem('virtualLabUser');
        setUser(null);
    };

    return React.createElement(AuthContext.Provider, { value: { user, login, logout, authLoading } }, children);

};

export const useAuth = () => {
    return useContext(AuthContext);
};