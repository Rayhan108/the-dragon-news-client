import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.confiq';
export const  AuthContext = createContext(null)

const auth = getAuth(app);
const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null)
  
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
    })
    return ()=>{
        return unsubscribe();
    }
},[])

const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
const login =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}
const logout=()=>{
    return signOut(auth)
}
const authInfo = {user,createUser,logout,login};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;