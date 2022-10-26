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
    const [loader, setLoader] = useState(true);

    // Create user
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in user
    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Sign in
    const googleSignIn = provider => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }

    // Github Sign in
    const githubSignIn = provider => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }

    // Update User information
    const updateUser = profile => {
        setLoader(true);
        return updateProfile(auth.currentUser, profile);
    }

    // Log out user
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }


    const authInfo = {
        user,
        loader,
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
            setLoader(false);
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