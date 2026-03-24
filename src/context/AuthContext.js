import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, googleProvider } from '@/lib/firebase';
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true); // ✅ Track loading state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const userData = {
                    email: currentUser.email,
                    name: currentUser.displayName || currentUser.email.split('@')[0]
                };
                setUser(userData);
                localStorage.setItem('virtualLabUser', JSON.stringify(userData));
            } else {
                setUser(null);
                localStorage.removeItem('virtualLabUser');
            }
            setAuthLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // ✅ Email login
    const login = async (email, password) => {
        const res = await signInWithEmailAndPassword(auth, email, password);
        return res.user;
    };

    // ✅ Register
    const register = async (email, password) => {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        return res.user;
    };

    // ✅ Google Login
    const googleLogin = async () => {
        const res = await signInWithPopup(auth, googleProvider);
        return res.user;
    };

    const logout = async () => {
        await signOut(auth);
        localStorage.removeItem('virtualLabUser');
        setUser(null);
    };

    // ✅ Forgot Password
const resetPassword = async (email) => {
    return await sendPasswordResetEmail(auth, email);
};

    return React.createElement(
        AuthContext.Provider,
        { value: { user, login, register, googleLogin, logout, authLoading, resetPassword  } },
        children
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};