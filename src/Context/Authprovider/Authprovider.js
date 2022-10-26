import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../../firebase.init'
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const gitHubLogin = (provider) => {
        signInWithPopup(auth, provider)
    }
    

    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loginUser) => {
            setUser(loginUser)
        })
        return () => {
            unsubscribe()
        }
    },[])
    
    

    const authUser = { user, setUser, loading, setLoading, emailLogin, googleProvider, gitHubLogin }
    return (
        
            <AuthContext.Provider value={authUser}>
                {children}
            </AuthContext.Provider>
       
    );
};



export default Authprovider;