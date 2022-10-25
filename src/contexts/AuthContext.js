import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Sign in
    const googleSignIn = provider => {
        return signInWithPopup(auth, provider);
    }

    // Github Sign in
    const githubSignIn = provider => {
        return signInWithPopup(auth, provider);
    }

    // Update User information
    const updateUser = profile => {
        return updateProfile(auth.currentUser, profile);
    }

    // Log out user
    const logOut = () => {
        return signOut(auth);
    }


    const authInfo = {
        user,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        updateUser,
        logOut,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;