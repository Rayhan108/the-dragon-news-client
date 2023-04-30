import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.confiq";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader,setLoader]=useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false)
    });
    return () => {
      return unsubscribe();
    };
  }, []);
// console.log(user);
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };
  const googleLogin = (provider) => {
    setLoader(true)
    return signInWithPopup(auth, provider);
  };
  const updateUserData = (user, name,photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL:photo,
    })
      .then(() => {
        alert("Successfull");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // console.log(user);
  const authInfo = { user, createUser, logout, login, googleLogin, setUser ,updateUserData ,loader};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
