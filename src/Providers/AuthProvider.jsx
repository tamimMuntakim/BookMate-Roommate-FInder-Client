import React, { createContext, useEffect, useState } from 'react';

import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { app } from '../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateInfo = (name, photo) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
            .then(() => {
                // toast.success("Successfully Updated Prtofile!", {
                //     autoClose: 1500,
                // });
                setLoading(false);
            }).catch(() => {
                // toast.error("Update Failed!", {
                //     autoClose: 1500,
                // });
                setLoading(false);

            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        logIn,
        googleSignIn,
        logOut,
        updateInfo,
        loading,
        setLoading
    };

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;