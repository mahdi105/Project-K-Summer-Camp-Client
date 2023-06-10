import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import axios from 'axios';

// Authentication Methods distributed through authContext entire application
export const authContext = createContext();

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User with Email and Password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login User with Email and Password
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Logout
    const logOut = ()=> {
        setLoading(true);
        return signOut(auth);
    } 

    // Google Sign In
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Get current user login status
    useEffect(()=>{
        const cleanup = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser && currentUser.email){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data => {
                    localStorage.setItem('access_token', data.token);
                    setLoading(false)
                })
                .catch(error => alert(`I'm not able to load JWT TOken (at onAuthStateChanged). Error: ${error.message}`))
            }
            else {
                localStorage.removeItem('access_token');
                setLoading(false);
            }
        });
        return ()=>{
            cleanup();
        }
    },[])
    const authInfo = {
        loading,
        user,
        createUser, 
        logIn,
        logOut,
        googleSignIn
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;